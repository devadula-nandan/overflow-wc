import { LitElement, html, css, TemplateResult, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { createRef, ref, type Ref } from "lit/directives/ref.js";

type Item = { label?: string; _width?: number; [key: string]: any };

export class OverflowWc extends LitElement {
  private itemRefs: Ref<HTMLElement>[] = [];
  private resizeObserver: ResizeObserver | null = null;
  private resizeTimeout: number | undefined;

  @state()
  private measuredWidths: number[] = [];

  @state()
  private measured = false;

  @state()
  private visibleCount = 0;

  static styles = css`
    :host {
      display: block;
    }
    .hidden-measure {
      position: absolute;
      visibility: hidden;
      pointer-events: none;
      height: 0;
      overflow: hidden;
      white-space: nowrap;
    }
  `;

  @property({ type: Array })
  items: Item[] = [];

  @property({ attribute: false })
  renderer: ((item: any, index: number) => TemplateResult) | null = null;

  async firstUpdated() {
    // Initialize refs
    this.ensureRefs();

    // Measure items in hidden container
    await this.measureAllItems();

    // Observe container resize
    if (!this.resizeObserver) {
      this.resizeObserver = new ResizeObserver(() => this.onContainerResize());
      this.resizeObserver.observe(this.parentElement || this);
    }
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("items")) {
      this.measured = false;
      this.ensureRefs();
      this.updateComplete.then(() => this.measureAllItems());
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
  }

  private ensureRefs() {
    this.items.forEach((_, i) => {
      if (!this.itemRefs[i]) this.itemRefs[i] = createRef<HTMLElement>();
    });
  }

  private async measureAllItems() {
    // Wait for DOM to render hidden measurement container
    await this.updateComplete;

    const widths: number[] = [];
    this.items.forEach((_, i) => {
      const el = this.itemRefs[i]?.value;
      widths[i] = el ? el.getBoundingClientRect().width : 0;
    });

    this.measuredWidths = widths;
    this.measured = true;

    this.computeVisibleForCurrentWidth();
  }

  private onContainerResize() {
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);

    this.resizeTimeout = window.setTimeout(() => {
      this.computeVisibleForCurrentWidth();
      this.resizeTimeout = undefined;
    }, 50);
  }

  private computeVisibleForCurrentWidth() {
    const containerWidth = this.parentElement?.clientWidth || 0;
    let sum = 0;
    let count = 0;

    for (let i = 0; i < this.measuredWidths.length; i++) {
      const w = this.measuredWidths[i] || 0;
      if (sum + w <= containerWidth) {
        sum += w;
        count++;
      } else {
        break;
      }
    }

    if (count !== this.visibleCount) {
      this.visibleCount = count;
    }
  }

  render() {
    if (!this.renderer) {
      return html`<div>No renderer provided</div>`;
    }

    // During measurement phase: render all items in hidden offscreen container
    if (!this.measured) {
      return html`
        <div class="hidden-measure">
          ${this.items.map(
            (item, index) => html`<span ${ref(this.itemRefs[index])}>
              ${this.renderer!(item, index)}
            </span>`
          )}
        </div>
      `;
    }

    if (this.visibleCount === 0) {
      return nothing;
    }

    // Render only visible items
    const toRender = this.items.slice(0, this.visibleCount);
    return html`${toRender.map(
      (item, index) => html`<span> ${this.renderer!(item, index)} </span>`
    )}`;
  }
}

customElements.define("overflow-wc", OverflowWc);

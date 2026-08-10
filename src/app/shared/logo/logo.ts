import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      viewBox="0 0 220 90"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="HeyTalent"
      [style.width.px]="width()"
    >
      <rect width="220" height="90" [attr.rx]="radius()" fill="#6B63D4" />
      <ellipse cx="110" cy="52" rx="88" ry="30" fill="white" />
      <ellipse cx="62" cy="32" rx="20" ry="18" fill="white" />
      <ellipse cx="158" cy="34" rx="16" ry="14" fill="white" />
      <circle cx="76" cy="20" r="7" fill="white" />
      <circle cx="148" cy="22" r="5" fill="white" />
      <circle cx="188" cy="62" r="8" fill="white" />
      <text
        x="110"
        y="62"
        text-anchor="middle"
        font-family="'Nunito', system-ui, sans-serif"
        font-size="28"
        font-weight="900"
        fill="#6B63D4"
        letter-spacing="-0.5"
      >
        HeyTalent
      </text>
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
    }

    svg {
      height: auto;
      display: block;
    }
  `,
})
export class Logo {
  readonly width = input(110);
  readonly radius = input(16);
}

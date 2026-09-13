import { TestBed } from '@angular/core/testing';
import { Home } from './home';

describe('Home', () => {
  beforeEach(async () => {
    // El reveal-on-scroll de About usa IntersectionObserver, ausente en el entorno de test.
    globalThis.IntersectionObserver ??= class {
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    } as unknown as typeof IntersectionObserver;

    await TestBed.configureTestingModule({ imports: [Home] }).compileComponents();
  });

  it('should render the hero headline', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('h1') as HTMLElement;
    expect(h1.textContent).toContain('Hey Talent: tu red para conseguir el trabajo que quieres');
  });

  it('should not render the header or footer (the shell owns them)', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('app-site-header')).toBeNull();
    expect(el.querySelector('app-site-footer')).toBeNull();
  });
});

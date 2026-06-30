import * as gsapModule from 'gsap';
import * as scrollTriggerModule from 'gsap/ScrollTrigger';

export const gsap: any =
  ('gsap' in gsapModule ? gsapModule.gsap : undefined) ??
  ('default' in gsapModule ? gsapModule.default : undefined) ??
  gsapModule;

export const ScrollTrigger: any =
  ('ScrollTrigger' in scrollTriggerModule ? scrollTriggerModule.ScrollTrigger : undefined) ??
  ('default' in scrollTriggerModule ? scrollTriggerModule.default : undefined) ??
  scrollTriggerModule;

let scrollTriggerRegistered = false;

export function registerScrollTrigger() {
  if (scrollTriggerRegistered || typeof window === 'undefined') {
    return;
  }

  if (typeof gsap?.registerPlugin !== 'function' || !ScrollTrigger) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  scrollTriggerRegistered = true;
}

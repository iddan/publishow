/**
 * origin: https://stackoverflow.com/questions/10614481/disable-double-tap-zoom-option-in-browser-on-touch-devices
 */
export default function noDoubleZoom(element: HTMLElement) {
  let lastTouch : number;
  element.addEventListener('touchstart', (e: TouchEvent) => {
    const t2 = e.timeStamp;
    const t1 = lastTouch || t2;
    const dt = t2 - t1;
    const fingers = e.touches.length;
    lastTouch = t2;
    if (dt && dt < 500 && fingers === 1) {
      e.preventDefault(); // double tap - prevent the zoom
      // also synthesize click events we just swallowed up
      element.click();
    }
  });
}

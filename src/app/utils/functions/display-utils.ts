import { DeviceModes } from 'utils/enums/device-modes.enum';

export function getPWADisplayMode(): DeviceModes {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  const isFullscreen = window.matchMedia('(display-mode: fullscreen)').matches;
  const isTwa = document.referrer.startsWith('android-app://');

  return isTwa
    ? DeviceModes.twa
    : isStandalone
    ? DeviceModes.standalone
    : isFullscreen
    ? DeviceModes.fullscreen
    : DeviceModes.browser;
}

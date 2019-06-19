declare class NoSleep {
  constructor();

  enable(): void;

  disable(): void;

  private _addSourceToVideo(element: HTMLVideoElement, type: string, dataURI: string): void;
}

declare global {
  interface Window {
    NoSleep: typeof NoSleep;
  }
}

export default NoSleep;

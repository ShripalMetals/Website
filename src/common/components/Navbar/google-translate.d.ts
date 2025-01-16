declare global {
  interface Window {
    loadGoogleTranslate: () => void;
    google: {
      translate: {
        TranslateElement: new (options: any, element: HTMLElement) => void;
      };
    };
  }
}

export {};  // Ensure the file is treated as a module

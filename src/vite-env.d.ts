/// <reference types="vite/client" />

// Google Maps types
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export {};

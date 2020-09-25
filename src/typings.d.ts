declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';

declare const REACT_APP_BUILD_ENV: 'qa' | 'dev' | 'pre' | 'pro' | false;

declare global {
  interface Window {
    signalRConection: () => void;
  }
}

export interface Window {
  signalRConection: {
    receiveWeight: () => void;
  };
}

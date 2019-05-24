import { Observable } from 'tns-core-modules/data/observable';
export declare function initWechatSdk(wechatAppId: any): void;
export declare class WechatLogin extends Observable {
  constructor();
  doLogin(state?: string): boolean;
  isWechatInstalled(): boolean;
}

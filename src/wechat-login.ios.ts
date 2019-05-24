import { Observable } from 'tns-core-modules/data/observable';
import * as app from "tns-core-modules/application";

const setupAppDeligate = require('./getappdelegate').setupAppDeligate;

export function initWechatSdk(wechatAppId) {
    setupAppDeligate(wechatAppId);
}

export class WechatLogin extends Observable {

    constructor() {
        super();
    }

    /**
     * doLogin
     */
    public doLogin(state = '') {

        let req = SendAuthReq.alloc();
        req.scope = "snsapi_userinfo";

        if (state !== '') {
            req.state = state;
        }

        WXApi.sendReq(req);
    }

    /**
     * isWechatInstalled
     */
    public isWechatInstalled() {
        return WXApi.isWXAppInstalled();
    }
}

import { Observable } from 'tns-core-modules/data/observable';
import * as app from "tns-core-modules/application";
import * as appSettings from "tns-core-modules/application-settings";

export function initWechatSdk(wechatAppId) {
    appSettings.setString("WECHAT_APP_ID", wechatAppId);
    com.tencent.mm.opensdk.openapi.WXAPIFactory.createWXAPI(app.android.context, wechatAppId, false);
}

export class WechatLogin extends Observable {

    private api: com.tencent.mm.opensdk.openapi.IWXAPI;

    constructor() {
        super();
        app.off("wxApiResponse");
        let appID = appSettings.getString("WECHAT_APP_ID");
        this.api = com.tencent.mm.opensdk.openapi.WXAPIFactory.createWXAPI(app.android.context, appID, false);
    }

    /**
     * doLogin
     */
    public doLogin(state = '') {

        let req = new com.tencent.mm.opensdk.modelmsg.SendAuth.Req();
        req.scope = "snsapi_userinfo";

        if (state !== '') {
            req.state = state;
        }

        return this.api.sendReq(req);
    }

    /**
     * isWechatInstalled
     */
    public isWechatInstalled() {
        return this.api.isWXAppInstalled();
    }
}

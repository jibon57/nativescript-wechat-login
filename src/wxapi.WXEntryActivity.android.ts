import { setActivityCallbacks, AndroidActivityCallbacks } from "tns-core-modules/ui/frame";
import * as app from "tns-core-modules/application";
import { AndroidActivityEventData } from "tns-core-modules/application";
import * as appSettings from "tns-core-modules/application-settings";

declare var android, com;

// It should be YourAPPId.wxapi.WXEntryActivity 
@JavaProxy("YOUR_APP_ID.wxapi.WXEntryActivity")
@Interfaces([com.tencent.mm.opensdk.openapi.IWXAPIEventHandler])
class WXEntryActivity extends android.support.v7.app.AppCompatActivity {
    public isNativeScriptActivity;

    private _callbacks: AndroidActivityCallbacks;

    private api;

    public onCreate(savedInstanceState): void {

        this.isNativeScriptActivity = true;
        if (!this._callbacks) {
            setActivityCallbacks(this);
        }

        console.log("onCreate");

        let appID = appSettings.getString("WECHAT_APP_ID");

        this.api = com.tencent.mm.opensdk.openapi.WXAPIFactory.createWXAPI(this, appID, false);

        try {
            this.api.handleIntent(this.getIntent(), this);
        } catch (e) {
            console.log("handleIntent error");
            console.log(e);
        }

        this._callbacks.onCreate(this, savedInstanceState, super.onCreate);
    }

    public onNewIntent(intent) {
        super.onNewIntent(intent);

        console.log("onNewIntent");
        this.setIntent(intent);

        try {
            this.api.handleIntent(intent, this);
        } catch (e) {
            console.log("handleIntent error");
            console.log(e);
        }
    }

    public onResp(res) {
        console.log("onResp");
        setTimeout(() => {
            app.notify({
                eventName: 'wxApiResponse',
                object: res,
                activity: this
            });
        }, 500);
    }

    public onReq(res) {
        console.log("onReq");
    }

    public onSaveInstanceState(outState): void {
        this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState);
    }

    public onStart(): void {
        this._callbacks.onStart(this, super.onStart);
    }

    public onStop(): void {
        this._callbacks.onStop(this, super.onStop);
    }

    public onDestroy(): void {
        this._callbacks.onDestroy(this, super.onDestroy);
    }

    public onBackPressed(): void {
        this._callbacks.onBackPressed(this, super.onBackPressed);
    }

    public onRequestPermissionsResult(requestCode: number, permissions: Array<string>, grantResults: Array<number>): void {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
    }

    public onActivityResult(requestCode: number, resultCode: number, data): void {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, super.onActivityResult);
    }
}

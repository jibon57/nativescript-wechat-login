import { Component, OnInit, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { WechatLogin } from "nativescript-wechat-login";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private ngZone: NgZone, private routeExt: RouterExtensions) {

    }

    ngOnInit(): void {
        app.on('wxApiResponse', this.wxResponseHandle, this);
    }

    /**
     * wechatLogin
     */
    public wechatLogin() {
        let wechat = new WechatLogin();

        if (wechat.isWechatInstalled()) {
            wechat.doLogin("nativescript_demo");
        } else {
            console.log("wechat isn't installed")
        }
    }

    /**
     * wxResponseHandle
     */
    public wxResponseHandle(res) {

        //app.off("wxApiResponse", this.wxResponseHandle, this);
        console.log("wxApiResponse");

        let response = res.object;
        console.dir(response);

        switch (response.errCode) {
            case 0:
                console.log("user permits login");
                console.log(response.code) // here you have the value of code which can be use to obtain wechat openid.

                // must need to run under ngZone if you have plan to navigate another page.
                this.ngZone.run(() => {
                    // this.routeExt.navigateByUrl("/profile");
                });
                break;

            case -2:
                console.log("user canceled");
                break;

            case -4:
                console.log("user refused to authorize");
                break;

            default:
                console.log("unknow error");
                break;
        }
    }

}

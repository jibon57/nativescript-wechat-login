import { ApplicationEventData } from "tns-core-modules/application";
import * as application from 'tns-core-modules/application';

declare var UIResponder, UIApplicationDelegate, NSObject, WXApi;

export function getAppDelegate() {
    // Play nice with other plugins by not completely ignoring anything already added to the appdelegate
    if (application.ios.delegate === undefined) {
        class UIApplicationDelegateImpl extends UIResponder {
            public static ObjCProtocols = [UIApplicationDelegate];

            static new(): UIApplicationDelegateImpl {
                return <UIApplicationDelegateImpl>super.new();
            }
        }

        application.ios.delegate = UIApplicationDelegateImpl;
    }

    return application.ios.delegate;
}

export function enableMultipleOverridesFor(classRef, methodName, nextImplementation) {
    const currentImplementation = classRef.prototype[methodName];
    classRef.prototype[methodName] = function () {
        const result = currentImplementation && currentImplementation.apply(currentImplementation, Array.from(arguments));
        return nextImplementation.apply(nextImplementation, Array.from(arguments).concat([result]));
    };
}

export function setupAppDeligate(wechatAppId, universalLink) {

    let appDelegate = getAppDelegate();

    enableMultipleOverridesFor(appDelegate, 'applicationDidFinishLaunchingWithOptions', function (application, launchOptions) {
        WXApi.registerAppUniversalLink(wechatAppId, universalLink);
        return true;
    });

    enableMultipleOverridesFor(appDelegate, 'applicationHandleOpenURL', function (application, url) {
        return WXApi.handleOpenURLDelegate(url, WXApiManagerDelegate.new())
    });

    enableMultipleOverridesFor(appDelegate, 'applicationOpenURLSourceApplicationAnnotation', function (application, url, sourceApplication, annotation) {
        try {
            return WXApi.handleOpenURLDelegate(url, WXApiManagerDelegate.new())
        } catch (e) {
            console.log("error!!")
            console.log(e);
        }

    });
}

class WXApiManagerDelegate extends NSObject {

    public static ObjCProtocols = [WXApiDelegate];

    static new(): WXApiManagerDelegate {
        return <WXApiManagerDelegate>super.new();
    }

    public onReq(res) {
        //console.log("onReq")
    }

    /**
     * onResp
     */
    public onResp(res) {
        //console.log("BaseResp")
        setTimeout(() => {
            application.notify(<ApplicationEventData>{
                eventName: 'wxApiResponse',
                object: res,
                activity: this
            });
        }, 500);
    }
}

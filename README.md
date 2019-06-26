# NativeScript WeChat login plugin

[![npm](https://img.shields.io/npm/v/nativescript-wechat-login.svg)](https://www.npmjs.com/package/nativescript-wechat-login)
[![npm](https://img.shields.io/npm/dt/nativescript-wechat-login.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-wechat-login)
[![npm](https://img.shields.io/npm/dm/nativescript-wechat-login.svg)](https://www.npmjs.com/package/nativescript-wechat-login)

Using this plugin you will be able implement wechat login feature in your APP. You can read more details from [here](https://open.wechat.com/cgi-bin/newreadtemplate?t=overseas_open/docs/mobile/login/guide#login_guide) 


## Installation

```javascript
tns plugin add nativescript-wechat-login
```

**Android**

If installation was successful then `wxapi.WXEntryActivity.android.ts` file should be create to your `src` or `app` (based on `nsconfig.json`) directory with your APP ID. If it wasn't successfully created then you will have to create that file manually. You can get code of that file from [here](https://github.com/jibon57/nativescript-wechat-login/blob/master/src/wxapi.WXEntryActivity.android.ts). In this case you will require to change `YOUR_APP_ID` to your app's ID. 

If you don't have `wxapi.WXEntryActivity.android.ts` file in your `app` directory then Android won't receive notification from wechat.

**Webpack**

You will have to add `wxapi.WXEntryActivity.android.ts` in your `webpack.config.js` file so that android runtime can generate appropriate java class. Check the demo `webpack.config.js` file. You can [read here](https://docs.nativescript.org/core-concepts/android-runtime/advanced-topics/extend-application-activity#extending-activity) for details.

```javascript
const appComponents = [
    "tns-core-modules/ui/frame",
    "tns-core-modules/ui/frame/activity",
    resolve(__dirname, "src/wxapi.WXEntryActivity.android.ts")
];
```

**iOS**

Open your `Info.plist` file from `App_Resources/iOS` location & add following lines

```javascript
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleURLName</key>
		<string>weixin</string>
		<key>CFBundleURLSchemes</key>
		<array>
			<string>WECHAT_APP_ID</string>
		</array>
	</dict>
</array>
```
Change `WECHAT_APP_ID` with your Wechat App ID. Check demo project `demo/App_Resources/iOS/Info.plist`

## Usage 

For details you can check the demo project.

In your `main.ts` or `app.ts` need to import `initWechatSdk(WECHAT_APP_ID)` method with wechat app id.

```javascript
....
import { initWechatSdk } from "nativescript-wechat-login";

initWechatSdk("wxd930ea5d5a258f4f");
```

In any other page

```javascript
....
import { WechatLogin } from "nativescript-wechat-login";
import * as app from "tns-core-modules/application";
```

Now call in a method

```javascript
let wechat = new WechatLogin();

if (wechat.isWechatInstalled()) {
    wechat.doLogin("nativescript_demo");
} else {
    console.log("wechat isn't installed")
}
```

You will get response from `wxApiResponse` event. So, you can register in that event like this:

```javascript
app.on('wxApiResponse', function(res){
    console.dir(res) // you will get wechat notification here.
}, this);
```


Ref:

https://open.wechat.com/cgi-bin/newreadtemplate?t=overseas_open/docs/mobile/login/guide#login_guide

https://github.com/aaronbruckner/wechatAndroidLoginDemo
    
## License

Apache License Version 2.0, January 2004

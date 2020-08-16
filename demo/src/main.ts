// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { initWechatSdk } from "nativescript-wechat-login";

import { AppModule } from "./app/app.module";

initWechatSdk("wxd930ea5d5a258f4f", "https://www.your.app.universal.link");

platformNativeScriptDynamic().bootstrapModule(AppModule);

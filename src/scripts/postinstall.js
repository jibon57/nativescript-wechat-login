const hook = require("nativescript-hook")(__dirname);
const fs = require("fs");
var path = require('path');

var appId, appRoot = hook.findProjectDir();

if (!appRoot) {
    return;
}

var mainPackage = JSON.parse(fs.readFileSync(path.resolve(appRoot, 'package.json'), 'utf8'));
var nsconfig = JSON.parse(fs.readFileSync(path.resolve(appRoot, 'nsconfig.json'), 'utf8'));
var copyPath = path.resolve(appRoot, nsconfig.appPath);
var wxActivityFile = path.resolve(appRoot, "node_modules/nativescript-wechat-login/wxapi.WXEntryActivity.android.ts");

console.log("appRoot", appRoot);

var wxActivityFileCopiedPath = path.resolve(copyPath, "wxapi.WXEntryActivity.android.ts");

console.log("wxActivityFileCopiedPath: ", wxActivityFileCopiedPath);

if (typeof mainPackage.nativescript.id === 'object') {
    appId = mainPackage.nativescript.id.android;
} else {
    appId = mainPackage.nativescript.id;
}

console.log("appId: ", appId);

fs.copyFile(wxActivityFile, wxActivityFileCopiedPath, (err) => {

    if (err) throw err;

    fs.readFile(wxActivityFileCopiedPath, 'utf8', function(err, data) {
        var result = data.replace(/YOUR_APP_ID/g, appId);

        fs.writeFile(wxActivityFileCopiedPath, result, 'utf8', function(err) {
            if (err) return console.log(err);
        });
    });
});
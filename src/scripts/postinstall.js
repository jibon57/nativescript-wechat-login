const hook = require("nativescript-hook")(__dirname);
const fs = require("fs");
var path = require('path');

var appId, copyPath, appRoot = hook.findProjectDir();

if (!appRoot) {
    return;
}

function getAppContext(appRoot){

    const webpackConfig = require(path.resolve(appRoot, "webpack.config"));

    let env = {
        android : "android"
    };

    const config = webpackConfig(env);

    return config.context;
}

function isNsConfigFileExists(nsconfigFile) {
   try {
        fs.accessSync(nsconfigFile, fs.constants.R_OK);
        return true;
    
    } catch (err) {
        return false;
    }
}

function copyWXEntryActivityFile() {
    
    var mainPackage = JSON.parse(fs.readFileSync(path.resolve(appRoot, 'package.json'), 'utf8'));
    var nsconfigFile = path.resolve(appRoot, 'nsconfig.json');

    if(isNsConfigFileExists(nsconfigFile)){
        var nsconfig = JSON.parse(fs.readFileSync(nsconfigFile, 'utf8'));

        if(nsconfig.appPath !== undefined){
            copyPath = path.resolve(appRoot, nsconfig.appPath);
        }else{
            copyPath = getAppContext(appRoot);
        }
    }else{
        copyPath = getAppContext(appRoot);
    }


    console.log("copyPath: ", copyPath);

    var wxActivityFile = path.resolve(appRoot, "node_modules/nativescript-wechat-login/wxapi.WXEntryActivity.android.ts");

    console.log("appRoot: ", appRoot);

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
}

copyWXEntryActivityFile();



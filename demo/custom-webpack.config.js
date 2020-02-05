const webpackConfig = require("./webpack.config");
const path = require("path");

module.exports = env => {

    env = env || {};

    const cnf = webpackConfig(env);

    env.appComponents = env.appComponents || [];
    env.appComponents.push(path.resolve(cnf.context, "wxapi.WXEntryActivity.android.ts")); 

    const config = webpackConfig(env);

    return config;
}
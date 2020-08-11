# webpack 配置 style-loader

## 问题

-   Replace Autoprefixer browsers option to Browserslist config.Use browserslist key in package.json or .browserslistrc file.Using browsers option cause some error. Browserslist configcan be used for Babel, Autoprefixer, postcss-normalize and other tools.If you really need to use option, rename it to overrideBrowserslist.
-   因为 postCss 版本更新，之前版本的配置已无效：

```js
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 100 versions'],
        }), // 自动添加css前缀
    ],
};

//更改为

module.exports = {
    plugins: [
        require('autoprefixer')({ overrideBrowserslist: ['> 0.15% in CN'] }), // 自动添加css前缀
    ],
};
```

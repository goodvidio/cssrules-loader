# cssrules-loader
A webpack loader for [cssrules](https://www.npmjs.com/package/cssrules)

## Install

```
npm install --save-dev cssrules-loader
```

## Example

webpack.config.js file

```
module: {
    rules: [{
        test: /\.scss$/,
        use: [
            {
                loader: 'cssrules-loader'
            },
            {
                loader: 'postcss-loader'
            },
            {
                loader: 'sass-loader'
            }
        ]
    }]
}
```

index.js

```
var consumableCssrulesArray = require('style.scss');

consumableCssrulesArray.map(function (rule) {
    console.log(rule);
});
```

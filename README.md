fis3-preprocessor-html2js
========

[![Dependency Status](https://david-dm.org/wuhy/fis3-preprocessor-html2js.svg)](https://david-dm.org/wuhy/fis3-preprocessor-html2js) [![devDependency Status](https://david-dm.org/wuhy/fis3-preprocessor-html2js/dev-status.svg)](https://david-dm.org/wuhy/fis3-preprocessor-html2js#info=devDependencies) [![NPM Version](https://img.shields.io/npm/v/fis3-preprocessor-html2js.svg?style=flat)](https://npmjs.org/package/fis3-preprocessor-html2js)

> A preprocessor for fis3 to convert html file to amd/commonjs wrapping js file.


## How to use
 
### Install
 
```shell
npm install fis3-preprocessor-html2js -g
```

### Add configure to `fis-conf.js`

```javasciprt
fis.match('/src/*.tpl', {
    preprocessor: fis.plugin('html2js', {
        format: false
    }),
    useHash: true,
    release: '/asset/$1.tpl',
    rExt: '.js'
});
```

### Options

* format - `boolean`  whether format the html js module, by default `false`

* wrap - `string` current support `commonjs` and `amd`, by default using `amd`



 

 

 

/**
 * @file fis html2js 预处理插件
 * @author sparklewhy@gmail.com
 */

'use strict';

var html2js = require('html2js');
module.exports = function (content, file, conf) {
    var _ = fis.util;
    conf = _.assign({
        wrap: 'amd',
        format: false
    }, conf);
    conf.mode = conf.format ? 'format' : '';

    content = html2js(content, conf);

    return content;
};

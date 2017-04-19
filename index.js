var cssrules = require('cssrules');

module.exports = function (content) {
    var callback = this.async();
    this.cacheable && this.cacheable();

    cssrules(content).then(function (result) {
        callback(null, 'module.exports = ' + JSON.stringify(result) +';');
    });
};

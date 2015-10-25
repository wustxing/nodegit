/**
 * Created by Administrator on 2015/10/25.
 */
var tools = require('../common/tools');

module.exports = function (schema) {
    schema.methods.create_at_ago = function () {
        return tools.formatDate(this.create_at,true);
    };

    schema.methods.update_at_ago = function () {
        return tools.formatDate(this.update_at_ago,true);
    };
}
/**
 * Created by Administrator on 2015/9/10.
 */
require.config({
    paths: {
        jquery: 'jquery.min'
    }
});

require(['jquery'], function($) {
    alert($().jquery);
});
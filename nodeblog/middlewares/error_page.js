/**
 * Created by Administrator on 2015/10/25.
 */
// ErrorPage middleware
exports.errorPage = function (req, res, next) {

    res.render404 = function (error) {
        return res.status(404).render('notify/notify', { error: error });
    };

    res.renderError = function (error, statusCode) {
        if (statusCode === undefined) {
            statusCode = 400;
        }
        return res.status(statusCode).render('notify/notify', { error: error });
    };

    next();
};

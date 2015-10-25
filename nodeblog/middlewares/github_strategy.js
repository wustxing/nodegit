/**
 * Created by Administrator on 2015/10/25.
 */
module.exports = function (accessToken, refreshToken, profile, done) {
    profile.accessToken = accessToken;
    done(null, profile);
};

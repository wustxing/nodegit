/**
 * Created by Administrator on 2015/9/27.
 */
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('./mailconfig');
var transporter  = nodemailer.createTransport(smtpTransport(config.mail.from));

/**
 * @param {String} subject：发送的主题
 * @param {String} html：发送的 html 内容
 */
function sendMail(subject, html,callback) {
    var mailOptions = {
        from: [config.mail.from.name, config.mail.from.auth.user].join(' '),
        to: config.mail.to.join(','),
        subject: subject,
        html: html
    };

    transporter.sendMail(mailOptions, function(error, response){
        if (error) {
            console.log(error);
            callback(error,null);
        } else {
            console.log('Message sent: ' + response.response);
            callback(null,"1");
        }
        transporter.close();
    });
};

exports.sendMail=sendMail;
//sendMail('测试发邮件', '<p>Hello world!</p>');
/**
 * Created by Administrator on 2015/9/27.
 */
//
//from：配置发送邮件信息
//to：数组，配置发送给谁
//name：显示的名称
//service：SMTP 名称，这里用 Gmail
//auth：邮箱的用户名和密码

module.exports = {
    mail: {
        from: {
            name: 'xiongxing',
            service: 'QQ',
            auth: {
                user: '372582632@qq.com',
                pass: 'XX890704'
            }
        },
        to: [
            '403860586@qq.com'
        ]
    }
};
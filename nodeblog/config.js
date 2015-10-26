/**
 * Created by Administrator on 2015/10/25.
 */
// mongodb 配置

var path = require('path');
var config = {
    // debug 为 true 时，用于本地调试
    debug: true,

    get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

    name: 'Nodeclub', // 社区名字
    description: 'CNode：Node.js专业中文社区', // 社区的描述
    keywords: 'nodejs, node, express, connect, socket.io',

    // 添加到 html head 中的信息
    site_headers: [
        '<meta name="author" content="403860586@qq.com" />'
    ],
    //site_logo: '/public/images/cnodejs_light.svg', // default is `name`
    //site_icon: '/public/images/cnode_icon_32.png', // 默认没有 favicon, 这里填写网址
    site_logo: 'wustxing', // default is `name`
    site_icon: 'www.ypintao.com', // 默认没有 favicon, 这里填写网址
    // 右上角的导航区
    site_navs: [
        // 格式 [ path, title, [target=''] ]
        [ '/about', '关于' ]
    ],
    // cdn host，如 http://cnodejs.qiniudn.com
    site_static_host: '', // 静态文件存储域名
    // 社区的域名
    host: 'localhost',


    // 版块
    tabs: [
        ['share', '分享'],
        ['ask', '问答'],
        //['job', '招聘'],
    ],
    //mongodb配置
    db: 'mongodb://127.0.0.1/node_club_dev',
    // redis 配置，默认是本地
    redis_host: '127.0.0.1',
    redis_port: 6379,
    redis_db: 0,

    session_secret: 'wustxingblog_secret', // 务必修改
    auth_cookie_name: 'wustxingblog',
    // 程序运行的端口
    port: 4000,

    // 话题列表显示的话题数量
    list_topic_count: 20,
    // 邮箱配置
    mail_opts: {
        name: 'xiongxing',
        service: 'QQ',
        auth: {
            user: '372582632@qq.com',
            pass: 'xiongxing123'
        }
    },
    // github 登陆的配置
    GITHUB_OAUTH: {
        clientID: 'your GITHUB_CLIENT_ID',
        clientSecret: 'your GITHUB_CLIENT_SECRET',
        callbackURL: 'http://cnodejs.org/auth/github/callback'
    },
    // 是否允许直接注册（否则只能走 github 的方式）
    allow_sign_up: true,

    // oneapm 是个用来监控网站性能的服务
    oneapm_key: '',
    // 7牛的access信息，用于文件上传
    qn_access: {
        accessKey: 'your access key',
        secretKey: 'your secret key',
        bucket: 'your bucket name',
        domain: 'http://your qiniu domain',
        // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
        // 如果在国内，此项请留空
        uploadURL: 'http://xxxxxxxx',
    },

    // 文件上传配置
    // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
    upload: {
        path: path.join(__dirname, 'public/upload/'),
        url: '/public/upload/'
    }

    // 下面两个配置都是文件上传的配置

}

if (process.env.NODE_ENV === 'test') {
    config.db = 'mongodb://127.0.0.1/node_club_test';
}

module.exports = config;
// 配置
window.Config = {

    // 站点名
    SiteName: 'evrStr监测站',

    // 站点链接
    SiteUrl: '/',

    // UptimeRobot Api Keys
    // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
    ApiKeys: [
        'm786316602-83f91e0a5576511e1fe3933a',
        'm786320113-ce5fe999e0f71f74d6e82003',
        'm786320107-b25df1b34b61b6bcd5494504',
        'm786316741-bb2de8330697917cc85f8e79',
    ],

    // 是否显示监测站点的链接
    ShowLink: true,

    // 日志天数
    // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
    // 不过时间不要设置太长，容易卡，接口请求也容易失败
    CountDays: 60,

    // 导航栏菜单
    Navi: [{
        text: '博客',
        url: 'https://evrstr.cc/'
    }, ]
};
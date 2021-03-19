笑谱1

{
    "id": "iboxpay",
    "name": "笑谱",
    "keys": ["refreshtoken", "iboxpayvideoheader", "iboxpayvideobody", "refreshtoken2", "iboxpayvideoheader2", "iboxpayvideobody2", "refreshtoken3", "iboxpayvideoheader3", "iboxpayvideobody3", "refreshtoken4", "iboxpayvideoheader4", "iboxpayvideobody4", "refreshtoken5", "iboxpayvideoheader5", "iboxpayvideobody5", "refreshtoken6", "iboxpayvideoheader6", "iboxpayvideobody6", "refreshtoken7", "iboxpayvideoheader7", "iboxpayvideobody7", "refreshtoken8", "iboxpayvideoheader8", "iboxpayvideobody8", "refreshtoken9", "iboxpayvideoheader9", "iboxpayvideobody9", "refreshtoken10", "iboxpayvideoheader10", "iboxpayvideobody10", "refreshtoken11", "iboxpayvideoheader11", "iboxpayvideobody11", "refreshtoken12", "iboxpayvideoheader12", "iboxpayvideobody12", "refreshtoken13", "iboxpayvideoheader13", "iboxpayvideobody13", "refreshtoken14", "iboxpayvideoheader14", "iboxpayvideobody14", "refreshtoken15", "iboxpayvideoheader15", "iboxpayvideobody15", "refreshtoken16", "iboxpayvideoheader16", "iboxpayvideobody16", "refreshtoken17", "iboxpayvideoheader17", "iboxpayvideobody17", "refreshtoken18", "iboxpayvideoheader18", "iboxpayvideobody18", "refreshtoken19", "iboxpayvideoheader19", "iboxpayvideobody19", "refreshtoken20", "iboxpayvideoheader20", "iboxpayvideobody20"],
    "author": "@ziye",
    "settings": [{
        "id": "iboxpaySuffix",
        "name": "当前账号",
        "val": "1",
        "type": "number",
        "desc": "当前抓取ck记录的账号序号，如：1、2、4、"
    },
    {
        "id": "iboxpayCount",
        "name": "账号个数",
        "val": "1",
        "type": "number",
        "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
    },
    {
        "id": "iboxpayLIVE",
        "name": "任务控制",
        "val": "888",
        "type": "number",
        "desc": "默认为1开启直播，视频请获取ck，设置2关闭视频，新人请设置888"
    },
    {
        "id": "iboxpayCASH",
        "name": "提现标准",
        "val": "888",
        "type": "number",
        "desc": "0不提现，可设置 0 1 15 30 100 888 设置888，由大至小循环提现 "
    },
    {
        "id": "iboxpayphone",
        "name": "手机号",
        "val": "17585173983",
        "type": "number",
        "desc": "请输入完整手机号"
    },
    {
        "id": "iboxpaysms",
        "name": "验证码",
        "val": "0",
        "type": "number",
        "desc": "输入短信验证码，默认为0，不启动获取token功能"
    }],
    "repo": "https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.js",
    "icons": ["https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.png", "https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.png"],
    "script": "https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.js",
    "icon": "https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.png",
    "favIcon": "mdi-star",
    "favIconColor": "primary",
    "datas": [{
        "key": "refreshtoken",
        "val": "2682a43cc341465091b91a7b09a0cfc1"
    },
    {
        "key": "iboxpayvideoheader",
        "val": "
        {\"Content-Length\":\"233\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"version\":\"1.4.8\",\"timestamp\":\"1616032595383\",\"mchtNo\":\"100529600058887\",\"Content-Type\":\"application/json; charset=utf-8\",\"source\":\"VEISHOP_APP_IOS\",\"shopkeeperId\":\"1148855820752977920\",\"User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"signature\":\"1A331E1492FE3AF72B241CE08048F7CC80686EB9E08C17532E89172625AA101E\",\"X-User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"token\":\"3a5ae7db53f44c2e832d33604102eee6\",\"traceid\":\"31365226535060426752161603224536100002bfa26fc\",\"Host\":\"veishop.iboxpay.com\",\"Accept-Language\":\"zh-Hans-CN;q=1, en-CN;q=0.9\",\"Accept\":\"*/*\",\"random\":\"A308DC3D-68EA-4BE8-9BC9-FA1F81E60775\"}&
        {\"Content-Length\":\"166\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"version\":\"1.4.8\",\"timestamp\":\"1616032564068\",\"mchtNo\":\"100529600058887\",\"Content-Type\":\"application/json; charset=utf-8\",\"source\":\"VEISHOP_APP_IOS\",\"shopkeeperId\":\"1148855820752977920\",\"User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"signature\":\"5DA289B1551678FF070696B9079AAD4F0E6250D0EC8167FAFAF1FC14DBB9CCBD\",\"X-User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"token\":\"3a5ae7db53f44c2e832d33604102eee6\",\"traceid\":\"31365226535060426752161603224535600002bfa26fc\",\"Host\":\"veishop.iboxpay.com\",\"Accept-Language\":\"zh-Hans-CN;q=1, en-CN;q=0.9\",\"Accept\":\"*/*\",\"random\":\"B5F121B4-B1C7-469F-8E9A-7B4794C199A9\"}&
        {\"Content-Length\":\"166\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"version\":\"1.4.8\",\"timestamp\":\"1616032533084\",\"mchtNo\":\"100529600058887\",\"Content-Type\":\"application/json; charset=utf-8\",\"source\":\"VEISHOP_APP_IOS\",\"shopkeeperId\":\"1148855820752977920\",\"User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"signature\":\"5C239BC3A3F40DF7FB1C5A4C58812CCA34DBEF2742988105AB92C9E9DDB0C883\",\"X-User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"token\":\"3a5ae7db53f44c2e832d33604102eee6\",\"traceid\":\"31365226535060426752161603224535300002bfa26fc\",\"Host\":\"veishop.iboxpay.com\",\"Accept-Language\":\"zh-Hans-CN;q=1, en-CN;q=0.9\",\"Accept\":\"*/*\",\"random\":\"3E1E7C8B-A870-4F7B-A032-58841D6BF68F\"}&
        {\"Content-Length\":\"233\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"version\":\"1.4.8\",\"timestamp\":\"1616032512376\",\"mchtNo\":\"100529600058887\",\"Content-Type\":\"application/json; charset=utf-8\",\"source\":\"VEISHOP_APP_IOS\",\"shopkeeperId\":\"1148855820752977920\",\"User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"signature\":\"0A64957EE11BA39A64F3BF8EF19F7EBD4B10818A85C43300A50406CDC84F9B6D\",\"X-User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"token\":\"3a5ae7db53f44c2e832d33604102eee6\",\"traceid\":\"31365226535060426752161603224534800002bfa26fc\",\"Host\":\"veishop.iboxpay.com\",\"Accept-Language\":\"zh-Hans-CN;q=1, en-CN;q=0.9\",\"Accept\":\"*/*\",\"random\":\"1A934C49-EF63-4F29-8D66-56031D5C7C46\"}&
        {\"Content-Length\":\"493\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"version\":\"1.4.8\",\"timestamp\":\"1616032477290\",\"mchtNo\":\"100529600058887\",\"Content-Type\":\"application/json; charset=utf-8\",\"source\":\"VEISHOP_APP_IOS\",\"shopkeeperId\":\"1148855820752977920\",\"User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"signature\":\"94949AC2C88CA6E39A5F1C8009CB49764E57431D6BC6527AF201208464D71B10\",\"X-User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"token\":\"3a5ae7db53f44c2e832d33604102eee6\",\"traceid\":\"31365226535060426752161603224534300002bfa26fc\",\"Host\":\"veishop.iboxpay.com\",\"Accept-Language\":\"zh-Hans-CN;q=1, en-CN;q=0.9\",\"Accept\":\"*/*\",\"random\":\"C6C51406-B743-4E9A-85E0-CAF019ECC2E2\"}&
        {\"Content-Length\":\"233\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"version\":\"1.4.8\",\"timestamp\":\"1616032329484\",\"mchtNo\":\"100529600058887\",\"Content-Type\":\"application/json; charset=utf-8\",\"source\":\"VEISHOP_APP_IOS\",\"shopkeeperId\":\"1148855820752977920\",\"User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"signature\":\"997C92F82608A0D103EBF18E69BC58F473C7B5F8BBCED897B3068546BCDCF062\",\"X-User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"token\":\"3a5ae7db53f44c2e832d33604102eee6\",\"traceid\":\"31365226535060426752161603224533000002bfa26fc\",\"Host\":\"veishop.iboxpay.com\",\"Accept-Language\":\"zh-Hans-CN;q=1, en-CN;q=0.9\",\"Accept\":\"*/*\",\"random\":\"AAC83533-9C05-4E4A-BE63-C587DE3B53E6\"}&
        {\"Content-Length\":\"168\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"version\":\"1.4.8\",\"timestamp\":\"1616032285693\",\"mchtNo\":\"100529600058887\",\"Content-Type\":\"application/json; charset=utf-8\",\"source\":\"VEISHOP_APP_IOS\",\"shopkeeperId\":\"1148855820752977920\",\"User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"signature\":\"B7F0ED483A52810B089864A117BFD3B75941B908FB748614F3251CDDFB6ECB63\",\"X-User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"token\":\"3a5ae7db53f44c2e832d33604102eee6\",\"traceid\":\"31365226535060426752161603224532500002bfa26fc\",\"Host\":\"veishop.iboxpay.com\",\"Accept-Language\":\"zh-Hans-CN;q=1, en-CN;q=0.9\",\"Accept\":\"*/*\",\"random\":\"26537D7E-E345-4B8F-ABB6-FEE8F518DC7C\"}&
        {\"Content-Length\":\"103\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"version\":\"1.4.8\",\"timestamp\":\"1616029310498\",\"mchtNo\":\"100529600058887\",\"Content-Type\":\"application/json; charset=utf-8\",\"source\":\"VEISHOP_APP_IOS\",\"shopkeeperId\":\"1148855820752977920\",\"User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"signature\":\"976089D740A01577A55DB227C729357B3ED3A3DC5254D9ABE07550E2859AFB37\",\"X-User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"token\":\"3a5ae7db53f44c2e832d33604102eee6\",\"traceid\":\"31365226535060426752161602927389900002bfa26fc\",\"Host\":\"veishop.iboxpay.com\",\"Accept-Language\":\"zh-Hans-CN;q=1, en-CN;q=0.9\",\"Accept\":\"*/*\",\"random\":\"6757B4FF-D665-41C1-8547-9E81344F256A\"}&
        {\"Content-Length\":\"233\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"version\":\"1.4.8\",\"timestamp\":\"1616028804403\",\"mchtNo\":\"100529600058887\",\"Content-Type\":\"application/json; charset=utf-8\",\"source\":\"VEISHOP_APP_IOS\",\"shopkeeperId\":\"1148855820752977920\",\"User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"signature\":\"12953AD0B0CF5C7324C672682DEB7F3940E8CF6990794C4B9733C91EE135C9E9\",\"X-User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"token\":\"3a5ae7db53f44c2e832d33604102eee6\",\"traceid\":\"31365226535060426752161602867649500002bfa26fc\",\"Host\":\"veishop.iboxpay.com\",\"Accept-Language\":\"zh-Hans-CN;q=1, en-CN;q=0.9\",\"Accept\":\"*/*\",\"random\":\"682159E1-0F90-446A-AB9A-29F6D7A6FE32\"}&
        {\"Content-Length\":\"168\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"version\":\"1.4.8\",\"timestamp\":\"1616028764748\",\"mchtNo\":\"100529600058887\",\"Content-Type\":\"application/json; charset=utf-8\",\"source\":\"VEISHOP_APP_IOS\",\"shopkeeperId\":\"1148855820752977920\",\"User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"signature\":\"90AA5363D3CFD79A3D4AD19638973981D433EF2D18636402BC6DF86F24E1D077\",\"X-User-Agent\":\"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, FECDDD60-FD21-41CF-B4A2-EF5980B94C4B)\",\"token\":\"3a5ae7db53f44c2e832d33604102eee6\",\"traceid\":\"31365226535060426752161602867647200002bfa26fc\",\"Host\":\"veishop.iboxpay.com\",\"Accept-Language\":\"zh-Hans-CN;q=1, en-CN;q=0.9\",\"Accept\":\"*/*\",\"random\":\"036EA33B-D707-4E27-A699-A09F9BFC5987\"}"
    },
    {
        "key": "iboxpayvideobody",
        "val": "
        {\"type\":1,\"videoList\":[{\"videoId\":\"1363549538390970368\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1360287565792481280\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1349419750734708736\",\"type\":1,\"isFinishWatch\":false}],\"actId\":\"324\"}&
        {\"type\":1,\"videoList\":[{\"videoId\":\"15850450301987618\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1363549538390970368\",\"type\":1,\"isFinishWatch\":false}],\"actId\":\"324\"}&
        {\"type\":1,\"videoList\":[{\"videoId\":\"1362326018348617728\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"15850450301987618\",\"type\":1,\"isFinishWatch\":false}],\"actId\":\"324\"}&
        {\"type\":1,\"videoList\":[{\"videoId\":\"1352315110272552960\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1346729467349917696\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1362326018348617728\",\"type\":1,\"isFinishWatch\":false}],\"actId\":\"324\"}&
        {\"type\":2,\"videoList\":[{\"videoId\":\"1346518606240899072\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1354493764255653888\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1349424987662991360\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1352320688021590016\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1359925734150311936\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1354852307320217600\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1352315110272552960\",\"type\":1,\"isFinishWatch\":false}],\"actId\":\"324\"}&
        {\"type\":1,\"videoList\":[{\"videoId\":\"1365508517987991552\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1363405613067997184\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1346518606240899072\",\"type\":1,\"isFinishWatch\":false}],\"actId\":\"324\"}&
        {\"type\":1,\"videoList\":[{\"videoId\":\"1360650205047885824\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1365508517987991552\",\"type\":1,\"isFinishWatch\":false}],\"actId\":\"324\"}&
        {\"type\":2,\"videoList\":[{\"videoId\":\"1371347933591609344\",\"type\":1,\"isFinishWatch\":false}],\"actId\":\"324\"}&
        {\"type\":1,\"videoList\":[{\"videoId\":\"1372319985068986368\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1372338073298378752\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1372344725234044928\",\"type\":1,\"isFinishWatch\":false}],\"actId\":\"324\"}&
        {\"type\":1,\"videoList\":[{\"videoId\":\"1372341609470152704\",\"type\":1,\"isFinishWatch\":false},{\"videoId\":\"1372319985068986368\",\"type\":1,\"isFinishWatch\":false}],\"actId\":\"324\"}"
    },
    {
        "key": "refreshtoken2",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader2",
        "val": ""
    },
    {
        "key": "iboxpayvideobody2",
        "val": ""
    },
    {
        "key": "refreshtoken3",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader3",
        "val": ""
    },
    {
        "key": "iboxpayvideobody3",
        "val": ""
    },
    {
        "key": "refreshtoken4",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader4",
        "val": ""
    },
    {
        "key": "iboxpayvideobody4",
        "val": ""
    },
    {
        "key": "refreshtoken5",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader5",
        "val": ""
    },
    {
        "key": "iboxpayvideobody5",
        "val": ""
    },
    {
        "key": "refreshtoken6",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader6",
        "val": ""
    },
    {
        "key": "iboxpayvideobody6",
        "val": ""
    },
    {
        "key": "refreshtoken7",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader7",
        "val": ""
    },
    {
        "key": "iboxpayvideobody7",
        "val": ""
    },
    {
        "key": "refreshtoken8",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader8",
        "val": ""
    },
    {
        "key": "iboxpayvideobody8",
        "val": ""
    },
    {
        "key": "refreshtoken9",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader9",
        "val": ""
    },
    {
        "key": "iboxpayvideobody9",
        "val": ""
    },
    {
        "key": "refreshtoken10",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader10",
        "val": ""
    },
    {
        "key": "iboxpayvideobody10",
        "val": ""
    },
    {
        "key": "refreshtoken11",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader11",
        "val": ""
    },
    {
        "key": "iboxpayvideobody11",
        "val": ""
    },
    {
        "key": "refreshtoken12",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader12",
        "val": ""
    },
    {
        "key": "iboxpayvideobody12",
        "val": ""
    },
    {
        "key": "refreshtoken13",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader13",
        "val": ""
    },
    {
        "key": "iboxpayvideobody13",
        "val": ""
    },
    {
        "key": "refreshtoken14",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader14",
        "val": ""
    },
    {
        "key": "iboxpayvideobody14",
        "val": ""
    },
    {
        "key": "refreshtoken15",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader15",
        "val": ""
    },
    {
        "key": "iboxpayvideobody15",
        "val": ""
    },
    {
        "key": "refreshtoken16",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader16",
        "val": ""
    },
    {
        "key": "iboxpayvideobody16",
        "val": ""
    },
    {
        "key": "refreshtoken17",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader17",
        "val": ""
    },
    {
        "key": "iboxpayvideobody17",
        "val": ""
    },
    {
        "key": "refreshtoken18",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader18",
        "val": ""
    },
    {
        "key": "iboxpayvideobody18",
        "val": ""
    },
    {
        "key": "refreshtoken19",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader19",
        "val": ""
    },
    {
        "key": "iboxpayvideobody19",
        "val": ""
    },
    {
        "key": "refreshtoken20",
        "val": ""
    },
    {
        "key": "iboxpayvideoheader20",
        "val": ""
    },
    {
        "key": "iboxpayvideobody20",
        "val": ""
    }],
    "sessions": [],
    "isLoaded": true
}
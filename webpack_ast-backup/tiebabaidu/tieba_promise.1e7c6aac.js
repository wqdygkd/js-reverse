!function(t){function e(e){for(var r,n,_=e[0],c=e[1],v=e[2],o=0,b=[];o<_.length;o++)n=_[o],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&b.push(a[n][0]),a[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(l&&l(e);b.length;)b.shift()();return i.push.apply(i,v||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],r=!0,_=1;_<s.length;_++){var c=s[_];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var r={},a={22:0},i=[];function n(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=r,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="//tb1.bdstatic.com/";var _=window.webpackJsonp=window.webpackJsonp||[],c=_.push.bind(_);_.push=e,_=_.slice();for(var v=0;v<_.length;v++)e(_[v]);var l=c;i.push([677,0,1,3]),s()}({178:function(t,e,s){"use strict";s.r(e);var r=s(179),a=s.n(r);for(var i in r)"default"!==i&&function(t){s.d(e,t,(function(){return r[t]}))}(i);e.default=a.a},179:function(t,e,s){"use strict";var r=s(8),a=s(23),i=s(18),n=s(17),_=s(4),c=s(24),v=s(19),l=s(2),o=s(0);l(e,"__esModule",{value:!0}),e.default=void 0;var b=o(s(29)),u=s(5),f=o(s(680)),p=s(26);function d(t,e){var s=r(t);if(a){var _=a(t);e&&(_=i(_).call(_,(function(e){return n(t,e).enumerable}))),s.push.apply(s,_)}return s}var h=(0,u.defineComponent)({setup:function(){var t=(0,u.reactive)({checked:!1,dialogShow:!1,htmlData:""});return(0,u.onMounted)((function(){(0,p.getConfigData)("tieba_promise").then((function(e){t.htmlData=e})),f.default.get("/mo/q/rec/getPersonalizedSwitch",{status:0,client_type:2}).then((function(e){e&&0==+e.errCode&&(t.checked=!!e.resData.data.status)}))})),function(t){for(var e=1;e<arguments.length;e++){var s,r=null!=arguments[e]?arguments[e]:{};if(e%2)_(s=d(Object(r),!0)).call(s,(function(e){(0,b.default)(t,e,r[e])}));else if(c)v(t,c(r));else{var a;_(a=d(Object(r))).call(a,(function(e){l(t,e,n(r,e))}))}}return t}({boxChange:function(e){t.checked?t.checked=e.target.checked:t.dialogShow=!0},onConfirm:function(){t.dialogShow=!1,f.default.get("/mo/q/rec/updatePersonalizedSwitch",{status:0,client_type:2}).then((function(e){e&&0==+e.errCode?t.checked=!!e.resData.data.status:console.log("请登录后操作")}))},onCancel:function(){t.dialogShow=!1,t.checked=!0}},(0,u.toRefs)(t))}});e.default=h},180:function(t,e,s){},279:function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{bgcolor:"#ffffff",topmargin:"5"}},[s("div",{domProps:{innerHTML:t._s(t.htmlData)}}),s("br"),s("br"),s("table",{staticClass:"f9",attrs:{cellspacing:"0",cellpadding:"5",width:"750",align:"center",border:"0"}},[s("tbody",[t._m(0),s("tr",[s("td",[t._m(1),t._m(2),s("p",{staticClass:"f9"},[t._v("百度贴吧是以兴趣主题聚合志同道合者的社区互动平台，贴吧主题涵盖了娱乐、游戏、小说、地区、生活等各方面，您可以利用百度贴吧浏览感兴趣的话题（搜索和浏览主题贴和主题吧）、展示自我（发贴、直播）、结交朋友（发表评论、点赞、回复、发私信）。为向您提供上述服务，我们会收集您必要的个人信息，此隐私政策旨在帮助您了解我们收集您个人信息的类型及我们如何利用和保护您的个人信息，同时我们也向您介绍了我们的隐私控制功能，您可以利用这些功能自主控制您个人信息的使用方式。")]),s("p",{staticClass:"f9"},[t._v("本隐私政策适用于您通过百度贴吧的网页端、移动端、供第三方网站和应用程序使用的百度贴吧软件开发工具包（SDK）和应用程序编程接口（API）等方式来访问和使用我们的产品和服务。")]),s("p",{staticClass:"f9"},[t._v("请您务必认真阅读本隐私政策，在确认充分了解并同意后再使用百度贴吧服务。")]),t._m(3),t._m(4),t._m(5),s("blockquote",[t._v(" 个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别您的身份或者反映您的活动情况的各种信息。 我们根据合法、正当、必要的原则，仅收集实现产品功能所必要的信息。 "),s("br"),s("br"),s("b",[t._v("(一) 您直接提供和我们自动采集的个人信息")]),s("br"),s("br"),s("b",[t._v("1. 百度贴吧业务功能")]),s("br"),s("br"),s("b",[t._v("百度贴吧业务功能分为核心业务功能、附加业务功能和第三方提供的服务：")]),t._m(6),s("br"),s("b",[t._v("2. 百度贴吧各项功能需要收集和使用的个人信息")]),s("br"),s("br"),s("b",[t._v("(1) 注册、登录、认证百度贴吧和相关服务涉及的个人信息")]),t._m(7),s("br"),s("b",[t._v("(2) 使用百度贴吧各项业务功能涉及的个人信息和权限")]),t._m(8),s("br"),s("b",[t._v("(二) 为您展示和推送个性化内容")]),s("br"),s("br"),s("b",[t._v("1. 个性化内容的展示和控制")]),s("blockquote",[t._v(" (1) 我们会分析您在贴吧内的使用行为信息（搜索、浏览等）、互动信息（关注、点赞、评论、回复）、地理位置（经过您的授权）形成用户画像，以便向您推荐相关性更高的内容。 "),s("br"),s("br"),t._v("(2) 为方便您自主控制您希望接收的个性化信息，您可以动态调整您的兴趣偏好，我们会基于您的选择为您推送相关的个性化内容和广告。 "),t._m(9),s("br"),s("div",{staticClass:"cancel-personality"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],staticStyle:{"vertical-align":"middle"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:[function(e){var s=t.checked,r=e.target,a=!!r.checked;if(Array.isArray(s)){var i=t._i(s,null);r.checked?i<0&&(t.checked=s.concat([null])):i>-1&&(t.checked=s.slice(0,i).concat(s.slice(i+1)))}else t.checked=a},t.boxChange]}}),s("span",{staticStyle:{"vertical-align":"middle"}},[t._v("个性化推荐")])])]),s("b",[t._v("2. 个性化广告的展示和控制")]),s("blockquote",[t._v(" 若您不喜欢我们为您推送的广告，您可以随时关闭该条广告，若您选择对该条广告“不感兴趣”，我们会基于您的反馈调整个性化推荐策略。 ")]),s("br"),s("b",[t._v("(三) 为您提供安全保障")]),s("br"),s("br"),t._v("为提高您使用我们与关联公司、合作方提供的产品和服务的安全性，我们可能使用您的信息用于身份验证、客户服务、安全防范、诈骗监测、信贷分析等，以预防、发现、调查欺诈、危害安全、非法或违反与我们的协议、政策或规则的行为，以保护您、我们的其他用户、我们或关联公司、合作方及社会公众的合法权益。 "),s("br"),s("br"),s("b",[t._v("提示您注意，当我们要将信息用于本隐私政策未载明的其它用途时，会事先征求您的同意。")]),s("br"),s("br"),s("b",[t._v("(四) 事先征得授权同意的例外")]),s("br"),s("br"),t._v("请注意，在以下情形中，收集、使用个人信息无需事先征得您的授权同意： "),s("br"),s("br"),t._v("1. 与国家安全、国防安全直接相关的； "),s("br"),t._v("2. 与公共安全、公共卫生、重大公共利益直接相关的； "),s("br"),t._v("3. 与犯罪侦查、起诉、审判和判决执行等直接有关的； "),s("br"),t._v("4. 出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的； "),s("br"),t._v("5. 所收集的个人信息是您自行向社会公众公开的； "),s("br"),t._v("6. 从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道； "),s("br"),t._v("7. 根据您的要求签订和履行合同所必需的； "),s("br"),t._v("8. 用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障； "),s("br"),t._v("9. 为开展合法的新闻报道所必需的； "),s("br"),t._v("10. 出于公共利益开展统计或学术研究所必要，且其对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的； "),s("br"),t._v("11. 法律法规规定的其他情形。 ")]),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27)])])])]),s("div",{attrs:{id:"ft"}},[t._v("© "+t._s((new Date).getFullYear())+" Baidu "),s("a",{attrs:{href:"https://www.baidu.com/duty/"}},[t._v("使用百度前必读")])]),t.dialogShow?s("div",{staticClass:"dialog-modal"},[s("div",{staticClass:"dialog"},[s("div",{staticClass:"ui-dialog-wrapper"},[s("div",{staticClass:"dialog-content"},[s("div",{staticStyle:{height:"70px"}},[s("div",{staticStyle:{width:"100%","text-align":"center",top:"18px",left:"10px",position:"absolute"}},[t._v(" 确定关闭个性化推荐吗？ ")]),s("span",{staticClass:"btn-default btn-small",on:{click:t.onConfirm}},[t._v("确认")]),s("span",{staticClass:"btn-sub btn-small",on:{click:t.onCancel}},[t._v("取消")])])])])])]):t._e()])},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"f9",attrs:{bgcolor:"#eeeeee"}},[e("div",{attrs:{align:"center"}},[e("b",[this._v("百度贴吧隐私政策")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"f9"},[e("b",[this._v(" 欢迎您使用百度贴吧服务！我们珍视您在向我们提供您的个人信息时对我们的信任，我们将按照本隐私政策处理您的个人信息并保障您信息的安全。 ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"f9 level-one-title",attrs:{id:"section0"}},[e("b",[this._v("引言")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"f9"},[e("b",[this._v("本隐私政策将帮助您了解以下内容：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("p",{staticClass:"f9"},[t._v("1、 "),s("a",{staticClass:"text-link",attrs:{href:"#section1"}},[t._v("我们如何收集和使用您的个人信息")]),s("br"),t._v("2、 "),s("a",{staticClass:"text-link",attrs:{href:"#section2"}},[t._v(" 我们如何使用 Cookie 和同类技术 ")]),s("br"),t._v("3、 "),s("a",{staticClass:"text-link",attrs:{href:"#section3"}},[t._v(" 我们如何共享、转让、公开披露您的个人信息 ")]),s("br"),t._v("4、 "),s("a",{staticClass:"text-link",attrs:{href:"#section4"}},[t._v(" 我们如何保存及保护您的个人信息 ")]),s("br"),t._v("5、 "),s("a",{staticClass:"text-link",attrs:{href:"#section5"}},[t._v("您的权利")]),s("br"),t._v("6、 "),s("a",{staticClass:"text-link",attrs:{href:"#section6"}},[t._v(" 我们如何处理未成年人的个人信息 ")]),s("br"),t._v("7、 "),s("a",{staticClass:"text-link",attrs:{href:"#section7"}},[t._v(" 您的个人信息如何进行跨境转移 ")]),s("br"),t._v("8、 "),s("a",{staticClass:"text-link",attrs:{href:"#section8"}},[t._v(" 隐私政策的修订 ")]),s("br"),t._v("9、 "),s("a",{staticClass:"text-link",attrs:{href:"#section9"}},[t._v("如何联系我们")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"f9 level-one-title",attrs:{id:"section1"}},[e("b",[this._v("一、我们如何收集和使用您的个人信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v(" (1) 百度贴吧的核心功能是实现社区互动所必备的功能，包括浏览感兴趣的话题（搜索和浏览主题贴和主题吧）、发布信息（发贴、直播）、结交朋友（发表评论、点赞、回复、发私信）； "),e("br"),e("br"),this._v("(2）在社区互动之外我们也为您提供了附加业务功能，包括装扮您的贴吧形象等增值的会员服务，您不使用附加业务功能不会影响核心业务功能的使用； "),e("br"),e("br"),this._v("(3) 另外百度贴吧还接入了第三方提供的服务，如蓝钻商城（由北京上古彩科技股份有限公司提供的集娱乐、交易、购物于一体的服务中心），您不使用第三方服务不会影响其他功能的使用。 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("p",[s("b",[t._v("1）百度账号注册信息")]),s("br"),s("br"),t._v("若您仅通过百度贴吧浏览和搜索主题吧或主题帖，则您无须登录百度账号。 若您使用百度贴吧发布信息或进行社交，则您需要注册并登录百度账号。 注册百度通用帐号时，您至少需向我们提供手机号；您还可以提供 头像、帐号名称、邮箱、创设帐号密码、密保问题信息，以丰富您的 帐号信息，保护您的帐号安全，方便您找回帐号。为了您可基于同一账号在 百度产品中享有一致性的体验，您在百度某一产品中账号关注及被关注记录可 能会被记录在百度帐号下，并在您登录贴吧产品时进行展示，此项服务不视为百度公司的必然义务。 "),s("br"),s("br"),s("b",[t._v("2）第三方账号登录信息")]),s("br"),s("br"),t._v("您可以使用第三方帐号（如微信、微博、QQ）登录百度贴吧。此时，您将授权百度贴吧读取您在该第三方帐号注册的公开信息（昵称、头像等）。 "),s("b",[t._v("第三方平台对您个人信息的处理将适用该第三方的隐私政策。")]),s("br"),s("br"),s("b",[t._v("3）认证主播实名认证信息")]),s("br"),s("br"),t._v("当您使用直播发布服务时，除注册信息外，您需要向芝麻信用（由芝麻信用管理有限公司提供服务）提供您的真实身份信息（手机号码、真实姓名、身份证号码、身份证正反面照片、人脸照片）、芝麻分及信用评估以完成实名认证。您授权百度贴吧查询您在实名认证中提供给芝麻信用的真实姓名、身份证号码、身份证正反面照片。 "),s("br"),s("br"),s("b",[t._v("这些信息属于个人敏感信息，我们将采用行业内通行的方式，尽最大的商业努力来保护您个人敏感信息的安全。如果您不提供这些信息，仅会使您无法使用直播发布服务，不会影响您正常使用百度贴吧的其他功能。 ")]),s("br"),s("br"),s("b",[t._v("4）申请借款服务实名认证信息")]),s("br"),s("br"),t._v("当您使用有钱花借款服务时，除注册信息外，您需要向我们提供包括但不限于您的姓名、身份证号、手机号码、银行卡号信息。"),s("b",[t._v("这些信息属于个人敏感信息，如果您不提供这些信息，仅会使您无法使用借款服务，不会影响您正常使用百度贴吧的其他功能。")]),s("br"),s("br"),s("b",[t._v("5）参加运营活动联系方式信息")]),s("br"),s("br"),t._v("百度贴吧会不时针对新推出的服务和功能发起运营活动，如果您参加相关运营活动，我们会通过运营活动界面收集包括但不限于您的身份信息、联系方式、交易帐号信息，以便与您取得联系、向您发放运营奖励等。若您不参加相关运营活动则无需提供前述信息。 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("p",[s("b",[t._v("1）设备和日志信息")]),s("br"),s("br"),t._v("与大多数互联网服务一样，我们的服务器会自动记录您在访问百度贴吧时所发出的请求，例如您输入的搜索关键词信息，您浏览和发布的贴文及评论信息，您上传的图片和视频信息、您的交易信息、您的IP地址、浏览器的类型和使用的语言、硬件设备信息、操作系统的版本、网络运营商的信息、您访问服务的日期、时间、时长等。 "),s("br"),s("br"),t._v("当你使用“百度贴吧”移动应用时，为了保障您正常使用“百度贴吧”移动应用服务，更准确定位并解决您在使用“百度贴吧”移动应用服务时遇到的问题，改进及优化“百度贴吧”移动应用的服务体验，保障您的帐号安全，我们会收集设备属性信息（例如您的硬件型号、操作系统版本、设备配置、唯一设备标识符、国际移动设备身份码IMEI、网络设备硬件地址MAC、广告标识符IDFA），设备连接信息（浏览器的类型、电信运营商、使用的语言）以及设备状态信息（例如设备传感器数据，设备应用安装列表）。对于从您的各种设备上收集到的信息，我们可能会将它们进行关联，以便我们能在这些设备上为您提供一致的服务。我们可能会将您的设备信息或电话号码与您的百度帐户相关联。同时，请您理解，当您将处于设备屏幕中“贴吧”移动应用切换到设备后台运行时，由于部分设备机型及系统原因，您此前使用“贴吧”移动应用相关功能而产生的信息收集行为，可能无法立即停止，从而导致短暂的后台信息收集行为。 "),s("br"),s("br"),s("b",[t._v("2）位置信息")]),s("br"),s("br"),s("b",[t._v("当您在发布的内容中展示您的位置时，经过您的授权后我们会读取")]),t._v("并展示您的地理位置信息，位置信息属于您的敏感个人信息， "),s("b",[t._v("您可以随时在系统中取消定位授权。")]),s("br"),s("br"),t._v("3）订购第三方产品或服务信息 "),s("br"),s("br"),t._v("若您使用蓝钻商城服务（由北京上古彩科技股份有限公司提供），为方便您在百度贴吧查询您在蓝钻商城的订单，您授权我们从蓝钻商城获取您的订单信息（包括您选择的商品、蓝钻余额及有效期、手机号码、交易状态及信息、IP地址、设备信息）。 "),s("br"),s("br"),t._v("4）联名会员服务间接收集的信息 "),s("br"),s("br"),t._v("我们跟我们的关联公司爱奇艺推出了联名会员活动，当您通过爱奇艺活动页面购买爱奇艺百度贴吧联名会员时，为了方便我们为您开通百度帐号赠送的贴吧超级会员权益，您授权我们从爱奇艺获取您的手机号码。 "),s("br"),s("br"),s("b",[t._v("5）各项业务功能对系统隐私权限的调用")]),s("br")]),s("table",{staticClass:"table-desc"},[s("tr",[s("th",{staticStyle:{width:"22%"}},[s("b",[t._v("设备权限")])]),s("th",{staticStyle:{width:"26%"}},[s("b",[t._v("业务功能")])]),s("th",{staticStyle:{width:"30%"}},[s("b",[t._v("权限授权方式")])]),s("th",{staticStyle:{width:"22%"}},[s("b",[t._v("可否关闭")])])]),s("tr",[s("td",[t._v("位置")]),s("td",[t._v("发贴时添加地理位置")]),s("td",[t._v("首次使用发贴服务并添加地理位置时")]),s("td",[t._v("是")])]),s("tr",[s("td",[t._v("相册")]),s("td",[t._v("发贴、聊天时从相册中选取并添加照片")]),s("td",[t._v("在用户首次选择上传照片时")]),s("td",[t._v("是")])]),s("tr",[s("td",[t._v("相机")]),s("td",[t._v(" 发贴、聊天、直播时拍摄照片或录制视频，以及使用扫一扫功能 ")]),s("td",[t._v("在用户首次选择拍摄视频或照片功能发布内容时")]),s("td",[t._v("是")])]),s("tr",[s("td",[t._v("录音")]),s("td",[t._v("发视频贴、语音贴、聊天、直播")]),s("td",[t._v("首次需使用麦克风功能时")]),s("td",[t._v("是")])]),s("tr",[s("td",[t._v("通讯录")]),s("td",[t._v("用户自愿参与的运营活动")]),s("td",[t._v("活动页面中，用户自愿邀请通讯录好友参与时")]),s("td",[t._v("是")])]),s("tr",[s("td",[t._v("通知")]),s("td",[t._v("发送消息")]),s("td",[t._v("首次打开客户端时")]),s("td",[t._v("是")])]),s("tr",[s("td",[t._v("短信")]),s("td",[t._v("发送消息")]),s("td",[t._v("首次注册登录时")]),s("td",[t._v("是")])])]),s("p",[s("b",[t._v("您可以通过百度贴吧移动端【我的-设置-隐私设置-应用权限】查阅隐私权限详情并关闭权限（相机、相册、录音、位置）。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"indent-p",staticStyle:{"padding-left":"0"}},[e("i",{staticStyle:{"text-decoration":"underline"}},[this._v("路径：")]),this._v("我的-设置-兴趣设置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"f9 level-one-title",attrs:{id:"section2"}},[e("b",[this._v("二、我们如何使用 Cookie 和同类技术")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",{staticClass:"f9"},[this._v(" 为确保网站正常运转，我们会在您的计算机或移动设备上存储名为 Cookie 的小数据文件。Cookie 通常包含标识符、站点名称以及一些号码和字符。Cookie主要的功能是便于您使用网站产品和服务，以及帮助网站统计独立访客数量等。运用Cookie技术，我们能够为您提供更加周到的个性化服务，并允许您设定您特定的服务选项。 "),e("br"),e("br"),this._v("当您使用百度贴吧的产品和服务时，会向您的设备发送Cookie。当您与我们提供给合作伙伴的服务（例如广告和/或推广服务，以及可能显示在其他网站上的由百度贴吧提供的服务功能）进行交互时，我们允许Cookie（或者其他匿名标识符）发送给百度公司的服务器。我们不会将 Cookie 用于本隐私政策所述目的之外的任何用途。您可根据自己的偏好管理或删除 Cookie。有关详情，请参见 AboutCookies.org。您可以清除计算机上保存的所有 Cookie，大部分网络浏览器都设有阻止 Cookie 的功能。但如果您这么做，则需要在每一次访问我们的网站时亲自更改用户设置，但您可能因为该等修改，无法登录或使用依赖于Cookie的百度公司提供的服务或功能。 "),e("br"),e("br"),this._v("您可以通过更改您的浏览器设置限制百度公司对Cookie的使用。以百度浏览器为例，您可以在百度浏览器右上方的下拉菜单的“浏览器设置”中，通过“隐私设置——清除浏览数据”，选择清除您的Cookie。如需详细了解其他浏览器如何更改浏览器设置，请参考该浏览器的帮助中心或其他相关功能指引页面，例如：https://support.google.com/chrome/search?q=cookie ；http://help.opera.com/opera/Windows/2393/en/controlPages.html#manageCookies。 ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"f9 level-one-title",attrs:{id:"section3"}},[e("b",[this._v("三、我们如何共享、转让、公开披露您的个人信息")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("p",{staticClass:"f9"},[s("b",[t._v("(一) 共享")])]),s("blockquote",[t._v(" 除非经过您本人事先授权同意，我们不会向第三方共享、转让您的个人信息，但经过处理无法识别特定个人且不能复原的除外。 "),s("br"),s("br"),s("b",[t._v("1. 在下列情况下，经过您的授权同意，我们可能会共享的个人信息：")]),s("blockquote",[t._v(" (1) "),s("b",[t._v("服务平台或服务提供商。")]),t._v("您授权我们将收集的基本身份信息，即昵称和头像提供给蓝钻商城，以便其基于您的身份满足您的请求。 "),s("br"),s("br"),t._v("(2) "),s("b",[t._v("广告、咨询类服务商/广告主。")]),t._v("未经您授权，我们不会将您的个人信息与提供广告、咨询类服务商共享。但我们可能会将经处理无法识别您的身份且接收方无法复原的信息，例如经匿名化处理的用户画像，与广告或咨询类服务商或广告主共享，以帮助其在不识别您个人的前提下，提升广告有效触达率，以及分析我们的产品和服务使用情况等。 ")]),t._v(" 2. 对我们与之共享个人信息的公司、组织和个人，我们会对其数据安全环境进行调查，与其签署严格的保密协定，要求他们按照我们的说明、本隐私政策以及其他任何相关的保密和安全措施来处理个人信息。 "),s("br"),s("br"),s("b",[t._v("3.您主动与他人共享的信息")]),s("blockquote",[s("b",[t._v("为了您方便管理贴吧的交流范围，我们为您提供了隐私管理工具，结合您发表内容的隐私属性不同，您可以选择发表公开贴或私密贴，对不同内容的可见范围进行细粒度的配置：")]),s("br"),s("br"),t._v("(1) 设置发布内容的公开范围： "),s("p",{staticClass:"indent-p"},[t._v("进入贴吧后，点击“+”，发布文字、图片、视频贴，内容生成后，点击右下角“所有人可见”，对公开范围进行设置。")]),s("br"),t._v("(2) 设置评论权限： "),s("p",{staticClass:"indent-p"},[t._v("进入贴吧后，点击【我的】，点击【设置】，点击【隐私设置】，点击【帖子评论权限】，设置帖子的评论权限为所有人、我的粉丝、我关注的。")]),s("br"),t._v("(3) 设置我关注的吧的公开范围： "),s("p",{staticClass:"indent-p"},[t._v("进入贴吧后，点击【我的】，点击【设置】，点击【隐私设置】，点击【我关注的吧】，设置完全公开、好友可见、完全隐藏。")]),s("br"),t._v("(4) 设置我的群组的公开范围： "),s("p",{staticClass:"indent-p"},[t._v("进入贴吧后，点击【我的】，点击【设置】，点击【隐私设置】，点击【我的群组】，设置完全公开、好友可见、完全隐藏。")]),s("br"),t._v("(5) 设置我的直播的公开范围： "),s("p",{staticClass:"indent-p"},[t._v("进入贴吧后，点击【我的】，点击【设置】，点击【隐私设置】，点击【我的直播】，设置我的直播公开范围为完全公开、完全隐藏。")]),s("br"),t._v("(6) 设置黑名单： "),s("p",{staticClass:"indent-p"},[t._v(" 进入贴吧后，点击【我的】，点击【设置】，点击【隐私设置】，分别点击【聊天黑名单】、【禁言黑名单】，进行黑名单的设置。 ")]),s("br"),s("b",[t._v("您也可以利用百度贴吧的分享功能与您的特定或不特定社交好友（如微信、微博、QQ）共享包括但不限于您浏览和搜索的内容、您发布的内容（包含文字、图片、视频和直播）等。")]),t._v("请您注意，您在使用第三方服务或分享功能的过程中，第三方对个人信息的处理将适用该第三方服务商或对应社交平台的隐私政策。请您在分享前充分考虑信息接收人的信誉情况，并建议您查看您利用的社交网络或第三方服务提供商的隐私政策，以了解他们如何处理您的信息，以便审慎决策。 ")])]),s("p",{staticClass:"f9"},[s("b",[t._v("(二) 转让")])]),s("blockquote",[t._v(" 我们不会将您的个人信息转让给除"),s("b",[t._v("关联公司")]),t._v("外的任何公司、组织和个人，但以下情况除外： "),s("br"),s("br"),t._v("1. 事先获得您的明确授权或同意； "),s("br"),t._v("2. 满足法律法规、法律程序的要求或强制性的政府要求或司法裁定； "),s("br"),t._v("3. 如果我们或我们的关联公司涉及合并、分立、清算、资产或业务的收购或出售等交易，您的个人信息有可能作为此类交易的一部分而被转移，我们将确保该等信息在转移时的机密性，并尽最大可能确保新的持有您个人信息的公司、组织继续受此隐私政策的约束，否则我们将要求该公司、组织重新向您征求授权同意。 ")]),s("p",{staticClass:"f9"},[s("b",[t._v("(三) 公开披露")])]),s("blockquote",[t._v(" 我们仅会在以下情况下，公开披露您的个人信息： "),s("br"),t._v("1. 获得您的明确同意； "),s("br"),t._v("2. 基于法律法规、法律程序、诉讼或政府主管部门强制性要求下。 ")]),s("p",{staticClass:"f9"},[s("b",[t._v("(四) 共享、转让、公开披露个人信息时事先征得授权同意的例外")])]),s("blockquote",[t._v(" 在以下情形中，共享、转让、公开披露个人信息无需事先征得个人信息主体的授权同意： "),s("br"),t._v("1. 与国家安全、国防安全直接相关的； "),s("br"),t._v("2. 与公共安全、公共卫生、重大公共利益直接相关的； "),s("br"),t._v("3. 与犯罪侦查、起诉、审判和判决执行等直接相关的； "),s("br"),t._v("4. 出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的； "),s("br"),t._v("5. 个人信息主体自行向社会公众公开的个人信息； "),s("br"),t._v("6. 从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。 ")]),s("p",{staticClass:"f9"},[s("b",[t._v("(五) 我们所接入的第三方软件开发工具包（SDK）")])]),s("blockquote",[t._v(" 为了适配在不同手机设备上使用【贴吧】以及第三方平台服务，实现【您的手机设备身份认证、手机设备安全、接收信息推送、登录第三方平台账号、通过第三方平台分享信息以及支付安全】，【贴吧】App接入了第三方SDK。上述第三方SDK提供方包括【手机设备厂商、社交平台、通讯运营商和第三方支付机构】。部分第三方SDK可能会调用您的设备权限、获取您的相关信息，以便您在不同的手机设备或第三方平台上正常使用相应功能。不同的第三方SDK所调用的设备权限类型以及所获得的信息可能不同，可能包括获取您的位置信息、读/写您的外部存储卡、读取您的手机状态和身份、查看WLAN连接、检索正在运行的应用/蓝牙。关于第三方SDK具体调用的设备权限类型，以及如何收集、使用您的个人信息，建议您参考第三方SDK的相关服务协议及隐私政策。如果您希望进一步了解我们所接入的第三方SDK情况，请您阅读 "),s("a",{attrs:{href:"/tb/cms/tieba-fe/thirdparty_sdk.html",target:"_blank"}},[t._v(" 第三方SDK情况说明 ")]),t._v("。 ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"f9 level-one-title",attrs:{id:"section4"}},[e("b",[this._v("四、我们如何保存及保护您的个人信息")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("p",{staticClass:"f9"},[s("b",[t._v("(一) 保存期限")])]),s("blockquote",[t._v(" 您在使用百度贴吧产品及服务期间，我们将持续为您保存您的个人信息。 "),s("br"),t._v("如果您注销帐户或主动删除上述信息，我们将依据网络安全法等法律法规规定保存您的信息。在您注销帐户或主动删除上述信息后，我们不会再对您的个人信息进行商业化使用，但我们可能会对您的个人信息进行匿名化处理后使用。 ")]),s("p"),s("p",{staticClass:"f9"},[s("b",[t._v("(二) 保存地域")])]),s("blockquote",[t._v("您的个人信息均储存于中华人民共和国境内。如我们需要向境外传输您的个人信息，我们会严格按照法律法规的规定执行，并保证您的个人信息安全。 ")]),s("p"),s("p",{staticClass:"f9"},[s("b",[t._v("(三) 安全措施")])]),s("blockquote",[s("p",[t._v("1. 我们会以业界成熟的安全标准和规范收集、使用、存储和传输用户信息，并通过用户协议和隐私政策告知您相关信息的使用目的和范围。")]),s("p",[t._v("2. 我们非常重视信息安全。我们成立了专责团队负责研发和应用多种安全技术和程序等，我们会对安全管理负责人和关键安全岗位的人员进行安全背景审查，我们建立了完善的信息安全管理制度和内部安全事件处置机制等。我们会采取适当的符合业界标准的安全措施和技术手段存储和保护您的个人信息，以防止您的信息丢失、遭到被未经授权的访问、公开披露、使用、修改、毁损、丢失或泄漏。我们会采取一切合理可行的措施，保护您的个人信息。我们会使用加密技术确保数据的保密性；我们会使用受信赖的保护机制防止数据遭到恶意攻击。")]),s("p",[t._v("3. 我们会对员工进行数据安全的意识培养和安全能力的培训和考核，加强员工对于保护个人信息重要性的认识。我们会对处理个人信息的员工进行身份认证及权限控制，并会与接触您个人信息的员工签署保密协议，明确岗位职责及行为准则，确保只有授权人员才可访问个人信息。"),s("b",[t._v("对于违规员工，我们会严格按照百度内部管理制度及相关法律法规规定追究法律责任。")])]),s("p",[t._v("4. 我们提醒您注意，互联网并非绝对安全的环境，当您通过社交软件与其他用户交互信息时，不确定第三方软件对信息的传递是否完全加密，请注意确保您个人信息的安全，我们建议您不要通过此类方式发送个人信息，以免个人信息泄露。请使用复杂密码，协助我们保证您的账号以及个人信息安全。")]),s("p",[t._v("5. 我们也请您理解，在互联网行业由于技术的限制和飞速发展以及可能存在的各种恶意攻击手段，即便我们竭尽所能加强安全措施，也不可能始终保证信息的百分之百安全。"),s("b",[t._v("请您了解，您使用我们的产品和/或服务时所用的系统和通讯网络，有可能在我们控制之外的其他环节而出现安全问题。")])]),s("p",[s("b",[t._v("6. 根据我们的安全管理制度，个人信息泄露、毁损或丢失事件被列为最特大安全事件，一经发生将启动公司最高级别的紧急预案，由【安全部、政府关系部、法务部】等多个部门组成联合应急响应小组处理。")])])]),s("p"),s("p",{staticClass:"f9"},[s("b",[t._v("(四) 安全事件通知")])]),s("blockquote",[s("p",[t._v("1. 我们会制定网络安全事件应急预案，及时处置系统漏洞、计算机病毒、网络攻击、网络侵入等安全风险，在发生危害网络安全的事件时，我们会立即启动应急预案，采取相应的补救措施，并按照规定向有关主管部门报告。 ")]),s("p",[t._v("2. 个人信息泄露、毁损、丢失属于公司级特大安全事件，我们会负责定期组织工作组成员进行安全预案演练，防止此类安全事件发生。若一旦不幸发生，我们将按照最高优先级启动应急预案，组成紧急应急小组，在最短时间内追溯原因并减少损失。")]),s("p",[t._v("3. 在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知安全事件的基本情况和可能的影响、我们已采取或将要采取的处理措施、您可自主防范和降低的风险的建议、对您的补救措施等。我们将及时将事件相关情况以站内通知、短信通知、电话或邮件等您预留的联系方式告知您，难以逐一告知时我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。")])]),s("p")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"f9 level-one-title",attrs:{id:"section5"}},[e("b",[this._v("五、您的权利")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("p",{staticClass:"f9"},[t._v(" 按照中国相关的法律、法规、标准，以及其他国家、地区的通行做法，我们保障您对自己的个人信息行使以下权利： ")]),s("p",{staticClass:"f9"},[s("b",[t._v("(一) 访问、变更您的个人信息")])]),s("blockquote",[t._v(" 您可以通过如下方式访问您的个人信息： "),s("br"),s("br"),s("b",[t._v("1. 访问、变更帐户信息（包括但不限于昵称、头像、性别、个性签名）：")]),s("br"),s("br"),t._v("您可以登录passport.baidu.com，访问、变更您的帐户信息（包括但不限于性别、生日、血型、地址、婚姻状况、教育程度、教育经历、职业、手机号码、密保邮箱、工作单位、头像）。您还可以通过百度贴吧的【我的】、【帐号与安全】、【个人资料】进行上述操作。 "),s("br"),s("br"),t._v("当您发现我们处理的关于您的个人信息有错误时，您有权对错误或不完整的信息作出更正，经对您的身份进行验证后，您可以自行在百度贴吧内进行更正，或通过反馈与报错等将您的更正申请提交给我们。 "),s("br"),s("br"),s("b",[t._v("2. 访问使用信息（浏览、操作记录和消费记录）：")]),s("br"),s("br"),t._v("(1) 您可以访问您在贴吧的浏览历史、关注记录（关注的人、关注的吧）、粉丝以及发贴、回复情况： "),s("p",{staticClass:"indent-p"},[s("i",{staticStyle:{"text-decoration":"underline"}},[t._v("路径：")]),t._v(" 进入贴吧后，点击【我的】，进入主界面，进行信息查询访问。")]),s("br"),s("p",{staticClass:"indent-p"},[t._v(" 若您不希望访问您的浏览历史，您也可以开启无痕浏览模式。 ")]),s("p",{staticClass:"indent-p"},[s("i",{staticStyle:{"text-decoration":"underline"}},[t._v("路径：")]),t._v(" 进入贴吧后，点击【我的】，点击【设置】，点击【隐私设置】，可以开启/关闭无痕浏览功能。 ")]),s("br"),s("p",{staticClass:"indent-p"},[t._v("若您不希望访问您的聊天信息，您也可以清空聊天信息。")]),s("p",{staticClass:"indent-p"},[s("i",{staticStyle:{"text-decoration":"underline"}},[t._v("路径：")]),t._v(" 进入贴吧后，点击【我的】、点击【设置】、点击【辅助功能】，可以清空聊天消息。 ")]),s("br"),t._v("(2) 访问操作记录（T豆消费记录、发贴记录、帐号操作记录）： "),s("p",{staticClass:"indent-p"},[s("i",{staticStyle:{"text-decoration":"underline"}},[t._v("路径：")]),t._v(" 进入贴吧后，点击【我的】，点击【设置】，点击【帐号管理】，点击【贴吧操作记录】，访问T豆消费记录、发贴记录、帐号操作记录。 ")]),s("br"),t._v("(3）访问消费记录（支出、收入、充值记录）： "),s("p",{staticClass:"indent-p"},[s("i",{staticStyle:{"text-decoration":"underline"}},[t._v("路径：")]),t._v(" 进入贴吧后，点击【我的】，点击【更多】，点击【消费记录】，访问支出、收入、充值记录。 ")]),s("br"),s("b",[t._v("3. 访问订单信息（卡包信息、积分兑换记录、订单记录、交易记录）：")]),s("br"),s("br"),t._v("(1) 访问卡包信息： "),s("p",{staticClass:"indent-p"},[s("i",{staticStyle:{"text-decoration":"underline"}},[t._v("路径：")]),t._v(" 进入贴吧后，点击【我的】，点击【卡包】，访问卡包信息。 ")]),s("br"),t._v("(2) 访问积分兑换记录： "),s("p",{staticClass:"indent-p"},[s("i",{staticStyle:{"text-decoration":"underline"}},[t._v("路径：")]),t._v(" 进入贴吧后，点击【我的】，点击【会员中心】，点击【积分商城】，查看兑换记录。 ")]),s("br"),t._v("(3) 访问订单记录、交易记录： "),s("p",{staticClass:"indent-p"},[s("i",{staticStyle:{"text-decoration":"underline"}},[t._v("路径：")]),t._v(" 进入贴吧后，点击【我的】，点击【蓝钻商城】，点击【我的】，查看交易记录、订单记录。 ")]),s("br"),t._v("如果您无法通过上述方式访问这些个人信息，"),s("b",[t._v("您可以通过百度贴吧移动端【我的-设置-意见反馈】、【我的-服务中心-我要反馈】联系我们。")])]),s("p",{staticClass:"f9"},[s("b",[t._v("(二) 改变您授权同意的范围")])]),s("blockquote",[s("b",[t._v("您可以随时给予或收回您的授权同意。")]),s("br"),s("br"),t._v("1. 登录passport.baidu.com，解除百度帐号与第三方帐号的绑定关系。 "),s("br"),t._v("2. 当您撤回同意或授权后，我们无法继续为您提供撤回同意或授权所对应的服务，也将不再处理您相应的个人信息。但您撤回同意或授权的决定，不会影响此前基于您的同意或授权而开展的个人信息处理。 ")]),s("p",{staticClass:"f9"},[s("b",[t._v("(三) 删除您的个人信息")])]),s("blockquote",[s("b",[t._v("在以下情形中，您可以向我们提出删除个人信息的请求，您可以通过【我的-服务中心-我要反馈】、【我的-设置-意见反馈】随 时与我们联系：")]),s("br"),s("br"),t._v("1. 如果我们违反法律法规或与您的约定收集、使用、与他人共享或转让您的个人信息； "),s("br"),t._v("2. 如果我们违反法律法规规定或与您的约定，公开披露您的个人信息，您有权要求我们立即停止公开披露的行为，并发布通知要求相关接收方删除相应的信息。 "),s("br"),s("br"),t._v("当您从我们的服务中删除信息后，我们可能不会立即在备份系统中删除相应的信息，但会在备份更新时删除这些信息。 ")]),s("p",{staticClass:"f9"},[s("b",[t._v("(四) 注销您的帐号")])]),s("blockquote",[s("b",[t._v("1. 您可以随时注销此前注册的帐号。")]),s("br"),s("br"),t._v("您可以登录passport.baidu.com，注销您的百度帐号。 "),s("br"),s("i",{staticStyle:{"text-decoration":"underline"}},[t._v("路径：")]),t._v(" 您可以在百度移动端点击【我的】、点击【设置】、点击【帐号与安全】，点击【帐号急救】，点击【帐号注销】，注销您的帐号。 "),s("br"),s("br"),t._v("一旦您注销百度帐号，将无法使用需登陆帐号方可使用的百度公司产品及服务，因此请您谨慎操作。 "),s("br"),s("br"),t._v("我们为了保护您或他人的合法权益会结合您对百度公司各产品和服务的使用情况判断是否支持或允许您的上述请求。例如若您在百度经验里有未提现的稿费，或您在百度糯米里有未消费的糯米储值卡，或您的网盘中还存有资料，则我们不会立即支持您的请求。 "),s("br"),s("br"),s("b",[t._v(" 2. 您通过第三方帐号（如微信、微博、QQ等）授权登录百度贴吧时，需要向第三方申请注销帐号。 ")])]),s("p",{staticClass:"f9"},[s("b",[t._v("(五) 提前获知产品和服务停止运营权")])]),s("blockquote",[t._v(" 百度贴吧愿一直陪伴您，若因特殊原因导致百度贴吧产品和服务被迫停止运营，我们将在产品或服务的主页面或站内信或向您发送电子邮件或其他合适的能触达您的方式通知您，并将停止对您个人信息的收集，同时会按照法律规定对所持有的您的个人信息进行删除或匿名化处理等。 ")]),s("p",{staticClass:"f9"},[s("b",[t._v("(六) 响应您的上述请求")])]),s("blockquote",[s("b",[t._v("为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。")]),t._v(" 我们可能会先要求您验证自己的身份，然后再处理您的请求。 "),s("b",[t._v("如您不满意，还可以通过百度贴吧移动端【我的-设置-意见反馈】、【我的-服务中心】联系我们。")]),s("br"),s("br"),t._v("对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情况收取一定成本费用。对于那些无端重复、需要过多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者非常不切实际（例如，涉及备份磁带上存放的信息）的请求，我们可能会予以拒绝。 "),s("br"),s("br"),s("b",[t._v("在以下情形中，按照法律法规要求，我们将无法响应您的更正、删除、注销信息的请求： ")]),s("br"),s("br"),t._v("1. 与国家安全、国防安全直接相关的； "),s("br"),t._v("2. 与公共安全、公共卫生、重大公共利益直接相关的； "),s("br"),t._v("3. 与犯罪侦查、起诉、审判和执行判决等直接相关的； "),s("br"),t._v("4. 我们有充分证据表明您存在主观恶意或滥用权利的（如您的请求将危害公共安全和其他人合法权益，或您的请求超出了一般技术手段和商业成本可覆盖的范围）； "),s("br"),t._v("5. 响应个人信息主体的请求将导致您或其他个人、组织的合法权益受到严重损害的； "),s("br"),t._v("6. 涉及商业秘密的。 "),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"f9 level-one-title",attrs:{id:"section6"}},[e("b",[this._v("六、我们如何处理未成年人的个人信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",{staticClass:"f9"},[e("b",[this._v("百度公司非常重视对未成年人信息的保护。")])]),e("p",{staticClass:"f9"},[this._v(" 对于使用百度贴吧产品和服务的未成年人，我们会采取额外保障措施以保护其个人信息。 ")]),e("p",{staticClass:"f9"},[this._v(" 我们的产品和服务主要面向成年人，若您是未满14周岁的未成年人，在使用百度贴吧产品和服务前，应在您的父母或其他监护人监护、指导下共同仔细阅读本隐私政策。 ")]),e("p",{staticClass:"f9"},[this._v(" 我们只会在受到法律允许、父母或监护人明确同意或者保护未成年人所必要的情况下收集、使用、公开披露未成年的个人信息。如果我们发现在未事先获得可证实的父母同意的情况下收集了未成年人的个人信息，将会采取措施尽快删除相关信息。 ")]),e("p",{staticClass:"f9"},[this._v(" 如果任何时候监护人有理由相信我们在未获监护人同意的情况下收集了未成年人的个人信息，请通过"),e("b",[this._v("【我的-设置-意见反馈】、【我的-服务中心】")]),this._v("联系我们，我们会采取措施尽快删除相关数据。 ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"f9 level-one-title",attrs:{id:"section7"}},[e("b",[this._v("七、您的个人信息如何进行跨境转移")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",{staticClass:"f9"},[this._v("我们收集的您的个人信息将存储在中国境内，如涉及跨境我们会严格按照法律法规的规定执行，开展数据出境安全评估 并保证您的个人信息安全。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"f9 level-one-title",attrs:{id:"section8"}},[e("b",[this._v("八、隐私政策的修订")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("p",{staticClass:"f9"},[t._v("我们的隐私政策可能变更。")]),s("p",{staticClass:"f9"},[t._v(" 未经您明确同意，我们不会削减您按照本隐私政策所应享有的权利。我们会在本页面上发布对本隐私政策所做的任何变更。 ")]),s("p",{staticClass:"f9"},[t._v(" 对于重大变更， "),s("b",[t._v(" 我们会在产品或服务的主要曝光页面或站内信或向您发送电子邮件或其他合适的能触达您的方式通知您。 ")]),t._v(" 若您不同意该等变更可以停止使用百度贴吧产品和服务，若您继续使用我们的产品和/或服务，即表示您同意受修订后的本隐私政策的约束。 ")]),s("p",{staticClass:"f9"},[s("b",[t._v("本政策所指的重大变更包括但不限于：")])]),s("blockquote",[t._v(" 1. 我们的服务模式发生重大变化。如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等； "),s("br"),t._v("2. 我们在所有权结构、组织架构等方面发生重大变化。如业务调整、破产并购等引起的所有者变更等； "),s("br"),t._v("3. 个人信息共享、转让或公开披露的主要对象发生变化； "),s("br"),t._v("4. 您参与个人信息处理方面的权利及其行使方式发生重大变化； "),s("br"),t._v("5. 我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化时； "),s("br"),t._v("6. 个人信息安全影响评估报告表明存在高风险时。 ")]),s("p",{staticClass:"f9"},[t._v("本政策更新后，我们会将本政策的旧版本存档，供您查阅。")]),s("p",{staticClass:"f9"},[t._v(" 如有本隐私政策未尽事宜，以 "),s("a",{staticClass:"link",attrs:{href:"https://www.baidu.com/duty/yinsiquan.html"}},[t._v(" 《百度隐私权保护声明》 ")]),t._v("为准。 ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"f9 level-one-title",attrs:{id:"section9"}},[e("b",[this._v("九、如何联系我们 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("p",{staticClass:"f9"},[s("b",[t._v("百度贴吧的成长离不开各方用户达人的共同努力，我们非常感谢您对百度贴吧数据更新、使用反馈方面的贡献。 ")])]),s("p",{staticClass:"f9"},[s("b",[t._v("您可以通过百度贴吧移动端【我的-设置-意见反馈】、【我的-服务中心】反馈您对百度贴吧产品的建议以及在使用过程中遇到的问题，以帮助我们优化产品功能及服务，使更多用户更加便捷的使用我们的产品和服务。")])]),s("p",{staticClass:"f9"},[s("b",[t._v("您可以通过用户隐私投诉平台 "),s("a",{staticClass:"link",attrs:{href:"http://help.baidu.com/personalinformation"}},[t._v("(http://help.baidu.com/personalinformation）")]),t._v("同我们联系。")]),t._v(" 一般情况下，我们将在"),s("b",[t._v("【30】")]),t._v("天内回复。")]),s("p",{staticClass:"f9"},[s("b",[t._v("您还可以通过如下联络方式同我们联系：")])]),s("blockquote",[t._v(" 中国北京市海淀区上地十街10号 "),s("br"),t._v("北京百度网讯科技有限公司 法务部 "),s("br"),t._v("邮政编码：100085 ")]),t._v(" 为保障我们高效处理您的问题并及时向您反馈，需要您提交身份证明、有效联系方式和书面请求及相关证据，我们会在验证您的身份后处理您的请求。 "),s("br"),s("br"),t._v(" 如果您对我们的回复不满意，特别是您认为我们的个人信息处理行为损害了您的合法权益，您还可以通过以下外部途径寻求解决方 案："),s("b",[t._v("向【北京市海淀区人民法院提起诉讼】。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"f9"},[e("span",{staticClass:"f9"},[e("b",[this._v("附：名词解释 ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("p",{staticClass:"f9"},[t._v("1. "),s("b",[t._v("个人信息")]),t._v("是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。个人信息包括姓名、出生日期、身份证件号码、个人生物识别信息、住址、通信通讯联系方式、通信记录和内容、帐号密码、财产信息、征信信息、行踪轨迹、住宿信息、健康生理信息、交易信息等。")]),s("p",{staticClass:"f9"},[t._v("2. "),s("b",[t._v("个人敏感信息")]),t._v("是指一旦泄露、非法提供或滥用可能危害人身和财产安全，极易导致个人名誉、身心健康受到损害或歧视性待遇等的个人信息。个人敏感信息包括身份证件号码、个人生物识别信息、银行账号、通信记录和内容、财产信息、征信信息、行踪轨迹、住宿信息、健康生理信息、交易信息、14岁以下（含）未成年人的个人信息等。")]),s("p",{staticClass:"f9"},[t._v("3. "),s("b",[t._v("设备")]),t._v(" 是指可用于使用百度产品和/或服务的装置，例如桌面设备、平板电脑或智能手机。 ")]),s("p",{staticClass:"f9"},[t._v("4. "),s("b",[t._v("唯一设备标识符")]),t._v("是指具有唯一性的设备标识符（有时称为通用专属 ID 或 UUID）是指由设备制造商编入到设备中的一串字符，可用于以独有方式标识相应设备（例如国际移动设备身份码IMEI号、网络设备硬件地址MAC）。不同的设备标识符在有效期、用户是否可以重置以及获取方式方面会有所不同。相应设备可能会有多个不同的具有唯一性的设备标识符。唯一设备标识符可用于多种用途，其中包括安全性和欺诈检测、同步服务（如用户的电子邮件收件箱）、记录用户的偏好设置以及提供具有相关性的广 告。")]),s("p",{staticClass:"f9"},[t._v("5. "),s("b",[t._v("Cookie")]),t._v("是指支持服务器端（或者脚本）在客户端上存储和检索信息的一种机制，通过增加简单、持续的客户端状态来扩展基于Web的客户端/服务器应用。服务器在向客户端返回HTTP对象的同时发送一条状态信息，并由客户端保存。状态信息中说明了该状态下有效的URL范围。此后，客户端发起的该范围内的HTTP请求都将把该状态信息的当前值从客户端返回给服务器，这个状态信息被称为Cookie。")]),s("p",{staticClass:"f9"},[t._v("6. "),s("b",[t._v("匿名标示符")]),t._v("是指百度基于设备参数，通过机器算法，生成一个标示符例如BAIDUID、CUID，帮助百度识别一个用户，为其提供更好的产品和/或服务与改善用户体验。")]),s("p",{staticClass:"f9"},[t._v("7. "),s("b",[t._v("用户画像")]),t._v("是指通过收集、汇聚、分析个人信息，对某特定自然人个人特征，如其职业、经济、健康、教育、个人喜好、信用、行为等方面做出分析或预测，形成其个人特征模型的过程。直接使用特定自然人的个人信息，形成该自然人的特征模型，称为直接用户画像。使用来源于特定自然人以外的个人信息，如其所在群体的数据，形成该自然人的特征模型，称为间接用户画像。")]),s("p",{staticClass:"f9"},[t._v("8. "),s("b",[t._v("匿名")]),t._v("化是指通过对个人信息的技术处理，使得个人信息主体无法被识别，且处理后的信息不能被复原的过程。个人信息经匿名化处理后所得的信息不属于个人信息。")]),s("p",{staticClass:"f9"},[t._v("9. "),s("b",[t._v("关联公司")]),t._v("是指百度贴吧的经营者北京百度网讯科技有限公司（“百度公司”）及其他与百度公司存在关联关系的公司的单称或合称。“关联关系”是指对于任何主体（包括个人、公司、合伙企业、组织或其他任何实体）而言，即其直接或间接控制的主体，或直接或间接控制其的主体，或直接或间接与其受同一主体控制的主体。前述“控制”指，通过持有表决权、合约或其他方式，直接或间接地拥有对相关主体的管理和决策作出指示或责成他人作出指示的权力或事实上构成实际控制的其他关系。")]),s("p",{staticClass:"f9",staticStyle:{"text-align":"right"}},[s("b",[t._v("再次感谢您对百度贴吧的信任和使用！")])]),s("p",{staticClass:"f9",staticStyle:{"text-align":"right"}},[t._v(" 北京百度网讯科技有限公司 ")]),s("p",{staticClass:"f9",staticStyle:{"text-align":"right"}},[t._v(" 2021年8月11日生效 ")])])}]},677:function(t,e,s){t.exports=s(678)},678:function(t,e,s){"use strict";var r=s(0),a=r(s(13)),i=r(s(679)),n=r(s(5));a.default.use(n.default),new a.default({render:function(t){return t(i.default)}}).$mount("#app")},679:function(t,e,s){"use strict";s.r(e);var r=s(279),a=s(178);for(var i in a)"default"!==i&&function(t){s.d(e,t,(function(){return a[t]}))}(i);s(754);var n=s(3),_=Object(n.a)(a.default,r.a,r.b,!1,null,null,null);e.default=_.exports},754:function(t,e,s){"use strict";var r=s(180);s.n(r).a}});
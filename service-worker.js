if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const c=e=>a(e,i),o={module:{uri:i},exports:r,require:c};s[i]=Promise.all(f.map((e=>o[e]||c(e)))).then((e=>(d(...e),r)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.2a8aac19.css",revision:"71e7f5d42507e929089d678540813dd5"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/33.26096aa1.js",revision:"7dce7ec014487506f6271787bec31f6f"},{url:"assets/js/34.c87debd0.js",revision:"cae56f3ee377e019e2bed1859c036a9c"},{url:"assets/js/35.de7b09a2.js",revision:"453f5c5b4e5c64b2974c28fa8f3b9a03"},{url:"assets/js/36.d7bc2056.js",revision:"80d4caf3ea646a8a5b2c82087ed5fad9"},{url:"assets/js/37.3746e47d.js",revision:"ac9e60738884f76224be16e5679465e0"},{url:"assets/js/38.5d4e93f4.js",revision:"580947840d0ab87bdfb55724caac0ecb"},{url:"assets/js/app.010c7169.js",revision:"7aaa90b38d705ae88f9151e38c330a66"},{url:"assets/js/layout-Blog.95a4d5f3.js",revision:"be8e48e28b1c2ffc5e62b0f346c7b4da"},{url:"assets/js/layout-Layout.985ed51b.js",revision:"f5a8aebb7a8c44e7c52e23f5ab7fa3dd"},{url:"assets/js/layout-NotFound.018b9f42.js",revision:"12735bc8b8100ffde45ee2ee2d9918e8"},{url:"assets/js/layout-Slide.6547e3fe.js",revision:"53ae875cbda54b867f6d4b198f8fe17a"},{url:"assets/js/page-BlogHome.728e2bb2.js",revision:"50b8a6898efe31b7b901748f6894a879"},{url:"assets/js/page-Componentdisabled.7c159628.js",revision:"2c46bfe5008615fcff488fddf08d465c"},{url:"assets/js/page-CustomLayout.b7161c68.js",revision:"be90ff3db6f626722eb7b70c1e971860"},{url:"assets/js/page-Encryptionarticle.972ae357.js",revision:"71c664d6833359e8071ff45ca980f80f"},{url:"assets/js/page-Guides.068cb138.js",revision:"dad685aa4fc65f701dc3c90cc8871bb4"},{url:"assets/js/page-IntroPage.31a4d2e4.js",revision:"08f32ab035ca8873f2658159826b8680"},{url:"assets/js/page-MarkdownEnhance.2b866cfc.js",revision:"e204349b53281d6048f255d6bdaaf8d7"},{url:"assets/js/page-Markdown增强.5c38d2d0.js",revision:"5d8fb6b0291a6b4099f4d8a446b62280"},{url:"assets/js/page-pageconfig.158cdb96.js",revision:"c592ae1bdc90fb18e92b2a263360ddb5"},{url:"assets/js/page-Projecthome.ccb91035.js",revision:"fefd3cd2e75bb482ad06efd2008c859e"},{url:"assets/js/page-Slidepage.6e027e6c.js",revision:"080b7c9ebec33a68d8f83b32fd137385"},{url:"assets/js/page-主要功能与配置演示.dfe73b34.js",revision:"4bcdf0aef0b272ccac82d259be913b3e"},{url:"assets/js/page-博客主页.04bf20a3.js",revision:"d0fbda8edf1b355574a0c473b924db68"},{url:"assets/js/page-密码加密的文章.4d7009d7.js",revision:"5c2d60b5ff42b5643336a54e8bc91466"},{url:"assets/js/page-幻灯片页.5748d149.js",revision:"8b71297155ecc8f9add95f992d298814"},{url:"assets/js/page-组件禁用.598ffd65.js",revision:"8b66008eada124a9a08dbb820020c098"},{url:"assets/js/page-自定义布局.cccef4d9.js",revision:"32fe25899a7a70d0c987f0e2be998c66"},{url:"assets/js/page-页面配置.1c400929.js",revision:"fdd6ff5c9db3d550621da8dfd4cf696c"},{url:"assets/js/page-项目主页.3e9f7a5a.js",revision:"e36164355ef08b84f67c53dcd0890785"},{url:"assets/js/vendors~flowchart.fdd633ff.js",revision:"4d09c9b5b112dc9a915618f5a692e100"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.2594b3aa.js",revision:"d25dbbfc70611c877070bf40871d52ed"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.f1c9c5fd.js",revision:"51eae4e1df8995b828838856d76aaf39"},{url:"assets/js/vendors~layout-Layout.ce9cac8a.js",revision:"4116eda75d0ccbb8f531512ed33eb438"},{url:"assets/js/vendors~mermaid.84937671.js",revision:"8ab05b2e6f69ce0f2fd23438bda0440b"},{url:"assets/js/vendors~photo-swipe.6ccc8c57.js",revision:"0b770e78ddb4d31c011cf837a3556d09"},{url:"assets/js/vendors~reveal.2050afd7.js",revision:"4cbc7344fda69480c3b797056809cdc0"},{url:"assets/js/vendors~waline.fe577476.js",revision:"4b82bb5f390fe482ea3e7cdc39e71e2a"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"0819bd6e35cf2803fc21ecd7fd094a0a"},{url:"article/index.html",revision:"c3745f3484a770dfbb44877926670618"},{url:"category/Guide/index.html",revision:"44da58361b18b3472cd691da27226e56"},{url:"category/index.html",revision:"2f231af88910826dbffea6cea4ca39a3"},{url:"category/使用指南/index.html",revision:"ee119fd217af91469929480dc726ef16"},{url:"encrypt/index.html",revision:"eb7bbd3997ff3c6472db69038125e368"},{url:"guide/disable/index.html",revision:"d589370378baa0d82711ca718960eece"},{url:"guide/encrypt/index.html",revision:"dfd93b395ad6a57d4af95104ffee5532"},{url:"guide/index.html",revision:"94bf92340bdeeddad4b9daf9fb7797bb"},{url:"guide/markdown/index.html",revision:"333210a8fa4392a724545bb4998f86ef"},{url:"guide/page/index.html",revision:"ec82e0660223557b621dd33dfb990c22"},{url:"home/index.html",revision:"c7af34fb3e54898f57fc880c767411fb"},{url:"index.html",revision:"0cf60e73d2be32de4c670d13d117824b"},{url:"intro/index.html",revision:"853b0eb427385f7c5a771352cab54c52"},{url:"layout/index.html",revision:"6d112e799a219493d64f062b932df969"},{url:"slide/index.html",revision:"3103bff5436dd9fd20e054a682d5db9c"},{url:"slides/index.html",revision:"fc8fe01ccf064370f3a5343ccac8e13d"},{url:"star/index.html",revision:"05d7ee8a92fb3fa4acb1a3b52a5da89c"},{url:"tag/encryption/index.html",revision:"6946ef863e330c31f20d5a8bd67ae75d"},{url:"tag/Guide/index.html",revision:"e8a176436d40c5419cc982ffb993d320"},{url:"tag/index.html",revision:"14466b7aecd99d67d7b81fb63a07dcca"},{url:"tag/markdown/index.html",revision:"d8d781f7116e7074ab0c4bc59f7dc1c0"},{url:"tag/Page config/index.html",revision:"9429429980499d5e43eb6ee0a24c17e6"},{url:"tag/使用指南/index.html",revision:"f89701d7c372f1de999b6c7eebb3e046"},{url:"tag/文章加密/index.html",revision:"7fdb828c6abcc8db1d5a1cb5acbd913f"},{url:"tag/页面配置/index.html",revision:"5656e2f80023f1837f360b4a9d40d6cc"},{url:"timeline/index.html",revision:"d3dc340f4722c023abbc9c7b721aeea3"},{url:"zh/guide/disable/index.html",revision:"81b3164d78d99baf4a39df9f8adde58e"},{url:"zh/guide/encrypt/index.html",revision:"69d8ac69d4458a483908a3e0439eab8a"},{url:"zh/guide/index.html",revision:"39d937b1ecbab711eb3081eaf23dbce1"},{url:"zh/guide/markdown/index.html",revision:"db8fc527c238f05e942641e58c9a0828"},{url:"zh/guide/page/index.html",revision:"626423d852817b5b1cd5e5de1a68add0"},{url:"zh/home/index.html",revision:"2d1d775c1a518076112e6cc9d6dbb20a"},{url:"zh/index.html",revision:"bbd482d0dc27a31296128cc68b4fcb0b"},{url:"zh/layout/index.html",revision:"d0050a5f5b3be9e105667f614f41680c"},{url:"zh/slides/index.html",revision:"ef308a9fe83a884022266a7978829665"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});

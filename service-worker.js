if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const r=e=>a(e,d),o={module:{uri:d},exports:c,require:r};s[d]=Promise.all(f.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.0cc3325d.css",revision:"34047e1c4ed850b5b67df49c0fbdc742"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/33.a85a9b3d.js",revision:"e16a57cdd0a323ada7489f191d8dd12c"},{url:"assets/js/34.70898212.js",revision:"a63ecb2ca1974aa84888b32e96b43101"},{url:"assets/js/35.1aceb3ae.js",revision:"4516ef2637d9753a29e5d9b212a57898"},{url:"assets/js/36.b6882b60.js",revision:"98b8a6b0f7aa12f6a7e916d4436e30ee"},{url:"assets/js/37.d794e204.js",revision:"b1c3eb7d132b018d39c2054633b6ad80"},{url:"assets/js/38.efa0bef4.js",revision:"d8398e1f799e0fe2081ecfbeff9122d2"},{url:"assets/js/app.c913c432.js",revision:"5d188cf0984b827b610d355a181f91c4"},{url:"assets/js/layout-Blog.ff038d64.js",revision:"304fee109dc7f2687c6d6943b33ec392"},{url:"assets/js/layout-Layout.f99637d0.js",revision:"54238e3a9b2154be14513f381cb8109c"},{url:"assets/js/layout-NotFound.9a4c75d6.js",revision:"fa548f9029e832f16fa3bf4c9d388335"},{url:"assets/js/layout-Slide.231e1a88.js",revision:"89494750fe956d93a612edf427440043"},{url:"assets/js/page-BlogHome.f5b44827.js",revision:"21cffde91a61c16de98e247e0dfc0112"},{url:"assets/js/page-Componentdisabled.616cd1ac.js",revision:"b260d4aa913678cac7c59b545cbe4d21"},{url:"assets/js/page-CustomLayout.507fc14c.js",revision:"8e38a6cfad6521b8179f42bcd75c9d02"},{url:"assets/js/page-Encryptionarticle.e211ae38.js",revision:"b1be88082e0a1813b299cccfb9b570f2"},{url:"assets/js/page-Guides.b2363cfb.js",revision:"69a128bcf0827dc7e47754ddfea10aac"},{url:"assets/js/page-IntroPage.c09ebf80.js",revision:"764d28ea2a89a58f82eb9d8fded185bd"},{url:"assets/js/page-MarkdownEnhance.0894c692.js",revision:"540ac34ec27ad320bc562a9d74b4b9ea"},{url:"assets/js/page-Markdown增强.8de81cdb.js",revision:"8411f83da545a2a8df2f829651ff1aae"},{url:"assets/js/page-pageconfig.ceb96ed4.js",revision:"b627632c501349370afdd4406e823ab4"},{url:"assets/js/page-Projecthome.071a58fa.js",revision:"f841b548a0416f73ce5842ba9bad46d9"},{url:"assets/js/page-Slidepage.09e504aa.js",revision:"41458843d05acc318c5a1b9f8f6ac598"},{url:"assets/js/page-主要功能与配置演示.d536d97d.js",revision:"4828387a9f96df7461ce7f14c1c86819"},{url:"assets/js/page-博客主页.fdbb4fef.js",revision:"68be855231bf33b8c57a488a0ebf20dc"},{url:"assets/js/page-密码加密的文章.5fee7899.js",revision:"c98d65417ccb4fecc068c8358c83c341"},{url:"assets/js/page-幻灯片页.11859c09.js",revision:"3a6a20b06862e4036ae2b6b1fc3371dd"},{url:"assets/js/page-组件禁用.aa37e68a.js",revision:"d036268b121062a5257c198f49961e05"},{url:"assets/js/page-自定义布局.82cb2c99.js",revision:"4d9550106d5763b6f37b91424bbeabcb"},{url:"assets/js/page-页面配置.bd0cc918.js",revision:"f70af6468faf7855c720d0c39b5097f6"},{url:"assets/js/page-项目主页.675f3efd.js",revision:"1b08dc211b2209a7525224ba32bb590f"},{url:"assets/js/vendors~flowchart.3a231ca9.js",revision:"7eefcc0cc4b498efcd666ee934f97d79"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.6787c65a.js",revision:"478c639d7996304d6aa3d09e0b830117"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.19ec0ea4.js",revision:"b221b7d49f3d6485dde7e8bb8eb124fa"},{url:"assets/js/vendors~layout-Layout.3a10e2c7.js",revision:"76092335885a97749ccd55b1df923126"},{url:"assets/js/vendors~mermaid.e39d60c6.js",revision:"2ab8ed630b786fe399558973b65e374b"},{url:"assets/js/vendors~photo-swipe.da9d917a.js",revision:"962c6b784352cf98c9a9d2f2c2891a64"},{url:"assets/js/vendors~reveal.b0c39a23.js",revision:"e720b86747d2129e59ca3bd3cd0122f9"},{url:"assets/js/vendors~waline.35e7ed5a.js",revision:"ed965ea38f9dea22cd4fd244034cdd8b"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"8ae4c937e78f117a223d2f733afb63ed"},{url:"guide/disable/index.html",revision:"ce54f456c96a84bf05d710e5aaa5ea5e"},{url:"guide/encrypt/index.html",revision:"eaaa729e030bc9b31efdbf90cef514b1"},{url:"guide/index.html",revision:"3e9ca7ccca8f4fb923d43bac29d9245b"},{url:"guide/markdown/index.html",revision:"096df3e9a0511cfe8da287e026832bcf"},{url:"guide/page/index.html",revision:"c1a0e9b0c37a51bb108d158ad73320c7"},{url:"home/index.html",revision:"b4ffad891a8a8a50790f3d9dee9cf5e4"},{url:"index.html",revision:"4bacdbbbe5ac233fe5c61f7cac737c14"},{url:"intro/index.html",revision:"594fd9cbc5c725a74b5665310e8f44e2"},{url:"layout/index.html",revision:"ca7fcf57467185109e5a88ab8bdf5f7d"},{url:"slides/index.html",revision:"588cf23a35752705235ff64c0ad6d693"},{url:"zh/guide/disable/index.html",revision:"1e8c0b604809ccf1b4d1d2f1c3e10633"},{url:"zh/guide/encrypt/index.html",revision:"289c0fc3bc8f95d82f5c7ade45fafe91"},{url:"zh/guide/index.html",revision:"7faa2bc536b7fd6b825f62a31a4cf9c8"},{url:"zh/guide/markdown/index.html",revision:"6327118ebe771cd69a24f4915fc4de68"},{url:"zh/guide/page/index.html",revision:"748c82aec1aea304613776d267206c63"},{url:"zh/home/index.html",revision:"3645a3231edab6e379b924ba4866f277"},{url:"zh/index.html",revision:"53343a81268d53238bd4e47964a1c3a9"},{url:"zh/layout/index.html",revision:"5572c2bd8fdcd56c83200aadc26c2d01"},{url:"zh/slides/index.html",revision:"7027a1e95711f2f792b02ea3259eb393"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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

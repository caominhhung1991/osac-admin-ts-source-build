(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[43],{1096:function(e,a,t){"use strict";t.r(a);var n=t(0),c=(t(925),t(10)),r=t(507),l=t(552),i=t(76),o=t(550),b=t(509),d=t(209),s=t(165),m=t(1026),u=t(1027),h=t(866),v=t(1024),O=t(1008),j=t(1032),p=t(1010),f=t(32),N=t.n(f),y=t(6),g=t(17),_=new Array(14).fill(null).map((function(e,a){return{name:N()().add(a,"day").format("YYYY-MM-DD"),number:Math.floor(8*Math.random()+1)}})),w={xs:24,sm:24,md:12,lg:12,xl:12,xxl:6},S=function(e){var a=e.metaName,t=e.metaCount,n=e.body,o=e.footer,b=e.loading;return Object(g.b)(r.a,Object(c.a)(Object(c.a)({},w),{},{children:Object(g.c)(l.a,{loading:b,className:"overview",bordered:!1,children:[Object(g.c)("div",{className:"overview-header",children:[Object(g.b)("div",{className:"overview-header-meta",children:a}),Object(g.b)("div",{className:"overview-header-count",children:t}),Object(g.b)(i.a,{title:"Introduce",children:Object(g.b)(s.a,{className:"overview-header-action"})})]}),Object(g.b)("div",{className:"overview-body",children:n}),Object(g.b)("div",{className:"overview-footer",children:o})]})}))},k=function(e){var a=e.wow,t=e.dod,n=e.style,c=void 0===n?{}:n,r=Object(y.useLocale)().formatMessage;return Object(g.c)("div",{className:"trend",style:c,children:[Object(g.c)("div",{className:"trend-item",children:[Object(g.b)("span",{className:"trend-item-label",children:r({id:"app.dashboard.overview.wowChange"})}),Object(g.b)("span",{className:"trend-item-text",children:a})]}),Object(g.c)("div",{className:"trend-item",children:[Object(g.b)("span",{className:"trend-item-label",children:r({id:"app.dashboard.overview.dodChange"})}),Object(g.b)("span",{className:"trend-item-text",children:t})]})]})},U=function(e){var a=e.active,t=e.payload,n=e.label;return a&&Object(g.b)("div",{className:"customTooltip",children:Object(g.c)("span",{className:"customTooltip-title",children:[Object(g.b)(o.a,{color:t[0].fill})," ",n," : ",t[0].value]})})},V=function(e){var a=e.name,t=e.number;return Object(g.c)("div",{className:"field",children:[Object(g.b)("span",{className:"field-label",children:a}),Object(g.c)("span",{className:"field-number",children:[t," "]})]})},F=function(e){var a=e.loading,t=Object(y.useLocale)().formatMessage;return Object(g.c)(b.a,{gutter:[12,12],children:[Object(g.b)(S,{loading:a,metaName:t({id:"app.dashboard.overview.totalSales"}),metaCount:"\xa5 126,560",body:Object(g.b)(k,{wow:"12%",dod:"12%"}),footer:Object(g.b)(V,{name:t({id:"app.dashboard.overview.dailySales"}),number:"\uffe512,423"})}),Object(g.b)(S,{loading:a,metaName:t({id:"app.dashboard.overview.visits"}),metaCount:"8846",body:Object(g.b)(m.a,{children:Object(g.c)(u.a,{data:_,children:[Object(g.b)(h.a,{dataKey:"name",hide:!0}),Object(g.b)(v.a,{content:Object(g.b)(U,{})}),Object(g.b)(O.a,{strokeOpacity:0,type:"monotone",dataKey:"number",fill:"#8E65D3"})]})}),footer:Object(g.b)(V,{name:t({id:"app.dashboard.overview.dailySales"}),number:"1234"})}),Object(g.b)(S,{loading:a,metaName:t({id:"app.dashboard.overview.payments"}),metaCount:"6560",body:Object(g.b)(m.a,{children:Object(g.c)(j.a,{data:_,children:[Object(g.b)(h.a,{dataKey:"name",hide:!0}),Object(g.b)(v.a,{content:Object(g.b)(U,{})}),Object(g.b)(p.a,{strokeOpacity:0,barSize:10,dataKey:"number",stroke:"#3B80D9",fill:"#3B80D9"})]})}),footer:Object(g.b)(V,{name:t({id:"app.dashboard.overview.conversionRate"}),number:"60%"})}),Object(g.b)(S,{loading:a,metaName:t({id:"app.dashboard.overview.operationalEffect"}),metaCount:"8846",body:Object(g.b)(d.a,{strokeColor:"#58BFC1",percent:85}),footer:Object(g.b)(k,{style:{position:"inherit"},wow:"12%",dod:"12%"})})]})},x=t(34),C=t(147),M=t(554),B=t(1108),K=t(1011),E=t(918),D=t(48),T={all:[{name:{en_US:"appliances",vi_VN:"appliances"},value:4544},{name:{en_US:"drinks",vi_VN:"drinks"},value:3321},{name:{en_US:"health",vi_VN:"health"},value:3113},{name:{en_US:"clothing",vi_VN:"clothing"},value:2341},{name:{en_US:"baby",vi_VN:"baby"},value:1231},{name:{en_US:"others",vi_VN:"others"},value:132}],online:[{name:{en_US:"appliances",vi_VN:"appliances"},value:244},{name:{en_US:"drinks",vi_VN:"drinks"},value:231},{name:{en_US:"health",vi_VN:"health"},value:311},{name:{en_US:"clothing",vi_VN:"clothing"},value:41},{name:{en_US:"baby",vi_VN:"baby"},value:121},{name:{en_US:"others",vi_VN:"others"},value:111}],offline:[{name:{en_US:"appliances",vi_VN:"appliances"},value:99},{name:{en_US:"drinks",vi_VN:"drinks"},value:188},{name:{en_US:"health",vi_VN:"health"},value:344},{name:{en_US:"clothing",vi_VN:"clothing"},value:255},{name:{en_US:"others",vi_VN:"others"},value:65}]},L=["#0088FE","#00C49F","#FFBB28","#FF8042","#E36E7E","#8F66DE"],I={xs:24,sm:24,md:12,lg:12,xl:12,xxl:12},P=function(e){var a=e.loading,t=Object(n.useState)("all"),i=Object(x.a)(t,2),d=i[0],s=i[1],u=Object(D.c)((function(e){return e.user})).locale,h=Object(y.useLocale)().formatMessage;return Object(g.b)(l.a,{className:"salePercent",title:h({id:"app.dashboard.salePercent.proportionOfSales"}),loading:a,extra:Object(g.c)(C.a.Group,{value:d,onChange:function(e){return s(e.target.value)},buttonStyle:"solid",children:[Object(g.b)(C.a.Button,{value:"all",children:h({id:"app.dashboard.salePercent.all"})}),Object(g.b)(C.a.Button,{value:"online",children:h({id:"app.dashboard.salePercent.online"})}),Object(g.b)(C.a.Button,{value:"offline",children:h({id:"app.dashboard.salePercent.offline"})})]}),children:Object(g.c)(b.a,{gutter:20,children:[Object(g.b)(r.a,Object(c.a)(Object(c.a)({},I),{},{children:Object(g.b)(m.a,{height:250,children:Object(g.c)(B.a,{children:[Object(g.b)(v.a,{content:function(e){var a=e.active,t=e.payload;if(a){var n=t[0],c=n.name,r=(n.value/T[d].map((function(e){return e.value})).reduce((function(e,a){return e+a}))*100).toFixed(2)+"%";return Object(g.c)("span",{className:"customTooltip",children:[c[u]," : ",r]})}return null}}),Object(g.b)(K.a,{strokeOpacity:0,data:T[d],innerRadius:60,outerRadius:80,paddingAngle:5,dataKey:"value",children:T[d].map((function(e,a){return Object(g.b)(E.a,{fill:L[a]},"cell-".concat(a))}))})]})})})),Object(g.b)(r.a,Object(c.a)(Object(c.a)({},I),{},{children:Object(g.b)(M.b,{bordered:!0,dataSource:T[d],renderItem:function(e,a){var t=T[d].map((function(e){return e.value})).reduce((function(e,a){return e+a})),n=(e.value/t*100).toFixed(2)+"%";return Object(g.c)(M.b.Item,{children:[Object(g.b)(o.a,{color:L[a]}),Object(g.b)("span",{children:e.name[u]})," | ",Object(g.b)("span",{children:e.value})," ",Object(g.c)("span",{children:["\xa5 ",n]})]})}})}))]})})},A=t(1033),Y=t(1034),R=t(867),H=t(1016),J=t(1023),z=t(921),G=new Array(20).fill(null).map((function(e,a){return{name:N()().add(30*a,"minute").format("HH:mm"),traffic:Math.floor(120*Math.random()+1),payments:Math.floor(120*Math.random()+1)}})),q=function(e){var a=e.active,t=e.payload,n=e.label;if(a){var c=t[0],r=c.value,l=c.stroke,i=t[1],b=i.value,d=i.stroke;return Object(g.c)("div",{className:"customTooltip",children:[Object(g.b)("span",{className:"customTooltip-title",children:n}),Object(g.c)("ul",{className:"customTooltip-content",children:[Object(g.c)("li",{children:[Object(g.b)(o.a,{color:l}),Object(g.b)(y.LocaleFormatter,{id:"app.dashboard.timeline.traffic"})," ",r]},"traffic"),Object(g.c)("li",{children:[Object(g.b)(o.a,{color:d}),Object(g.b)(y.LocaleFormatter,{id:"app.dashboard.timeline.payments"})," ",b]},"payments")]})]})}return null},Q=function(e){var a=e.loading;return Object(g.b)(l.a,{loading:a,style:{marginTop:12},children:Object(g.b)(m.a,{height:400,children:Object(g.c)(A.a,{data:G,syncId:"anyId",children:[Object(g.b)(Y.a,{strokeDasharray:"3 3"}),Object(g.b)(h.a,{dataKey:"name"}),Object(g.b)(R.a,{}),Object(g.b)(v.a,{content:Object(g.b)(q,{})}),Object(g.b)(H.a,{type:"monotone",dataKey:"traffic",stroke:"#3F90F7"}),Object(g.b)(H.a,{type:"monotone",dataKey:"payments",stroke:"#61BE82"}),Object(g.b)(J.a,{dataKey:"name",fill:"#13c2c2"}),Object(g.b)(z.a,{verticalAlign:"top",height:40,formatter:function(e){return Object(g.b)(y.LocaleFormatter,{id:"app.dashboard.timeline."+e})}})]})})})};a.default=function(){return Object(g.c)("div",{className:"over-flow-scroll",children:[Object(g.b)(F,{loading:!1}),Object(g.b)(P,{loading:!1}),Object(g.b)(Q,{loading:!1})]})}},925:function(e,a,t){}}]);
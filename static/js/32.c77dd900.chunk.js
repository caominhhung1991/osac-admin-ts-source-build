(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[32],{1083:function(e,n,a){"use strict";a.r(n);var t=a(3),c=a.n(t),i=a(13),o=a(10),r=a(8),d=a(34),l=a(0),u=a.n(l),b=a(48),s=a(416),m=a(127),h=a(509),O=a(507),j=a(545),v=a(547),g=a(109),f=a(177),p=a(412),D=a(156),y=a(269),C=a(413),I=a(268),V=a(201),T=a(200),M=a(158),N=a(6),w=a(86),k=a(60),F=a(133),x=a(132),L=a(111),S=a(145),R={getTableColumns:function(){return[N.constants.stt,k.b.maNV,k.b.hoTen,F.a.tenChucVu,w.a.tenCaLamViec,L.a.gioVao,L.a.gioRa,L.a.tongGio,L.a.congNgay,L.a.congTangCaNgay,L.a.hoTroXang,L.a.lyDoVang,N.constants.capNhatRow]},getInputFields:function(){return[L.a.congNgay,L.a.congTangCaNgay,L.a.hoTroXang,L.a.lyDoVang]},getExcelFields:function(){return[N.constants.stt,k.b.maNV,k.b.hoTen,S.a.tenDiaDiem,x.a.tenBoPhan,F.a.tenChucVu,w.a.tenCaLamViec,L.a.gioVao,L.a.gioRa,L.a.tongGio,L.a.congNgay,L.a.congTangCaNgay,L.a.hoTroXang,L.a.lyDoVang]}},P=a(275),B=a(787),E=a(35),K=a(17),X=D.d.diemDanhModal,z=function(e){var n,a,t,i=e.selectedTime,l=Object(f.useForm)(),s=Object(d.a)(l,1)[0],m=Object(f.useForm)(),h=Object(d.a)(m,1)[0],O=Object(b.b)(),j=Object(b.c)((function(e){return e.form})),v=j.modal,g=j.datas,p=Object(b.c)((function(e){return e.caLamViec})).caLamViecs,D=Object(b.c)((function(e){return e.account})).accountData,y=null===D||void 0===D||null===(n=D.paths)||void 0===n||null===(a=n.diemDanh)||void 0===a?void 0:a.edit,C=u.a.useMemo((function(){var e;return!!(null===v||void 0===v||null===(e=v[X])||void 0===e?void 0:e.open)}),[null===(t=v[X])||void 0===t?void 0:t.open]),I=null===g||void 0===g?void 0:g[X];function V(){return(V=Object(r.a)(c.a.mark((function e(){var n,a,t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return",Object(E.h)());case 2:return!0,e.next=5,h.validateFields();case 5:return a=e.sent,t=null===a||void 0===a?void 0:a.caLamViecId,r=null===p||void 0===p||null===(n=p[t])||void 0===n?void 0:n.tenCaLamViec,e.next=10,O(Object(P.f)({selectedTime:i,nhanSuArray:[Object(o.a)(Object(o.a)({},I),{},{caLamViecId:t,tenCaLamViec:r})],noiDungDiemDanhs:a}));case 10:e.sent&&O(T.a({modalId:X}));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.useEffect((function(){var e=null===g||void 0===g?void 0:g[X];e?(s.setFieldsValue(e),h.setFieldsValue(e)):(s.resetFields(),h.resetFields())}),[I]);var M=[k.b.maNV,k.b.hoTen],w=R.getInputFields();return Object(K.c)(N.MyModal,{title:"\u0110i\u1ec3m Danh",visible:C,onClose:function(){O(T.a({modalId:X}))},onOkModal:function(){return V.apply(this,arguments)},width:700,modalId:X,datas:g,children:[Object(K.b)(N.MyForm,{form:s,options:Object(N.getFormItemFields)(M),labelCol:{span:8},wrapperCol:{span:16}}),Object(K.b)(N.MyForm,{form:h,options:Object(N.getFormItemFields)(w),labelCol:{span:8},wrapperCol:{span:16}}),Object(K.b)(B.a,{form:h})]})},A=a(482),W=a(796),G=a(9),J=a(19),q=a(20),H=function(e){Object(J.a)(a,e);var n=Object(q.a)(a);function a(){var e;Object(G.a)(this,a);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).initData={},e}return a}(a(246).a),Q=a(16),U=a(66),Y=a(559),Z=a(585),$=a.n(Z),_=a(554),ee=a(423),ne=D.b.diemDanh,ae=function(e){var n=e.modalId,a=Object(b.b)(),t=Object(b.c)((function(e){return e.form})),c=t.modal,i=t.datas,o=Object(b.c)((function(e){return e.hideColumns})),r=null===o||void 0===o?void 0:o[D.d.diemDanhModal],d=u.a.useMemo((function(){return n||ne}),[n]),l=u.a.useMemo((function(){var e;return!!(null===c||void 0===c||null===(e=c[ne])||void 0===e?void 0:e.open)}),[c[ne]]);var s=u.a.useMemo((function(){return R.getTableColumns()}),[]);return Object(K.b)(N.MyModal,{title:"Ch\u1ee9c n\u0103ng kh\xe1c",visible:l,onClose:function(){a(T.a({modalId:ne}))},width:600,modalId:d,datas:i,children:Object(K.b)(_.b,{dataSource:s,renderItem:function(e){return Object(K.c)(_.b.Item,{className:(null===r||void 0===r?void 0:r[e.id])?"hoverClass font-weight-bold":"bg-gold hoverClass",onClick:function(){a(Object(ee.b)({tableId:D.d.diemDanhModal,columnId:e.id}))},children:[Object(K.b)(_.b.Item.Meta,{title:e.name}),Object(K.b)("div",{children:e.fixed?"[\u0110\xe3 c\u1ed1 \u0111\u1ecbnh]":""})]})}})})},te=a(414),ce=function(e){var n,a=e.dateTimePicker,t=Object(b.b)(),c=Object(b.c)((function(e){return e.account})).isDev;return Object(K.c)(K.a,{children:[Object(K.b)(p.a,{header:Object(K.b)("div",{className:"font-weight-bold",children:Object(K.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(K.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(K.b)("div",{children:null===a||void 0===a||null===(n=a.getDayRender)||void 0===n?void 0:n.call(a)}),Object(K.b)("div",{children:Object(K.b)(U.a,{type:"primary",icon:Object(K.b)(Y.a,{}),onClick:function(){return t(Object(T.c)({modalId:D.b.diemDanh}))},children:"\u1ea8n c\u1ed9t c\u1ee7a b\u1ea3ng"})}),c&&Object(K.b)("div",{className:"mt-1",children:Object(K.b)("button",{onClick:function(){Object(Q.k)(),t(Object(M.n)())},children:"Cap nhat dia diem BD cho nhan su"})})]}),footer:Object(K.b)("div",{children:Object(K.b)(U.a,{icon:Object(K.b)($.a,{}),onClick:function(){t(Object(te.b)({tagPageId:D.d.diemDanhModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})}),Object(K.b)(ae,{modalId:D.d.diemDanhModal})]})},ie=a(426),oe=D.d.diemDanhModal;n.default=function(){var e,n,a,t,l=Object(b.b)(),w=Object(f.useForm)(),k=Object(d.a)(w,1)[0],F=Object(s.b)(),x=Object(d.a)(F,2),S=x[0],B=x[1],X=Object(b.c)((function(e){return e.diemDanh})),G=X.loading,J=X.bamVanTayByMonth,q=X.diemDanhsDay,U=Object(b.c)((function(e){return e.diemDanhComBinhDuong})),Y=U.tabsData,Z=U.pageSize,$=Object(b.c)((function(e){var n;return null===(n=e.tagsPage)||void 0===n?void 0:n[oe]})),_=Object(b.c)((function(e){return e.account})).accountData,ee=Object(b.c)((function(e){return e.nhanSu})).nhanSus,ne=null===_||void 0===_||null===(e=_.paths)||void 0===e||null===(n=e.diemDanhComBinhDuong)||void 0===n?void 0:n.edit;u.a.useEffect((function(){k.setFieldsValue({congNgay:1}),l(M.l())}),[]),u.a.useEffect((function(){return l(Object(P.d)(S)),l(Object(P.b)(S)),function(){Object(Q.l)("diemDanhNgay")}}),[S]);var ae=Object(b.c)((function(e){return{nhanSusWorking:e.nhanSu.nhanSusWorking,selectedRows:e.table.selectedRows}})),re=ae.nhanSusWorking,de=ae.selectedRows,le=Object(I.a)({Instance:H,onPending:A.c,addSelectedId:A.a,isEdit:ne});function ue(){return(ue=Object(r.a)(c.a.mark((function e(){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ne){e.next=2;break}return e.abrupt("return",Object(E.h)());case 2:if(n=k.getFieldsValue(),0!==(a=de[oe]||[]).length){e.next=6;break}return e.abrupt("return",m.b.info("Ch\u01b0a ch\u1ecdn d\u1eef li\u1ec7u!"));case 6:return e.next=8,l(Object(P.f)({selectedTime:S,nhanSuArray:a,noiDungDiemDanhs:n}));case 8:l(Object(V.c)());case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=u.a.useMemo((function(){var e=l(Object(M.c)(re,{boPhanId:"quayCom",diaDiemId:"xuongBinhDuong"})),n="ngayQuet"+(null===S||void 0===S?void 0:S.format("DD")),a=Object.entries(e).reduce((function(e,a){var t,c=Object(d.a)(a,2),r=c[0],l=c[1],u=(null===J||void 0===J||null===(t=J[r])||void 0===t?void 0:t[n])||{},b=(null===q||void 0===q?void 0:q[r])||{},s=Object(o.a)(Object(o.a)(Object(o.a)({},l),b),u);return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},r,s))}),{});return l(Object(ie.c)()),a}),[re,q,J,S]);return Object(K.c)("div",{className:"diemDanh-page",css:y.a,children:[Object(K.b)(p.b,{className:"tabs",options:Y,activeKey:"all",onTabClick:function(e){"taiExcel"===e?l(Object(V.b)({tableId:oe,constants:R,fileSheet:"diemDanhCom",fileName:"diemDanhCom"})):"aside"===e?l(Object(te.b)({tagPageId:oe})):"xemThongKe"===e&&l(Object(T.c)({modalId:D.d.thongKeDiemDanhModal}))}}),Object(K.c)("div",{className:"tabs-main",children:[$&&Object(K.b)(ce,{dateTimePicker:B,selectedTime:S}),Object(K.c)("div",{className:"aside-main",children:[Object(K.c)(h.a,{className:"form-selects",gutter:10,style:{marginTop:"7px"},children:[Object(K.b)(O.a,{sm:6,md:5,lg:4,children:B.getDayRender()}),Object(K.b)(O.a,{sm:18,md:19,lg:20,children:Object(K.c)(j.a,{layout:"inline",form:k,children:[Object(K.b)(j.a.Item,{name:L.a.congNgay.id,children:Object(K.b)(v.a,{placeholder:"C\xf4ng ng\xe0y",min:0})}),Object(K.b)(j.a.Item,{name:L.a.congTangCaNgay.id,children:Object(K.b)(v.a,{placeholder:"T\u0103ng ca",min:0})}),Object(K.b)(j.a.Item,{name:L.a.hoTroXang.id,children:Object(K.b)(v.a,{placeholder:"HT x\u0103ng",min:0,step:2e4,parser:E.a.parser,formatter:E.a.formatter})}),Object(K.b)(j.a.Item,{name:L.a.lyDoVang.id,children:Object(K.b)(g.a,{placeholder:"L\xfd do v\u1eafng",options:(null===(a=L.a.lyDoVang)||void 0===a||null===(t=a.form)||void 0===t?void 0:t.options)||[],allowClear:!0})}),Object(K.b)(N.MyButton,{onClick:function(){return ue.apply(this,arguments)},children:"\u0110i\u1ec3m danh"})]})})]}),Object(K.b)(C.a,{constants:R,actions:le,datas:be,loading:G,modalId:oe,pageSize:Z,isSelection:!0,onChange:function(e){l(Object(A.d)(e.pageSize))},pagination:!0,expandable:{expandedRowRender:function(e){var n=(null===ee||void 0===ee?void 0:ee[e.id||""])||{};return Object(K.c)("div",{children:[e.id," - ",n.tenDiaDiem," - ",n.tenBoPhan," - ",n.tiengLamViec]})},expandRowByClick:!1}})]})]}),Object(K.b)(z,{selectedTime:S}),Object(K.b)(W.a,{datas:be})]})}},787:function(e,n,a){"use strict";var t=a(0),c=a.n(t),i=a(6),o=a(48),r=a(422),d=a(17);n.a=function(e){var n=e.form,a=Object(o.b)(),t=Object(o.c)((function(e){return e.caLamViec})).caLamViecs,l=c.a.useMemo((function(){return Object.values(t||{}).map((function(e){var n=e.tenCaLamViec;return{value:e.id,label:n}}))}),[t]);var u=Object(d.b)(i.MyFormItem,{label:"Ca L\xe0m Vi\u1ec7c",type:"select",name:"caLamViecId",innerProps:{showSearch:!0,allowClear:!0,filterOption:i.onSelectSearch,onChange:function(e){a(Object(r.addSelectedId)(e))}},options:l});return n?Object(d.b)(i.MyForm,{form:n,labelCol:{span:8},wrapperCol:{span:16},children:u}):u}},796:function(e,n,a){"use strict";var t=a(13),c=a(10),i=a(0),o=a.n(i),r=a(6),d=a(48),l=a(200),u=a(156),b=a(111),s=a(413),m=a(17),h=u.d.thongKeDiemDanhModal;n.a=function(e){var n,a=e.datas,i=Object(d.b)(),u=Object(d.c)((function(e){return e.form})).modal,O=Object(d.c)((function(e){return e.caLamViec})).caLamViecs,j=o.a.useMemo((function(){var e;return!!(null===u||void 0===u||null===(e=u[h])||void 0===e?void 0:e.open)}),[null===(n=u[h])||void 0===n?void 0:n.open]),v=o.a.useMemo((function(){return j?Object.values(a).reduce((function(e,n){var a=n.caLamViecId,i=n.congNgay,o=n.congTangCaNgay,r=null===O||void 0===O?void 0:O[a||""],d=(null===e||void 0===e?void 0:e[a||""])||{},l=(null===d||void 0===d?void 0:d.tong)||0,u=(null===d||void 0===d?void 0:d.diLam)||0,b=i||o?1:0,s=(null===d||void 0===d?void 0:d.vang)||0,m=i||o?0:1;return a?Object(c.a)(Object(c.a)({},e),{},Object(t.a)({},a,Object(c.a)(Object(c.a)({},r),{},{tong:l+1,diLam:u+b,vang:s+m}))):e}),{}):{}}),[j,a,O]);return Object(m.b)(r.MyModal,{title:"Th\u1ed1ng K\xea \u0110i\u1ec3m Danh",visible:j,onClose:function(){return i(l.a({modalId:h}))},width:700,modalId:h,datas:a,children:Object(m.b)(s.a,{scroll:{x:500},constants:b.b,datas:v,pagination:!1})})}}}]);
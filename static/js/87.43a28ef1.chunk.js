(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[87],{1099:function(n,e,a){"use strict";a.r(e);var t=a(13),c=a(10),i=a(34),o=a(0),g=a.n(o),d=a(48),u=a(201),l=a(200),b=a(268),s=a(412),r=a(156),h=a(269),m=a(6),j=a(60),O=a(108),T=a(148),f=a(132),v=a(86),C={chiTietSalary:{id:"chiTietSalary",name:"Chi Ti\u1ebft L\u01b0\u01a1ng",width:100,className:"text-small",children:[O.a.luongCoBan,O.a.luongTrachNhiem,O.a.luongChuyenCan,O.a.luongPhuCapKhac]},ngayCong:{id:"ngayCong",name:"Ng\xe0y c\xf4ng",width:100,className:"text-small",children:[T.a.tongCongNgayThuong,T.a.tongNgayHuongLeTet,T.a.tongCongNgayLeTet,T.a.tongCongNgay]},gioTangCa:{id:"gioTangCa",name:"Gi\u1edd T\u0103ng Ca",width:100,className:"text-small",children:[T.a.tongGioTangCaThuong,T.a.tongGioTangCaNgayLe,T.a.tongCongTangCaNgay]},getTableColumns:function(){return[j.b.maNV,Object(c.a)(Object(c.a)({},m.constants.stt),{},{fixed:!1}),Object(c.a)(Object(c.a)({},j.b.hoTen),{},{fixed:!1}),f.a.tenBoPhan,v.a.tenCaLamViec,this.chiTietSalary,O.a.tongLuongThang,O.a.tongLuongNgay,this.ngayCong,this.gioTangCa]},getInputFields:function(){return[]},getExcelFields:function(){return[m.constants.active]}},N=a(413),y=a(531),L=a(487),p=a(379),I=a(450),S=a(66),M=a(559),P=a(554),w=a(423),x=a(17),V=r.b.tinhLuong,k=function(n){var e=n.modalId,a=Object(d.b)(),t=Object(d.c)((function(n){return n.form})),c=t.modal,i=t.datas,o=Object(d.c)((function(n){return n.hideColumns})),u=null===o||void 0===o?void 0:o[r.d.tinhLuongModal],b=g.a.useMemo((function(){return e||V}),[e]),s=g.a.useMemo((function(){var n;return!!(null===c||void 0===c||null===(n=c[V])||void 0===n?void 0:n.open)}),[c[V]]);var h=g.a.useMemo((function(){return C.getTableColumns()}),[]);return Object(x.b)(m.MyModal,{title:"Ch\u1ee9c n\u0103ng kh\xe1c",visible:s,onClose:function(){a(l.a({modalId:V}))},width:600,modalId:b,datas:i,children:Object(x.b)(P.b,{dataSource:h,renderItem:function(n){return Object(x.c)(P.b.Item,{className:(null===u||void 0===u?void 0:u[n.id])?"hoverClass font-weight-bold":"bg-gold hoverClass",onClick:function(){a(Object(w.b)({tableId:r.d.tinhLuongModal,columnId:n.id}))},children:[Object(x.b)(P.b.Item.Meta,{title:n.name}),Object(x.b)("div",{children:n.fixed?"[\u0110\xe3 c\u1ed1 \u0111\u1ecbnh]":""})]})}})})},D=function(n){var e=n.dateTimePicker,a=Object(d.b)();return Object(x.c)(x.a,{children:[Object(x.b)(s.a,{header:Object(x.b)("div",{className:"font-weight-bold",children:"Ch\u1ee9c N\u0103ng Trang"}),body:Object(x.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(x.b)("div",{children:e.getMonthRender()}),Object(x.b)("div",{children:Object(x.b)(S.a,{type:"primary",icon:Object(x.b)(M.a,{}),onClick:function(){return a(Object(l.c)({modalId:r.b.tinhLuong}))},children:"\u1ea8n c\u1ed9t c\u1ee7a b\u1ea3ng"})})]})}),Object(x.b)(k,{modalId:r.d.tinhLuongModal})]})},E=a(414),z=a(416),G=a(278),K=a(16),B=r.d.tinhLuongModal;e.default=function(){var n=Object(d.b)(),e=Object(d.c)((function(n){return n.diemDanhThang})),a=e.loading,o=e.diemDanhThangs,r=Object(d.c)((function(n){return n.tinhLuong})),m=r.tabsData,j=r.pageSize,O=Object(d.c)((function(n){return{salaries:n.salary.salaries,nhanSus:n.nhanSu.nhanSus,chucVus:n.chucVu.chucVus,boPhans:n.boPhan.boPhans,caLamViecs:n.caLamViec.caLamViecs,ngayNghiLeTetTrongThang:n.ngayNghiLeTet.ngayNghiLeTetTrongThang}})),T=O.salaries,f=O.nhanSus,v=O.chucVus,S=O.boPhans,M=O.caLamViecs,P=O.ngayNghiLeTetTrongThang,w=Object(d.c)((function(n){var e;return null===(e=n.tagsPage)||void 0===e?void 0:e[B]})),V=Object(b.a)({Instance:y.a,onPending:L.c,addSelectedId:L.a}),k=g.a.useMemo((function(){var e=n(Object(I.d)()),a=(null===P||void 0===P?void 0:P.length)||0;return Object.entries(e).reduce((function(n,e){var o=Object(i.a)(e,2),g=o[0],d=o[1],u=(null===T||void 0===T?void 0:T[g])||{},l=new p.a(u),b=l.getTongLuongThang(),s=l.getTongLuongNgay(),r=Object(c.a)(Object(c.a)(Object(c.a)({},d),u),{},{tongLuongThang:b,tongLuongNgay:s,tongNgayHuongLeTet:a});return Object(c.a)(Object(c.a)({},n),{},Object(t.a)({},g,r))}),{})}),[P,f,o,T,v,S,M]),F=Object(z.b)(),H=Object(i.a)(F,2),J=H[0],R=H[1];return g.a.useEffect((function(){return n(Object(I.e)(J)),n(Object(G.d)(J)),function(){Object(K.l)("diemDanhThang")}}),[J]),g.a.useEffect((function(){}),[J]),Object(x.c)("div",{className:"tinhLuong-page",css:h.a,children:[Object(x.b)(s.b,{className:"tabs",options:m,activeKey:w?"aside":"",onTabClick:function(e){"taiExcel"===e?(console.log(k),n(Object(u.b)({tableId:B,constants:C,fileSheet:"tinhLuongSheet",fileName:"tinhLuongName"}))):"aside"===e?n(Object(E.b)({tagPageId:B})):"chucNangKhac"===e&&n(Object(l.c)({modalId:B}))}}),Object(x.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[w&&Object(x.b)(D,{dateTimePicker:R,selectedTime:J}),Object(x.b)("div",{className:"aside-main",children:Object(x.b)(N.a,{constants:C,actions:V,datas:k,loading:a,modalId:B,isSelection:!0,pageSize:j,pagination:!0,onRow:function(n){return{onClick:function(){console.log(n)}}},onChange:function(e){n(Object(L.d)(e.pageSize))}})})]})]})}}}]);
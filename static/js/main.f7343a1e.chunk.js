(this["webpackJsonptumbleweed-go-frontend"]=this["webpackJsonptumbleweed-go-frontend"]||[]).push([[0],{153:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyBw4GWT8b6u8eUFJ33yGDNW2meomWNcqYA","authDomain":"tumbleweed-go.firebaseapp.com","databaseURL":"https://tumbleweed-go.firebaseio.com","projectId":"tumbleweed-go","storageBucket":"tumbleweed-go.appspot.com","messagingSenderId":"132451553649","appId":"1:132451553649:web:7182e3243578558a86a6d0"}')},154:function(e,t,a){e.exports=a.p+"static/media/text_white.a7cace2a.svg"},183:function(e,t,a){e.exports=a(218)},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),l=a.n(o),i=a(157),c=a(266),s=a(265),u=a(158),d=a(46),m=a(52),p=a(48),h=a(47),b=a(118),f=a.n(b),w=a(263),g=a(274),v=a(258),T=a(259),y=a(219),E=a(260),D=a(257),L=a(159),k=a(250),S=a(276),F=a(267),I=a(160),O=a(9),_=a(147),x=a(275),C=a(269),j=a(273),N=a(271),M=a(270),R=a(123),A=a(126),P=a(119),W=a(92),B=function(e){var t=e.toDateString().split(" ");return t[0]+" "+t[2]},G=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,n=e<0?"S":"N",r=t<0?"W":"E";return"".concat(e.toFixed(a),"&#xb0;").concat(n,", ").concat(t.toFixed(a),"&#xb0;").concat(r)},q=(a(205),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).initWithData=function(e){n.tumbleweedLayers=[],n.tumbleweedTrailLayers=[];for(var t=0;t<n.props.sliderRange;t++)n.tumbleweedLayers.push(n.setTumbleweedLayer(e,t-1)),n.tumbleweedTrailLayers.push(n.setTumbleweedTrailLayer(e,t-1));n.currentTumbleweedLayer=n.tumbleweedLayers[0],n.currentTumbleweedTrailLayer=n.tumbleweedTrailLayers[0],n.initMap()},n.deleteTumbleweed=function(e){var t=n.tumbleweedLayers[0],a=t.getSource().getFeatureById("tumbleweed_".concat(e));a&&t.getSource().removeFeature(a);for(var r=1;r<n.props.sliderRange;r++){var o=n.tumbleweedLayers[r],l=o.getSource().getFeatureById("tumbleweed_".concat(e,"_").concat(r-1));l&&o.getSource().removeFeature(l)}for(var i=0;i<n.props.sliderRange;i++)for(var c=n.tumbleweedTrailLayers[i],s=0;s<=i;s++){console.log(e,i-1,s);var u=c.getSource().getFeatureById("tumbleweedTrail_".concat(e,"_").concat(i-1,"_").concat(s));u&&c.getSource().removeFeature(u)}},n.setTumbleweedLayer=function(e,t){var a=new R.b({image:new A.a({radius:8,fill:new P.a({color:"#e3af2b"}),stroke:new W.a({color:"#664e13",width:2})})}),n=new R.b({image:new A.a({radius:8,fill:new P.a({color:"#e2cf9e"}),stroke:new W.a({color:"#664e13",width:2})})}),r=e.map((function(e,r){var o,l,i,c=a;if(-1===t)o="tumbleweed_".concat(r),i=e.location._latitude,l=e.location._longitude;else if(0===e.predictedLocations.length)o="tumbleweed_".concat(r),i=e.location._latitude,l=e.location._longitude,c=n;else if(t<e.predictedLocations.length)o="tumbleweed_".concat(r,"_").concat(t),i=e.predictedLocations[t]._latitude,l=e.predictedLocations[t]._longitude;else{var s=e.predictedLocations.length-1;o="tumbleweed_".concat(r,"_").concat(s),i=e.predictedLocations[s]._latitude,l=e.predictedLocations[s]._longitude,c=n}var u=new k.a({geometry:new _.a(Object(O.d)([l,i]))});return u.setId(o),u.setStyle(c),u})),o=new C.a({source:new N.a({features:r})});return o.set("name","tumbleweeds"),o},n.setTumbleweedTrailLayer=function(e,t){var a=new R.b({stroke:new W.a({color:"#664e13",width:4})}),n=[];if(-1!==t)for(var r=function(r){e.forEach((function(e,o){if(r<e.predictedLocations.length){var l=0===r?e.location._latitude:e.predictedLocations[r-1]._latitude,i=0===r?e.location._longitude:e.predictedLocations[r-1]._longitude,c=e.predictedLocations[r]._latitude,s=e.predictedLocations[r]._longitude,u=new k.a({geometry:new x.a([Object(O.d)([i,l]),Object(O.d)([s,c])])});u.setId("tumbleweedTrail_".concat(o,"_").concat(t,"_").concat(r)),u.setStyle(a),n.push(u)}}))},o=0;o<=t;o++)r(o);var l=new C.a({source:new N.a({features:n})});return l.set("name","tumbleweedTrails"),l},n.initMap=function(){var e=new j.a({className:"map__bingMaps",source:new M.a({key:"AtMr0RAC0iKdKPPPsGSPqIFCxjk7XpR9rq99IQR5vDBoax8u1KuYvOinwtsiQcFI",imagerySet:"AerialWithLabelsOnDemand"})});n.popupOverlay=new S.a({element:n.popupRef.current,positioning:"bottom-center",stopEvent:!1,offset:[0,-16]}),n.map=new F.a({layers:[e,n.currentTumbleweedTrailLayer,n.currentTumbleweedLayer],overlays:[n.popupOverlay],target:n.mapRef.current,view:new I.a({center:Object(O.d)([-97,42]),zoom:5,minZoom:5,maxZoom:15})}),n.map.on("click",(function(e){n.deselectTumbleweed(),n.map.forEachFeatureAtPixel(e.pixel,(function(e,t){if("tumbleweeds"===t.get("name"))return n.selectTumbleweed(e),!0}))})),n.map.on("pointermove",(function(e){n.map.getTarget().style.cursor="",n.map.forEachFeatureAtPixel(e.pixel,(function(e,t){if("tumbleweeds"===t.get("name"))return n.map.getTarget().style.cursor="pointer",!0}))}))},n.selectTumbleweed=function(e){var t=String(e.getId()).split("_").splice(1),a=Object(L.a)(t,2),r=a[0],o=a[1];void 0!==o?n.props.updateSelectedTumbleweedDataFunc(r,o):n.props.updateSelectedTumbleweedDataFunc(r,-1),n.showPopup(e)},n.deselectTumbleweed=function(){n.props.updateSelectedTumbleweedDataFunc(-1,-1),n.hidePopup()},n.showPopup=function(e){var t=e.getGeometry().getCoordinates(),a=Object(O.n)(t,"EPSG:3857","EPSG:4326");n.popupRef.current.innerHTML=G(a[1],a[0],3),n.popupRef.current.style.display="block",n.popupOverlay.setPosition(t)},n.hidePopup=function(){n.popupRef.current.style.display="none"},n.refreshPopup=function(){if(-1!==n.props.selectedTumbleweedIndex){var e=n.currentTumbleweedLayer.getSource().getFeatures();n.showPopup(e[n.props.selectedTumbleweedIndex])}},n.showTumbleweedLayer=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};n.map.removeLayer(n.currentTumbleweedTrailLayer),n.map.removeLayer(n.currentTumbleweedLayer),n.map.addLayer(n.tumbleweedTrailLayers[e]),n.map.addLayer(n.tumbleweedLayers[e]),n.currentTumbleweedLayer=n.tumbleweedLayers[e],n.currentTumbleweedTrailLayer=n.tumbleweedTrailLayers[e],t()},n.map=null,n.popupOverlay=null,n.tumbleweedLayers=null,n.tumbleweedTrailLayers=null,n.currentTumbleweedLayer=null,n.currentTumbleweedLayer=null,n.mapRef=r.a.createRef(),n.popupRef=r.a.createRef(),n}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.data!==this.props.data&&this.initWithData(this.props.data),e.day!==this.props.day&&this.showTumbleweedLayer(this.props.day,(function(){a.refreshPopup()})),e.deleteTumbleweedFlag!==this.props.deleteTumbleweedFlag&&(this.deselectTumbleweed(),this.deleteTumbleweed(this.props.selectedTumbleweedIndex))}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.mapRef,className:"map"},r.a.createElement("div",{ref:this.popupRef,className:"map__popup",style:{display:"none"}}))}}]),a}(r.a.Component)),J=a(254),K=a(255),U=a(256),z=a(152),H=a.n(z),Q=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).render=function(){var t=e.props,a=t.data,n=t.predictionIndex;if(!a)return r.a.createElement(y.a,{component:"div",align:"center"},r.a.createElement("h4",null,"No tumbleweed selected."));var o=a.location;if(a.predictedLocations.length>0&&-1!==n){var l=Math.min(n,a.predictedLocations.length-1);o=a.predictedLocations[l]}return r.a.createElement(y.a,{component:"div",align:"center"},r.a.createElement("h4",null,"Current position (est.)"),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:G(o._latitude,o._longitude)}}),r.a.createElement(J.a,null),r.a.createElement("h4",null,"Initial sighting time"),r.a.createElement("p",null,new Date(a.uploadTime).toLocaleDateString(),r.a.createElement("br",null),new Date(a.uploadTime).toLocaleTimeString()),r.a.createElement("h4",null,"Initial sighting position"),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:G(a.uploadLocation._latitude,a.uploadLocation._longitude)}}),r.a.createElement("h4",null,"Initial sighting image"),r.a.createElement(K.a,{className:"aspect-ratio",variant:"outlined",style:{paddingBottom:"75%",marginBottom:"1em"}},r.a.createElement("div",null,r.a.createElement(U.a,{onClick:function(){return alert("test")}},r.a.createElement("img",{src:"https://picsum.photos/400",alt:"Initial sighting"})))),r.a.createElement(D.a,{startIcon:r.a.createElement(H.a,null),className:e.props.accessToken?null:"hidden",variant:"contained",color:"primary",disableElevation:!0,onClick:e.props.removeTumbleweedFunc},"Remove this tumbleweed"))},e}return a}(r.a.Component),V=a(277),Y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={sliderMarks:[]},e.setSliderMarks=function(){for(var t=[{value:0,label:r.a.createElement("b",null,"Today")},{value:1,label:"Tomorrow"}],a=2;a<e.props.sliderRange;a++){var n=new Date(Date.now()+864e5*a);t.push({value:a,label:B(n)})}e.setState({sliderMarks:t})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setSliderMarks()}},{key:"render",value:function(){return r.a.createElement(y.a,{component:"div",align:"center"},r.a.createElement("h4",null,"Movement predictions (USA only)"),r.a.createElement("p",null,r.a.createElement(V.a,{className:"timeline__slider",onChange:this.props.onTimelineChangeFunc,min:0,max:this.props.sliderRange-1,marks:this.state.sliderMarks})))}}]),a}(r.a.Component),Z=a(261),X=a(262),$=a(155),ee=a.n($),te=a(268),ae=a(125),ne=a.n(ae),re=a(124),oe=a.n(re),le=a(153);a(213);oe.a.initializeApp(le);var ie=oe.a.auth(),ce=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={open:!1,showErrorMsg:!1,errorMsg:""},e.form={email:"",password:""},e.showErrorMsg=function(t){return e.setState({showErrorMsg:!0,errorMsg:t})},e.hideErrorMsg=function(){return e.setState({showErrorMsg:!1})},e.open=function(){return e.setState({open:!0,showErrorMsg:!1})},e.close=function(){return e.setState({open:!1})},e.handleFormChange=function(t){var a=t.target.getAttribute("name");e.form[a]=t.target.value},e.login=function(){var t=e.form,a=t.email,n=t.password;a&&n?ie.signInWithEmailAndPassword(a,n).then((function(t){var a=t.user.xa;e.props.setAccessTokenFunc(a),e.props.addNotificationFunc("Success","Log in successful.","success",3e3),e.close()})).catch((function(t){"auth/invalid-email"===t.code?e.showErrorMsg("Invalid email."):"auth/user-disabled"===t.code?e.showErrorMsg("The account has been disabled by an administrator."):"auth/user-not-found"===t.code||"auth/wrong-password"===t.code?e.showErrorMsg("Invalid credentials."):(console.log(t),e.showErrorMsg("An unexpected error occurred."))})):e.showErrorMsg("All fields are required.")},e.logout=function(){ie.signOut().then((function(){e.props.addNotificationFunc("Success","Log out successful.","success",3e3)})).catch((function(e){console.log(e)}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;ie.onAuthStateChanged((function(t){if(t){var a=t.xa;e.props.setAccessTokenFunc(a)}else e.props.setAccessTokenFunc(null)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{className:this.props.accessToken?"hidden":null,startIcon:r.a.createElement(ne.a,null),variant:"contained",color:"primary",disableElevation:!0,onClick:this.open},"Log in"),r.a.createElement(D.a,{className:this.props.accessToken?null:"hidden",startIcon:r.a.createElement(ne.a,null),variant:"contained",color:"primary",disableElevation:!0,onClick:this.logout},"Log out"),r.a.createElement(g.a,{maxWidth:"sm",open:this.state.open},r.a.createElement(v.a,null,"Log in (test)"),r.a.createElement(T.a,null,r.a.createElement(te.a,{type:"email",fullWidth:!0,label:"Email",name:"email",onChange:this.handleFormChange,defaultValue:"",autoFocus:!0}),r.a.createElement(te.a,{type:"password",fullWidth:!0,label:"Password",name:"password",onChange:this.handleFormChange,defaultValue:""}),r.a.createElement(y.a,{component:"div",className:this.state.showErrorMsg?null:"hidden"},r.a.createElement("p",null,this.state.errorMsg))),r.a.createElement(E.a,null,r.a.createElement(D.a,{autoFocus:!0,onClick:this.close,color:"primary"},"Cancel"),r.a.createElement(D.a,{onClick:this.login,color:"primary"},"Log in"))))}}]),a}(r.a.Component),se=a(154),ue=a.n(se),de=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(Z.a,{position:"static"},r.a.createElement(X.a,{style:{paddingLeft:0}},"  ",r.a.createElement(y.a,{variant:"h5",style:{flexGrow:1}},r.a.createElement("div",{style:{width:400,textAlign:"center"}},r.a.createElement("img",{src:ue.a,style:{height:"1.2em",paddingTop:"0.2em",imageRendering:"crisp-edges"},draggable:!1,alt:"Logo"}))),r.a.createElement(D.a,{className:this.props.accessToken?null:"hidden",startIcon:r.a.createElement(ee.a,null),variant:"contained",color:"primary",disableElevation:!0,disabled:this.props.refreshPredictionsDisabled,onClick:this.props.refreshTumbleweedDataFunc},"Reset Predictions"),r.a.createElement(ce,{accessToken:this.props.accessToken,setAccessTokenFunc:this.props.setAccessTokenFunc,addNotificationFunc:this.props.addNotificationFunc})))}}]),a}(r.a.Component),me=a(163),pe=a(264),he=a(156),be=a.n(he),fe=(a(215),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(me.a,{className:"notification "+this.props.severity,elevation:3},r.a.createElement(w.a,{className:"container",maxWidth:"xs"},r.a.createElement(y.a,{component:"div",style:{padding:"0 1em"}},r.a.createElement("h4",null,this.props.title),r.a.createElement("p",null,this.props.body)),r.a.createElement(pe.a,{className:"closeIcon",onClick:function(){return e.props.closeFunc(e.props._id)}},r.a.createElement(be.a,null))))}}]),a}(r.a.Component)),we=(a(216),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={day:0,sliderMarks:[],sliderRange:8,tumbleweedData:[],selectedTumbleweedData:{tumbleweedIndex:-1,predictionIndex:-1},refreshPredictionsDisabled:!1,refreshTumbleweedDataSnackbarIsOpen:!1,removeTumbleweedDialogIsOpen:!1,notifications:[],deleteTumbleweedFlag:0,accessToken:null},e.setAccessToken=function(t){e.setState({accessToken:t})},e.refreshTumbleweedData=function(){e.setState({refreshPredictionsDisabled:!0,refreshTumbleweedDataSnackbarIsOpen:!1});var t=new FormData;t.append("forced","true"),f()({method:"post",url:"https://tumbleweed-go-284013.ue.r.appspot.com/tumbleweed/update",data:t,headers:{"Content-Type":"multipart/form-data"}}).then((function(){e.setState({refreshPredictionsDisabled:!1,refreshTumbleweedDataSnackbarIsOpen:!0}),e.addNotification(null,"Tumbleweed movement predictions reset! Refresh the page to see the updates.","info",0)})).catch((function(e){console.log("big rip "+e)}))},e.closeRefreshTumbleweedDataSnackbar=function(){e.setState({refreshTumbleweedDataSnackbarIsOpen:!1})},e.getData=function(e){f.a.get("https://tumbleweed-go-284013.ue.r.appspot.com/tumbleweed/get").then((function(t){t.status&&200===t.status?e(t.data.result):console.log("rip "+t.status)})).catch((function(e){console.log("big rip "+e)}))},e.getSelectedTumbleweedData=function(){var t=e.state.selectedTumbleweedData.tumbleweedIndex;return-1===t?null:e.state.tumbleweedData[t]},e.onTimelineChange=function(t,a){e.setState({day:a}),e.updateSelectedTumbleweedData(e.state.selectedTumbleweedData.tumbleweedIndex,a-1)},e.updateSelectedTumbleweedData=function(t,a){e.setState({selectedTumbleweedData:{tumbleweedIndex:t,predictionIndex:a}})},e.openRemoveTumbleweedDialog=function(){return e.setState({removeTumbleweedDialogIsOpen:!0})},e.handleTumbleweedDialogClose=function(t){e.setState({removeTumbleweedDialogIsOpen:!1}),t&&e.removeTumbleweed((function(t){200===t?(e.addNotification("Success","Tumbleweed has been removed.","success",3e3),e.setState({deleteTumbleweedFlag:Date.now()})):e.addNotification("Error","There was an error removing the tumbleweed.","error",3e3)}))},e.removeTumbleweed=function(t){var a=e.state.selectedTumbleweedData.tumbleweedIndex,n=new FormData;n.append("id",e.state.tumbleweedData[a]._id),f()({method:"post",url:"https://tumbleweed-go-284013.ue.r.appspot.com/tumbleweed/delete",data:n,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){e.status&&200===e.status||console.log("rip "+e.status),t(e.status)})).catch((function(e){console.log("big rip "+e),t(500)}))},e.initData=function(){e.getData((function(t){e.setState({tumbleweedData:t})}))},e.addNotification=function(t,a,n,r){var o="".concat(Date.now(),"_").concat(Math.random()),l={id:o,title:t,body:a,severity:n};0!==r&&setTimeout((function(){e.removeNotification(o)}),r),e.setState((function(e){return{notifications:[].concat(Object(u.a)(e.notifications),[l])}}))},e.removeNotification=function(t){e.setState((function(e){return{notifications:e.notifications.filter((function(e){return e.id!==t}))}}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"appContainer"},r.a.createElement("div",{className:"map__wrapper"},r.a.createElement(q,{data:this.state.tumbleweedData,day:this.state.day,sliderRange:this.state.sliderRange,selectedTumbleweedIndex:this.state.selectedTumbleweedData.tumbleweedIndex,deleteTumbleweedFlag:this.state.deleteTumbleweedFlag,updateSelectedTumbleweedDataFunc:this.updateSelectedTumbleweedData})),r.a.createElement(w.a,{maxWidth:!1,className:"info"},r.a.createElement(Q,{data:this.getSelectedTumbleweedData(),predictionIndex:this.state.selectedTumbleweedData.predictionIndex,removeTumbleweedFunc:this.openRemoveTumbleweedDialog,accessToken:this.state.accessToken})),r.a.createElement(w.a,{maxWidth:!1,className:"timeline"},r.a.createElement(Y,{sliderRange:this.state.sliderRange,onTimelineChangeFunc:this.onTimelineChange})),r.a.createElement("div",{className:"topBar"},r.a.createElement(de,{refreshPredictionsDisabled:this.state.refreshPredictionsDisabled,refreshTumbleweedDataFunc:this.refreshTumbleweedData,setAccessTokenFunc:this.setAccessToken,addNotificationFunc:this.addNotification,accessToken:this.state.accessToken}))),r.a.createElement(g.a,{maxWidth:"sm",open:this.state.removeTumbleweedDialogIsOpen},r.a.createElement(v.a,null,"Confirm"),r.a.createElement(T.a,null,r.a.createElement(y.a,{gutterBottom:!0},"Are you sure you would like to remove this tumbleweed?")),r.a.createElement(E.a,null,r.a.createElement(D.a,{autoFocus:!0,onClick:function(){return e.handleTumbleweedDialogClose(!1)},color:"primary"},"Cancel"),r.a.createElement(D.a,{onClick:function(){return e.handleTumbleweedDialogClose(!0)},color:"primary"},"Confirm"))),r.a.createElement("div",{id:"notification-container"},this.state.notifications.map((function(t){return r.a.createElement(fe,{key:t.id,_id:t.id,title:t.title,body:t.body,severity:t.severity,closeFunc:e.removeNotification})}))))}}]),a}(r.a.Component)),ge=(a(217),Object(i.a)({palette:{primary:{main:s.a[500]}}}));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{theme:ge},r.a.createElement(we,null))),document.getElementById("root"))}},[[183,1,2]]]);
//# sourceMappingURL=main.f7343a1e.chunk.js.map
(this.webpackJsonpipod=this.webpackJsonpipod||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(8),o=n.n(c),a=(n(14),n(2)),r=n(3),l=n(5),u=n(4),d=(n.p,n(0)),j=function(e){return Object(d.jsxs)("div",{id:"wheel-container",children:[Object(d.jsx)("button",{id:"inner-area",onClick:e.handleOnItemSelection}),Object(d.jsx)("button",{id:"menu-btn",onClick:e.handleMenuButtonClick,children:Object(d.jsx)("i",{className:"fas fa-bars"})}),Object(d.jsx)("button",{id:"left-btn",onClick:e.handlePreviousButtonClick,children:Object(d.jsx)("i",{className:"fas fa-backward"})}),Object(d.jsx)("button",{id:"right-btn",children:Object(d.jsx)("i",{className:"fas fa-forward"})}),Object(d.jsx)("button",{id:"pause-btn",children:Object(d.jsx)("i",{className:"fas fa-pause"})})]})},p=(n(16),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props.menuOptions;return Object(d.jsx)("div",{id:"item",children:t.map((function(t,n){return Object(d.jsx)("div",{className:e.props.selectedItem===n?"selected":"",children:Object(d.jsxs)("h4",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("i",{class:"fas fa-dot-circle padding-2px"})}),Object(d.jsx)("span",{children:t})]})})}))})}}]),n}(i.a.Component)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.selectedMenuIndex;return Object(d.jsxs)("div",{id:"menu",class:"display-none",children:[Object(d.jsx)("div",{id:"brand-title",children:Object(d.jsx)("h2",{children:"iPod.js"})}),Object(d.jsx)(p,{menuOptions:this.props.menuOptions,selectedItem:e})]})}}]),n}(i.a.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"menuItem",children:Object(d.jsx)("img",{id:"gameGif",src:"https://i.gifer.com/17iB.gif"})})}}]),n}(i.a.Component),O=(i.a.Component,function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"menuItem",children:Object(d.jsxs)("div",{id:"coverflow-section",children:[Object(d.jsx)("p",{id:"coverflow-title",className:"changeTextColor",children:"Playing : Faded"}),Object(d.jsx)("div",{id:"coverflow-img",className:"scaleUp",children:Object(d.jsx)("audio",{autoPlay:!0,src:"https://paglasongs.com/files/download/id/1716"})})]})})}}]),n}(i.a.Component)),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"menuItem",children:Object(d.jsx)("img",{className:"rotating",id:"settings-img",src:"https://image.flaticon.com/icons/png/128/945/945147.png"})})}}]),n}(i.a.Component),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"menuItem changeBgColor",children:Object(d.jsxs)("div",{id:"artists-section",children:[Object(d.jsx)("div",{id:"artists-cover"}),Object(d.jsx)("audio",{id:"artists-song",controls:!0,autoPlay:!0,children:Object(d.jsx)("source",{src:"https://gospelful.com/wp-content/uploads/2020/04/Maroon-5-Memories-gospelful.com_.mp3"})})]})})}}]),n}(i.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"menuItem changeBgColor",children:Object(d.jsxs)("div",{id:"album-section",children:[Object(d.jsx)("div",{id:"album-cover"}),Object(d.jsx)("audio",{id:"album-song",controls:!0,autoPlay:!0,children:Object(d.jsx)("source",{src:"https://pagalnew.com/mp3-songs/indipop-mp3-songs/baarish-ban-jaana-payal-dev-128-kbps-sound.mp3"})})]})})}}]),n}(i.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"menuItem",children:Object(d.jsxs)("div",{id:"all-songs-container",children:[Object(d.jsx)("div",{id:"song1"}),Object(d.jsx)("div",{id:"song2"}),Object(d.jsx)("div",{id:"song3"}),Object(d.jsx)("div",{id:"song4"})]})})}}]),n}(i.a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{id:"screen-container",children:[Object(d.jsx)(m,{selectedMenuIndex:this.props.selectedMenuIndex,menuOptions:this.props.menuOptions}),0===this.props.screenPanel&&4===this.props.menuOptions.length?Object(d.jsx)(O,{}):"",2===this.props.screenPanel&&4===this.props.menuOptions.length?Object(d.jsx)(b,{}):"",3===this.props.screenPanel&&4===this.props.menuOptions.length?Object(d.jsx)(h,{}):"",0===this.props.screenPanel&&3===this.props.menuOptions.length?Object(d.jsx)(v,{}):"",1===this.props.screenPanel&&3===this.props.menuOptions.length?Object(d.jsx)(g,{}):"",2===this.props.screenPanel&&3===this.props.menuOptions.length?Object(d.jsx)(f,{}):""]})}}]),n}(i.a.Component),C=n(9),y=n.n(C),P=n(7),I=n.n(P),k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleOnItemSelection=function(){document.getElementById("menu").classList.contains("display-none")||(1===e.state.selected&&4===e.state.options.length?e.setState({options:e.state.songs_menu,screenPanel:-1,isOnMusicPanel:!0,selected:0}):(I()("#menu").toggleClass("display-none"),e.setState({screenPanel:e.selectedItem})))},e.toggleMenu=function(){I()("#menu").toggleClass("display-none"),e.selectedItem=0},e.handleMenuButtonClick=function(){e.toggleMenu(),e.setState({screenPanel:-1})},e.handlePreviousButtonClick=function(){if(1==e.state.isOnMusicPanel&&document.getElementById("menu").classList.contains("display-none"))return e.setState({options:["All Songs","Artists","Albumns"],screenPanel:-1,isOnMusicPanel:!0,selected:0}),void e.toggleMenu();e.setState({options:["Cover Flow","Music","Games","Settings"],selected:0,screenPanel:-1,isOnMusicPanel:!1,songs_menu:["All Songs","Artists","Albumns"]}),(1!=e.state.isOnMusicPanel||document.getElementById("menu").classList.contains("display-none"))&&e.toggleMenu()},e.angleFromCurrentPosition=0,e.selectedItem=0,e.state={options:["Cover Flow","Music","Games","Settings"],selected:0,isOnMusicPanel:!1,screenPanel:-1,songs_menu:["All Songs","Artists","Albums"]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;new y.a.Region(document.getElementById("wheel-container")).bind(document.getElementById("wheel-container"),"rotate",(function(t){var n=t.detail.distanceFromLast;e.angleFromCurrentPosition+=n,e.angleFromCurrentPosition>45&&(e.selectedItem=++e.selectedItem%e.state.options.length,e.setState({selected:e.selectedItem}),console.log(e.selectedItem),e.angleFromCurrentPosition=0),e.angleFromCurrentPosition<-45&&(e.selectedItem=(--e.selectedItem<0?e.state.options.length-1:e.selectedItem)%e.state.options.length,e.setState({selected:e.selectedItem}),console.log(e.selectedItem),e.angleFromCurrentPosition=0)}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"main-container",children:[Object(d.jsx)(x,{selectedMenuIndex:this.state.selected,menuOptions:this.state.options,screenPanel:this.state.screenPanel}),Object(d.jsx)(j,{handleOnItemSelection:this.handleOnItemSelection,handleMenuButtonClick:this.handleMenuButtonClick,handlePreviousButtonClick:this.handlePreviousButtonClick})]})}}]),n}(i.a.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),M()}},[[18,1,2]]]);
//# sourceMappingURL=main.812be02f.chunk.js.map
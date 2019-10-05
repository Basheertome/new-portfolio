/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
function startSlides(that){$(".slideshow").length>0&&that.responsiveSlides({speed:500,pager:!0,nav:!0,pause:!0,pauseControls:!0,maxwidth:900,namespace:"centered-btns"})}function goPresent(thumbnails){if($("body").addClass("present"),!($(".centered-btns").length>0)&&$(".slideshow").length>0&&($(".slideshow").waypoint("destroy"),startSlides($(".slideshow"))),$("html").css("background-color","#000"),"ontouchstart"in document.documentElement){for(var a=document.getElementsByTagName("a"),i=0;i<a.length;i++)a[i].onclick=function(){return window.location=this.getAttribute("href"),!1};$.getScript("../assets/js/fastclick.js",function(){FastClick.attach(document.body)}),$("body").append('<span class="toptouch"></span><span class="lefttouch"></span><span class="righttouch"></span><span class="bottomtouch"></span><span class="tlcornertouch"></span><span class="trcornertouch"></span>'),$(".toptouch").click(function(e){$(document).trigger({type:"keydown",which:13,keyCode:38})}),$(".lefttouch").click(function(e){$(document).trigger({type:"keydown",which:13,keyCode:37})}),$(".righttouch").click(function(e){$(document).trigger({type:"keydown",which:13,keyCode:39})}),$(".bottomtouch").click(function(e){$(document).trigger({type:"keydown",which:13,keyCode:40})}),$(".tlcornertouch").click(function(e){$(document).trigger({type:"keydown",which:13,keyCode:13})}),$(".trcornertouch").click(function(e){$(document).trigger({type:"keydown",which:13,keyCode:27})})}$(".next a").attr("href",$(".next a").attr("href")+"#present"),$(".previous a").attr("href",$(".previous a").attr("href")+"#present"),$(".thumbnails a").each(function(i,item){$(item).attr("href",$(item).attr("href")+"#present")}),$("body, html").animate({scrollTop:0,scrollLeft:0}),$(window).blur(function(){function focusit(){document.activeElement&&(document.activeElement.blur(),clearInterval(focusit))}setInterval(focusit,100)}),$(window).bind("touchmove",function(e){e.preventDefault()}),$(window).on("mousewheel DOMMouseScroll",function(e){e.preventDefault()}),(-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")||"ontouchstart"in document.documentElement)&&$("body.present .page section").css("overflow","scroll"),$(document).keydown(function(e){$("section").length>0?(slide=Math.floor(($("body").scrollLeft()+$("html").scrollLeft())/$(window).width())-1,(32==e.keyCode||39==e.keyCode)&&(e.preventDefault(),$("section").length-1>slide&&$("body, html").animate({scrollLeft:$($("section")[slide+1]).offset().left})),37==e.keyCode&&(e.preventDefault(),0==slide?$("body, html").animate({scrollLeft:0}):slide>0&&$("body, html").animate({scrollLeft:$($("section")[slide-1]).offset().left})),38==e.keyCode&&(e.preventDefault(),$("body > .previous a").length>0?$("body > .previous a")[0].click():window.location="/#projects-present"),40==e.keyCode&&(e.preventDefault(),$("body > .next a").length>0?$("body > .next a")[0].click():window.location="/#projects-present"),27==e.keyCode&&window.location.hash.length>0&&(window.location=window.location.hash.split("#")[0]),13==e.keyCode&&(window.location="/#projects-present")):(37==e.keyCode&&$("body").scrollLeft()+$("html").scrollLeft()>100&&$("body, html").animate({scrollLeft:0}),(32==e.keyCode||39==e.keyCode)&&(e.preventDefault(),$("body, html").animate({scrollLeft:$(".intro").width()})),38==e.keyCode&&(e.preventDefault(),window.location="/bitsnbobs/#present"),40==e.keyCode&&(e.preventDefault(),window.location="/hue/#present"),27==e.keyCode&&(window.location="/"))}),slide=-1,$(window).resize(function(){resizeTransform()}),resizeTransform(),thumbnails&&$("body, html").animate({scrollLeft:$(".intro").width()}),"present"!=window.location.hash.split("#")[1]&&(window.location.hash="present")}function resizeTransform(){if($("section").length>0){if($(".top").height()>$(window).height()){var margin=$(window).height()-$(".top").height();$(".top-image").css({"margin-top":margin+"px"}),$(".top").css({"padding-bottom":"50px"})}else $(".top").css("height","100vh");$("section").each(function(i,item){if($(item).has(".columns").length>0){var resized=$(item).width()/$(item).find(".columns").width()*.8;$(item).find("article").css({"-webkit-transform":"translateY(-50%) scale("+resized+")","-moz-transform":"translateY(-50%) scale("+resized+")",transform:"translateY(-50%) scale("+resized+")"})}if($(item).has(".video").length>0){var resized=$(item).width()/900;$(item).find(".description").css({"-webkit-transform":"scale("+resized+")","-moz-transform":"scale("+resized+")",transform:"scale("+resized+")"})}}),-1==slide?$("body, html").animate({scrollLeft:0}):slide>-1&&$("body, html").animate({scrollLeft:$($("section")[slide]).offset().left})}else{var bioscale=$(window).width()/1e3;$(".firefly, .bio").css({"-webkit-transform":"scale("+bioscale+")","-moz-transform":"scale("+bioscale+")",transform:"scale("+bioscale+")"});var resized=$(window).height()/$(".wrapper").height()*.9;$(".page").css({"-webkit-transform":"translateY(-50%) scale("+resized+")","-moz-transform":"translateY(-50%) scale("+resized+")",transform:"translateY(-50%) scale("+resized+")"})}}(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},e=[].slice;!function(t,e){return"function"==typeof define&&define.amd?define("waypoints",["jquery"],function(n){return e(n,t)}):e(t.jQuery,t)}(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;return i=n(r),c=t.call(r,"ontouchstart")>=0,s={horizontal:{},vertical:{}},f=1,a={},u="waypoints-context-id",p="resize.waypoints",y="scroll.waypoints",v=1,w="waypoints-waypoint-ids",g="waypoint",m="waypoints",o=function(){function t(t){var e=this;this.$element=t,this.element=t[0],this.didResize=!1,this.didScroll=!1,this.id="context"+f++,this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()},this.waypoints={horizontal:{},vertical:{}},t.data(u,this.id),a[this.id]=this,t.bind(y,function(){var t;return e.didScroll||c?void 0:(e.didScroll=!0,t=function(){return e.doScroll(),e.didScroll=!1},r.setTimeout(t,n[m].settings.scrollThrottle))}),t.bind(p,function(){var t;return e.didResize?void 0:(e.didResize=!0,t=function(){return n[m]("refresh"),e.didResize=!1},r.setTimeout(t,n[m].settings.resizeThrottle))})}return t.prototype.doScroll=function(){var t,e=this;return t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!c||t.vertical.oldScroll&&t.vertical.newScroll||n[m]("refresh"),n.each(t,function(t,r){var i,o,l;return l=[],o=r.newScroll>r.oldScroll,i=o?r.forward:r.backward,n.each(e.waypoints[t],function(t,e){var n,i;return r.oldScroll<(n=e.offset)&&n<=r.newScroll?l.push(e):r.newScroll<(i=e.offset)&&i<=r.oldScroll?l.push(e):void 0}),l.sort(function(t,e){return t.offset-e.offset}),o||l.reverse(),n.each(l,function(t,e){return e.options.continuous||t===l.length-1?e.trigger([i]):void 0})}),this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},t.prototype.refresh=function(){var t,e,r,i=this;return r=n.isWindow(this.element),e=this.$element.offset(),this.doScroll(),t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;return i=r.options.offset,l=r.offset,o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp],n.isFunction(i)?i=i.apply(r.element):"string"==typeof i&&(i=parseFloat(i),r.options.offset.indexOf("%")>-1&&(i=Math.ceil(e.contextDimension*i/100))),r.offset=o-e.contextOffset+e.contextScroll-i,r.options.onlyOnScroll&&null!=l||!r.enabled?void 0:null!==l&&l<(s=e.oldScroll)&&s<=r.offset?r.trigger([e.backward]):null!==l&&l>(f=e.oldScroll)&&f>=r.offset?r.trigger([e.forward]):null===l&&e.oldScroll>=r.offset?r.trigger([e.forward]):void 0})})},t.prototype.checkEmpty=function(){return n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)?(this.$element.unbind([p,y].join(" ")),delete a[this.id]):void 0},t}(),l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r),"bottom-in-view"===r.offset&&(r.offset=function(){var t;return t=n[m]("viewportHeight"),n.isWindow(e.element)||(t=e.$element.height()),t-n(this).outerHeight()}),this.$element=t,this.element=t[0],this.axis=r.horizontal?"horizontal":"vertical",this.callback=r.handler,this.context=e,this.enabled=r.enabled,this.id="waypoints"+v++,this.offset=null,this.options=r,e.waypoints[this.axis][this.id]=this,s[this.axis][this.id]=this,i=null!=(o=t.data(w))?o:[],i.push(this.id),t.data(w,i)}return t.prototype.trigger=function(t){return this.enabled?(null!=this.callback&&this.callback.apply(this.element,t),this.options.triggerOnce?this.destroy():void 0):void 0},t.prototype.disable=function(){return this.enabled=!1},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},t.prototype.destroy=function(){return delete s[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},t.getWaypointsByElement=function(t){var e,r;return(r=n(t).data(w))?(e=n.extend({},s.horizontal,s.vertical),n.map(r,function(t){return e[t]})):[]},t}(),d={init:function(t,e){var r;return null==e&&(e={}),null==(r=e.handler)&&(e.handler=t),this.each(function(){var t,r,i,s;return t=n(this),i=null!=(s=e.context)?s:n.fn[g].defaults.context,n.isWindow(i)||(i=t.closest(i)),i=n(i),r=a[i.data(u)],r||(r=new o(i)),new l(t,r,e)}),n[m]("refresh"),this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){return e>0?t.push(n[e-1]):void 0})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){return e<n.length-1?t.push(n[e+1]):void 0})},_traverse:function(t,e,i){var o,l;return null==t&&(t="vertical"),null==e&&(e=r),l=h.aggregate(e),o=[],this.each(function(){var e;return e=n.inArray(this,l[t]),i(o,e,l[t])}),this.pushStack(o)},_invoke:function(t,e){return t.each(function(){var t;return t=l.getWaypointsByElement(this),n.each(t,function(t,n){return n[e](),!0})}),this}},n.fn[g]=function(){var t,r;return r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],d[r]?d[r].apply(this,t):n.isFunction(r)?d.init.apply(this,arguments):n.isPlainObject(r)?d.init.apply(this,[null,r]):r?n.error("The "+r+" method does not exist in jQuery Waypoints."):n.error("jQuery Waypoints needs a callback function or handler option.")},n.fn[g].defaults={context:r,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return null!=(t=r.innerHeight)?t:i.height()},aggregate:function(t){var e,r,i;return e=s,t&&(e=null!=(i=a[n(t).data(u)])?i.waypoints:void 0),e?(r={horizontal:[],vertical:[]},n.each(r,function(t,i){return n.each(e[t],function(t,e){return i.push(e)}),i.sort(function(t,e){return t.offset-e.offset}),r[t]=n.map(i,function(t){return t.element}),r[t]=n.unique(r[t])}),r):[]},above:function(t){return null==t&&(t=r),h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){return null==t&&(t=r),h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){return null==t&&(t=r),h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){return null==t&&(t=r),h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;return e=n.extend({},s.vertical,s.horizontal),n.each(e,function(e,n){return n[t](),!0})},_filter:function(t,e,r){var i,o;return(i=a[n(t).data(u)])?(o=[],n.each(i.waypoints[e],function(t,e){return r(i,e)?o.push(e):void 0}),o.sort(function(t,e){return t.offset-e.offset}),n.map(o,function(t){return t.element})):[]}},n[m]=function(){var t,n;return n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],h[n]?h[n].apply(null,t):h.aggregate.call(null,n)},n[m].settings={resizeThrottle:100,scrollThrottle:30},i.load(function(){return n[m]("refresh")})})}).call(this),/*!
* FitVids 1.0.3
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/
function($){"use strict";$.fn.fitVids=function(options){var settings={customSelector:null};return options&&$.extend(settings,options),this.each(function(){var selectors=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];settings.customSelector&&selectors.push(settings.customSelector);var $allVideos=$(this).find(selectors.join(","));$allVideos=$allVideos.not("object object"),$allVideos.each(function(){var $this=$(this);if(!("embed"===this.tagName.toLowerCase()&&$this.parent("object").length||$this.parent(".fluid-width-video-wrapper").length)){var height="object"===this.tagName.toLowerCase()||$this.attr("height")&&!isNaN(parseInt($this.attr("height"),10))?parseInt($this.attr("height"),10):$this.height(),width=isNaN(parseInt($this.attr("width"),10))?$this.width():parseInt($this.attr("width"),10),aspectRatio=height/width;if(!$this.attr("id")){var videoID="fitvid"+Math.floor(999999*Math.random());$this.attr("id",videoID)}$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*aspectRatio+"%"),$this.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),/*! http://responsiveslides.com v1.32 by @viljamis */
function(d,D,v){d.fn.responsiveSlides=function(h){var b=d.extend({auto:!0,speed:1e3,timeout:4e3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!1,prevText:"Previous",nextText:"Next",maxwidth:"",controls:"",namespace:"rslides",before:function(){},after:function(){}},h);return this.each(function(){v++;var n,p,i,k,l,e=d(this),m=0,f=e.children(),w=f.size(),q=parseFloat(b.speed),x=parseFloat(b.timeout),r=parseFloat(b.maxwidth),c=b.namespace,g=c+v,y=c+"_nav "+g+"_nav",s=c+"_here",j=g+"_on",z=g+"_s",o=d("<ul class='"+c+"_tabs "+g+"_tabs' />"),A={"float":"left",position:"relative"},E={"float":"none",position:"absolute"},t=function(a){b.before(),f.stop().fadeOut(q,function(){d(this).removeClass(j).css(E)}).eq(a).fadeIn(q,function(){d(this).addClass(j).css(A),b.after(),m=a})};if(b.random&&(f.sort(function(){return Math.round(Math.random())-.5}),e.empty().append(f)),f.each(function(a){this.id=z+a}),e.addClass(c+" "+g),h&&h.maxwidth&&e.css("max-width",r),f.hide().eq(0).addClass(j).css(A).show(),1<f.size()){if(q+100>x)return;if(b.pager){var u=[];f.each(function(a){a+=1,u+="<li><a href='#' class='"+z+a+"'>"+a+"</a></li>"}),o.append(u),l=o.find("a"),h.controls?d(b.controls).append(o):e.after(o),n=function(a){l.closest("li").removeClass(s).eq(a).addClass(s)}}if(b.auto&&(p=function(){k=setInterval(function(){f.stop(!0,!0);var a=w>m+1?m+1:0;b.pager&&n(a),t(a)},x)})(),i=function(){b.auto&&(clearInterval(k),p())},b.pause&&e.hover(function(){clearInterval(k)},function(){i()}),b.pager&&(l.bind("click",function(a){a.preventDefault(),b.pauseControls||i(),a=l.index(this),m===a||d("."+j+":animated").length||(n(a),t(a))}).eq(0).closest("li").addClass(s),b.pauseControls&&l.hover(function(){clearInterval(k)},function(){i()})),b.nav){c="<a href='#' class='"+y+" prev'>"+b.prevText+"</a><a href='#' class='"+y+" next'>"+b.nextText+"</a>",h.controls?d(b.controls).append(c):e.after(c);var c=d("."+g+"_nav"),B=d("."+g+"_nav.prev");c.bind("click",function(a){if(a.preventDefault(),!d("."+j+":animated").length){var c=f.index(d("."+j)),a=c-1,c=w>c+1?m+1:0;t(d(this)[0]===B[0]?a:c),b.pager&&n(d(this)[0]===B[0]?a:c),b.pauseControls||i()}}),b.pauseControls&&c.hover(function(){clearInterval(k)},function(){i()})}}if("undefined"==typeof document.body.style.maxWidth&&h.maxwidth){var C=function(){e.css("width","100%"),e.width()>r&&e.css("width",r)};C(),d(D).bind("resize",function(){C()})}})}}(jQuery,this,0),$.getScript("https://www.youtube.com/player_api",function(){}),$.getScript("https://a.vimeocdn.com/js/froogaloop2.min.js"),$(document).ready(function(){"ontouchstart"in document.documentElement?startSlides($(".slideshow")):$(".slideshow").waypoint(function(){startSlides($(this))},{triggerOnce:"true",offset:"bottom-in-view"}),$(".page").fitVids(),$(".video .poster").each(function(){var that=$(this);$(this).next().find("iframe").load(function(){var thisVideo=$f($(this)[0]);thisVideo.addEvent("ready",function(){thisVideo.addEvent("finish",function(){that.fadeIn()})})})}),$(".video .poster").click(function(){$(this).fadeOut(),thisVideo=$f($(this).next().find("iframe")[0]),"ytplayer"==$(this).next().find("iframe").attr("id")?player.playVideo():thisVideo.api("play")}),$(".header h1 a").hover(function(){$(window).on("keydown",function(e){27==e.keyCode&&(e.preventDefault(),goPresent())})},function(){$(this).html("Basheer Tome"),$(window).off("keydown")}),"present"==window.location.hash.split("#")[1]&&goPresent()});
!function(a){function b(b,d){var i=b[h],j=i&&e[i];if(void 0===d)return j||c(b);if(j){if(d in j)return j[d];var k=g(d);if(k in j)return j[k]}return f.call(a(b),d)}function c(b,c,f){var i=b[h]||(b[h]=++a.uuid),j=e[i]||(e[i]=d(b));return void 0!==c&&(j[g(c)]=f),j}function d(b){var c={};return a.each(b.attributes||i,function(b,d){0==d.name.indexOf("data-")&&(c[g(d.name.replace("data-",""))]=a.zepto.deserializeValue(d.value))}),c}var e={},f=a.fn.data,g=a.camelCase,h=a.expando="Zepto"+ +new Date,i=[];a.fn.data=function(d,e){return void 0===e?a.isPlainObject(d)?this.each(function(b,e){a.each(d,function(a,b){c(e,a,b)})}):0 in this?b(this[0],d):void 0:this.each(function(){c(this,d,e)})},a.fn.removeData=function(b){return"string"==typeof b&&(b=b.split(/\s+/)),this.each(function(){var c=this[h],d=c&&e[c];d&&a.each(b||d,function(a){delete d[b?g(this):a]})})},["remove","empty"].forEach(function(b){var c=a.fn[b];a.fn[b]=function(){var a=this.find("*");return"remove"===b&&(a=a.add(this)),a.removeData(),c.call(this)}})}(window.Zepto),!function(a){var b={};b.cache={},a.tpl=function(a,c,d){var e=/[^\w\-\.:]/.test(a)?function(a,b){var c,d=[],f=[];for(c in a)d.push(c),f.push(a[c]);return new Function(d,e.code).apply(b||a,f)}:b.cache[a]=b.cache[a]||this.get(document.getElementById(a).innerHTML);return e.code=e.code||"var $parts=[]; $parts.push('"+a.replace(/\\/g,"\\\\").replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/(^|%>)[^\t]*/g,function(a){return a.replace(/'/g,"\\'")}).replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("$parts.push('")+"'); return $parts.join('');",c?e(c,d):e}}(window.Zepto),function(a,b){a.tapHandling=!1;var c=function(a){return a.off(".fz.tap")},d=function(c){return c.each(function(){function c(a){b(a.target).trigger("tap",[a,b(a.target).attr("href")]),a.stopPropagation()}function d(a){var b=a.originalEvent||a,c=b.touches||b.targetTouches;return c?[c[0].pageX,c[0].pageY]:null}function e(a){if(a.touches&&a.touches.length>1||a.targetTouches&&a.targetTouches.length>1)return!1;var b=d(a);j=b[0],i=b[1]}function f(a){if(!k){var b=d(a);b&&(Math.abs(i-b[1])>m||Math.abs(j-b[0])>m)&&(k=!0)}}function g(b){if(clearTimeout(h),h=setTimeout(function(){a.tapHandling=!1,k=!1},1e3),!(b.which&&b.which>1||b.shiftKey||b.altKey||b.metaKey||b.ctrlKey)){if(b.preventDefault(),k||a.tapHandling&&a.tapHandling!==b.type)return void(k=!1);a.tapHandling=b.type,c(b)}}var h,i,j,k,l=b(this),m=10;l.bind("touchstart.fz.tap MSPointerDown.fz.tap",e).bind("touchmove.fz.tap MSPointerMove.fz.tap",f).bind("touchend.fz.tap MSPointerUp.fz.tap",g).bind("click.fz.tap",g)})};if(b.event&&b.event.special)b.event.special.tap={add:function(){d(b(this))},remove:function(){c(b(this))}};else{var e=b.fn.on,f=b.fn.off;b.fn.on=function(a){return/(^| )tap( |$)/.test(a)&&(c(this),d(this)),e.apply(this,arguments)},b.fn.off=function(a){return/(^| )tap( |$)/.test(a)&&c(this),f.apply(this,arguments)}}b.fn.tap=function(a){this.on("tap",a)}}(this,Zepto),!function(a){function b(){return!1}function c(b){var c=this,g=a.extend({},e,"object"==typeof b&&b),h=!1;return a.isArray(this)&&this.length&&"script"==a(this)[0].nodeName.toLowerCase()?(c=a(a.tpl(this[0].innerHTML,g)).appendTo("body"),h=!0):a.isArray(this)&&this.length&&""==c.selector?(c=a(a.tpl(this[0].outerHTML,g)).appendTo("body"),h=!0):a.isArray(this)||(c=a(a.tpl(d,g)).appendTo("body"),h=!0),c.each(function(){var c=a(this),d=c.data("fz.dialog");d||c.data("fz.dialog",d=new f(this,a.extend({},e,"object"==typeof b&&b),h)),d.toggle()})}var d='<div class="ui-dialog"><div class="ui-dialog-cnt"><div class="ui-dialog-bd"><div><h4><%=title%></h4><div><%=content%></div></div></div><div class="ui-dialog-ft ui-btn-group"><% for (var i = 0; i < button.length; i++) { %><% if (i == select) { %><button type="button" data-role="button"  class="select" id="dialogButton<%=i%>"><%=button[i]%></button><% } else { %><button type="button" data-role="button" id="dialogButton<%=i%>"><%=button[i]%></div><% } %><% } %></div></div></div>',e={title:"",content:"",button:["确认"],select:0,allowScroll:!1,callback:function(){}},f=function(b,c,d){console.log(c),this.option=a.extend(e,c),this.element=a(b),this._isFromTpl=d,this.button=a(b).find('[data-role="button"]'),this._bindEvent()};f.prototype={_bindEvent:function(){var b=this;b.button.on("tap",function(){var c=a(b.button).index(a(this));b.option.callback("button",c),b.hide.apply(b)})},toggle:function(){this.element.hasClass("show")?this.hide():this.show()},show:function(){var a=this;a.option.callback("show"),a.element.addClass("show"),this.option.allowScroll&&a.element.on("touchmove",b)},hide:function(){var a=this;a.option.callback("hide"),a.element.off("touchmove",b),a.element.removeClass("show"),console.log(a._isFromTpl),a._isFromTpl&&a.element.remove()}},a.fn.dialog=a.dialog=c}(window.Zepto);
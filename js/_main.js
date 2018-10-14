/* @class LOADHEADER
 * @description Header Data
 *   
*/
var LOADHEADER = function () {

  /**
  *  @public init()
  *  @description
  */
  this.init = function () {
    var html;
  	var template = $("#header-template").html();
  	
    html = template.replace('{{TITLE}}', headerData.title);
    html = html.replace('{{SUBJECT}}', headerData.subject);
    html = html.replace('{{COLOR}}', headerData.color);

    $("#header").append(html);

  }; // init()
    
}; // LOADHEADER()
var LOADHEADERDATA = new LOADHEADER();




/* @class LOADINTRO
 * @description Load the introduction section
 *   
*/
var LOADINTRO = function () {

  /**
  *  @public init()
  *  @description
  */
  this.init = function () {
    var html = "", paraContent = "";
  	var template = $("#intro-template").html();
  	
    html = template.replace('{{HEADER}}', introData.header);

    for (var j=0; j < introData.paras.length; j++) {
			paraContent += "<p>" + introData.paras[j] + "</p>";
    }	
    
    paraContent = paraContent.replace('{{URL}}', introData.url);
    paraContent = paraContent.replace('{{TITLE}}', introData.title);

    html = html.replace("{{PARAS}}",paraContent);

    $("#page").append(html);

  }; // init()
    
}; // LOADINTRO()
var LOADINTRODATA = new LOADINTRO();



/* @class LOADBUGS 
 * @description Load each of the identified bugs
 *   
*/
var LOADBUGS = function () {

  /**
  *  @public init()
  *  @description
  */
  this.init = function () {
    //var html = "", paraContent = "";
  	//var template = $("#intro-template").html();
  	
    for (var j=0; j < bugData.bugs.length; j++) {
    
      var html = "", description = "", discussion = "";
			var bugtemplate = $("#bug-template").html();
			html = bugtemplate.replace('{{ID}}',bugData.bugs[j].id);
			html = html.replace('{{HEADER}}',bugData.bugs[j].header);
			html = html.replace('{{URL}}',bugData.bugs[j].url);
      html = html.replace('{{PAGE}}',bugData.bugs[j].page);
      
      for (var i=0; i < bugData.bugs[j].desc.length; i++) {
        description += "<p>" + bugData.bugs[j].desc[i] + "</p>";
      }
      html = html.replace('{{DESC}}', description);

      html = html.replace('{{SSHOT1}}',bugData.bugs[j].sshot1);

      html = html.replace('{{SOLHDR}}',bugData.bugs[j].solhdr);

      for (var k=0; k < bugData.bugs[j].paras.length; k++) {
        discussion += "<p>" + bugData.bugs[j].paras[k] + "</p>";
      }
      html = html.replace('{{PARAS}}', discussion);

      html = html.replace('{{SSHOT2}}',bugData.bugs[j].sshot2);
			
			$("#page").append(html);
		}	

    

  }; // init()
    
}; // LOADBUGS()
var LOADBUGSDATA = new LOADBUGS();



/* @class LOADCOOKIEMSG
 * @description Cookie Message Data
 *   
*/
var LOADCOOKIEMSG = function () {

  /**
  *  @public init()
  *  @description
  */
  this.init = function () {
    var html;
  	var template = $("#cookiemsg-template").html();
  	
    html = template.replace('{{MESSAGE}}', cookieData.message);
    html = html.replace('{{BTNTEXT}}', cookieData.button);

    $("body").append(html);

  }; // init()
    
}; // LOADCOOKIEMSG()
var LOADCOOKIEMSGDATA = new LOADCOOKIEMSG();




/*
jQuery Waypoints - v2.0.4
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);


/**
 *  @Class ExternalLinks
 *
 *  @Summary Marks external links as opening in a new window.
 *           Links can be configured to open each in their own
 *           new window or the same new window.
 *
 *  @Usage
 *             var extlinks = new ExternalLinks();
 *             extlinks.setNewWinLinks('msg',allsame);
 *             @paramaters
 *                            msg : text marker for each link  (string)
 *                        allsame : boolean ( 1 or 0 )
 *                                  1 = open all marked external links
 *                                      in the same (new) window
 *                                  0 = open all marked external links
 *                                      each in their own (new) window
 *                                  This parameter is optional. The
 *                                  default is '0'.
 *
 *             HTML Requirement:
 *                              each link should be given the class 'new-win':
 *                              &lt;a href="http://google.com" class="new-win">...&lt;/a>
 *
*/
var ExternalLinks = function () {

  var allsame = false;

  /**
  *  @private OpenInNewWindow
  *  @description Opens the link in a new window or browser tab
  */
  var openInNewWindow = function(e) {
    var event, winName;

    if(allsame) {
      winName = "newWindow";
    } else {
      winName = "_blank";
    }

    if (!e) { event = window.event; }
    else { event = e; }
      
    // Abort if a modifier key is pressed
    if (event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) {
      return true;
    } else {
      var newWindow = window.open(this.getAttribute('href'), winName);
      if (newWindow) {
        if (newWindow.focus) {
          newWindow.focus();
        }
        return false;
      }
      return true;
    }
  }; // end openInNewWindow()



  /**
  *  @public setNewWinLinks
  *  @description Attaches the openInNewWindow() method to the click event of any
  *               link with the class name "new-win"
  */
  this.setNewWinLinks = function(msg, allsame) {
    allsame = allsame;
    var strNewWindowAlert, links, objWarningText, link;
    if (document.getElementById && document.createElement && document.appendChild) {
      strNewWindowAlert = ""+msg;   // " (opens in a new window)"
      links = document.getElementsByTagName('a');
      for (var i = 0; i < links.length; i++) {
        link = links[i];
        // Find all links with a class name of "new-win"
        if (/\bnew\-win\b/.test(link.className)) {
          objWarningText = document.createElement("em");
          objWarningText.appendChild(document.createTextNode(strNewWindowAlert));
          link.appendChild(objWarningText);
          link.onclick = openInNewWindow;
        }
      }
      objWarningText = null;
    }
  };  // end _setNewWinLinks()
    
}; // ExternalLinks
var extlinks = new ExternalLinks();



/*
 * @Class UIcontent
 * @Summary Accordian and tabbed content containers for compacting 
 *          content
 *
 .......................................................................... */
 var UIcontent = function () {
   
   
    /**
    *  @public accordian
    *  @description  Simple accordian
    *
    *  @setup use definition list:
    *
    *        <dl id="simAccord">
    *             <dt>Header</dt>
    *             <dd>
    *                 <p>Content</p>
    *             </dd>
    *
    *             <dt>Header</dt>
    *             <dd>
    *                 <p>Content</p>
    *             </dd>
    *
    *             <dt>Header</dt>
    *             <dd>
    *                 <p>Content</p>
    *             </dd>
    *         </dl>
    */
    this.accordian = function(aId) {
    
      var elID = "#" + aId;
      $(elID + " dd").hide();
      $(elID + " dt").click(function() {
       $(this).next('dd').slideToggle('fast').siblings('dd').slideUp('fast');
      });
      
    }; // accordian()
    
    /**
    *  @public staticTabs
    *  @description  Simple tabbed container; responsive
    *
    *  @setup use 2 lists:
    *
    *         <div id="rTabs">
    *              <ol>
    *                  <li><h5>Tab 1</h5></li>
    *                  <li><h5>Tab 2</h5></li>
    *                  <li><h5>Tab 3</h5></li>
    *                  <li><h5>Tab 4</h5></li>
    *              </ol>
    *              <ul>
    *                  <li><div><p>Content</p></div></li>
    *                  <li><div><p>Content</p></div></li>
    *                  <li><div><p>Content</p></div></li>
    *                  <li><div><p>Content</p></div></li>
    *              </ul>
    *        </div>
    */
    this.staticTabs = function(tabSetId) {
    
      var setId = "#" + tabSetId;
    
      // Custom configurations
      var leftJustified = false; // true = left tab aligned with left edge; false = semi centered tabs
      var tabRmargin = 1;     // right margin of each tab in % = space between each tab
      
      var numSTabs;     // number of tabs in the set calculated dynamically
      var initTabWidth; // width of each tab calculated dynamically
      var tabWidth;     // width of each tab allowing for space between (if any) 
      var tabLmargin;   // dynamically calculated after tabWidth is calcuated

      numSTabs = $(setId + " ol li").length;
      initTabWidth =  (Math.round( ( ($(setId).outerWidth() / numSTabs) / $(setId).outerWidth() ) * 100));  
      tabWidth = initTabWidth - (tabRmargin * numSTabs);				

      if (!leftJustified) {
        if (tabWidth < initTabWidth) {
          tabLmargin = Math.round( (initTabWidth - tabWidth) );
          if (numSTabs > 2) {
            tabLmargin = tabLmargin + tabRmargin;
          } 
        }
      }
  
      $(setId + " ol li").css({'width':(tabWidth + "%"), 'margin-right':(tabRmargin + "%")});
      
      if (!leftJustified) {
        $(setId + " ol li:first-child").css({'margin-left':(tabLmargin + "%")});
      }
      
      $(setId + " ul li").hide();

      // dynamic IDs
      $(setId + " ol li").each(function( index ) {
        $(this).attr('id',(tabSetId + '-tab' + index));
      });
  
      $(setId + " ul li").each(function( index ) {
        $(this).attr('id',(tabSetId + '-tab' + index + 'box'));
      });
  
      $(setId + " ul li:first-child").show();
      $(setId + " ol li:first-child").addClass("opentab");
  
      $(setId + " ol li").click(function() {
        $(setId + " ol li").removeClass('opentab');
        $(this).addClass("opentab");
        $(setId + " ul li").hide();
        var boxID = "#" + $(this).attr('id') + "box";
        $(boxID).show();
      });

    }; // staticTabs()

  
  
}; // UIcontent
var utils = new UIcontent();



/* @Class: TEMPLATEJS
 *
 * @Summary  
 *          
 *
*/
var TEMPLATEJS = function () {
 
  
  /**
	 *	@private isAlphaNumeric
	 *	@description Validates if a string is alphanumeric
	 *	@param {string} str: string to test
	 *	@returns {boolean} true/false
	 */
	var isAlphaNumeric = function (str) {
		var letters = /^[0-9a-zA-Z#*&(), -.\/]+$/;
		if (str.match(letters)) {
			return true;
		} else {
			return false;
		}
	};

	/**
	 *	@private isNumeric
	 *	@description Validates if a string is numeric
	 *	@param {string} str: string to test
	 *	@returns {boolean} true/false
	 */
	var isNumeric = function (str) {
		if (/^[0-9]*$/.test(str)) {
			return true;
		} else {
			return false;
		}
	};
	
	/**
	 *	@private isValidEmailAddress
	 *	@description Tests a string to see if it's a valid email address
	 *	@param {string} emailAddress: Potential email address
	 *	@returns {boolean} true/false
	 */
	var isValidEmailAddress = function (emailAddress) {
		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		return pattern.test(emailAddress);
	};

	/**
	 *	@private isValidPassword
	 *	@description Tests a string to see if it's a valid password (contains no spaces)
	 *	@param {string} password
	 *	@returns {boolean} true/false
	 */
	var isValidPassword = function (password) {
		var pattern = /\s/;
		var t = pattern.test(password);
		if (t) {
			return false;
		} else {
			return true;
		}
	};
	
	/**
	 *	@private urlParam
	 *	@description returns the value of a attribute in a url
	 *	@param {string} name: name of attribute
	 *	@returns {string} value of attribute
	 */
	var urlParam = function (name) {
		var result = {},
		queryString = location.search.substring(1),
		re = /([^&=]+)=([^&]*)/g,
		m;
		while (true) {
			m = re.exec(queryString);
			if (!m) {
				break;
			}
			result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
		}
		var attr = name ? result[name] : result;
		return attr;
	};

	/**
	 *	@private urlParamFromString
	 *	@description returns an array of query args from a string
	 *	@param {str} name: URL string
	 *	@returns {array} array of query args
	 */
	var urlParamFromString = function (str) {
		var i,
		prmarr,
		tmparr;
		var queryArgs = [];
		params = str.split("?");
		if (params[1]) {
			prmarr = params[1].split("&");
			for (i = 0; i < prmarr.length; i++) {
				tmparr = prmarr[i].split("=");
				queryArgs[tmparr[0]] = tmparr[1];
			}
		}
		return queryArgs;
	};
  
  
  /**
   *	@private getDeviceOS
   *	@description returns the name of the device.
   *	@returns {string} name of the device.  Currently supports "ios", "kindle", "android", "windows"
   *  reference: https://www.whatismybrowser.com/developers/tools/user-agent-parser/browse
   */
  var getDeviceOS = function() {
	var ua = navigator.userAgent;
	if (ua.match(/Silk/i)) {
		return "kindle";
	} else if (ua.match(/Android/i)) {
		if (ua.match(/Windows Phone/i)) {
			return "windows";
		} else {
			return "android";
		}
	} else if (ua.match(/iPhone|iPad|iPod/i)) {
		return "ios";
	} else {
		return "desktop"; //or unsupported device
	}

  }; // getDeviceOS()
  
  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  /**
   * Opens a new browser instance above the current
   * 
   */
  var ctrpup = function(url, title, w, h) {
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  }; // ctrpup()
  
  /**
   * Provides a smooth in-page scroll to the target element
   * 
   */
  var scrollToo = function(target) {	
	$("html, body").animate({ scrollTop: $(target).offset().top }, 1000);
    return false;
  };
  
  
  /**
  *  @public init()
  *  @description
  */
  this.init = function () {
    
    /**
    * Set up external links
    */
    extlinks.setNewWinLinks('\u279A ',0); // \u279A == &#10138;
 
    /*********************************************************************************
     * @ Scrolling Animations 
     * ref: http://imakewebthings.com/jquery-waypoints/#docs
     ********************************************************************************/

	  /*
    $('#trigger').waypoint(function(direction) { 
      if (direction === "down") {
        //        
      } else {
        // 
      }
    }, { offset: 0, triggerOnce: false });
	  */

  $("#cookie-close").on( "click", function() {
    $("#cookie-notice").fadeOut(300);
    return false;
  });

  // The CSS hover state triggers the second animation, however on mouseout the default (classed) animation triggers again.
  // Here we simply remove the class after 5 seconds. Note: the dual trigger (mousein, mouseout) IS kinda cool :).
  setTimeout(function(){ $("#thesite").removeClass('shine'); }, 5000);


    
    // RUI via JS
	if (typeof window.matchMedia !== 'undefined' || typeof window.msMatchMedia !== 'undefined') {
		var isDesktop = window.matchMedia('(min-width: 960px)');
		var isTablet = window.matchMedia('(min-width: 600px) and (max-width: 959px)');
		var isMobile = window.matchMedia('(max-width: 599px)');

		if (isMobile.matches) {
			//
		} else if (isTablet.matches) {
			//
		} else {
			//
		}

		isDesktop.addListener(function (event) {
			if (event.matches) {
				//
			}
		});
		isTablet.addListener(function (event) {
			if (event.matches) {
				//
			}
		});
		isMobile.addListener(function (event) {
			if (event.matches) {
				//
			}
		});
	} else {
		// default
	}

  }; // init()
    
}; // TEMPLATEJS()
var LOADTEMPLATEJS = new TEMPLATEJS(); 


$(document).ready(function(){

  LOADHEADERDATA.init();
  LOADINTRODATA.init();
  LOADBUGSDATA.init();
  LOADCOOKIEMSGDATA.init();
  LOADTEMPLATEJS.init(); 

});








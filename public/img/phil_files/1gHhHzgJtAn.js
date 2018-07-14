if (self.CavalryLogger) { CavalryLogger.start_js(["aff3u"]); }

__d("FBStoriesViewerEntrypoint",[],(function(a,b,c,d,e,f){"use strict";e.exports={HOMEPAGE_TRAY:"HOMEPAGE_TRAY",GROUP_MALL:"GROUP_MALL",GROUP_PENDING_STORIES_TAB:"GROUP_PENDING_STORIES_TAB",PAGES_SURFACE:"PAGES_SURFACE",PERMANENT_LINK_VIEW:"PERMANENT_LINK_VIEW"}}),null);
__d("RequiredFormListener",["Event","Input"],(function(a,b,c,d,e,f){__p&&__p();b("Event").listen(document.documentElement,"submit",function(a){a=a.getTarget();if(a.getAttribute("novalidate"))return!0;a=a.getElementsByTagName("*");for(var c=0;c<a.length;c++)if(a[c].getAttribute("required")&&b("Input").isEmpty(a[c])){a[c].focus();return!1}},b("Event").Priority.URGENT)}),null);
__d("ProfileLink.react",["Link.react","React","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("React").PropTypes;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){var a=new(b("URI"))("/ajax/hovercard/user.php").setQueryData({id:this.props.uid});return b("React").createElement(b("Link.react"),babelHelpers["extends"]({},this.props,{"data-hovercard":a,href:this.props.href||"/"+this.props.uid}),this.props.children)};function a(){g.apply(this,arguments)}a.propTypes={href:c.string,uid:c.string.isRequired};e.exports=a}),null);
__d("QPEventHandling",[],(function(a,b,c,d,e,f){"use strict";a={registerClickListener:function(a,b,c){a.addEventListener("click",c)}};e.exports=a}),null);
__d("FeedQuickLogModule",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CACHE_FETCH:655545,LOAD:655546,NETWORK_FETCH:655544,SCROLL_PERF:655590,COMMENT_TTL_WWW:655585,CONSUMPTION_RESTORATION_WWW:655575,IMAGE_LOAD_WWW:655576,LOAD_ANY_DESTINATION_FROM_NOTIFICATIONS_WWW:655596,LOAD_STORY_PERMALINK_FROM_ANYWHERE_WWW:655597,MAIN_THREAD_PERFORMANCE:655595,NOTIFICATION_INTERACTION_WWW:655584})}),null);
__d("QuickLogEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({23855110:{moduleName:"UNIDASH",name:"CLEAN_LOAD_WWW",sampleRate:null},655585:{moduleName:"FEED",name:"COMMENT_TTL_WWW",sampleRate:null},655575:{moduleName:"FEED",name:"CONSUMPTION_RESTORATION_WWW",sampleRate:1},655576:{moduleName:"FEED",name:"IMAGE_LOAD_WWW",sampleRate:5e3},23855105:{moduleName:"UNIDASH",name:"INIT_LOAD_WWW",sampleRate:null},655596:{moduleName:"FEED",name:"LOAD_ANY_DESTINATION_FROM_NOTIFICATIONS_WWW",sampleRate:50},655597:{moduleName:"FEED",name:"LOAD_STORY_PERMALINK_FROM_ANYWHERE_WWW",sampleRate:100},655595:{moduleName:"FEED",name:"MAIN_THREAD_PERFORMANCE",sampleRate:1},7995401:{moduleName:"RELAY",name:"NETWORK_FETCH_QUERY",sampleRate:null},655584:{moduleName:"FEED",name:"NOTIFICATION_INTERACTION_WWW",sampleRate:1},23855108:{moduleName:"UNIDASH",name:"PAGE_LOAD_END_WWW",sampleRate:null},24117250:{moduleName:"SRT",name:"PAGE_NAVIGATION_START_WWW",sampleRate:null},11075606:{moduleName:"MARKETPLACE",name:"REACT_TTI_WWW",sampleRate:null},7995402:{moduleName:"RELAY",name:"RUNTIME_GC",sampleRate:1},7995400:{moduleName:"RELAY",name:"RUNTIME_SUBSCRIPTIONS",sampleRate:null},23855109:{moduleName:"UNIDASH",name:"TAB_NAV_START_WWW",sampleRate:null},23855112:{moduleName:"UNIDASH",name:"TAB_NAV_WWW",sampleRate:null},24117249:{moduleName:"SRT",name:"TIME_TO_FIRST_JOB_WWW",sampleRate:null},24117251:{moduleName:"SRT",name:"TIME_TO_NEXT_JOB_WWW",sampleRate:null},3735603:{moduleName:"UFI",name:"UFI2_COMMENT_REACTION",sampleRate:1},3735606:{moduleName:"UFI",name:"UFI2_COMPOSER_KEYPRESS_LATENCY",sampleRate:1},3735590:{moduleName:"UFI",name:"UFI2_OPTIMISTIC_COMMENT",sampleRate:1},3735593:{moduleName:"UFI",name:"UFI2_OPTIMISTIC_COMMENT_EDIT",sampleRate:1},3735592:{moduleName:"UFI",name:"UFI2_PERSISTED_COMMENT",sampleRate:1},3735594:{moduleName:"UFI",name:"UFI2_PERSISTED_COMMENT_EDIT",sampleRate:1},3735597:{moduleName:"UFI",name:"UFI2_REPLY_COMMENTS_PAGINATION",sampleRate:1},3735599:{moduleName:"UFI",name:"UFI2_SHARE_DIALOG_OPENS",sampleRate:1},3735602:{moduleName:"UFI",name:"UFI2_STORY_REACTION",sampleRate:1},3735596:{moduleName:"UFI",name:"UFI2_TOP_LEVEL_COMMENTS_PAGINATION",sampleRate:1},3735604:{moduleName:"UFI",name:"UFI_COMMENT_REACTION",sampleRate:100},3735600:{moduleName:"UFI",name:"UFI_COMPOSER_INPUT_FOCUS",sampleRate:100},3735605:{moduleName:"UFI",name:"UFI_COMPOSER_KEYPRESS_LATENCY",sampleRate:100},3735589:{moduleName:"UFI",name:"UFI_OPTIMISTIC_COMMENT",sampleRate:100},3735591:{moduleName:"UFI",name:"UFI_PERSISTED_COMMENT",sampleRate:100},3735598:{moduleName:"UFI",name:"UFI_SHARE_DIALOG_OPENS",sampleRate:100},3735601:{moduleName:"UFI",name:"UFI_STORY_REACTION",sampleRate:100},3735595:{moduleName:"UFI",name:"UFI_TOP_LEVEL_COMMENTS_PAGINATION",sampleRate:100},7995399:{moduleName:"RELAY",name:"UNSAFE_ASYNC_TEST",sampleRate:null},7995396:{moduleName:"RELAY",name:"UNSAFE_SUBSCRIPTIONS_TEST",sampleRate:null},7995398:{moduleName:"RELAY",name:"UNSAFE_SYNC_TEST",sampleRate:null},23855107:{moduleName:"UNIDASH",name:"WIDGET_LOAD_END_WWW",sampleRate:null},23855106:{moduleName:"UNIDASH",name:"WIDGET_LOAD_START_WWW",sampleRate:null},23855111:{moduleName:"UNIDASH",name:"WIDGET_LOAD_WWW",sampleRate:null}})}),null);
__d("QuickPerformanceLogger",["Banzai","Bootloader","Env","EventProfiler","QuickLogConfig","QuickLogEvents","Random","performance","performanceNavigationStart","performanceNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={},this.$2={},this.$3={},this.$4=100}a.prototype.$5=function(a,b){a=this.$1[a];if(!a)return null;a=a[b];return!a?null:a};a.prototype.markerStart=function(a,c,d){__p&&__p();c===void 0&&(c=0);d===void 0&&(d=this.currentTimestamp());var e=b("QuickLogEvents")[a.toString()];if(!e)return;e=this.$3[a]||e.sampleRate||this.$4;if(!b("Env").enable_qplinspector&&!b("Random").coinflip(e))return;var f=this.$1[a];f||(this.$1[a]={});f=b("QuickLogConfig").qpl_to_interaction[a];if(f){var g=a+" : "+c;this.$2[g]=b("EventProfiler").markManualStart([f.name],f.eventType,d)}this.$1[a][c]={timestamp:d,sampleRate:e,points:{}}};a.prototype.annotateMarkerString=function(a,b,c,d){d===void 0&&(d=0);a=this.$5(a,d);if(!a)return;d=a.annotations||{};d[b]=c;a.annotations=d};a.prototype.annotateMarkerStringArray=function(a,b,c,d){d===void 0&&(d=0);a=this.$5(a,d);if(!a)return;d=a.annotationsStringArray||{};d[b]=c;a.annotationsStringArray=d};a.prototype.annotateMarkerInt=function(a,b,c,d){d===void 0&&(d=0);a=this.$5(a,d);if(!a)return;d=a.annotationsInt||{};d[b]=c;a.annotationsInt=d};a.prototype.annotateMarkerIntArray=function(a,b,c,d){d===void 0&&(d=0);a=this.$5(a,d);if(!a)return;d=a.annotationsIntArray||{};d[b]=c;a.annotationsIntArray=d};a.prototype.annotateMarkerDouble=function(a,b,c,d){d===void 0&&(d=0);a=this.$5(a,d);if(!a)return;d=a.annotationsDouble||{};d[b]=c;a.annotationsDouble=d};a.prototype.annotateMarkerDoubleArray=function(a,b,c,d){d===void 0&&(d=0);a=this.$5(a,d);if(!a)return;d=a.annotationsDoubleArray||{};d[b]=c;a.annotationsDoubleArray=d};a.prototype.markerPoint=function(a,b,c,d,e){d===void 0&&(d=0);e===void 0&&(e=this.currentTimestamp());a=this.$5(a,d);if(!a)return;a.points[b]={data:c,timeSinceStart:e-a.timestamp}};a.prototype.markerEnd=function(a,c,d,e){__p&&__p();d===void 0&&(d=0);e===void 0&&(e=this.currentTimestamp());var f=Date.now(),g=this.$5(a,d);if(!g)return;var h=b("QuickLogEvents")[a.toString()];if(!h)return;var i=a+" : "+d;this.$2[i]&&this.$2[i].markManualEnd(e);i=e-g.timestamp;e=f-i;var j=g.points;this.$6({event_is_intermediate_marker:"false",instance_id:d,quicklog_module:h.moduleName,quicklog_event:h.name,quicklog_action:c,sample_rate:g.sampleRate,trace_tags:"",value:i,annotations:g.annotations,annotations_double:g.annotationsDouble,annotations_double_array:g.annotationsDoubleArray,annotations_int:g.annotationsInt,annotations_int_array:g.annotationsIntArray,annotations_string_array:g.annotationsStringArray,points:Object.keys(j).map(function(a){return{data:j[a].data,name:a,timeSinceStart:j[a].timeSinceStart}})},e);delete this.$1[a][d]};a.prototype.markerDrop=function(a,b){b===void 0&&(b=0);a=this.$1[a];a&&delete a[b]};a.prototype.dropAllMarkers=function(){this.$1={}};a.prototype.setAlwaysOnSampleRate=function(a,b){this.$3[a]=b};a.prototype.setSampleRateForInstance=function(a,b,c){c===void 0&&(c=0);a=this.$1[a][c];a&&(a.sampleRate=b)};a.prototype.currentTimestamp=function(){return b("performanceNavigationStart")()+b("performanceNow")()};a.prototype.navigationStartTimestamp=function(){return b("performance").timing.navigationStart};a.prototype.$6=function(event,a){var c=this.$7(event,a);b("Env").enable_qplinspector&&b("Bootloader").loadModules(["QPLInspector"],function(a){a.appendLog(c)},"QuickPerformanceLogger");b("Banzai").post("perf",c)};a.prototype.$7=function(event,a){return{appversion:"0 (web)",clienttime:a,rawclienttime:a,deviceid:"0",extra:event}};e.exports=new a()}),null);
__d("XQuickPromotionSimpleLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/qp/action/log/",{qp_id:{type:"Int",required:!0},qp_action:{type:"Enum",enumType:1},qp_instance_log_data:{type:"StringToStringMap",defaultValue:{}},qp_event:{type:"String"}})}),null);
__d("QPRenderer",["csx","CSS","FBLogger","Parent","QPEventHandling","XAsyncRequest","XQuickPromotionSimpleLoggingController","ge"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,event,c){a=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setString("qp_event",event).setStringToStringMap("qp_instance_log_data",c).getURI();new(b("XAsyncRequest"))(a).send()}function a(a,c,d){a=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",c).setStringToStringMap("qp_instance_log_data",d).getURI();new(b("XAsyncRequest"))(a).send()}function c(a,c,d,e,f,g){e=b("ge")(e);e!==null?i(a,d,e,g,function(){f&&b("CSS").hide(c)}):b("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,d)}function d(a,c,d,e,f){i(a,c,d,f,function(){if(e){var a=b("Parent").bySelector(d,"._5jmm");a instanceof HTMLElement&&b("CSS").hide(a)}})}function e(a,c,d){c.show();h(a,"view",{});c.subscribe("cancel",function(){h(a,"dialog_cancel",{})});for(var e=0;e<d.length;e++){var f=d[e],g=b("ge")(f.element_id);g!==null?(i(a,f.action,g,f.extra_log_data,f.should_close?function(){c.hide()}:function(){}),f.action=="primary"&&g.focus()):b("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,f.action)}}function i(a,c,d,e,f){b("QPEventHandling").registerClickListener(d,c,function(){var d=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",c).setStringToStringMap("qp_instance_log_data",e).getURI();new(b("XAsyncRequest"))(d).send();f()})}f.setAction=c;f.setComponentActionForFeedUnitQP=d;f.setDialogActionsAndShow=e;f.logAction=a;f.logEvent=h}),null);
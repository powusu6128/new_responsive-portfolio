if (self.CavalryLogger) { CavalryLogger.start_js(["21lf7"]); }

__d("CollectionsAddNewHub",["AsyncRequest","AsyncResponse","Event","Form","Keys","ProfileOverviewSection"],(function(a,b,c,d,e,f){__p&&__p();a={init:function(a,c,d,e,f){b("ProfileOverviewSection").callWithSection(e,function(b){this.initImpl(a,c,d,e,f,b.getNode())}.bind(this))},initImpl:function(a,c,d,e,f,g){__p&&__p();if(!a)return;var h=a.getCore();a.subscribe("select",function(b,h){if(!h.selected.type.match("addnew"))return;this.createHub(a,h.selected.orig_text||h.selected.text,c,d,e,f,g)}.bind(this));var i=a.getView();b("Event").listen(h.getElement(),"keydown",function(event){b("Event").getKeyCode(event)==b("Keys").RETURN&&!i.getSelection()&&(this.createHub(a,h.getValue(),c,d,e,f,g),event.kill())}.bind(this))},createHub:function(a,c,d,e,f,g,h){var i=a.getCore();i.setEnabled(!1);var j=function(){i.reset(),i.getElement().blur(),i.setEnabled(!0)};f=babelHelpers["extends"]({title:c,type:d,root_id:h.id,results:a.getData().buildQueryResults(c)},b("Form").serialize(g));new(b("AsyncRequest"))(e).setData(f).setHandler(j).setErrorHandler(function(a){j(),b("AsyncResponse").defaultErrorHandler(a)}).send()}};e.exports=a}),null);
__d("OGAggregationBling",["cx","fbt","NumberFormat","React"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";__p&&__p();var a=[];this.props.likes&&a.push(b("React").createElement("span",{className:"_14a_",key:"likes"},b("React").createElement("i",{className:"_4fx"}),b("React").createElement("span",null,b("NumberFormat").formatInteger(this.props.likes)),b("React").createElement("span",{className:"accessible_elem"},h._("likes"))));if(this.props.comments)a.push(b("React").createElement("span",{className:"_14a_",key:"comments"},b("React").createElement("i",{className:"_4fy"}),b("React").createElement("span",null,b("NumberFormat").formatInteger(this.props.comments)),b("React").createElement("span",{className:"accessible_elem"},h._("comments"))));else{var c=!(this.props.mini&&this.props.likes),d=!this.props.likes&&this.props.alwaysVisible;c="_14a_"+(c?" _4fz":"")+(d?" _55n8":"");a.push(b("React").createElement("span",{className:c,key:"comments"},b("React").createElement("i",{className:"_4fy"})))}return b("React").createElement("a",{className:"_4f-",href:"#",rel:"toggle"},a)};function a(){"use strict";i.apply(this,arguments)}e.exports=a}),null);
__d("OGAggregationUFI",["csx","cx","CSS","DOM","OGAggregationBling","React","ReactDOM","UFICentralUpdates","UFIConstants","UFIFeedbackTargets","UFILikeLink.react","UFIReactionTypes","UFIToplevelPagedCommentList","UFIUserActions"],(function(a,b,c,d,e,f,g,h){__p&&__p();function a(a,c,d){this._root=a,this._id=c.ftentidentifier,this._source=c.source,this._mini=c.mini,this._alwaysVisible=c.alwaysvisible,this._bling=b("DOM").scry(this._root,"._4f-")[0],this._initializeLikeLink(),b("UFICentralUpdates").handleUpdate(b("UFIConstants").UFIPayloadSourceType.INITIAL_SERVER,d),b("UFICentralUpdates").subscribe("feedback-updated",function(a,b){this._id in b.updates&&this.render()}.bind(this)),this.render()}Object.assign(a.prototype,{_initializeLikeLink:function(){if(this._likeLink)throw new Error("OGAggregationUFI attempted to initialize the like link when the like link was already present");var a=b("DOM").scry(this._root,".like_link")[0];if(a){var c=document.createElement("span");a.parentNode.replaceChild(c,a);this._likeLink=c;c.appendChild(a)}},render:function(){__p&&__p();b("UFIFeedbackTargets").getFeedbackTarget(this._id,function(a){__p&&__p();if(this._likeLink){var c=!a.hasviewerliked,d=function(event){b("UFIUserActions").changeReaction(this._id,c?b("UFIReactionTypes").LIKE:b("UFIReactionTypes").NONE,{source:this._source},event.target)}.bind(this);d=b("React").createElement(b("UFILikeLink.react"),{onClick:d,likeAction:c});b("ReactDOM").render(d,this._likeLink)}if(this._bling){d=b("UFIToplevelPagedCommentList").getDisplayedCommentCountForFeedbackTargetID_UNSAFE(this._id);b("CSS").conditionClass(this._root,"_93n",this._mini&&(a.likecount||d));a=b("React").createElement(b("OGAggregationBling"),{alwaysVisible:this._alwaysVisible,mini:this._mini,likes:a.likecount,comments:d});b("ReactDOM").render(a,this._bling)}}.bind(this))}});e.exports=a}),null);
__d("TimelineCollectionItemReorder",["csx","AsyncRequest","DataStore","DOMQuery","OGCollectionAddObject","Parent","SortableGroup","TimelineAppCollection","$"],(function(a,b,c,d,e,f,g){__p&&__p();var h="item-reorder-inst";function i(a,c){"use strict";this._collectionToken=c,this._initSorting(),b("DataStore").set(b("$")(a),h,this),b("TimelineAppCollection").subscribe(b("TimelineAppCollection").NEW_ITEM,this._processNewItem.bind(this,a)),b("OGCollectionAddObject").subscribe(b("OGCollectionAddObject").NEW_ITEM,this._processNewItem.bind(this,a))}i.prototype._initSorting=function(){"use strict";this._sortableGroup=new(b("SortableGroup"))().setDropCallback(function(a,c){new(b("AsyncRequest"))("/ajax/timeline/collections/reorder_items/").setData({order:this._sortableGroup.getOrder(),collection_token:this._collectionToken}).send()}.bind(this))};i.prototype._registerCollectionItems=function(a){"use strict";a=b("DOMQuery").scry(a,"li[data-sort-id]");a.forEach(function(a){this._registerCollectionItem(a)},this)};i.prototype._registerCollectionItem=function(a){"use strict";var b=a.getAttribute("data-sort-id");this._sortableGroup.removeSortable(b);setTimeout(this._sortableGroup.addSortable.bind(this._sortableGroup,b,a),500)};i.prototype._processNewItem=function(a,c,d){"use strict";c=b("Parent").bySelector(d.grid,"._30f");if(a!==c.id)return;this._registerCollectionItem(d.newItem)};i.registerCollectionItems=function(a,b,c){"use strict";a=j(a,b);a&&a._registerCollectionItems(c)};function j(a,c){var d=b("DataStore").get(b("$")(a),h);return d||new i(a,c)}e.exports=i}),null);
__d("TimelineInHouseOGCurationControl",["csx","CSS","DOM","Parent","ProfileTabUtils","TimelineAppCollection"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c,d,e){__p&&__p();this._menu=a,this._collectionToken=c,this._popoverMenu=d,this._placeholderMarkup=e,this._menu.subscribe("itemclick",function(d,f){__p&&__p();d=f.item.getValue();var g="add_to_top",h="remove_from_top";if(d=="delete"||d=="recommend")return;if(d==c){f.item.deselect();a.done();return}var i=b("Parent").bySelector(this._popoverMenu,"._3owb");if(d=="highlight"){var j=b("DOM").scry(i,"._54_4");j[0]&&(!f.item.isSelected()?b("CSS").addClass(j[0],"selected"):b("CSS").removeClass(j[0],"selected"));a.done();return}else if(d&&d.substring(0,g.length)===g){b("TimelineAppCollection").addPlaceholderToCollection(d.substring(g.length+1),i.parentNode);a.done();return}else if(d&&d.substring(0,h.length)===h){f=d.substring(h.length+1);if(c!==f){b("TimelineAppCollection").decrementCount(b("ProfileTabUtils").getIDForCollectionToken(f));a.done();return}}i.appendChild(e);b("CSS").hide(b("DOM").find(i,"[data-collection-item-bg]"));b("CSS").hide(b("DOM").find(i,"[data-collection-item-priv]"));if(!d){a.done();return}b("TimelineAppCollection").decrementCount(b("ProfileTabUtils").getIDForCollectionToken(c));d.substring(0,15)!=h&&b("TimelineAppCollection").addPlaceholderToCollection(d,i.parentNode);a.done()}.bind(this))}e.exports=a}),null);
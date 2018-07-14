if (self.CavalryLogger) { CavalryLogger.start_js(["mL0V8"]); }

__d("MessengerParticipantPickerWrapper.react",["React","SearchableEntry","emptyFunction","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.$1=function(a){var c=this.props.ParticipantRow,d=this.props.selectedEntries.has(a.getUniqueID());return b("React").createElement(c,{key:a.getUniqueID(),entry:a,selected:d,onClick:this.props.onClickEntry,onVisible:this.props.onVisibleEntry||b("emptyFunction"),onHidden:this.props.onHiddenEntry||b("emptyFunction")})};a.prototype.render=function(){var a=[];this.props.entries.forEach(function(b){return a.push(this.$1(b))}.bind(this));var c=this.props.ParticipantList;return b("React").createElement(c,{loading:this.props.loading,formattedEntries:a,role:this.props.role,config:this.props.config})};function a(){g.apply(this,arguments)}a.defaultProps={role:"listbox"};e.exports=a}),null);
__d("MessengerDestinationPickerParticipantItem.react",["cx","Badge.react","Keys","MercuryTypeaheadConstants","OnVisible.react","React","SplitImage.react","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=36;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$4=function(event){this.props.onClick(this.props.entry)}.bind(this),this.$5=function(event){(event.keyCode===b("Keys").SPACE||event.keyCode===b("Keys").RETURN)&&(event.preventDefault(),this.$4(event))}.bind(this),this.onVisible=function(){this.props.onVisible(this.props.entry)}.bind(this),this.willUnmount=function(){this.props.onHidden(this.props.entry)}.bind(this),c}a.prototype.$1=function(){var a=this.props.entry,c=a.getPhoto();a=a.getAuxiliaryData();var d=[];!c&&a&&typeof a==="object"&&a.participantsToRender&&Array.isArray(a.participantsToRender)&&(d=a.participantsToRender.map(function(a){return a&&typeof a==="object"&&typeof a.image_src==="string"?a.image_src:""}));return c||d.length?b("React").createElement(b("SplitImage.react"),{srcs:c?[String(c)]:d,size:i,className:"_6c12"}):b("React").createElement("div",{className:"_3-w4"})};a.prototype.$2=function(){return this.props.entry.getTitle()};a.prototype.$3=function(){return this.props.entry.getSubtitle()};a.prototype.$6=function(){var a=this.props.entry.getType();return a===b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE?b("React").createElement(b("Badge.react"),{type:"bot",size:"medium"}):null};a.prototype.componentWillUnmount=function(){this.willUnmount()};a.prototype.render=function(){var a=b("joinClasses")("_599m _1sex _5mne"+(this.props.selected?" _1sfg":"")+" _6c13",this.props.className);return b("React").createElement(b("OnVisible.react"),{onVisible:this.onVisible,onHidden:this.willUnmount},b("React").createElement("li",{key:"messengerList","aria-selected":this.props.selected,className:a,onMouseDown:this.$4,onKeyDown:this.$5,role:"option"},b("React").createElement("div",{className:"_1sez",key:"messengerListItem"},b("React").createElement("div",{className:"_1se-"},b("React").createElement("div",{className:"_1se_"})),this.$1(),b("React").createElement("div",{className:"_6c14"},b("React").createElement(b("XUIText.react"),{className:"_3qpq _3qps",size:"header3"},this.$2()),b("React").createElement(b("XUIText.react"),{size:"meta1",className:"_3-wf"},this.$3())))))};e.exports=a}),null);
__d("MessengerDestinationPickerParticipantPicker.react",["cx","fbt","CenteredContainer.react","DOMContainer.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(a){i.constructor.call(this,a),this.$1=null}a.prototype.render=function(){return this.props.formattedEntries.length===0&&!this.props.loading?b("React").createElement(b("CenteredContainer.react"),{className:"_2pi1"},h._("No results")):b("React").createElement("ol",{className:"_159h"},this.props.formattedEntries,this.props.loading?this.$2():null)};a.prototype.$2=function(){var a=this.props.config&&this.props.config.shimmer;if(a)return b("React").createElement("li",{className:"_6c0s"},this.props.formattedEntries.length>0?b("React").createElement(b("DOMContainer.react"),null,a):new Array(4).fill(0).map(function(c,d){return b("React").createElement(b("DOMContainer.react"),{key:d},a)}));else return b("React").createElement("div",null)};e.exports=a}),null);
__d("ReactComposerSharingSpacesSelectorMessengerSearch.react",["ix","cx","fbt","ChatSearchSource","Image.react","MessengerSecondarySearchFunnelConstants","React","SearchableTextInput.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(a){j.constructor.call(this,a),this.$1=new(b("ChatSearchSource"))({queryRequests:[{uri:"/ajax/mercury/composer_query.php"}],excludeMemorializedUsers:!0,searchType:b("MessengerSecondarySearchFunnelConstants").ENTRY_SURFACES.COMPOSER})}a.prototype.componentDidMount=function(){this.$2&&this.$2.focusInput()};a.prototype.render=function(){var a=i._("Search Friends and Groups");return b("React").createElement("div",{className:"_6a8z"},b("React").createElement(b("Image.react"),{src:g("492644")}),b("React").createElement(b("SearchableTextInput.react"),{className:"_1-tt",ref:function(a){this.$2=a}.bind(this),onChange:this.props.onSearchChange,onEntriesFound:this.props.onSearchEntriesFound,placeholder:a,queryString:this.props.query,searchSource:this.$1,searchSourceOptions:{onQueryFinished:this.props.onSearchFinished}}))};e.exports=a}),null);
__d("MessengerGroupCreationEntryPoint",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHAT_TAB:"chat_tab_add_people",JEWEL:"jewel_new_message",CHAT_SIDEBAR:"chat_sidebar_new_message",GCF_JEWEL:"jewel_new_group",GCF_CHAT_SIDEBAR:"chat_sidebar_new_group",GCF_SHARE_FLOW:"chat_share_message_to_messenger"})}),null);
__d("ReactComposerSharingSpacesSelectorMessengerSectionHeader.react",["cx","fbt","BootloadOnInteraction.react","JSResource","LazyComponent.react","LeftRight.react","MessengerGroupCreationEntryPoint","React","ReactComposerSharingSpacesSelectorMessengerSearch.react","SharingSpacesStrings","XUIText.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=422,k=477;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){var a=b("React").createElement(b("XUIText.react"),{onClick:this.props.onClickCreateGroup,className:"_1-tr"},h._("Create Group"));return b("React").createElement("div",{className:"_1shc _6c0r"},b("React").createElement(b("LeftRight.react"),null,b("React").createElement(b("XUIText.react"),{size:"body3",weight:"bold",className:"_1shd"},b("SharingSpacesStrings").SHARING_SPACES_SELECTOR_DESTINATION_MESSENGER),b("React").createElement("div",null,this.props.showSearch?null:b("React").createElement(b("XUIText.react"),{onClick:this.props.onClickSearch,className:"_1-tr"},h._("Search")," \xb7 "),b("React").createElement(b("BootloadOnInteraction.react"),{loader:b("JSResource")("MessengerGroupCreateDialogImpl.react").__setRef("ReactComposerSharingSpacesSelectorMessengerSectionHeader.react"),placeholder:a,component:this.props.showCreateGroupDialog?b("React").createElement(b("LazyComponent.react"),{entryPoint:b("MessengerGroupCreationEntryPoint").GCF_SHARE_FLOW,dialogTitle:h._("Create Group"),pickerScrollAreaHeight:j,selectedSectionHeight:k,isShown:!0,onClose:this.props.onCreateGroupDialogClose,doNotCreateGroup:!0}):a}))),this.props.children)};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("ReactComposerSharingSpacesSelectorMessengerSection.react",["cx","ChatTypeaheadConstants","ComposerDestinationsLoggingUtils","MessengerDestinationPickerParticipantItem.react","MessengerDestinationPickerParticipantPicker.react","MessengerParticipantPickerWrapper.react","React","ReactComposerAudienceActions","ReactComposerAudienceMessengerTypes","ReactComposerLoggingStore","ReactComposerSharingSpacesSelectorMessengerSearch.react","ReactComposerSharingSpacesSelectorMessengerSectionHeader.react","SharingSpacesStrings","Tooltip","requireWeak"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=20;c=babelHelpers.inherits(a,b("React").PureComponent);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={loadingQuery:!1,query:"",searchResults:[],isMessengerListLoading:!0,messengerRecipientEntries:[],showSearch:!1,showCreateGroupDialog:!1},this.$7=function(a){var c=this.state.query?this.state.searchResults:this.state.messengerRecipientEntries;c=c.map(function(a){return a.getUniqueID()}).indexOf(a.getUniqueID());b("ComposerDestinationsLoggingUtils").logComposerDestinationsMessengerThreadToggled(this.props.composerID,b("ReactComposerLoggingStore").getSessionID(this.props.composerID),!this.props.selectedEntries.flatten().has(a.getUniqueID()),a.getUniqueID(),this.$8(a),c);b("ReactComposerAudienceActions").toggleMessengerEntry(this.props.composerID,a.getUniqueID(),this.$8(a))}.bind(this),this.$3=function(a){b("ComposerDestinationsLoggingUtils").logComposerDestinationsMessengerGroupCreationFinished(this.props.composerID),a&&(this.state.messengerRecipientEntries.unshift(a),this.$7(a)),this.setState({showCreateGroupDialog:!1})}.bind(this),this.$1=function(){b("ComposerDestinationsLoggingUtils").logComposerDestinationsMessengerSearchOpened(this.props.composerID),this.setState(function(a){return{showSearch:!a.showSearch}})}.bind(this),this.$2=function(){b("ComposerDestinationsLoggingUtils").logComposerDestinationsMessengerGroupCreationOpened(this.props.composerID),this.setState(function(a){return{showCreateGroupDialog:!0}})}.bind(this),this.$6=function(a){a===this.state.query&&this.setState({loadingQuery:!1})}.bind(this),this.$4=function(event){var a=event.target.value;this.setState({loadingQuery:!0,query:a})}.bind(this),this.$5=function(a){a=a.filter(function(a){return a.getType()===b("ChatTypeaheadConstants").THREAD_TYPE||a.getType()===b("ChatTypeaheadConstants").FRIEND_TYPE}),this.setState({searchResults:a})}.bind(this),c}a.prototype.render=function(){return b("React").createElement("li",babelHelpers["extends"]({className:"_1pek"+(this.props.isDisabled?" _3560":"")+(this.props.isDisabled?" _vlk":"")},this.props.isDisabled?b("Tooltip").propsFor(b("SharingSpacesStrings").MESSENGER_DISABLED_TOOLTIP):{}),b("React").createElement("div",null,b("React").createElement(b("ReactComposerSharingSpacesSelectorMessengerSectionHeader.react"),{showSearch:this.state.showSearch,onClickSearch:this.$1,onClickCreateGroup:this.$2,showCreateGroupDialog:this.state.showCreateGroupDialog,onCreateGroupDialogClose:this.$3},this.state.showSearch?b("React").createElement(b("ReactComposerSharingSpacesSelectorMessengerSearch.react"),{onSearchChange:this.$4,onSearchEntriesFound:this.$5,query:this.state.query,onSearchFinished:this.$6}):null),b("React").createElement(b("MessengerParticipantPickerWrapper.react"),{ParticipantRow:b("MessengerDestinationPickerParticipantItem.react"),ParticipantList:b("MessengerDestinationPickerParticipantPicker.react"),onClickEntry:this.$7,loading:this.state.isMessengerListLoading||this.state.loadingQuery,entries:this.state.query?this.state.searchResults:this.state.messengerRecipientEntries,selectedEntries:this.props.selectedEntries.flatten(),config:this.props.config})))};a.prototype.$8=function(a){return a.getType()===b("ChatTypeaheadConstants").THREAD_TYPE?a.getAuxiliaryData().new_thread?b("ReactComposerAudienceMessengerTypes").NEW_GROUP:b("ReactComposerAudienceMessengerTypes").EXISTING_GROUP:b("ReactComposerAudienceMessengerTypes").INDIVIDUAL};a.prototype.componentDidMount=function(){b("ComposerDestinationsLoggingUtils").logComposerDestinationsBottomSheetOpened(this.context.composerID),b("requireWeak")("OrderedFriendsList",function(a){return a.getSearchableEntries(i,!0,function(a){this.setState({messengerRecipientEntries:a,isMessengerListLoading:!1})}.bind(this))}.bind(this))};e.exports=a}),null);
__d("ReactComposerSharingSpacesSelectorMessengerContainer.react",["FluxContainer","React","ReactComposerAudienceActions","ReactComposerAudienceMessengerTypes","ReactComposerAudienceStore","ReactComposerMediaUploadStore","ReactComposerScrapedAttachmentStore","ReactComposerSharingSpacesSelectorMessengerSection.react","ReactComposerStatusStore","ReactComposerTaggerStore","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={isDisabled:!1},b}a.getStores=function(){return[b("ReactComposerTaggerStore"),b("ReactComposerStatusStore"),b("ReactComposerMediaUploadStore"),b("ReactComposerScrapedAttachmentStore"),b("ReactComposerAudienceStore")]};a.calculateState=function(a,c){__p&&__p();a=b("ReactComposerTaggerStore").isDisabled(c.composerID,b("ReactComposerTaggerType").MESSENGER);var d=b("ReactComposerAudienceStore").getSelectedMessengerRecipientEntries(c.composerID);if(a&&!d.isEmpty())b("ReactComposerAudienceActions").storeSelectedMessengerEntries(c.composerID);else if(!a&&!b("ReactComposerAudienceStore").getStoredMessengerRecipientEntries(c.composerID).isEmpty()){d=b("ReactComposerAudienceStore").getStoredMessengerRecipientEntries(c.composerID);d.flatten().forEach(function(a){return b("ReactComposerAudienceActions").toggleMessengerEntry(c.composerID,a,b("ReactComposerAudienceMessengerTypes").INDIVIDUAL)});b("ReactComposerAudienceActions").clearStoredSelectedMessengerEntries(c.composerID)}return{isDisabled:a}};a.prototype.render=function(){return b("React").createElement(b("ReactComposerSharingSpacesSelectorMessengerSection.react"),babelHelpers["extends"]({},this.props,{isDisabled:this.state.isDisabled}))};e.exports=b("FluxContainer").create(a,{withProps:!0})}),null);
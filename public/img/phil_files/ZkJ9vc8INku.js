if (self.CavalryLogger) { CavalryLogger.start_js(["QpVM2"]); }

__d("WaveButton.react",["cx","ix","Bootloader","CurrentUser","Image.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={hasWaved:!1},this.$1=function(a){var c=this.props.userID;!this.state.hasWaved&&c!=null&&(b("Bootloader").loadModules(["MercuryMessageObject","MercurySourceType","MercuryIDs","MercuryMessageActions"],function(a,d,e,f){a=a.getForFBID(b("CurrentUser").getID()).constructAttachmentMessageObject(d.MESSENGER_WEB,e.getThreadIDFromUserID(c));a.lightweight_action_attachment={lwa_state:"INITIATED",lwa_type:"WAVE"};f.get().send(a)},"WaveButton.react"),this.setState({hasWaved:!0}),this.$2(b("CurrentUser").getID(),c));a.preventDefault()}.bind(this),c}a.prototype.render=function(){var a=h("359731"),c=h("359732");return!this.props.hover?null:b("React").createElement(b("Image.react"),{onClick:this.$1,className:"_2ob8",src:this.state.hasWaved?c:a})};a.prototype.$2=function(a,c){b("Bootloader").loadModules(["MessengerWebWaveTypedLogger","MessengerWaveEntrypoint","LightweightActionState"],function(b,d,e){new b().setUserID(a).setRecipientID(c).setEntrypoint(d.DIVEBAR).setLwaState(e.INITIATED).log()},"WaveButton.react")};e.exports=a}),null);
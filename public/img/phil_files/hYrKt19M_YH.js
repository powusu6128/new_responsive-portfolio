if (self.CavalryLogger) { CavalryLogger.start_js(["FATbN"]); }

__d("UFIFeedbackMutator",["ClientIDs","LiveWWWFeedbackTypedLogger","UFIConstants","UFIReactionTypes","emptyFunction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("UFIConstants").UFIActionType,h=b("UFIConstants").UFIPayloadSourceType,i={getHandlerForAction:function(a){var c;return(c={},c[g.LIKE_ACTION]=i.handleLike,c[g.SUBSCRIBE_ACTION]=i.handleSubscribe,c[g.DISABLE_COMMENTS]=i.handleCommentsDisabled,c[g.REACTION]=i.handleReaction,c[g.UPDATE_CONSTITUENT_TITLE]=i.handleUpdateConstituentTitle,c)[a.actiontype]||b("emptyFunction")},handleLike:function(a,c,d){var e=c.clientid&&b("ClientIDs").isExistingClientID(c.clientid);(d===h.LIVE_SEND||d===h.STREAMING)&&new(b("LiveWWWFeedbackTypedLogger"))().updateData({event:"update_view",update_type:"like",originated_locally:Boolean(e)}).log();if(e&&c.hasviewerliked!=a.hasviewerliked)return null;a.likecount=c.likecount;a.likesentences=c.likesentences;c.actorid==a.actorforpost?a.hasviewerliked=c.hasviewerliked:(a.likesentences.isunseen=!0,c.hasviewerliked!=a.hasviewerliked&&(a.likecount+=a.hasviewerliked?1:-1,a.likesentences={current:c.likesentences.alternate,alternate:c.likesentences.current,isunseen:a.likesentences.isunseen}));return a},handleSubscribe:function(a,c,d){if(c.clientid&&b("ClientIDs").isExistingClientID(c.clientid)&&c.hasviewersubscribed!=a.hasviewersubscribed)return null;if(c.actorid==a.actorforpost){a.hasviewersubscribed=c.hasviewersubscribed;return a}return a},handleCommentsDisabled:function(a,b,c){a.cancomment=b.cancomment;a.arecommentsdisabled=b.arecommentsdisabled;a.commentdisablednotice=b.commentdisablednotice;return a},handleReaction:function(a,c,d){if(c.clientid&&b("ClientIDs").isExistingClientID(c.clientid)&&c.viewerreaction!==a.viewerreaction)return null;a.reactors&&a.actorforpost==c.actorid&&a.viewerreaction!=c.viewerreaction&&(c.viewerreaction==b("UFIReactionTypes").NONE?a.reactors=a.reactors.slice(1):a.viewerreaction==b("UFIReactionTypes").NONE?a.reactors.unshift({name:a.ownname,profilepicsrc:a.ownprofpic,reaction:c.viewerreaction}):a.reactors[0].reaction=c.viewerreaction);(a.actorforpost==c.actorid||a.viewerreaction==c.viewerreaction)&&(a.reactioncount=c.reactioncount,a.reactioncountmap=c.reactioncountmap,a.reactioncountreduced=c.reactioncountreduced,a.reactionsentences=c.reactionsentences,a.reactorids=c.reactorids,a.userreactions=c.userreactions,a.viewerreaction=c.viewerreaction);return a},handleUpdateConstituentTitle:function(a,b,c){a.constituentbanneruri=b.constituentbanneruri;return a}};e.exports=i}),null);
__d("XMediaEffectTestlinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/fbcameraeffects/testit/{effect_id}/{hash}/",{effect_id:{type:"FBID",required:!0},hash:{type:"String",required:!0}})}),null);
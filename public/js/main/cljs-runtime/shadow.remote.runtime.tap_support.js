goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__39249,p__39250){
var map__39251 = p__39249;
var map__39251__$1 = (((((!((map__39251 == null))))?(((((map__39251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39251):map__39251);
var svc = map__39251__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39251__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39251__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39251__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39252 = p__39250;
var map__39252__$1 = (((((!((map__39252 == null))))?(((((map__39252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39252):map__39252);
var msg = map__39252__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39252__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39252__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39252__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39252__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__39267,p__39268){
var map__39269 = p__39267;
var map__39269__$1 = (((((!((map__39269 == null))))?(((((map__39269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39269):map__39269);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39269__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__39270 = p__39268;
var map__39270__$1 = (((((!((map__39270 == null))))?(((((map__39270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39270):map__39270);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39270__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__39278,p__39279){
var map__39280 = p__39278;
var map__39280__$1 = (((((!((map__39280 == null))))?(((((map__39280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39280):map__39280);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39280__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39280__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39281 = p__39279;
var map__39281__$1 = (((((!((map__39281 == null))))?(((((map__39281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39281):map__39281);
var msg = map__39281__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39281__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__39290,tid){
var map__39291 = p__39290;
var map__39291__$1 = (((((!((map__39291 == null))))?(((((map__39291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39291):map__39291);
var svc = map__39291__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39291__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__39298 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__39299 = null;
var count__39300 = (0);
var i__39301 = (0);
while(true){
if((i__39301 < count__39300)){
var vec__39317 = chunk__39299.cljs$core$IIndexed$_nth$arity$2(null,i__39301);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39317,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39317,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39327 = seq__39298;
var G__39328 = chunk__39299;
var G__39329 = count__39300;
var G__39330 = (i__39301 + (1));
seq__39298 = G__39327;
chunk__39299 = G__39328;
count__39300 = G__39329;
i__39301 = G__39330;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39298);
if(temp__5735__auto__){
var seq__39298__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39298__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39298__$1);
var G__39331 = cljs.core.chunk_rest(seq__39298__$1);
var G__39332 = c__4556__auto__;
var G__39333 = cljs.core.count(c__4556__auto__);
var G__39334 = (0);
seq__39298 = G__39331;
chunk__39299 = G__39332;
count__39300 = G__39333;
i__39301 = G__39334;
continue;
} else {
var vec__39320 = cljs.core.first(seq__39298__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39320,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39320,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39335 = cljs.core.next(seq__39298__$1);
var G__39336 = null;
var G__39337 = (0);
var G__39338 = (0);
seq__39298 = G__39335;
chunk__39299 = G__39336;
count__39300 = G__39337;
i__39301 = G__39338;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__39294_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__39294_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__39295_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__39295_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__39296_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__39296_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__39297_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__39297_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__39324){
var map__39325 = p__39324;
var map__39325__$1 = (((((!((map__39325 == null))))?(((((map__39325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39325):map__39325);
var svc = map__39325__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39325__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39325__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

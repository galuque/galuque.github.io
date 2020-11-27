goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39604 = arguments.length;
var i__4737__auto___39605 = (0);
while(true){
if((i__4737__auto___39605 < len__4736__auto___39604)){
args__4742__auto__.push((arguments[i__4737__auto___39605]));

var G__39606 = (i__4737__auto___39605 + (1));
i__4737__auto___39605 = G__39606;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39448){
var G__39449 = cljs.core.first(seq39448);
var seq39448__$1 = cljs.core.next(seq39448);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39449,seq39448__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39451 = cljs.core.seq(sources);
var chunk__39452 = null;
var count__39453 = (0);
var i__39454 = (0);
while(true){
if((i__39454 < count__39453)){
var map__39470 = chunk__39452.cljs$core$IIndexed$_nth$arity$2(null,i__39454);
var map__39470__$1 = (((((!((map__39470 == null))))?(((((map__39470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39470):map__39470);
var src = map__39470__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39470__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39470__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39470__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39470__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39472){var e_39607 = e39472;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39607);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39607.message)].join('')));
}

var G__39608 = seq__39451;
var G__39609 = chunk__39452;
var G__39610 = count__39453;
var G__39611 = (i__39454 + (1));
seq__39451 = G__39608;
chunk__39452 = G__39609;
count__39453 = G__39610;
i__39454 = G__39611;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39451);
if(temp__5735__auto__){
var seq__39451__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39451__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39451__$1);
var G__39612 = cljs.core.chunk_rest(seq__39451__$1);
var G__39613 = c__4556__auto__;
var G__39614 = cljs.core.count(c__4556__auto__);
var G__39615 = (0);
seq__39451 = G__39612;
chunk__39452 = G__39613;
count__39453 = G__39614;
i__39454 = G__39615;
continue;
} else {
var map__39473 = cljs.core.first(seq__39451__$1);
var map__39473__$1 = (((((!((map__39473 == null))))?(((((map__39473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39473):map__39473);
var src = map__39473__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39475){var e_39616 = e39475;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39616);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39616.message)].join('')));
}

var G__39617 = cljs.core.next(seq__39451__$1);
var G__39618 = null;
var G__39619 = (0);
var G__39620 = (0);
seq__39451 = G__39617;
chunk__39452 = G__39618;
count__39453 = G__39619;
i__39454 = G__39620;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39476 = cljs.core.seq(js_requires);
var chunk__39477 = null;
var count__39478 = (0);
var i__39479 = (0);
while(true){
if((i__39479 < count__39478)){
var js_ns = chunk__39477.cljs$core$IIndexed$_nth$arity$2(null,i__39479);
var require_str_39621 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39621);


var G__39622 = seq__39476;
var G__39623 = chunk__39477;
var G__39624 = count__39478;
var G__39625 = (i__39479 + (1));
seq__39476 = G__39622;
chunk__39477 = G__39623;
count__39478 = G__39624;
i__39479 = G__39625;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39476);
if(temp__5735__auto__){
var seq__39476__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39476__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39476__$1);
var G__39626 = cljs.core.chunk_rest(seq__39476__$1);
var G__39627 = c__4556__auto__;
var G__39628 = cljs.core.count(c__4556__auto__);
var G__39629 = (0);
seq__39476 = G__39626;
chunk__39477 = G__39627;
count__39478 = G__39628;
i__39479 = G__39629;
continue;
} else {
var js_ns = cljs.core.first(seq__39476__$1);
var require_str_39630 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39630);


var G__39631 = cljs.core.next(seq__39476__$1);
var G__39632 = null;
var G__39633 = (0);
var G__39634 = (0);
seq__39476 = G__39631;
chunk__39477 = G__39632;
count__39478 = G__39633;
i__39479 = G__39634;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39481){
var map__39482 = p__39481;
var map__39482__$1 = (((((!((map__39482 == null))))?(((((map__39482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39482):map__39482);
var msg = map__39482__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39482__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39482__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39484(s__39485){
return (new cljs.core.LazySeq(null,(function (){
var s__39485__$1 = s__39485;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39485__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__39490 = cljs.core.first(xs__6292__auto__);
var map__39490__$1 = (((((!((map__39490 == null))))?(((((map__39490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39490):map__39490);
var src = map__39490__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39490__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39490__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__39485__$1,map__39490,map__39490__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39482,map__39482__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39484_$_iter__39486(s__39487){
return (new cljs.core.LazySeq(null,((function (s__39485__$1,map__39490,map__39490__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39482,map__39482__$1,msg,info,reload_info){
return (function (){
var s__39487__$1 = s__39487;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39487__$1);
if(temp__5735__auto____$1){
var s__39487__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39487__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39487__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39489 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39488 = (0);
while(true){
if((i__39488 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__39488);
cljs.core.chunk_append(b__39489,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39635 = (i__39488 + (1));
i__39488 = G__39635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39489),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39484_$_iter__39486(cljs.core.chunk_rest(s__39487__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39489),null);
}
} else {
var warning = cljs.core.first(s__39487__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39484_$_iter__39486(cljs.core.rest(s__39487__$2)));
}
} else {
return null;
}
break;
}
});})(s__39485__$1,map__39490,map__39490__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39482,map__39482__$1,msg,info,reload_info))
,null,null));
});})(s__39485__$1,map__39490,map__39490__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39482,map__39482__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39484(cljs.core.rest(s__39485__$1)));
} else {
var G__39636 = cljs.core.rest(s__39485__$1);
s__39485__$1 = G__39636;
continue;
}
} else {
var G__39637 = cljs.core.rest(s__39485__$1);
s__39485__$1 = G__39637;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39492_39638 = cljs.core.seq(warnings);
var chunk__39493_39639 = null;
var count__39494_39640 = (0);
var i__39495_39641 = (0);
while(true){
if((i__39495_39641 < count__39494_39640)){
var map__39501_39642 = chunk__39493_39639.cljs$core$IIndexed$_nth$arity$2(null,i__39495_39641);
var map__39501_39643__$1 = (((((!((map__39501_39642 == null))))?(((((map__39501_39642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39501_39642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39501_39642):map__39501_39642);
var w_39644 = map__39501_39643__$1;
var msg_39645__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39501_39643__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39501_39643__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39501_39643__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39501_39643__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39648)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39646),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39647),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39645__$1)].join(''));


var G__39649 = seq__39492_39638;
var G__39650 = chunk__39493_39639;
var G__39651 = count__39494_39640;
var G__39652 = (i__39495_39641 + (1));
seq__39492_39638 = G__39649;
chunk__39493_39639 = G__39650;
count__39494_39640 = G__39651;
i__39495_39641 = G__39652;
continue;
} else {
var temp__5735__auto___39653 = cljs.core.seq(seq__39492_39638);
if(temp__5735__auto___39653){
var seq__39492_39654__$1 = temp__5735__auto___39653;
if(cljs.core.chunked_seq_QMARK_(seq__39492_39654__$1)){
var c__4556__auto___39655 = cljs.core.chunk_first(seq__39492_39654__$1);
var G__39656 = cljs.core.chunk_rest(seq__39492_39654__$1);
var G__39657 = c__4556__auto___39655;
var G__39658 = cljs.core.count(c__4556__auto___39655);
var G__39659 = (0);
seq__39492_39638 = G__39656;
chunk__39493_39639 = G__39657;
count__39494_39640 = G__39658;
i__39495_39641 = G__39659;
continue;
} else {
var map__39503_39660 = cljs.core.first(seq__39492_39654__$1);
var map__39503_39661__$1 = (((((!((map__39503_39660 == null))))?(((((map__39503_39660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39503_39660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39503_39660):map__39503_39660);
var w_39662 = map__39503_39661__$1;
var msg_39663__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39503_39661__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39503_39661__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39503_39661__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39503_39661__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39666)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39664),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39665),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39663__$1)].join(''));


var G__39667 = cljs.core.next(seq__39492_39654__$1);
var G__39668 = null;
var G__39669 = (0);
var G__39670 = (0);
seq__39492_39638 = G__39667;
chunk__39493_39639 = G__39668;
count__39494_39640 = G__39669;
i__39495_39641 = G__39670;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39480_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39480_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39505){
var map__39506 = p__39505;
var map__39506__$1 = (((((!((map__39506 == null))))?(((((map__39506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39506):map__39506);
var msg = map__39506__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39506__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39508 = cljs.core.seq(updates);
var chunk__39510 = null;
var count__39511 = (0);
var i__39512 = (0);
while(true){
if((i__39512 < count__39511)){
var path = chunk__39510.cljs$core$IIndexed$_nth$arity$2(null,i__39512);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39544_39671 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39548_39672 = null;
var count__39549_39673 = (0);
var i__39550_39674 = (0);
while(true){
if((i__39550_39674 < count__39549_39673)){
var node_39675 = chunk__39548_39672.cljs$core$IIndexed$_nth$arity$2(null,i__39550_39674);
if(cljs.core.not(node_39675.shadow$old)){
var path_match_39676 = shadow.cljs.devtools.client.browser.match_paths(node_39675.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39676)){
var new_link_39677 = (function (){var G__39556 = node_39675.cloneNode(true);
G__39556.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39676),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39556;
})();
(node_39675.shadow$old = true);

(new_link_39677.onload = ((function (seq__39544_39671,chunk__39548_39672,count__39549_39673,i__39550_39674,seq__39508,chunk__39510,count__39511,i__39512,new_link_39677,path_match_39676,node_39675,path,map__39506,map__39506__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39675);
});})(seq__39544_39671,chunk__39548_39672,count__39549_39673,i__39550_39674,seq__39508,chunk__39510,count__39511,i__39512,new_link_39677,path_match_39676,node_39675,path,map__39506,map__39506__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39676], 0));

goog.dom.insertSiblingAfter(new_link_39677,node_39675);


var G__39678 = seq__39544_39671;
var G__39679 = chunk__39548_39672;
var G__39680 = count__39549_39673;
var G__39681 = (i__39550_39674 + (1));
seq__39544_39671 = G__39678;
chunk__39548_39672 = G__39679;
count__39549_39673 = G__39680;
i__39550_39674 = G__39681;
continue;
} else {
var G__39682 = seq__39544_39671;
var G__39683 = chunk__39548_39672;
var G__39684 = count__39549_39673;
var G__39685 = (i__39550_39674 + (1));
seq__39544_39671 = G__39682;
chunk__39548_39672 = G__39683;
count__39549_39673 = G__39684;
i__39550_39674 = G__39685;
continue;
}
} else {
var G__39686 = seq__39544_39671;
var G__39687 = chunk__39548_39672;
var G__39688 = count__39549_39673;
var G__39689 = (i__39550_39674 + (1));
seq__39544_39671 = G__39686;
chunk__39548_39672 = G__39687;
count__39549_39673 = G__39688;
i__39550_39674 = G__39689;
continue;
}
} else {
var temp__5735__auto___39690 = cljs.core.seq(seq__39544_39671);
if(temp__5735__auto___39690){
var seq__39544_39691__$1 = temp__5735__auto___39690;
if(cljs.core.chunked_seq_QMARK_(seq__39544_39691__$1)){
var c__4556__auto___39692 = cljs.core.chunk_first(seq__39544_39691__$1);
var G__39693 = cljs.core.chunk_rest(seq__39544_39691__$1);
var G__39694 = c__4556__auto___39692;
var G__39695 = cljs.core.count(c__4556__auto___39692);
var G__39696 = (0);
seq__39544_39671 = G__39693;
chunk__39548_39672 = G__39694;
count__39549_39673 = G__39695;
i__39550_39674 = G__39696;
continue;
} else {
var node_39697 = cljs.core.first(seq__39544_39691__$1);
if(cljs.core.not(node_39697.shadow$old)){
var path_match_39698 = shadow.cljs.devtools.client.browser.match_paths(node_39697.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39698)){
var new_link_39699 = (function (){var G__39557 = node_39697.cloneNode(true);
G__39557.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39698),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39557;
})();
(node_39697.shadow$old = true);

(new_link_39699.onload = ((function (seq__39544_39671,chunk__39548_39672,count__39549_39673,i__39550_39674,seq__39508,chunk__39510,count__39511,i__39512,new_link_39699,path_match_39698,node_39697,seq__39544_39691__$1,temp__5735__auto___39690,path,map__39506,map__39506__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39697);
});})(seq__39544_39671,chunk__39548_39672,count__39549_39673,i__39550_39674,seq__39508,chunk__39510,count__39511,i__39512,new_link_39699,path_match_39698,node_39697,seq__39544_39691__$1,temp__5735__auto___39690,path,map__39506,map__39506__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39698], 0));

goog.dom.insertSiblingAfter(new_link_39699,node_39697);


var G__39700 = cljs.core.next(seq__39544_39691__$1);
var G__39701 = null;
var G__39702 = (0);
var G__39703 = (0);
seq__39544_39671 = G__39700;
chunk__39548_39672 = G__39701;
count__39549_39673 = G__39702;
i__39550_39674 = G__39703;
continue;
} else {
var G__39704 = cljs.core.next(seq__39544_39691__$1);
var G__39705 = null;
var G__39706 = (0);
var G__39707 = (0);
seq__39544_39671 = G__39704;
chunk__39548_39672 = G__39705;
count__39549_39673 = G__39706;
i__39550_39674 = G__39707;
continue;
}
} else {
var G__39708 = cljs.core.next(seq__39544_39691__$1);
var G__39709 = null;
var G__39710 = (0);
var G__39711 = (0);
seq__39544_39671 = G__39708;
chunk__39548_39672 = G__39709;
count__39549_39673 = G__39710;
i__39550_39674 = G__39711;
continue;
}
}
} else {
}
}
break;
}


var G__39712 = seq__39508;
var G__39713 = chunk__39510;
var G__39714 = count__39511;
var G__39715 = (i__39512 + (1));
seq__39508 = G__39712;
chunk__39510 = G__39713;
count__39511 = G__39714;
i__39512 = G__39715;
continue;
} else {
var G__39716 = seq__39508;
var G__39717 = chunk__39510;
var G__39718 = count__39511;
var G__39719 = (i__39512 + (1));
seq__39508 = G__39716;
chunk__39510 = G__39717;
count__39511 = G__39718;
i__39512 = G__39719;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39508);
if(temp__5735__auto__){
var seq__39508__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39508__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39508__$1);
var G__39720 = cljs.core.chunk_rest(seq__39508__$1);
var G__39721 = c__4556__auto__;
var G__39722 = cljs.core.count(c__4556__auto__);
var G__39723 = (0);
seq__39508 = G__39720;
chunk__39510 = G__39721;
count__39511 = G__39722;
i__39512 = G__39723;
continue;
} else {
var path = cljs.core.first(seq__39508__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39558_39724 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39562_39725 = null;
var count__39563_39726 = (0);
var i__39564_39727 = (0);
while(true){
if((i__39564_39727 < count__39563_39726)){
var node_39728 = chunk__39562_39725.cljs$core$IIndexed$_nth$arity$2(null,i__39564_39727);
if(cljs.core.not(node_39728.shadow$old)){
var path_match_39729 = shadow.cljs.devtools.client.browser.match_paths(node_39728.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39729)){
var new_link_39730 = (function (){var G__39570 = node_39728.cloneNode(true);
G__39570.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39729),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39570;
})();
(node_39728.shadow$old = true);

(new_link_39730.onload = ((function (seq__39558_39724,chunk__39562_39725,count__39563_39726,i__39564_39727,seq__39508,chunk__39510,count__39511,i__39512,new_link_39730,path_match_39729,node_39728,path,seq__39508__$1,temp__5735__auto__,map__39506,map__39506__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39728);
});})(seq__39558_39724,chunk__39562_39725,count__39563_39726,i__39564_39727,seq__39508,chunk__39510,count__39511,i__39512,new_link_39730,path_match_39729,node_39728,path,seq__39508__$1,temp__5735__auto__,map__39506,map__39506__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39729], 0));

goog.dom.insertSiblingAfter(new_link_39730,node_39728);


var G__39731 = seq__39558_39724;
var G__39732 = chunk__39562_39725;
var G__39733 = count__39563_39726;
var G__39734 = (i__39564_39727 + (1));
seq__39558_39724 = G__39731;
chunk__39562_39725 = G__39732;
count__39563_39726 = G__39733;
i__39564_39727 = G__39734;
continue;
} else {
var G__39735 = seq__39558_39724;
var G__39736 = chunk__39562_39725;
var G__39737 = count__39563_39726;
var G__39738 = (i__39564_39727 + (1));
seq__39558_39724 = G__39735;
chunk__39562_39725 = G__39736;
count__39563_39726 = G__39737;
i__39564_39727 = G__39738;
continue;
}
} else {
var G__39739 = seq__39558_39724;
var G__39740 = chunk__39562_39725;
var G__39741 = count__39563_39726;
var G__39742 = (i__39564_39727 + (1));
seq__39558_39724 = G__39739;
chunk__39562_39725 = G__39740;
count__39563_39726 = G__39741;
i__39564_39727 = G__39742;
continue;
}
} else {
var temp__5735__auto___39743__$1 = cljs.core.seq(seq__39558_39724);
if(temp__5735__auto___39743__$1){
var seq__39558_39744__$1 = temp__5735__auto___39743__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39558_39744__$1)){
var c__4556__auto___39745 = cljs.core.chunk_first(seq__39558_39744__$1);
var G__39746 = cljs.core.chunk_rest(seq__39558_39744__$1);
var G__39747 = c__4556__auto___39745;
var G__39748 = cljs.core.count(c__4556__auto___39745);
var G__39749 = (0);
seq__39558_39724 = G__39746;
chunk__39562_39725 = G__39747;
count__39563_39726 = G__39748;
i__39564_39727 = G__39749;
continue;
} else {
var node_39750 = cljs.core.first(seq__39558_39744__$1);
if(cljs.core.not(node_39750.shadow$old)){
var path_match_39751 = shadow.cljs.devtools.client.browser.match_paths(node_39750.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39751)){
var new_link_39752 = (function (){var G__39571 = node_39750.cloneNode(true);
G__39571.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39751),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39571;
})();
(node_39750.shadow$old = true);

(new_link_39752.onload = ((function (seq__39558_39724,chunk__39562_39725,count__39563_39726,i__39564_39727,seq__39508,chunk__39510,count__39511,i__39512,new_link_39752,path_match_39751,node_39750,seq__39558_39744__$1,temp__5735__auto___39743__$1,path,seq__39508__$1,temp__5735__auto__,map__39506,map__39506__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39750);
});})(seq__39558_39724,chunk__39562_39725,count__39563_39726,i__39564_39727,seq__39508,chunk__39510,count__39511,i__39512,new_link_39752,path_match_39751,node_39750,seq__39558_39744__$1,temp__5735__auto___39743__$1,path,seq__39508__$1,temp__5735__auto__,map__39506,map__39506__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39751], 0));

goog.dom.insertSiblingAfter(new_link_39752,node_39750);


var G__39753 = cljs.core.next(seq__39558_39744__$1);
var G__39754 = null;
var G__39755 = (0);
var G__39756 = (0);
seq__39558_39724 = G__39753;
chunk__39562_39725 = G__39754;
count__39563_39726 = G__39755;
i__39564_39727 = G__39756;
continue;
} else {
var G__39757 = cljs.core.next(seq__39558_39744__$1);
var G__39758 = null;
var G__39759 = (0);
var G__39760 = (0);
seq__39558_39724 = G__39757;
chunk__39562_39725 = G__39758;
count__39563_39726 = G__39759;
i__39564_39727 = G__39760;
continue;
}
} else {
var G__39761 = cljs.core.next(seq__39558_39744__$1);
var G__39762 = null;
var G__39763 = (0);
var G__39764 = (0);
seq__39558_39724 = G__39761;
chunk__39562_39725 = G__39762;
count__39563_39726 = G__39763;
i__39564_39727 = G__39764;
continue;
}
}
} else {
}
}
break;
}


var G__39765 = cljs.core.next(seq__39508__$1);
var G__39766 = null;
var G__39767 = (0);
var G__39768 = (0);
seq__39508 = G__39765;
chunk__39510 = G__39766;
count__39511 = G__39767;
i__39512 = G__39768;
continue;
} else {
var G__39769 = cljs.core.next(seq__39508__$1);
var G__39770 = null;
var G__39771 = (0);
var G__39772 = (0);
seq__39508 = G__39769;
chunk__39510 = G__39770;
count__39511 = G__39771;
i__39512 = G__39772;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39572){
var map__39573 = p__39572;
var map__39573__$1 = (((((!((map__39573 == null))))?(((((map__39573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39573):map__39573);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39573__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39575){
var map__39576 = p__39575;
var map__39576__$1 = (((((!((map__39576 == null))))?(((((map__39576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39576):map__39576);
var _ = map__39576__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39576__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39578,done,error){
var map__39579 = p__39578;
var map__39579__$1 = (((((!((map__39579 == null))))?(((((map__39579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39579):map__39579);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39579__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39581,done,error){
var map__39582 = p__39581;
var map__39582__$1 = (((((!((map__39582 == null))))?(((((map__39582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39582):map__39582);
var msg = map__39582__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39582__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39582__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39582__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39584){
var map__39585 = p__39584;
var map__39585__$1 = (((((!((map__39585 == null))))?(((((map__39585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39585):map__39585);
var src = map__39585__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39585__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39587 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39587) : done.call(null,G__39587));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39588){
var map__39589 = p__39588;
var map__39589__$1 = (((((!((map__39589 == null))))?(((((map__39589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39589):map__39589);
var msg__$1 = map__39589__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39589__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39591){var ex = e39591;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39592){
var map__39593 = p__39592;
var map__39593__$1 = (((((!((map__39593 == null))))?(((((map__39593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39593):map__39593);
var env = map__39593__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39593__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__39595){
var map__39596 = p__39595;
var map__39596__$1 = (((((!((map__39596 == null))))?(((((map__39596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39596):map__39596);
var msg = map__39596__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39596__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39598){
var map__39599 = p__39598;
var map__39599__$1 = (((((!((map__39599 == null))))?(((((map__39599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39599):map__39599);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39599__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39599__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39601){
var map__39602 = p__39601;
var map__39602__$1 = (((((!((map__39602 == null))))?(((((map__39602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39602):map__39602);
var svc = map__39602__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39602__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

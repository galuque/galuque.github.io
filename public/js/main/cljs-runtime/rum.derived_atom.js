goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__30584 = arguments.length;
switch (G__30584) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__30588 = opts;
var map__30588__$1 = (((((!((map__30588 == null))))?(((((map__30588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30588):map__30588);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30588__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30588__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__30590 = cljs.core.count(refs);
switch (G__30590) {
case (1):
var vec__30591 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30591,(0),null);
return (function (){
var G__30594 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30594) : f.call(null,G__30594));
});

break;
case (2):
var vec__30595 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30595,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30595,(1),null);
return (function (){
var G__30598 = cljs.core.deref(a);
var G__30599 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30598,G__30599) : f.call(null,G__30598,G__30599));
});

break;
case (3):
var vec__30600 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(2),null);
return (function (){
var G__30603 = cljs.core.deref(a);
var G__30604 = cljs.core.deref(b);
var G__30605 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30603,G__30604,G__30605) : f.call(null,G__30603,G__30604,G__30605));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__30606 = ref;
cljs.core.reset_BANG_(G__30606,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__30606;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__30607_30630 = cljs.core.seq(refs);
var chunk__30608_30631 = null;
var count__30609_30632 = (0);
var i__30610_30633 = (0);
while(true){
if((i__30610_30633 < count__30609_30632)){
var ref_30635__$1 = chunk__30608_30631.cljs$core$IIndexed$_nth$arity$2(null,i__30610_30633);
cljs.core.add_watch(ref_30635__$1,key,watch);


var G__30636 = seq__30607_30630;
var G__30637 = chunk__30608_30631;
var G__30638 = count__30609_30632;
var G__30639 = (i__30610_30633 + (1));
seq__30607_30630 = G__30636;
chunk__30608_30631 = G__30637;
count__30609_30632 = G__30638;
i__30610_30633 = G__30639;
continue;
} else {
var temp__5735__auto___30640 = cljs.core.seq(seq__30607_30630);
if(temp__5735__auto___30640){
var seq__30607_30641__$1 = temp__5735__auto___30640;
if(cljs.core.chunked_seq_QMARK_(seq__30607_30641__$1)){
var c__4556__auto___30642 = cljs.core.chunk_first(seq__30607_30641__$1);
var G__30644 = cljs.core.chunk_rest(seq__30607_30641__$1);
var G__30645 = c__4556__auto___30642;
var G__30646 = cljs.core.count(c__4556__auto___30642);
var G__30647 = (0);
seq__30607_30630 = G__30644;
chunk__30608_30631 = G__30645;
count__30609_30632 = G__30646;
i__30610_30633 = G__30647;
continue;
} else {
var ref_30652__$1 = cljs.core.first(seq__30607_30641__$1);
cljs.core.add_watch(ref_30652__$1,key,watch);


var G__30653 = cljs.core.next(seq__30607_30641__$1);
var G__30654 = null;
var G__30655 = (0);
var G__30656 = (0);
seq__30607_30630 = G__30653;
chunk__30608_30631 = G__30654;
count__30609_30632 = G__30655;
i__30610_30633 = G__30656;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=rum.derived_atom.js.map

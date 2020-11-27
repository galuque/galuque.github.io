goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40572){
var map__40573 = p__40572;
var map__40573__$1 = (((((!((map__40573 == null))))?(((((map__40573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40573):map__40573);
var m = map__40573__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40573__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40573__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40575_40788 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40576_40789 = null;
var count__40577_40790 = (0);
var i__40578_40791 = (0);
while(true){
if((i__40578_40791 < count__40577_40790)){
var f_40793 = chunk__40576_40789.cljs$core$IIndexed$_nth$arity$2(null,i__40578_40791);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40793], 0));


var G__40794 = seq__40575_40788;
var G__40795 = chunk__40576_40789;
var G__40796 = count__40577_40790;
var G__40797 = (i__40578_40791 + (1));
seq__40575_40788 = G__40794;
chunk__40576_40789 = G__40795;
count__40577_40790 = G__40796;
i__40578_40791 = G__40797;
continue;
} else {
var temp__5735__auto___40798 = cljs.core.seq(seq__40575_40788);
if(temp__5735__auto___40798){
var seq__40575_40799__$1 = temp__5735__auto___40798;
if(cljs.core.chunked_seq_QMARK_(seq__40575_40799__$1)){
var c__4556__auto___40800 = cljs.core.chunk_first(seq__40575_40799__$1);
var G__40801 = cljs.core.chunk_rest(seq__40575_40799__$1);
var G__40802 = c__4556__auto___40800;
var G__40803 = cljs.core.count(c__4556__auto___40800);
var G__40804 = (0);
seq__40575_40788 = G__40801;
chunk__40576_40789 = G__40802;
count__40577_40790 = G__40803;
i__40578_40791 = G__40804;
continue;
} else {
var f_40805 = cljs.core.first(seq__40575_40799__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40805], 0));


var G__40806 = cljs.core.next(seq__40575_40799__$1);
var G__40807 = null;
var G__40808 = (0);
var G__40809 = (0);
seq__40575_40788 = G__40806;
chunk__40576_40789 = G__40807;
count__40577_40790 = G__40808;
i__40578_40791 = G__40809;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40810 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40810], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40810)))?cljs.core.second(arglists_40810):arglists_40810)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40583_40811 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40584_40812 = null;
var count__40585_40813 = (0);
var i__40586_40814 = (0);
while(true){
if((i__40586_40814 < count__40585_40813)){
var vec__40600_40815 = chunk__40584_40812.cljs$core$IIndexed$_nth$arity$2(null,i__40586_40814);
var name_40816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40600_40815,(0),null);
var map__40603_40817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40600_40815,(1),null);
var map__40603_40818__$1 = (((((!((map__40603_40817 == null))))?(((((map__40603_40817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40603_40817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40603_40817):map__40603_40817);
var doc_40819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40603_40818__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40603_40818__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40816], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40820], 0));

if(cljs.core.truth_(doc_40819)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40819], 0));
} else {
}


var G__40821 = seq__40583_40811;
var G__40822 = chunk__40584_40812;
var G__40823 = count__40585_40813;
var G__40824 = (i__40586_40814 + (1));
seq__40583_40811 = G__40821;
chunk__40584_40812 = G__40822;
count__40585_40813 = G__40823;
i__40586_40814 = G__40824;
continue;
} else {
var temp__5735__auto___40825 = cljs.core.seq(seq__40583_40811);
if(temp__5735__auto___40825){
var seq__40583_40826__$1 = temp__5735__auto___40825;
if(cljs.core.chunked_seq_QMARK_(seq__40583_40826__$1)){
var c__4556__auto___40827 = cljs.core.chunk_first(seq__40583_40826__$1);
var G__40828 = cljs.core.chunk_rest(seq__40583_40826__$1);
var G__40829 = c__4556__auto___40827;
var G__40830 = cljs.core.count(c__4556__auto___40827);
var G__40831 = (0);
seq__40583_40811 = G__40828;
chunk__40584_40812 = G__40829;
count__40585_40813 = G__40830;
i__40586_40814 = G__40831;
continue;
} else {
var vec__40605_40832 = cljs.core.first(seq__40583_40826__$1);
var name_40833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40605_40832,(0),null);
var map__40608_40834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40605_40832,(1),null);
var map__40608_40835__$1 = (((((!((map__40608_40834 == null))))?(((((map__40608_40834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40608_40834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40608_40834):map__40608_40834);
var doc_40836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40608_40835__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40608_40835__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40833], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40837], 0));

if(cljs.core.truth_(doc_40836)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40836], 0));
} else {
}


var G__40838 = cljs.core.next(seq__40583_40826__$1);
var G__40839 = null;
var G__40840 = (0);
var G__40841 = (0);
seq__40583_40811 = G__40838;
chunk__40584_40812 = G__40839;
count__40585_40813 = G__40840;
i__40586_40814 = G__40841;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40612 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40613 = null;
var count__40614 = (0);
var i__40615 = (0);
while(true){
if((i__40615 < count__40614)){
var role = chunk__40613.cljs$core$IIndexed$_nth$arity$2(null,i__40615);
var temp__5735__auto___40842__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40842__$1)){
var spec_40843 = temp__5735__auto___40842__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40843)], 0));
} else {
}


var G__40844 = seq__40612;
var G__40845 = chunk__40613;
var G__40846 = count__40614;
var G__40847 = (i__40615 + (1));
seq__40612 = G__40844;
chunk__40613 = G__40845;
count__40614 = G__40846;
i__40615 = G__40847;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__40612);
if(temp__5735__auto____$1){
var seq__40612__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40612__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40612__$1);
var G__40848 = cljs.core.chunk_rest(seq__40612__$1);
var G__40849 = c__4556__auto__;
var G__40850 = cljs.core.count(c__4556__auto__);
var G__40851 = (0);
seq__40612 = G__40848;
chunk__40613 = G__40849;
count__40614 = G__40850;
i__40615 = G__40851;
continue;
} else {
var role = cljs.core.first(seq__40612__$1);
var temp__5735__auto___40854__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40854__$2)){
var spec_40857 = temp__5735__auto___40854__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40857)], 0));
} else {
}


var G__40858 = cljs.core.next(seq__40612__$1);
var G__40859 = null;
var G__40860 = (0);
var G__40861 = (0);
seq__40612 = G__40858;
chunk__40613 = G__40859;
count__40614 = G__40860;
i__40615 = G__40861;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40866 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40867 = cljs.core.ex_cause(t);
via = G__40866;
t = G__40867;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40621 = datafied_throwable;
var map__40621__$1 = (((((!((map__40621 == null))))?(((((map__40621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40621):map__40621);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40621__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40621__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40621__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40622 = cljs.core.last(via);
var map__40622__$1 = (((((!((map__40622 == null))))?(((((map__40622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40622):map__40622);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40622__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40622__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40622__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40623 = data;
var map__40623__$1 = (((((!((map__40623 == null))))?(((((map__40623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40623):map__40623);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40623__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40623__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40623__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40624 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40624__$1 = (((((!((map__40624 == null))))?(((((map__40624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40624):map__40624);
var top_data = map__40624__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40624__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40650 = phase;
var G__40650__$1 = (((G__40650 instanceof cljs.core.Keyword))?G__40650.fqn:null);
switch (G__40650__$1) {
case "read-source":
var map__40654 = data;
var map__40654__$1 = (((((!((map__40654 == null))))?(((((map__40654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40654):map__40654);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40654__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40654__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40656 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40656__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40656,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40656);
var G__40656__$2 = (cljs.core.truth_((function (){var fexpr__40661 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40661.cljs$core$IFn$_invoke$arity$1 ? fexpr__40661.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40661.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40656__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40656__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40656__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40656__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40669 = top_data;
var G__40669__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40669,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40669);
var G__40669__$2 = (cljs.core.truth_((function (){var fexpr__40673 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40673.cljs$core$IFn$_invoke$arity$1 ? fexpr__40673.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40673.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40669__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40669__$1);
var G__40669__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40669__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40669__$2);
var G__40669__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40669__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40669__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40669__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40669__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40678 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40678,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40678,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40678,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40678,(3),null);
var G__40685 = top_data;
var G__40685__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40685,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40685);
var G__40685__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40685__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40685__$1);
var G__40685__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40685__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40685__$2);
var G__40685__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40685__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40685__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40685__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40685__$4;
}

break;
case "execution":
var vec__40702 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40702,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40702,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40702,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40702,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40620_SHARP_){
var or__4126__auto__ = (p1__40620_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__40706 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40706.cljs$core$IFn$_invoke$arity$1 ? fexpr__40706.cljs$core$IFn$_invoke$arity$1(p1__40620_SHARP_) : fexpr__40706.call(null,p1__40620_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__40714 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40714__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40714,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40714);
var G__40714__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40714__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40714__$1);
var G__40714__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40714__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40714__$2);
var G__40714__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40714__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40714__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40714__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40714__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40650__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40739){
var map__40740 = p__40739;
var map__40740__$1 = (((((!((map__40740 == null))))?(((((map__40740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40740):map__40740);
var triage_data = map__40740__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40740__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40740__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40740__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40740__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40740__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40740__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40740__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40740__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40747 = phase;
var G__40747__$1 = (((G__40747 instanceof cljs.core.Keyword))?G__40747.fqn:null);
switch (G__40747__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40748 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40749 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40750 = loc;
var G__40751 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40752_40871 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40753_40872 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40754_40873 = true;
var _STAR_print_fn_STAR__temp_val__40755_40874 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40754_40873);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40755_40874);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40737_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40737_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40753_40872);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40752_40871);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40748,G__40749,G__40750,G__40751) : format.call(null,G__40748,G__40749,G__40750,G__40751));

break;
case "macroexpansion":
var G__40757 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40758 = cause_type;
var G__40759 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40760 = loc;
var G__40761 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40757,G__40758,G__40759,G__40760,G__40761) : format.call(null,G__40757,G__40758,G__40759,G__40760,G__40761));

break;
case "compile-syntax-check":
var G__40762 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40763 = cause_type;
var G__40764 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40765 = loc;
var G__40766 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40762,G__40763,G__40764,G__40765,G__40766) : format.call(null,G__40762,G__40763,G__40764,G__40765,G__40766));

break;
case "compilation":
var G__40767 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40768 = cause_type;
var G__40769 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40770 = loc;
var G__40771 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40767,G__40768,G__40769,G__40770,G__40771) : format.call(null,G__40767,G__40768,G__40769,G__40770,G__40771));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40772 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40773 = symbol;
var G__40774 = loc;
var G__40775 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40776_40876 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40777_40877 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40778_40878 = true;
var _STAR_print_fn_STAR__temp_val__40779_40879 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40778_40878);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40779_40879);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40738_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40738_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40777_40877);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40776_40876);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40772,G__40773,G__40774,G__40775) : format.call(null,G__40772,G__40773,G__40774,G__40775));
} else {
var G__40781 = "Execution error%s at %s(%s).\n%s\n";
var G__40782 = cause_type;
var G__40783 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40784 = loc;
var G__40785 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40781,G__40782,G__40783,G__40784,G__40785) : format.call(null,G__40781,G__40782,G__40783,G__40784,G__40785));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40747__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

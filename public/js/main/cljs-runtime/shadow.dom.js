goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37491 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37491(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37494 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37494(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36748 = coll;
var G__36749 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36748,G__36749) : shadow.dom.lazy_native_coll_seq.call(null,G__36748,G__36749));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36762 = arguments.length;
switch (G__36762) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36764 = arguments.length;
switch (G__36764) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36778 = arguments.length;
switch (G__36778) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36792 = arguments.length;
switch (G__36792) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36800 = arguments.length;
switch (G__36800) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36829 = arguments.length;
switch (G__36829) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36833){if((e36833 instanceof Object)){
var e = e36833;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36833;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36850 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36851 = null;
var count__36852 = (0);
var i__36853 = (0);
while(true){
if((i__36853 < count__36852)){
var el = chunk__36851.cljs$core$IIndexed$_nth$arity$2(null,i__36853);
var handler_37507__$1 = ((function (seq__36850,chunk__36851,count__36852,i__36853,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36850,chunk__36851,count__36852,i__36853,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37507__$1);


var G__37509 = seq__36850;
var G__37510 = chunk__36851;
var G__37511 = count__36852;
var G__37512 = (i__36853 + (1));
seq__36850 = G__37509;
chunk__36851 = G__37510;
count__36852 = G__37511;
i__36853 = G__37512;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36850);
if(temp__5735__auto__){
var seq__36850__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36850__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36850__$1);
var G__37514 = cljs.core.chunk_rest(seq__36850__$1);
var G__37515 = c__4556__auto__;
var G__37516 = cljs.core.count(c__4556__auto__);
var G__37517 = (0);
seq__36850 = G__37514;
chunk__36851 = G__37515;
count__36852 = G__37516;
i__36853 = G__37517;
continue;
} else {
var el = cljs.core.first(seq__36850__$1);
var handler_37518__$1 = ((function (seq__36850,chunk__36851,count__36852,i__36853,el,seq__36850__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36850,chunk__36851,count__36852,i__36853,el,seq__36850__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37518__$1);


var G__37520 = cljs.core.next(seq__36850__$1);
var G__37521 = null;
var G__37522 = (0);
var G__37523 = (0);
seq__36850 = G__37520;
chunk__36851 = G__37521;
count__36852 = G__37522;
i__36853 = G__37523;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36865 = arguments.length;
switch (G__36865) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36869 = cljs.core.seq(events);
var chunk__36870 = null;
var count__36871 = (0);
var i__36872 = (0);
while(true){
if((i__36872 < count__36871)){
var vec__36883 = chunk__36870.cljs$core$IIndexed$_nth$arity$2(null,i__36872);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36883,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36883,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37526 = seq__36869;
var G__37527 = chunk__36870;
var G__37528 = count__36871;
var G__37529 = (i__36872 + (1));
seq__36869 = G__37526;
chunk__36870 = G__37527;
count__36871 = G__37528;
i__36872 = G__37529;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36869);
if(temp__5735__auto__){
var seq__36869__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36869__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36869__$1);
var G__37530 = cljs.core.chunk_rest(seq__36869__$1);
var G__37531 = c__4556__auto__;
var G__37532 = cljs.core.count(c__4556__auto__);
var G__37533 = (0);
seq__36869 = G__37530;
chunk__36870 = G__37531;
count__36871 = G__37532;
i__36872 = G__37533;
continue;
} else {
var vec__36890 = cljs.core.first(seq__36869__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36890,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36890,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37534 = cljs.core.next(seq__36869__$1);
var G__37535 = null;
var G__37536 = (0);
var G__37537 = (0);
seq__36869 = G__37534;
chunk__36870 = G__37535;
count__36871 = G__37536;
i__36872 = G__37537;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36893 = cljs.core.seq(styles);
var chunk__36894 = null;
var count__36895 = (0);
var i__36896 = (0);
while(true){
if((i__36896 < count__36895)){
var vec__36912 = chunk__36894.cljs$core$IIndexed$_nth$arity$2(null,i__36896);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36912,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36912,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37538 = seq__36893;
var G__37539 = chunk__36894;
var G__37540 = count__36895;
var G__37541 = (i__36896 + (1));
seq__36893 = G__37538;
chunk__36894 = G__37539;
count__36895 = G__37540;
i__36896 = G__37541;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36893);
if(temp__5735__auto__){
var seq__36893__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36893__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36893__$1);
var G__37543 = cljs.core.chunk_rest(seq__36893__$1);
var G__37544 = c__4556__auto__;
var G__37545 = cljs.core.count(c__4556__auto__);
var G__37546 = (0);
seq__36893 = G__37543;
chunk__36894 = G__37544;
count__36895 = G__37545;
i__36896 = G__37546;
continue;
} else {
var vec__36915 = cljs.core.first(seq__36893__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36915,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36915,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37548 = cljs.core.next(seq__36893__$1);
var G__37549 = null;
var G__37550 = (0);
var G__37551 = (0);
seq__36893 = G__37548;
chunk__36894 = G__37549;
count__36895 = G__37550;
i__36896 = G__37551;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36928_37552 = key;
var G__36928_37553__$1 = (((G__36928_37552 instanceof cljs.core.Keyword))?G__36928_37552.fqn:null);
switch (G__36928_37553__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37558 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_37558,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_37558,"aria-");
}
})())){
el.setAttribute(ks_37558,value);
} else {
(el[ks_37558] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36990){
var map__36991 = p__36990;
var map__36991__$1 = (((((!((map__36991 == null))))?(((((map__36991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36991):map__36991);
var props = map__36991__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36991__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36993 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36993,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36993,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36993,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36996 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36996,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36996;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37007 = arguments.length;
switch (G__37007) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37010){
var vec__37015 = p__37010;
var seq__37016 = cljs.core.seq(vec__37015);
var first__37017 = cljs.core.first(seq__37016);
var seq__37016__$1 = cljs.core.next(seq__37016);
var nn = first__37017;
var first__37017__$1 = cljs.core.first(seq__37016__$1);
var seq__37016__$2 = cljs.core.next(seq__37016__$1);
var np = first__37017__$1;
var nc = seq__37016__$2;
var node = vec__37015;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37020 = nn;
var G__37021 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37020,G__37021) : create_fn.call(null,G__37020,G__37021));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37022 = nn;
var G__37023 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37022,G__37023) : create_fn.call(null,G__37022,G__37023));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37029 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37029,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37029,(1),null);
var seq__37032_37577 = cljs.core.seq(node_children);
var chunk__37033_37578 = null;
var count__37034_37579 = (0);
var i__37035_37580 = (0);
while(true){
if((i__37035_37580 < count__37034_37579)){
var child_struct_37582 = chunk__37033_37578.cljs$core$IIndexed$_nth$arity$2(null,i__37035_37580);
var children_37583 = shadow.dom.dom_node(child_struct_37582);
if(cljs.core.seq_QMARK_(children_37583)){
var seq__37065_37584 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37583));
var chunk__37067_37585 = null;
var count__37068_37586 = (0);
var i__37069_37587 = (0);
while(true){
if((i__37069_37587 < count__37068_37586)){
var child_37588 = chunk__37067_37585.cljs$core$IIndexed$_nth$arity$2(null,i__37069_37587);
if(cljs.core.truth_(child_37588)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37588);


var G__37589 = seq__37065_37584;
var G__37590 = chunk__37067_37585;
var G__37591 = count__37068_37586;
var G__37592 = (i__37069_37587 + (1));
seq__37065_37584 = G__37589;
chunk__37067_37585 = G__37590;
count__37068_37586 = G__37591;
i__37069_37587 = G__37592;
continue;
} else {
var G__37594 = seq__37065_37584;
var G__37595 = chunk__37067_37585;
var G__37596 = count__37068_37586;
var G__37597 = (i__37069_37587 + (1));
seq__37065_37584 = G__37594;
chunk__37067_37585 = G__37595;
count__37068_37586 = G__37596;
i__37069_37587 = G__37597;
continue;
}
} else {
var temp__5735__auto___37598 = cljs.core.seq(seq__37065_37584);
if(temp__5735__auto___37598){
var seq__37065_37599__$1 = temp__5735__auto___37598;
if(cljs.core.chunked_seq_QMARK_(seq__37065_37599__$1)){
var c__4556__auto___37600 = cljs.core.chunk_first(seq__37065_37599__$1);
var G__37601 = cljs.core.chunk_rest(seq__37065_37599__$1);
var G__37602 = c__4556__auto___37600;
var G__37603 = cljs.core.count(c__4556__auto___37600);
var G__37604 = (0);
seq__37065_37584 = G__37601;
chunk__37067_37585 = G__37602;
count__37068_37586 = G__37603;
i__37069_37587 = G__37604;
continue;
} else {
var child_37625 = cljs.core.first(seq__37065_37599__$1);
if(cljs.core.truth_(child_37625)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37625);


var G__37626 = cljs.core.next(seq__37065_37599__$1);
var G__37627 = null;
var G__37628 = (0);
var G__37629 = (0);
seq__37065_37584 = G__37626;
chunk__37067_37585 = G__37627;
count__37068_37586 = G__37628;
i__37069_37587 = G__37629;
continue;
} else {
var G__37630 = cljs.core.next(seq__37065_37599__$1);
var G__37631 = null;
var G__37632 = (0);
var G__37633 = (0);
seq__37065_37584 = G__37630;
chunk__37067_37585 = G__37631;
count__37068_37586 = G__37632;
i__37069_37587 = G__37633;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37583);
}


var G__37634 = seq__37032_37577;
var G__37635 = chunk__37033_37578;
var G__37636 = count__37034_37579;
var G__37637 = (i__37035_37580 + (1));
seq__37032_37577 = G__37634;
chunk__37033_37578 = G__37635;
count__37034_37579 = G__37636;
i__37035_37580 = G__37637;
continue;
} else {
var temp__5735__auto___37638 = cljs.core.seq(seq__37032_37577);
if(temp__5735__auto___37638){
var seq__37032_37639__$1 = temp__5735__auto___37638;
if(cljs.core.chunked_seq_QMARK_(seq__37032_37639__$1)){
var c__4556__auto___37640 = cljs.core.chunk_first(seq__37032_37639__$1);
var G__37641 = cljs.core.chunk_rest(seq__37032_37639__$1);
var G__37642 = c__4556__auto___37640;
var G__37643 = cljs.core.count(c__4556__auto___37640);
var G__37644 = (0);
seq__37032_37577 = G__37641;
chunk__37033_37578 = G__37642;
count__37034_37579 = G__37643;
i__37035_37580 = G__37644;
continue;
} else {
var child_struct_37651 = cljs.core.first(seq__37032_37639__$1);
var children_37652 = shadow.dom.dom_node(child_struct_37651);
if(cljs.core.seq_QMARK_(children_37652)){
var seq__37077_37653 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37652));
var chunk__37079_37654 = null;
var count__37080_37655 = (0);
var i__37081_37656 = (0);
while(true){
if((i__37081_37656 < count__37080_37655)){
var child_37657 = chunk__37079_37654.cljs$core$IIndexed$_nth$arity$2(null,i__37081_37656);
if(cljs.core.truth_(child_37657)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37657);


var G__37658 = seq__37077_37653;
var G__37659 = chunk__37079_37654;
var G__37660 = count__37080_37655;
var G__37661 = (i__37081_37656 + (1));
seq__37077_37653 = G__37658;
chunk__37079_37654 = G__37659;
count__37080_37655 = G__37660;
i__37081_37656 = G__37661;
continue;
} else {
var G__37662 = seq__37077_37653;
var G__37663 = chunk__37079_37654;
var G__37664 = count__37080_37655;
var G__37665 = (i__37081_37656 + (1));
seq__37077_37653 = G__37662;
chunk__37079_37654 = G__37663;
count__37080_37655 = G__37664;
i__37081_37656 = G__37665;
continue;
}
} else {
var temp__5735__auto___37666__$1 = cljs.core.seq(seq__37077_37653);
if(temp__5735__auto___37666__$1){
var seq__37077_37667__$1 = temp__5735__auto___37666__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37077_37667__$1)){
var c__4556__auto___37668 = cljs.core.chunk_first(seq__37077_37667__$1);
var G__37669 = cljs.core.chunk_rest(seq__37077_37667__$1);
var G__37670 = c__4556__auto___37668;
var G__37671 = cljs.core.count(c__4556__auto___37668);
var G__37672 = (0);
seq__37077_37653 = G__37669;
chunk__37079_37654 = G__37670;
count__37080_37655 = G__37671;
i__37081_37656 = G__37672;
continue;
} else {
var child_37673 = cljs.core.first(seq__37077_37667__$1);
if(cljs.core.truth_(child_37673)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37673);


var G__37678 = cljs.core.next(seq__37077_37667__$1);
var G__37679 = null;
var G__37680 = (0);
var G__37681 = (0);
seq__37077_37653 = G__37678;
chunk__37079_37654 = G__37679;
count__37080_37655 = G__37680;
i__37081_37656 = G__37681;
continue;
} else {
var G__37682 = cljs.core.next(seq__37077_37667__$1);
var G__37683 = null;
var G__37684 = (0);
var G__37685 = (0);
seq__37077_37653 = G__37682;
chunk__37079_37654 = G__37683;
count__37080_37655 = G__37684;
i__37081_37656 = G__37685;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37652);
}


var G__37686 = cljs.core.next(seq__37032_37639__$1);
var G__37687 = null;
var G__37688 = (0);
var G__37689 = (0);
seq__37032_37577 = G__37686;
chunk__37033_37578 = G__37687;
count__37034_37579 = G__37688;
i__37035_37580 = G__37689;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37102 = cljs.core.seq(node);
var chunk__37103 = null;
var count__37104 = (0);
var i__37105 = (0);
while(true){
if((i__37105 < count__37104)){
var n = chunk__37103.cljs$core$IIndexed$_nth$arity$2(null,i__37105);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37690 = seq__37102;
var G__37691 = chunk__37103;
var G__37692 = count__37104;
var G__37693 = (i__37105 + (1));
seq__37102 = G__37690;
chunk__37103 = G__37691;
count__37104 = G__37692;
i__37105 = G__37693;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37102);
if(temp__5735__auto__){
var seq__37102__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37102__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37102__$1);
var G__37694 = cljs.core.chunk_rest(seq__37102__$1);
var G__37695 = c__4556__auto__;
var G__37696 = cljs.core.count(c__4556__auto__);
var G__37697 = (0);
seq__37102 = G__37694;
chunk__37103 = G__37695;
count__37104 = G__37696;
i__37105 = G__37697;
continue;
} else {
var n = cljs.core.first(seq__37102__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37702 = cljs.core.next(seq__37102__$1);
var G__37703 = null;
var G__37704 = (0);
var G__37705 = (0);
seq__37102 = G__37702;
chunk__37103 = G__37703;
count__37104 = G__37704;
i__37105 = G__37705;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37117 = arguments.length;
switch (G__37117) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37123 = arguments.length;
switch (G__37123) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37137 = arguments.length;
switch (G__37137) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37717 = arguments.length;
var i__4737__auto___37718 = (0);
while(true){
if((i__4737__auto___37718 < len__4736__auto___37717)){
args__4742__auto__.push((arguments[i__4737__auto___37718]));

var G__37719 = (i__4737__auto___37718 + (1));
i__4737__auto___37718 = G__37719;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37161_37720 = cljs.core.seq(nodes);
var chunk__37162_37721 = null;
var count__37163_37722 = (0);
var i__37164_37723 = (0);
while(true){
if((i__37164_37723 < count__37163_37722)){
var node_37724 = chunk__37162_37721.cljs$core$IIndexed$_nth$arity$2(null,i__37164_37723);
fragment.appendChild(shadow.dom._to_dom(node_37724));


var G__37725 = seq__37161_37720;
var G__37726 = chunk__37162_37721;
var G__37727 = count__37163_37722;
var G__37728 = (i__37164_37723 + (1));
seq__37161_37720 = G__37725;
chunk__37162_37721 = G__37726;
count__37163_37722 = G__37727;
i__37164_37723 = G__37728;
continue;
} else {
var temp__5735__auto___37732 = cljs.core.seq(seq__37161_37720);
if(temp__5735__auto___37732){
var seq__37161_37734__$1 = temp__5735__auto___37732;
if(cljs.core.chunked_seq_QMARK_(seq__37161_37734__$1)){
var c__4556__auto___37735 = cljs.core.chunk_first(seq__37161_37734__$1);
var G__37736 = cljs.core.chunk_rest(seq__37161_37734__$1);
var G__37737 = c__4556__auto___37735;
var G__37738 = cljs.core.count(c__4556__auto___37735);
var G__37739 = (0);
seq__37161_37720 = G__37736;
chunk__37162_37721 = G__37737;
count__37163_37722 = G__37738;
i__37164_37723 = G__37739;
continue;
} else {
var node_37741 = cljs.core.first(seq__37161_37734__$1);
fragment.appendChild(shadow.dom._to_dom(node_37741));


var G__37742 = cljs.core.next(seq__37161_37734__$1);
var G__37743 = null;
var G__37744 = (0);
var G__37745 = (0);
seq__37161_37720 = G__37742;
chunk__37162_37721 = G__37743;
count__37163_37722 = G__37744;
i__37164_37723 = G__37745;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37154){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37154));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37172_37748 = cljs.core.seq(scripts);
var chunk__37173_37749 = null;
var count__37174_37750 = (0);
var i__37175_37751 = (0);
while(true){
if((i__37175_37751 < count__37174_37750)){
var vec__37189_37752 = chunk__37173_37749.cljs$core$IIndexed$_nth$arity$2(null,i__37175_37751);
var script_tag_37753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37189_37752,(0),null);
var script_body_37754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37189_37752,(1),null);
eval(script_body_37754);


var G__37756 = seq__37172_37748;
var G__37757 = chunk__37173_37749;
var G__37758 = count__37174_37750;
var G__37759 = (i__37175_37751 + (1));
seq__37172_37748 = G__37756;
chunk__37173_37749 = G__37757;
count__37174_37750 = G__37758;
i__37175_37751 = G__37759;
continue;
} else {
var temp__5735__auto___37761 = cljs.core.seq(seq__37172_37748);
if(temp__5735__auto___37761){
var seq__37172_37762__$1 = temp__5735__auto___37761;
if(cljs.core.chunked_seq_QMARK_(seq__37172_37762__$1)){
var c__4556__auto___37763 = cljs.core.chunk_first(seq__37172_37762__$1);
var G__37764 = cljs.core.chunk_rest(seq__37172_37762__$1);
var G__37765 = c__4556__auto___37763;
var G__37766 = cljs.core.count(c__4556__auto___37763);
var G__37767 = (0);
seq__37172_37748 = G__37764;
chunk__37173_37749 = G__37765;
count__37174_37750 = G__37766;
i__37175_37751 = G__37767;
continue;
} else {
var vec__37193_37768 = cljs.core.first(seq__37172_37762__$1);
var script_tag_37769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37193_37768,(0),null);
var script_body_37770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37193_37768,(1),null);
eval(script_body_37770);


var G__37772 = cljs.core.next(seq__37172_37762__$1);
var G__37773 = null;
var G__37774 = (0);
var G__37775 = (0);
seq__37172_37748 = G__37772;
chunk__37173_37749 = G__37773;
count__37174_37750 = G__37774;
i__37175_37751 = G__37775;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37196){
var vec__37197 = p__37196;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37197,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37197,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37204 = arguments.length;
switch (G__37204) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37213 = cljs.core.seq(style_keys);
var chunk__37214 = null;
var count__37215 = (0);
var i__37216 = (0);
while(true){
if((i__37216 < count__37215)){
var it = chunk__37214.cljs$core$IIndexed$_nth$arity$2(null,i__37216);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37792 = seq__37213;
var G__37793 = chunk__37214;
var G__37794 = count__37215;
var G__37795 = (i__37216 + (1));
seq__37213 = G__37792;
chunk__37214 = G__37793;
count__37215 = G__37794;
i__37216 = G__37795;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37213);
if(temp__5735__auto__){
var seq__37213__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37213__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37213__$1);
var G__37800 = cljs.core.chunk_rest(seq__37213__$1);
var G__37801 = c__4556__auto__;
var G__37802 = cljs.core.count(c__4556__auto__);
var G__37803 = (0);
seq__37213 = G__37800;
chunk__37214 = G__37801;
count__37215 = G__37802;
i__37216 = G__37803;
continue;
} else {
var it = cljs.core.first(seq__37213__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37804 = cljs.core.next(seq__37213__$1);
var G__37805 = null;
var G__37806 = (0);
var G__37807 = (0);
seq__37213 = G__37804;
chunk__37214 = G__37805;
count__37215 = G__37806;
i__37216 = G__37807;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k37218,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__37222 = k37218;
var G__37222__$1 = (((G__37222 instanceof cljs.core.Keyword))?G__37222.fqn:null);
switch (G__37222__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37218,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__37223){
var vec__37224 = p__37223;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37224,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37224,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37217){
var self__ = this;
var G__37217__$1 = this;
return (new cljs.core.RecordIter((0),G__37217__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37219,other37220){
var self__ = this;
var this37219__$1 = this;
return (((!((other37220 == null)))) && ((this37219__$1.constructor === other37220.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37219__$1.x,other37220.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37219__$1.y,other37220.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37219__$1.__extmap,other37220.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__37217){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__37251 = cljs.core.keyword_identical_QMARK_;
var expr__37252 = k__4388__auto__;
if(cljs.core.truth_((pred__37251.cljs$core$IFn$_invoke$arity$2 ? pred__37251.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37252) : pred__37251.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37252)))){
return (new shadow.dom.Coordinate(G__37217,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37251.cljs$core$IFn$_invoke$arity$2 ? pred__37251.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37252) : pred__37251.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37252)))){
return (new shadow.dom.Coordinate(self__.x,G__37217,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__37217),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__37217){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37217,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37221){
var extmap__4419__auto__ = (function (){var G__37254 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37221,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37221)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37254);
} else {
return G__37254;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37221),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37221),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k37257,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__37261 = k37257;
var G__37261__$1 = (((G__37261 instanceof cljs.core.Keyword))?G__37261.fqn:null);
switch (G__37261__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37257,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__37303){
var vec__37306 = p__37303;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37306,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37306,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37256){
var self__ = this;
var G__37256__$1 = this;
return (new cljs.core.RecordIter((0),G__37256__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37258,other37259){
var self__ = this;
var this37258__$1 = this;
return (((!((other37259 == null)))) && ((this37258__$1.constructor === other37259.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37258__$1.w,other37259.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37258__$1.h,other37259.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37258__$1.__extmap,other37259.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__37256){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__37317 = cljs.core.keyword_identical_QMARK_;
var expr__37318 = k__4388__auto__;
if(cljs.core.truth_((pred__37317.cljs$core$IFn$_invoke$arity$2 ? pred__37317.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37318) : pred__37317.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37318)))){
return (new shadow.dom.Size(G__37256,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37317.cljs$core$IFn$_invoke$arity$2 ? pred__37317.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37318) : pred__37317.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37318)))){
return (new shadow.dom.Size(self__.w,G__37256,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__37256),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__37256){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37256,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37260){
var extmap__4419__auto__ = (function (){var G__37330 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37260,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37260)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37330);
} else {
return G__37330;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37260),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37260),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__37906 = (i + (1));
var G__37907 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37906;
ret = G__37907;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37360){
var vec__37362 = p__37360;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37362,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37367 = arguments.length;
switch (G__37367) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37910 = ps;
var G__37911 = (i + (1));
el__$1 = G__37910;
i = G__37911;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37377 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37377,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37377,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37377,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37380_37912 = cljs.core.seq(props);
var chunk__37381_37913 = null;
var count__37382_37914 = (0);
var i__37383_37915 = (0);
while(true){
if((i__37383_37915 < count__37382_37914)){
var vec__37391_37916 = chunk__37381_37913.cljs$core$IIndexed$_nth$arity$2(null,i__37383_37915);
var k_37917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37391_37916,(0),null);
var v_37918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37391_37916,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_37917);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37917),v_37918);


var G__37919 = seq__37380_37912;
var G__37920 = chunk__37381_37913;
var G__37921 = count__37382_37914;
var G__37922 = (i__37383_37915 + (1));
seq__37380_37912 = G__37919;
chunk__37381_37913 = G__37920;
count__37382_37914 = G__37921;
i__37383_37915 = G__37922;
continue;
} else {
var temp__5735__auto___37923 = cljs.core.seq(seq__37380_37912);
if(temp__5735__auto___37923){
var seq__37380_37924__$1 = temp__5735__auto___37923;
if(cljs.core.chunked_seq_QMARK_(seq__37380_37924__$1)){
var c__4556__auto___37925 = cljs.core.chunk_first(seq__37380_37924__$1);
var G__37926 = cljs.core.chunk_rest(seq__37380_37924__$1);
var G__37927 = c__4556__auto___37925;
var G__37928 = cljs.core.count(c__4556__auto___37925);
var G__37929 = (0);
seq__37380_37912 = G__37926;
chunk__37381_37913 = G__37927;
count__37382_37914 = G__37928;
i__37383_37915 = G__37929;
continue;
} else {
var vec__37394_37930 = cljs.core.first(seq__37380_37924__$1);
var k_37931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37394_37930,(0),null);
var v_37932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37394_37930,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_37931);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37931),v_37932);


var G__37933 = cljs.core.next(seq__37380_37924__$1);
var G__37934 = null;
var G__37935 = (0);
var G__37936 = (0);
seq__37380_37912 = G__37933;
chunk__37381_37913 = G__37934;
count__37382_37914 = G__37935;
i__37383_37915 = G__37936;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37399 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37399,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37399,(1),null);
var seq__37407_37937 = cljs.core.seq(node_children);
var chunk__37409_37938 = null;
var count__37410_37939 = (0);
var i__37411_37940 = (0);
while(true){
if((i__37411_37940 < count__37410_37939)){
var child_struct_37941 = chunk__37409_37938.cljs$core$IIndexed$_nth$arity$2(null,i__37411_37940);
if((!((child_struct_37941 == null)))){
if(typeof child_struct_37941 === 'string'){
var text_37942 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37942),child_struct_37941].join(''));
} else {
var children_37943 = shadow.dom.svg_node(child_struct_37941);
if(cljs.core.seq_QMARK_(children_37943)){
var seq__37439_37944 = cljs.core.seq(children_37943);
var chunk__37441_37945 = null;
var count__37442_37946 = (0);
var i__37443_37947 = (0);
while(true){
if((i__37443_37947 < count__37442_37946)){
var child_37948 = chunk__37441_37945.cljs$core$IIndexed$_nth$arity$2(null,i__37443_37947);
if(cljs.core.truth_(child_37948)){
node.appendChild(child_37948);


var G__37949 = seq__37439_37944;
var G__37950 = chunk__37441_37945;
var G__37951 = count__37442_37946;
var G__37952 = (i__37443_37947 + (1));
seq__37439_37944 = G__37949;
chunk__37441_37945 = G__37950;
count__37442_37946 = G__37951;
i__37443_37947 = G__37952;
continue;
} else {
var G__37953 = seq__37439_37944;
var G__37954 = chunk__37441_37945;
var G__37955 = count__37442_37946;
var G__37956 = (i__37443_37947 + (1));
seq__37439_37944 = G__37953;
chunk__37441_37945 = G__37954;
count__37442_37946 = G__37955;
i__37443_37947 = G__37956;
continue;
}
} else {
var temp__5735__auto___37957 = cljs.core.seq(seq__37439_37944);
if(temp__5735__auto___37957){
var seq__37439_37958__$1 = temp__5735__auto___37957;
if(cljs.core.chunked_seq_QMARK_(seq__37439_37958__$1)){
var c__4556__auto___37959 = cljs.core.chunk_first(seq__37439_37958__$1);
var G__37960 = cljs.core.chunk_rest(seq__37439_37958__$1);
var G__37961 = c__4556__auto___37959;
var G__37962 = cljs.core.count(c__4556__auto___37959);
var G__37963 = (0);
seq__37439_37944 = G__37960;
chunk__37441_37945 = G__37961;
count__37442_37946 = G__37962;
i__37443_37947 = G__37963;
continue;
} else {
var child_37964 = cljs.core.first(seq__37439_37958__$1);
if(cljs.core.truth_(child_37964)){
node.appendChild(child_37964);


var G__37965 = cljs.core.next(seq__37439_37958__$1);
var G__37966 = null;
var G__37967 = (0);
var G__37968 = (0);
seq__37439_37944 = G__37965;
chunk__37441_37945 = G__37966;
count__37442_37946 = G__37967;
i__37443_37947 = G__37968;
continue;
} else {
var G__37969 = cljs.core.next(seq__37439_37958__$1);
var G__37970 = null;
var G__37971 = (0);
var G__37972 = (0);
seq__37439_37944 = G__37969;
chunk__37441_37945 = G__37970;
count__37442_37946 = G__37971;
i__37443_37947 = G__37972;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37943);
}
}


var G__37973 = seq__37407_37937;
var G__37974 = chunk__37409_37938;
var G__37975 = count__37410_37939;
var G__37976 = (i__37411_37940 + (1));
seq__37407_37937 = G__37973;
chunk__37409_37938 = G__37974;
count__37410_37939 = G__37975;
i__37411_37940 = G__37976;
continue;
} else {
var G__37977 = seq__37407_37937;
var G__37978 = chunk__37409_37938;
var G__37979 = count__37410_37939;
var G__37980 = (i__37411_37940 + (1));
seq__37407_37937 = G__37977;
chunk__37409_37938 = G__37978;
count__37410_37939 = G__37979;
i__37411_37940 = G__37980;
continue;
}
} else {
var temp__5735__auto___37981 = cljs.core.seq(seq__37407_37937);
if(temp__5735__auto___37981){
var seq__37407_37982__$1 = temp__5735__auto___37981;
if(cljs.core.chunked_seq_QMARK_(seq__37407_37982__$1)){
var c__4556__auto___37984 = cljs.core.chunk_first(seq__37407_37982__$1);
var G__37985 = cljs.core.chunk_rest(seq__37407_37982__$1);
var G__37986 = c__4556__auto___37984;
var G__37987 = cljs.core.count(c__4556__auto___37984);
var G__37988 = (0);
seq__37407_37937 = G__37985;
chunk__37409_37938 = G__37986;
count__37410_37939 = G__37987;
i__37411_37940 = G__37988;
continue;
} else {
var child_struct_37990 = cljs.core.first(seq__37407_37982__$1);
if((!((child_struct_37990 == null)))){
if(typeof child_struct_37990 === 'string'){
var text_37991 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37991),child_struct_37990].join(''));
} else {
var children_37992 = shadow.dom.svg_node(child_struct_37990);
if(cljs.core.seq_QMARK_(children_37992)){
var seq__37451_37993 = cljs.core.seq(children_37992);
var chunk__37453_37994 = null;
var count__37454_37995 = (0);
var i__37455_37996 = (0);
while(true){
if((i__37455_37996 < count__37454_37995)){
var child_37997 = chunk__37453_37994.cljs$core$IIndexed$_nth$arity$2(null,i__37455_37996);
if(cljs.core.truth_(child_37997)){
node.appendChild(child_37997);


var G__37998 = seq__37451_37993;
var G__37999 = chunk__37453_37994;
var G__38000 = count__37454_37995;
var G__38001 = (i__37455_37996 + (1));
seq__37451_37993 = G__37998;
chunk__37453_37994 = G__37999;
count__37454_37995 = G__38000;
i__37455_37996 = G__38001;
continue;
} else {
var G__38002 = seq__37451_37993;
var G__38003 = chunk__37453_37994;
var G__38004 = count__37454_37995;
var G__38005 = (i__37455_37996 + (1));
seq__37451_37993 = G__38002;
chunk__37453_37994 = G__38003;
count__37454_37995 = G__38004;
i__37455_37996 = G__38005;
continue;
}
} else {
var temp__5735__auto___38006__$1 = cljs.core.seq(seq__37451_37993);
if(temp__5735__auto___38006__$1){
var seq__37451_38007__$1 = temp__5735__auto___38006__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37451_38007__$1)){
var c__4556__auto___38008 = cljs.core.chunk_first(seq__37451_38007__$1);
var G__38009 = cljs.core.chunk_rest(seq__37451_38007__$1);
var G__38010 = c__4556__auto___38008;
var G__38011 = cljs.core.count(c__4556__auto___38008);
var G__38012 = (0);
seq__37451_37993 = G__38009;
chunk__37453_37994 = G__38010;
count__37454_37995 = G__38011;
i__37455_37996 = G__38012;
continue;
} else {
var child_38013 = cljs.core.first(seq__37451_38007__$1);
if(cljs.core.truth_(child_38013)){
node.appendChild(child_38013);


var G__38014 = cljs.core.next(seq__37451_38007__$1);
var G__38015 = null;
var G__38016 = (0);
var G__38017 = (0);
seq__37451_37993 = G__38014;
chunk__37453_37994 = G__38015;
count__37454_37995 = G__38016;
i__37455_37996 = G__38017;
continue;
} else {
var G__38018 = cljs.core.next(seq__37451_38007__$1);
var G__38019 = null;
var G__38020 = (0);
var G__38021 = (0);
seq__37451_37993 = G__38018;
chunk__37453_37994 = G__38019;
count__37454_37995 = G__38020;
i__37455_37996 = G__38021;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37992);
}
}


var G__38022 = cljs.core.next(seq__37407_37982__$1);
var G__38023 = null;
var G__38024 = (0);
var G__38025 = (0);
seq__37407_37937 = G__38022;
chunk__37409_37938 = G__38023;
count__37410_37939 = G__38024;
i__37411_37940 = G__38025;
continue;
} else {
var G__38026 = cljs.core.next(seq__37407_37982__$1);
var G__38027 = null;
var G__38028 = (0);
var G__38029 = (0);
seq__37407_37937 = G__38026;
chunk__37409_37938 = G__38027;
count__37410_37939 = G__38028;
i__37411_37940 = G__38029;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38030 = arguments.length;
var i__4737__auto___38031 = (0);
while(true){
if((i__4737__auto___38031 < len__4736__auto___38030)){
args__4742__auto__.push((arguments[i__4737__auto___38031]));

var G__38032 = (i__4737__auto___38031 + (1));
i__4737__auto___38031 = G__38032;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37459){
var G__37460 = cljs.core.first(seq37459);
var seq37459__$1 = cljs.core.next(seq37459);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37460,seq37459__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37464 = arguments.length;
switch (G__37464) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__34412__auto___38035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_37475){
var state_val_37476 = (state_37475[(1)]);
if((state_val_37476 === (1))){
var state_37475__$1 = state_37475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37475__$1,(2),once_or_cleanup);
} else {
if((state_val_37476 === (2))){
var inst_37472 = (state_37475[(2)]);
var inst_37473 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37475__$1 = (function (){var statearr_37478 = state_37475;
(statearr_37478[(7)] = inst_37472);

return statearr_37478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37475__$1,inst_37473);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34210__auto__ = null;
var shadow$dom$state_machine__34210__auto____0 = (function (){
var statearr_37479 = [null,null,null,null,null,null,null,null];
(statearr_37479[(0)] = shadow$dom$state_machine__34210__auto__);

(statearr_37479[(1)] = (1));

return statearr_37479;
});
var shadow$dom$state_machine__34210__auto____1 = (function (state_37475){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_37475);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e37480){var ex__34213__auto__ = e37480;
var statearr_37481_38041 = state_37475;
(statearr_37481_38041[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_37475[(4)]))){
var statearr_37482_38042 = state_37475;
(statearr_37482_38042[(1)] = cljs.core.first((state_37475[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38043 = state_37475;
state_37475 = G__38043;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
shadow$dom$state_machine__34210__auto__ = function(state_37475){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34210__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34210__auto____1.call(this,state_37475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34210__auto____0;
shadow$dom$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34210__auto____1;
return shadow$dom$state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_37483 = f__34413__auto__();
(statearr_37483[(6)] = c__34412__auto___38035);

return statearr_37483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

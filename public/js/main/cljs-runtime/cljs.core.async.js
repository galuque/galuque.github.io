goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34497 = arguments.length;
switch (G__34497) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34511 = (function (f,blockable,meta34512){
this.f = f;
this.blockable = blockable;
this.meta34512 = meta34512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34513,meta34512__$1){
var self__ = this;
var _34513__$1 = this;
return (new cljs.core.async.t_cljs$core$async34511(self__.f,self__.blockable,meta34512__$1));
}));

(cljs.core.async.t_cljs$core$async34511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34513){
var self__ = this;
var _34513__$1 = this;
return self__.meta34512;
}));

(cljs.core.async.t_cljs$core$async34511.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34511.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34512","meta34512",499994958,null)], null);
}));

(cljs.core.async.t_cljs$core$async34511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34511");

(cljs.core.async.t_cljs$core$async34511.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34511.
 */
cljs.core.async.__GT_t_cljs$core$async34511 = (function cljs$core$async$__GT_t_cljs$core$async34511(f__$1,blockable__$1,meta34512){
return (new cljs.core.async.t_cljs$core$async34511(f__$1,blockable__$1,meta34512));
});

}

return (new cljs.core.async.t_cljs$core$async34511(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34544 = arguments.length;
switch (G__34544) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34546 = arguments.length;
switch (G__34546) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34551 = arguments.length;
switch (G__34551) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36726 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36726) : fn1.call(null,val_36726));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36726) : fn1.call(null,val_36726));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34553 = arguments.length;
switch (G__34553) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___36744 = n;
var x_36745 = (0);
while(true){
if((x_36745 < n__4613__auto___36744)){
(a[x_36745] = x_36745);

var G__36746 = (x_36745 + (1));
x_36745 = G__36746;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34560 = (function (flag,meta34561){
this.flag = flag;
this.meta34561 = meta34561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34562,meta34561__$1){
var self__ = this;
var _34562__$1 = this;
return (new cljs.core.async.t_cljs$core$async34560(self__.flag,meta34561__$1));
}));

(cljs.core.async.t_cljs$core$async34560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34562){
var self__ = this;
var _34562__$1 = this;
return self__.meta34561;
}));

(cljs.core.async.t_cljs$core$async34560.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34560.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34561","meta34561",-35284126,null)], null);
}));

(cljs.core.async.t_cljs$core$async34560.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34560");

(cljs.core.async.t_cljs$core$async34560.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34560");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34560.
 */
cljs.core.async.__GT_t_cljs$core$async34560 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34560(flag__$1,meta34561){
return (new cljs.core.async.t_cljs$core$async34560(flag__$1,meta34561));
});

}

return (new cljs.core.async.t_cljs$core$async34560(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34565 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34565 = (function (flag,cb,meta34566){
this.flag = flag;
this.cb = cb;
this.meta34566 = meta34566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34567,meta34566__$1){
var self__ = this;
var _34567__$1 = this;
return (new cljs.core.async.t_cljs$core$async34565(self__.flag,self__.cb,meta34566__$1));
}));

(cljs.core.async.t_cljs$core$async34565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34567){
var self__ = this;
var _34567__$1 = this;
return self__.meta34566;
}));

(cljs.core.async.t_cljs$core$async34565.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34565.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34566","meta34566",-1425621575,null)], null);
}));

(cljs.core.async.t_cljs$core$async34565.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34565");

(cljs.core.async.t_cljs$core$async34565.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34565");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34565.
 */
cljs.core.async.__GT_t_cljs$core$async34565 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34565(flag__$1,cb__$1,meta34566){
return (new cljs.core.async.t_cljs$core$async34565(flag__$1,cb__$1,meta34566));
});

}

return (new cljs.core.async.t_cljs$core$async34565(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34586_SHARP_){
var G__34588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34586_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34588) : fret.call(null,G__34588));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34587_SHARP_){
var G__34589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34587_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34589) : fret.call(null,G__34589));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36755 = (i + (1));
i = G__36755;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36756 = arguments.length;
var i__4737__auto___36757 = (0);
while(true){
if((i__4737__auto___36757 < len__4736__auto___36756)){
args__4742__auto__.push((arguments[i__4737__auto___36757]));

var G__36758 = (i__4737__auto___36757 + (1));
i__4737__auto___36757 = G__36758;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34592){
var map__34593 = p__34592;
var map__34593__$1 = (((((!((map__34593 == null))))?(((((map__34593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34593):map__34593);
var opts = map__34593__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34590){
var G__34591 = cljs.core.first(seq34590);
var seq34590__$1 = cljs.core.next(seq34590);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34591,seq34590__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34596 = arguments.length;
switch (G__34596) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34412__auto___36768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_34627){
var state_val_34629 = (state_34627[(1)]);
if((state_val_34629 === (7))){
var inst_34619 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
var statearr_34639_36769 = state_34627__$1;
(statearr_34639_36769[(2)] = inst_34619);

(statearr_34639_36769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (1))){
var state_34627__$1 = state_34627;
var statearr_34640_36770 = state_34627__$1;
(statearr_34640_36770[(2)] = null);

(statearr_34640_36770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (4))){
var inst_34602 = (state_34627[(7)]);
var inst_34602__$1 = (state_34627[(2)]);
var inst_34603 = (inst_34602__$1 == null);
var state_34627__$1 = (function (){var statearr_34641 = state_34627;
(statearr_34641[(7)] = inst_34602__$1);

return statearr_34641;
})();
if(cljs.core.truth_(inst_34603)){
var statearr_34642_36771 = state_34627__$1;
(statearr_34642_36771[(1)] = (5));

} else {
var statearr_34643_36772 = state_34627__$1;
(statearr_34643_36772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (13))){
var state_34627__$1 = state_34627;
var statearr_34644_36773 = state_34627__$1;
(statearr_34644_36773[(2)] = null);

(statearr_34644_36773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (6))){
var inst_34602 = (state_34627[(7)]);
var state_34627__$1 = state_34627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34627__$1,(11),to,inst_34602);
} else {
if((state_val_34629 === (3))){
var inst_34621 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34627__$1,inst_34621);
} else {
if((state_val_34629 === (12))){
var state_34627__$1 = state_34627;
var statearr_34645_36774 = state_34627__$1;
(statearr_34645_36774[(2)] = null);

(statearr_34645_36774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (2))){
var state_34627__$1 = state_34627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34627__$1,(4),from);
} else {
if((state_val_34629 === (11))){
var inst_34612 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
if(cljs.core.truth_(inst_34612)){
var statearr_34646_36775 = state_34627__$1;
(statearr_34646_36775[(1)] = (12));

} else {
var statearr_34647_36777 = state_34627__$1;
(statearr_34647_36777[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (9))){
var state_34627__$1 = state_34627;
var statearr_34648_36779 = state_34627__$1;
(statearr_34648_36779[(2)] = null);

(statearr_34648_36779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (5))){
var state_34627__$1 = state_34627;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34649_36780 = state_34627__$1;
(statearr_34649_36780[(1)] = (8));

} else {
var statearr_34650_36784 = state_34627__$1;
(statearr_34650_36784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (14))){
var inst_34617 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
var statearr_34651_36785 = state_34627__$1;
(statearr_34651_36785[(2)] = inst_34617);

(statearr_34651_36785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (10))){
var inst_34609 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
var statearr_34652_36786 = state_34627__$1;
(statearr_34652_36786[(2)] = inst_34609);

(statearr_34652_36786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (8))){
var inst_34606 = cljs.core.async.close_BANG_(to);
var state_34627__$1 = state_34627;
var statearr_34653_36787 = state_34627__$1;
(statearr_34653_36787[(2)] = inst_34606);

(statearr_34653_36787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34210__auto__ = null;
var cljs$core$async$state_machine__34210__auto____0 = (function (){
var statearr_34654 = [null,null,null,null,null,null,null,null];
(statearr_34654[(0)] = cljs$core$async$state_machine__34210__auto__);

(statearr_34654[(1)] = (1));

return statearr_34654;
});
var cljs$core$async$state_machine__34210__auto____1 = (function (state_34627){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_34627);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e34655){var ex__34213__auto__ = e34655;
var statearr_34657_36789 = state_34627;
(statearr_34657_36789[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_34627[(4)]))){
var statearr_34658_36790 = state_34627;
(statearr_34658_36790[(1)] = cljs.core.first((state_34627[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36791 = state_34627;
state_34627 = G__36791;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$state_machine__34210__auto__ = function(state_34627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34210__auto____1.call(this,state_34627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34210__auto____0;
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34210__auto____1;
return cljs$core$async$state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_34659 = f__34413__auto__();
(statearr_34659[(6)] = c__34412__auto___36768);

return statearr_34659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__34660){
var vec__34661 = p__34660;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34661,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34661,(1),null);
var job = vec__34661;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34412__auto___36797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_34668){
var state_val_34669 = (state_34668[(1)]);
if((state_val_34669 === (1))){
var state_34668__$1 = state_34668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34668__$1,(2),res,v);
} else {
if((state_val_34669 === (2))){
var inst_34665 = (state_34668[(2)]);
var inst_34666 = cljs.core.async.close_BANG_(res);
var state_34668__$1 = (function (){var statearr_34670 = state_34668;
(statearr_34670[(7)] = inst_34665);

return statearr_34670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34668__$1,inst_34666);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0 = (function (){
var statearr_34671 = [null,null,null,null,null,null,null,null];
(statearr_34671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__);

(statearr_34671[(1)] = (1));

return statearr_34671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1 = (function (state_34668){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_34668);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e34672){var ex__34213__auto__ = e34672;
var statearr_34673_36799 = state_34668;
(statearr_34673_36799[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_34668[(4)]))){
var statearr_34674_36801 = state_34668;
(statearr_34674_36801[(1)] = cljs.core.first((state_34668[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36802 = state_34668;
state_34668 = G__36802;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__ = function(state_34668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1.call(this,state_34668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_34675 = f__34413__auto__();
(statearr_34675[(6)] = c__34412__auto___36797);

return statearr_34675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34676){
var vec__34677 = p__34676;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34677,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34677,(1),null);
var job = vec__34677;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___36803 = n;
var __36804 = (0);
while(true){
if((__36804 < n__4613__auto___36803)){
var G__34680_36805 = type;
var G__34680_36806__$1 = (((G__34680_36805 instanceof cljs.core.Keyword))?G__34680_36805.fqn:null);
switch (G__34680_36806__$1) {
case "compute":
var c__34412__auto___36808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36804,c__34412__auto___36808,G__34680_36805,G__34680_36806__$1,n__4613__auto___36803,jobs,results,process,async){
return (function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = ((function (__36804,c__34412__auto___36808,G__34680_36805,G__34680_36806__$1,n__4613__auto___36803,jobs,results,process,async){
return (function (state_34693){
var state_val_34694 = (state_34693[(1)]);
if((state_val_34694 === (1))){
var state_34693__$1 = state_34693;
var statearr_34695_36815 = state_34693__$1;
(statearr_34695_36815[(2)] = null);

(statearr_34695_36815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34694 === (2))){
var state_34693__$1 = state_34693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34693__$1,(4),jobs);
} else {
if((state_val_34694 === (3))){
var inst_34691 = (state_34693[(2)]);
var state_34693__$1 = state_34693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34693__$1,inst_34691);
} else {
if((state_val_34694 === (4))){
var inst_34683 = (state_34693[(2)]);
var inst_34684 = process(inst_34683);
var state_34693__$1 = state_34693;
if(cljs.core.truth_(inst_34684)){
var statearr_34696_36819 = state_34693__$1;
(statearr_34696_36819[(1)] = (5));

} else {
var statearr_34697_36820 = state_34693__$1;
(statearr_34697_36820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34694 === (5))){
var state_34693__$1 = state_34693;
var statearr_34698_36821 = state_34693__$1;
(statearr_34698_36821[(2)] = null);

(statearr_34698_36821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34694 === (6))){
var state_34693__$1 = state_34693;
var statearr_34699_36834 = state_34693__$1;
(statearr_34699_36834[(2)] = null);

(statearr_34699_36834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34694 === (7))){
var inst_34689 = (state_34693[(2)]);
var state_34693__$1 = state_34693;
var statearr_34708_36835 = state_34693__$1;
(statearr_34708_36835[(2)] = inst_34689);

(statearr_34708_36835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36804,c__34412__auto___36808,G__34680_36805,G__34680_36806__$1,n__4613__auto___36803,jobs,results,process,async))
;
return ((function (__36804,switch__34209__auto__,c__34412__auto___36808,G__34680_36805,G__34680_36806__$1,n__4613__auto___36803,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0 = (function (){
var statearr_34713 = [null,null,null,null,null,null,null];
(statearr_34713[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__);

(statearr_34713[(1)] = (1));

return statearr_34713;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1 = (function (state_34693){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_34693);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e34714){var ex__34213__auto__ = e34714;
var statearr_34715_36836 = state_34693;
(statearr_34715_36836[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_34693[(4)]))){
var statearr_34716_36837 = state_34693;
(statearr_34716_36837[(1)] = cljs.core.first((state_34693[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36838 = state_34693;
state_34693 = G__36838;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__ = function(state_34693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1.call(this,state_34693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__;
})()
;})(__36804,switch__34209__auto__,c__34412__auto___36808,G__34680_36805,G__34680_36806__$1,n__4613__auto___36803,jobs,results,process,async))
})();
var state__34414__auto__ = (function (){var statearr_34719 = f__34413__auto__();
(statearr_34719[(6)] = c__34412__auto___36808);

return statearr_34719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
});})(__36804,c__34412__auto___36808,G__34680_36805,G__34680_36806__$1,n__4613__auto___36803,jobs,results,process,async))
);


break;
case "async":
var c__34412__auto___36839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36804,c__34412__auto___36839,G__34680_36805,G__34680_36806__$1,n__4613__auto___36803,jobs,results,process,async){
return (function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = ((function (__36804,c__34412__auto___36839,G__34680_36805,G__34680_36806__$1,n__4613__auto___36803,jobs,results,process,async){
return (function (state_34732){
var state_val_34733 = (state_34732[(1)]);
if((state_val_34733 === (1))){
var state_34732__$1 = state_34732;
var statearr_34734_36840 = state_34732__$1;
(statearr_34734_36840[(2)] = null);

(statearr_34734_36840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (2))){
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34732__$1,(4),jobs);
} else {
if((state_val_34733 === (3))){
var inst_34730 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34732__$1,inst_34730);
} else {
if((state_val_34733 === (4))){
var inst_34722 = (state_34732[(2)]);
var inst_34723 = async(inst_34722);
var state_34732__$1 = state_34732;
if(cljs.core.truth_(inst_34723)){
var statearr_34735_36841 = state_34732__$1;
(statearr_34735_36841[(1)] = (5));

} else {
var statearr_34736_36842 = state_34732__$1;
(statearr_34736_36842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (5))){
var state_34732__$1 = state_34732;
var statearr_34738_36843 = state_34732__$1;
(statearr_34738_36843[(2)] = null);

(statearr_34738_36843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (6))){
var state_34732__$1 = state_34732;
var statearr_34739_36844 = state_34732__$1;
(statearr_34739_36844[(2)] = null);

(statearr_34739_36844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (7))){
var inst_34728 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34740_36856 = state_34732__$1;
(statearr_34740_36856[(2)] = inst_34728);

(statearr_34740_36856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36804,c__34412__auto___36839,G__34680_36805,G__34680_36806__$1,n__4613__auto___36803,jobs,results,process,async))
;
return ((function (__36804,switch__34209__auto__,c__34412__auto___36839,G__34680_36805,G__34680_36806__$1,n__4613__auto___36803,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0 = (function (){
var statearr_34741 = [null,null,null,null,null,null,null];
(statearr_34741[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__);

(statearr_34741[(1)] = (1));

return statearr_34741;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1 = (function (state_34732){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_34732);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e34744){var ex__34213__auto__ = e34744;
var statearr_34745_36857 = state_34732;
(statearr_34745_36857[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_34732[(4)]))){
var statearr_34747_36858 = state_34732;
(statearr_34747_36858[(1)] = cljs.core.first((state_34732[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36859 = state_34732;
state_34732 = G__36859;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__ = function(state_34732){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1.call(this,state_34732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__;
})()
;})(__36804,switch__34209__auto__,c__34412__auto___36839,G__34680_36805,G__34680_36806__$1,n__4613__auto___36803,jobs,results,process,async))
})();
var state__34414__auto__ = (function (){var statearr_34748 = f__34413__auto__();
(statearr_34748[(6)] = c__34412__auto___36839);

return statearr_34748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
});})(__36804,c__34412__auto___36839,G__34680_36805,G__34680_36806__$1,n__4613__auto___36803,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34680_36806__$1)].join('')));

}

var G__36860 = (__36804 + (1));
__36804 = G__36860;
continue;
} else {
}
break;
}

var c__34412__auto___36861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_34778){
var state_val_34779 = (state_34778[(1)]);
if((state_val_34779 === (7))){
var inst_34774 = (state_34778[(2)]);
var state_34778__$1 = state_34778;
var statearr_34785_36862 = state_34778__$1;
(statearr_34785_36862[(2)] = inst_34774);

(statearr_34785_36862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34779 === (1))){
var state_34778__$1 = state_34778;
var statearr_34789_36863 = state_34778__$1;
(statearr_34789_36863[(2)] = null);

(statearr_34789_36863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34779 === (4))){
var inst_34751 = (state_34778[(7)]);
var inst_34751__$1 = (state_34778[(2)]);
var inst_34752 = (inst_34751__$1 == null);
var state_34778__$1 = (function (){var statearr_34795 = state_34778;
(statearr_34795[(7)] = inst_34751__$1);

return statearr_34795;
})();
if(cljs.core.truth_(inst_34752)){
var statearr_34796_36866 = state_34778__$1;
(statearr_34796_36866[(1)] = (5));

} else {
var statearr_34797_36867 = state_34778__$1;
(statearr_34797_36867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34779 === (6))){
var inst_34751 = (state_34778[(7)]);
var inst_34756 = (state_34778[(8)]);
var inst_34756__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34765 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34766 = [inst_34751,inst_34756__$1];
var inst_34767 = (new cljs.core.PersistentVector(null,2,(5),inst_34765,inst_34766,null));
var state_34778__$1 = (function (){var statearr_34799 = state_34778;
(statearr_34799[(8)] = inst_34756__$1);

return statearr_34799;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34778__$1,(8),jobs,inst_34767);
} else {
if((state_val_34779 === (3))){
var inst_34776 = (state_34778[(2)]);
var state_34778__$1 = state_34778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34778__$1,inst_34776);
} else {
if((state_val_34779 === (2))){
var state_34778__$1 = state_34778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34778__$1,(4),from);
} else {
if((state_val_34779 === (9))){
var inst_34771 = (state_34778[(2)]);
var state_34778__$1 = (function (){var statearr_34803 = state_34778;
(statearr_34803[(9)] = inst_34771);

return statearr_34803;
})();
var statearr_34808_36868 = state_34778__$1;
(statearr_34808_36868[(2)] = null);

(statearr_34808_36868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34779 === (5))){
var inst_34754 = cljs.core.async.close_BANG_(jobs);
var state_34778__$1 = state_34778;
var statearr_34810_36879 = state_34778__$1;
(statearr_34810_36879[(2)] = inst_34754);

(statearr_34810_36879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34779 === (8))){
var inst_34756 = (state_34778[(8)]);
var inst_34769 = (state_34778[(2)]);
var state_34778__$1 = (function (){var statearr_34819 = state_34778;
(statearr_34819[(10)] = inst_34769);

return statearr_34819;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34778__$1,(9),results,inst_34756);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0 = (function (){
var statearr_34835 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__);

(statearr_34835[(1)] = (1));

return statearr_34835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1 = (function (state_34778){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_34778);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e34836){var ex__34213__auto__ = e34836;
var statearr_34849_36880 = state_34778;
(statearr_34849_36880[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_34778[(4)]))){
var statearr_34850_36881 = state_34778;
(statearr_34850_36881[(1)] = cljs.core.first((state_34778[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36882 = state_34778;
state_34778 = G__36882;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__ = function(state_34778){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1.call(this,state_34778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_34853 = f__34413__auto__();
(statearr_34853[(6)] = c__34412__auto___36861);

return statearr_34853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


var c__34412__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_34908){
var state_val_34909 = (state_34908[(1)]);
if((state_val_34909 === (7))){
var inst_34904 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34914_36887 = state_34908__$1;
(statearr_34914_36887[(2)] = inst_34904);

(statearr_34914_36887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (20))){
var state_34908__$1 = state_34908;
var statearr_34917_36888 = state_34908__$1;
(statearr_34917_36888[(2)] = null);

(statearr_34917_36888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (1))){
var state_34908__$1 = state_34908;
var statearr_34923_36889 = state_34908__$1;
(statearr_34923_36889[(2)] = null);

(statearr_34923_36889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (4))){
var inst_34863 = (state_34908[(7)]);
var inst_34863__$1 = (state_34908[(2)]);
var inst_34864 = (inst_34863__$1 == null);
var state_34908__$1 = (function (){var statearr_34930 = state_34908;
(statearr_34930[(7)] = inst_34863__$1);

return statearr_34930;
})();
if(cljs.core.truth_(inst_34864)){
var statearr_34932_36897 = state_34908__$1;
(statearr_34932_36897[(1)] = (5));

} else {
var statearr_34937_36898 = state_34908__$1;
(statearr_34937_36898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (15))){
var inst_34879 = (state_34908[(8)]);
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34908__$1,(18),to,inst_34879);
} else {
if((state_val_34909 === (21))){
var inst_34899 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34944_36902 = state_34908__$1;
(statearr_34944_36902[(2)] = inst_34899);

(statearr_34944_36902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (13))){
var inst_34901 = (state_34908[(2)]);
var state_34908__$1 = (function (){var statearr_34945 = state_34908;
(statearr_34945[(9)] = inst_34901);

return statearr_34945;
})();
var statearr_34946_36903 = state_34908__$1;
(statearr_34946_36903[(2)] = null);

(statearr_34946_36903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (6))){
var inst_34863 = (state_34908[(7)]);
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34908__$1,(11),inst_34863);
} else {
if((state_val_34909 === (17))){
var inst_34894 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
if(cljs.core.truth_(inst_34894)){
var statearr_34950_36904 = state_34908__$1;
(statearr_34950_36904[(1)] = (19));

} else {
var statearr_34951_36908 = state_34908__$1;
(statearr_34951_36908[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (3))){
var inst_34906 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34908__$1,inst_34906);
} else {
if((state_val_34909 === (12))){
var inst_34876 = (state_34908[(10)]);
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34908__$1,(14),inst_34876);
} else {
if((state_val_34909 === (2))){
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34908__$1,(4),results);
} else {
if((state_val_34909 === (19))){
var state_34908__$1 = state_34908;
var statearr_34977_36909 = state_34908__$1;
(statearr_34977_36909[(2)] = null);

(statearr_34977_36909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (11))){
var inst_34876 = (state_34908[(2)]);
var state_34908__$1 = (function (){var statearr_34981 = state_34908;
(statearr_34981[(10)] = inst_34876);

return statearr_34981;
})();
var statearr_34989_36910 = state_34908__$1;
(statearr_34989_36910[(2)] = null);

(statearr_34989_36910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (9))){
var state_34908__$1 = state_34908;
var statearr_34998_36911 = state_34908__$1;
(statearr_34998_36911[(2)] = null);

(statearr_34998_36911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (5))){
var state_34908__$1 = state_34908;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35001_36918 = state_34908__$1;
(statearr_35001_36918[(1)] = (8));

} else {
var statearr_35004_36919 = state_34908__$1;
(statearr_35004_36919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (14))){
var inst_34879 = (state_34908[(8)]);
var inst_34879__$1 = (state_34908[(2)]);
var inst_34880 = (inst_34879__$1 == null);
var inst_34881 = cljs.core.not(inst_34880);
var state_34908__$1 = (function (){var statearr_35012 = state_34908;
(statearr_35012[(8)] = inst_34879__$1);

return statearr_35012;
})();
if(inst_34881){
var statearr_35013_36920 = state_34908__$1;
(statearr_35013_36920[(1)] = (15));

} else {
var statearr_35014_36921 = state_34908__$1;
(statearr_35014_36921[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (16))){
var state_34908__$1 = state_34908;
var statearr_35027_36922 = state_34908__$1;
(statearr_35027_36922[(2)] = false);

(statearr_35027_36922[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (10))){
var inst_34873 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_35032_36923 = state_34908__$1;
(statearr_35032_36923[(2)] = inst_34873);

(statearr_35032_36923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (18))){
var inst_34888 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_35036_36929 = state_34908__$1;
(statearr_35036_36929[(2)] = inst_34888);

(statearr_35036_36929[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (8))){
var inst_34870 = cljs.core.async.close_BANG_(to);
var state_34908__$1 = state_34908;
var statearr_35057_36935 = state_34908__$1;
(statearr_35057_36935[(2)] = inst_34870);

(statearr_35057_36935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0 = (function (){
var statearr_35060 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__);

(statearr_35060[(1)] = (1));

return statearr_35060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1 = (function (state_34908){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_34908);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e35063){var ex__34213__auto__ = e35063;
var statearr_35064_36948 = state_34908;
(statearr_35064_36948[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_34908[(4)]))){
var statearr_35065_36953 = state_34908;
(statearr_35065_36953[(1)] = cljs.core.first((state_34908[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36957 = state_34908;
state_34908 = G__36957;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__ = function(state_34908){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1.call(this,state_34908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_35069 = f__34413__auto__();
(statearr_35069[(6)] = c__34412__auto__);

return statearr_35069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));

return c__34412__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__35091 = arguments.length;
switch (G__35091) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__35117 = arguments.length;
switch (G__35117) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__35130 = arguments.length;
switch (G__35130) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34412__auto___36981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_35159){
var state_val_35160 = (state_35159[(1)]);
if((state_val_35160 === (7))){
var inst_35155 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35162_36982 = state_35159__$1;
(statearr_35162_36982[(2)] = inst_35155);

(statearr_35162_36982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (1))){
var state_35159__$1 = state_35159;
var statearr_35163_36983 = state_35159__$1;
(statearr_35163_36983[(2)] = null);

(statearr_35163_36983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (4))){
var inst_35133 = (state_35159[(7)]);
var inst_35133__$1 = (state_35159[(2)]);
var inst_35134 = (inst_35133__$1 == null);
var state_35159__$1 = (function (){var statearr_35174 = state_35159;
(statearr_35174[(7)] = inst_35133__$1);

return statearr_35174;
})();
if(cljs.core.truth_(inst_35134)){
var statearr_35175_36984 = state_35159__$1;
(statearr_35175_36984[(1)] = (5));

} else {
var statearr_35182_36985 = state_35159__$1;
(statearr_35182_36985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (13))){
var state_35159__$1 = state_35159;
var statearr_35185_36986 = state_35159__$1;
(statearr_35185_36986[(2)] = null);

(statearr_35185_36986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (6))){
var inst_35133 = (state_35159[(7)]);
var inst_35142 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35133) : p.call(null,inst_35133));
var state_35159__$1 = state_35159;
if(cljs.core.truth_(inst_35142)){
var statearr_35191_36987 = state_35159__$1;
(statearr_35191_36987[(1)] = (9));

} else {
var statearr_35193_36988 = state_35159__$1;
(statearr_35193_36988[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (3))){
var inst_35157 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35159__$1,inst_35157);
} else {
if((state_val_35160 === (12))){
var state_35159__$1 = state_35159;
var statearr_35194_36989 = state_35159__$1;
(statearr_35194_36989[(2)] = null);

(statearr_35194_36989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (2))){
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35159__$1,(4),ch);
} else {
if((state_val_35160 === (11))){
var inst_35133 = (state_35159[(7)]);
var inst_35146 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35159__$1,(8),inst_35146,inst_35133);
} else {
if((state_val_35160 === (9))){
var state_35159__$1 = state_35159;
var statearr_35196_36997 = state_35159__$1;
(statearr_35196_36997[(2)] = tc);

(statearr_35196_36997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (5))){
var inst_35136 = cljs.core.async.close_BANG_(tc);
var inst_35137 = cljs.core.async.close_BANG_(fc);
var state_35159__$1 = (function (){var statearr_35197 = state_35159;
(statearr_35197[(8)] = inst_35136);

return statearr_35197;
})();
var statearr_35198_36998 = state_35159__$1;
(statearr_35198_36998[(2)] = inst_35137);

(statearr_35198_36998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (14))){
var inst_35153 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35199_36999 = state_35159__$1;
(statearr_35199_36999[(2)] = inst_35153);

(statearr_35199_36999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (10))){
var state_35159__$1 = state_35159;
var statearr_35202_37000 = state_35159__$1;
(statearr_35202_37000[(2)] = fc);

(statearr_35202_37000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (8))){
var inst_35148 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
if(cljs.core.truth_(inst_35148)){
var statearr_35203_37001 = state_35159__$1;
(statearr_35203_37001[(1)] = (12));

} else {
var statearr_35204_37002 = state_35159__$1;
(statearr_35204_37002[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34210__auto__ = null;
var cljs$core$async$state_machine__34210__auto____0 = (function (){
var statearr_35205 = [null,null,null,null,null,null,null,null,null];
(statearr_35205[(0)] = cljs$core$async$state_machine__34210__auto__);

(statearr_35205[(1)] = (1));

return statearr_35205;
});
var cljs$core$async$state_machine__34210__auto____1 = (function (state_35159){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_35159);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e35206){var ex__34213__auto__ = e35206;
var statearr_35207_37003 = state_35159;
(statearr_35207_37003[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_35159[(4)]))){
var statearr_35208_37004 = state_35159;
(statearr_35208_37004[(1)] = cljs.core.first((state_35159[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37005 = state_35159;
state_35159 = G__37005;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$state_machine__34210__auto__ = function(state_35159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34210__auto____1.call(this,state_35159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34210__auto____0;
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34210__auto____1;
return cljs$core$async$state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_35211 = f__34413__auto__();
(statearr_35211[(6)] = c__34412__auto___36981);

return statearr_35211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34412__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_35235){
var state_val_35236 = (state_35235[(1)]);
if((state_val_35236 === (7))){
var inst_35231 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
var statearr_35244_37008 = state_35235__$1;
(statearr_35244_37008[(2)] = inst_35231);

(statearr_35244_37008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (1))){
var inst_35214 = init;
var inst_35215 = inst_35214;
var state_35235__$1 = (function (){var statearr_35245 = state_35235;
(statearr_35245[(7)] = inst_35215);

return statearr_35245;
})();
var statearr_35250_37009 = state_35235__$1;
(statearr_35250_37009[(2)] = null);

(statearr_35250_37009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (4))){
var inst_35218 = (state_35235[(8)]);
var inst_35218__$1 = (state_35235[(2)]);
var inst_35219 = (inst_35218__$1 == null);
var state_35235__$1 = (function (){var statearr_35251 = state_35235;
(statearr_35251[(8)] = inst_35218__$1);

return statearr_35251;
})();
if(cljs.core.truth_(inst_35219)){
var statearr_35252_37011 = state_35235__$1;
(statearr_35252_37011[(1)] = (5));

} else {
var statearr_35253_37012 = state_35235__$1;
(statearr_35253_37012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (6))){
var inst_35215 = (state_35235[(7)]);
var inst_35218 = (state_35235[(8)]);
var inst_35222 = (state_35235[(9)]);
var inst_35222__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35215,inst_35218) : f.call(null,inst_35215,inst_35218));
var inst_35223 = cljs.core.reduced_QMARK_(inst_35222__$1);
var state_35235__$1 = (function (){var statearr_35254 = state_35235;
(statearr_35254[(9)] = inst_35222__$1);

return statearr_35254;
})();
if(inst_35223){
var statearr_35255_37013 = state_35235__$1;
(statearr_35255_37013[(1)] = (8));

} else {
var statearr_35256_37014 = state_35235__$1;
(statearr_35256_37014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (3))){
var inst_35233 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35235__$1,inst_35233);
} else {
if((state_val_35236 === (2))){
var state_35235__$1 = state_35235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35235__$1,(4),ch);
} else {
if((state_val_35236 === (9))){
var inst_35222 = (state_35235[(9)]);
var inst_35215 = inst_35222;
var state_35235__$1 = (function (){var statearr_35257 = state_35235;
(statearr_35257[(7)] = inst_35215);

return statearr_35257;
})();
var statearr_35259_37018 = state_35235__$1;
(statearr_35259_37018[(2)] = null);

(statearr_35259_37018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (5))){
var inst_35215 = (state_35235[(7)]);
var state_35235__$1 = state_35235;
var statearr_35261_37019 = state_35235__$1;
(statearr_35261_37019[(2)] = inst_35215);

(statearr_35261_37019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (10))){
var inst_35229 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
var statearr_35262_37024 = state_35235__$1;
(statearr_35262_37024[(2)] = inst_35229);

(statearr_35262_37024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (8))){
var inst_35222 = (state_35235[(9)]);
var inst_35225 = cljs.core.deref(inst_35222);
var state_35235__$1 = state_35235;
var statearr_35263_37025 = state_35235__$1;
(statearr_35263_37025[(2)] = inst_35225);

(statearr_35263_37025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34210__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34210__auto____0 = (function (){
var statearr_35264 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35264[(0)] = cljs$core$async$reduce_$_state_machine__34210__auto__);

(statearr_35264[(1)] = (1));

return statearr_35264;
});
var cljs$core$async$reduce_$_state_machine__34210__auto____1 = (function (state_35235){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_35235);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e35265){var ex__34213__auto__ = e35265;
var statearr_35266_37026 = state_35235;
(statearr_35266_37026[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_35235[(4)]))){
var statearr_35267_37027 = state_35235;
(statearr_35267_37027[(1)] = cljs.core.first((state_35235[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37028 = state_35235;
state_35235 = G__37028;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34210__auto__ = function(state_35235){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34210__auto____1.call(this,state_35235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34210__auto____0;
cljs$core$async$reduce_$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34210__auto____1;
return cljs$core$async$reduce_$_state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_35268 = f__34413__auto__();
(statearr_35268[(6)] = c__34412__auto__);

return statearr_35268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));

return c__34412__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34412__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_35274){
var state_val_35275 = (state_35274[(1)]);
if((state_val_35275 === (1))){
var inst_35269 = cljs.core.async.reduce(f__$1,init,ch);
var state_35274__$1 = state_35274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35274__$1,(2),inst_35269);
} else {
if((state_val_35275 === (2))){
var inst_35271 = (state_35274[(2)]);
var inst_35272 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35271) : f__$1.call(null,inst_35271));
var state_35274__$1 = state_35274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35274__$1,inst_35272);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34210__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34210__auto____0 = (function (){
var statearr_35276 = [null,null,null,null,null,null,null];
(statearr_35276[(0)] = cljs$core$async$transduce_$_state_machine__34210__auto__);

(statearr_35276[(1)] = (1));

return statearr_35276;
});
var cljs$core$async$transduce_$_state_machine__34210__auto____1 = (function (state_35274){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_35274);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e35277){var ex__34213__auto__ = e35277;
var statearr_35278_37042 = state_35274;
(statearr_35278_37042[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_35274[(4)]))){
var statearr_35279_37043 = state_35274;
(statearr_35279_37043[(1)] = cljs.core.first((state_35274[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37044 = state_35274;
state_35274 = G__37044;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34210__auto__ = function(state_35274){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34210__auto____1.call(this,state_35274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34210__auto____0;
cljs$core$async$transduce_$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34210__auto____1;
return cljs$core$async$transduce_$_state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_35280 = f__34413__auto__();
(statearr_35280[(6)] = c__34412__auto__);

return statearr_35280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));

return c__34412__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__35284 = arguments.length;
switch (G__35284) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34412__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_35310){
var state_val_35311 = (state_35310[(1)]);
if((state_val_35311 === (7))){
var inst_35291 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
var statearr_35312_37046 = state_35310__$1;
(statearr_35312_37046[(2)] = inst_35291);

(statearr_35312_37046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (1))){
var inst_35285 = cljs.core.seq(coll);
var inst_35286 = inst_35285;
var state_35310__$1 = (function (){var statearr_35313 = state_35310;
(statearr_35313[(7)] = inst_35286);

return statearr_35313;
})();
var statearr_35314_37047 = state_35310__$1;
(statearr_35314_37047[(2)] = null);

(statearr_35314_37047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (4))){
var inst_35286 = (state_35310[(7)]);
var inst_35289 = cljs.core.first(inst_35286);
var state_35310__$1 = state_35310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35310__$1,(7),ch,inst_35289);
} else {
if((state_val_35311 === (13))){
var inst_35304 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
var statearr_35315_37048 = state_35310__$1;
(statearr_35315_37048[(2)] = inst_35304);

(statearr_35315_37048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (6))){
var inst_35294 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
if(cljs.core.truth_(inst_35294)){
var statearr_35316_37049 = state_35310__$1;
(statearr_35316_37049[(1)] = (8));

} else {
var statearr_35317_37050 = state_35310__$1;
(statearr_35317_37050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (3))){
var inst_35308 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35310__$1,inst_35308);
} else {
if((state_val_35311 === (12))){
var state_35310__$1 = state_35310;
var statearr_35319_37057 = state_35310__$1;
(statearr_35319_37057[(2)] = null);

(statearr_35319_37057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (2))){
var inst_35286 = (state_35310[(7)]);
var state_35310__$1 = state_35310;
if(cljs.core.truth_(inst_35286)){
var statearr_35320_37058 = state_35310__$1;
(statearr_35320_37058[(1)] = (4));

} else {
var statearr_35321_37059 = state_35310__$1;
(statearr_35321_37059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (11))){
var inst_35301 = cljs.core.async.close_BANG_(ch);
var state_35310__$1 = state_35310;
var statearr_35322_37060 = state_35310__$1;
(statearr_35322_37060[(2)] = inst_35301);

(statearr_35322_37060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (9))){
var state_35310__$1 = state_35310;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35323_37061 = state_35310__$1;
(statearr_35323_37061[(1)] = (11));

} else {
var statearr_35324_37062 = state_35310__$1;
(statearr_35324_37062[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (5))){
var inst_35286 = (state_35310[(7)]);
var state_35310__$1 = state_35310;
var statearr_35325_37063 = state_35310__$1;
(statearr_35325_37063[(2)] = inst_35286);

(statearr_35325_37063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (10))){
var inst_35306 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
var statearr_35326_37064 = state_35310__$1;
(statearr_35326_37064[(2)] = inst_35306);

(statearr_35326_37064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (8))){
var inst_35286 = (state_35310[(7)]);
var inst_35296 = cljs.core.next(inst_35286);
var inst_35286__$1 = inst_35296;
var state_35310__$1 = (function (){var statearr_35327 = state_35310;
(statearr_35327[(7)] = inst_35286__$1);

return statearr_35327;
})();
var statearr_35328_37071 = state_35310__$1;
(statearr_35328_37071[(2)] = null);

(statearr_35328_37071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34210__auto__ = null;
var cljs$core$async$state_machine__34210__auto____0 = (function (){
var statearr_35329 = [null,null,null,null,null,null,null,null];
(statearr_35329[(0)] = cljs$core$async$state_machine__34210__auto__);

(statearr_35329[(1)] = (1));

return statearr_35329;
});
var cljs$core$async$state_machine__34210__auto____1 = (function (state_35310){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_35310);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e35330){var ex__34213__auto__ = e35330;
var statearr_35331_37072 = state_35310;
(statearr_35331_37072[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_35310[(4)]))){
var statearr_35332_37073 = state_35310;
(statearr_35332_37073[(1)] = cljs.core.first((state_35310[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37074 = state_35310;
state_35310 = G__37074;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$state_machine__34210__auto__ = function(state_35310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34210__auto____1.call(this,state_35310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34210__auto____0;
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34210__auto____1;
return cljs$core$async$state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_35333 = f__34413__auto__();
(statearr_35333[(6)] = c__34412__auto__);

return statearr_35333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));

return c__34412__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35335 = arguments.length;
switch (G__35335) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37076 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37076(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37083 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37083(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37084 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37084(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37085 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37085(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35338 = (function (ch,cs,meta35339){
this.ch = ch;
this.cs = cs;
this.meta35339 = meta35339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35340,meta35339__$1){
var self__ = this;
var _35340__$1 = this;
return (new cljs.core.async.t_cljs$core$async35338(self__.ch,self__.cs,meta35339__$1));
}));

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35340){
var self__ = this;
var _35340__$1 = this;
return self__.meta35339;
}));

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35339","meta35339",-1528690936,null)], null);
}));

(cljs.core.async.t_cljs$core$async35338.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35338");

(cljs.core.async.t_cljs$core$async35338.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35338");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35338.
 */
cljs.core.async.__GT_t_cljs$core$async35338 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35338(ch__$1,cs__$1,meta35339){
return (new cljs.core.async.t_cljs$core$async35338(ch__$1,cs__$1,meta35339));
});

}

return (new cljs.core.async.t_cljs$core$async35338(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34412__auto___37093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_35475){
var state_val_35476 = (state_35475[(1)]);
if((state_val_35476 === (7))){
var inst_35471 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35477_37094 = state_35475__$1;
(statearr_35477_37094[(2)] = inst_35471);

(statearr_35477_37094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (20))){
var inst_35374 = (state_35475[(7)]);
var inst_35386 = cljs.core.first(inst_35374);
var inst_35387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35386,(0),null);
var inst_35388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35386,(1),null);
var state_35475__$1 = (function (){var statearr_35478 = state_35475;
(statearr_35478[(8)] = inst_35387);

return statearr_35478;
})();
if(cljs.core.truth_(inst_35388)){
var statearr_35479_37095 = state_35475__$1;
(statearr_35479_37095[(1)] = (22));

} else {
var statearr_35480_37096 = state_35475__$1;
(statearr_35480_37096[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (27))){
var inst_35343 = (state_35475[(9)]);
var inst_35423 = (state_35475[(10)]);
var inst_35416 = (state_35475[(11)]);
var inst_35418 = (state_35475[(12)]);
var inst_35423__$1 = cljs.core._nth(inst_35416,inst_35418);
var inst_35424 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35423__$1,inst_35343,done);
var state_35475__$1 = (function (){var statearr_35482 = state_35475;
(statearr_35482[(10)] = inst_35423__$1);

return statearr_35482;
})();
if(cljs.core.truth_(inst_35424)){
var statearr_35483_37098 = state_35475__$1;
(statearr_35483_37098[(1)] = (30));

} else {
var statearr_35484_37099 = state_35475__$1;
(statearr_35484_37099[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (1))){
var state_35475__$1 = state_35475;
var statearr_35485_37100 = state_35475__$1;
(statearr_35485_37100[(2)] = null);

(statearr_35485_37100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (24))){
var inst_35374 = (state_35475[(7)]);
var inst_35393 = (state_35475[(2)]);
var inst_35394 = cljs.core.next(inst_35374);
var inst_35352 = inst_35394;
var inst_35353 = null;
var inst_35354 = (0);
var inst_35355 = (0);
var state_35475__$1 = (function (){var statearr_35486 = state_35475;
(statearr_35486[(13)] = inst_35354);

(statearr_35486[(14)] = inst_35352);

(statearr_35486[(15)] = inst_35355);

(statearr_35486[(16)] = inst_35353);

(statearr_35486[(17)] = inst_35393);

return statearr_35486;
})();
var statearr_35487_37106 = state_35475__$1;
(statearr_35487_37106[(2)] = null);

(statearr_35487_37106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (39))){
var state_35475__$1 = state_35475;
var statearr_35492_37107 = state_35475__$1;
(statearr_35492_37107[(2)] = null);

(statearr_35492_37107[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (4))){
var inst_35343 = (state_35475[(9)]);
var inst_35343__$1 = (state_35475[(2)]);
var inst_35344 = (inst_35343__$1 == null);
var state_35475__$1 = (function (){var statearr_35494 = state_35475;
(statearr_35494[(9)] = inst_35343__$1);

return statearr_35494;
})();
if(cljs.core.truth_(inst_35344)){
var statearr_35495_37108 = state_35475__$1;
(statearr_35495_37108[(1)] = (5));

} else {
var statearr_35496_37109 = state_35475__$1;
(statearr_35496_37109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (15))){
var inst_35354 = (state_35475[(13)]);
var inst_35352 = (state_35475[(14)]);
var inst_35355 = (state_35475[(15)]);
var inst_35353 = (state_35475[(16)]);
var inst_35370 = (state_35475[(2)]);
var inst_35371 = (inst_35355 + (1));
var tmp35489 = inst_35354;
var tmp35490 = inst_35352;
var tmp35491 = inst_35353;
var inst_35352__$1 = tmp35490;
var inst_35353__$1 = tmp35491;
var inst_35354__$1 = tmp35489;
var inst_35355__$1 = inst_35371;
var state_35475__$1 = (function (){var statearr_35497 = state_35475;
(statearr_35497[(13)] = inst_35354__$1);

(statearr_35497[(18)] = inst_35370);

(statearr_35497[(14)] = inst_35352__$1);

(statearr_35497[(15)] = inst_35355__$1);

(statearr_35497[(16)] = inst_35353__$1);

return statearr_35497;
})();
var statearr_35498_37110 = state_35475__$1;
(statearr_35498_37110[(2)] = null);

(statearr_35498_37110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (21))){
var inst_35397 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35502_37112 = state_35475__$1;
(statearr_35502_37112[(2)] = inst_35397);

(statearr_35502_37112[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (31))){
var inst_35423 = (state_35475[(10)]);
var inst_35427 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35423);
var state_35475__$1 = state_35475;
var statearr_35503_37113 = state_35475__$1;
(statearr_35503_37113[(2)] = inst_35427);

(statearr_35503_37113[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (32))){
var inst_35416 = (state_35475[(11)]);
var inst_35415 = (state_35475[(19)]);
var inst_35418 = (state_35475[(12)]);
var inst_35417 = (state_35475[(20)]);
var inst_35429 = (state_35475[(2)]);
var inst_35430 = (inst_35418 + (1));
var tmp35499 = inst_35416;
var tmp35500 = inst_35415;
var tmp35501 = inst_35417;
var inst_35415__$1 = tmp35500;
var inst_35416__$1 = tmp35499;
var inst_35417__$1 = tmp35501;
var inst_35418__$1 = inst_35430;
var state_35475__$1 = (function (){var statearr_35504 = state_35475;
(statearr_35504[(11)] = inst_35416__$1);

(statearr_35504[(19)] = inst_35415__$1);

(statearr_35504[(12)] = inst_35418__$1);

(statearr_35504[(21)] = inst_35429);

(statearr_35504[(20)] = inst_35417__$1);

return statearr_35504;
})();
var statearr_35505_37114 = state_35475__$1;
(statearr_35505_37114[(2)] = null);

(statearr_35505_37114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (40))){
var inst_35442 = (state_35475[(22)]);
var inst_35448 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35442);
var state_35475__$1 = state_35475;
var statearr_35506_37116 = state_35475__$1;
(statearr_35506_37116[(2)] = inst_35448);

(statearr_35506_37116[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (33))){
var inst_35433 = (state_35475[(23)]);
var inst_35435 = cljs.core.chunked_seq_QMARK_(inst_35433);
var state_35475__$1 = state_35475;
if(inst_35435){
var statearr_35508_37118 = state_35475__$1;
(statearr_35508_37118[(1)] = (36));

} else {
var statearr_35509_37119 = state_35475__$1;
(statearr_35509_37119[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (13))){
var inst_35364 = (state_35475[(24)]);
var inst_35367 = cljs.core.async.close_BANG_(inst_35364);
var state_35475__$1 = state_35475;
var statearr_35511_37120 = state_35475__$1;
(statearr_35511_37120[(2)] = inst_35367);

(statearr_35511_37120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (22))){
var inst_35387 = (state_35475[(8)]);
var inst_35390 = cljs.core.async.close_BANG_(inst_35387);
var state_35475__$1 = state_35475;
var statearr_35512_37121 = state_35475__$1;
(statearr_35512_37121[(2)] = inst_35390);

(statearr_35512_37121[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (36))){
var inst_35433 = (state_35475[(23)]);
var inst_35437 = cljs.core.chunk_first(inst_35433);
var inst_35438 = cljs.core.chunk_rest(inst_35433);
var inst_35439 = cljs.core.count(inst_35437);
var inst_35415 = inst_35438;
var inst_35416 = inst_35437;
var inst_35417 = inst_35439;
var inst_35418 = (0);
var state_35475__$1 = (function (){var statearr_35513 = state_35475;
(statearr_35513[(11)] = inst_35416);

(statearr_35513[(19)] = inst_35415);

(statearr_35513[(12)] = inst_35418);

(statearr_35513[(20)] = inst_35417);

return statearr_35513;
})();
var statearr_35514_37124 = state_35475__$1;
(statearr_35514_37124[(2)] = null);

(statearr_35514_37124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (41))){
var inst_35433 = (state_35475[(23)]);
var inst_35450 = (state_35475[(2)]);
var inst_35451 = cljs.core.next(inst_35433);
var inst_35415 = inst_35451;
var inst_35416 = null;
var inst_35417 = (0);
var inst_35418 = (0);
var state_35475__$1 = (function (){var statearr_35515 = state_35475;
(statearr_35515[(25)] = inst_35450);

(statearr_35515[(11)] = inst_35416);

(statearr_35515[(19)] = inst_35415);

(statearr_35515[(12)] = inst_35418);

(statearr_35515[(20)] = inst_35417);

return statearr_35515;
})();
var statearr_35516_37126 = state_35475__$1;
(statearr_35516_37126[(2)] = null);

(statearr_35516_37126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (43))){
var state_35475__$1 = state_35475;
var statearr_35517_37127 = state_35475__$1;
(statearr_35517_37127[(2)] = null);

(statearr_35517_37127[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (29))){
var inst_35459 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35518_37129 = state_35475__$1;
(statearr_35518_37129[(2)] = inst_35459);

(statearr_35518_37129[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (44))){
var inst_35468 = (state_35475[(2)]);
var state_35475__$1 = (function (){var statearr_35519 = state_35475;
(statearr_35519[(26)] = inst_35468);

return statearr_35519;
})();
var statearr_35520_37131 = state_35475__$1;
(statearr_35520_37131[(2)] = null);

(statearr_35520_37131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (6))){
var inst_35407 = (state_35475[(27)]);
var inst_35406 = cljs.core.deref(cs);
var inst_35407__$1 = cljs.core.keys(inst_35406);
var inst_35408 = cljs.core.count(inst_35407__$1);
var inst_35409 = cljs.core.reset_BANG_(dctr,inst_35408);
var inst_35414 = cljs.core.seq(inst_35407__$1);
var inst_35415 = inst_35414;
var inst_35416 = null;
var inst_35417 = (0);
var inst_35418 = (0);
var state_35475__$1 = (function (){var statearr_35522 = state_35475;
(statearr_35522[(11)] = inst_35416);

(statearr_35522[(19)] = inst_35415);

(statearr_35522[(12)] = inst_35418);

(statearr_35522[(27)] = inst_35407__$1);

(statearr_35522[(28)] = inst_35409);

(statearr_35522[(20)] = inst_35417);

return statearr_35522;
})();
var statearr_35523_37132 = state_35475__$1;
(statearr_35523_37132[(2)] = null);

(statearr_35523_37132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (28))){
var inst_35415 = (state_35475[(19)]);
var inst_35433 = (state_35475[(23)]);
var inst_35433__$1 = cljs.core.seq(inst_35415);
var state_35475__$1 = (function (){var statearr_35524 = state_35475;
(statearr_35524[(23)] = inst_35433__$1);

return statearr_35524;
})();
if(inst_35433__$1){
var statearr_35525_37134 = state_35475__$1;
(statearr_35525_37134[(1)] = (33));

} else {
var statearr_35526_37135 = state_35475__$1;
(statearr_35526_37135[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (25))){
var inst_35418 = (state_35475[(12)]);
var inst_35417 = (state_35475[(20)]);
var inst_35420 = (inst_35418 < inst_35417);
var inst_35421 = inst_35420;
var state_35475__$1 = state_35475;
if(cljs.core.truth_(inst_35421)){
var statearr_35527_37140 = state_35475__$1;
(statearr_35527_37140[(1)] = (27));

} else {
var statearr_35528_37141 = state_35475__$1;
(statearr_35528_37141[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (34))){
var state_35475__$1 = state_35475;
var statearr_35529_37142 = state_35475__$1;
(statearr_35529_37142[(2)] = null);

(statearr_35529_37142[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (17))){
var state_35475__$1 = state_35475;
var statearr_35530_37143 = state_35475__$1;
(statearr_35530_37143[(2)] = null);

(statearr_35530_37143[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (3))){
var inst_35473 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35475__$1,inst_35473);
} else {
if((state_val_35476 === (12))){
var inst_35402 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35532_37144 = state_35475__$1;
(statearr_35532_37144[(2)] = inst_35402);

(statearr_35532_37144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (2))){
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35475__$1,(4),ch);
} else {
if((state_val_35476 === (23))){
var state_35475__$1 = state_35475;
var statearr_35536_37145 = state_35475__$1;
(statearr_35536_37145[(2)] = null);

(statearr_35536_37145[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (35))){
var inst_35457 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35538_37146 = state_35475__$1;
(statearr_35538_37146[(2)] = inst_35457);

(statearr_35538_37146[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (19))){
var inst_35374 = (state_35475[(7)]);
var inst_35378 = cljs.core.chunk_first(inst_35374);
var inst_35379 = cljs.core.chunk_rest(inst_35374);
var inst_35380 = cljs.core.count(inst_35378);
var inst_35352 = inst_35379;
var inst_35353 = inst_35378;
var inst_35354 = inst_35380;
var inst_35355 = (0);
var state_35475__$1 = (function (){var statearr_35539 = state_35475;
(statearr_35539[(13)] = inst_35354);

(statearr_35539[(14)] = inst_35352);

(statearr_35539[(15)] = inst_35355);

(statearr_35539[(16)] = inst_35353);

return statearr_35539;
})();
var statearr_35540_37147 = state_35475__$1;
(statearr_35540_37147[(2)] = null);

(statearr_35540_37147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (11))){
var inst_35352 = (state_35475[(14)]);
var inst_35374 = (state_35475[(7)]);
var inst_35374__$1 = cljs.core.seq(inst_35352);
var state_35475__$1 = (function (){var statearr_35541 = state_35475;
(statearr_35541[(7)] = inst_35374__$1);

return statearr_35541;
})();
if(inst_35374__$1){
var statearr_35542_37149 = state_35475__$1;
(statearr_35542_37149[(1)] = (16));

} else {
var statearr_35544_37150 = state_35475__$1;
(statearr_35544_37150[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (9))){
var inst_35404 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35545_37151 = state_35475__$1;
(statearr_35545_37151[(2)] = inst_35404);

(statearr_35545_37151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (5))){
var inst_35350 = cljs.core.deref(cs);
var inst_35351 = cljs.core.seq(inst_35350);
var inst_35352 = inst_35351;
var inst_35353 = null;
var inst_35354 = (0);
var inst_35355 = (0);
var state_35475__$1 = (function (){var statearr_35548 = state_35475;
(statearr_35548[(13)] = inst_35354);

(statearr_35548[(14)] = inst_35352);

(statearr_35548[(15)] = inst_35355);

(statearr_35548[(16)] = inst_35353);

return statearr_35548;
})();
var statearr_35551_37152 = state_35475__$1;
(statearr_35551_37152[(2)] = null);

(statearr_35551_37152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (14))){
var state_35475__$1 = state_35475;
var statearr_35553_37153 = state_35475__$1;
(statearr_35553_37153[(2)] = null);

(statearr_35553_37153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (45))){
var inst_35465 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35554_37155 = state_35475__$1;
(statearr_35554_37155[(2)] = inst_35465);

(statearr_35554_37155[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (26))){
var inst_35407 = (state_35475[(27)]);
var inst_35461 = (state_35475[(2)]);
var inst_35462 = cljs.core.seq(inst_35407);
var state_35475__$1 = (function (){var statearr_35555 = state_35475;
(statearr_35555[(29)] = inst_35461);

return statearr_35555;
})();
if(inst_35462){
var statearr_35556_37156 = state_35475__$1;
(statearr_35556_37156[(1)] = (42));

} else {
var statearr_35557_37157 = state_35475__$1;
(statearr_35557_37157[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (16))){
var inst_35374 = (state_35475[(7)]);
var inst_35376 = cljs.core.chunked_seq_QMARK_(inst_35374);
var state_35475__$1 = state_35475;
if(inst_35376){
var statearr_35558_37159 = state_35475__$1;
(statearr_35558_37159[(1)] = (19));

} else {
var statearr_35559_37160 = state_35475__$1;
(statearr_35559_37160[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (38))){
var inst_35454 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35560_37166 = state_35475__$1;
(statearr_35560_37166[(2)] = inst_35454);

(statearr_35560_37166[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (30))){
var state_35475__$1 = state_35475;
var statearr_35561_37167 = state_35475__$1;
(statearr_35561_37167[(2)] = null);

(statearr_35561_37167[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (10))){
var inst_35355 = (state_35475[(15)]);
var inst_35353 = (state_35475[(16)]);
var inst_35363 = cljs.core._nth(inst_35353,inst_35355);
var inst_35364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35363,(0),null);
var inst_35365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35363,(1),null);
var state_35475__$1 = (function (){var statearr_35562 = state_35475;
(statearr_35562[(24)] = inst_35364);

return statearr_35562;
})();
if(cljs.core.truth_(inst_35365)){
var statearr_35563_37168 = state_35475__$1;
(statearr_35563_37168[(1)] = (13));

} else {
var statearr_35564_37169 = state_35475__$1;
(statearr_35564_37169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (18))){
var inst_35400 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35565_37170 = state_35475__$1;
(statearr_35565_37170[(2)] = inst_35400);

(statearr_35565_37170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (42))){
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35475__$1,(45),dchan);
} else {
if((state_val_35476 === (37))){
var inst_35343 = (state_35475[(9)]);
var inst_35442 = (state_35475[(22)]);
var inst_35433 = (state_35475[(23)]);
var inst_35442__$1 = cljs.core.first(inst_35433);
var inst_35445 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35442__$1,inst_35343,done);
var state_35475__$1 = (function (){var statearr_35566 = state_35475;
(statearr_35566[(22)] = inst_35442__$1);

return statearr_35566;
})();
if(cljs.core.truth_(inst_35445)){
var statearr_35567_37171 = state_35475__$1;
(statearr_35567_37171[(1)] = (39));

} else {
var statearr_35568_37176 = state_35475__$1;
(statearr_35568_37176[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (8))){
var inst_35354 = (state_35475[(13)]);
var inst_35355 = (state_35475[(15)]);
var inst_35357 = (inst_35355 < inst_35354);
var inst_35358 = inst_35357;
var state_35475__$1 = state_35475;
if(cljs.core.truth_(inst_35358)){
var statearr_35569_37177 = state_35475__$1;
(statearr_35569_37177[(1)] = (10));

} else {
var statearr_35571_37178 = state_35475__$1;
(statearr_35571_37178[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__34210__auto__ = null;
var cljs$core$async$mult_$_state_machine__34210__auto____0 = (function (){
var statearr_35572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35572[(0)] = cljs$core$async$mult_$_state_machine__34210__auto__);

(statearr_35572[(1)] = (1));

return statearr_35572;
});
var cljs$core$async$mult_$_state_machine__34210__auto____1 = (function (state_35475){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_35475);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e35573){var ex__34213__auto__ = e35573;
var statearr_35574_37186 = state_35475;
(statearr_35574_37186[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_35475[(4)]))){
var statearr_35575_37187 = state_35475;
(statearr_35575_37187[(1)] = cljs.core.first((state_35475[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37188 = state_35475;
state_35475 = G__37188;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34210__auto__ = function(state_35475){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34210__auto____1.call(this,state_35475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34210__auto____0;
cljs$core$async$mult_$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34210__auto____1;
return cljs$core$async$mult_$_state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_35576 = f__34413__auto__();
(statearr_35576[(6)] = c__34412__auto___37093);

return statearr_35576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35579 = arguments.length;
switch (G__35579) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37200 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37200(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37201 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37201(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37202 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37202(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37205 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37205(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37206 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37206(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37207 = arguments.length;
var i__4737__auto___37208 = (0);
while(true){
if((i__4737__auto___37208 < len__4736__auto___37207)){
args__4742__auto__.push((arguments[i__4737__auto___37208]));

var G__37209 = (i__4737__auto___37208 + (1));
i__4737__auto___37208 = G__37209;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35633){
var map__35634 = p__35633;
var map__35634__$1 = (((((!((map__35634 == null))))?(((((map__35634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35634):map__35634);
var opts = map__35634__$1;
var statearr_35636_37210 = state;
(statearr_35636_37210[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35637_37211 = state;
(statearr_35637_37211[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35638_37212 = state;
(statearr_35638_37212[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35625){
var G__35626 = cljs.core.first(seq35625);
var seq35625__$1 = cljs.core.next(seq35625);
var G__35627 = cljs.core.first(seq35625__$1);
var seq35625__$2 = cljs.core.next(seq35625__$1);
var G__35628 = cljs.core.first(seq35625__$2);
var seq35625__$3 = cljs.core.next(seq35625__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35626,G__35627,G__35628,seq35625__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35639 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35640){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35640 = meta35640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35641,meta35640__$1){
var self__ = this;
var _35641__$1 = this;
return (new cljs.core.async.t_cljs$core$async35639(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35640__$1));
}));

(cljs.core.async.t_cljs$core$async35639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35641){
var self__ = this;
var _35641__$1 = this;
return self__.meta35640;
}));

(cljs.core.async.t_cljs$core$async35639.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35639.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35639.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35639.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35639.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35639.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35639.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35640","meta35640",-190146781,null)], null);
}));

(cljs.core.async.t_cljs$core$async35639.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35639");

(cljs.core.async.t_cljs$core$async35639.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35639");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35639.
 */
cljs.core.async.__GT_t_cljs$core$async35639 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35639(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35640){
return (new cljs.core.async.t_cljs$core$async35639(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35640));
});

}

return (new cljs.core.async.t_cljs$core$async35639(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34412__auto___37255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_35762){
var state_val_35763 = (state_35762[(1)]);
if((state_val_35763 === (7))){
var inst_35671 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
var statearr_35764_37262 = state_35762__$1;
(statearr_35764_37262[(2)] = inst_35671);

(statearr_35764_37262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (20))){
var inst_35683 = (state_35762[(7)]);
var state_35762__$1 = state_35762;
var statearr_35765_37263 = state_35762__$1;
(statearr_35765_37263[(2)] = inst_35683);

(statearr_35765_37263[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (27))){
var state_35762__$1 = state_35762;
var statearr_35766_37264 = state_35762__$1;
(statearr_35766_37264[(2)] = null);

(statearr_35766_37264[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (1))){
var inst_35658 = (state_35762[(8)]);
var inst_35658__$1 = calc_state();
var inst_35660 = (inst_35658__$1 == null);
var inst_35661 = cljs.core.not(inst_35660);
var state_35762__$1 = (function (){var statearr_35767 = state_35762;
(statearr_35767[(8)] = inst_35658__$1);

return statearr_35767;
})();
if(inst_35661){
var statearr_35768_37267 = state_35762__$1;
(statearr_35768_37267[(1)] = (2));

} else {
var statearr_35769_37268 = state_35762__$1;
(statearr_35769_37268[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (24))){
var inst_35719 = (state_35762[(9)]);
var inst_35734 = (state_35762[(10)]);
var inst_35708 = (state_35762[(11)]);
var inst_35734__$1 = (inst_35708.cljs$core$IFn$_invoke$arity$1 ? inst_35708.cljs$core$IFn$_invoke$arity$1(inst_35719) : inst_35708.call(null,inst_35719));
var state_35762__$1 = (function (){var statearr_35770 = state_35762;
(statearr_35770[(10)] = inst_35734__$1);

return statearr_35770;
})();
if(cljs.core.truth_(inst_35734__$1)){
var statearr_35771_37275 = state_35762__$1;
(statearr_35771_37275[(1)] = (29));

} else {
var statearr_35772_37276 = state_35762__$1;
(statearr_35772_37276[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (4))){
var inst_35674 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
if(cljs.core.truth_(inst_35674)){
var statearr_35773_37277 = state_35762__$1;
(statearr_35773_37277[(1)] = (8));

} else {
var statearr_35774_37278 = state_35762__$1;
(statearr_35774_37278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (15))){
var inst_35701 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
if(cljs.core.truth_(inst_35701)){
var statearr_35775_37280 = state_35762__$1;
(statearr_35775_37280[(1)] = (19));

} else {
var statearr_35776_37281 = state_35762__$1;
(statearr_35776_37281[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (21))){
var inst_35706 = (state_35762[(12)]);
var inst_35706__$1 = (state_35762[(2)]);
var inst_35708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35706__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35706__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35706__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35762__$1 = (function (){var statearr_35780 = state_35762;
(statearr_35780[(12)] = inst_35706__$1);

(statearr_35780[(13)] = inst_35709);

(statearr_35780[(11)] = inst_35708);

return statearr_35780;
})();
return cljs.core.async.ioc_alts_BANG_(state_35762__$1,(22),inst_35711);
} else {
if((state_val_35763 === (31))){
var inst_35744 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
if(cljs.core.truth_(inst_35744)){
var statearr_35781_37287 = state_35762__$1;
(statearr_35781_37287[(1)] = (32));

} else {
var statearr_35782_37288 = state_35762__$1;
(statearr_35782_37288[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (32))){
var inst_35718 = (state_35762[(14)]);
var state_35762__$1 = state_35762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35762__$1,(35),out,inst_35718);
} else {
if((state_val_35763 === (33))){
var inst_35706 = (state_35762[(12)]);
var inst_35683 = inst_35706;
var state_35762__$1 = (function (){var statearr_35787 = state_35762;
(statearr_35787[(7)] = inst_35683);

return statearr_35787;
})();
var statearr_35789_37299 = state_35762__$1;
(statearr_35789_37299[(2)] = null);

(statearr_35789_37299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (13))){
var inst_35683 = (state_35762[(7)]);
var inst_35690 = inst_35683.cljs$lang$protocol_mask$partition0$;
var inst_35691 = (inst_35690 & (64));
var inst_35692 = inst_35683.cljs$core$ISeq$;
var inst_35693 = (cljs.core.PROTOCOL_SENTINEL === inst_35692);
var inst_35694 = ((inst_35691) || (inst_35693));
var state_35762__$1 = state_35762;
if(cljs.core.truth_(inst_35694)){
var statearr_35790_37309 = state_35762__$1;
(statearr_35790_37309[(1)] = (16));

} else {
var statearr_35791_37310 = state_35762__$1;
(statearr_35791_37310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (22))){
var inst_35719 = (state_35762[(9)]);
var inst_35718 = (state_35762[(14)]);
var inst_35717 = (state_35762[(2)]);
var inst_35718__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35717,(0),null);
var inst_35719__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35717,(1),null);
var inst_35720 = (inst_35718__$1 == null);
var inst_35721 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35719__$1,change);
var inst_35722 = ((inst_35720) || (inst_35721));
var state_35762__$1 = (function (){var statearr_35795 = state_35762;
(statearr_35795[(9)] = inst_35719__$1);

(statearr_35795[(14)] = inst_35718__$1);

return statearr_35795;
})();
if(cljs.core.truth_(inst_35722)){
var statearr_35796_37315 = state_35762__$1;
(statearr_35796_37315[(1)] = (23));

} else {
var statearr_35797_37316 = state_35762__$1;
(statearr_35797_37316[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (36))){
var inst_35706 = (state_35762[(12)]);
var inst_35683 = inst_35706;
var state_35762__$1 = (function (){var statearr_35798 = state_35762;
(statearr_35798[(7)] = inst_35683);

return statearr_35798;
})();
var statearr_35801_37320 = state_35762__$1;
(statearr_35801_37320[(2)] = null);

(statearr_35801_37320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (29))){
var inst_35734 = (state_35762[(10)]);
var state_35762__$1 = state_35762;
var statearr_35803_37321 = state_35762__$1;
(statearr_35803_37321[(2)] = inst_35734);

(statearr_35803_37321[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (6))){
var state_35762__$1 = state_35762;
var statearr_35804_37322 = state_35762__$1;
(statearr_35804_37322[(2)] = false);

(statearr_35804_37322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (28))){
var inst_35729 = (state_35762[(2)]);
var inst_35730 = calc_state();
var inst_35683 = inst_35730;
var state_35762__$1 = (function (){var statearr_35808 = state_35762;
(statearr_35808[(7)] = inst_35683);

(statearr_35808[(15)] = inst_35729);

return statearr_35808;
})();
var statearr_35809_37323 = state_35762__$1;
(statearr_35809_37323[(2)] = null);

(statearr_35809_37323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (25))){
var inst_35758 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
var statearr_35813_37324 = state_35762__$1;
(statearr_35813_37324[(2)] = inst_35758);

(statearr_35813_37324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (34))){
var inst_35756 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
var statearr_35817_37325 = state_35762__$1;
(statearr_35817_37325[(2)] = inst_35756);

(statearr_35817_37325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (17))){
var state_35762__$1 = state_35762;
var statearr_35818_37326 = state_35762__$1;
(statearr_35818_37326[(2)] = false);

(statearr_35818_37326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (3))){
var state_35762__$1 = state_35762;
var statearr_35822_37327 = state_35762__$1;
(statearr_35822_37327[(2)] = false);

(statearr_35822_37327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (12))){
var inst_35760 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35762__$1,inst_35760);
} else {
if((state_val_35763 === (2))){
var inst_35658 = (state_35762[(8)]);
var inst_35663 = inst_35658.cljs$lang$protocol_mask$partition0$;
var inst_35664 = (inst_35663 & (64));
var inst_35665 = inst_35658.cljs$core$ISeq$;
var inst_35666 = (cljs.core.PROTOCOL_SENTINEL === inst_35665);
var inst_35667 = ((inst_35664) || (inst_35666));
var state_35762__$1 = state_35762;
if(cljs.core.truth_(inst_35667)){
var statearr_35823_37328 = state_35762__$1;
(statearr_35823_37328[(1)] = (5));

} else {
var statearr_35824_37329 = state_35762__$1;
(statearr_35824_37329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (23))){
var inst_35718 = (state_35762[(14)]);
var inst_35724 = (inst_35718 == null);
var state_35762__$1 = state_35762;
if(cljs.core.truth_(inst_35724)){
var statearr_35825_37331 = state_35762__$1;
(statearr_35825_37331[(1)] = (26));

} else {
var statearr_35826_37332 = state_35762__$1;
(statearr_35826_37332[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (35))){
var inst_35747 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
if(cljs.core.truth_(inst_35747)){
var statearr_35827_37333 = state_35762__$1;
(statearr_35827_37333[(1)] = (36));

} else {
var statearr_35828_37334 = state_35762__$1;
(statearr_35828_37334[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (19))){
var inst_35683 = (state_35762[(7)]);
var inst_35703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35683);
var state_35762__$1 = state_35762;
var statearr_35829_37335 = state_35762__$1;
(statearr_35829_37335[(2)] = inst_35703);

(statearr_35829_37335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (11))){
var inst_35683 = (state_35762[(7)]);
var inst_35687 = (inst_35683 == null);
var inst_35688 = cljs.core.not(inst_35687);
var state_35762__$1 = state_35762;
if(inst_35688){
var statearr_35830_37336 = state_35762__$1;
(statearr_35830_37336[(1)] = (13));

} else {
var statearr_35831_37337 = state_35762__$1;
(statearr_35831_37337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (9))){
var inst_35658 = (state_35762[(8)]);
var state_35762__$1 = state_35762;
var statearr_35832_37338 = state_35762__$1;
(statearr_35832_37338[(2)] = inst_35658);

(statearr_35832_37338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (5))){
var state_35762__$1 = state_35762;
var statearr_35833_37340 = state_35762__$1;
(statearr_35833_37340[(2)] = true);

(statearr_35833_37340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (14))){
var state_35762__$1 = state_35762;
var statearr_35834_37341 = state_35762__$1;
(statearr_35834_37341[(2)] = false);

(statearr_35834_37341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (26))){
var inst_35719 = (state_35762[(9)]);
var inst_35726 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35719);
var state_35762__$1 = state_35762;
var statearr_35835_37345 = state_35762__$1;
(statearr_35835_37345[(2)] = inst_35726);

(statearr_35835_37345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (16))){
var state_35762__$1 = state_35762;
var statearr_35836_37346 = state_35762__$1;
(statearr_35836_37346[(2)] = true);

(statearr_35836_37346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (38))){
var inst_35752 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
var statearr_35837_37347 = state_35762__$1;
(statearr_35837_37347[(2)] = inst_35752);

(statearr_35837_37347[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (30))){
var inst_35719 = (state_35762[(9)]);
var inst_35709 = (state_35762[(13)]);
var inst_35708 = (state_35762[(11)]);
var inst_35739 = cljs.core.empty_QMARK_(inst_35708);
var inst_35740 = (inst_35709.cljs$core$IFn$_invoke$arity$1 ? inst_35709.cljs$core$IFn$_invoke$arity$1(inst_35719) : inst_35709.call(null,inst_35719));
var inst_35741 = cljs.core.not(inst_35740);
var inst_35742 = ((inst_35739) && (inst_35741));
var state_35762__$1 = state_35762;
var statearr_35838_37349 = state_35762__$1;
(statearr_35838_37349[(2)] = inst_35742);

(statearr_35838_37349[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (10))){
var inst_35658 = (state_35762[(8)]);
var inst_35679 = (state_35762[(2)]);
var inst_35680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35679,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35679,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35679,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35683 = inst_35658;
var state_35762__$1 = (function (){var statearr_35839 = state_35762;
(statearr_35839[(7)] = inst_35683);

(statearr_35839[(16)] = inst_35682);

(statearr_35839[(17)] = inst_35680);

(statearr_35839[(18)] = inst_35681);

return statearr_35839;
})();
var statearr_35840_37351 = state_35762__$1;
(statearr_35840_37351[(2)] = null);

(statearr_35840_37351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (18))){
var inst_35698 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
var statearr_35841_37353 = state_35762__$1;
(statearr_35841_37353[(2)] = inst_35698);

(statearr_35841_37353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (37))){
var state_35762__$1 = state_35762;
var statearr_35842_37354 = state_35762__$1;
(statearr_35842_37354[(2)] = null);

(statearr_35842_37354[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (8))){
var inst_35658 = (state_35762[(8)]);
var inst_35676 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35658);
var state_35762__$1 = state_35762;
var statearr_35843_37355 = state_35762__$1;
(statearr_35843_37355[(2)] = inst_35676);

(statearr_35843_37355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__34210__auto__ = null;
var cljs$core$async$mix_$_state_machine__34210__auto____0 = (function (){
var statearr_35844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35844[(0)] = cljs$core$async$mix_$_state_machine__34210__auto__);

(statearr_35844[(1)] = (1));

return statearr_35844;
});
var cljs$core$async$mix_$_state_machine__34210__auto____1 = (function (state_35762){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_35762);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e35845){var ex__34213__auto__ = e35845;
var statearr_35846_37361 = state_35762;
(statearr_35846_37361[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_35762[(4)]))){
var statearr_35847_37365 = state_35762;
(statearr_35847_37365[(1)] = cljs.core.first((state_35762[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37369 = state_35762;
state_35762 = G__37369;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34210__auto__ = function(state_35762){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34210__auto____1.call(this,state_35762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34210__auto____0;
cljs$core$async$mix_$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34210__auto____1;
return cljs$core$async$mix_$_state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_35848 = f__34413__auto__();
(statearr_35848[(6)] = c__34412__auto___37255);

return statearr_35848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37373 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37373(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37374 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37374(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37375 = (function() {
var G__37376 = null;
var G__37376__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37376__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37376 = function(p,v){
switch(arguments.length){
case 1:
return G__37376__1.call(this,p);
case 2:
return G__37376__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37376.cljs$core$IFn$_invoke$arity$1 = G__37376__1;
G__37376.cljs$core$IFn$_invoke$arity$2 = G__37376__2;
return G__37376;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35850 = arguments.length;
switch (G__35850) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37375(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37375(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35853 = arguments.length;
switch (G__35853) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35851_SHARP_){
if(cljs.core.truth_((p1__35851_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35851_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35851_SHARP_.call(null,topic)))){
return p1__35851_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35851_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35857 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35858){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35858 = meta35858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35859,meta35858__$1){
var self__ = this;
var _35859__$1 = this;
return (new cljs.core.async.t_cljs$core$async35857(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35858__$1));
}));

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35859){
var self__ = this;
var _35859__$1 = this;
return self__.meta35858;
}));

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35857.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35858","meta35858",263392448,null)], null);
}));

(cljs.core.async.t_cljs$core$async35857.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35857");

(cljs.core.async.t_cljs$core$async35857.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35857");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35857.
 */
cljs.core.async.__GT_t_cljs$core$async35857 = (function cljs$core$async$__GT_t_cljs$core$async35857(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35858){
return (new cljs.core.async.t_cljs$core$async35857(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35858));
});

}

return (new cljs.core.async.t_cljs$core$async35857(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34412__auto___37402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_35935){
var state_val_35936 = (state_35935[(1)]);
if((state_val_35936 === (7))){
var inst_35931 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_35937_37403 = state_35935__$1;
(statearr_35937_37403[(2)] = inst_35931);

(statearr_35937_37403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (20))){
var state_35935__$1 = state_35935;
var statearr_35938_37404 = state_35935__$1;
(statearr_35938_37404[(2)] = null);

(statearr_35938_37404[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (1))){
var state_35935__$1 = state_35935;
var statearr_35939_37405 = state_35935__$1;
(statearr_35939_37405[(2)] = null);

(statearr_35939_37405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (24))){
var inst_35914 = (state_35935[(7)]);
var inst_35923 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35914);
var state_35935__$1 = state_35935;
var statearr_35940_37406 = state_35935__$1;
(statearr_35940_37406[(2)] = inst_35923);

(statearr_35940_37406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (4))){
var inst_35863 = (state_35935[(8)]);
var inst_35863__$1 = (state_35935[(2)]);
var inst_35864 = (inst_35863__$1 == null);
var state_35935__$1 = (function (){var statearr_35946 = state_35935;
(statearr_35946[(8)] = inst_35863__$1);

return statearr_35946;
})();
if(cljs.core.truth_(inst_35864)){
var statearr_35947_37419 = state_35935__$1;
(statearr_35947_37419[(1)] = (5));

} else {
var statearr_35948_37420 = state_35935__$1;
(statearr_35948_37420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (15))){
var inst_35908 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_35949_37421 = state_35935__$1;
(statearr_35949_37421[(2)] = inst_35908);

(statearr_35949_37421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (21))){
var inst_35928 = (state_35935[(2)]);
var state_35935__$1 = (function (){var statearr_35950 = state_35935;
(statearr_35950[(9)] = inst_35928);

return statearr_35950;
})();
var statearr_35951_37428 = state_35935__$1;
(statearr_35951_37428[(2)] = null);

(statearr_35951_37428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (13))){
var inst_35890 = (state_35935[(10)]);
var inst_35892 = cljs.core.chunked_seq_QMARK_(inst_35890);
var state_35935__$1 = state_35935;
if(inst_35892){
var statearr_35952_37429 = state_35935__$1;
(statearr_35952_37429[(1)] = (16));

} else {
var statearr_35953_37430 = state_35935__$1;
(statearr_35953_37430[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (22))){
var inst_35920 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
if(cljs.core.truth_(inst_35920)){
var statearr_35954_37431 = state_35935__$1;
(statearr_35954_37431[(1)] = (23));

} else {
var statearr_35955_37432 = state_35935__$1;
(statearr_35955_37432[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (6))){
var inst_35914 = (state_35935[(7)]);
var inst_35916 = (state_35935[(11)]);
var inst_35863 = (state_35935[(8)]);
var inst_35914__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35863) : topic_fn.call(null,inst_35863));
var inst_35915 = cljs.core.deref(mults);
var inst_35916__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35915,inst_35914__$1);
var state_35935__$1 = (function (){var statearr_35956 = state_35935;
(statearr_35956[(7)] = inst_35914__$1);

(statearr_35956[(11)] = inst_35916__$1);

return statearr_35956;
})();
if(cljs.core.truth_(inst_35916__$1)){
var statearr_35957_37433 = state_35935__$1;
(statearr_35957_37433[(1)] = (19));

} else {
var statearr_35958_37434 = state_35935__$1;
(statearr_35958_37434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (25))){
var inst_35925 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_35959_37435 = state_35935__$1;
(statearr_35959_37435[(2)] = inst_35925);

(statearr_35959_37435[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (17))){
var inst_35890 = (state_35935[(10)]);
var inst_35899 = cljs.core.first(inst_35890);
var inst_35900 = cljs.core.async.muxch_STAR_(inst_35899);
var inst_35901 = cljs.core.async.close_BANG_(inst_35900);
var inst_35902 = cljs.core.next(inst_35890);
var inst_35873 = inst_35902;
var inst_35874 = null;
var inst_35875 = (0);
var inst_35876 = (0);
var state_35935__$1 = (function (){var statearr_35960 = state_35935;
(statearr_35960[(12)] = inst_35876);

(statearr_35960[(13)] = inst_35901);

(statearr_35960[(14)] = inst_35875);

(statearr_35960[(15)] = inst_35873);

(statearr_35960[(16)] = inst_35874);

return statearr_35960;
})();
var statearr_35961_37436 = state_35935__$1;
(statearr_35961_37436[(2)] = null);

(statearr_35961_37436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (3))){
var inst_35933 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35935__$1,inst_35933);
} else {
if((state_val_35936 === (12))){
var inst_35910 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_35962_37437 = state_35935__$1;
(statearr_35962_37437[(2)] = inst_35910);

(statearr_35962_37437[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (2))){
var state_35935__$1 = state_35935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35935__$1,(4),ch);
} else {
if((state_val_35936 === (23))){
var state_35935__$1 = state_35935;
var statearr_35963_37438 = state_35935__$1;
(statearr_35963_37438[(2)] = null);

(statearr_35963_37438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (19))){
var inst_35916 = (state_35935[(11)]);
var inst_35863 = (state_35935[(8)]);
var inst_35918 = cljs.core.async.muxch_STAR_(inst_35916);
var state_35935__$1 = state_35935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35935__$1,(22),inst_35918,inst_35863);
} else {
if((state_val_35936 === (11))){
var inst_35873 = (state_35935[(15)]);
var inst_35890 = (state_35935[(10)]);
var inst_35890__$1 = cljs.core.seq(inst_35873);
var state_35935__$1 = (function (){var statearr_35964 = state_35935;
(statearr_35964[(10)] = inst_35890__$1);

return statearr_35964;
})();
if(inst_35890__$1){
var statearr_35965_37445 = state_35935__$1;
(statearr_35965_37445[(1)] = (13));

} else {
var statearr_35966_37446 = state_35935__$1;
(statearr_35966_37446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (9))){
var inst_35912 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_35967_37447 = state_35935__$1;
(statearr_35967_37447[(2)] = inst_35912);

(statearr_35967_37447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (5))){
var inst_35870 = cljs.core.deref(mults);
var inst_35871 = cljs.core.vals(inst_35870);
var inst_35872 = cljs.core.seq(inst_35871);
var inst_35873 = inst_35872;
var inst_35874 = null;
var inst_35875 = (0);
var inst_35876 = (0);
var state_35935__$1 = (function (){var statearr_35968 = state_35935;
(statearr_35968[(12)] = inst_35876);

(statearr_35968[(14)] = inst_35875);

(statearr_35968[(15)] = inst_35873);

(statearr_35968[(16)] = inst_35874);

return statearr_35968;
})();
var statearr_35969_37448 = state_35935__$1;
(statearr_35969_37448[(2)] = null);

(statearr_35969_37448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (14))){
var state_35935__$1 = state_35935;
var statearr_35973_37449 = state_35935__$1;
(statearr_35973_37449[(2)] = null);

(statearr_35973_37449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (16))){
var inst_35890 = (state_35935[(10)]);
var inst_35894 = cljs.core.chunk_first(inst_35890);
var inst_35895 = cljs.core.chunk_rest(inst_35890);
var inst_35896 = cljs.core.count(inst_35894);
var inst_35873 = inst_35895;
var inst_35874 = inst_35894;
var inst_35875 = inst_35896;
var inst_35876 = (0);
var state_35935__$1 = (function (){var statearr_35974 = state_35935;
(statearr_35974[(12)] = inst_35876);

(statearr_35974[(14)] = inst_35875);

(statearr_35974[(15)] = inst_35873);

(statearr_35974[(16)] = inst_35874);

return statearr_35974;
})();
var statearr_35975_37450 = state_35935__$1;
(statearr_35975_37450[(2)] = null);

(statearr_35975_37450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (10))){
var inst_35876 = (state_35935[(12)]);
var inst_35875 = (state_35935[(14)]);
var inst_35873 = (state_35935[(15)]);
var inst_35874 = (state_35935[(16)]);
var inst_35884 = cljs.core._nth(inst_35874,inst_35876);
var inst_35885 = cljs.core.async.muxch_STAR_(inst_35884);
var inst_35886 = cljs.core.async.close_BANG_(inst_35885);
var inst_35887 = (inst_35876 + (1));
var tmp35970 = inst_35875;
var tmp35971 = inst_35873;
var tmp35972 = inst_35874;
var inst_35873__$1 = tmp35971;
var inst_35874__$1 = tmp35972;
var inst_35875__$1 = tmp35970;
var inst_35876__$1 = inst_35887;
var state_35935__$1 = (function (){var statearr_35976 = state_35935;
(statearr_35976[(12)] = inst_35876__$1);

(statearr_35976[(14)] = inst_35875__$1);

(statearr_35976[(15)] = inst_35873__$1);

(statearr_35976[(17)] = inst_35886);

(statearr_35976[(16)] = inst_35874__$1);

return statearr_35976;
})();
var statearr_35982_37457 = state_35935__$1;
(statearr_35982_37457[(2)] = null);

(statearr_35982_37457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (18))){
var inst_35905 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_35983_37458 = state_35935__$1;
(statearr_35983_37458[(2)] = inst_35905);

(statearr_35983_37458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (8))){
var inst_35876 = (state_35935[(12)]);
var inst_35875 = (state_35935[(14)]);
var inst_35881 = (inst_35876 < inst_35875);
var inst_35882 = inst_35881;
var state_35935__$1 = state_35935;
if(cljs.core.truth_(inst_35882)){
var statearr_35984_37461 = state_35935__$1;
(statearr_35984_37461[(1)] = (10));

} else {
var statearr_35985_37462 = state_35935__$1;
(statearr_35985_37462[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34210__auto__ = null;
var cljs$core$async$state_machine__34210__auto____0 = (function (){
var statearr_35986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35986[(0)] = cljs$core$async$state_machine__34210__auto__);

(statearr_35986[(1)] = (1));

return statearr_35986;
});
var cljs$core$async$state_machine__34210__auto____1 = (function (state_35935){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_35935);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e35987){var ex__34213__auto__ = e35987;
var statearr_35988_37465 = state_35935;
(statearr_35988_37465[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_35935[(4)]))){
var statearr_35989_37466 = state_35935;
(statearr_35989_37466[(1)] = cljs.core.first((state_35935[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37467 = state_35935;
state_35935 = G__37467;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$state_machine__34210__auto__ = function(state_35935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34210__auto____1.call(this,state_35935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34210__auto____0;
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34210__auto____1;
return cljs$core$async$state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_35990 = f__34413__auto__();
(statearr_35990[(6)] = c__34412__auto___37402);

return statearr_35990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35992 = arguments.length;
switch (G__35992) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36019 = arguments.length;
switch (G__36019) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36021 = arguments.length;
switch (G__36021) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__34412__auto___37477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_36104){
var state_val_36105 = (state_36104[(1)]);
if((state_val_36105 === (7))){
var state_36104__$1 = state_36104;
var statearr_36108_37484 = state_36104__$1;
(statearr_36108_37484[(2)] = null);

(statearr_36108_37484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (1))){
var state_36104__$1 = state_36104;
var statearr_36109_37485 = state_36104__$1;
(statearr_36109_37485[(2)] = null);

(statearr_36109_37485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (4))){
var inst_36057 = (state_36104[(7)]);
var inst_36056 = (state_36104[(8)]);
var inst_36059 = (inst_36057 < inst_36056);
var state_36104__$1 = state_36104;
if(cljs.core.truth_(inst_36059)){
var statearr_36110_37486 = state_36104__$1;
(statearr_36110_37486[(1)] = (6));

} else {
var statearr_36111_37487 = state_36104__$1;
(statearr_36111_37487[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (15))){
var inst_36082 = (state_36104[(9)]);
var inst_36087 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36082);
var state_36104__$1 = state_36104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36104__$1,(17),out,inst_36087);
} else {
if((state_val_36105 === (13))){
var inst_36082 = (state_36104[(9)]);
var inst_36082__$1 = (state_36104[(2)]);
var inst_36083 = cljs.core.some(cljs.core.nil_QMARK_,inst_36082__$1);
var state_36104__$1 = (function (){var statearr_36116 = state_36104;
(statearr_36116[(9)] = inst_36082__$1);

return statearr_36116;
})();
if(cljs.core.truth_(inst_36083)){
var statearr_36117_37488 = state_36104__$1;
(statearr_36117_37488[(1)] = (14));

} else {
var statearr_36118_37489 = state_36104__$1;
(statearr_36118_37489[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (6))){
var state_36104__$1 = state_36104;
var statearr_36119_37490 = state_36104__$1;
(statearr_36119_37490[(2)] = null);

(statearr_36119_37490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (17))){
var inst_36089 = (state_36104[(2)]);
var state_36104__$1 = (function (){var statearr_36128 = state_36104;
(statearr_36128[(10)] = inst_36089);

return statearr_36128;
})();
var statearr_36130_37492 = state_36104__$1;
(statearr_36130_37492[(2)] = null);

(statearr_36130_37492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (3))){
var inst_36102 = (state_36104[(2)]);
var state_36104__$1 = state_36104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36104__$1,inst_36102);
} else {
if((state_val_36105 === (12))){
var _ = (function (){var statearr_36132 = state_36104;
(statearr_36132[(4)] = cljs.core.rest((state_36104[(4)])));

return statearr_36132;
})();
var state_36104__$1 = state_36104;
var ex36127 = (state_36104__$1[(2)]);
var statearr_36133_37493 = state_36104__$1;
(statearr_36133_37493[(5)] = ex36127);


if((ex36127 instanceof Object)){
var statearr_36134_37495 = state_36104__$1;
(statearr_36134_37495[(1)] = (11));

(statearr_36134_37495[(5)] = null);

} else {
throw ex36127;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (2))){
var inst_36055 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36056 = cnt;
var inst_36057 = (0);
var state_36104__$1 = (function (){var statearr_36135 = state_36104;
(statearr_36135[(11)] = inst_36055);

(statearr_36135[(7)] = inst_36057);

(statearr_36135[(8)] = inst_36056);

return statearr_36135;
})();
var statearr_36136_37496 = state_36104__$1;
(statearr_36136_37496[(2)] = null);

(statearr_36136_37496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (11))){
var inst_36061 = (state_36104[(2)]);
var inst_36062 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36104__$1 = (function (){var statearr_36137 = state_36104;
(statearr_36137[(12)] = inst_36061);

return statearr_36137;
})();
var statearr_36141_37497 = state_36104__$1;
(statearr_36141_37497[(2)] = inst_36062);

(statearr_36141_37497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (9))){
var inst_36057 = (state_36104[(7)]);
var _ = (function (){var statearr_36142 = state_36104;
(statearr_36142[(4)] = cljs.core.cons((12),(state_36104[(4)])));

return statearr_36142;
})();
var inst_36068 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36057) : chs__$1.call(null,inst_36057));
var inst_36069 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36057) : done.call(null,inst_36057));
var inst_36070 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36068,inst_36069);
var ___$1 = (function (){var statearr_36143 = state_36104;
(statearr_36143[(4)] = cljs.core.rest((state_36104[(4)])));

return statearr_36143;
})();
var state_36104__$1 = state_36104;
var statearr_36144_37498 = state_36104__$1;
(statearr_36144_37498[(2)] = inst_36070);

(statearr_36144_37498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (5))){
var inst_36080 = (state_36104[(2)]);
var state_36104__$1 = (function (){var statearr_36145 = state_36104;
(statearr_36145[(13)] = inst_36080);

return statearr_36145;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36104__$1,(13),dchan);
} else {
if((state_val_36105 === (14))){
var inst_36085 = cljs.core.async.close_BANG_(out);
var state_36104__$1 = state_36104;
var statearr_36146_37499 = state_36104__$1;
(statearr_36146_37499[(2)] = inst_36085);

(statearr_36146_37499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (16))){
var inst_36100 = (state_36104[(2)]);
var state_36104__$1 = state_36104;
var statearr_36147_37500 = state_36104__$1;
(statearr_36147_37500[(2)] = inst_36100);

(statearr_36147_37500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (10))){
var inst_36057 = (state_36104[(7)]);
var inst_36073 = (state_36104[(2)]);
var inst_36074 = (inst_36057 + (1));
var inst_36057__$1 = inst_36074;
var state_36104__$1 = (function (){var statearr_36148 = state_36104;
(statearr_36148[(14)] = inst_36073);

(statearr_36148[(7)] = inst_36057__$1);

return statearr_36148;
})();
var statearr_36149_37508 = state_36104__$1;
(statearr_36149_37508[(2)] = null);

(statearr_36149_37508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (8))){
var inst_36078 = (state_36104[(2)]);
var state_36104__$1 = state_36104;
var statearr_36150_37513 = state_36104__$1;
(statearr_36150_37513[(2)] = inst_36078);

(statearr_36150_37513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34210__auto__ = null;
var cljs$core$async$state_machine__34210__auto____0 = (function (){
var statearr_36151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36151[(0)] = cljs$core$async$state_machine__34210__auto__);

(statearr_36151[(1)] = (1));

return statearr_36151;
});
var cljs$core$async$state_machine__34210__auto____1 = (function (state_36104){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_36104);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e36152){var ex__34213__auto__ = e36152;
var statearr_36153_37519 = state_36104;
(statearr_36153_37519[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_36104[(4)]))){
var statearr_36154_37524 = state_36104;
(statearr_36154_37524[(1)] = cljs.core.first((state_36104[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37542 = state_36104;
state_36104 = G__37542;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$state_machine__34210__auto__ = function(state_36104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34210__auto____1.call(this,state_36104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34210__auto____0;
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34210__auto____1;
return cljs$core$async$state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_36155 = f__34413__auto__();
(statearr_36155[(6)] = c__34412__auto___37477);

return statearr_36155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36161 = arguments.length;
switch (G__36161) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34412__auto___37555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_36197){
var state_val_36198 = (state_36197[(1)]);
if((state_val_36198 === (7))){
var inst_36176 = (state_36197[(7)]);
var inst_36175 = (state_36197[(8)]);
var inst_36175__$1 = (state_36197[(2)]);
var inst_36176__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36175__$1,(0),null);
var inst_36177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36175__$1,(1),null);
var inst_36178 = (inst_36176__$1 == null);
var state_36197__$1 = (function (){var statearr_36208 = state_36197;
(statearr_36208[(7)] = inst_36176__$1);

(statearr_36208[(8)] = inst_36175__$1);

(statearr_36208[(9)] = inst_36177);

return statearr_36208;
})();
if(cljs.core.truth_(inst_36178)){
var statearr_36209_37556 = state_36197__$1;
(statearr_36209_37556[(1)] = (8));

} else {
var statearr_36210_37557 = state_36197__$1;
(statearr_36210_37557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (1))){
var inst_36162 = cljs.core.vec(chs);
var inst_36163 = inst_36162;
var state_36197__$1 = (function (){var statearr_36211 = state_36197;
(statearr_36211[(10)] = inst_36163);

return statearr_36211;
})();
var statearr_36212_37559 = state_36197__$1;
(statearr_36212_37559[(2)] = null);

(statearr_36212_37559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (4))){
var inst_36163 = (state_36197[(10)]);
var state_36197__$1 = state_36197;
return cljs.core.async.ioc_alts_BANG_(state_36197__$1,(7),inst_36163);
} else {
if((state_val_36198 === (6))){
var inst_36193 = (state_36197[(2)]);
var state_36197__$1 = state_36197;
var statearr_36213_37560 = state_36197__$1;
(statearr_36213_37560[(2)] = inst_36193);

(statearr_36213_37560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (3))){
var inst_36195 = (state_36197[(2)]);
var state_36197__$1 = state_36197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36197__$1,inst_36195);
} else {
if((state_val_36198 === (2))){
var inst_36163 = (state_36197[(10)]);
var inst_36168 = cljs.core.count(inst_36163);
var inst_36169 = (inst_36168 > (0));
var state_36197__$1 = state_36197;
if(cljs.core.truth_(inst_36169)){
var statearr_36219_37561 = state_36197__$1;
(statearr_36219_37561[(1)] = (4));

} else {
var statearr_36220_37562 = state_36197__$1;
(statearr_36220_37562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (11))){
var inst_36163 = (state_36197[(10)]);
var inst_36186 = (state_36197[(2)]);
var tmp36214 = inst_36163;
var inst_36163__$1 = tmp36214;
var state_36197__$1 = (function (){var statearr_36221 = state_36197;
(statearr_36221[(11)] = inst_36186);

(statearr_36221[(10)] = inst_36163__$1);

return statearr_36221;
})();
var statearr_36222_37563 = state_36197__$1;
(statearr_36222_37563[(2)] = null);

(statearr_36222_37563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (9))){
var inst_36176 = (state_36197[(7)]);
var state_36197__$1 = state_36197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36197__$1,(11),out,inst_36176);
} else {
if((state_val_36198 === (5))){
var inst_36191 = cljs.core.async.close_BANG_(out);
var state_36197__$1 = state_36197;
var statearr_36233_37564 = state_36197__$1;
(statearr_36233_37564[(2)] = inst_36191);

(statearr_36233_37564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (10))){
var inst_36189 = (state_36197[(2)]);
var state_36197__$1 = state_36197;
var statearr_36234_37565 = state_36197__$1;
(statearr_36234_37565[(2)] = inst_36189);

(statearr_36234_37565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (8))){
var inst_36176 = (state_36197[(7)]);
var inst_36175 = (state_36197[(8)]);
var inst_36177 = (state_36197[(9)]);
var inst_36163 = (state_36197[(10)]);
var inst_36181 = (function (){var cs = inst_36163;
var vec__36171 = inst_36175;
var v = inst_36176;
var c = inst_36177;
return (function (p1__36159_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36159_SHARP_);
});
})();
var inst_36182 = cljs.core.filterv(inst_36181,inst_36163);
var inst_36163__$1 = inst_36182;
var state_36197__$1 = (function (){var statearr_36236 = state_36197;
(statearr_36236[(10)] = inst_36163__$1);

return statearr_36236;
})();
var statearr_36237_37568 = state_36197__$1;
(statearr_36237_37568[(2)] = null);

(statearr_36237_37568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34210__auto__ = null;
var cljs$core$async$state_machine__34210__auto____0 = (function (){
var statearr_36238 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36238[(0)] = cljs$core$async$state_machine__34210__auto__);

(statearr_36238[(1)] = (1));

return statearr_36238;
});
var cljs$core$async$state_machine__34210__auto____1 = (function (state_36197){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_36197);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e36239){var ex__34213__auto__ = e36239;
var statearr_36240_37569 = state_36197;
(statearr_36240_37569[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_36197[(4)]))){
var statearr_36241_37570 = state_36197;
(statearr_36241_37570[(1)] = cljs.core.first((state_36197[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37575 = state_36197;
state_36197 = G__37575;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$state_machine__34210__auto__ = function(state_36197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34210__auto____1.call(this,state_36197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34210__auto____0;
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34210__auto____1;
return cljs$core$async$state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_36242 = f__34413__auto__();
(statearr_36242[(6)] = c__34412__auto___37555);

return statearr_36242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36245 = arguments.length;
switch (G__36245) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34412__auto___37593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_36271){
var state_val_36272 = (state_36271[(1)]);
if((state_val_36272 === (7))){
var inst_36251 = (state_36271[(7)]);
var inst_36251__$1 = (state_36271[(2)]);
var inst_36252 = (inst_36251__$1 == null);
var inst_36253 = cljs.core.not(inst_36252);
var state_36271__$1 = (function (){var statearr_36273 = state_36271;
(statearr_36273[(7)] = inst_36251__$1);

return statearr_36273;
})();
if(inst_36253){
var statearr_36274_37605 = state_36271__$1;
(statearr_36274_37605[(1)] = (8));

} else {
var statearr_36275_37606 = state_36271__$1;
(statearr_36275_37606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (1))){
var inst_36246 = (0);
var state_36271__$1 = (function (){var statearr_36276 = state_36271;
(statearr_36276[(8)] = inst_36246);

return statearr_36276;
})();
var statearr_36277_37607 = state_36271__$1;
(statearr_36277_37607[(2)] = null);

(statearr_36277_37607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (4))){
var state_36271__$1 = state_36271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36271__$1,(7),ch);
} else {
if((state_val_36272 === (6))){
var inst_36264 = (state_36271[(2)]);
var state_36271__$1 = state_36271;
var statearr_36279_37608 = state_36271__$1;
(statearr_36279_37608[(2)] = inst_36264);

(statearr_36279_37608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (3))){
var inst_36266 = (state_36271[(2)]);
var inst_36269 = cljs.core.async.close_BANG_(out);
var state_36271__$1 = (function (){var statearr_36280 = state_36271;
(statearr_36280[(9)] = inst_36266);

return statearr_36280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36271__$1,inst_36269);
} else {
if((state_val_36272 === (2))){
var inst_36246 = (state_36271[(8)]);
var inst_36248 = (inst_36246 < n);
var state_36271__$1 = state_36271;
if(cljs.core.truth_(inst_36248)){
var statearr_36281_37610 = state_36271__$1;
(statearr_36281_37610[(1)] = (4));

} else {
var statearr_36282_37611 = state_36271__$1;
(statearr_36282_37611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (11))){
var inst_36246 = (state_36271[(8)]);
var inst_36256 = (state_36271[(2)]);
var inst_36257 = (inst_36246 + (1));
var inst_36246__$1 = inst_36257;
var state_36271__$1 = (function (){var statearr_36284 = state_36271;
(statearr_36284[(10)] = inst_36256);

(statearr_36284[(8)] = inst_36246__$1);

return statearr_36284;
})();
var statearr_36285_37612 = state_36271__$1;
(statearr_36285_37612[(2)] = null);

(statearr_36285_37612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (9))){
var state_36271__$1 = state_36271;
var statearr_36286_37614 = state_36271__$1;
(statearr_36286_37614[(2)] = null);

(statearr_36286_37614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (5))){
var state_36271__$1 = state_36271;
var statearr_36287_37616 = state_36271__$1;
(statearr_36287_37616[(2)] = null);

(statearr_36287_37616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (10))){
var inst_36261 = (state_36271[(2)]);
var state_36271__$1 = state_36271;
var statearr_36288_37617 = state_36271__$1;
(statearr_36288_37617[(2)] = inst_36261);

(statearr_36288_37617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (8))){
var inst_36251 = (state_36271[(7)]);
var state_36271__$1 = state_36271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36271__$1,(11),out,inst_36251);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34210__auto__ = null;
var cljs$core$async$state_machine__34210__auto____0 = (function (){
var statearr_36289 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36289[(0)] = cljs$core$async$state_machine__34210__auto__);

(statearr_36289[(1)] = (1));

return statearr_36289;
});
var cljs$core$async$state_machine__34210__auto____1 = (function (state_36271){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_36271);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e36290){var ex__34213__auto__ = e36290;
var statearr_36291_37645 = state_36271;
(statearr_36291_37645[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_36271[(4)]))){
var statearr_36292_37649 = state_36271;
(statearr_36292_37649[(1)] = cljs.core.first((state_36271[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37650 = state_36271;
state_36271 = G__37650;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$state_machine__34210__auto__ = function(state_36271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34210__auto____1.call(this,state_36271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34210__auto____0;
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34210__auto____1;
return cljs$core$async$state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_36293 = f__34413__auto__();
(statearr_36293[(6)] = c__34412__auto___37593);

return statearr_36293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36296 = (function (f,ch,meta36297){
this.f = f;
this.ch = ch;
this.meta36297 = meta36297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36298,meta36297__$1){
var self__ = this;
var _36298__$1 = this;
return (new cljs.core.async.t_cljs$core$async36296(self__.f,self__.ch,meta36297__$1));
}));

(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36298){
var self__ = this;
var _36298__$1 = this;
return self__.meta36297;
}));

(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36299 = (function (f,ch,meta36297,_,fn1,meta36300){
this.f = f;
this.ch = ch;
this.meta36297 = meta36297;
this._ = _;
this.fn1 = fn1;
this.meta36300 = meta36300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36301,meta36300__$1){
var self__ = this;
var _36301__$1 = this;
return (new cljs.core.async.t_cljs$core$async36299(self__.f,self__.ch,self__.meta36297,self__._,self__.fn1,meta36300__$1));
}));

(cljs.core.async.t_cljs$core$async36299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36301){
var self__ = this;
var _36301__$1 = this;
return self__.meta36300;
}));

(cljs.core.async.t_cljs$core$async36299.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36295_SHARP_){
var G__36302 = (((p1__36295_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36295_SHARP_) : self__.f.call(null,p1__36295_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36302) : f1.call(null,G__36302));
});
}));

(cljs.core.async.t_cljs$core$async36299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36297","meta36297",1351225937,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36296","cljs.core.async/t_cljs$core$async36296",1564964712,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36300","meta36300",1769519155,null)], null);
}));

(cljs.core.async.t_cljs$core$async36299.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36299");

(cljs.core.async.t_cljs$core$async36299.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36299");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36299.
 */
cljs.core.async.__GT_t_cljs$core$async36299 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36299(f__$1,ch__$1,meta36297__$1,___$2,fn1__$1,meta36300){
return (new cljs.core.async.t_cljs$core$async36299(f__$1,ch__$1,meta36297__$1,___$2,fn1__$1,meta36300));
});

}

return (new cljs.core.async.t_cljs$core$async36299(self__.f,self__.ch,self__.meta36297,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36308 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36308) : self__.f.call(null,G__36308));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36297","meta36297",1351225937,null)], null);
}));

(cljs.core.async.t_cljs$core$async36296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36296");

(cljs.core.async.t_cljs$core$async36296.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36296.
 */
cljs.core.async.__GT_t_cljs$core$async36296 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36296(f__$1,ch__$1,meta36297){
return (new cljs.core.async.t_cljs$core$async36296(f__$1,ch__$1,meta36297));
});

}

return (new cljs.core.async.t_cljs$core$async36296(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36310 = (function (f,ch,meta36311){
this.f = f;
this.ch = ch;
this.meta36311 = meta36311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36312,meta36311__$1){
var self__ = this;
var _36312__$1 = this;
return (new cljs.core.async.t_cljs$core$async36310(self__.f,self__.ch,meta36311__$1));
}));

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36312){
var self__ = this;
var _36312__$1 = this;
return self__.meta36311;
}));

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36311","meta36311",-1802910390,null)], null);
}));

(cljs.core.async.t_cljs$core$async36310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36310");

(cljs.core.async.t_cljs$core$async36310.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36310.
 */
cljs.core.async.__GT_t_cljs$core$async36310 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36310(f__$1,ch__$1,meta36311){
return (new cljs.core.async.t_cljs$core$async36310(f__$1,ch__$1,meta36311));
});

}

return (new cljs.core.async.t_cljs$core$async36310(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36315 = (function (p,ch,meta36316){
this.p = p;
this.ch = ch;
this.meta36316 = meta36316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36317,meta36316__$1){
var self__ = this;
var _36317__$1 = this;
return (new cljs.core.async.t_cljs$core$async36315(self__.p,self__.ch,meta36316__$1));
}));

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36317){
var self__ = this;
var _36317__$1 = this;
return self__.meta36316;
}));

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36316","meta36316",1525607063,null)], null);
}));

(cljs.core.async.t_cljs$core$async36315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36315");

(cljs.core.async.t_cljs$core$async36315.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36315.
 */
cljs.core.async.__GT_t_cljs$core$async36315 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36315(p__$1,ch__$1,meta36316){
return (new cljs.core.async.t_cljs$core$async36315(p__$1,ch__$1,meta36316));
});

}

return (new cljs.core.async.t_cljs$core$async36315(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36323 = arguments.length;
switch (G__36323) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34412__auto___37716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_36346){
var state_val_36347 = (state_36346[(1)]);
if((state_val_36347 === (7))){
var inst_36342 = (state_36346[(2)]);
var state_36346__$1 = state_36346;
var statearr_36350_37733 = state_36346__$1;
(statearr_36350_37733[(2)] = inst_36342);

(statearr_36350_37733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36347 === (1))){
var state_36346__$1 = state_36346;
var statearr_36351_37740 = state_36346__$1;
(statearr_36351_37740[(2)] = null);

(statearr_36351_37740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36347 === (4))){
var inst_36328 = (state_36346[(7)]);
var inst_36328__$1 = (state_36346[(2)]);
var inst_36329 = (inst_36328__$1 == null);
var state_36346__$1 = (function (){var statearr_36352 = state_36346;
(statearr_36352[(7)] = inst_36328__$1);

return statearr_36352;
})();
if(cljs.core.truth_(inst_36329)){
var statearr_36353_37746 = state_36346__$1;
(statearr_36353_37746[(1)] = (5));

} else {
var statearr_36354_37747 = state_36346__$1;
(statearr_36354_37747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36347 === (6))){
var inst_36328 = (state_36346[(7)]);
var inst_36333 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36328) : p.call(null,inst_36328));
var state_36346__$1 = state_36346;
if(cljs.core.truth_(inst_36333)){
var statearr_36355_37755 = state_36346__$1;
(statearr_36355_37755[(1)] = (8));

} else {
var statearr_36356_37760 = state_36346__$1;
(statearr_36356_37760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36347 === (3))){
var inst_36344 = (state_36346[(2)]);
var state_36346__$1 = state_36346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36346__$1,inst_36344);
} else {
if((state_val_36347 === (2))){
var state_36346__$1 = state_36346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36346__$1,(4),ch);
} else {
if((state_val_36347 === (11))){
var inst_36336 = (state_36346[(2)]);
var state_36346__$1 = state_36346;
var statearr_36357_37771 = state_36346__$1;
(statearr_36357_37771[(2)] = inst_36336);

(statearr_36357_37771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36347 === (9))){
var state_36346__$1 = state_36346;
var statearr_36358_37776 = state_36346__$1;
(statearr_36358_37776[(2)] = null);

(statearr_36358_37776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36347 === (5))){
var inst_36331 = cljs.core.async.close_BANG_(out);
var state_36346__$1 = state_36346;
var statearr_36359_37777 = state_36346__$1;
(statearr_36359_37777[(2)] = inst_36331);

(statearr_36359_37777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36347 === (10))){
var inst_36339 = (state_36346[(2)]);
var state_36346__$1 = (function (){var statearr_36360 = state_36346;
(statearr_36360[(8)] = inst_36339);

return statearr_36360;
})();
var statearr_36361_37778 = state_36346__$1;
(statearr_36361_37778[(2)] = null);

(statearr_36361_37778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36347 === (8))){
var inst_36328 = (state_36346[(7)]);
var state_36346__$1 = state_36346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36346__$1,(11),out,inst_36328);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34210__auto__ = null;
var cljs$core$async$state_machine__34210__auto____0 = (function (){
var statearr_36362 = [null,null,null,null,null,null,null,null,null];
(statearr_36362[(0)] = cljs$core$async$state_machine__34210__auto__);

(statearr_36362[(1)] = (1));

return statearr_36362;
});
var cljs$core$async$state_machine__34210__auto____1 = (function (state_36346){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_36346);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e36363){var ex__34213__auto__ = e36363;
var statearr_36364_37779 = state_36346;
(statearr_36364_37779[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_36346[(4)]))){
var statearr_36365_37780 = state_36346;
(statearr_36365_37780[(1)] = cljs.core.first((state_36346[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37781 = state_36346;
state_36346 = G__37781;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$state_machine__34210__auto__ = function(state_36346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34210__auto____1.call(this,state_36346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34210__auto____0;
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34210__auto____1;
return cljs$core$async$state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_36366 = f__34413__auto__();
(statearr_36366[(6)] = c__34412__auto___37716);

return statearr_36366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36368 = arguments.length;
switch (G__36368) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34412__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_36431){
var state_val_36432 = (state_36431[(1)]);
if((state_val_36432 === (7))){
var inst_36427 = (state_36431[(2)]);
var state_36431__$1 = state_36431;
var statearr_36433_37784 = state_36431__$1;
(statearr_36433_37784[(2)] = inst_36427);

(statearr_36433_37784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (20))){
var inst_36396 = (state_36431[(7)]);
var inst_36408 = (state_36431[(2)]);
var inst_36409 = cljs.core.next(inst_36396);
var inst_36382 = inst_36409;
var inst_36383 = null;
var inst_36384 = (0);
var inst_36385 = (0);
var state_36431__$1 = (function (){var statearr_36435 = state_36431;
(statearr_36435[(8)] = inst_36382);

(statearr_36435[(9)] = inst_36408);

(statearr_36435[(10)] = inst_36384);

(statearr_36435[(11)] = inst_36385);

(statearr_36435[(12)] = inst_36383);

return statearr_36435;
})();
var statearr_36438_37785 = state_36431__$1;
(statearr_36438_37785[(2)] = null);

(statearr_36438_37785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (1))){
var state_36431__$1 = state_36431;
var statearr_36440_37786 = state_36431__$1;
(statearr_36440_37786[(2)] = null);

(statearr_36440_37786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (4))){
var inst_36371 = (state_36431[(13)]);
var inst_36371__$1 = (state_36431[(2)]);
var inst_36372 = (inst_36371__$1 == null);
var state_36431__$1 = (function (){var statearr_36441 = state_36431;
(statearr_36441[(13)] = inst_36371__$1);

return statearr_36441;
})();
if(cljs.core.truth_(inst_36372)){
var statearr_36442_37787 = state_36431__$1;
(statearr_36442_37787[(1)] = (5));

} else {
var statearr_36443_37788 = state_36431__$1;
(statearr_36443_37788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (15))){
var state_36431__$1 = state_36431;
var statearr_36447_37789 = state_36431__$1;
(statearr_36447_37789[(2)] = null);

(statearr_36447_37789[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (21))){
var state_36431__$1 = state_36431;
var statearr_36448_37790 = state_36431__$1;
(statearr_36448_37790[(2)] = null);

(statearr_36448_37790[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (13))){
var inst_36382 = (state_36431[(8)]);
var inst_36384 = (state_36431[(10)]);
var inst_36385 = (state_36431[(11)]);
var inst_36383 = (state_36431[(12)]);
var inst_36392 = (state_36431[(2)]);
var inst_36393 = (inst_36385 + (1));
var tmp36444 = inst_36382;
var tmp36445 = inst_36384;
var tmp36446 = inst_36383;
var inst_36382__$1 = tmp36444;
var inst_36383__$1 = tmp36446;
var inst_36384__$1 = tmp36445;
var inst_36385__$1 = inst_36393;
var state_36431__$1 = (function (){var statearr_36449 = state_36431;
(statearr_36449[(8)] = inst_36382__$1);

(statearr_36449[(10)] = inst_36384__$1);

(statearr_36449[(14)] = inst_36392);

(statearr_36449[(11)] = inst_36385__$1);

(statearr_36449[(12)] = inst_36383__$1);

return statearr_36449;
})();
var statearr_36450_37791 = state_36431__$1;
(statearr_36450_37791[(2)] = null);

(statearr_36450_37791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (22))){
var state_36431__$1 = state_36431;
var statearr_36451_37796 = state_36431__$1;
(statearr_36451_37796[(2)] = null);

(statearr_36451_37796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (6))){
var inst_36371 = (state_36431[(13)]);
var inst_36380 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36371) : f.call(null,inst_36371));
var inst_36381 = cljs.core.seq(inst_36380);
var inst_36382 = inst_36381;
var inst_36383 = null;
var inst_36384 = (0);
var inst_36385 = (0);
var state_36431__$1 = (function (){var statearr_36458 = state_36431;
(statearr_36458[(8)] = inst_36382);

(statearr_36458[(10)] = inst_36384);

(statearr_36458[(11)] = inst_36385);

(statearr_36458[(12)] = inst_36383);

return statearr_36458;
})();
var statearr_36459_37799 = state_36431__$1;
(statearr_36459_37799[(2)] = null);

(statearr_36459_37799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (17))){
var inst_36396 = (state_36431[(7)]);
var inst_36401 = cljs.core.chunk_first(inst_36396);
var inst_36402 = cljs.core.chunk_rest(inst_36396);
var inst_36403 = cljs.core.count(inst_36401);
var inst_36382 = inst_36402;
var inst_36383 = inst_36401;
var inst_36384 = inst_36403;
var inst_36385 = (0);
var state_36431__$1 = (function (){var statearr_36460 = state_36431;
(statearr_36460[(8)] = inst_36382);

(statearr_36460[(10)] = inst_36384);

(statearr_36460[(11)] = inst_36385);

(statearr_36460[(12)] = inst_36383);

return statearr_36460;
})();
var statearr_36461_37811 = state_36431__$1;
(statearr_36461_37811[(2)] = null);

(statearr_36461_37811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (3))){
var inst_36429 = (state_36431[(2)]);
var state_36431__$1 = state_36431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36431__$1,inst_36429);
} else {
if((state_val_36432 === (12))){
var inst_36417 = (state_36431[(2)]);
var state_36431__$1 = state_36431;
var statearr_36462_37816 = state_36431__$1;
(statearr_36462_37816[(2)] = inst_36417);

(statearr_36462_37816[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (2))){
var state_36431__$1 = state_36431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36431__$1,(4),in$);
} else {
if((state_val_36432 === (23))){
var inst_36425 = (state_36431[(2)]);
var state_36431__$1 = state_36431;
var statearr_36463_37820 = state_36431__$1;
(statearr_36463_37820[(2)] = inst_36425);

(statearr_36463_37820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (19))){
var inst_36412 = (state_36431[(2)]);
var state_36431__$1 = state_36431;
var statearr_36464_37821 = state_36431__$1;
(statearr_36464_37821[(2)] = inst_36412);

(statearr_36464_37821[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (11))){
var inst_36382 = (state_36431[(8)]);
var inst_36396 = (state_36431[(7)]);
var inst_36396__$1 = cljs.core.seq(inst_36382);
var state_36431__$1 = (function (){var statearr_36465 = state_36431;
(statearr_36465[(7)] = inst_36396__$1);

return statearr_36465;
})();
if(inst_36396__$1){
var statearr_36466_37822 = state_36431__$1;
(statearr_36466_37822[(1)] = (14));

} else {
var statearr_36467_37823 = state_36431__$1;
(statearr_36467_37823[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (9))){
var inst_36419 = (state_36431[(2)]);
var inst_36420 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36431__$1 = (function (){var statearr_36468 = state_36431;
(statearr_36468[(15)] = inst_36419);

return statearr_36468;
})();
if(cljs.core.truth_(inst_36420)){
var statearr_36469_37824 = state_36431__$1;
(statearr_36469_37824[(1)] = (21));

} else {
var statearr_36471_37825 = state_36431__$1;
(statearr_36471_37825[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (5))){
var inst_36374 = cljs.core.async.close_BANG_(out);
var state_36431__$1 = state_36431;
var statearr_36472_37826 = state_36431__$1;
(statearr_36472_37826[(2)] = inst_36374);

(statearr_36472_37826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (14))){
var inst_36396 = (state_36431[(7)]);
var inst_36398 = cljs.core.chunked_seq_QMARK_(inst_36396);
var state_36431__$1 = state_36431;
if(inst_36398){
var statearr_36474_37827 = state_36431__$1;
(statearr_36474_37827[(1)] = (17));

} else {
var statearr_36475_37828 = state_36431__$1;
(statearr_36475_37828[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (16))){
var inst_36415 = (state_36431[(2)]);
var state_36431__$1 = state_36431;
var statearr_36476_37829 = state_36431__$1;
(statearr_36476_37829[(2)] = inst_36415);

(statearr_36476_37829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36432 === (10))){
var inst_36385 = (state_36431[(11)]);
var inst_36383 = (state_36431[(12)]);
var inst_36390 = cljs.core._nth(inst_36383,inst_36385);
var state_36431__$1 = state_36431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36431__$1,(13),out,inst_36390);
} else {
if((state_val_36432 === (18))){
var inst_36396 = (state_36431[(7)]);
var inst_36406 = cljs.core.first(inst_36396);
var state_36431__$1 = state_36431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36431__$1,(20),out,inst_36406);
} else {
if((state_val_36432 === (8))){
var inst_36384 = (state_36431[(10)]);
var inst_36385 = (state_36431[(11)]);
var inst_36387 = (inst_36385 < inst_36384);
var inst_36388 = inst_36387;
var state_36431__$1 = state_36431;
if(cljs.core.truth_(inst_36388)){
var statearr_36477_37830 = state_36431__$1;
(statearr_36477_37830[(1)] = (10));

} else {
var statearr_36478_37831 = state_36431__$1;
(statearr_36478_37831[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34210__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34210__auto____0 = (function (){
var statearr_36480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36480[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34210__auto__);

(statearr_36480[(1)] = (1));

return statearr_36480;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34210__auto____1 = (function (state_36431){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_36431);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e36481){var ex__34213__auto__ = e36481;
var statearr_36485_37832 = state_36431;
(statearr_36485_37832[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_36431[(4)]))){
var statearr_36490_37833 = state_36431;
(statearr_36490_37833[(1)] = cljs.core.first((state_36431[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37837 = state_36431;
state_36431 = G__37837;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34210__auto__ = function(state_36431){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34210__auto____1.call(this,state_36431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34210__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34210__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_36492 = f__34413__auto__();
(statearr_36492[(6)] = c__34412__auto__);

return statearr_36492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));

return c__34412__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36494 = arguments.length;
switch (G__36494) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36512 = arguments.length;
switch (G__36512) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36514 = arguments.length;
switch (G__36514) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34412__auto___37844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_36541){
var state_val_36542 = (state_36541[(1)]);
if((state_val_36542 === (7))){
var inst_36536 = (state_36541[(2)]);
var state_36541__$1 = state_36541;
var statearr_36543_37845 = state_36541__$1;
(statearr_36543_37845[(2)] = inst_36536);

(statearr_36543_37845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (1))){
var inst_36518 = null;
var state_36541__$1 = (function (){var statearr_36544 = state_36541;
(statearr_36544[(7)] = inst_36518);

return statearr_36544;
})();
var statearr_36545_37846 = state_36541__$1;
(statearr_36545_37846[(2)] = null);

(statearr_36545_37846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (4))){
var inst_36521 = (state_36541[(8)]);
var inst_36521__$1 = (state_36541[(2)]);
var inst_36522 = (inst_36521__$1 == null);
var inst_36523 = cljs.core.not(inst_36522);
var state_36541__$1 = (function (){var statearr_36546 = state_36541;
(statearr_36546[(8)] = inst_36521__$1);

return statearr_36546;
})();
if(inst_36523){
var statearr_36547_37847 = state_36541__$1;
(statearr_36547_37847[(1)] = (5));

} else {
var statearr_36548_37848 = state_36541__$1;
(statearr_36548_37848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (6))){
var state_36541__$1 = state_36541;
var statearr_36549_37849 = state_36541__$1;
(statearr_36549_37849[(2)] = null);

(statearr_36549_37849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (3))){
var inst_36538 = (state_36541[(2)]);
var inst_36539 = cljs.core.async.close_BANG_(out);
var state_36541__$1 = (function (){var statearr_36550 = state_36541;
(statearr_36550[(9)] = inst_36538);

return statearr_36550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36541__$1,inst_36539);
} else {
if((state_val_36542 === (2))){
var state_36541__$1 = state_36541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36541__$1,(4),ch);
} else {
if((state_val_36542 === (11))){
var inst_36521 = (state_36541[(8)]);
var inst_36530 = (state_36541[(2)]);
var inst_36518 = inst_36521;
var state_36541__$1 = (function (){var statearr_36552 = state_36541;
(statearr_36552[(10)] = inst_36530);

(statearr_36552[(7)] = inst_36518);

return statearr_36552;
})();
var statearr_36553_37850 = state_36541__$1;
(statearr_36553_37850[(2)] = null);

(statearr_36553_37850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (9))){
var inst_36521 = (state_36541[(8)]);
var state_36541__$1 = state_36541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36541__$1,(11),out,inst_36521);
} else {
if((state_val_36542 === (5))){
var inst_36518 = (state_36541[(7)]);
var inst_36521 = (state_36541[(8)]);
var inst_36525 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36521,inst_36518);
var state_36541__$1 = state_36541;
if(inst_36525){
var statearr_36555_37851 = state_36541__$1;
(statearr_36555_37851[(1)] = (8));

} else {
var statearr_36556_37852 = state_36541__$1;
(statearr_36556_37852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (10))){
var inst_36533 = (state_36541[(2)]);
var state_36541__$1 = state_36541;
var statearr_36557_37853 = state_36541__$1;
(statearr_36557_37853[(2)] = inst_36533);

(statearr_36557_37853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (8))){
var inst_36518 = (state_36541[(7)]);
var tmp36554 = inst_36518;
var inst_36518__$1 = tmp36554;
var state_36541__$1 = (function (){var statearr_36558 = state_36541;
(statearr_36558[(7)] = inst_36518__$1);

return statearr_36558;
})();
var statearr_36559_37854 = state_36541__$1;
(statearr_36559_37854[(2)] = null);

(statearr_36559_37854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34210__auto__ = null;
var cljs$core$async$state_machine__34210__auto____0 = (function (){
var statearr_36560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36560[(0)] = cljs$core$async$state_machine__34210__auto__);

(statearr_36560[(1)] = (1));

return statearr_36560;
});
var cljs$core$async$state_machine__34210__auto____1 = (function (state_36541){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_36541);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e36561){var ex__34213__auto__ = e36561;
var statearr_36562_37855 = state_36541;
(statearr_36562_37855[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_36541[(4)]))){
var statearr_36563_37856 = state_36541;
(statearr_36563_37856[(1)] = cljs.core.first((state_36541[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37857 = state_36541;
state_36541 = G__37857;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$state_machine__34210__auto__ = function(state_36541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34210__auto____1.call(this,state_36541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34210__auto____0;
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34210__auto____1;
return cljs$core$async$state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_36564 = f__34413__auto__();
(statearr_36564[(6)] = c__34412__auto___37844);

return statearr_36564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36566 = arguments.length;
switch (G__36566) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34412__auto___37862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_36604){
var state_val_36605 = (state_36604[(1)]);
if((state_val_36605 === (7))){
var inst_36600 = (state_36604[(2)]);
var state_36604__$1 = state_36604;
var statearr_36606_37863 = state_36604__$1;
(statearr_36606_37863[(2)] = inst_36600);

(statearr_36606_37863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (1))){
var inst_36567 = (new Array(n));
var inst_36568 = inst_36567;
var inst_36569 = (0);
var state_36604__$1 = (function (){var statearr_36607 = state_36604;
(statearr_36607[(7)] = inst_36569);

(statearr_36607[(8)] = inst_36568);

return statearr_36607;
})();
var statearr_36608_37864 = state_36604__$1;
(statearr_36608_37864[(2)] = null);

(statearr_36608_37864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (4))){
var inst_36572 = (state_36604[(9)]);
var inst_36572__$1 = (state_36604[(2)]);
var inst_36573 = (inst_36572__$1 == null);
var inst_36574 = cljs.core.not(inst_36573);
var state_36604__$1 = (function (){var statearr_36609 = state_36604;
(statearr_36609[(9)] = inst_36572__$1);

return statearr_36609;
})();
if(inst_36574){
var statearr_36610_37866 = state_36604__$1;
(statearr_36610_37866[(1)] = (5));

} else {
var statearr_36611_37867 = state_36604__$1;
(statearr_36611_37867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (15))){
var inst_36594 = (state_36604[(2)]);
var state_36604__$1 = state_36604;
var statearr_36612_37868 = state_36604__$1;
(statearr_36612_37868[(2)] = inst_36594);

(statearr_36612_37868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (13))){
var state_36604__$1 = state_36604;
var statearr_36613_37869 = state_36604__$1;
(statearr_36613_37869[(2)] = null);

(statearr_36613_37869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (6))){
var inst_36569 = (state_36604[(7)]);
var inst_36590 = (inst_36569 > (0));
var state_36604__$1 = state_36604;
if(cljs.core.truth_(inst_36590)){
var statearr_36614_37870 = state_36604__$1;
(statearr_36614_37870[(1)] = (12));

} else {
var statearr_36615_37871 = state_36604__$1;
(statearr_36615_37871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (3))){
var inst_36602 = (state_36604[(2)]);
var state_36604__$1 = state_36604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36604__$1,inst_36602);
} else {
if((state_val_36605 === (12))){
var inst_36568 = (state_36604[(8)]);
var inst_36592 = cljs.core.vec(inst_36568);
var state_36604__$1 = state_36604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36604__$1,(15),out,inst_36592);
} else {
if((state_val_36605 === (2))){
var state_36604__$1 = state_36604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36604__$1,(4),ch);
} else {
if((state_val_36605 === (11))){
var inst_36584 = (state_36604[(2)]);
var inst_36585 = (new Array(n));
var inst_36568 = inst_36585;
var inst_36569 = (0);
var state_36604__$1 = (function (){var statearr_36616 = state_36604;
(statearr_36616[(7)] = inst_36569);

(statearr_36616[(8)] = inst_36568);

(statearr_36616[(10)] = inst_36584);

return statearr_36616;
})();
var statearr_36617_37872 = state_36604__$1;
(statearr_36617_37872[(2)] = null);

(statearr_36617_37872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (9))){
var inst_36568 = (state_36604[(8)]);
var inst_36582 = cljs.core.vec(inst_36568);
var state_36604__$1 = state_36604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36604__$1,(11),out,inst_36582);
} else {
if((state_val_36605 === (5))){
var inst_36577 = (state_36604[(11)]);
var inst_36572 = (state_36604[(9)]);
var inst_36569 = (state_36604[(7)]);
var inst_36568 = (state_36604[(8)]);
var inst_36576 = (inst_36568[inst_36569] = inst_36572);
var inst_36577__$1 = (inst_36569 + (1));
var inst_36578 = (inst_36577__$1 < n);
var state_36604__$1 = (function (){var statearr_36618 = state_36604;
(statearr_36618[(11)] = inst_36577__$1);

(statearr_36618[(12)] = inst_36576);

return statearr_36618;
})();
if(cljs.core.truth_(inst_36578)){
var statearr_36619_37873 = state_36604__$1;
(statearr_36619_37873[(1)] = (8));

} else {
var statearr_36620_37874 = state_36604__$1;
(statearr_36620_37874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (14))){
var inst_36597 = (state_36604[(2)]);
var inst_36598 = cljs.core.async.close_BANG_(out);
var state_36604__$1 = (function (){var statearr_36622 = state_36604;
(statearr_36622[(13)] = inst_36597);

return statearr_36622;
})();
var statearr_36623_37875 = state_36604__$1;
(statearr_36623_37875[(2)] = inst_36598);

(statearr_36623_37875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (10))){
var inst_36588 = (state_36604[(2)]);
var state_36604__$1 = state_36604;
var statearr_36624_37876 = state_36604__$1;
(statearr_36624_37876[(2)] = inst_36588);

(statearr_36624_37876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (8))){
var inst_36577 = (state_36604[(11)]);
var inst_36568 = (state_36604[(8)]);
var tmp36621 = inst_36568;
var inst_36568__$1 = tmp36621;
var inst_36569 = inst_36577;
var state_36604__$1 = (function (){var statearr_36625 = state_36604;
(statearr_36625[(7)] = inst_36569);

(statearr_36625[(8)] = inst_36568__$1);

return statearr_36625;
})();
var statearr_36626_37877 = state_36604__$1;
(statearr_36626_37877[(2)] = null);

(statearr_36626_37877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34210__auto__ = null;
var cljs$core$async$state_machine__34210__auto____0 = (function (){
var statearr_36627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36627[(0)] = cljs$core$async$state_machine__34210__auto__);

(statearr_36627[(1)] = (1));

return statearr_36627;
});
var cljs$core$async$state_machine__34210__auto____1 = (function (state_36604){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_36604);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e36628){var ex__34213__auto__ = e36628;
var statearr_36629_37878 = state_36604;
(statearr_36629_37878[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_36604[(4)]))){
var statearr_36630_37879 = state_36604;
(statearr_36630_37879[(1)] = cljs.core.first((state_36604[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37880 = state_36604;
state_36604 = G__37880;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$state_machine__34210__auto__ = function(state_36604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34210__auto____1.call(this,state_36604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34210__auto____0;
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34210__auto____1;
return cljs$core$async$state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_36631 = f__34413__auto__();
(statearr_36631[(6)] = c__34412__auto___37862);

return statearr_36631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36633 = arguments.length;
switch (G__36633) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34412__auto___37882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34413__auto__ = (function (){var switch__34209__auto__ = (function (state_36675){
var state_val_36676 = (state_36675[(1)]);
if((state_val_36676 === (7))){
var inst_36671 = (state_36675[(2)]);
var state_36675__$1 = state_36675;
var statearr_36677_37883 = state_36675__$1;
(statearr_36677_37883[(2)] = inst_36671);

(statearr_36677_37883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36676 === (1))){
var inst_36634 = [];
var inst_36635 = inst_36634;
var inst_36636 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36675__$1 = (function (){var statearr_36678 = state_36675;
(statearr_36678[(7)] = inst_36636);

(statearr_36678[(8)] = inst_36635);

return statearr_36678;
})();
var statearr_36679_37884 = state_36675__$1;
(statearr_36679_37884[(2)] = null);

(statearr_36679_37884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36676 === (4))){
var inst_36639 = (state_36675[(9)]);
var inst_36639__$1 = (state_36675[(2)]);
var inst_36640 = (inst_36639__$1 == null);
var inst_36641 = cljs.core.not(inst_36640);
var state_36675__$1 = (function (){var statearr_36680 = state_36675;
(statearr_36680[(9)] = inst_36639__$1);

return statearr_36680;
})();
if(inst_36641){
var statearr_36681_37885 = state_36675__$1;
(statearr_36681_37885[(1)] = (5));

} else {
var statearr_36682_37886 = state_36675__$1;
(statearr_36682_37886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36676 === (15))){
var inst_36665 = (state_36675[(2)]);
var state_36675__$1 = state_36675;
var statearr_36683_37887 = state_36675__$1;
(statearr_36683_37887[(2)] = inst_36665);

(statearr_36683_37887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36676 === (13))){
var state_36675__$1 = state_36675;
var statearr_36684_37888 = state_36675__$1;
(statearr_36684_37888[(2)] = null);

(statearr_36684_37888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36676 === (6))){
var inst_36635 = (state_36675[(8)]);
var inst_36660 = inst_36635.length;
var inst_36661 = (inst_36660 > (0));
var state_36675__$1 = state_36675;
if(cljs.core.truth_(inst_36661)){
var statearr_36685_37889 = state_36675__$1;
(statearr_36685_37889[(1)] = (12));

} else {
var statearr_36686_37890 = state_36675__$1;
(statearr_36686_37890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36676 === (3))){
var inst_36673 = (state_36675[(2)]);
var state_36675__$1 = state_36675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36675__$1,inst_36673);
} else {
if((state_val_36676 === (12))){
var inst_36635 = (state_36675[(8)]);
var inst_36663 = cljs.core.vec(inst_36635);
var state_36675__$1 = state_36675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36675__$1,(15),out,inst_36663);
} else {
if((state_val_36676 === (2))){
var state_36675__$1 = state_36675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36675__$1,(4),ch);
} else {
if((state_val_36676 === (11))){
var inst_36639 = (state_36675[(9)]);
var inst_36643 = (state_36675[(10)]);
var inst_36653 = (state_36675[(2)]);
var inst_36654 = [];
var inst_36655 = inst_36654.push(inst_36639);
var inst_36635 = inst_36654;
var inst_36636 = inst_36643;
var state_36675__$1 = (function (){var statearr_36687 = state_36675;
(statearr_36687[(11)] = inst_36653);

(statearr_36687[(7)] = inst_36636);

(statearr_36687[(12)] = inst_36655);

(statearr_36687[(8)] = inst_36635);

return statearr_36687;
})();
var statearr_36688_37895 = state_36675__$1;
(statearr_36688_37895[(2)] = null);

(statearr_36688_37895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36676 === (9))){
var inst_36635 = (state_36675[(8)]);
var inst_36651 = cljs.core.vec(inst_36635);
var state_36675__$1 = state_36675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36675__$1,(11),out,inst_36651);
} else {
if((state_val_36676 === (5))){
var inst_36639 = (state_36675[(9)]);
var inst_36643 = (state_36675[(10)]);
var inst_36636 = (state_36675[(7)]);
var inst_36643__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36639) : f.call(null,inst_36639));
var inst_36644 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36643__$1,inst_36636);
var inst_36645 = cljs.core.keyword_identical_QMARK_(inst_36636,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36646 = ((inst_36644) || (inst_36645));
var state_36675__$1 = (function (){var statearr_36689 = state_36675;
(statearr_36689[(10)] = inst_36643__$1);

return statearr_36689;
})();
if(cljs.core.truth_(inst_36646)){
var statearr_36690_37896 = state_36675__$1;
(statearr_36690_37896[(1)] = (8));

} else {
var statearr_36691_37897 = state_36675__$1;
(statearr_36691_37897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36676 === (14))){
var inst_36668 = (state_36675[(2)]);
var inst_36669 = cljs.core.async.close_BANG_(out);
var state_36675__$1 = (function (){var statearr_36693 = state_36675;
(statearr_36693[(13)] = inst_36668);

return statearr_36693;
})();
var statearr_36694_37898 = state_36675__$1;
(statearr_36694_37898[(2)] = inst_36669);

(statearr_36694_37898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36676 === (10))){
var inst_36658 = (state_36675[(2)]);
var state_36675__$1 = state_36675;
var statearr_36695_37899 = state_36675__$1;
(statearr_36695_37899[(2)] = inst_36658);

(statearr_36695_37899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36676 === (8))){
var inst_36639 = (state_36675[(9)]);
var inst_36643 = (state_36675[(10)]);
var inst_36635 = (state_36675[(8)]);
var inst_36648 = inst_36635.push(inst_36639);
var tmp36692 = inst_36635;
var inst_36635__$1 = tmp36692;
var inst_36636 = inst_36643;
var state_36675__$1 = (function (){var statearr_36696 = state_36675;
(statearr_36696[(7)] = inst_36636);

(statearr_36696[(8)] = inst_36635__$1);

(statearr_36696[(14)] = inst_36648);

return statearr_36696;
})();
var statearr_36697_37900 = state_36675__$1;
(statearr_36697_37900[(2)] = null);

(statearr_36697_37900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34210__auto__ = null;
var cljs$core$async$state_machine__34210__auto____0 = (function (){
var statearr_36698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36698[(0)] = cljs$core$async$state_machine__34210__auto__);

(statearr_36698[(1)] = (1));

return statearr_36698;
});
var cljs$core$async$state_machine__34210__auto____1 = (function (state_36675){
while(true){
var ret_value__34211__auto__ = (function (){try{while(true){
var result__34212__auto__ = switch__34209__auto__(state_36675);
if(cljs.core.keyword_identical_QMARK_(result__34212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34212__auto__;
}
break;
}
}catch (e36699){var ex__34213__auto__ = e36699;
var statearr_36700_37901 = state_36675;
(statearr_36700_37901[(2)] = ex__34213__auto__);


if(cljs.core.seq((state_36675[(4)]))){
var statearr_36701_37902 = state_36675;
(statearr_36701_37902[(1)] = cljs.core.first((state_36675[(4)])));

} else {
throw ex__34213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37903 = state_36675;
state_36675 = G__37903;
continue;
} else {
return ret_value__34211__auto__;
}
break;
}
});
cljs$core$async$state_machine__34210__auto__ = function(state_36675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34210__auto____1.call(this,state_36675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34210__auto____0;
cljs$core$async$state_machine__34210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34210__auto____1;
return cljs$core$async$state_machine__34210__auto__;
})()
})();
var state__34414__auto__ = (function (){var statearr_36702 = f__34413__auto__();
(statearr_36702[(6)] = c__34412__auto___37882);

return statearr_36702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34414__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

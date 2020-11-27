goog.provide('codes.gjl.blog.app');
codes.gjl.blog.app.app_root = document.getElementById("app");
codes.gjl.blog.app.label = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"text-center sm:text-left"},["Blog"]);
}),null,"codes.gjl.blog.app/label");
codes.gjl.blog.app.start = (function codes$gjl$blog$app$start(){
console.log("start");

return rum.core.mount(codes.gjl.blog.app.label(),codes.gjl.blog.app.app_root);
});
codes.gjl.blog.app.init = (function codes$gjl$blog$app$init(){
console.log("init");

return codes.gjl.blog.app.start();
});
goog.exportSymbol('codes.gjl.blog.app.init', codes.gjl.blog.app.init);
codes.gjl.blog.app.stop = (function codes$gjl$blog$app$stop(){
return console.log("stop");
});

//# sourceMappingURL=codes.gjl.blog.app.js.map

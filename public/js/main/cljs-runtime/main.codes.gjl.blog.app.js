goog.provide('main.codes.gjl.blog.app');
main.codes.gjl.blog.app.app_root = document.getElementById("app");
main.codes.gjl.blog.app.label = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"text-center sm:text-left"},["Blog"]);
}),null,"main.codes.gjl.blog.app/label");
main.codes.gjl.blog.app.start = (function main$codes$gjl$blog$app$start(){
console.log("start");

return rum.core.mount(main.codes.gjl.blog.app.label(),main.codes.gjl.blog.app.app_root);
});
main.codes.gjl.blog.app.init = (function main$codes$gjl$blog$app$init(){
console.log("init");

return main.codes.gjl.blog.app.start();
});
goog.exportSymbol('main.codes.gjl.blog.app.init', main.codes.gjl.blog.app.init);
main.codes.gjl.blog.app.stop = (function main$codes$gjl$blog$app$stop(){
return console.log("stop");
});

//# sourceMappingURL=main.codes.gjl.blog.app.js.map

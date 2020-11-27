
shadow.cljs.devtools.client.env.module_loaded('main');

try { codes.gjl.blog.app.init(); } catch (e) { console.error("An error occurred when calling (codes.gjl.blog.app/init)"); throw(e); }
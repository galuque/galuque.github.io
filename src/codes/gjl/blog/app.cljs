(ns codes.gjl.blog.app
  (:require [rum.core :as rum]))

(def app-root (.getElementById js/document "app"))

(rum/defc label []
  [:div {:class ["text-center sm:text-left"]} "Blog"])

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (js/console.log "start")
  (rum/mount (label) app-root))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (js/console.log "init")
  (start))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))


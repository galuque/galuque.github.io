(ns io.github.galuque.site-generator
  (:require [clojure.java.io :as io]
            [markdown.core :as md]
            [selmer.parser :as tmpl])
  (:import [java.text SimpleDateFormat]))

(set! *warn-on-reflection* true)

(defn path [^java.io.File file]
  (.getPath file))

(defn list-files [^java.io.File dir]
  (.listFiles dir))

(def posts-path "resources/posts/")


(defn posts-paths []
  (->> posts-path
       io/file
       list-files
       (map path)))

(defn md->html
  [filename]
  (-> (slurp filename)
      (md/md-to-html-string-with-meta
       :heading-anchors true
       :reference-links? true
       :footnotes? true)))

(defn parse-date [s]
  (let [parser (SimpleDateFormat. "yyyy-MM-dd")]
    (.parse parser s)))

(defn posts []
  (->> (posts-paths)
       (map md->html)
       (sort-by #(-> % :metadata :date first parse-date)
                #(compare %2 %1))))

(defn create-index []
  (->> (tmpl/render-file "templates/index.html" {})
       (spit "docs/index.html")))

(defn create-posts-index [posts]
  (->> (tmpl/render-file "templates/posts.html" {:posts posts})
       (assoc {} :main)
       (tmpl/render-file "templates/index.html")
       (spit "docs/posts/index.html")))

(defn create-individual-posts [posts]
  (doall
   (for [post posts
         :let [filename (-> post :metadata :filename first)]]
     (->> (tmpl/render-file "templates/content.html" {:content (:html post)})
          (assoc {} :main)
          (tmpl/render-file "templates/index.html")
          (spit (str "docs/posts/" filename))))))

(defn create-site! [_args]
  (println "Rendering site...")
  (create-index)
  (create-posts-index (posts))
  (create-individual-posts (posts))
  ;; TODO: create projects index
  (println "Site rendered!"))

(comment

  (create-site! {})
  )
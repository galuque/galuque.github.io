(ns codes.gjl.workspaces.main
  (:require [nubank.workspaces.core :as ws]
            [codes.gjl.workspaces.cards :as my-cards]
            ; require your cards namespaces here
            ))


(defonce init (ws/mount))
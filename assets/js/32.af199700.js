(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{234:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"stop-words"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-words"}},[t._v("#")]),t._v(" Stop words")]),t._v(" "),a("h2",{attrs:{id:"get-the-list-of-stop-words"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-list-of-stop-words"}},[t._v("#")]),t._v(" Get the list of stop-words")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index/stop-words"}}),t._v(" "),a("p",[t._v("Get the list "),a("a",{attrs:{href:"/advanced_guides/stop_words"}},[t._v("stop-words")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Header")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("X-Meili-API-Key")])]),t._v(" "),a("td",[a("code",[t._v("$API_KEY")])])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Content-Type")])]),t._v(" "),a("td",[t._v("application/json")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Accept-encoding")])]),t._v(" "),a("td",[t._v("gzip, deflate")])])])]),t._v(" "),a("h4",{attrs:{id:"path-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --request GET "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080/indexes/12345678/stop-words'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Meili-API-Key: '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$API_KEY")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n")])])]),a("h4",{attrs:{id:"response-200-ok"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("200 Ok")])]),t._v(" "),a("p",[t._v("List of all the stop-words in the index.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"of"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"the"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"to"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"add-stop-words"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-stop-words"}},[t._v("#")]),t._v(" Add stop-words")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"PATCH",route:"/indexes/:index/stop-words"}}),t._v(" "),a("p",[t._v("Add "),a("a",{attrs:{href:"/advanced_guides/stop_words"}},[t._v("stop-words")]),t._v(" to the list.")]),t._v(" "),a("h4",{attrs:{id:"headers-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers-2"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Header")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("X-Meili-API-Key")])]),t._v(" "),a("td",[a("code",[t._v("$API_KEY")])])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Content-Type")])]),t._v(" "),a("td",[t._v("application/json")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Accept-encoding")])]),t._v(" "),a("td",[t._v("gzip, deflate")])])])]),t._v(" "),a("h4",{attrs:{id:"path-variables-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("p",[t._v("An array of strings containing the "),a("a",{attrs:{href:"/advanced_guides/stop_words"}},[t._v("stop-words")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --request PATCH "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080/indexes/12345678/stop-words'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Meili-API-Key: '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$API_KEY")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'["the", "of", "to"]\'')]),t._v("\n")])])]),a("h4",{attrs:{id:"response-202-accepted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("a",{attrs:{href:"/references/updates"}},[t._v("update id allows you to track")]),t._v(" the current action.")]),t._v(" "),a("h2",{attrs:{id:"delete-stop-words"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-stop-words"}},[t._v("#")]),t._v(" Delete stop-words")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index/stop-words"}}),t._v(" "),a("p",[t._v("Delete a list of "),a("a",{attrs:{href:"/advanced_guides/stop_words"}},[t._v("stop-words")]),t._v(" from the list.")]),t._v(" "),a("h4",{attrs:{id:"headers-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers-3"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Header")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("X-Meili-API-Key")])]),t._v(" "),a("td",[a("code",[t._v("$API_KEY")])])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Content-Type")])]),t._v(" "),a("td",[t._v("application/json")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Accept-encoding")])]),t._v(" "),a("td",[t._v("gzip, deflate")])])])]),t._v(" "),a("h4",{attrs:{id:"path-variables-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"body-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body-2"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("p",[t._v("An array of strings containing the "),a("a",{attrs:{href:"/advanced_guides/stop_words"}},[t._v("stop-words")]),t._v(" to delete.")]),t._v(" "),a("h3",{attrs:{id:"example-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --request POST "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080/indexes/12345678/stop-words'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Meili-API-Key: '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$API_KEY")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[\"the\"]'")]),t._v("\n")])])]),a("h4",{attrs:{id:"response-202-accepted-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-2"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("a",{attrs:{href:"/references/updates"}},[t._v("update id allows you to track")]),t._v(" the current action.")])],1)}),[],!1,null,null,null);s.default=r.exports}}]);
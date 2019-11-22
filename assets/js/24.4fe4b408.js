(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{226:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documents"}},[t._v("#")]),t._v(" Documents")]),t._v(" "),a("h2",{attrs:{id:"get-one-document"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-one-document"}},[t._v("#")]),t._v(" Get one document")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index/documents/:identifier"}}),t._v(" "),a("p",[t._v("Get one document using its unique identifier.")]),t._v(" "),a("h4",{attrs:{id:"headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Header")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("X-Meili-API-Key")])]),t._v(" "),a("td",[a("code",[t._v("$API_KEY")])])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Accept-encoding")])]),t._v(" "),a("td",[t._v("gzip, deflate")])])])]),t._v(" "),a("h4",{attrs:{id:"path-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index")])]),t._v(" "),a("td",[t._v("The index UID")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("identifier")])]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/documents.html#schemas"}},[t._v("The unique identifier of the document")])],1)])])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --request GET "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080/indexes/12345678/documents/25684'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Meili-API-Key: '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$API_KEY")]),t._v('"')]),t._v("\n")])])]),a("h4",{attrs:{id:"response-200-ok"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("200 Ok")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25684")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"American Ninja 5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/iuAQVI4mvjI83wnirpD8GVNRVuY.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"When a scientists daughter is kidnapped, American Ninja, attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1993-01-01"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"get-all-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-all-documents"}},[t._v("#")]),t._v(" Get all documents")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index/documents"}}),t._v(" "),a("p",[t._v("Get the documents in an unordered way.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("This route is a non-optimized route, it can be a little bit slow to answer.")])]),t._v(" "),a("h4",{attrs:{id:"headers-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers-2"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Header")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("X-Meili-API-Key")])]),t._v(" "),a("td",[a("code",[t._v("$API_KEY")])])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Content-Type")])]),t._v(" "),a("td",[t._v("application/json")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Accept-encoding")])]),t._v(" "),a("td",[t._v("gzip, deflate")])])])]),t._v(" "),a("h4",{attrs:{id:"path-variables-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Query Parameter")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("offset")])]),t._v(" "),a("td",[t._v("number of documents to skip")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("limit")])]),t._v(" "),a("td",[t._v("number of documents to take")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("attributesToRetrieve")])]),t._v(" "),a("td",[t._v("document attributes to show")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("*")])])])]),t._v(" "),a("h3",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --request GET "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080/indexes/12345678/documents?limit=5'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Meili-API-Key: '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$API_KEY")]),t._v('"')]),t._v("\n")])])]),a("h4",{attrs:{id:"response-200-ok-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok-2"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("200 Ok")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25684")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1993-01-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/iuAQVI4mvjI83wnirpD8GVNRVuY.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"American Ninja 5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"When a scientists daughter is kidnapped, American Ninja, attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja."')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("468219")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dead in a Week (Or Your Money Back)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-09-12"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/f4ANVEuEaGy2oP5M0Y2P1dwxUNn.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"William has failed to kill himself so many times that he outsources his suicide to aging assassin Leslie. But with the contract signed and death assured within a week (or his money back), William suddenly discovers reasons to live... However Leslie is under pressure from his boss to make sure the contract is completed."')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"add-or-update-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-or-update-documents"}},[t._v("#")]),t._v(" Add or Update documents")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:index/documents"}}),t._v(" "),a("p",[t._v("Insert a list of documents or update them if they already exist based on "),a("router-link",{attrs:{to:"/documents.html#schemas"}},[t._v("their unique identifiers")]),t._v(".")],1),t._v(" "),a("p",[t._v("The update id returned by this function can be sent to the "),a("router-link",{attrs:{to:"/indexes.html#get-an-update-status"}},[t._v("get update status route")]),t._v(" to retrieve informations about its advancement.")],1),t._v(" "),a("h4",{attrs:{id:"headers-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers-3"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Header")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("X-Meili-API-Key")])]),t._v(" "),a("td",[a("code",[t._v("$API_KEY")])])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Content-Type")])]),t._v(" "),a("td",[t._v("application/json")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Accept-encoding")])]),t._v(" "),a("td",[t._v("gzip, deflate")])])])]),t._v(" "),a("h4",{attrs:{id:"path-variables-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("p",[t._v("The body is composed of a "),a("strong",[t._v("Json array")]),t._v(" of documents composed of fields corresponding to the index schema.\nYou can "),a("router-link",{attrs:{to:"/documents.html#schemas"}},[t._v("read more about fields and schemas")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Documents fields which are not known to the index schema will be ignored")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("287947")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shazam"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/xnopI5Xtky18MPhK40cZAGAOVeV.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A boy is given the ability to become an adult superhero in times of need with a single magic word."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-03-23"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"example-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --request POST "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080/indexes/12345678/documents'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Meili-API-Key: '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$API_KEY")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[{\n      "id": 287947,\n      "title": "Shazam",\n      "poster": "https://image.tmdb.org/t/p/w1280/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",\n      "overview": "A boy is given the ability to become an adult superhero in times of need with a single magic word.",\n      "release_date": "2019-03-23"\n    }]\'')]),t._v("\n")])])]),a("h4",{attrs:{id:"response-202-accepted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("a",{attrs:{href:"/references/updates"}},[t._v("update id allows you to track")]),t._v(" the current action.")]),t._v(" "),a("h2",{attrs:{id:"update-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-documents"}},[t._v("#")]),t._v(" Update documents")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"PUT",route:"/indexes/:index/documents"}}),t._v(" "),a("p",[t._v("same as "),a("router-link",{attrs:{to:"/references/documents.html#add-or-update-documents"}},[t._v("Add or Update")])],1),t._v(" "),a("h2",{attrs:{id:"batch-write-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-write-documents"}},[t._v("#")]),t._v(" Batch write documents")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:index/documents/batch"}}),t._v(" "),a("p",[t._v("Insert and Delete multiple documents in one request.")]),t._v(" "),a("p",[t._v("The update id returned by this function can be sent to the "),a("router-link",{attrs:{to:"/indexes.html#get-an-update-status"}},[t._v("get update status route")]),t._v(" to retrieve informations about its advancement.")],1),t._v(" "),a("h4",{attrs:{id:"headers-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers-4"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Header")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("X-Meili-API-Key")])]),t._v(" "),a("td",[a("code",[t._v("$API_KEY")])])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Content-Type")])]),t._v(" "),a("td",[t._v("application/json")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Accept-encoding")])]),t._v(" "),a("td",[t._v("gzip, deflate")])])])]),t._v(" "),a("h4",{attrs:{id:"path-variables-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-4"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"body-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body-2"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("p",[t._v("The body must contain a "),a("strong",[t._v("Json Object")]),t._v(" containing an "),a("code",[t._v("insert")]),t._v(" and a "),a("code",[t._v("delete")]),t._v(" field:")]),t._v(" "),a("ul",[a("li",[t._v("the "),a("code",[t._v("insert")]),t._v(" field expect the same body as the "),a("a",{attrs:{href:"#add-or-update-documents"}},[t._v("Add or Update documents")]),t._v(" route.")]),t._v(" "),a("li",[t._v("the "),a("code",[t._v("delete")]),t._v(" field expect the same body as the "),a("a",{attrs:{href:"#delete-multiple-documents"}},[t._v("Delete multiple documents")]),t._v(" route.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Unknown documents attributes will be ignored. You can "),a("router-link",{attrs:{to:"/documents.html#schemas"}},[t._v("read more about that")]),t._v(".")],1)]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"insert"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"delete"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"example-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --request POST "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080/indexes/12345678/documents'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Meili-API-Key: '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$API_KEY")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n      "insert": [\n        {\n          "id": 287947,\n          "title": "Shazam!",\n          "poster": "https://image.tmdb.org/t/p/w1280/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",\n          "overview": "A boy is given the ability to become an adult superhero in times of need with a single magic word.",\n          "release_date": "2019-03-23"\n        }\n      ],\n      "delete": [\n        522681\n      ]\n    }\'')]),t._v("\n")])])]),a("h4",{attrs:{id:"response-202-accepted-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-2"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("a",{attrs:{href:"/references/updates"}},[t._v("update id allows you to track")]),t._v(" the current action.")]),t._v(" "),a("h2",{attrs:{id:"clear-all-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear-all-documents"}},[t._v("#")]),t._v(" Clear all documents")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index/documents"}}),t._v(" "),a("p",[t._v("Delete all documents in the specified index.")]),t._v(" "),a("p",[t._v("The update id returned by this function can be sent to the "),a("router-link",{attrs:{to:"/indexes.html#get-an-update-status"}},[t._v("get update status route")]),t._v(" to retrieve informations about its advancement.")],1),t._v(" "),a("h4",{attrs:{id:"headers-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers-5"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Header")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("X-Meili-API-Key")])]),t._v(" "),a("td",[a("code",[t._v("$API_KEY")])])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Content-Type")])]),t._v(" "),a("td",[t._v("application/json")])])])]),t._v(" "),a("h4",{attrs:{id:"path-variables-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-5"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h3",{attrs:{id:"example-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-5"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --request DELETE "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080/indexes/12345678/documents'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Meili-API-Key: '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$API_KEY")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v("\n")])])]),a("h4",{attrs:{id:"response-202-accepted-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-3"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("a",{attrs:{href:"/references/updates"}},[t._v("update id allows you to track")]),t._v(" the current action.")]),t._v(" "),a("h2",{attrs:{id:"delete-one-document"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-one-document"}},[t._v("#")]),t._v(" Delete one document")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index/documents/:identifier"}}),t._v(" "),a("p",[t._v("Delete one document based on its unique identifier."),a("br"),t._v("\nYou can read more about "),a("router-link",{attrs:{to:"/documents.html#schemas"}},[t._v("identifiers and schemas")]),t._v(".")],1),t._v(" "),a("p",[t._v("The update id returned by this function can be sent to the "),a("router-link",{attrs:{to:"/indexes.html#get-an-update-status"}},[t._v("get update status route")]),t._v(" to retrieve informations about its advancement.")],1),t._v(" "),a("h4",{attrs:{id:"headers-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers-6"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Header")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("X-Meili-API-Key")])]),t._v(" "),a("td",[a("code",[t._v("$API_KEY")])])])])]),t._v(" "),a("h4",{attrs:{id:"path-variables-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-6"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h3",{attrs:{id:"example-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-6"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --request DELETE "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080/indexes/12345678/documents/25684'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Meili-API-Key: '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$API_KEY")]),t._v('"')]),t._v("\n")])])]),a("h4",{attrs:{id:"response-202-accepted-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-4"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("a",{attrs:{href:"/references/updates"}},[t._v("update id allows you to track")]),t._v(" the current action.")]),t._v(" "),a("h2",{attrs:{id:"delete-multiple-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-multiple-documents"}},[t._v("#")]),t._v(" Delete multiple documents")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:index/documents/delete"}}),t._v(" "),a("p",[t._v("Delete a selection of documents based on array of identifiers."),a("br"),t._v("\nYou can read more about "),a("router-link",{attrs:{to:"/documents.html#schemas"}},[t._v("identifiers and schemas")]),t._v(".")],1),t._v(" "),a("p",[t._v("The update id returned by this function can be sent to the "),a("router-link",{attrs:{to:"/indexes.html#get-an-update-status"}},[t._v("get update status route")]),t._v(" to retrieve informations about its advancement.")],1),t._v(" "),a("h4",{attrs:{id:"headers-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers-7"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Header")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("X-Meili-API-Key")])]),t._v(" "),a("td",[a("code",[t._v("$API_KEY")])])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Content-Type")])]),t._v(" "),a("td",[a("code",[t._v("application/json")])])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Accept-encoding")])]),t._v(" "),a("td",[a("code",[t._v("gzip, deflate")])])])])]),t._v(" "),a("h4",{attrs:{id:"path-variables-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-7"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"body-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body-3"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("p",[t._v("The body must be a "),a("strong",[t._v("Json Array")]),t._v(" with the unique identifiers of the documents to delete.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23488")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("153738")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("437035")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("363869")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"example-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-7"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --request POST "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080/indexes/12345678'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Meili-API-Key: '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$API_KEY")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[\n      23488,\n      153738,\n      437035,\n      363869\n    ]'")]),t._v("\n")])])]),a("h4",{attrs:{id:"response-202-accepted-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-5"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("a",{attrs:{href:"/references/updates"}},[t._v("update id allows you to track")]),t._v(" the current action.")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);
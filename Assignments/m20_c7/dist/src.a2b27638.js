// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
/*
 The books array contain the list of books in the shopping cart.
 DO NOT EDIT THIS ARRAY


JSDOM: Render Pattern
Instructions

You are helping your local bookstore build a shopping cart for their website. The list of books, prices and quantities are stored in an array named books. You wish to create a few helper functions to display the cart, sort the books and make small modifications to the cart.
Existing Files
file path 	description
index.html 	Contains the initial HTML page with placeholder elements. Your render() function will target these elements. You should not edit the HTML file in any way.
index.css 	A few basic styles. This challenge does not focus on style. You may ignore this file.
index.js 	You need to write your JavaScript code in this file. This is the only file that you need to edit.
test/render.test.js 	The tests your code will run against. You do not need to edit this file.
Tasks

The books array contain books in the following format:

{
  "title": "",
  "authors": ["", ""],
  "description": "",
  "price": 0,
  "rating": 5,
  "quantity": 1
}

Write the following functions in the index.js file.
renderBook()

This function accepts a book object in the format described above.
Create and return the HTML to render a single book. The HTML for a single book should look like this:

<div class="book">
  <div class="details">
    <div class="title">
      Elements of the Theory of Computation
      <span class="rating">(4.7 stars)</span>
    </div>
    <div class="authors">by Harry Lewis, Christos H. Papadimitriou</div>
    <div class="description">
      Algorithms, complexity analysis, and algorithmic ideas are introduced
      informally in Chapter 1, and are pursued throughout the book.
    </div>
    <button class="removeBtn">Remove from cart</button>
  </div>
  <div class="quantity">2 @ $182.65</div>
  <div class="price">$365.30</div>
</div>

calculateTotal()

Calculate the total price of all items in the cart. Take into consideration that some items have a quantity > 1. return the total price.
render()

Render the array of books and the cart total and insert them into the DOM.
The books should be rendered in the section with id "cartItems". If there are no items in the cart the text "Nothing in cart" should be inserted here instead.
The total should be rendered in the div with class "total-price" in the section with id "cartTotal". If there are no items in cart the total should show "\$0".
sortByPrice()

Sort the books array by price in ascending order.

Attach an event listener to the #sortBtn button that firsts sorts the array with the sortByPrice() function then calls render().
main()

Perform all the startup tasks in the main function.

    attach required event listeners
    call the render() function


*/
window.books = [{
  title: "PROLOG Programming for Artificial Intelligence",
  authors: ["Ivan Bratko"],
  description: "Prolog has its roots in logic; however the main aim of this book is to teach Prolog as a practical programming tool.",
  price: 89.29,
  rating: 4.5,
  quantity: 1
}, {
  title: "Elements of the Theory of Computation",
  authors: ["Harry Lewis", "Christos H. Papadimitriou"],
  description: "Algorithms, complexity analysis, and algorithmic ideas are introduced informally in Chapter 1, and are pursued throughout the book.",
  price: 182.65,
  rating: 4.7,
  quantity: 2
}, {
  title: "The Silmarillion",
  authors: ["J.R.R. Tolkien"],
  description: "THE SILMARILLION is the core of J.R.R. Tolkien's imaginative writing, a work whose origins stretch back to a time long before THE HOBBIT.",
  price: 14.85,
  rating: 5,
  quantity: 1
}, {
  title: "An Introduction to the Analysis of Algorithms",
  authors: ["Sedgewick Robert", "Flajolet Philippe"],
  description: "Methods and models for mathematically analyzing algorithms.",
  price: 51.19,
  rating: 4.2,
  quantity: 10
}, {
  title: "The Art of Computer Programming, Volumes 1-4",
  authors: ["Donald E. Knuth"],
  description: "The bible of all fundamental algorithms and the work that taught many of today’s software developers most of what they know about computer programming.",
  price: 189.98,
  rating: 5,
  quantity: 2
}]; ///////////////////////////////
// WRITE YOUR SOLUTION BELOW //
///////////////////////////////

/*
 Create and return the HTML to render a single book.
 The `book` parameter is an object representing a single book. 

 {
  "title": "",
  "authors": ["", ""],
  "description": "",
  "price": 0,
  "rating": 5,
  "quantity": 1
}
*/

function renderBook(_ref) {
  var title = _ref.title,
      authors = _ref.authors,
      description = _ref.description,
      price = _ref.price,
      rating = _ref.rating,
      quantity = _ref.quantity;
  var total = price * quantity;
  return "\n  <div class=\"book\">\n    <div class=\"details\">\n      <div class=\"title\">\n        ".concat(title, "\n        <span class=\"rating\">(").concat(rating, " stars)</span>\n      </div>\n      <div class=\"authors\">").concat(authors.map(function (author) {
    return author;
  }), "</div>\n      <div class=\"description\">\n        ").concat(description, "\n      </div>\n      <button class=\"removeBtn\">Remove from cart</button>\n    </div>\n    <div class=\"quantity\">").concat(quantity, " @ ").concat(price, "</div>\n    <div class=\"price\">$").concat(total, "</div>\n  </div> ");
}
/*
  Calculate and return the total price of all items in the cart.
 */


function calculateTotal() {
  return books.reduce(function (total, book) {
    return total += book.price * book.quantity;
  }, 0);
}
/*
  Render the array of books and the cart total and insert them on the DOM.
  The books should be rendered in the `section` with id "cartItems".
  The total should be rendered in the `section` with id "cartTotal".
*/


function render() {
  var cartItems = document.querySelector("#cartItems");

  if (books.length === 0) {
    cartItems.innerText = "Nothing in cart";
  } else {
    cartItems.innerHTML = books.map(function (book) {
      return renderBook(book);
    });
  }

  ;

  var sortHandler = function sortHandler(evt) {
    sortByPrice();
  };

  var sortPrice = document.querySelector('#sortBtn');
  sortPrice.addEventListener("click", sortHandler);
  document.querySelector(".total-price").innerText = "$".concat(calculateTotal());
}
/*
  Sort the books array by price in ascending order then call render()
*/


function sortByPrice() {
  var sortedBooks = books.sort(function (bookA, bookB) {
    return bookA.price - bookB.price;
  });
  var sortedBooksHTML = sortedBooks.map(function (book) {
    return renderBook(book);
  });
  cartItems.innerHTML = sortedBooksHTML;
}
/*
  Perform all startup tasks here. Use this function to attach the required event listeners
  then call render()
*/


function main() {
  render();
}

window.addEventListener("DOMContentLoaded", main); /////////////////////////////////
// DO NOT EDIT BELOW THIS LINE //
/////////////////////////////////

window.render = render;
window.calculateTotal = calculateTotal;
window.sortByPrice = sortByPrice;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60127" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map
/**
 * Source from JSLists
 * @link https://www.cssscript.com/demo/collapsible-folder-tree-pure-javascript-jslists/
 */
(function () {
    "use strict";

    function e() {
        var e = {};
        return e.greet = function () {
            console.log("** Welcome to JSLists **")
        }, e.checkNodes = function () { }, e.collapseAll = function (e) {
            var t, l = Array.prototype.slice.call(document.getElementsByTagName("UL")),
                s = Array.prototype.slice.call(document.getElementsByTagName("OL")),
                n = l.concat(s);
            for (t = 1; t < n.length; t++) n[t].setAttribute("class", "jsl-collapsed")
        }, e.openAll = function (e) {
            var t, l = Array.prototype.slice.call(document.getElementsByTagName("UL")),
                s = Array.prototype.slice.call(document.getElementsByTagName("OL")),
                n = l.concat(s);
            for (t = 1; t < n.length; t++) n[t].setAttribute("class", "jsl-open")
        }, e.generateCss = function () {
            var e = document.createElement("style"),
                t = ".jslist-li{margin-left: 22px;}";
            t += "ul, li { list-style: none; margin: 5px 0; padding: 0; }";
            t += "ul.jslist-ul, li.jslist-li { margin-left: 22px; }";
            t += ".jslist-ul{margin-left: 22px;}", t += ".jslist-ol{margin-left: 22px;}", t += ".jsl-collapsed{display: none;}", t += ".jsl-collapsed-arrow{float: left; clear: both; margin-right: 11px; width: 11px; height: 11px; cursor: pointer; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKJJREFUeNqEkc0JxCAQhUfRg7EJweN2IikoJWxBkm4EexCvur4gi4kuO/Dw532O48i89y8ieje5Jk5zlKaz6RAArbW7MYYYYxNZa+Uxxj2EcGVyALsxCdF9B5gj4wgopW7rfiNf1fgzxFAbaa2/xrZt15hznuHRwKERWmZ+dGEJF7RnNFNKN7jPCx54tj6SEIKklJOwDx8cMh9oeNPfH/wIMABbu2PPHYUsbQAAAABJRU5ErkJggg==') no-repeat;}", t += ".jsl-open{display: block;}", t += ".jsl-open-arrow{background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACRQTFRFtLS0tLS0tLS0AAAAtLS019fX8/Pz9PT09fX19vb29/f3+Pj4NWr6kwAAAAN0Uk5TK7P9wooeBQAAAD9JREFUCNdjYFRxcVFkYBBdvXv3UgEGrVVAoMDgPXPmzNkOcKrZ2LgbSHV0dICo8vLyagcGrbS0tCwFmD6IKQDtKxlF/vrVqgAAAABJRU5ErkJggg==') no-repeat;}", e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)), document.getElementsByTagName("head")[0].appendChild(e)
        }, e.paddULLists = function (e) {
            var t, l = document.getElementById(e).getElementsByTagName("UL");
            for (t = 0; t < l.length; t++) l[t].classList.add("jslist-ul")
        }, e.paddOLLists = function (e) {
            var t, l = document.getElementById(e).getElementsByTagName("UL");
            for (t = 0; t < l.length; t++) l[t].classList.add("jslist-ol")
        }, e.padLists = function (e) {
            var t, l = document.getElementById(e).getElementsByTagName("LI");
            for (t = 0; t < l.length; t++) "jsl-collapsed-arrow" != l[t].childNodes[0].className && l[t].classList.add("jslist-li");
            this.paddULLists(e), this.paddOLLists(e)
        }, e.generateList = function (e) {
            this.generateCss(), document.getElementById(e).style.display = "none;";
            var t, l, s, n, a = document.getElementById(e).getElementsByTagName("LI");
            for (t = 0; t < a.length; t++)
                if (a[t].id.length > 0) {
                    if (s = document.getElementById(a[t].id), n = document.getElementById(a[t].id).getElementsByTagName("UL"), n.length > 0) {
                        for (l = 0; l < n.length && ("UL" != n[l].nodeName && "OL" != n[l].nodeName); l++);
                        n[l].setAttribute("class", "jsl-collapsed");
                        var o = document.createElement("div");
                        o.setAttribute("class", "jsl-collapsed-arrow"), o.setAttribute("id", a[t].id + t + "_tgl"), s.insertBefore(o, s.childNodes[0]), document.getElementById(a[t].id + t + "_tgl").addEventListener("click", function (e) {
                            document.getElementById(e.target.id).classList.toggle("jsl-open-arrow"), document.getElementById(e.target.id).parentElement.lastElementChild.classList.toggle("jsl-open"), e.stopPropagation()
                        }, !0)
                    }
                } else {
                    if (a[t].setAttribute("id", e + "tmp" + t), s = document.getElementById(e + "tmp" + t), n = document.getElementById(a[t].id).getElementsByTagName("UL"), n.length > 0) {
                        for (l = 0; l < n.length && ("UL" != n[l].nodeName && "OL" != n[l].nodeName); l++);
                        n[l].setAttribute("class", "jsl-collapsed");
                        var o = document.createElement("div");
                        o.setAttribute("class", "jsl-collapsed-arrow"), o.setAttribute("id", a[t].id + t + "_tgl"), s.insertBefore(o, s.childNodes[0]), document.getElementById(a[t].id + t + "_tgl").addEventListener("click", function (e) {
                            document.getElementById(e.target.id).classList.toggle("jsl-open-arrow"), document.getElementById(e.target.id).parentElement.lastElementChild.classList.toggle("jsl-open"), e.stopPropagation()
                        }, !0)
                    }
                    a[t].removeAttribute("id")
                } setTimeout(function () {
                    document.getElementById(e).style.display = "block;"
                }, 99), this.padLists(e)
        }, e.applyToList = function (e, t) {
            switch (t.toUpperCase()) {
                case "UL":
                    this.generateList(e, "UL");
                    break;
                case "OL":
                    this.generateList(e, "OL");
                    break;
                case "ALL":
                    this.generateList(e)
            }
        }, e
    }
    "undefined" == typeof JSLists ? window.JSLists = e() : console.log("JSLists already defined.")
})();

// The end of JSLists
// ----------------------------------------------------

/**
 * Get JSON from URL 
 * @param {string} url 
 * @param {Function} callback 
 */
function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };

    xhr.send();
};


/**
 * Render Navigation using data from json
 * 
 * @param {object} playlist 
 * @param {HTMLElement} target 
 */
function renderNavigation(playlist, target) {

    /**
     * Prepare HTML for the element by its properties
     * 
     * @param {object} child
     * @returns {string}
     */
    function renderChild(child) {
        var out = '';

        if (child.hasOwnProperty('link')) {
            out += '<span class="link">';
            out += '<a class="tocLink" href="' + child.link + '" target="_new">';
            out += child.title;
            out += '</a> (opens in new tab)</span>';

        } else if (child.hasOwnProperty('youtube')) {
            out += '<span class="link">';
            out += '<a class="tocLink" href="javascript:void(0);"';
            out += ' onclick="javascript:followLink(';
            out += '\'https://www.youtube.com/embed/' + child.youtube + '?autoplay=1&fs=1\');">';
            out += child.title;
            out += '</a></span>';

        } else if (child.hasOwnProperty('file')) {
            out += '<span class="link">';
            out += '<a class="tocLink" href="javascript:void(0);"';
            out += ' onclick="javascript:videoGoTo' + child.file.player;
            out += '(' + child.file.video_id + ',' + child.file.time + ');">';
            out += child.title;
            out += '</a></span>';

        } else {
            out += child.title;
        }

        return out;
    }

    /**
     * Prepare HTML for all elements
     * 
     * @param {array} children 
     * @param {int} level
     * @returns {string}
     */
    function renderChildren(children, level) {
        var out = (level === 0) ? '<ul id="simple_list">' : '<ul>';
        level++;
        children.forEach(function (child) {
            if (child.hasOwnProperty('file')) {
                child.file.player = (level === 4) ? '2' : '';
            }
            out += "<li>";
            out += renderChild(child);
            if (typeof child.children !== 'undefined') {
                out += renderChildren(child.children, level);
            }
            out += "</li>";
        });
        return out + "</ul>";
    };

    if (target) {
        var level = 0; // default
        target.innerHTML = renderChildren(playlist.my_tree.collection, level);;
    }
}

var data_json = 'https://gist.githubusercontent.com/sitex/d52e7053dd32c4bbc599d88282eb5410/raw/playlist.json';
getJSON(data_json, function (err, data) {
    if (err != null) {
        console.error(err);
    } else {
        // Overwrite sources variable
        window.sources = data.my_tree.sources;
        // show Navigation
        renderNavigation(data, document.getElementById("tocContainer"));
        // use JSList plugin for Navigation
        JSLists.applyToList('simple_list', 'ALL');
    }
});

/**
 * Add styles for Navigation
 */
var style_tag = document.createElement("style");
var nav_styles = "ul, li { list-style: none; margin: 5px 0; padding: 0; }";
style_tag.appendChild(document.createTextNode(nav_styles))
document.getElementsByTagName("head")[0].appendChild(style_tag);

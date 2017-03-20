/*
 *  tijapi: Tiny ImageJ API in JavaScript
 *  Copyright (C) 2015  Jean-Christophe Taveau.
 *
 *  This file is part of tijapi
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with mowgli.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */
 
/**
 * Tool to convert HTML5 ImageJ Documentation into a JSON file and to a JS class 
 */
 
var jsdom = require("jsdom");
var fs = require("fs");


jsdom.env({
  url: "https://imagej.nih.gov/ij/developer/api/ij/ImagePlus.html",
  done: function (err, window) {
    let klass = [];
    window.document.body.querySelectorAll("li.blockList").forEach(function (el) {
        let fun = {args:[],static: false};
        for (let i in el.children) {
            let child = el.children[i];
            if (child.nodeName.toLowerCase() === 'h4') {
                fun.name = child.innerHTML;
            }
            else if (child.nodeName.toLowerCase() === 'pre') {
                let words = child.innerHTML.replace(/&nbsp;/g,' ').replace(/<\/a>/g,'').replace(/<a.+>/g,' ').split(/[\()\s,]+/);
                fun.visibility = words[0];
                fun.static = (words[1] === 'static') ? true : false;
                fun.ret = (fun.static) ? words[2]: words[1];
                let argIndex = (fun.static) ? 4 : 3;
                for (let i=argIndex; i < words.length; i+=2) {
                    if (words[i] !== '') {
                        fun.args.push({type: words[i],name:words[i+1]});
                    }
                }
            }
            else if (child.nodeName.toLowerCase() === 'div') {
                fun.comment = child.innerHTML.replace(/\s+/,' ');
            }
        }
        if (fun.visibility === 'public') {
            klass.push(fun);
        }
    });
    console.log(JSON.stringify(klass) );
  }
});

// 

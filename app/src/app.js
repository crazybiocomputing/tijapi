/*
 *  tijapi: Tiny ImageJ API in JavaScript
 *  Copyright (C) 2017  Jean-Christophe Taveau.
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
 * Tool to convert HTML5 ImageJ Documentation into a JSON file and to a JS class skeleton 
 */
 
var jsdom = require("jsdom");
var fs = require("fs");
var info = require("./settings");


for (let k = 0; k < info.ijclasses.length; k++) {

    if (info.ijclasses[k].process === 1) {
        console.log(info.ijclasses[k].url);
        jsdom.env({
            url: "https://imagej.nih.gov/ij/developer/"+info.ijclasses[k].url,
            done: function (err, window) {
            
                function parse(klassname) {
                    let klass = {description: '',constructors:[],methods:[], props:[]};
                    
                    // Class Description
                    window.document.body.querySelectorAll(".description li.blockList").forEach(function (el) {
                        for (let i in el.children) {
                            let child = el.children[i];
                            if (child.nodeName.toLowerCase() === 'pre') {
                                klass.description = child.innerHTML.replace(/(<([^>]+)>)/ig,'') + '\n';
                            }
                            else if (child.nodeName.toLowerCase() === 'div') {
                                klass.description += ' *\n * ' + child.innerHTML.replace(/\n/g,'\n * ').replace(/ +/g,' ').replace(/\n/g,'\n * ');
                            }
                        }

                    });
                    
                    // Constructors + methods   
                    window.document.body.querySelectorAll(".details li.blockList").forEach(function (el) {
                        let fun = {args:[],static: false};
                        for (let i in el.children) {
                            let child = el.children[i];
                            if (child.nodeName.toLowerCase() === 'h4') {
                                fun.name = child.innerHTML;
                                fun.type = (fun.name === klassname) ? 'constructor' : 'method';
                            }
                            else if (child.nodeName.toLowerCase() === 'pre') {
                                // Props ?
                                if (child.innerHTML.indexOf('(') === -1) {
                                    let cleaned = child.innerHTML.replace(/&nbsp;/g,' ').replace(/(<([^>]+)>)/ig,'');
                                    let words = cleaned.split(/[\s,]+/);
                                    fun.type = 'prop';
                                    fun.visibility = words[0]; // public, protected
                                    fun.family = (cleaned.indexOf('static') !== -1);
                                    fun.constant = (cleaned.indexOf('final') !== -1);
                                    fun.ret = words[words.length - 2];
                                }
                                // Constructor or Method
                                else {
                                    let words = child.innerHTML.replace(/&nbsp;/g,' ').replace(/(<([^>]+)>)/ig,'').split(/[\(\)\s,]+/);
                                    fun.visibility = words[0]; // public, protected
                                    let argIndex = 1;
                                    if (fun.type === 'constructor') {
                                        argIndex = 1;
                                    }
                                    else { // method
                                        fun.family = []
                                        while (words[argIndex] === 'static' || words[argIndex] === 'abstract'|| words[argIndex] === 'final') {
                                            fun.family.push(words[argIndex]);
                                            argIndex++;
                                        }
                                        fun.ret = words[argIndex++];
                                    }
                                    // Skip method name
                                    argIndex++;
                                    // Parse arguments
                                    for (let j=argIndex; j < words.length; j+=2) {
                                        if (words[j] !== '') {
                                            fun.args.push({type: words[j],name:words[j+1]});
                                        }
                                    }
                                }
                            } // End of <pre>
                            else if (child.nodeName.toLowerCase() === 'div') {
                                fun.comment = child.innerHTML.replace(/\n/g,'\n * ').replace(/ +/g,' ');
                            }
                        }
                        if (fun.visibility === 'public') {
                            if (fun.type === 'constructor') {
                                klass.constructors.push(fun);
                            }
                            else if (fun.type === 'prop'){
                                klass.props.push(fun);
                            }
                            else {
                                klass.methods.push(fun);
                            }

                        }
                    });
                    return klass;
                    
                }
                
                function build(arr,classname) {
                    let klass = '';
                    // Class Description
                    klass += '/**\n * ' + arr.description + '\n*/\n\n';
                    // Constructor(s)
                    for (let i in arr.constructors) {
                        // Documentation
                        klass += '/**\n';
                        if (arr.constructors[i].comment !== undefined) {
                            klass += ' * ' + arr.constructors[i].comment + '\n';
                        }
                        klass += ' * @constructor\n';
                        klass += ' * \n';
                        for (let j in arr.constructors[i].args) {
                            klass += ' * @param {' + arr.constructors[i].args[j].type + '} ' + arr.constructors[i].args[j].name + ' - \n';
                        }
                        klass += ' * \n';
                        klass += ' * @author Created by ijdoc2js\n';
                        klass += ' */\n\n';
                        
                        // Function declaration
                        klass += 'function ' + arr.constructors[i].name + '(';
                        for (let j in arr.constructors[i].args) {
                            if (j != 0) {
                                klass += ', ';
                            }
                            klass += arr.constructors[i].args[j].name;
                        }
                        // Function body
                        klass += ') {\n';
                        klass += '    throw new NotImplementedException("'+classname+'.'+arr.constructors[i].name+'(..)");\n';
                        klass +='};\n\n';
                    }
                    // Properties
                    for (let i in arr.props) {
                        // Documentation
                        klass += '/**\n';
                        if (arr.props[i].comment !== undefined) {
                            klass += ' * ' + arr.props[i].comment + '\n';
                        }

                        klass += ' * \n';
                        /*
                        for (let j in arr.props[i].args) {
                            klass += ' * @constant {' + arr.props[i].args[j].type + '} \n';
                        }
                        */

                        if (arr.props[i].ret !== 'void') {
                            klass += ' * @const {'+arr.props[i].ret + '}\n';
                            klass += ' * @default\n';
                        }
                        klass += ' * \n';
                        klass += ' * @author Created by ijdoc2js\n';
                        klass += ' */\n';
                        
                        // Property declaration
                        //klass += ((arr.props[i].constant) ? 'const' : 'var ') + classname + '.' + arr.props[i].name + ' = 0;';
                        klass += classname + '.' + arr.props[i].name + ' = 0;';
                        klass += '\n\n';
                    }

                    // Methods
                    for (let i in arr.methods) {
                        // Documentation
                        klass += '/**\n';
                        if (arr.methods[i].comment !== undefined) {
                            klass += ' * ' + arr.methods[i].comment + '\n';
                        }

                        klass += ' * \n';
                        for (let j in arr.methods[i].args) {
                            klass += ' * @param {' + arr.methods[i].args[j].type + '} ' + arr.methods[i].args[j].name + ' - \n';
                        }

                        if (arr.methods[i].ret !== 'void') {
                            klass += ' * @return '+arr.methods[i].ret + '\n';
                        }
                        klass += ' * \n';
                        klass += ' * @author Created by ijdoc2js\n';
                        klass += ' */\n';
                        
                        // Function declaration
                        klass += classname + '.prototype.' + arr.methods[i].name + ' = function(';
                        for (let j in arr.methods[i].args) {
                            if (j != 0) {
                                klass += ', ';
                            }
                            klass += arr.methods[i].args[j].name;
                        }
                        // Function body
                        klass += ') {\n';
                        klass += '    throw new NotImplementedException("'+classname+'.'+arr.methods[i].name+'(..)");\n';
                        klass +='};\n\n';
                    }

                    return klass;
                }
                
                // Main
                let w = info.ijclasses[k].url.split(/[\/.]+/);
                let classname = w[w.length - 2];
                let funcs = parse(classname);
                let klass = build(funcs,classname);

                // Write code in ../../src/
                let filename = info.ijclasses[k].url.toLowerCase().replace(/\.\/api\/ij/,'../../src/ij');
                filename = filename.replace('html','js');
                console.log(filename);
                var stream = fs.createWriteStream(filename);
                stream.write(info.license+'\n\n\n');
                stream.write(klass);
                stream.end();

                //console.log(JSON.stringify(klass) );
            }
        });
    }
}


// 

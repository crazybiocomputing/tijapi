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

(function (exports) {

  /**
   * @constructor
   */
  function Image (type = "8-bit", width = 0, height = 0, depth = 0 ) {
    // Classical parameters
    this.type   = type;
    this.width  = width;
    this.height = height;
    this.depth  = depth;

    // WebGL area (aka ImageProcessor) containing the pixels
    this.canvas;

    // History of all the processing commands
    this.history = [];

  }

  /**
   * Load image from URL
   *
   * @param url {string} - a URL
   */
  Image.prototype.fromURL = function(url) {
    // Get image from URL;
  };

  /**
   * Load image from Pixel Array
   *
   * @param url {string} - a URL
   */
  Image.prototype.fromPixels = function(array) {
    // Get image from array of pixels;
  };

  /**
   * Load image from template
   *
   * @param template {string} - a template among 'black', 'white', 'ramp', 'random', 'chessboard'
   */
  Image.prototype.fromTemplate = function(template) {
    // Get image from template;
    switch (template) {
      case 'white': {

      }
      case 'ramp': {

      }
      case 'random': {

      }
      case 'chessboard': {

      }
      default: {
        // Black background
      }
    }
  };

  Image.prototype.getWidth = function() {
    return this.width;
  };

  Image.prototype.getHeight = function() {
    return this.height;
  };

  Image.prototype.getDepth = function() {
    return this.depth;
  };

  Image.prototype.render = function() {
    return this.depth;
  };

  exports.Image = Image;

})(this.jim = this.jim || {})

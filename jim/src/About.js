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
 *  along with tijapi.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */

function About(the_id) {

  let content = `
  <fieldset>
  <legend>New Image...</legend>
  <label for="text_1">Name:</label>
  <input id = "text_1" type="text" value="Untitled"><br>
  <label for="type">Type:</label>
  <select id="type">
    <option value="8-bit" selected>8-bit</option>
    <option value="16-bit" >16-bit</option>
    <option value="32-bit">32-bit</option>
    <option value="RGB">RGB</option>
  </select><br>
  <label for="fill_with">Fill with:</label>
  <select id="fill_with">
    <option value="Black" selected>Black</option>
    <option value="White" >White</option>
    <option value="Ramp">Ramp</option>
    <option value="Random">Random</option>
    <option value="Chessboard">Chessboard</option>
  </select><br>
  <label>Width:</label>
  <input type="text" value="128" size="6"> pixels <br>
  <label>Height:</label>
  <input type="text" value="128" size="6"> pixels<br>
  <label>Slices:</label>
  <input type="text" value="1" size="6"><br>
  <footer>
  <button>Cancel</button>
  <button>OK</button>
  </footer>
  </fieldset>
  `;

  this.element = document.getElementById(the_id);

  /**
  * Handle various event types
   * @param event - The DOM event
  **/
  this.handleEvent = function(event) {
      switch(event.type) {
      case 'click':
          // TODO: Display modal window
          var popup = new Modal({
              headerTitle : "About JIM...",
              headerImage : "url('images/headprot.jpg')",
              body  : content
          });

          break;
      case 'dblclick':
          // some code here...
          break;
      }
  };

  // Note that the listeners in this case are this, not this.handleEvent
  this.element.addEventListener('click', this, false);

};

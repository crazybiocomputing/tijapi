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
 

'use strict';
 
 
(function(exports) {

    function NotImplementedException(message) {
       this.message = message;
       this.name = "NotImplementedException";
    }
    
    exports.NotImplementedException = NotImplementedException;


})(this.TIJS = this.TIJS || {} );

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
 * public class Roi
extends java.lang.Object
implements java.lang.Cloneable, java.io.Serializable, java.lang.Iterable&lt;java.awt.Point&gt;
 *
 * A rectangular region of interest and superclass for the other ROI classes.
 *  *
 *  * This class implements <code>Iterable&lt;Point&gt;</code> and can thus be
 *  * used to iterate over the contained coordinates. Usage example:
 *  * <pre> Roi roi = ...;
 *  * for (Point p : roi) {
 *  * // process p
 *  * }
 *  * </pre>
*/


/**
 * Creates a new (rounded) rectangular ROI.
 * @constructor
 *
 * @param {number} x -
 * @param {number} y -
 * @param {number} width -
 * @param {number} height -
 * @param {number} cornerDiameter -
 *
 * @author Created by ijdoc2js
 */

function Roi(x, y, width, height, cornerDiameter) {
    throw new NotImplementedException("Roi.Roi(..)");
};


/**
 * Creates a new rectangular Roi.
 * @constructor
 *
 * @param {java.awt.Rectangle} r -
 *
 * @author Created by ijdoc2js
 */

function Roi(r) {
    throw new NotImplementedException("Roi.Roi(..)");
};


/**
 * Starts the process of creating a user-defined rectangular Roi,
 * where sx and sy are the starting screen coordinates.
 * @constructor
 *
 * @param {int} sx -
 * @param {int} sy -
 * @param {ImagePlus} imp -
 * @param {int} cornerDiameter -
 *
 * @author Created by ijdoc2js
 */

function Roi(sx, sy, imp, cornerDiameter) {
    throw new NotImplementedException("Roi.Roi(..)");
};

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.CONSTRUCTING = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.MOVING = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.RESIZING = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.NORMAL = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.MOVING_HANDLE = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.RECTANGLE = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.OVAL = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.POLYGON = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.FREEROI = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.TRACED_ROI = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.LINE = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.POLYLINE = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.FREELINE = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.ANGLE = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.COMPOSITE = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.POINT = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.HANDLE_SIZE = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.NOT_PASTING = 0;

/**
 *
 * @const {Roi}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.previousRoi = 0;

/**
 *
 * @const {java.awt.BasicStroke}
 * @default
 *
 * @author Created by ijdoc2js
 */
Roi.onePixelWide = 0;

/**
 * Set the location of the ROI in image coordinates.
 *
 * @param {int} x -
 * @param {int} y -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setLocation = function(x, y) {
    throw new NotImplementedException("Roi.setLocation(..)");
};

/**
 * Set the location of the ROI in image coordinates.
 *
 * @param {double} x -
 * @param {double} y -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setLocation = function(x, y) {
    throw new NotImplementedException("Roi.setLocation(..)");
};

/**
 *
 * @param {ImagePlus} imp -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setImage = function(imp) {
    throw new NotImplementedException("Roi.setImage(..)");
};

/**
 * Returns the ImagePlus associated with this ROI, or null.
 *
 * @return ImagePlus
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getImage = function() {
    throw new NotImplementedException("Roi.getImage(..)");
};

/**
 * Returns the ID of the image associated with this ROI.
 *
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getImageID = function() {
    throw new NotImplementedException("Roi.getImageID(..)");
};

/**
 *
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getType = function() {
    throw new NotImplementedException("Roi.getType(..)");
};

/**
 *
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getState = function() {
    throw new NotImplementedException("Roi.getState(..)");
};

/**
 * Returns the perimeter length.
 *
 * @return double
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getLength = function() {
    throw new NotImplementedException("Roi.getLength(..)");
};

/**
 * Returns Feret's diameter, the greatest distance between
 * any two points along the ROI boundary.
 *
 * @return double
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getFeretsDiameter = function() {
    throw new NotImplementedException("Roi.getFeretsDiameter(..)");
};

/**
 * Caculates "Feret" (maximum caliper width), "FeretAngle"
 * and "MinFeret" (minimum caliper width), "FeretX" and "FeretY".
 *
 * @return double[]
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getFeretValues = function() {
    throw new NotImplementedException("Roi.getFeretValues(..)");
};

/**
 *
 * @return java.awt.Polygon
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getConvexHull = function() {
    throw new NotImplementedException("Roi.getConvexHull(..)");
};

/**
 * Return this selection's bounding rectangle.
 *
 * @return java.awt.Rectangle
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getBounds = function() {
    throw new NotImplementedException("Roi.getBounds(..)");
};

/**
 * Return this selection's bounding rectangle.
 *
 * @return java.awt.geom.Rectangle2D.Double
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getFloatBounds = function() {
    throw new NotImplementedException("Roi.getFloatBounds(..)");
};

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">replaced by getBounds()</span>
 *
 * @deprecated .</span>&nbsp;<span class="deprecationComment">replaced by getBounds()</span>
 * @return java.awt.Rectangle
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getBoundingRect = function() {
    throw new NotImplementedException("Roi.getBoundingRect(..)");
};

/**
 * Returns the outline of this selection as a Polygon, or
 * null if this is a straight line selection.
 *
 * @return java.awt.Polygon
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getPolygon = function() {
    throw new NotImplementedException("Roi.getPolygon(..)");
};

/**
 *
 * @return FloatPolygon
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getFloatPolygon = function() {
    throw new NotImplementedException("Roi.getFloatPolygon(..)");
};

/**
 * Returns, as a FloatPolygon, an interpolated version
 * of this selection that has points spaced 1.0 pixel apart.
 *
 * @return FloatPolygon
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getInterpolatedPolygon = function() {
    throw new NotImplementedException("Roi.getInterpolatedPolygon(..)");
};

/**
 * Returns, as a FloatPolygon, an interpolated version of
 * this selection with points spaced 'interval' pixels apart.
 * If 'smooth' is true, traced and freehand selections are
 * first smoothed using a 3 point running average.
 *
 * @param {double} interval -
 * @param {boolean} smooth -
 * @return FloatPolygon
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getInterpolatedPolygon = function(interval, smooth) {
    throw new NotImplementedException("Roi.getInterpolatedPolygon(..)");
};

/**
 * Returns the coordinates of the pixels inside this ROI as an array of Points.
 *
 * @return java.awt.Point[]
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getContainedPoints = function() {
    throw new NotImplementedException("Roi.getContainedPoints(..)");
};

/**
 * Returns the coordinates of the pixels inside this ROI as a FloatPolygon.
 *
 * @return FloatPolygon
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getContainedFloatPoints = function() {
    throw new NotImplementedException("Roi.getContainedFloatPoints(..)");
};

/**
 * <pre> Calculates intersections of a line segment with a circle
 * Author N.Vischer
 * ax, ay, bx, by: points A and B of line segment
 * cx, cy, rad: Circle center and radius.
 * ignoreOutside: if true, ignores intersections outside the line segment A-B</pre>
 *
 * @param {double} ax -
 * @param {double} ay -
 * @param {double} bx -
 * @param {double} by -
 * @param {double} cx -
 * @param {double} cy -
 * @param {double} rad -
 * @param {boolean} ignoreOutside -
 * @return double[]
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.lineCircleIntersection = function(ax, ay, bx, by, cx, cy, rad, ignoreOutside) {
    throw new NotImplementedException("Roi.lineCircleIntersection(..)");
};

/**
 * Returns a copy of this roi. See Thinking is Java by Bruce Eckel
 * (www.eckelobjects.com) for a good description of object cloning.
 *
 * @return java.lang.Object
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.clone = function() {
    throw new NotImplementedException("Roi.clone(..)");
};

/**
 * Nudge ROI one pixel on arrow key press.
 *
 * @param {int} key -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.nudge = function(key) {
    throw new NotImplementedException("Roi.nudge(..)");
};

/**
 * Nudge lower right corner of rectangular and oval ROIs by
 * one pixel based on arrow key press.
 *
 * @param {int} key -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.nudgeCorner = function(key) {
    throw new NotImplementedException("Roi.nudgeCorner(..)");
};

/**
 *
 * @param {java.awt.Graphics} g -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.draw = function(g) {
    throw new NotImplementedException("Roi.draw(..)");
};

/**
 *
 * @param {java.awt.Graphics} g -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.drawOverlay = function(g) {
    throw new NotImplementedException("Roi.drawOverlay(..)");
};

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">replaced by drawPixels(ImageProcessor)</span>
 *
 * @deprecated .</span>&nbsp;<span class="deprecationComment">replaced by drawPixels(ImageProcessor)</span>
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.drawPixels = function() {
    throw new NotImplementedException("Roi.drawPixels(..)");
};

/**
 * Draws the selection outline on the specified ImageProcessor.
 *
 * @param {ImageProcessor} ip -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.drawPixels = function(ip) {
    throw new NotImplementedException("Roi.drawPixels(..)");
};

/**
 *
 * @param {int} x -
 * @param {int} y -
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.contains = function(x, y) {
    throw new NotImplementedException("Roi.contains(..)");
};

/**
 * Returns a handle number if the specified screen coordinates are
 * inside or near a handle, otherwise returns -1.
 *
 * @param {int} sx -
 * @param {int} sy -
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.isHandle = function(sx, sy) {
    throw new NotImplementedException("Roi.isHandle(..)");
};

/**
 * If 'add' is true, adds this selection to the previous one. If 'subtract' is true, subtracts
 * it from the previous selection. Called by the IJ.doWand() method, and the makeRectangle(),
 * makeOval(), makePolygon() and makeSelection() macro functions.
 *
 * @param {boolean} add -
 * @param {boolean} subtract -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.update = function(add, subtract) {
    throw new NotImplementedException("Roi.update(..)");
};

/**
 * Always returns null for rectangular Roi's
 *
 * @return ImageProcessor
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getMask = function() {
    throw new NotImplementedException("Roi.getMask(..)");
};

/**
 *
 * @param {ImagePlus} clipboard -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.startPaste = function(clipboard) {
    throw new NotImplementedException("Roi.startPaste(..)");
};

/**
 *
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.endPaste = function() {
    throw new NotImplementedException("Roi.endPaste(..)");
};

/**
 *
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.abortPaste = function() {
    throw new NotImplementedException("Roi.abortPaste(..)");
};

/**
 * Returns the angle in degrees between the specified line and a horizontal line.
 *
 * @param {int} x1 -
 * @param {int} y1 -
 * @param {int} x2 -
 * @param {int} y2 -
 * @return double
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getAngle = function(x1, y1, x2, y2) {
    throw new NotImplementedException("Roi.getAngle(..)");
};

/**
 * Returns the angle in degrees between the specified line and a horizontal line.
 *
 * @param {double} x1 -
 * @param {double} y1 -
 * @param {double} x2 -
 * @param {double} y2 -
 * @return double
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getFloatAngle = function(x1, y1, x2, y2) {
    throw new NotImplementedException("Roi.getFloatAngle(..)");
};

/**
 * Sets the default (global) color used for ROI outlines.
 *
 * @param {java.awt.Color} c -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setColor = function(c) {
    throw new NotImplementedException("Roi.setColor(..)");
};

/**
 * Returns the default (global) color used for drawing ROI outlines.
 *
 * @return java.awt.Color
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getColor = function() {
    throw new NotImplementedException("Roi.getColor(..)");
};

/**
 * Sets the color used by this ROI to draw its outline. This color, if not null,
 * overrides the global color set by the static setColor() method.
 *
 * @param {java.awt.Color} c -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setStrokeColor = function(c) {
    throw new NotImplementedException("Roi.setStrokeColor(..)");
};

/**
 * Returns the the color used to draw the ROI outline or null if the default color is being used.
 *
 * @return java.awt.Color
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getStrokeColor = function() {
    throw new NotImplementedException("Roi.getStrokeColor(..)");
};

/**
 * Sets the fill color used to display this ROI, or set to null to display it transparently.
 *
 * @param {java.awt.Color} color -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setFillColor = function(color) {
    throw new NotImplementedException("Roi.setFillColor(..)");
};

/**
 * Returns the fill color used to display this ROI, or null if it is displayed transparently.
 *
 * @return java.awt.Color
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getFillColor = function() {
    throw new NotImplementedException("Roi.getFillColor(..)");
};

/**
 *
 * @param {java.awt.Color} color -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setDefaultFillColor = function(color) {
    throw new NotImplementedException("Roi.setDefaultFillColor(..)");
};

/**
 *
 * @return java.awt.Color
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getDefaultFillColor = function() {
    throw new NotImplementedException("Roi.getDefaultFillColor(..)");
};

/**
 * Copy the attributes (outline color, fill color, outline width)
 * of 'roi2' to the this selection.
 *
 * @param {Roi} roi2 -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.copyAttributes = function(roi2) {
    throw new NotImplementedException("Roi.copyAttributes(..)");
};

/**
 *
 * @deprecated .</span>&nbsp;<span class="deprecationComment">replaced by setStrokeColor()</span>
 * @param {java.awt.Color} c -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setInstanceColor = function(c) {
    throw new NotImplementedException("Roi.setInstanceColor(..)");
};

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">replaced by setStrokeWidth(int)</span>
 *
 * @deprecated .</span>&nbsp;<span class="deprecationComment">replaced by setStrokeWidth(int)</span>
 * @param {int} width -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setLineWidth = function(width) {
    throw new NotImplementedException("Roi.setLineWidth(..)");
};

/**
 *
 * @param {float} width -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.updateWideLine = function(width) {
    throw new NotImplementedException("Roi.updateWideLine(..)");
};

/**
 * Set 'nonScalable' true to have TextRois in a display
 * list drawn at a fixed location and size.
 *
 * @param {boolean} nonScalable -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setNonScalable = function(nonScalable) {
    throw new NotImplementedException("Roi.setNonScalable(..)");
};

/**
 * Sets the width of the line used to draw this ROI. Set
 * the width to 0.0 and the ROI will be drawn using a
 * a 1 pixel stroke width regardless of the magnification.
 *
 * @param {float} width -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setStrokeWidth = function(width) {
    throw new NotImplementedException("Roi.setStrokeWidth(..)");
};

/**
 * This is a version of setStrokeWidth() that accepts a double argument.
 *
 * @param {double} width -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setStrokeWidth = function(width) {
    throw new NotImplementedException("Roi.setStrokeWidth(..)");
};

/**
 * Returns the lineWidth.
 *
 * @return float
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getStrokeWidth = function() {
    throw new NotImplementedException("Roi.getStrokeWidth(..)");
};

/**
 * Sets the Stroke used to draw this ROI.
 *
 * @param {java.awt.BasicStroke} stroke -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setStroke = function(stroke) {
    throw new NotImplementedException("Roi.setStroke(..)");
};

/**
 * Returns the Stroke used to draw this ROI, or null if no Stroke is used.
 *
 * @return java.awt.BasicStroke
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getStroke = function() {
    throw new NotImplementedException("Roi.getStroke(..)");
};

/**
 * Returns the name of this ROI, or null.
 *
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getName = function() {
    throw new NotImplementedException("Roi.getName(..)");
};

/**
 * Sets the name of this ROI.
 *
 * @param {java.lang.String} name -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setName = function(name) {
    throw new NotImplementedException("Roi.setName(..)");
};

/**
 * Sets the Paste transfer mode.
 *
 * @param {int} transferMode -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setPasteMode = function(transferMode) {
    throw new NotImplementedException("Roi.setPasteMode(..)");
};

/**
 * Sets the rounded rectangle corner diameter (pixels).
 *
 * @param {int} cornerDiameter -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setCornerDiameter = function(cornerDiameter) {
    throw new NotImplementedException("Roi.setCornerDiameter(..)");
};

/**
 * Returns the rounded rectangle corner diameter (pixels).
 *
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getCornerDiameter = function() {
    throw new NotImplementedException("Roi.getCornerDiameter(..)");
};

/**
 * Obsolete; replaced by setCornerDiameter().
 *
 * @param {int} cornerDiameter -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setRoundRectArcSize = function(cornerDiameter) {
    throw new NotImplementedException("Roi.setRoundRectArcSize(..)");
};

/**
 * Obsolete; replaced by getCornerDiameter().
 *
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getRoundRectArcSize = function() {
    throw new NotImplementedException("Roi.getRoundRectArcSize(..)");
};

/**
 * Sets the stack position (image number) of this ROI. In an overlay, this
 * ROI is only displayed when the stack is at the specified position.
 * Set to zero to have the ROI displayed on all images in the stack.
 *
 * @param {int} n -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setPosition = function(n) {
    throw new NotImplementedException("Roi.setPosition(..)");
};

/**
 * Returns the stack position (image number) of this ROI, or
 * zero if the ROI is not associated with a particular stack image.
 *
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getPosition = function() {
    throw new NotImplementedException("Roi.getPosition(..)");
};

/**
 * Sets the hyperstack position of this ROI. In an overlay, this
 * ROI is only displayed when the hyperstack is at the specified position.
 *
 * @param {int} channel -
 * @param {int} slice -
 * @param {int} frame -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setPosition = function(channel, slice, frame) {
    throw new NotImplementedException("Roi.setPosition(..)");
};

/**
 * Returns the channel position of this ROI, or zero
 * if this ROI is not associated with a particular channel.
 *
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getCPosition = function() {
    throw new NotImplementedException("Roi.getCPosition(..)");
};

/**
 * Returns the slice position of this ROI, or zero
 * if this ROI is not associated with a particular slice.
 *
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getZPosition = function() {
    throw new NotImplementedException("Roi.getZPosition(..)");
};

/**
 * Returns the frame position of this ROI, or zero
 * if this ROI is not associated with a particular frame.
 *
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getTPosition = function() {
    throw new NotImplementedException("Roi.getTPosition(..)");
};

/**
 *
 * @param {Overlay} overlay -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setPrototypeOverlay = function(overlay) {
    throw new NotImplementedException("Roi.setPrototypeOverlay(..)");
};

/**
 *
 * @return Overlay
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getPrototypeOverlay = function() {
    throw new NotImplementedException("Roi.getPrototypeOverlay(..)");
};

/**
 * Returns the current paste transfer mode, or NOT_PASTING (-1)
 * if no paste operation is in progress.
 *
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getPasteMode = function() {
    throw new NotImplementedException("Roi.getPasteMode(..)");
};

/**
 * Returns the current paste transfer mode.
 *
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getCurrentPasteMode = function() {
    throw new NotImplementedException("Roi.getCurrentPasteMode(..)");
};

/**
 * Returns 'true' if this is an area selection.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.isArea = function() {
    throw new NotImplementedException("Roi.isArea(..)");
};

/**
 * Returns 'true' if this is a line selection.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.isLine = function() {
    throw new NotImplementedException("Roi.isLine(..)");
};

/**
 * Returns 'true' if this is an ROI primarily used from drawing
 * (e.g., TextRoi or Arrow).
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.isDrawingTool = function() {
    throw new NotImplementedException("Roi.isDrawingTool(..)");
};

/**
 * Convenience method that converts Roi type to a human-readable form.
 *
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getTypeAsString = function() {
    throw new NotImplementedException("Roi.getTypeAsString(..)");
};

/**
 * Returns true if this ROI is currently displayed on an image.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.isVisible = function() {
    throw new NotImplementedException("Roi.isVisible(..)");
};

/**
 * Returns true if this is a slection that supports sub-pixel resolution.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.subPixelResolution = function() {
    throw new NotImplementedException("Roi.subPixelResolution(..)");
};

/**
 * Returns true if this is a PolygonRoi that supports sub-pixel
 * resolution and polygons are drawn on zoomed images offset
 * down and to the right by 0.5 pixels..
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getDrawOffset = function() {
    throw new NotImplementedException("Roi.getDrawOffset(..)");
};

/**
 *
 * @param {boolean} drawOffset -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setDrawOffset = function(drawOffset) {
    throw new NotImplementedException("Roi.setDrawOffset(..)");
};

/**
 *
 * @param {boolean} ignoreClipRect -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setIgnoreClipRect = function(ignoreClipRect) {
    throw new NotImplementedException("Roi.setIgnoreClipRect(..)");
};

/**
 * Returns 'true' if this ROI is displayed and is also in an overlay.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.isActiveOverlayRoi = function() {
    throw new NotImplementedException("Roi.isActiveOverlayRoi(..)");
};

/**
 * Checks whether two rectangles are equal.
 *
 * @param {java.lang.Object} obj -
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.equals = function(obj) {
    throw new NotImplementedException("Roi.equals(..)");
};

/**
 * Converts a float array to an int array using truncation.
 *
 * @param {float[]} arr -
 * @return int[]
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.toInt = function(arr) {
    throw new NotImplementedException("Roi.toInt(..)");
};

/**
 *
 * @param {float[]} arr -
 * @param {int[]} arr2 -
 * @param {int} size -
 * @return int[]
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.toInt = function(arr, arr2, size) {
    throw new NotImplementedException("Roi.toInt(..)");
};

/**
 * Converts a float array to an int array using rounding.
 *
 * @param {float[]} arr -
 * @return int[]
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.toIntR = function(arr) {
    throw new NotImplementedException("Roi.toIntR(..)");
};

/**
 * Converts an int array to a float array.
 *
 * @param {int[]} arr -
 * @return float[]
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.toFloat = function(arr) {
    throw new NotImplementedException("Roi.toFloat(..)");
};

/**
 *
 * @param {java.lang.String} key -
 * @param {java.lang.String} value -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setProperty = function(key, value) {
    throw new NotImplementedException("Roi.setProperty(..)");
};

/**
 *
 * @param {java.lang.String} property -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getProperty = function(property) {
    throw new NotImplementedException("Roi.getProperty(..)");
};

/**
 *
 * @param {java.lang.String} properties -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setProperties = function(properties) {
    throw new NotImplementedException("Roi.setProperties(..)");
};

/**
 *
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getProperties = function() {
    throw new NotImplementedException("Roi.getProperties(..)");
};

/**
 *
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getPropertyCount = function() {
    throw new NotImplementedException("Roi.getPropertyCount(..)");
};

/**
 *
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.toString = function() {
    throw new NotImplementedException("Roi.toString(..)");
};

/**
 * Deprecated
 *
 * @deprecated d
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.temporarilyHide = function() {
    throw new NotImplementedException("Roi.temporarilyHide(..)");
};

/**
 *
 * @param {java.awt.event.MouseEvent} e -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.mouseDragged = function(e) {
    throw new NotImplementedException("Roi.mouseDragged(..)");
};

/**
 *
 * @param {java.awt.event.MouseEvent} e -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.mouseMoved = function(e) {
    throw new NotImplementedException("Roi.mouseMoved(..)");
};

/**
 *
 * @param {java.awt.event.MouseEvent} e -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.mouseReleased = function(e) {
    throw new NotImplementedException("Roi.mouseReleased(..)");
};

/**
 *
 * @return double
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getXBase = function() {
    throw new NotImplementedException("Roi.getXBase(..)");
};

/**
 *
 * @return double
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getYBase = function() {
    throw new NotImplementedException("Roi.getYBase(..)");
};

/**
 *
 * @return double
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getFloatWidth = function() {
    throw new NotImplementedException("Roi.getFloatWidth(..)");
};

/**
 *
 * @return double
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getFloatHeight = function() {
    throw new NotImplementedException("Roi.getFloatHeight(..)");
};

/**
 * Overridden by PolygonRoi (angle between first two points), TextRoi (text angle) and Line (line angle).
 *
 * @return double
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getAngle = function() {
    throw new NotImplementedException("Roi.getAngle(..)");
};

/**
 *
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.enableSubPixelResolution = function() {
    throw new NotImplementedException("Roi.enableSubPixelResolution(..)");
};

/**
 *
 * @param {boolean} isCursor -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setIsCursor = function(isCursor) {
    throw new NotImplementedException("Roi.setIsCursor(..)");
};

/**
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.isCursor = function() {
    throw new NotImplementedException("Roi.isCursor(..)");
};

/**
 *
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getDebugInfo = function() {
    throw new NotImplementedException("Roi.getDebugInfo(..)");
};

/**
 *
 * @return ImageStatistics
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getStatistics = function() {
    throw new NotImplementedException("Roi.getStatistics(..)");
};

/**
 *
 * @return FloatPolygon
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getRotationCenter = function() {
    throw new NotImplementedException("Roi.getRotationCenter(..)");
};

/**
 *
 * @param {double} x -
 * @param {double} y -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.setRotationCenter = function(x, y) {
    throw new NotImplementedException("Roi.setRotationCenter(..)");
};

/**
 *
 * @return double[]
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getContourCentroid = function() {
    throw new NotImplementedException("Roi.getContourCentroid(..)");
};

/**
 * Returns a hashcode for this Roi that typically changes
 * if it is moved, even though it is still the same object.
 *
 * @return int
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.getHashCode = function() {
    throw new NotImplementedException("Roi.getHashCode(..)");
};

/**
 *
 * @param {int} id -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.notifyListeners = function(id) {
    throw new NotImplementedException("Roi.notifyListeners(..)");
};

/**
 *
 * @param {RoiListener} listener -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.addRoiListener = function(listener) {
    throw new NotImplementedException("Roi.addRoiListener(..)");
};

/**
 *
 * @param {RoiListener} listener -
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.removeRoiListener = function(listener) {
    throw new NotImplementedException("Roi.removeRoiListener(..)");
};

/**
 * Required by the <code>Interable</code> interface.
 * Use to iterate over the contained coordinates. Usage example:
 * <pre> for (Point p : roi) {
 * // process p
 * }
 * </pre>
 *
 * @return java.util.Iterator&lt;java.awt.Point&gt;
 *
 * @author Created by ijdoc2js
 */
Roi.prototype.iterator = function() {
    throw new NotImplementedException("Roi.iterator(..)");
};

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
 * public class IJ
extends java.lang.Object
 *
 * This class consists of static utility methods.
*/

/**
 * @constructor
 *
 *
 * @author Created by ijdoc2js
 */

function IJ() {
    throw new NotImplementedException("IJ.IJ(..)");
};

/**
 * Image display modes
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
IJ.COMPOSITE = 0;

/**
 * Image display modes
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
IJ.COLOR = 0;

/**
 * Image display modes
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
IJ.GRAYSCALE = 0;

/**
 *
 * @const {java.lang.String}
 * @default
 *
 * @author Created by ijdoc2js
 */
IJ.URL = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
IJ.ALL_KEYS = 0;

/**
 * Use setDebugMode(boolean) to enable/disable debug mode.
 *
 * @const {boolean}
 * @default
 *
 * @author Created by ijdoc2js
 */
IJ.debugMode = 0;

/**
 *
 * @const {boolean}
 * @default
 *
 * @author Created by ijdoc2js
 */
IJ.hideProcessStackDialog = 0;

/**
 *
 * @const {char}
 * @default
 *
 * @author Created by ijdoc2js
 */
IJ.micronSymbol = 0;

/**
 *
 * @const {char}
 * @default
 *
 * @author Created by ijdoc2js
 */
IJ.angstromSymbol = 0;

/**
 *
 * @const {char}
 * @default
 *
 * @author Created by ijdoc2js
 */
IJ.degreeSymbol = 0;

/**
 *
 * @const {int}
 * @default
 *
 * @author Created by ijdoc2js
 */
IJ.CANCELED = 0;

IJ.VERSION = 0.01;
/**
 * Returns a reference to the "ImageJ" frame.
 *
 * @return ImageJ
 *
 * @author Created by ijdoc2js
 */
IJ.getInstance = function() {
    throw new NotImplementedException("IJ.getInstance(..)");
};

/**
 * Enable/disable debug mode.
 *
 * @param {boolean} b -
 *
 * @author Created by ijdoc2js
 */
IJ.setDebugMode = function(b) {
    throw new NotImplementedException("IJ.setDebugMode(..)");
};

/**
 * Runs the macro contained in the string <code>macro</code>.
 * Returns any string value returned by the macro, null if the macro
 * does not return a value, or "[aborted]" if the macro was aborted
 * due to an error. The equivalent macro function is eval().
 *
 * @param {java.lang.String} macro -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.runMacro = function(macro) {
    throw new NotImplementedException("IJ.runMacro(..)");
};

/**
 * Runs the macro contained in the string <code>macro</code>.
 * The optional string argument can be retrieved in the
 * called macro using the getArgument() macro function.
 * Returns any string value returned by the macro, null if the macro
 * does not return a value, or "[aborted]" if the macro was aborted
 * due to an error.
 *
 * @param {java.lang.String} macro -
 * @param {java.lang.String} arg -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.runMacro = function(macro, arg) {
    throw new NotImplementedException("IJ.runMacro(..)");
};

/**
 * Runs the specified macro or script file in the current thread.
 * The file is assumed to be in the macros folder
 * unless <code>name</code> is a full path.
 * The optional string argument (<code>arg</code>) can be retrieved in the called
 * macro or script (v1.42k or later) using the getArgument() function.
 * Returns any string value returned by the macro, or null. Scripts always return null.
 * The equivalent macro function is runMacro().
 *
 * @param {java.lang.String} name -
 * @param {java.lang.String} arg -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.runMacroFile = function(name, arg) {
    throw new NotImplementedException("IJ.runMacroFile(..)");
};

/**
 * Runs the specified macro file.
 *
 * @param {java.lang.String} name -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.runMacroFile = function(name) {
    throw new NotImplementedException("IJ.runMacroFile(..)");
};

/**
 * Runs the specified plugin using the specified image.
 *
 * @param {ImagePlus} imp -
 * @param {java.lang.String} className -
 * @param {java.lang.String} arg -
 * @return java.lang.Object
 *
 * @author Created by ijdoc2js
 */
IJ.runPlugIn = function(imp, className, arg) {
    throw new NotImplementedException("IJ.runPlugIn(..)");
};

/**
 * Runs the specified plugin and returns a reference to it.
 *
 * @param {java.lang.String} className -
 * @param {java.lang.String} arg -
 * @return java.lang.Object
 *
 * @author Created by ijdoc2js
 */
IJ.runPlugIn = function(className, arg) {
    throw new NotImplementedException("IJ.runPlugIn(..)");
};

/**
 * Runs the specified plugin and returns a reference to it.
 *
 * @param {java.lang.String} commandName -
 * @param {java.lang.String} className -
 * @param {java.lang.String} arg -
 * @return java.lang.Object
 *
 * @author Created by ijdoc2js
 */
IJ.runPlugIn = function(commandName, className, arg) {
    throw new NotImplementedException("IJ.runPlugIn(..)");
};

/**
 * Runs a menu command on a separete thread and returns immediately.
 *
 * @param {java.lang.String} command -
 *
 * @author Created by ijdoc2js
 */
IJ.doCommand = function(command) {
    throw new NotImplementedException("IJ.doCommand(..)");
};

/**
 * Runs a menu command on a separete thread, using the specified image.
 *
 * @param {ImagePlus} imp -
 * @param {java.lang.String} command -
 *
 * @author Created by ijdoc2js
 */
IJ.doCommand = function(imp, command) {
    throw new NotImplementedException("IJ.doCommand(..)");
};

/**
 * Runs an ImageJ command. Does not return until
 * the command has finished executing. To avoid "image locked",
 * errors, plugins that call this method should implement
 * the PlugIn interface instead of PlugInFilter.
 *
 * @param {java.lang.String} command -
 *
 * @author Created by ijdoc2js
 */
IJ.run = function(command) {
    throw new NotImplementedException("IJ.run(..)");
};

/**
 * Runs an ImageJ command, with options that are passed to the
 * GenericDialog and OpenDialog classes. Does not return until
 * the command has finished executing. To generate run() calls,
 * start the recorder (Plugins/Macro/Record) and run commands
 * from the ImageJ menu bar.
 *
 * @param {java.lang.String} command -
 * @param {java.lang.String} options -
 *
 * @author Created by ijdoc2js
 */
IJ.run = function(command, options) {
    throw new NotImplementedException("IJ.run(..)");
};

/**
 * Runs an ImageJ command using the specified image and options.
 * To generate run() calls, start the recorder (Plugins/Macro/Record)
 * and run commands from the ImageJ menu bar.
 *
 * @param {ImagePlus} imp -
 * @param {java.lang.String} command -
 * @param {java.lang.String} options -
 *
 * @author Created by ijdoc2js
 */
IJ.run = function(imp, command, options) {
    throw new NotImplementedException("IJ.run(..)");
};

/**
 * Returns true if the run(), open() or newImage() method is executing.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.macroRunning = function() {
    throw new NotImplementedException("IJ.macroRunning(..)");
};

/**
 * Returns true if a macro is running, or if the run(), open()
 * or newImage() method is executing.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isMacro = function() {
    throw new NotImplementedException("IJ.isMacro(..)");
};

/**
 * Returns the Applet that created this ImageJ or null if running as an application.
 *
 * @return java.applet.Applet
 *
 * @author Created by ijdoc2js
 */
IJ.getApplet = function() {
    throw new NotImplementedException("IJ.getApplet(..)");
};

/**
 * Displays a message in the ImageJ status bar.
 *
 * @param {java.lang.String} s -
 *
 * @author Created by ijdoc2js
 */
IJ.showStatus = function(s) {
    throw new NotImplementedException("IJ.showStatus(..)");
};

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">replaced by IJ.log(), ResultsTable.setResult() and TextWindow.append().
 * There are examples at
 * http://imagej.nih.gov/ij/plugins/sine-cosine.html</span>
 *
 * @deprecated .</span>&nbsp;<span class="deprecationComment">replaced by IJ.log(), ResultsTable.setResult() and TextWindow.append().
 * There are examples at
 * http://imagej.nih.gov/ij/plugins/sine-cosine.html</span>
 * @param {java.lang.String} s -
 *
 * @author Created by ijdoc2js
 */
IJ.write = function(s) {
    throw new NotImplementedException("IJ.write(..)");
};

/**
 *
 * @param {java.lang.String} s -
 *
 * @author Created by ijdoc2js
 */
IJ.log = function(s) {
    throw new NotImplementedException("IJ.log(..)");
};

/**
 * Returns the contents of the Log window or null if the Log window is not open.
 *
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.getLog = function() {
    throw new NotImplementedException("IJ.getLog(..)");
};

/**
 * Clears the "Results" window and sets the column headings to
 * those in the tab-delimited 'headings' String. Writes to
 * System.out.println if the "ImageJ" frame is not present.
 *
 * @param {java.lang.String} headings -
 *
 * @author Created by ijdoc2js
 */
IJ.setColumnHeadings = function(headings) {
    throw new NotImplementedException("IJ.setColumnHeadings(..)");
};

/**
 * Returns true if the "Results" window is open.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isResultsWindow = function() {
    throw new NotImplementedException("IJ.isResultsWindow(..)");
};

/**
 * Renames a results window.
 *
 * @param {java.lang.String} title -
 *
 * @author Created by ijdoc2js
 */
IJ.renameResults = function(title) {
    throw new NotImplementedException("IJ.renameResults(..)");
};

/**
 * Changes the name of a results window from 'oldTitle' to 'newTitle'.
 *
 * @param {java.lang.String} oldTitle -
 * @param {java.lang.String} newTitle -
 *
 * @author Created by ijdoc2js
 */
IJ.renameResults = function(oldTitle, newTitle) {
    throw new NotImplementedException("IJ.renameResults(..)");
};

/**
 * Deletes 'row1' through 'row2' of the "Results" window. Arguments
 * must be in the range 0-Analyzer.getCounter()-1.
 *
 * @param {int} row1 -
 * @param {int} row2 -
 *
 * @author Created by ijdoc2js
 */
IJ.deleteRows = function(row1, row2) {
    throw new NotImplementedException("IJ.deleteRows(..)");
};

/**
 * Returns a reference to the "Results" window TextPanel.
 * Opens the "Results" window if it is currently not open.
 * Returns null if the "ImageJ" window is not open.
 *
 * @return TextPanel
 *
 * @author Created by ijdoc2js
 */
IJ.getTextPanel = function() {
    throw new NotImplementedException("IJ.getTextPanel(..)");
};

/**
 * TextWindow calls this method with a null argument when the "Results" window is closed.
 *
 * @param {TextPanel} tp -
 *
 * @author Created by ijdoc2js
 */
IJ.setTextPanel = function(tp) {
    throw new NotImplementedException("IJ.setTextPanel(..)");
};

/**
 * Displays a "no images are open" dialog box.
 *
 *
 * @author Created by ijdoc2js
 */
IJ.noImage = function() {
    throw new NotImplementedException("IJ.noImage(..)");
};

/**
 * Displays an "out of memory" message to the "Log" window.
 *
 * @param {java.lang.String} name -
 *
 * @author Created by ijdoc2js
 */
IJ.outOfMemory = function(name) {
    throw new NotImplementedException("IJ.outOfMemory(..)");
};

/**
 * Updates the progress bar, where 0&lt;=progress&lt;=1.0. The progress bar is
 * not shown in BatchMode and erased if progress&gt;=1.0. The progress bar is
 * updated only if more than 90 ms have passes since the last call. Does nothing
 * if the ImageJ window is not present.
 *
 * @param {double} progress -
 *
 * @author Created by ijdoc2js
 */
IJ.showProgress = function(progress) {
    throw new NotImplementedException("IJ.showProgress(..)");
};

/**
 * Updates the progress bar, where the length of the bar is set to
 * (<code>currentValue+1)/finalValue</code> of the maximum bar length.
 * The bar is erased if <code>currentValue&gt;=finalValue</code>.
 * The bar is updated only if more than 90 ms have passed since the last call.
 * Does nothing if the ImageJ window is not present.
 *
 * @param {int} currentIndex -
 * @param {int} finalIndex -
 *
 * @author Created by ijdoc2js
 */
IJ.showProgress = function(currentIndex, finalIndex) {
    throw new NotImplementedException("IJ.showProgress(..)");
};

/**
 * Displays a message in a dialog box titled "Message".
 * Writes the Java console if ImageJ is not present.
 *
 * @param {java.lang.String} msg -
 *
 * @author Created by ijdoc2js
 */
IJ.showMessage = function(msg) {
    throw new NotImplementedException("IJ.showMessage(..)");
};

/**
 * Displays a message in a dialog box with the specified title.
 * Displays HTML formatted text if 'msg' starts with "".
 * There are examples at
 * "http://imagej.nih.gov/ij/macros/HtmlDialogDemo.txt".
 * Writes to the Java console if ImageJ is not present.
 *
 * @param {java.lang.String} title -
 * @param {java.lang.String} msg -
 *
 * @author Created by ijdoc2js
 */
IJ.showMessage = function(title, msg) {
    throw new NotImplementedException("IJ.showMessage(..)");
};

/**
 * Displays a message in a dialog box titled "ImageJ". If a
 * macro is running, it is aborted. Writes to the Java console
 * if the ImageJ window is not present.
 *
 * @param {java.lang.String} msg -
 *
 * @author Created by ijdoc2js
 */
IJ.error = function(msg) {
    throw new NotImplementedException("IJ.error(..)");
};

/**
 * Displays a message in a dialog box with the specified title.
 * If a macro is running, it is aborted. Writes to the Java
 * console if ImageJ is not present.
 *
 * @param {java.lang.String} title -
 * @param {java.lang.String} msg -
 *
 * @author Created by ijdoc2js
 */
IJ.error = function(title, msg) {
    throw new NotImplementedException("IJ.error(..)");
};

/**
 * Returns the last error message written by IJ.error() or null if there
 * was no error since the last time this method was called.
 *
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.getErrorMessage = function() {
    throw new NotImplementedException("IJ.getErrorMessage(..)");
};

/**
 * Displays a message in a dialog box with the specified title.
 * Returns false if the user pressed "Cancel".
 *
 * @param {java.lang.String} title -
 * @param {java.lang.String} msg -
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.showMessageWithCancel = function(title, msg) {
    throw new NotImplementedException("IJ.showMessageWithCancel(..)");
};

/**
 * Allows the user to enter a number in a dialog box. Returns the
 * value IJ.CANCELED (-2,147,483,648) if the user cancels the dialog box.
 * Returns 'defaultValue' if the user enters an invalid number.
 *
 * @param {java.lang.String} prompt -
 * @param {double} defaultValue -
 * @return double
 *
 * @author Created by ijdoc2js
 */
IJ.getNumber = function(prompt, defaultValue) {
    throw new NotImplementedException("IJ.getNumber(..)");
};

/**
 * Allows the user to enter a string in a dialog box. Returns
 * "" if the user cancels the dialog box.
 *
 * @param {java.lang.String} prompt -
 * @param {java.lang.String} defaultString -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.getString = function(prompt, defaultString) {
    throw new NotImplementedException("IJ.getString(..)");
};

/**
 * Delays 'msecs' milliseconds.
 *
 * @param {int} msecs -
 *
 * @author Created by ijdoc2js
 */
IJ.wait = function(msecs) {
    throw new NotImplementedException("IJ.wait(..)");
};

/**
 * Emits an audio beep.
 *
 *
 * @author Created by ijdoc2js
 */
IJ.beep = function() {
    throw new NotImplementedException("IJ.beep(..)");
};

/**
 * Runs the garbage collector and returns a string something
 * like "64K of 256MB (25%)" that shows how much of
 * the available memory is in use. This is the string
 * displayed when the user clicks in the status bar.
 *
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.freeMemory = function() {
    throw new NotImplementedException("IJ.freeMemory(..)");
};

/**
 * Returns the amount of memory currently being used by ImageJ.
 *
 * @return long
 *
 * @author Created by ijdoc2js
 */
IJ.currentMemory = function() {
    throw new NotImplementedException("IJ.currentMemory(..)");
};

/**
 * Returns the maximum amount of memory available to ImageJ or
 * zero if ImageJ is unable to determine this limit.
 *
 * @return long
 *
 * @author Created by ijdoc2js
 */
IJ.maxMemory = function() {
    throw new NotImplementedException("IJ.maxMemory(..)");
};

/**
 *
 * @param {ImagePlus} imp -
 * @param {long} start -
 * @param {java.lang.String} str -
 *
 * @author Created by ijdoc2js
 */
IJ.showTime = function(imp, start, str) {
    throw new NotImplementedException("IJ.showTime(..)");
};

/**
 *
 * @param {ImagePlus} imp -
 * @param {long} start -
 * @param {java.lang.String} str -
 * @param {int} nslices -
 *
 * @author Created by ijdoc2js
 */
IJ.showTime = function(imp, start, str, nslices) {
    throw new NotImplementedException("IJ.showTime(..)");
};

/**
 * Experimental
 *
 * @param {ImagePlus} imp -
 * @param {long} startNanoTime -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.time = function(imp, startNanoTime) {
    throw new NotImplementedException("IJ.time(..)");
};

/**
 * Converts a number to a formatted string using
 * 2 digits to the right of the decimal point.
 *
 * @param {double} n -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.d2s = function(n) {
    throw new NotImplementedException("IJ.d2s(..)");
};

/**
 * Converts a number to a rounded formatted string.
 * The 'decimalPlaces' argument specifies the number of
 * digits to the right of the decimal point (0-9). Uses
 * scientific notation if 'decimalPlaces is negative.
 *
 * @param {double} n -
 * @param {int} decimalPlaces -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.d2s = function(n, decimalPlaces) {
    throw new NotImplementedException("IJ.d2s(..)");
};

/**
 * Converts a number to a rounded formatted string.
 * The 'significantDigits' argument specifies the minimum number
 * of significant digits, which is also the preferred number of
 * digits behind the decimal. Fewer decimals are shown if the
 * number would have more than 'maxDigits'.
 * Exponential notation is used if more than 'maxDigits' would be needed.
 *
 * @param {double} x -
 * @param {int} significantDigits -
 * @param {int} maxDigits -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.d2s = function(x, significantDigits, maxDigits) {
    throw new NotImplementedException("IJ.d2s(..)");
};

/**
 * Pad 'n' with leading zeros to the specified number of digits.
 *
 * @param {int} n -
 * @param {int} digits -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.pad = function(n, digits) {
    throw new NotImplementedException("IJ.pad(..)");
};

/**
 * Adds the specified class to a Vector to keep it from being garbage
 * collected, which would cause the classes static fields to be reset.
 * Probably not needed with Java 1.2 or later.
 *
 * @param {java.lang.Class} c -
 *
 * @author Created by ijdoc2js
 */
IJ.register = function(c) {
    throw new NotImplementedException("IJ.register(..)");
};

/**
 * Returns true if the space bar is down.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.spaceBarDown = function() {
    throw new NotImplementedException("IJ.spaceBarDown(..)");
};

/**
 * Returns true if the control key is down.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.controlKeyDown = function() {
    throw new NotImplementedException("IJ.controlKeyDown(..)");
};

/**
 * Returns true if the alt key is down.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.altKeyDown = function() {
    throw new NotImplementedException("IJ.altKeyDown(..)");
};

/**
 * Returns true if the shift key is down.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.shiftKeyDown = function() {
    throw new NotImplementedException("IJ.shiftKeyDown(..)");
};

/**
 *
 * @param {int} key -
 *
 * @author Created by ijdoc2js
 */
IJ.setKeyDown = function(key) {
    throw new NotImplementedException("IJ.setKeyDown(..)");
};

/**
 *
 * @param {int} key -
 *
 * @author Created by ijdoc2js
 */
IJ.setKeyUp = function(key) {
    throw new NotImplementedException("IJ.setKeyUp(..)");
};

/**
 *
 * @param {java.awt.event.InputEvent} e -
 *
 * @author Created by ijdoc2js
 */
IJ.setInputEvent = function(e) {
    throw new NotImplementedException("IJ.setInputEvent(..)");
};

/**
 * Returns true if this machine is a Macintosh.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isMacintosh = function() {
    throw new NotImplementedException("IJ.isMacintosh(..)");
};

/**
 * Returns true if this machine is a Macintosh running OS X.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isMacOSX = function() {
    throw new NotImplementedException("IJ.isMacOSX(..)");
};

/**
 * Returns true if this machine is running Windows.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isWindows = function() {
    throw new NotImplementedException("IJ.isWindows(..)");
};

/**
 * Always returns true.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isJava2 = function() {
    throw new NotImplementedException("IJ.isJava2(..)");
};

/**
 * Always returns true.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isJava14 = function() {
    throw new NotImplementedException("IJ.isJava14(..)");
};

/**
 * Always returns true.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isJava15 = function() {
    throw new NotImplementedException("IJ.isJava15(..)");
};

/**
 * Returns true if ImageJ is running on a Java 1.6 or greater JVM.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isJava16 = function() {
    throw new NotImplementedException("IJ.isJava16(..)");
};

/**
 * Returns true if ImageJ is running on a Java 1.7 or greater JVM.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isJava17 = function() {
    throw new NotImplementedException("IJ.isJava17(..)");
};

/**
 * Returns true if ImageJ is running on a Java 1.8 or greater JVM.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isJava18 = function() {
    throw new NotImplementedException("IJ.isJava18(..)");
};

/**
 * Returns true if ImageJ is running on a Java 1.9 or greater JVM.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isJava19 = function() {
    throw new NotImplementedException("IJ.isJava19(..)");
};

/**
 * Returns true if ImageJ is running on Linux.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isLinux = function() {
    throw new NotImplementedException("IJ.isLinux(..)");
};

/**
 * Obsolete; always returns false.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.isVista = function() {
    throw new NotImplementedException("IJ.isVista(..)");
};

/**
 * Returns true if ImageJ is running a 64-bit version of Java.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.is64Bit = function() {
    throw new NotImplementedException("IJ.is64Bit(..)");
};

/**
 * Displays an error message and returns true if the
 * ImageJ version is less than the one specified.
 *
 * @param {java.lang.String} version -
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.versionLessThan = function(version) {
    throw new NotImplementedException("IJ.versionLessThan(..)");
};

/**
 * Displays a "Process all images?" dialog. Returns
 * 'flags'+PlugInFilter.DOES_STACKS if the user selects "Yes",
 * 'flags' if the user selects "No" and PlugInFilter.DONE
 * if the user selects "Cancel".
 *
 * @param {ImagePlus} imp -
 * @param {int} flags -
 * @return int
 *
 * @author Created by ijdoc2js
 */
IJ.setupDialog = function(imp, flags) {
    throw new NotImplementedException("IJ.setupDialog(..)");
};

/**
 * Creates a rectangular selection. Removes any existing
 * selection if width or height are less than 1.
 *
 * @param {int} x -
 * @param {int} y -
 * @param {int} width -
 * @param {int} height -
 *
 * @author Created by ijdoc2js
 */
IJ.makeRectangle = function(x, y, width, height) {
    throw new NotImplementedException("IJ.makeRectangle(..)");
};

/**
 * Creates a subpixel resolution rectangular selection.
 *
 * @param {double} x -
 * @param {double} y -
 * @param {double} width -
 * @param {double} height -
 *
 * @author Created by ijdoc2js
 */
IJ.makeRectangle = function(x, y, width, height) {
    throw new NotImplementedException("IJ.makeRectangle(..)");
};

/**
 * Creates an oval selection. Removes any existing
 * selection if width or height are less than 1.
 *
 * @param {int} x -
 * @param {int} y -
 * @param {int} width -
 * @param {int} height -
 *
 * @author Created by ijdoc2js
 */
IJ.makeOval = function(x, y, width, height) {
    throw new NotImplementedException("IJ.makeOval(..)");
};

/**
 * Creates an subpixel resolution oval selection.
 *
 * @param {double} x -
 * @param {double} y -
 * @param {double} width -
 * @param {double} height -
 *
 * @author Created by ijdoc2js
 */
IJ.makeOval = function(x, y, width, height) {
    throw new NotImplementedException("IJ.makeOval(..)");
};

/**
 * Creates a straight line selection.
 *
 * @param {int} x1 -
 * @param {int} y1 -
 * @param {int} x2 -
 * @param {int} y2 -
 *
 * @author Created by ijdoc2js
 */
IJ.makeLine = function(x1, y1, x2, y2) {
    throw new NotImplementedException("IJ.makeLine(..)");
};

/**
 * Creates a straight line selection using floating point coordinates.
 *
 * @param {double} x1 -
 * @param {double} y1 -
 * @param {double} x2 -
 * @param {double} y2 -
 *
 * @author Created by ijdoc2js
 */
IJ.makeLine = function(x1, y1, x2, y2) {
    throw new NotImplementedException("IJ.makeLine(..)");
};

/**
 * Creates a point selection using integer coordinates..
 *
 * @param {int} x -
 * @param {int} y -
 *
 * @author Created by ijdoc2js
 */
IJ.makePoint = function(x, y) {
    throw new NotImplementedException("IJ.makePoint(..)");
};

/**
 * Creates a point selection using floating point coordinates.
 *
 * @param {double} x -
 * @param {double} y -
 *
 * @author Created by ijdoc2js
 */
IJ.makePoint = function(x, y) {
    throw new NotImplementedException("IJ.makePoint(..)");
};

/**
 * Sets the display range (minimum and maximum displayed pixel values) of the current image.
 *
 * @param {double} min -
 * @param {double} max -
 *
 * @author Created by ijdoc2js
 */
IJ.setMinAndMax = function(min, max) {
    throw new NotImplementedException("IJ.setMinAndMax(..)");
};

/**
 * Sets the display range (minimum and maximum displayed pixel values) of the specified image.
 *
 * @param {ImagePlus} img -
 * @param {double} min -
 * @param {double} max -
 *
 * @author Created by ijdoc2js
 */
IJ.setMinAndMax = function(img, min, max) {
    throw new NotImplementedException("IJ.setMinAndMax(..)");
};

/**
 * Sets the minimum and maximum displayed pixel values on the specified RGB
 * channels, where 4=red, 2=green and 1=blue.
 *
 * @param {double} min -
 * @param {double} max -
 * @param {int} channels -
 *
 * @author Created by ijdoc2js
 */
IJ.setMinAndMax = function(min, max, channels) {
    throw new NotImplementedException("IJ.setMinAndMax(..)");
};

/**
 * Resets the minimum and maximum displayed pixel values of the
 * current image to be the same as the min and max pixel values.
 *
 *
 * @author Created by ijdoc2js
 */
IJ.resetMinAndMax = function() {
    throw new NotImplementedException("IJ.resetMinAndMax(..)");
};

/**
 * Resets the minimum and maximum displayed pixel values of the
 * specified image to be the same as the min and max pixel values.
 *
 * @param {ImagePlus} img -
 *
 * @author Created by ijdoc2js
 */
IJ.resetMinAndMax = function(img) {
    throw new NotImplementedException("IJ.resetMinAndMax(..)");
};

/**
 * Sets the lower and upper threshold levels and displays the image
 * using red to highlight thresholded pixels. May not work correctly on
 * 16 and 32 bit images unless the display range has been reset using IJ.resetMinAndMax().
 *
 * @param {double} lowerThreshold -
 * @param {double} upperThresold -
 *
 * @author Created by ijdoc2js
 */
IJ.setThreshold = function(lowerThreshold, upperThresold) {
    throw new NotImplementedException("IJ.setThreshold(..)");
};

/**
 * Sets the lower and upper threshold levels and displays the image using
 * the specified <code>displayMode</code> ("Red", "Black &amp; White", "Over/Under" or "No Update").
 *
 * @param {double} lowerThreshold -
 * @param {double} upperThreshold -
 * @param {java.lang.String} displayMode -
 *
 * @author Created by ijdoc2js
 */
IJ.setThreshold = function(lowerThreshold, upperThreshold, displayMode) {
    throw new NotImplementedException("IJ.setThreshold(..)");
};

/**
 * Sets the lower and upper threshold levels of the specified image.
 *
 * @param {ImagePlus} img -
 * @param {double} lowerThreshold -
 * @param {double} upperThreshold -
 *
 * @author Created by ijdoc2js
 */
IJ.setThreshold = function(img, lowerThreshold, upperThreshold) {
    throw new NotImplementedException("IJ.setThreshold(..)");
};

/**
 * Sets the lower and upper threshold levels of the specified image and updates the display using
 * the specified <code>displayMode</code> ("Red", "Black &amp; White", "Over/Under" or "No Update").
 * With calibrated images, 'lowerThreshold' and 'upperThreshold' must be density calibrated values.
 * Use setRawThreshold() to set the threshold using raw (uncalibrated) values.
 *
 * @param {ImagePlus} img -
 * @param {double} lowerThreshold -
 * @param {double} upperThreshold -
 * @param {java.lang.String} displayMode -
 *
 * @author Created by ijdoc2js
 */
IJ.setThreshold = function(img, lowerThreshold, upperThreshold, displayMode) {
    throw new NotImplementedException("IJ.setThreshold(..)");
};

/**
 * This is a version of setThreshold() that always uses raw (uncalibrated) values
 * in the range 0-255 for 8-bit images and 0-65535 for 16-bit images.
 *
 * @param {ImagePlus} img -
 * @param {double} lowerThreshold -
 * @param {double} upperThreshold -
 * @param {java.lang.String} displayMode -
 *
 * @author Created by ijdoc2js
 */
IJ.setRawThreshold = function(img, lowerThreshold, upperThreshold, displayMode) {
    throw new NotImplementedException("IJ.setRawThreshold(..)");
};

/**
 *
 * @param {ImagePlus} imp -
 * @param {java.lang.String} method -
 *
 * @author Created by ijdoc2js
 */
IJ.setAutoThreshold = function(imp, method) {
    throw new NotImplementedException("IJ.setAutoThreshold(..)");
};

/**
 * Disables thresholding on the current image.
 *
 *
 * @author Created by ijdoc2js
 */
IJ.resetThreshold = function() {
    throw new NotImplementedException("IJ.resetThreshold(..)");
};

/**
 * Disables thresholding on the specified image.
 *
 * @param {ImagePlus} img -
 *
 * @author Created by ijdoc2js
 */
IJ.resetThreshold = function(img) {
    throw new NotImplementedException("IJ.resetThreshold(..)");
};

/**
 * For IDs less than zero, activates the image with the specified ID.
 * For IDs greater than zero, activates the Nth image.
 *
 * @param {int} id -
 *
 * @author Created by ijdoc2js
 */
IJ.selectWindow = function(id) {
    throw new NotImplementedException("IJ.selectWindow(..)");
};

/**
 * Activates the window with the specified title.
 *
 * @param {java.lang.String} title -
 *
 * @author Created by ijdoc2js
 */
IJ.selectWindow = function(title) {
    throw new NotImplementedException("IJ.selectWindow(..)");
};

/**
 * Sets the foreground color.
 *
 * @param {int} red -
 * @param {int} green -
 * @param {int} blue -
 *
 * @author Created by ijdoc2js
 */
IJ.setForegroundColor = function(red, green, blue) {
    throw new NotImplementedException("IJ.setForegroundColor(..)");
};

/**
 * Sets the background color.
 *
 * @param {int} red -
 * @param {int} green -
 * @param {int} blue -
 *
 * @author Created by ijdoc2js
 */
IJ.setBackgroundColor = function(red, green, blue) {
    throw new NotImplementedException("IJ.setBackgroundColor(..)");
};

/**
 * Switches to the specified tool, where id = Toolbar.RECTANGLE (0),
 * Toolbar.OVAL (1), etc.
 *
 * @param {int} id -
 *
 * @author Created by ijdoc2js
 */
IJ.setTool = function(id) {
    throw new NotImplementedException("IJ.setTool(..)");
};

/**
 * Switches to the specified tool, where 'name' is "rect", "elliptical",
 * "brush", etc. Returns 'false' if the name is not recognized.
 *
 * @param {java.lang.String} name -
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.setTool = function(name) {
    throw new NotImplementedException("IJ.setTool(..)");
};

/**
 * Returns the name of the current tool.
 *
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.getToolName = function() {
    throw new NotImplementedException("IJ.getToolName(..)");
};

/**
 * Equivalent to clicking on the current image at (x,y) with the
 * wand tool. Returns the number of points in the resulting ROI.
 *
 * @param {int} x -
 * @param {int} y -
 * @return int
 *
 * @author Created by ijdoc2js
 */
IJ.doWand = function(x, y) {
    throw new NotImplementedException("IJ.doWand(..)");
};

/**
 * Traces the boundary of the area with pixel values within
 * 'tolerance' of the value of the pixel at the starting location.
 * 'tolerance' is in uncalibrated units.
 * 'mode' can be "4-connected", "8-connected" or "Legacy".
 * "Legacy" is for compatibility with previous versions of ImageJ;
 * it is ignored if 'tolerance' &gt; 0.
 *
 * @param {int} x -
 * @param {int} y -
 * @param {double} tolerance -
 * @param {java.lang.String} mode -
 * @return int
 *
 * @author Created by ijdoc2js
 */
IJ.doWand = function(x, y, tolerance, mode) {
    throw new NotImplementedException("IJ.doWand(..)");
};

/**
 * This version of doWand adds an ImagePlus argument.
 *
 * @param {ImagePlus} img -
 * @param {int} x -
 * @param {int} y -
 * @param {double} tolerance -
 * @param {java.lang.String} mode -
 * @return int
 *
 * @author Created by ijdoc2js
 */
IJ.doWand = function(img, x, y, tolerance, mode) {
    throw new NotImplementedException("IJ.doWand(..)");
};

/**
 * Sets the transfer mode used by the <i>Edit/Paste</i> command, where mode is "Copy", "Blend", "Average", "Difference",
 * "Transparent", "Transparent2", "AND", "OR", "XOR", "Add", "Subtract", "Multiply", or "Divide".
 *
 * @param {java.lang.String} mode -
 *
 * @author Created by ijdoc2js
 */
IJ.setPasteMode = function(mode) {
    throw new NotImplementedException("IJ.setPasteMode(..)");
};

/**
 * Returns a reference to the active image, or displays an error
 * message and aborts the plugin or macro if no images are open.
 *
 * @return ImagePlus
 *
 * @author Created by ijdoc2js
 */
IJ.getImage = function() {
    throw new NotImplementedException("IJ.getImage(..)");
};

/**
 * Returns the active image or stack slice as an ImageProcessor, or displays
 * an error message and aborts the plugin or macro if no images are open.
 *
 * @return ImageProcessor
 *
 * @author Created by ijdoc2js
 */
IJ.getProcessor = function() {
    throw new NotImplementedException("IJ.getProcessor(..)");
};

/**
 * Switches to the specified stack slice, where 1 <='slice'<=stack-size.
 *
 * @param {int} slice -
 *
 * @author Created by ijdoc2js
 */
IJ.setSlice = function(slice) {
    throw new NotImplementedException("IJ.setSlice(..)");
};

/**
 * Returns the ImageJ version number as a string.
 *
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.getVersion = function() {
    return IJ.VERSION;
};

/**
 * Returns the ImageJ version and build number as a String, for
 * example "1.46n05", or 1.46n99 if there is no build number.
 *
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.getFullVersion = function() {
    return IJ.VERSION + 'n99';
};

/**
 * Returns the path to the home ("user.home"), startup, ImageJ, plugins, macros,
 * luts, temp, current or image directory if <code>title</code> is "home", "startup",
 * "imagej", "plugins", "macros", "luts", "temp", "current", "default", "image", otherwise,
 * displays a dialog and returns the path to the directory selected by the user.
 * Returns null if the specified directory is not found or the user
 * cancels the dialog box. Also aborts the macro if the user cancels
 * the dialog box.
 *
 * @param {java.lang.String} title -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.getDirectory = function(title) {
    throw new NotImplementedException("IJ.getDirectory(..)");
};

/**
 * Alias for getDirectory().
 *
 * @param {java.lang.String} title -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.getDir = function(title) {
    throw new NotImplementedException("IJ.getDir(..)");
};

/**
 * Displays an open file dialog and returns the path to the
 * choosen file, or returns null if the dialog is canceled.
 *
 * @param {java.lang.String} dialogTitle -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.getFilePath = function(dialogTitle) {
    throw new NotImplementedException("IJ.getFilePath(..)");
};

/**
 * Displays a file open dialog box and then opens the tiff, dicom,
 * fits, pgm, jpeg, bmp, gif, lut, roi, or text file selected by
 * the user. Displays an error message if the selected file is not
 * in one of the supported formats, or if it is not found.
 *
 *
 * @author Created by ijdoc2js
 */
IJ.open = function() {
    throw new NotImplementedException("IJ.open(..)");
};

/**
 * Opens and displays a tiff, dicom, fits, pgm, jpeg, bmp, gif, lut,
 * roi, or text file. Displays an error message if the specified file
 * is not in one of the supported formats, or if it is not found.
 * With 1.41k or later, opens images specified by a URL.
 *
 * @param {java.lang.String} path -
 *
 * @author Created by ijdoc2js
 */
IJ.open = function(path) {
    throw new NotImplementedException("IJ.open(..)");
};

/**
 * Opens and displays the nth image in the specified tiff stack.
 *
 * @param {java.lang.String} path -
 * @param {int} n -
 *
 * @author Created by ijdoc2js
 */
IJ.open = function(path, n) {
    throw new NotImplementedException("IJ.open(..)");
};

/**
 * Opens the specified file as a tiff, bmp, dicom, fits, pgm, gif, jpeg
 * or text image and returns an ImagePlus object if successful.
 * Calls HandleExtraFileTypes plugin if the file type is not recognised.
 * Displays a file open dialog if 'path' is null or an empty string.
 * Note that 'path' can also be a URL. Some reader plugins, including
 * the Bio-Formats plugin, display the image and return null.
 * Use IJ.open() to display a file open dialog box.
 *
 * @param {java.lang.String} path -
 * @return ImagePlus
 *
 * @author Created by ijdoc2js
 */
IJ.openImage = function(path) {
    throw new NotImplementedException("IJ.openImage(..)");
};

/**
 * Opens the nth image of the specified tiff stack.
 *
 * @param {java.lang.String} path -
 * @param {int} n -
 * @return ImagePlus
 *
 * @author Created by ijdoc2js
 */
IJ.openImage = function(path, n) {
    throw new NotImplementedException("IJ.openImage(..)");
};

/**
 * Opens the specified tiff file as a virtual stack.
 *
 * @param {java.lang.String} path -
 * @return ImagePlus
 *
 * @author Created by ijdoc2js
 */
IJ.openVirtual = function(path) {
    throw new NotImplementedException("IJ.openVirtual(..)");
};

/**
 * Opens an image using a file open dialog and returns it as an ImagePlus object.
 *
 * @return ImagePlus
 *
 * @author Created by ijdoc2js
 */
IJ.openImage = function() {
    throw new NotImplementedException("IJ.openImage(..)");
};

/**
 * Opens a URL and returns the contents as a string.
 * Returns "<error: message="">" if there an error, including
 * host or file not found.</error:>
 *
 * @param {java.lang.String} url -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.openUrlAsString = function(url) {
    throw new NotImplementedException("IJ.openUrlAsString(..)");
};

/**
 * Saves the current image, lookup table, selection or text window to the specified file path.
 * The path must end in ".tif", ".jpg", ".gif", ".zip", ".raw", ".avi", ".bmp", ".fits", ".pgm", ".png", ".lut", ".roi" or ".txt".
 *
 * @param {java.lang.String} path -
 *
 * @author Created by ijdoc2js
 */
IJ.save = function(path) {
    throw new NotImplementedException("IJ.save(..)");
};

/**
 * Saves the specified image, lookup table or selection to the specified file path.
 * The file path should end with ".tif", ".jpg", ".gif", ".zip", ".raw", ".avi", ".bmp",
 * ".fits", ".pgm", ".png", ".lut", ".roi" or ".txt". The specified image is saved in
 * TIFF format if there is no extension.
 *
 * @param {ImagePlus} imp -
 * @param {java.lang.String} path -
 *
 * @author Created by ijdoc2js
 */
IJ.save = function(imp, path) {
    throw new NotImplementedException("IJ.save(..)");
};

/**
 *
 * @param {java.lang.String} format -
 * @param {java.lang.String} path -
 *
 * @author Created by ijdoc2js
 */
IJ.saveAs = function(format, path) {
    throw new NotImplementedException("IJ.saveAs(..)");
};

/**
 *
 * @param {ImagePlus} imp -
 * @param {java.lang.String} format -
 * @param {java.lang.String} path -
 *
 * @author Created by ijdoc2js
 */
IJ.saveAs = function(imp, format, path) {
    throw new NotImplementedException("IJ.saveAs(..)");
};

/**
 * Saves the specified image in TIFF format. Displays a file save dialog
 * if 'path' is null or an empty string. Returns 'false' if there is an
 * error or if the user selects "Cancel" in the file save dialog.
 *
 * @param {ImagePlus} imp -
 * @param {java.lang.String} path -
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.saveAsTiff = function(imp, path) {
    throw new NotImplementedException("IJ.saveAsTiff(..)");
};

/**
 * Saves a string as a file. Displays a file save dialog if
 * 'path' is null or blank. Returns an error message
 * if there is an exception, otherwise returns null.
 *
 * @param {java.lang.String} string -
 * @param {java.lang.String} path -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.saveString = function(string, path) {
    throw new NotImplementedException("IJ.saveString(..)");
};

/**
 * Appends a string to the end of a file. A newline character ("\n")
 * is added to the end of the string before it is written. Returns an
 * error message if there is an exception, otherwise returns null.
 *
 * @param {java.lang.String} string -
 * @param {java.lang.String} path -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.append = function(string, path) {
    throw new NotImplementedException("IJ.append(..)");
};

/**
 * Opens a text file as a string. Displays a file open dialog
 * if path is null or blank. Returns null if the user cancels
 * the file open dialog. If there is an error, returns a
 * message in the form "Error: message".
 *
 * @param {java.lang.String} path -
 * @return java.lang.String
 *
 * @author Created by ijdoc2js
 */
IJ.openAsString = function(path) {
    throw new NotImplementedException("IJ.openAsString(..)");
};

/**
 * Creates a new image.
 *
 * @param {java.lang.String} title -
 * @param {int} width -
 * @param {int} height -
 * @param {int} depth -
 * @param {int} bitdepth -
 * @return ImagePlus
 *
 * @author Created by ijdoc2js
 */
IJ.createImage = function(title, width, height, depth, bitdepth) {
    throw new NotImplementedException("IJ.createImage(..)");
};

/**
 * Creates a new imagePlus. <code>Type</code> should contain "8-bit", "16-bit", "32-bit" or "RGB".
 * In addition, it can contain "white", "black" or "ramp". <code>Width</code>
 * and <code>height</code> specify the width and height of the image in pixels.
 * <code>Depth</code> specifies the number of stack slices.
 *
 * @param {java.lang.String} title -
 * @param {java.lang.String} type -
 * @param {int} width -
 * @param {int} height -
 * @param {int} depth -
 * @return ImagePlus
 *
 * @author Created by ijdoc2js
 */
IJ.createImage = function(title, type, width, height, depth) {
    throw new NotImplementedException("IJ.createImage(..)");
};

/**
 * Creates a new hyperstack.
 *
 * @param {java.lang.String} title -
 * @param {java.lang.String} type -
 * @param {int} width -
 * @param {int} height -
 * @param {int} channels -
 * @param {int} slices -
 * @param {int} frames -
 * @return ImagePlus
 *
 * @author Created by ijdoc2js
 */
IJ.createImage = function(title, type, width, height, channels, slices, frames) {
    throw new NotImplementedException("IJ.createImage(..)");
};

/**
 * Creates a new hyperstack.
 *
 * @param {java.lang.String} title -
 * @param {int} width -
 * @param {int} height -
 * @param {int} channels -
 * @param {int} slices -
 * @param {int} frames -
 * @param {int} bitdepth -
 * @return ImagePlus
 *
 * @author Created by ijdoc2js
 */
IJ.createHyperStack = function(title, width, height, channels, slices, frames, bitdepth) {
    throw new NotImplementedException("IJ.createHyperStack(..)");
};

/**
 * Opens a new image. <code>Type</code> should contain "8-bit", "16-bit", "32-bit" or "RGB".
 * In addition, it can contain "white", "black" or "ramp". <code>Width</code>
 * and <code>height</code> specify the width and height of the image in pixels.
 * <code>Depth</code> specifies the number of stack slices.
 *
 * @param {java.lang.String} title -
 * @param {java.lang.String} type -
 * @param {int} width -
 * @param {int} height -
 * @param {int} depth -
 *
 * @author Created by ijdoc2js
 */
IJ.newImage = function(title, type, width, height, depth) {
    throw new NotImplementedException("IJ.newImage(..)");
};

/**
 * Returns true if the <code>Esc</code> key was pressed since the
 * last ImageJ command started to execute or since resetEscape() was called.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.escapePressed = function() {
    throw new NotImplementedException("IJ.escapePressed(..)");
};

/**
 * This method sets the <code>Esc</code> key to the "up" position.
 * The Executer class calls this method when it runs
 * an ImageJ command in a separate thread.
 *
 *
 * @author Created by ijdoc2js
 */
IJ.resetEscape = function() {
    throw new NotImplementedException("IJ.resetEscape(..)");
};

/**
 * Causes IJ.error() output to be temporarily redirected to the "Log" window.
 *
 *
 * @author Created by ijdoc2js
 */
IJ.redirectErrorMessages = function() {
    throw new NotImplementedException("IJ.redirectErrorMessages(..)");
};

/**
 * Set 'true' and IJ.error() output will be temporarily redirected to the "Log" window.
 *
 * @param {boolean} redirect -
 *
 * @author Created by ijdoc2js
 */
IJ.redirectErrorMessages = function(redirect) {
    throw new NotImplementedException("IJ.redirectErrorMessages(..)");
};

/**
 * Returns the state of the 'redirectErrorMessages' flag, which is set by File/Import/Image Sequence.
 *
 * @return boolean
 *
 * @author Created by ijdoc2js
 */
IJ.redirectingErrorMessages = function() {
    throw new NotImplementedException("IJ.redirectingErrorMessages(..)");
};

/**
 * Temporarily suppress "plugin not found" errors.
 *
 *
 * @author Created by ijdoc2js
 */
IJ.suppressPluginNotFoundError = function() {
    throw new NotImplementedException("IJ.suppressPluginNotFoundError(..)");
};

/**
 * Returns the class loader ImageJ uses to run plugins or the
 * system class loader if Menus.getPlugInsPath() returns null.
 *
 * @return java.lang.ClassLoader
 *
 * @author Created by ijdoc2js
 */
IJ.getClassLoader = function() {
    throw new NotImplementedException("IJ.getClassLoader(..)");
};

/**
 * Returns the size, in pixels, of the primary display.
 *
 * @return java.awt.Dimension
 *
 * @author Created by ijdoc2js
 */
IJ.getScreenSize = function() {
    throw new NotImplementedException("IJ.getScreenSize(..)");
};

/**
 * Returns, as an array of strings, a list of the LUTs in the Image/Lookup Tables menu.
 *
 * @return java.lang.String[]
 *
 * @author Created by ijdoc2js
 */
IJ.getLuts = function() {
    throw new NotImplementedException("IJ.getLuts(..)");
};

/**
 *
 *
 * @author Created by ijdoc2js
 */
IJ.resetClassLoader = function() {
    throw new NotImplementedException("IJ.resetClassLoader(..)");
};

/**
 * Displays a stack trace. Use the setExceptionHandler
 * method() to override with a custom exception handler.
 *
 * @param {java.lang.Throwable} e -
 *
 * @author Created by ijdoc2js
 */
IJ.handleException = function(e) {
    throw new NotImplementedException("IJ.handleException(..)");
};

/**
 * Installs a custom exception handler that
 * overrides the handleException() method.
 *
 * @param {IJ.ExceptionHandler} handler -
 *
 * @author Created by ijdoc2js
 */
IJ.setExceptionHandler = function(handler) {
    throw new NotImplementedException("IJ.setExceptionHandler(..)");
};

/**
 *
 * @param {IJEventListener} listener -
 *
 * @author Created by ijdoc2js
 */
IJ.addEventListener = function(listener) {
    throw new NotImplementedException("IJ.addEventListener(..)");
};

/**
 *
 * @param {IJEventListener} listener -
 *
 * @author Created by ijdoc2js
 */
IJ.removeEventListener = function(listener) {
    throw new NotImplementedException("IJ.removeEventListener(..)");
};

/**
 *
 * @param {int} eventID -
 *
 * @author Created by ijdoc2js
 */
IJ.notifyEventListeners = function(eventID) {
    throw new NotImplementedException("IJ.notifyEventListeners(..)");
};

/**
 * Adds a key-value pair to IJ.properties. The key
 * and value are removed if 'value' is null.
 *
 * @param {java.lang.String} key -
 * @param {java.lang.Object} value -
 *
 * @author Created by ijdoc2js
 */
IJ.setProperty = function(key, value) {
    throw new NotImplementedException("IJ.setProperty(..)");
};

/**
 * Returns the object in IJ.properties associated
 * with 'key', or null if 'key' is not found.
 *
 * @param {java.lang.String} key -
 * @return java.lang.Object
 *
 * @author Created by ijdoc2js
 */
IJ.getProperty = function(key) {
    throw new NotImplementedException("IJ.getProperty(..)");
};

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
 * public class ImagePlus
extends java.lang.Object
implements java.awt.image.ImageObserver, Measurements, java.lang.Cloneable
 *
 * An ImagePlus contain an ImageProcessor (2D image) or an ImageStack (3D, 4D or 5D image).
 *  * It also includes metadata (spatial calibration and possibly the directory/file where
 *  * it was read from). The ImageProcessor contains the pixel data (8-bit, 16-bit, float or RGB) 
 *  * of the 2D image and some basic methods to manipulate it. An ImageStack is essentually 
 *  * a list ImageProcessors of same type and size.
*/

/**
 * Constructs an uninitialized ImagePlus.
 * @constructor
 * 
 * 
 * @author Created by ijdoc2js
 */

function ImagePlus() {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
};

/**
 * Constructs an ImagePlus from an Image or BufferedImage. The first 
 * argument will be used as the title of the window that displays the image.
 * Throws an IllegalStateException if an error occurs while loading the image.
 * @constructor
 * 
 * @param {java.lang.String} title - 
 * @param {java.awt.Image} img - 
 * 
 * @author Created by ijdoc2js
 */

function ImagePlus(title, img) {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
};

/**
 * Constructs an ImagePlus from an ImageProcessor.
 * @constructor
 * 
 * @param {java.lang.String} title - 
 * @param {ImageProcessor} ip - 
 * 
 * @author Created by ijdoc2js
 */

function ImagePlus(title, ip) {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
};

/**
 * Constructs an ImagePlus from a TIFF, BMP, DICOM, FITS,
 * PGM, GIF or JPRG specified by a path or from a TIFF, DICOM,
 * GIF or JPEG specified by a URL.
 * @constructor
 * 
 * @param {java.lang.String} pathOrURL - 
 * 
 * @author Created by ijdoc2js
 */

function ImagePlus(pathOrURL) {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
};

/**
 * Constructs an ImagePlus from a stack.
 * @constructor
 * 
 * @param {java.lang.String} title - 
 * @param {ImageStack} stack - 
 * 
 * @author Created by ijdoc2js
 */

function ImagePlus(title, stack) {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
};

/**
 * 8-bit grayscale (unsigned)
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.GRAY8 = 0;

/**
 * 16-bit grayscale (unsigned)
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.GRAY16 = 0;

/**
 * 32-bit floating-point grayscale
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.GRAY32 = 0;

/**
 * 8-bit indexed color
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.COLOR_256 = 0;

/**
 * 32-bit RGB color
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.COLOR_RGB = 0;

/**
 * True if any changes have been made to this image.
 * 
 * @const {boolean}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.changes = 0;

/**
 * 
 * @const {boolean}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.setIJMenuBar = 0;

/**
 * 
 * @const {boolean}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.typeSet = 0;

/**
 * Locks the image so other threads can test to see if it
 * is in use. Returns true if the image was successfully locked.
 * Beeps, displays a message in the status bar, and returns
 * false if the image is already locked.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.lock = function() {
    throw new NotImplementedException("ImagePlus.lock(..)");
};

/**
 * Similar to lock, but doesn't beep and display an error
 * message if the attempt to lock the image fails.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.lockSilently = function() {
    throw new NotImplementedException("ImagePlus.lockSilently(..)");
};

/**
 * Unlocks the image.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.unlock = function() {
    throw new NotImplementedException("ImagePlus.unlock(..)");
};

/**
 * Draws the image. If there is an ROI, its
 * outline is also displayed. Does nothing if there
 * is no window associated with this image (i.e. show()
 * has not been called).
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.draw = function() {
    throw new NotImplementedException("ImagePlus.draw(..)");
};

/**
 * Draws image and roi outline using a clip rect.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int} width - 
 * @param {int} height - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.draw = function(x, y, width, height) {
    throw new NotImplementedException("ImagePlus.draw(..)");
};

/**
 * Updates this image from the pixel data in its 
 * associated ImageProcessor, then displays it. Does
 * nothing if there is no window associated with
 * this image (i.e. show() has not been called).
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.updateAndDraw = function() {
    throw new NotImplementedException("ImagePlus.updateAndDraw(..)");
};

/**
 * Sets the display mode of composite color images, where 'mode' 
 * should be IJ.COMPOSITE, IJ.COLOR or IJ.GRAYSCALE.
 * 
 * @param {int} mode - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setDisplayMode = function(mode) {
    throw new NotImplementedException("ImagePlus.setDisplayMode(..)");
};

/**
 * Returns the display mode (IJ.COMPOSITE, IJ.COLOR
 * or IJ.GRAYSCALE) if this is a composite color
 * image, or 0 if it not.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getDisplayMode = function() {
    throw new NotImplementedException("ImagePlus.getDisplayMode(..)");
};

/**
 * Controls which channels in a composite color image are displayed, 
 * where 'channels' is a list of ones and zeros that specify the channels to
 * display. For example, "101" causes channels 1 and 3 to be displayed.
 * 
 * @param {java.lang.String} channels - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setActiveChannels = function(channels) {
    throw new NotImplementedException("ImagePlus.setActiveChannels(..)");
};

/**
 * Updates this image from the pixel data in its 
 * associated ImageProcessor, then displays it.
 * The CompositeImage class overrides this method 
 * to only update the current channel.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.updateChannelAndDraw = function() {
    throw new NotImplementedException("ImagePlus.updateChannelAndDraw(..)");
};

/**
 * Returns a reference to the current ImageProcessor. The
 * CompositeImage class overrides this method to return
 * the processor associated with the current channel.
 * 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getChannelProcessor = function() {
    throw new NotImplementedException("ImagePlus.getChannelProcessor(..)");
};

/**
 * Returns an array containing the lookup tables used by this image,
 * one per channel, or an empty array if this is an RGB image.
 * 
 * @return LUT[]
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getLuts = function() {
    throw new NotImplementedException("ImagePlus.getLuts(..)");
};

/**
 * Calls draw to draw the image and also repaints the
 * image window to force the information displayed above
 * the image (dimension, type, size) to be updated.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.repaintWindow = function() {
    throw new NotImplementedException("ImagePlus.repaintWindow(..)");
};

/**
 * Calls updateAndDraw to update from the pixel data
 * and draw the image, and also repaints the image
 * window to force the information displayed above
 * the image (dimension, type, size) to be updated.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.updateAndRepaintWindow = function() {
    throw new NotImplementedException("ImagePlus.updateAndRepaintWindow(..)");
};

/**
 * ImageCanvas.paint() calls this method when the
 * ImageProcessor has generated new image.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.updateImage = function() {
    throw new NotImplementedException("ImagePlus.updateImage(..)");
};

/**
 * Closes the window, if any, that is displaying this image.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.hide = function() {
    throw new NotImplementedException("ImagePlus.hide(..)");
};

/**
 * Closes this image and sets the ImageProcessor to null. To avoid the
 * "Save changes?" dialog, first set the public 'changes' variable to false.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.close = function() {
    throw new NotImplementedException("ImagePlus.close(..)");
};

/**
 * Opens a window to display this image and clears the status bar.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.show = function() {
    throw new NotImplementedException("ImagePlus.show(..)");
};

/**
 * Opens a window to display this image and displays
 * 'statusMessage' in the status bar.
 * 
 * @param {java.lang.String} statusMessage - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.show = function(statusMessage) {
    throw new NotImplementedException("ImagePlus.show(..)");
};

/**
 * Called by ImageWindow.windowActivated().
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setActivated = function() {
    throw new NotImplementedException("ImagePlus.setActivated(..)");
};

/**
 * Returns this image as a AWT image.
 * 
 * @return java.awt.Image
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getImage = function() {
    throw new NotImplementedException("ImagePlus.getImage(..)");
};

/**
 * Returns a copy of this image as an 8-bit or RGB BufferedImage.
 * 
 * @return java.awt.image.BufferedImage
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getBufferedImage = function() {
    throw new NotImplementedException("ImagePlus.getBufferedImage(..)");
};

/**
 * Returns this image's unique numeric ID.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getID = function() {
    throw new NotImplementedException("ImagePlus.getID(..)");
};

/**
 * Replaces the image, if any, with the one specified. 
 * Throws an IllegalStateException if an error occurs 
 * while loading the image.
 * 
 * @param {java.awt.Image} img - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setImage = function(img) {
    throw new NotImplementedException("ImagePlus.setImage(..)");
};

/**
 * Replaces this image with the specified ImagePlus. May
 * not work as expected if 'imp' is a CompositeImage
 * and this image is not.
 * 
 * @param {ImagePlus} imp - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setImage = function(imp) {
    throw new NotImplementedException("ImagePlus.setImage(..)");
};

/**
 * Replaces the ImageProcessor with the one specified and updates the
 * display. With stacks, the ImageProcessor must be the same type as the
 * other images in the stack and it must be the same width and height.
 * 
 * @param {ImageProcessor} ip - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setProcessor = function(ip) {
    throw new NotImplementedException("ImagePlus.setProcessor(..)");
};

/**
 * Replaces the ImageProcessor with the one specified and updates the display. With
 * stacks, the ImageProcessor must be the same type as other images in the stack and
 * it must be the same width and height. Set 'title' to null to leave the title unchanged.
 * 
 * @param {java.lang.String} title - 
 * @param {ImageProcessor} ip - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setProcessor = function(title, ip) {
    throw new NotImplementedException("ImagePlus.setProcessor(..)");
};

/**
 * Replaces the image with the specified stack and updates the display.
 * 
 * @param {ImageStack} stack - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setStack = function(stack) {
    throw new NotImplementedException("ImagePlus.setStack(..)");
};

/**
 * Replaces the image with the specified stack and updates 
 * the display. Set 'title' to null to leave the title unchanged.
 * 
 * @param {java.lang.String} title - 
 * @param {ImageStack} newStack - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setStack = function(title, newStack) {
    throw new NotImplementedException("ImagePlus.setStack(..)");
};

/**
 * 
 * @param {ImageStack} newStack - 
 * @param {int} channels - 
 * @param {int} slices - 
 * @param {int} frames - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setStack = function(newStack, channels, slices, frames) {
    throw new NotImplementedException("ImagePlus.setStack(..)");
};

/**
 * Saves this image's FileInfo so it can be later
 * retieved using getOriginalFileInfo().
 * 
 * @param {FileInfo} fi - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setFileInfo = function(fi) {
    throw new NotImplementedException("ImagePlus.setFileInfo(..)");
};

/**
 * Returns the ImageWindow that is being used to display
 * this image. Returns null if show() has not be called
 * or the ImageWindow has been closed.
 * 
 * @return ImageWindow
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getWindow = function() {
    throw new NotImplementedException("ImagePlus.getWindow(..)");
};

/**
 * Returns true if this image is currently being displayed in a window.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.isVisible = function() {
    throw new NotImplementedException("ImagePlus.isVisible(..)");
};

/**
 * This method should only be called from an ImageWindow.
 * 
 * @param {ImageWindow} win - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setWindow = function(win) {
    throw new NotImplementedException("ImagePlus.setWindow(..)");
};

/**
 * Returns the ImageCanvas being used to
 * display this image, or null.
 * 
 * @return ImageCanvas
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getCanvas = function() {
    throw new NotImplementedException("ImagePlus.getCanvas(..)");
};

/**
 * Sets current foreground color.
 * 
 * @param {java.awt.Color} c - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setColor = function(c) {
    throw new NotImplementedException("ImagePlus.setColor(..)");
};

/**
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.isProcessor = function() {
    throw new NotImplementedException("ImagePlus.isProcessor(..)");
};

/**
 * Returns a reference to the current ImageProcessor. If there
 * is no ImageProcessor, it creates one. Returns null if this
 * ImagePlus contains no ImageProcessor and no AWT Image.
 * Sets the line width to the current line width and sets the
 * calibration table if the image is density calibrated.
 * 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getProcessor = function() {
    throw new NotImplementedException("ImagePlus.getProcessor(..)");
};

/**
 * Frees RAM by setting the snapshot (undo) buffer in
 * the current ImageProcessor to null.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.trimProcessor = function() {
    throw new NotImplementedException("ImagePlus.trimProcessor(..)");
};

/**
 * For images with irregular ROIs, returns a byte mask, otherwise, returns
 * null. Mask pixels have a non-zero value.
 * 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getMask = function() {
    throw new NotImplementedException("ImagePlus.getMask(..)");
};

/**
 * Get calibrated statistics for this image or ROI, including 
 * histogram, area, mean, min and max, standard
 * deviation and mode.
 * This code demonstrates how to get the area, mean
 * max and median of the current image or selection:
 * <pre> imp = IJ.getImage();
 * stats = imp.getStatistics();
 * IJ.log("Area: "+stats.area);
 * IJ.log("Mean: "+stats.mean);
 * IJ.log("Max: "+stats.max);
 * </pre>
 * 
 * @return ImageStatistics
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getStatistics = function() {
    throw new NotImplementedException("ImagePlus.getStatistics(..)");
};

/**
 * This method returns complete calibrated statistics for this image or ROI
 * (with "Limit to threshold"), but it is up to 70 times slower than getStatistics().
 * 
 * @return ImageStatistics
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getAllStatistics = function() {
    throw new NotImplementedException("ImagePlus.getAllStatistics(..)");
};

/**
 * 
 * @return ImageStatistics
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getRawStatistics = function() {
    throw new NotImplementedException("ImagePlus.getRawStatistics(..)");
};

/**
 * Returns an ImageStatistics object generated using the
 * specified measurement options.
 * 
 * @param {int} mOptions - 
 * @return ImageStatistics
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getStatistics = function(mOptions) {
    throw new NotImplementedException("ImagePlus.getStatistics(..)");
};

/**
 * Returns an ImageStatistics object generated using the
 * specified measurement options and histogram bin count. 
 * Note: except for float images, the number of bins
 * is currently fixed at 256.
 * 
 * @param {int} mOptions - 
 * @param {int} nBins - 
 * @return ImageStatistics
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getStatistics = function(mOptions, nBins) {
    throw new NotImplementedException("ImagePlus.getStatistics(..)");
};

/**
 * Returns an ImageStatistics object generated using the
 * specified measurement options, histogram bin count and histogram range. 
 * Note: for 8-bit and RGB images, the number of bins
 * is fixed at 256 and the histogram range is always 0-255.
 * 
 * @param {int} mOptions - 
 * @param {int} nBins - 
 * @param {double} histMin - 
 * @param {double} histMax - 
 * @return ImageStatistics
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getStatistics = function(mOptions, nBins, histMin, histMax) {
    throw new NotImplementedException("ImagePlus.getStatistics(..)");
};

/**
 * Returns the image name.
 * 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getTitle = function() {
    throw new NotImplementedException("ImagePlus.getTitle(..)");
};

/**
 * Returns a shortened version of image name that does not 
 * include spaces or a file name extension.
 * 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getShortTitle = function() {
    throw new NotImplementedException("ImagePlus.getShortTitle(..)");
};

/**
 * Sets the image name.
 * 
 * @param {java.lang.String} title - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setTitle = function(title) {
    throw new NotImplementedException("ImagePlus.setTitle(..)");
};

/**
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getWidth = function() {
    throw new NotImplementedException("ImagePlus.getWidth(..)");
};

/**
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getHeight = function() {
    throw new NotImplementedException("ImagePlus.getHeight(..)");
};

/**
 * If this is a stack, returns the number of slices, else returns 1.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getStackSize = function() {
    throw new NotImplementedException("ImagePlus.getStackSize(..)");
};

/**
 * If this is a stack, returns the actual number of images in the stack, else returns 1.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getImageStackSize = function() {
    throw new NotImplementedException("ImagePlus.getImageStackSize(..)");
};

/**
 * Sets the 3rd, 4th and 5th dimensions, where 
 * <code>nChannels</code>*<code>nSlices</code>*<code>nFrames</code> 
 * must be equal to the stack size.
 * 
 * @param {int} nChannels - 
 * @param {int} nSlices - 
 * @param {int} nFrames - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setDimensions = function(nChannels, nSlices, nFrames) {
    throw new NotImplementedException("ImagePlus.setDimensions(..)");
};

/**
 * Returns 'true' if this image is a hyperstack.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.isHyperStack = function() {
    throw new NotImplementedException("ImagePlus.isHyperStack(..)");
};

/**
 * Returns the number of dimensions (2, 3, 4 or 5).
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getNDimensions = function() {
    throw new NotImplementedException("ImagePlus.getNDimensions(..)");
};

/**
 * Returns 'true' if this is a hyperstack currently being displayed in a StackWindow.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.isDisplayedHyperStack = function() {
    throw new NotImplementedException("ImagePlus.isDisplayedHyperStack(..)");
};

/**
 * Returns the number of channels.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getNChannels = function() {
    throw new NotImplementedException("ImagePlus.getNChannels(..)");
};

/**
 * Returns the image depth (number of z-slices).
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getNSlices = function() {
    throw new NotImplementedException("ImagePlus.getNSlices(..)");
};

/**
 * Returns the number of frames (time-points).
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getNFrames = function() {
    throw new NotImplementedException("ImagePlus.getNFrames(..)");
};

/**
 * Returns the dimensions of this image (width, height, nChannels, 
 * nSlices, nFrames) as a 5 element int array.
 * 
 * @return int[]
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getDimensions = function() {
    throw new NotImplementedException("ImagePlus.getDimensions(..)");
};

/**
 * 
 * @param {boolean} varify - 
 * @return int[]
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getDimensions = function(varify) {
    throw new NotImplementedException("ImagePlus.getDimensions(..)");
};

/**
 * Returns the current image type (ImagePlus.GRAY8, ImagePlus.GRAY16,
 * ImagePlus.GRAY32, ImagePlus.COLOR_256 or ImagePlus.COLOR_RGB).
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getType = function() {
    throw new NotImplementedException("ImagePlus.getType(..)");
};

/**
 * Returns the bit depth, 8, 16, 24 (RGB) or 32, or 0 if the bit depth 
 * is unknown. RGB images actually use 32 bits per pixel.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getBitDepth = function() {
    throw new NotImplementedException("ImagePlus.getBitDepth(..)");
};

/**
 * Returns the number of bytes per pixel.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getBytesPerPixel = function() {
    throw new NotImplementedException("ImagePlus.getBytesPerPixel(..)");
};

/**
 * Returns the string value from the "Info" property string 
 * associated with 'key', or null if the key is not found. 
 * Works with DICOM tags and Bio-Formats metadata.
 * 
 * @param {java.lang.String} key - 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getStringProperty = function(key) {
    throw new NotImplementedException("ImagePlus.getStringProperty(..)");
};

/**
 * Returns the numeric value from the "Info" property string 
 * associated with 'key', or NaN if the key is not found or the
 * value associated with the key is not numeric. Works with
 * DICOM tags and Bio-Formats metadata.
 * 
 * @param {java.lang.String} key - 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getNumericProperty = function(key) {
    throw new NotImplementedException("ImagePlus.getNumericProperty(..)");
};

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;
 * 
 * @deprecated .</span>&nbsp;
 * @param {java.lang.String} key - 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getProp = function(key) {
    throw new NotImplementedException("ImagePlus.getProp(..)");
};

/**
 * Returns the "Info" property string, or null if it is not found.
 * 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getInfoProperty = function() {
    throw new NotImplementedException("ImagePlus.getInfoProperty(..)");
};

/**
 * Returns the property associated with 'key', or null if it is not found.
 * 
 * @param {java.lang.String} key - 
 * @return java.lang.Object
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getProperty = function(key) {
    throw new NotImplementedException("ImagePlus.getProperty(..)");
};

/**
 * Adds a key-value pair to this image's properties. The key
 * is removed from the properties table if value is null.
 * 
 * @param {java.lang.String} key - 
 * @param {java.lang.Object} value - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setProperty = function(key, value) {
    throw new NotImplementedException("ImagePlus.setProperty(..)");
};

/**
 * Returns this image's Properties. May return null.
 * 
 * @return java.util.Properties
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getProperties = function() {
    throw new NotImplementedException("ImagePlus.getProperties(..)");
};

/**
 * Creates a LookUpTable object that corresponds to this image.
 * 
 * @return LookUpTable
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.createLut = function() {
    throw new NotImplementedException("ImagePlus.createLut(..)");
};

/**
 * Returns true is this image uses an inverting LUT that 
 * displays zero as white and 255 as black.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.isInvertedLut = function() {
    throw new NotImplementedException("ImagePlus.isInvertedLut(..)");
};

/**
 * Returns the pixel value at (x,y) as a 4 element array. Grayscale values
 * are retuned in the first element. RGB values are returned in the first
 * 3 elements. For indexed color images, the RGB values are returned in the
 * first 3 three elements and the index (0-255) is returned in the last.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @return int[]
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getPixel = function(x, y) {
    throw new NotImplementedException("ImagePlus.getPixel(..)");
};

/**
 * Returns an empty image stack that has the same
 * width, height and color table as this image.
 * 
 * @return ImageStack
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.createEmptyStack = function() {
    throw new NotImplementedException("ImagePlus.createEmptyStack(..)");
};

/**
 * Returns the image stack. The stack may have only 
 * one slice. After adding or removing slices, call 
 * <code>setStack()</code> to update the image and
 * the window that is displaying it.
 * 
 * @return ImageStack
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getStack = function() {
    throw new NotImplementedException("ImagePlus.getStack(..)");
};

/**
 * Returns the base image stack.
 * 
 * @return ImageStack
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getImageStack = function() {
    throw new NotImplementedException("ImagePlus.getImageStack(..)");
};

/**
 * Returns the current stack index (one-based) or 1 if this is a single image.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getCurrentSlice = function() {
    throw new NotImplementedException("ImagePlus.getCurrentSlice(..)");
};

/**
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getChannel = function() {
    throw new NotImplementedException("ImagePlus.getChannel(..)");
};

/**
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getSlice = function() {
    throw new NotImplementedException("ImagePlus.getSlice(..)");
};

/**
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getFrame = function() {
    throw new NotImplementedException("ImagePlus.getFrame(..)");
};

/**
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.killStack = function() {
    throw new NotImplementedException("ImagePlus.killStack(..)");
};

/**
 * Sets the current hyperstack position and updates the display,
 * where 'channel', 'slice' and 'frame' are one-based indexes.
 * 
 * @param {int} channel - 
 * @param {int} slice - 
 * @param {int} frame - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setPosition = function(channel, slice, frame) {
    throw new NotImplementedException("ImagePlus.setPosition(..)");
};

/**
 * Sets the current hyperstack position without updating the display,
 * where 'channel', 'slice' and 'frame' are one-based indexes.
 * 
 * @param {int} channel - 
 * @param {int} slice - 
 * @param {int} frame - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setPositionWithoutUpdate = function(channel, slice, frame) {
    throw new NotImplementedException("ImagePlus.setPositionWithoutUpdate(..)");
};

/**
 * Sets the hyperstack channel position (one based).
 * 
 * @param {int} channel - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setC = function(channel) {
    throw new NotImplementedException("ImagePlus.setC(..)");
};

/**
 * Sets the hyperstack slice position (one based).
 * 
 * @param {int} slice - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setZ = function(slice) {
    throw new NotImplementedException("ImagePlus.setZ(..)");
};

/**
 * Sets the hyperstack frame position (one based).
 * 
 * @param {int} frame - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setT = function(frame) {
    throw new NotImplementedException("ImagePlus.setT(..)");
};

/**
 * Returns the current hyperstack channel position.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getC = function() {
    throw new NotImplementedException("ImagePlus.getC(..)");
};

/**
 * Returns the current hyperstack slice position.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getZ = function() {
    throw new NotImplementedException("ImagePlus.getZ(..)");
};

/**
 * Returns the current hyperstack frame position.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getT = function() {
    throw new NotImplementedException("ImagePlus.getT(..)");
};

/**
 * Returns that stack index (one-based) corresponding to the specified position.
 * 
 * @param {int} channel - 
 * @param {int} slice - 
 * @param {int} frame - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getStackIndex = function(channel, slice, frame) {
    throw new NotImplementedException("ImagePlus.getStackIndex(..)");
};

/**
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.resetStack = function() {
    throw new NotImplementedException("ImagePlus.resetStack(..)");
};

/**
 * Set the current hyperstack position based on the stack index 'n' (one-based).
 * 
 * @param {int} n - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setPosition = function(n) {
    throw new NotImplementedException("ImagePlus.setPosition(..)");
};

/**
 * Converts the stack index 'n' (one-based) into a hyperstack position (channel, slice, frame).
 * 
 * @param {int} n - 
 * @return int[]
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.convertIndexToPosition = function(n) {
    throw new NotImplementedException("ImagePlus.convertIndexToPosition(..)");
};

/**
 * Displays the specified stack image, where 1&lt;=n&lt;=stackSize.
 * Does nothing if this image is not a stack.
 * 
 * @param {int} n - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setSlice = function(n) {
    throw new NotImplementedException("ImagePlus.setSlice(..)");
};

/**
 * Displays the specified stack image (1&lt;=n&lt;=stackSize)
 * without updating the display.
 * 
 * @param {int} n - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setSliceWithoutUpdate = function(n) {
    throw new NotImplementedException("ImagePlus.setSliceWithoutUpdate(..)");
};

/**
 * Returns the current selection, or null if there is no selection.
 * 
 * @return Roi
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getRoi = function() {
    throw new NotImplementedException("ImagePlus.getRoi(..)");
};

/**
 * Assigns the specified ROI to this image and displays it. Any existing
 * ROI is deleted if <code>roi</code> is null or its width or height is zero.
 * 
 * @param {Roi} newRoi - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setRoi = function(newRoi) {
    throw new NotImplementedException("ImagePlus.setRoi(..)");
};

/**
 * Assigns 'newRoi' to this image and displays it if 'updateDisplay' is true.
 * 
 * @param {Roi} newRoi - 
 * @param {boolean} updateDisplay - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setRoi = function(newRoi, updateDisplay) {
    throw new NotImplementedException("ImagePlus.setRoi(..)");
};

/**
 * Creates a rectangular selection.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int} width - 
 * @param {int} height - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setRoi = function(x, y, width, height) {
    throw new NotImplementedException("ImagePlus.setRoi(..)");
};

/**
 * Creates a rectangular selection.
 * 
 * @param {java.awt.Rectangle} r - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setRoi = function(r) {
    throw new NotImplementedException("ImagePlus.setRoi(..)");
};

/**
 * Starts the process of creating a new selection, where sx and sy are the
 * starting screen coordinates. The selection type is determined by which tool in
 * the tool bar is active. The user interactively sets the selection size and shape.
 * 
 * @param {int} sx - 
 * @param {int} sy - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.createNewRoi = function(sx, sy) {
    throw new NotImplementedException("ImagePlus.createNewRoi(..)");
};

/**
 * Deletes the current region of interest. Makes a copy of the ROI
 * so it can be recovered by Edit/Selection/Restore Selection.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.deleteRoi = function() {
    throw new NotImplementedException("ImagePlus.deleteRoi(..)");
};

/**
 * Deletes the current region of interest.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.killRoi = function() {
    throw new NotImplementedException("ImagePlus.killRoi(..)");
};

/**
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.saveRoi = function() {
    throw new NotImplementedException("ImagePlus.saveRoi(..)");
};

/**
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.restoreRoi = function() {
    throw new NotImplementedException("ImagePlus.restoreRoi(..)");
};

/**
 * Implements the File/Revert command.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.revert = function() {
    throw new NotImplementedException("ImagePlus.revert(..)");
};

/**
 * Returns a FileInfo object containing information, including the
 * pixel array, needed to save this image. Use getOriginalFileInfo()
 * to get a copy of the FileInfo object used to open the image.
 * 
 * @return FileInfo
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getFileInfo = function() {
    throw new NotImplementedException("ImagePlus.getFileInfo(..)");
};

/**
 * Returns the FileInfo object that was used to open this image.
 * Returns null for images created using the File/New command.
 * 
 * @return FileInfo
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getOriginalFileInfo = function() {
    throw new NotImplementedException("ImagePlus.getOriginalFileInfo(..)");
};

/**
 * Used by ImagePlus to monitor loading of images.
 * 
 * @param {java.awt.Image} img - 
 * @param {int} flags - 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int} w - 
 * @param {int} h - 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.imageUpdate = function(img, flags, x, y, w, h) {
    throw new NotImplementedException("ImagePlus.imageUpdate(..)");
};

/**
 * Sets the ImageProcessor, Roi, AWT Image and stack image
 * arrays to null. Does nothing if the image is locked.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.flush = function() {
    throw new NotImplementedException("ImagePlus.flush(..)");
};

/**
 * 
 * @param {boolean} ignoreFlush - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setIgnoreFlush = function(ignoreFlush) {
    throw new NotImplementedException("ImagePlus.setIgnoreFlush(..)");
};

/**
 * Returns a copy of this image or stack, cropped if there is an ROI.
 * 
 * @return ImagePlus
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.duplicate = function() {
    throw new NotImplementedException("ImagePlus.duplicate(..)");
};

/**
 * Returns a copy this image or stack slice, cropped if there is an ROI.
 * 
 * @return ImagePlus
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.crop = function() {
    throw new NotImplementedException("ImagePlus.crop(..)");
};

/**
 * Returns a new ImagePlus with this image's attributes
 * (e.g. spatial scale), but no image.
 * 
 * @return ImagePlus
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.createImagePlus = function() {
    throw new NotImplementedException("ImagePlus.createImagePlus(..)");
};

/**
 * This method has been replaced by IJ.createHyperStack().
 * 
 * @param {java.lang.String} title - 
 * @param {int} channels - 
 * @param {int} slices - 
 * @param {int} frames - 
 * @param {int} bitDepth - 
 * @return ImagePlus
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.createHyperStack = function(title, channels, slices, frames, bitDepth) {
    throw new NotImplementedException("ImagePlus.createHyperStack(..)");
};

/**
 * Copies the calibration of the specified image to this image.
 * 
 * @param {ImagePlus} imp - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.copyScale = function(imp) {
    throw new NotImplementedException("ImagePlus.copyScale(..)");
};

/**
 * Copies attributes (name, ID, calibration, path) of the specified image to this image.
 * 
 * @param {ImagePlus} imp - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.copyAttributes = function(imp) {
    throw new NotImplementedException("ImagePlus.copyAttributes(..)");
};

/**
 * Calls System.currentTimeMillis() to save the current
 * time so it can be retrieved later using getStartTime() 
 * to calculate the elapsed time of an operation.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.startTiming = function() {
    throw new NotImplementedException("ImagePlus.startTiming(..)");
};

/**
 * Returns the time in milliseconds when 
 * startTiming() was last called.
 * 
 * @return long
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getStartTime = function() {
    throw new NotImplementedException("ImagePlus.getStartTime(..)");
};

/**
 * Returns this image's calibration.
 * 
 * @return Calibration
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getCalibration = function() {
    throw new NotImplementedException("ImagePlus.getCalibration(..)");
};

/**
 * Sets this image's calibration.
 * 
 * @param {Calibration} cal - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setCalibration = function(cal) {
    throw new NotImplementedException("ImagePlus.setCalibration(..)");
};

/**
 * Sets the system-wide calibration.
 * 
 * @param {Calibration} global - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setGlobalCalibration = function(global) {
    throw new NotImplementedException("ImagePlus.setGlobalCalibration(..)");
};

/**
 * Returns the system-wide calibration, or null.
 * 
 * @return Calibration
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getGlobalCalibration = function() {
    throw new NotImplementedException("ImagePlus.getGlobalCalibration(..)");
};

/**
 * This is a version of getGlobalCalibration() that can be called from a static context.
 * 
 * @return Calibration
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getStaticGlobalCalibration = function() {
    throw new NotImplementedException("ImagePlus.getStaticGlobalCalibration(..)");
};

/**
 * Returns this image's local calibration, ignoring 
 * the "Global" calibration flag.
 * 
 * @return Calibration
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getLocalCalibration = function() {
    throw new NotImplementedException("ImagePlus.getLocalCalibration(..)");
};

/**
 * 
 * @param {boolean} ignoreGlobalCalibration - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setIgnoreGlobalCalibration = function(ignoreGlobalCalibration) {
    throw new NotImplementedException("ImagePlus.setIgnoreGlobalCalibration(..)");
};

/**
 * Displays the cursor coordinates and pixel value in the status bar.
 * Called by ImageCanvas when the mouse moves. Can be overridden by
 * ImagePlus subclasses.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.mouseMoved = function(x, y) {
    throw new NotImplementedException("ImagePlus.mouseMoved(..)");
};

/**
 * Redisplays the (x,y) coordinates and pixel value (which may
 * have changed) in the status bar. Called by the Next Slice and
 * Previous Slice commands to update the z-coordinate and pixel value.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.updateStatusbarValue = function() {
    throw new NotImplementedException("ImagePlus.updateStatusbarValue(..)");
};

/**
 * Converts the current cursor location to a string.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getLocationAsString = function(x, y) {
    throw new NotImplementedException("ImagePlus.getLocationAsString(..)");
};

/**
 * Copies the contents of the current selection, or the entire 
 * image if there is no selection, to the internal clipboard.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.copy = function() {
    throw new NotImplementedException("ImagePlus.copy(..)");
};

/**
 * Copies the contents of the current selection to the internal clipboard.
 * Copies the entire image if there is no selection. Also clears
 * the selection if <code>cut</code> is true.
 * 
 * @param {boolean} cut - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.copy = function(cut) {
    throw new NotImplementedException("ImagePlus.copy(..)");
};

/**
 * Inserts the contents of the internal clipboard into the active image. If there
 * is a selection the same size as the image on the clipboard, the image is inserted 
 * into that selection, otherwise the selection is inserted into the center of the image.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.paste = function() {
    throw new NotImplementedException("ImagePlus.paste(..)");
};

/**
 * Returns the internal clipboard or null if the internal clipboard is empty.
 * 
 * @return ImagePlus
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getClipboard = function() {
    throw new NotImplementedException("ImagePlus.getClipboard(..)");
};

/**
 * Clears the internal clipboard.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.resetClipboard = function() {
    throw new NotImplementedException("ImagePlus.resetClipboard(..)");
};

/**
 * 
 * @param {ImageListener} listener - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.addImageListener = function(listener) {
    throw new NotImplementedException("ImagePlus.addImageListener(..)");
};

/**
 * 
 * @param {ImageListener} listener - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.removeImageListener = function(listener) {
    throw new NotImplementedException("ImagePlus.removeImageListener(..)");
};

/**
 * Returns 'true' if the image is locked.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.isLocked = function() {
    throw new NotImplementedException("ImagePlus.isLocked(..)");
};

/**
 * 
 * @param {boolean} openAsHyperStack - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setOpenAsHyperStack = function(openAsHyperStack) {
    throw new NotImplementedException("ImagePlus.setOpenAsHyperStack(..)");
};

/**
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getOpenAsHyperStack = function() {
    throw new NotImplementedException("ImagePlus.getOpenAsHyperStack(..)");
};

/**
 * Returns true if this is a CompositeImage.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.isComposite = function() {
    throw new NotImplementedException("ImagePlus.isComposite(..)");
};

/**
 * Returns the display mode (IJ.COMPOSITE, IJ.COLOR
 * or IJ.GRAYSCALE) if this is a CompositeImage, otherwise returns -1.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getCompositeMode = function() {
    throw new NotImplementedException("ImagePlus.getCompositeMode(..)");
};

/**
 * Sets the display range of the current channel. With non-composite
 * images it is identical to ip.setMinAndMax(min, max).
 * 
 * @param {double} min - 
 * @param {double} max - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setDisplayRange = function(min, max) {
    throw new NotImplementedException("ImagePlus.setDisplayRange(..)");
};

/**
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getDisplayRangeMin = function() {
    throw new NotImplementedException("ImagePlus.getDisplayRangeMin(..)");
};

/**
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getDisplayRangeMax = function() {
    throw new NotImplementedException("ImagePlus.getDisplayRangeMax(..)");
};

/**
 * Sets the display range of specified channels in an RGB image, where 4=red,
 * 2=green, 1=blue, 6=red+green, etc. With non-RGB images, this method is
 * identical to setDisplayRange(min, max). This method is used by the 
 * Image/Adjust/Color Balance tool .
 * 
 * @param {double} min - 
 * @param {double} max - 
 * @param {int} channels - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setDisplayRange = function(min, max, channels) {
    throw new NotImplementedException("ImagePlus.setDisplayRange(..)");
};

/**
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.resetDisplayRange = function() {
    throw new NotImplementedException("ImagePlus.resetDisplayRange(..)");
};

/**
 * Returns 'true' if this image is thresholded.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.isThreshold = function() {
    throw new NotImplementedException("ImagePlus.isThreshold(..)");
};

/**
 * Set the default 16-bit display range, where 'bitDepth' must be 0 (auto-scaling), 
 * 8 (0-255), 10 (0-1023), 12 (0-4095, 14 (0-16383), 15 (0-32767) or 16 (0-65535).
 * 
 * @param {int} bitDepth - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setDefault16bitRange = function(bitDepth) {
    throw new NotImplementedException("ImagePlus.setDefault16bitRange(..)");
};

/**
 * Returns the default 16-bit display range, 0 (auto-scaling), 8, 10, 12, 14, 15 or 16.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getDefault16bitRange = function() {
    throw new NotImplementedException("ImagePlus.getDefault16bitRange(..)");
};

/**
 * 
 * @param {int} c - 
 * @param {int} z - 
 * @param {int} t - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.updatePosition = function(c, z, t) {
    throw new NotImplementedException("ImagePlus.updatePosition(..)");
};

/**
 * Returns a "flattened" version of this image, in RGB format.
 * 
 * @return ImagePlus
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.flatten = function() {
    throw new NotImplementedException("ImagePlus.flatten(..)");
};

/**
 * Flattens all slices of this stack or HyperStack.<br>
 * 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.flattenStack = function() {
    throw new NotImplementedException("ImagePlus.flattenStack(..)");
};

/**
 * Assigns a LUT (lookup table) to this image.
 * 
 * @param {LUT} lut - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setLut = function(lut) {
    throw new NotImplementedException("ImagePlus.setLut(..)");
};

/**
 * Installs a list of ROIs that will be drawn on this image as a non-destructive overlay.
 * 
 * @param {Overlay} overlay - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setOverlay = function(overlay) {
    throw new NotImplementedException("ImagePlus.setOverlay(..)");
};

/**
 * Creates an Overlay from the specified Shape, Color 
 * and BasicStroke, and assigns it to this image.
 * 
 * @param {java.awt.Shape} shape - 
 * @param {java.awt.Color} color - 
 * @param {java.awt.BasicStroke} stroke - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setOverlay = function(shape, color, stroke) {
    throw new NotImplementedException("ImagePlus.setOverlay(..)");
};

/**
 * Creates an Overlay from the specified ROI, and assigns it to this image.
 * 
 * @param {Roi} roi - 
 * @param {java.awt.Color} strokeColor - 
 * @param {int} strokeWidth - 
 * @param {java.awt.Color} fillColor - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setOverlay = function(roi, strokeColor, strokeWidth, fillColor) {
    throw new NotImplementedException("ImagePlus.setOverlay(..)");
};

/**
 * Returns the current overly, or null if this image does not have an overlay.
 * 
 * @return Overlay
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getOverlay = function() {
    throw new NotImplementedException("ImagePlus.getOverlay(..)");
};

/**
 * 
 * @param {boolean} hide - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setHideOverlay = function(hide) {
    throw new NotImplementedException("ImagePlus.setHideOverlay(..)");
};

/**
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.getHideOverlay = function() {
    throw new NotImplementedException("ImagePlus.getHideOverlay(..)");
};

/**
 * Enable/disable use of antialiasing by the flatten() method.
 * 
 * @param {boolean} antialiasRendering - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setAntialiasRendering = function(antialiasRendering) {
    throw new NotImplementedException("ImagePlus.setAntialiasRendering(..)");
};

/**
 * Returns a shallow copy of this ImagePlus.
 * 
 * @return java.lang.Object
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.clone = function() {
    throw new NotImplementedException("ImagePlus.clone(..)");
};

/**
 * 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.toString = function() {
    throw new NotImplementedException("ImagePlus.toString(..)");
};

/**
 * 
 * @param {boolean} b - 
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setIJMenuBar = function(b) {
    throw new NotImplementedException("ImagePlus.setIJMenuBar(..)");
};

/**
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImagePlus.prototype.setIJMenuBar = function() {
    throw new NotImplementedException("ImagePlus.setIJMenuBar(..)");
};


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
 * @module measure
 */

/**
 * @class
 */
var Measurements = {};

/**
 * @const
 * @default
 */
Measurements.AREA=1;

/**
 * @const
 * @default
 */
Measurements.MEAN=2;

/**
 * @const
 * @default
 */
Measurements.STD_DEV=4;

/**
 * @const
 * @default
 */
Measurements.MODE=8;

/**
 * @const
 * @default
 */
Measurements.MIN_MAX=16;

/**
 * @const
 * @default
 */
Measurements.CENTROID=32;

/**
 * @const
 * @default
 */
Measurements.CENTER_OF_MASS=64;

/**
 * @const
 * @default
 */
Measurements.PERIMETER=128;

/**
 * @const
 * @default
 */
Measurements.LIMIT=256;

/**
 * @const
 * @default
 */
Measurements.RECT=512;

/**
 * @const
 * @default
 */
Measurements.LABELS=1024;

/**
 * @const
 * @default
 */
Measurements.ELLIPSE=2048;

/**
 * @const
 * @default
 */
Measurements.INVERT_Y=4096;

/**
 * @const
 * @default
 */
Measurements.CIRCULARITY=8192;

/**
 * @const
 * @default
 */
Measurements.SHAPE_DESCRIPTORS=8192;

/**
 * @const
 * @default
 */
Measurements.FERET=16384;

/**
 * @const
 * @default
 */
Measurements.INTEGRATED_DENSITY=0x8000;

/**
 * @const
 * @default
 */
Measurements.MEDIAN=0x10000;

/**
 * @const
 * @default
 */
Measurements.SKEWNESS=0x20000;

/**
 * @const
 * @default
 */
Measurements.KURTOSIS=0x40000;

/**
 * @const
 * @default
 */
Measurements.AREA_FRACTION=0x80000;

/**
 * @const
 * @default
 */
Measurements.SLICE=0x100000;

/**
 * @const
 * @default
 */
Measurements.STACK_POSITION=0x100000;

/**
 * @const
 * @default
 */
Measurements.SCIENTIFIC_NOTATION=0x200000;

/**
 * @const
 * @default
 */
Measurements.ADD_TO_OVERLAY=0x400000;

/**
 * @const
 * @default
 */
Measurements.NaN_EMPTY_CELLS=0x800000;


/**
 * Maximum number of calibration standard (20)
 * @const
 * @default
 */
Measurements.MAX_STANDARDS = 20;

/**
 * All measurement options
 * @const
 * @default
 */
Measurements.ALL_STATS =
        Measurements.AREA+Measurements.MEAN+Measurements.STD_DEV+Measurements.MODE+Measurements.MIN_MAX+
        Measurements.CENTROID+Measurements.CENTER_OF_MASS+Measurements.PERIMETER+Measurements.RECT+
        Measurements.ELLIPSE+Measurements.SHAPE_DESCRIPTORS+Measurements.FERET+Measurements.INTEGRATED_DENSITY+
        Measurements.MEDIAN+Measurements.SKEWNESS+Measurements.KURTOSIS+Measurements.AREA_FRACTION;

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
 * public class ResultsTable
extends java.lang.Object
implements java.lang.Cloneable
 *
 * This is a table for storing measurement results and strings as columns of values. 
 *  * Call the static ResultsTable.getResultsTable() method to get a reference to the 
 *  * ResultsTable used by the <i>Analyze/Measure</i> command.
*/

/**
 * Constructs an empty ResultsTable with the counter=0, no columns
 * and the precision set to 3 or the "Decimal places" value in
 * Analyze/Set Measurements if that value is higher than 3.
 * @constructor
 * 
 * 
 * @author Created by ijdoc2js
 */

function ResultsTable() {
    throw new NotImplementedException("ResultsTable.ResultsTable(..)");
};

/**
 * Obsolete; use getLastColumn().
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.MAX_COLUMNS = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.COLUMN_NOT_FOUND = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.COLUMN_IN_USE = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.TABLE_FULL = 0;

/**
 * 
 * @const {short}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.AUTO_FORMAT = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.AREA = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.MEAN = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.STD_DEV = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.MODE = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.MIN = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.MAX = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.X_CENTROID = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.Y_CENTROID = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.X_CENTER_OF_MASS = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.Y_CENTER_OF_MASS = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.PERIMETER = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.ROI_X = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.ROI_Y = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.ROI_WIDTH = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.ROI_HEIGHT = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.MAJOR = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.MINOR = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.ANGLE = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.CIRCULARITY = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.FERET = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.INTEGRATED_DENSITY = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.MEDIAN = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.SKEWNESS = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.KURTOSIS = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.AREA_FRACTION = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.RAW_INTEGRATED_DENSITY = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.CHANNEL = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.SLICE = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.FRAME = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.FERET_X = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.FERET_Y = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.FERET_ANGLE = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.MIN_FERET = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.ASPECT_RATIO = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.ROUNDNESS = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.SOLIDITY = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.MIN_THRESHOLD = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.MAX_THRESHOLD = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.LAST_HEADING = 0;

/**
 * Returns the ResultsTable used by the Measure command. This
 * table must be displayed in the "Results" window.
 * 
 * @return ResultsTable
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getResultsTable = function() {
    throw new NotImplementedException("ResultsTable.getResultsTable(..)");
};

/**
 * Returns the "Results" TextWindow.
 * 
 * @return TextWindow
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getResultsWindow = function() {
    throw new NotImplementedException("ResultsTable.getResultsWindow(..)");
};

/**
 * Increments the measurement counter by one.
 * 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.incrementCounter = function() {
    throw new NotImplementedException("ResultsTable.incrementCounter(..)");
};

/**
 * Obsolete; the addValue() method automatically adds columns as needed.
 * 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.addColumns = function() {
    throw new NotImplementedException("ResultsTable.addColumns(..)");
};

/**
 * Returns the current value of the measurement counter.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getCounter = function() {
    throw new NotImplementedException("ResultsTable.getCounter(..)");
};

/**
 * Returns the size of this ResultsTable.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.size = function() {
    throw new NotImplementedException("ResultsTable.size(..)");
};

/**
 * Adds a value to the end of the given column. Counter must be &gt;0.
 * 
 * @param {int} column - 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.addValue = function(column, value) {
    throw new NotImplementedException("ResultsTable.addValue(..)");
};

/**
 * Adds a value to the end of the given column. If the column
 * does not exist, it is created. Counter must be &gt;0.
 * There is an example at:<br>
 * http://imagej.nih.gov/ij/plugins/sine-cosine.html
 * 
 * @param {java.lang.String} column - 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.addValue = function(column, value) {
    throw new NotImplementedException("ResultsTable.addValue(..)");
};

/**
 * Adds a string value to the end of the given column. If the column
 * does not exist, it is created. Counter must be &gt;0.
 * 
 * @param {java.lang.String} column - 
 * @param {java.lang.String} value - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.addValue = function(column, value) {
    throw new NotImplementedException("ResultsTable.addValue(..)");
};

/**
 * Adds a label to the beginning of the current row. Counter must be &gt;0.
 * 
 * @param {java.lang.String} label - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.addLabel = function(label) {
    throw new NotImplementedException("ResultsTable.addLabel(..)");
};

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">Replaced by setValue(String,int,String)</span>
 * 
 * @deprecated .</span>&nbsp;<span class="deprecationComment">Replaced by setValue(String,int,String)</span>
 * @param {java.lang.String} columnHeading - 
 * @param {java.lang.String} label - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.addLabel = function(columnHeading, label) {
    throw new NotImplementedException("ResultsTable.addLabel(..)");
};

/**
 * Adds a label to the beginning of the specified row, 
 * or updates an existing lable, where 0&lt;=row<counter. after="" labels="" are="" added="" or="" modified,="" call="" <code="">show()
 * to update the window displaying the table.</counter.>
 * 
 * @param {java.lang.String} label - 
 * @param {int} row - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.setLabel = function(label, row) {
    throw new NotImplementedException("ResultsTable.setLabel(..)");
};

/**
 * Set the row label column to null if the column label is "Label".
 * 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.disableRowLabels = function() {
    throw new NotImplementedException("ResultsTable.disableRowLabels(..)");
};

/**
 * Returns a copy of the given column as a float array,
 * or null if the column is empty.
 * 
 * @param {int} column - 
 * @return float[]
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getColumn = function(column) {
    throw new NotImplementedException("ResultsTable.getColumn(..)");
};

/**
 * Returns a copy of the given column as a double array,
 * or null if the column is empty.
 * 
 * @param {int} column - 
 * @return double[]
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getColumnAsDoubles = function(column) {
    throw new NotImplementedException("ResultsTable.getColumnAsDoubles(..)");
};

/**
 * Returns the contents of this ResultsTable as a FloatProcessor.
 * 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getTableAsImage = function() {
    throw new NotImplementedException("ResultsTable.getTableAsImage(..)");
};

/**
 * Creates a ResultsTable from an image or image selection.
 * 
 * @param {ImageProcessor} ip - 
 * @return ResultsTable
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.createTableFromImage = function(ip) {
    throw new NotImplementedException("ResultsTable.createTableFromImage(..)");
};

/**
 * Returns true if the specified column exists and is not empty.
 * 
 * @param {int} column - 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.columnExists = function(column) {
    throw new NotImplementedException("ResultsTable.columnExists(..)");
};

/**
 * Returns the index of the first column with the given heading.
 * heading. If not found, returns COLUMN_NOT_FOUND.
 * 
 * @param {java.lang.String} heading - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getColumnIndex = function(heading) {
    throw new NotImplementedException("ResultsTable.getColumnIndex(..)");
};

/**
 * Sets the heading of the the first available column and
 * returns that column's index. Returns COLUMN_IN_USE
 * if this is a duplicate heading.
 * 
 * @param {java.lang.String} heading - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getFreeColumn = function(heading) {
    throw new NotImplementedException("ResultsTable.getFreeColumn(..)");
};

/**
 * Returns the value of the given column and row, where
 * column must be less than or equal the value returned by
 * getLastColumn() and row must be greater than or equal
 * zero and less than the value returned by size().
 * 
 * @param {int} column - 
 * @param {int} row - 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getValueAsDouble = function(column, row) {
    throw new NotImplementedException("ResultsTable.getValueAsDouble(..)");
};

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">replaced by getValueAsDouble</span>
 * 
 * @deprecated .</span>&nbsp;<span class="deprecationComment">replaced by getValueAsDouble</span>
 * @param {int} column - 
 * @param {int} row - 
 * @return float
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getValue = function(column, row) {
    throw new NotImplementedException("ResultsTable.getValue(..)");
};

/**
 * Returns the value of the specified column and row, where
 * column is the column heading and row is a number greater
 * than or equal zero and less than value returned by size(). 
 * Throws an IllegalArgumentException if this ResultsTable
 * does not have a column with the specified heading.
 * 
 * @param {java.lang.String} column - 
 * @param {int} row - 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getValue = function(column, row) {
    throw new NotImplementedException("ResultsTable.getValue(..)");
};

/**
 * Returns 'true' if the specified column exists and is not emptly.
 * 
 * @param {java.lang.String} column - 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.columnExists = function(column) {
    throw new NotImplementedException("ResultsTable.columnExists(..)");
};

/**
 * Returns the string value of the given column and row,
 * where row must be greater than or equal zero
 * and less than the value returned by size().
 * 
 * @param {java.lang.String} column - 
 * @param {int} row - 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getStringValue = function(column, row) {
    throw new NotImplementedException("ResultsTable.getStringValue(..)");
};

/**
 * Returns the string value of the given column and row, where
 * column must be less than or equal the value returned by
 * getLastColumn() and row must be greater than or equal
 * zero and less than the value returned by size().
 * 
 * @param {int} column - 
 * @param {int} row - 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getStringValue = function(column, row) {
    throw new NotImplementedException("ResultsTable.getStringValue(..)");
};

/**
 * Returns the label of the specified row. Returns null if the row does not have a label.
 * 
 * @param {int} row - 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getLabel = function(row) {
    throw new NotImplementedException("ResultsTable.getLabel(..)");
};

/**
 * Sets the value of the given column and row, where
 * where 0&lt;=row&lt;counter. If the specified column does 
 * not exist, it is created. When adding columns, 
 * <code>show()</code> must be called to update the 
 * window that displays the table.
 * 
 * @param {java.lang.String} column - 
 * @param {int} row - 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.setValue = function(column, row, value) {
    throw new NotImplementedException("ResultsTable.setValue(..)");
};

/**
 * Sets the value of the given column and row, where
 * where 0&lt;=column&lt;=(lastRow+1 and 0&lt;=row&lt;=counter.
 * 
 * @param {int} column - 
 * @param {int} row - 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.setValue = function(column, row, value) {
    throw new NotImplementedException("ResultsTable.setValue(..)");
};

/**
 * Sets the string value of the given column and row, where
 * where 0&lt;=row&lt;counter. If the specified column does 
 * not exist, it is created. When adding columns, 
 * <code>show()</code> must be called to update the 
 * window that displays the table.
 * 
 * @param {java.lang.String} column - 
 * @param {int} row - 
 * @param {java.lang.String} value - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.setValue = function(column, row, value) {
    throw new NotImplementedException("ResultsTable.setValue(..)");
};

/**
 * Sets the string value of the given column and row, where
 * where 0&lt;=column&lt;=(lastRow+1 and 0&lt;=row&lt;=counter.
 * 
 * @param {int} column - 
 * @param {int} row - 
 * @param {java.lang.String} value - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.setValue = function(column, row, value) {
    throw new NotImplementedException("ResultsTable.setValue(..)");
};

/**
 * Returns a tab or comma delimited string containing the column headings.
 * 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getColumnHeadings = function() {
    throw new NotImplementedException("ResultsTable.getColumnHeadings(..)");
};

/**
 * Returns the column headings as an array of Strings.
 * 
 * @return java.lang.String[]
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getHeadings = function() {
    throw new NotImplementedException("ResultsTable.getHeadings(..)");
};

/**
 * Returns the heading of the specified column or null if the column is empty.
 * 
 * @param {int} column - 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getColumnHeading = function(column) {
    throw new NotImplementedException("ResultsTable.getColumnHeading(..)");
};

/**
 * Returns a tab or comma delimited string representing the
 * given row, where 0&lt;=row&lt;=counter-1.
 * 
 * @param {int} row - 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getRowAsString = function(row) {
    throw new NotImplementedException("ResultsTable.getRowAsString(..)");
};

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">Replaced by addValue(String,double) and setValue(String,int,double)</span>
 * 
 * @deprecated .</span>&nbsp;<span class="deprecationComment">Replaced by addValue(String,double) and setValue(String,int,double)</span>
 * @param {int} column - 
 * @param {java.lang.String} heading - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.setHeading = function(column, heading) {
    throw new NotImplementedException("ResultsTable.setHeading(..)");
};

/**
 * Sets the headings used by the Measure command ("Area", "Mean", etc.).
 * 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.setDefaultHeadings = function() {
    throw new NotImplementedException("ResultsTable.setDefaultHeadings(..)");
};

/**
 * Sets the decimal places (digits to the right of decimal point)
 * that are used when this table is displayed.
 * 
 * @param {int} precision - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.setPrecision = function(precision) {
    throw new NotImplementedException("ResultsTable.setPrecision(..)");
};

/**
 * 
 * @param {int} column - 
 * @param {int} digits - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.setDecimalPlaces = function(column, digits) {
    throw new NotImplementedException("ResultsTable.setDecimalPlaces(..)");
};

/**
 * Set 'true' to initially fill data arrays with NaNs instead of zeros.
 * 
 * @param {boolean} NaNEmptyCells - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.setNaNEmptyCells = function(NaNEmptyCells) {
    throw new NotImplementedException("ResultsTable.setNaNEmptyCells(..)");
};

/**
 * 
 * @param {boolean} showNumbers - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.showRowNumbers = function(showNumbers) {
    throw new NotImplementedException("ResultsTable.showRowNumbers(..)");
};

/**
 * This is a version of IJ.d2s() that uses scientific notation for
 * small numbes that would otherwise display as zero.
 * 
 * @param {double} n - 
 * @param {int} decimalPlaces - 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.d2s = function(n, decimalPlaces) {
    throw new NotImplementedException("ResultsTable.d2s(..)");
};

/**
 * Deletes the specified row.
 * 
 * @param {int} row - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.deleteRow = function(row) {
    throw new NotImplementedException("ResultsTable.deleteRow(..)");
};

/**
 * 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.reset = function() {
    throw new NotImplementedException("ResultsTable.reset(..)");
};

/**
 * Returns the index of the last used column, or -1 if no columns are used.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getLastColumn = function() {
    throw new NotImplementedException("ResultsTable.getLastColumn(..)");
};

/**
 * Adds the last row in this table to the Results window without updating it.
 * 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.addResults = function() {
    throw new NotImplementedException("ResultsTable.addResults(..)");
};

/**
 * Updates the Results window.
 * 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.updateResults = function() {
    throw new NotImplementedException("ResultsTable.updateResults(..)");
};

/**
 * Displays the contents of this ResultsTable in a window with 
 * the specified title, or updates an existing results window. Opens
 * a new window if there is no open text window with this title. 
 * The title must be "Results" if this table was obtained using 
 * ResultsTable.getResultsTable() or Analyzer.getResultsTable .
 * 
 * @param {java.lang.String} windowTitle - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.show = function(windowTitle) {
    throw new NotImplementedException("ResultsTable.show(..)");
};

/**
 * 
 * @param {int} measurements - 
 * @param {ImagePlus} imp - 
 * @param {Roi} roi - 
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.update = function(measurements, imp, roi) {
    throw new NotImplementedException("ResultsTable.update(..)");
};

/**
 * Opens a tab or comma delimited text file and returns it 
 * as a ResultsTable, without requiring a try/catch statement.
 * Displays a file open dialog if 'path' is empty or null.
 * 
 * @param {java.lang.String} path - 
 * @return ResultsTable
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.open2 = function(path) {
    throw new NotImplementedException("ResultsTable.open2(..)");
};

/**
 * Opens a tab or comma delimited text file and returns it as a 
 * ResultsTable. Displays a file open dialog if 'path' is empty or null.
 * 
 * @param {java.lang.String} path - 
 * @throws {java.io.IOException}
 * @return ResultsTable
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.open = function(path) {
    throw new NotImplementedException("ResultsTable.open(..)");
};

/**
 * Saves this ResultsTable as a tab or comma delimited text file. The table
 * is saved as a CSV (comma-separated values) file if 'path' ends with ".csv".
 * Displays a file save dialog if 'path' is empty or null. Does nothing if the
 * table is empty. Displays an error message and returns 'false' if there is
 * an error.
 * 
 * @param {java.lang.String} path - 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.save = function(path) {
    throw new NotImplementedException("ResultsTable.save(..)");
};

/**
 * 
 * @param {java.lang.String} path - 
 * @throws {java.io.IOException}
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.saveAs = function(path) {
    throw new NotImplementedException("ResultsTable.saveAs(..)");
};

/**
 * 
 * @param {int} index - 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.getDefaultHeading = function(index) {
    throw new NotImplementedException("ResultsTable.getDefaultHeading(..)");
};

/**
 * Duplicates this ResultsTable.
 * 
 * @return java.lang.Object
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.clone = function() {
    throw new NotImplementedException("ResultsTable.clone(..)");
};

/**
 * 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ResultsTable.prototype.toString = function() {
    throw new NotImplementedException("ResultsTable.toString(..)");
};


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
 * public class ByteProcessor
extends ImageProcessor
 *
 * This is an 8-bit image and methods that operate on that image. Based on the ImageProcessor class
 *  * from "KickAss Java Programming" by Tonny Espeset.
*/

/**
 * Creates a ByteProcessor from an AWT Image.
 * @constructor
 * 
 * @param {java.awt.Image} img - 
 * 
 * @author Created by ijdoc2js
 */

function ByteProcessor(img) {
    throw new NotImplementedException("ByteProcessor.ByteProcessor(..)");
};

/**
 * Creates a blank ByteProcessor of the specified dimensions.
 * @constructor
 * 
 * @param {int} width - 
 * @param {int} height - 
 * 
 * @author Created by ijdoc2js
 */

function ByteProcessor(width, height) {
    throw new NotImplementedException("ByteProcessor.ByteProcessor(..)");
};

/**
 * Creates a ByteProcessor from a byte array.
 * @constructor
 * 
 * @param {int} width - 
 * @param {int} height - 
 * @param {byte[]} pixels - 
 * 
 * @author Created by ijdoc2js
 */

function ByteProcessor(width, height, pixels) {
    throw new NotImplementedException("ByteProcessor.ByteProcessor(..)");
};

/**
 * Creates a ByteProcessor from a pixel array and IndexColorModel.
 * @constructor
 * 
 * @param {int} width - 
 * @param {int} height - 
 * @param {byte[]} pixels - 
 * @param {java.awt.image.ColorModel} cm - 
 * 
 * @author Created by ijdoc2js
 */

function ByteProcessor(width, height, pixels, cm) {
    throw new NotImplementedException("ByteProcessor.ByteProcessor(..)");
};

/**
 * Creates a ByteProcessor from a TYPE_BYTE_GRAY BufferedImage.
 * @constructor
 * 
 * @param {java.awt.image.BufferedImage} bi - 
 * 
 * @author Created by ijdoc2js
 */

function ByteProcessor(bi) {
    throw new NotImplementedException("ByteProcessor.ByteProcessor(..)");
};

/**
 * Creates a ByteProcessor from an ImageProcessor. 16-bit and 32-bit
 * pixel data are scaled from min-max to 0-255 if 'scale' is true.
 * @constructor
 * 
 * @param {ImageProcessor} ip - 
 * @param {boolean} scale - 
 * 
 * @author Created by ijdoc2js
 */

function ByteProcessor(ip, scale) {
    throw new NotImplementedException("ByteProcessor.ByteProcessor(..)");
};

/**
 * Returns a copy of this image is the form of an AWT Image.
 * 
 * @return java.awt.Image
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.createImage = function() {
    throw new NotImplementedException("ByteProcessor.createImage(..)");
};

/**
 * Returns this image as a BufferedImage.
 * 
 * @return java.awt.image.BufferedImage
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getBufferedImage = function() {
    throw new NotImplementedException("ByteProcessor.getBufferedImage(..)");
};

/**
 * Returns a new, blank ByteProcessor with the specified width and height.
 * 
 * @param {int} width - 
 * @param {int} height - 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.createProcessor = function(width, height) {
    throw new NotImplementedException("ByteProcessor.createProcessor(..)");
};

/**
 * Creates a new processor containing an image
 * that corresponds to the current ROI.
 * 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.crop = function() {
    throw new NotImplementedException("ByteProcessor.crop(..)");
};

/**
 * Returns a duplicate of this image.
 * 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.duplicate = function() {
    throw new NotImplementedException("ByteProcessor.duplicate(..)");
};

/**
 * Make a snapshot of the current image.
 * 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.snapshot = function() {
    throw new NotImplementedException("ByteProcessor.snapshot(..)");
};

/**
 * Reset the image from snapshot.
 * 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.reset = function() {
    throw new NotImplementedException("ByteProcessor.reset(..)");
};

/**
 * Swaps the pixel and snapshot (undo) arrays.
 * 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.swapPixelArrays = function() {
    throw new NotImplementedException("ByteProcessor.swapPixelArrays(..)");
};

/**
 * Restore pixels that are within roi but not part of mask.
 * 
 * @param {ImageProcessor} mask - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.reset = function(mask) {
    throw new NotImplementedException("ByteProcessor.reset(..)");
};

/**
 * Sets a new pixel array for the snapshot (undo) buffer.
 * 
 * @param {java.lang.Object} pixels - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.setSnapshotPixels = function(pixels) {
    throw new NotImplementedException("ByteProcessor.setSnapshotPixels(..)");
};

/**
 * Returns a reference to the snapshot (undo) buffer, or null.
 * 
 * @return java.lang.Object
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getSnapshotPixels = function() {
    throw new NotImplementedException("ByteProcessor.getSnapshotPixels(..)");
};

/**
 * Sets pixels that are within roi and part of the mask to the foreground
 * color. Does nothing if the mask is not the same size as the ROI.
 * 
 * @param {ImageProcessor} mask - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.fill = function(mask) {
    throw new NotImplementedException("ByteProcessor.fill(..)");
};

/**
 * Returns the value of the pixel at (x,y). For RGB images, the
 * argb values are packed in an int. For float images, the
 * the value must be converted using Float.intBitsToFloat().
 * Returns zero if either the x or y coodinate is out of range.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getPixel = function(x, y) {
    throw new NotImplementedException("ByteProcessor.getPixel(..)");
};

/**
 * This is a faster version of getPixel() that does not do bounds checking.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.get = function(x, y) {
    throw new NotImplementedException("ByteProcessor.get(..)");
};

/**
 * This is a faster version of putPixel() that does not clip 
 * out of range values and does not do bounds checking.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int} value - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.set = function(x, y, value) {
    throw new NotImplementedException("ByteProcessor.set(..)");
};

/**
 * 
 * @param {int} index - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.get = function(index) {
    throw new NotImplementedException("ByteProcessor.get(..)");
};

/**
 * 
 * @param {int} index - 
 * @param {int} value - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.set = function(index, value) {
    throw new NotImplementedException("ByteProcessor.set(..)");
};

/**
 * Returns the value of the pixel at (x,y) as a float. Faster than
 * getPixel() because no bounds checking is done.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @return float
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getf = function(x, y) {
    throw new NotImplementedException("ByteProcessor.getf(..)");
};

/**
 * Sets the value of the pixel at (x,y) to 'value'. Does no bounds
 * checking or clamping, making it faster than putPixel(). Due to the lack
 * of bounds checking, (x,y) coordinates outside the image may cause
 * an exception. Due to the lack of clamping, values outside the 0-255
 * range (for byte) or 0-65535 range (for short) are not handled correctly.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {float} value - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.setf = function(x, y, value) {
    throw new NotImplementedException("ByteProcessor.setf(..)");
};

/**
 * 
 * @param {int} index - 
 * @return float
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getf = function(index) {
    throw new NotImplementedException("ByteProcessor.getf(..)");
};

/**
 * 
 * @param {int} index - 
 * @param {float} value - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.setf = function(index, value) {
    throw new NotImplementedException("ByteProcessor.setf(..)");
};

/**
 * Uses the current interpolation method (BILINEAR or BICUBIC) 
 * to calculate the pixel value at real coordinates (x,y).
 * 
 * @param {double} x - 
 * @param {double} y - 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getInterpolatedPixel = function(x, y) {
    throw new NotImplementedException("ByteProcessor.getInterpolatedPixel(..)");
};

/**
 * Uses the current interpolation method to find the pixel value at real coordinates (x,y).
 * For RGB images, the argb values are packed in an int. For float images,
 * the value must be converted using Float.intBitsToFloat(). Returns zero
 * if the (x, y) is not inside the image.
 * 
 * @param {double} x - 
 * @param {double} y - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getPixelInterpolated = function(x, y) {
    throw new NotImplementedException("ByteProcessor.getPixelInterpolated(..)");
};

/**
 * Returns the value of the pixel at (x,y). For byte and short
 * images, returns a calibrated value if a calibration table
 * has been set using setCalibraionTable(). For RGB images,
 * returns the luminance value.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @return float
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getPixelValue = function(x, y) {
    throw new NotImplementedException("ByteProcessor.getPixelValue(..)");
};

/**
 * Sets the foreground drawing color.
 * 
 * @param {java.awt.Color} color - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.setColor = function(color) {
    throw new NotImplementedException("ByteProcessor.setColor(..)");
};

/**
 * Sets the default fill/draw value, where 0&lt;=value&lt;=255.
 * 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.setValue = function(value) {
    throw new NotImplementedException("ByteProcessor.setValue(..)");
};

/**
 * Sets the background fill value, where 0&lt;=value&lt;=255.
 * 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.setBackgroundValue = function(value) {
    throw new NotImplementedException("ByteProcessor.setBackgroundValue(..)");
};

/**
 * Returns the background fill value.
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getBackgroundValue = function() {
    throw new NotImplementedException("ByteProcessor.getBackgroundValue(..)");
};

/**
 * Stores the specified real value at (x,y). Does
 * nothing if (x,y) is outside the image boundary.
 * Values outside the range 0-255 are clamped.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.putPixelValue = function(x, y, value) {
    throw new NotImplementedException("ByteProcessor.putPixelValue(..)");
};

/**
 * Stores the specified value at (x,y). Does
 * nothing if (x,y) is outside the image boundary.
 * Values outside the range 0-255 are clamped.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int} value - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.putPixel = function(x, y, value) {
    throw new NotImplementedException("ByteProcessor.putPixel(..)");
};

/**
 * Draws a pixel in the current foreground color.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.drawPixel = function(x, y) {
    throw new NotImplementedException("ByteProcessor.drawPixel(..)");
};

/**
 * Returns a reference to the byte array containing this image's
 * pixel data. To avoid sign extension, the pixel values must be
 * accessed using a mask (e.g. int i = pixels[j]&amp;0xff).
 * 
 * @return java.lang.Object
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getPixels = function() {
    throw new NotImplementedException("ByteProcessor.getPixels(..)");
};

/**
 * Returns a copy of the pixel data. Or returns a reference to the
 * snapshot buffer if it is not null and 'snapshotCopyMode' is true.
 * 
 * @return java.lang.Object
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getPixelsCopy = function() {
    throw new NotImplementedException("ByteProcessor.getPixelsCopy(..)");
};

/**
 * Sets a new pixel array for the image. The length of the array must be equal to width*height.
 * Use setSnapshotPixels(null) to clear the snapshot buffer.
 * 
 * @param {java.lang.Object} pixels - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.setPixels = function(pixels) {
    throw new NotImplementedException("ByteProcessor.setPixels(..)");
};

/**
 * Returns the smallest displayed pixel value.
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getMin = function() {
    throw new NotImplementedException("ByteProcessor.getMin(..)");
};

/**
 * Returns the largest displayed pixel value.
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getMax = function() {
    throw new NotImplementedException("ByteProcessor.getMax(..)");
};

/**
 * Maps the entries in this image's LUT from min-max to 0-255.
 * 
 * @param {double} min - 
 * @param {double} max - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.setMinAndMax = function(min, max) {
    throw new NotImplementedException("ByteProcessor.setMinAndMax(..)");
};

/**
 * Resets this image's LUT.
 * 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.resetMinAndMax = function() {
    throw new NotImplementedException("ByteProcessor.resetMinAndMax(..)");
};

/**
 * Sets the lower and upper threshold levels. The 'lutUpdate' argument
 * can be RED_LUT, BLACK_AND_WHITE_LUT, OVER_UNDER_LUT or NO_LUT_UPDATE.
 * Thresholding of RGB images is not supported.
 * 
 * @param {double} minThreshold - 
 * @param {double} maxThreshold - 
 * @param {int} lutUpdate - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.setThreshold = function(minThreshold, maxThreshold, lutUpdate) {
    throw new NotImplementedException("ByteProcessor.setThreshold(..)");
};

/**
 * Copies the image contained in 'ip' to (xloc, yloc) using one of
 * the transfer modes defined in the Blitter interface.
 * 
 * @param {ImageProcessor} ip - 
 * @param {int} xloc - 
 * @param {int} yloc - 
 * @param {int} mode - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.copyBits = function(ip, xloc, yloc, mode) {
    throw new NotImplementedException("ByteProcessor.copyBits(..)");
};

/**
 * Transforms the image or ROI using a lookup table. The
 * length of the table must be 256 for byte images and 
 * 65536 for short images. RGB and float images are not
 * supported.
 * 
 * @param {int[]} lut - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.applyTable = function(lut) {
    throw new NotImplementedException("ByteProcessor.applyTable(..)");
};

/**
 * Convolves the image or ROI with the specified
 * 3x3 integer convolution kernel.
 * 
 * @param {int[]} kernel - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.convolve3x3 = function(kernel) {
    throw new NotImplementedException("ByteProcessor.convolve3x3(..)");
};

/**
 * Filters using a 3x3 neighborhood. The p1, p2, etc variables, which
 * contain the values of the pixels in the neighborhood, are arranged
 * as follows:
 * <pre> p1 p2 p3
 * p4 p5 p6
 * p7 p8 p9
 * </pre>
 * 
 * @param {int} type - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.filter = function(type) {
    throw new NotImplementedException("ByteProcessor.filter(..)");
};

/**
 * Erodes the image or ROI using a 3x3 maximum filter. Requires 8-bit or RGB image.
 * 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.erode = function() {
    throw new NotImplementedException("ByteProcessor.erode(..)");
};

/**
 * Dilates the image or ROI using a 3x3 minimum filter. Requires 8-bit or RGB image.
 * 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.dilate = function() {
    throw new NotImplementedException("ByteProcessor.dilate(..)");
};

/**
 * 
 * @param {int} count - 
 * @param {int} background - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.erode = function(count, background) {
    throw new NotImplementedException("ByteProcessor.erode(..)");
};

/**
 * 
 * @param {int} count - 
 * @param {int} background - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.dilate = function(count, background) {
    throw new NotImplementedException("ByteProcessor.dilate(..)");
};

/**
 * 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.outline = function() {
    throw new NotImplementedException("ByteProcessor.outline(..)");
};

/**
 * 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.skeletonize = function() {
    throw new NotImplementedException("ByteProcessor.skeletonize(..)");
};

/**
 * A 3x3 median filter. Requires 8-bit or RGB image.
 * 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.medianFilter = function() {
    throw new NotImplementedException("ByteProcessor.medianFilter(..)");
};

/**
 * Adds pseudorandom, Gaussian ("normally") distributed values, with
 * mean 0.0 and the specified standard deviation, to this image or ROI.
 * 
 * @param {double} standardDeviation - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.noise = function(standardDeviation) {
    throw new NotImplementedException("ByteProcessor.noise(..)");
};

/**
 * Scales the image or selection using the specified scale factors.
 * 
 * @param {double} xScale - 
 * @param {double} yScale - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.scale = function(xScale, yScale) {
    throw new NotImplementedException("ByteProcessor.scale(..)");
};

/**
 * Creates a new ByteProcessor containing a scaled copy of this image or selection.
 * 
 * @param {int} dstWidth - 
 * @param {int} dstHeight - 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.resize = function(dstWidth, dstHeight) {
    throw new NotImplementedException("ByteProcessor.resize(..)");
};

/**
 * Rotates the image or ROI 'angle' degrees clockwise.
 * 
 * @param {double} angle - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.rotate = function(angle) {
    throw new NotImplementedException("ByteProcessor.rotate(..)");
};

/**
 * Flips the image or ROI vertically.
 * 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.flipVertical = function() {
    throw new NotImplementedException("ByteProcessor.flipVertical(..)");
};

/**
 * Returns the histogram of the image or ROI. Returns
 * a luminosity histogram for RGB images and null
 * for float images.
 * <p>
 * For 8-bit and 16-bit images, returns an array with one entry for each possible
 * value that a pixel can have, from 0 to 255 (8-bit image) or 0-65535 (16-bit image).
 * Thus, the array size is 256 or 65536, and the bin width in uncalibrated units is 1.
 * </p><p>
 * For RGB images, the brightness is evaluated using the color weights (which would result in a
 * float value) and rounded to an int. This gives 256 bins. FloatProcessor.getHistogram is not
 * implemented (returns null).</p>
 * 
 * @return int[]
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getHistogram = function() {
    throw new NotImplementedException("ByteProcessor.getHistogram(..)");
};

/**
 * 
 * @param {ImageProcessor} mask - 
 * @return int[]
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getHistogram = function(mask) {
    throw new NotImplementedException("ByteProcessor.getHistogram(..)");
};

/**
 * Sets pixels less than or equal to level to 0 and all other pixels to 255.
 * 
 * @param {int} level - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.threshold = function(level) {
    throw new NotImplementedException("ByteProcessor.threshold(..)");
};

/**
 * 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.applyLut = function() {
    throw new NotImplementedException("ByteProcessor.applyLut(..)");
};

/**
 * Performs a convolution operation using the specified kernel.
 * 
 * @param {float[]} kernel - 
 * @param {int} kernelWidth - 
 * @param {int} kernelHeight - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.convolve = function(kernel, kernelWidth, kernelHeight) {
    throw new NotImplementedException("ByteProcessor.convolve(..)");
};

/**
 * 
 * @return FloatProcessor[]
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.toFloatProcessors = function() {
    throw new NotImplementedException("ByteProcessor.toFloatProcessors(..)");
};

/**
 * 
 * @param {FloatProcessor[]} fp - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.setFromFloatProcessors = function(fp) {
    throw new NotImplementedException("ByteProcessor.setFromFloatProcessors(..)");
};

/**
 * 
 * @return float[][]
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.toFloatArrays = function() {
    throw new NotImplementedException("ByteProcessor.toFloatArrays(..)");
};

/**
 * 
 * @param {float[][]} arrays - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.setFromFloatArrays = function(arrays) {
    throw new NotImplementedException("ByteProcessor.setFromFloatArrays(..)");
};

/**
 * Returns a FloatProcessor with the same image, no scaling or calibration
 * (pixel values 0 to 255).
 * The roi, mask, lut (ColorModel), threshold, min&amp;max are
 * also set for the FloatProcessor
 * 
 * @param {int} channelNumber - 
 * @param {FloatProcessor} fp - 
 * @return FloatProcessor
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.toFloat = function(channelNumber, fp) {
    throw new NotImplementedException("ByteProcessor.toFloat(..)");
};

/**
 * Sets the pixels from a FloatProcessor, no scaling.
 * Also the min&amp;max values are taken from the FloatProcessor.
 * 
 * @param {int} channelNumber - 
 * @param {FloatProcessor} fp - 
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.setPixels = function(channelNumber, fp) {
    throw new NotImplementedException("ByteProcessor.setPixels(..)");
};

/**
 * Returns 'true' if this is a binary image (8-bit-image with only 0 and 255).
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.isBinary = function() {
    throw new NotImplementedException("ByteProcessor.isBinary(..)");
};

/**
 * Returns the bit depth, 8, 16, 24 (RGB) or 32. RGB images actually use 32 bits per pixel.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ByteProcessor.prototype.getBitDepth = function() {
    throw new NotImplementedException("ByteProcessor.getBitDepth(..)");
};


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
 * public abstract class ImageProcessor
extends java.lang.Object
implements java.lang.Cloneable
 *
 * This abstract class is the superclass for classes that process
 *  * the four data types (byte, short, float and RGB) supported by ImageJ.
 *  * An ImageProcessor contains the pixel data of a 2D image and
 *  * some basic methods to manipulate it.
*/

/**
 * @constructor
 * 
 * 
 * @author Created by ijdoc2js
 */

function ImageProcessor() {
    throw new NotImplementedException("ImageProcessor.ImageProcessor(..)");
};

/**
 * Value of pixels included in masks.
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.BLACK = 0;

/**
 * Value returned by getMinThreshold() when thresholding is not enabled.
 * 
 * @const {double}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.NO_THRESHOLD = 0;

/**
 * Left justify text.
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.LEFT_JUSTIFY = 0;

/**
 * Center justify text.
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.CENTER_JUSTIFY = 0;

/**
 * Right justify text.
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.RIGHT_JUSTIFY = 0;

/**
 * Isodata thresholding method
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.ISODATA = 0;

/**
 * Modified isodata method used in Image/Adjust/Threshold tool
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.ISODATA2 = 0;

/**
 * Interpolation methods
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.NEAREST_NEIGHBOR = 0;

/**
 * Interpolation methods
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.NONE = 0;

/**
 * Interpolation methods
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.BILINEAR = 0;

/**
 * Interpolation methods
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.BICUBIC = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.BLUR_MORE = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.FIND_EDGES = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.MEDIAN_FILTER = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.MIN = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.MAX = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.CONVOLVE = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.RED_LUT = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.BLACK_AND_WHITE_LUT = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.NO_LUT_UPDATE = 0;

/**
 * 
 * @const {int}
 * @default
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.OVER_UNDER_LUT = 0;

/**
 * Returns the width of this image in pixels.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getWidth = function() {
    throw new NotImplementedException("ImageProcessor.getWidth(..)");
};

/**
 * Returns the height of this image in pixels.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getHeight = function() {
    throw new NotImplementedException("ImageProcessor.getHeight(..)");
};

/**
 * Returns the bit depth, 8, 16, 24 (RGB) or 32. RGB images actually use 32 bits per pixel.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getBitDepth = function() {
    throw new NotImplementedException("ImageProcessor.getBitDepth(..)");
};

/**
 * Returns this processor's color model. For non-RGB processors,
 * this is the base lookup table (LUT), not the one that may have
 * been modified by setMinAndMax() or setThreshold().
 * 
 * @return java.awt.image.ColorModel
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getColorModel = function() {
    throw new NotImplementedException("ImageProcessor.getColorModel(..)");
};

/**
 * Returns the current color model, which may have
 * been modified by setMinAndMax() or setThreshold().
 * 
 * @return java.awt.image.ColorModel
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getCurrentColorModel = function() {
    throw new NotImplementedException("ImageProcessor.getCurrentColorModel(..)");
};

/**
 * Sets the color model. Must be an IndexColorModel (aka LUT)
 * for all processors except the ColorProcessor.
 * 
 * @param {java.awt.image.ColorModel} cm - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setColorModel = function(cm) {
    throw new NotImplementedException("ImageProcessor.setColorModel(..)");
};

/**
 * 
 * @return LUT
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getLut = function() {
    throw new NotImplementedException("ImageProcessor.getLut(..)");
};

/**
 * 
 * @param {LUT} lut - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setLut = function(lut) {
    throw new NotImplementedException("ImageProcessor.setLut(..)");
};

/**
 * Inverts the values in this image's LUT (indexed color model).
 * Does nothing if this is a ColorProcessor.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.invertLut = function() {
    throw new NotImplementedException("ImageProcessor.invertLut(..)");
};

/**
 * Returns the LUT index that's the best match for this color.
 * 
 * @param {java.awt.Color} c - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getBestIndex = function(c) {
    throw new NotImplementedException("ImageProcessor.getBestIndex(..)");
};

/**
 * Returns true if this image uses an inverting LUT
 * that displays zero as white and 255 as black.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.isInvertedLut = function() {
    throw new NotImplementedException("ImageProcessor.isInvertedLut(..)");
};

/**
 * Returns 'true' if this is an image with a grayscale LUT or an
 * RGB image with identical red, green and blue channels.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.isGrayscale = function() {
    throw new NotImplementedException("ImageProcessor.isGrayscale(..)");
};

/**
 * Returns true if this image uses a color LUT.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.isColorLut = function() {
    throw new NotImplementedException("ImageProcessor.isColorLut(..)");
};

/**
 * Returns true if this image uses a pseudocolor or grayscale LUT, 
 * in other words, is this an image that can be filtered.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.isPseudoColorLut = function() {
    throw new NotImplementedException("ImageProcessor.isPseudoColorLut(..)");
};

/**
 * Returns true if the image is using the default grayscale LUT.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.isDefaultLut = function() {
    throw new NotImplementedException("ImageProcessor.isDefaultLut(..)");
};

/**
 * Sets the default fill/draw value to the pixel
 * value closest to the specified color.
 * 
 * @param {java.awt.Color} color - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setColor = function(color) {
    throw new NotImplementedException("ImageProcessor.setColor(..)");
};

/**
 * Sets the default fill/draw value.
 * 
 * @param {int} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setColor = function(value) {
    throw new NotImplementedException("ImageProcessor.setColor(..)");
};

/**
 * Sets the default fill/draw value.
 * 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setColor = function(value) {
    throw new NotImplementedException("ImageProcessor.setColor(..)");
};

/**
 * Sets the default fill/draw value.
 * 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setValue = function(value) {
    throw new NotImplementedException("ImageProcessor.setValue(..)");
};

/**
 * Sets the background fill value used by the rotate() and scale() methods.
 * 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setBackgroundValue = function(value) {
    throw new NotImplementedException("ImageProcessor.setBackgroundValue(..)");
};

/**
 * Returns the background fill value.
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getBackgroundValue = function() {
    throw new NotImplementedException("ImageProcessor.getBackgroundValue(..)");
};

/**
 * Returns the smallest displayed pixel value.
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getMin = function() {
    throw new NotImplementedException("ImageProcessor.getMin(..)");
};

/**
 * Returns the largest displayed pixel value.
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getMax = function() {
    throw new NotImplementedException("ImageProcessor.getMax(..)");
};

/**
 * This image will be displayed by mapping pixel values in the
 * range min-max to screen values in the range 0-255. For
 * byte images, this mapping is done by updating the LUT. For
 * short and float images, it's done by generating 8-bit AWT
 * images. For RGB images, it's done by changing the pixel values.
 * 
 * @param {double} min - 
 * @param {double} max - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setMinAndMax = function(min, max) {
    throw new NotImplementedException("ImageProcessor.setMinAndMax(..)");
};

/**
 * For short and float images, recalculates the min and max
 * image values needed to correctly display the image. For
 * ByteProcessors, resets the LUT.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.resetMinAndMax = function() {
    throw new NotImplementedException("ImageProcessor.resetMinAndMax(..)");
};

/**
 * Sets the lower and upper threshold levels. The 'lutUpdate' argument
 * can be RED_LUT, BLACK_AND_WHITE_LUT, OVER_UNDER_LUT or NO_LUT_UPDATE.
 * Thresholding of RGB images is not supported.
 * 
 * @param {double} minThreshold - 
 * @param {double} maxThreshold - 
 * @param {int} lutUpdate - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setThreshold = function(minThreshold, maxThreshold, lutUpdate) {
    throw new NotImplementedException("ImageProcessor.setThreshold(..)");
};

/**
 * 
 * @param {java.lang.String} mString - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setAutoThreshold = function(mString) {
    throw new NotImplementedException("ImageProcessor.setAutoThreshold(..)");
};

/**
 * 
 * @param {java.lang.String} mString - 
 * @param {boolean} darkBackground - 
 * @param {int} lutUpdate - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setAutoThreshold = function(mString, darkBackground, lutUpdate) {
    throw new NotImplementedException("ImageProcessor.setAutoThreshold(..)");
};

/**
 * 
 * @param {AutoThresholder.Method} method - 
 * @param {boolean} darkBackground - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setAutoThreshold = function(method, darkBackground) {
    throw new NotImplementedException("ImageProcessor.setAutoThreshold(..)");
};

/**
 * 
 * @param {AutoThresholder.Method} method - 
 * @param {boolean} darkBackground - 
 * @param {int} lutUpdate - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setAutoThreshold = function(method, darkBackground, lutUpdate) {
    throw new NotImplementedException("ImageProcessor.setAutoThreshold(..)");
};

/**
 * Automatically sets the lower and upper threshold levels, where 'method'
 * must be ISODATA or ISODATA2 and 'lutUpdate' must be RED_LUT,
 * BLACK_AND_WHITE_LUT, OVER_UNDER_LUT or NO_LUT_UPDATE.
 * 
 * @param {int} method - 
 * @param {int} lutUpdate - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setAutoThreshold = function(method, lutUpdate) {
    throw new NotImplementedException("ImageProcessor.setAutoThreshold(..)");
};

/**
 * Disables thresholding.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.resetThreshold = function() {
    throw new NotImplementedException("ImageProcessor.resetThreshold(..)");
};

/**
 * Returns the lower threshold level. Returns NO_THRESHOLD
 * if thresholding is not enabled.
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getMinThreshold = function() {
    throw new NotImplementedException("ImageProcessor.getMinThreshold(..)");
};

/**
 * Returns the upper threshold level.
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getMaxThreshold = function() {
    throw new NotImplementedException("ImageProcessor.getMaxThreshold(..)");
};

/**
 * Returns the LUT update mode, which can be RED_LUT, BLACK_AND_WHITE_LUT, 
 * OVER_UNDER_LUT or NO_LUT_UPDATE.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getLutUpdateMode = function() {
    throw new NotImplementedException("ImageProcessor.getLutUpdateMode(..)");
};

/**
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setBinaryThreshold = function() {
    throw new NotImplementedException("ImageProcessor.setBinaryThreshold(..)");
};

/**
 * Resets the threshold if minThreshold=maxThreshold and lutUpdateMode=NO_LUT_UPDATE. 
 * This removes the invisible threshold set by the MakeBinary and Convert to Mask commands.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.resetBinaryThreshold = function() {
    throw new NotImplementedException("ImageProcessor.resetBinaryThreshold(..)");
};

/**
 * Defines a rectangular region of interest and sets the mask 
 * to null if this ROI is not the same size as the previous one.
 * 
 * @param {java.awt.Rectangle} roi - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setRoi = function(roi) {
    throw new NotImplementedException("ImageProcessor.setRoi(..)");
};

/**
 * Defines a rectangular region of interest and sets the mask to 
 * null if this ROI is not the same size as the previous one.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int} rwidth - 
 * @param {int} rheight - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setRoi = function(x, y, rwidth, rheight) {
    throw new NotImplementedException("ImageProcessor.setRoi(..)");
};

/**
 * Defines a non-rectangular region of interest that will consist of a
 * rectangular ROI and a mask. After processing, call <code>reset(mask)</code>
 * to restore non-masked pixels. Here is an example:
 * <pre> ip.setRoi(new OvalRoi(50, 50, 100, 50));
 * ip.fill();
 * ip.reset(ip.getMask());
 * </pre>
 * The example assumes <code>snapshot()</code> has been called, which is the case
 * for code executed in the <code>run()</code> method of plugins that implement the 
 * <code>PlugInFilter</code> interface.
 * 
 * @param {Roi} roi - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setRoi = function(roi) {
    throw new NotImplementedException("ImageProcessor.setRoi(..)");
};

/**
 * Defines a polygonal region of interest that will consist of a
 * rectangular ROI and a mask. After processing, call <code>reset(mask)</code>
 * to restore non-masked pixels. Here is an example:
 * <pre> Polygon p = new Polygon();
 * p.addPoint(50, 0); p.addPoint(100, 100); p.addPoint(0, 100);
 * ip.setRoi(triangle);
 * ip.invert();
 * ip.reset(ip.getMask());
 * </pre>
 * The example assumes <code>snapshot()</code> has been called, which is the case
 * for code executed in the <code>run()</code> method of plugins that implement the 
 * <code>PlugInFilter</code> interface.
 * 
 * @param {java.awt.Polygon} roi - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setRoi = function(roi) {
    throw new NotImplementedException("ImageProcessor.setRoi(..)");
};

/**
 * Sets the ROI (Region of Interest) and clipping rectangle to the entire image.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.resetRoi = function() {
    throw new NotImplementedException("ImageProcessor.resetRoi(..)");
};

/**
 * Returns a Rectangle that represents the current
 * region of interest.
 * 
 * @return java.awt.Rectangle
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getRoi = function() {
    throw new NotImplementedException("ImageProcessor.getRoi(..)");
};

/**
 * Defines a byte mask that limits processing to an
 * irregular ROI. Background pixels in the mask have
 * a value of zero.
 * 
 * @param {ImageProcessor} mask - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setMask = function(mask) {
    throw new NotImplementedException("ImageProcessor.setMask(..)");
};

/**
 * For images with irregular ROIs, returns a mask, otherwise, 
 * returns null. Pixels outside the mask have a value of zero.
 * 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getMask = function() {
    throw new NotImplementedException("ImageProcessor.getMask(..)");
};

/**
 * Returns a reference to the mask pixel array, or null if there is no mask.
 * 
 * @return byte[]
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getMaskArray = function() {
    throw new NotImplementedException("ImageProcessor.getMaskArray(..)");
};

/**
 * Assigns a progress bar to this processor. Set 'pb' to
 * null to disable the progress bar.
 * 
 * @param {ProgressBar} pb - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setProgressBar = function(pb) {
    throw new NotImplementedException("ImageProcessor.setProgressBar(..)");
};

/**
 * This method has been replaced by setInterpolationMethod().
 * 
 * @param {boolean} interpolate - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setInterpolate = function(interpolate) {
    throw new NotImplementedException("ImageProcessor.setInterpolate(..)");
};

/**
 * Use this method to set the interpolation method (NONE, 
 * BILINEAR or BICUBIC) used by scale(), resize() and rotate().
 * 
 * @param {int} method - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setInterpolationMethod = function(method) {
    throw new NotImplementedException("ImageProcessor.setInterpolationMethod(..)");
};

/**
 * Returns the current interpolation method (NONE, BILINEAR or BICUBIC).
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getInterpolationMethod = function() {
    throw new NotImplementedException("ImageProcessor.getInterpolationMethod(..)");
};

/**
 * 
 * @return java.lang.String[]
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getInterpolationMethods = function() {
    throw new NotImplementedException("ImageProcessor.getInterpolationMethods(..)");
};

/**
 * Returns the value of the interpolate field.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getInterpolate = function() {
    throw new NotImplementedException("ImageProcessor.getInterpolate(..)");
};

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;
 * 
 * @deprecated .</span>&nbsp;
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.isKillable = function() {
    throw new NotImplementedException("ImageProcessor.isKillable(..)");
};

/**
 * Returns an array containing the pixel values along the
 * line starting at (x1,y1) and ending at (x2,y2). For byte
 * and short images, returns calibrated values if a calibration
 * table has been set using setCalibrationTable().
 * 
 * @param {double} x1 - 
 * @param {double} y1 - 
 * @param {double} x2 - 
 * @param {double} y2 - 
 * @return double[]
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getLine = function(x1, y1, x2, y2) {
    throw new NotImplementedException("ImageProcessor.getLine(..)");
};

/**
 * Returns the pixel values along the horizontal line starting at (x,y).
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int[]} data - 
 * @param {int} length - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getRow = function(x, y, data, length) {
    throw new NotImplementedException("ImageProcessor.getRow(..)");
};

/**
 * Returns the pixel values along the horizontal line starting at (x,y).
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {float[]} data - 
 * @param {int} length - 
 * @return float[]
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getRow = function(x, y, data, length) {
    throw new NotImplementedException("ImageProcessor.getRow(..)");
};

/**
 * Returns the pixel values down the column starting at (x,y).
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int[]} data - 
 * @param {int} length - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getColumn = function(x, y, data, length) {
    throw new NotImplementedException("ImageProcessor.getColumn(..)");
};

/**
 * Inserts the pixels contained in 'data' into a 
 * horizontal line starting at (x,y).
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int[]} data - 
 * @param {int} length - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.putRow = function(x, y, data, length) {
    throw new NotImplementedException("ImageProcessor.putRow(..)");
};

/**
 * Inserts the pixels contained in 'data' into a 
 * horizontal line starting at (x,y).
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {float[]} data - 
 * @param {int} length - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.putRow = function(x, y, data, length) {
    throw new NotImplementedException("ImageProcessor.putRow(..)");
};

/**
 * Inserts the pixels contained in 'data' into a 
 * column starting at (x,y).
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int[]} data - 
 * @param {int} length - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.putColumn = function(x, y, data, length) {
    throw new NotImplementedException("ImageProcessor.putColumn(..)");
};

/**
 * Sets the current drawing location.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.moveTo = function(x, y) {
    throw new NotImplementedException("ImageProcessor.moveTo(..)");
};

/**
 * Sets the line width used by lineTo() and drawDot().
 * 
 * @param {int} width - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setLineWidth = function(width) {
    throw new NotImplementedException("ImageProcessor.setLineWidth(..)");
};

/**
 * Returns the current line width.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getLineWidth = function() {
    throw new NotImplementedException("ImageProcessor.getLineWidth(..)");
};

/**
 * Draws a line from the current drawing location to (x2,y2).
 * 
 * @param {int} x2 - 
 * @param {int} y2 - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.lineTo = function(x2, y2) {
    throw new NotImplementedException("ImageProcessor.lineTo(..)");
};

/**
 * Draws a line from (x1,y1) to (x2,y2).
 * 
 * @param {int} x1 - 
 * @param {int} y1 - 
 * @param {int} x2 - 
 * @param {int} y2 - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.drawLine = function(x1, y1, x2, y2) {
    throw new NotImplementedException("ImageProcessor.drawLine(..)");
};

/**
 * 
 * @param {int} x1 - 
 * @param {int} y1 - 
 * @param {int} x2 - 
 * @param {int} y2 - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.drawLine4 = function(x1, y1, x2, y2) {
    throw new NotImplementedException("ImageProcessor.drawLine4(..)");
};

/**
 * Draws a rectangle.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int} width - 
 * @param {int} height - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.drawRect = function(x, y, width, height) {
    throw new NotImplementedException("ImageProcessor.drawRect(..)");
};

/**
 * Draws an elliptical shape.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int} width - 
 * @param {int} height - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.drawOval = function(x, y, width, height) {
    throw new NotImplementedException("ImageProcessor.drawOval(..)");
};

/**
 * Fills an elliptical shape.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int} width - 
 * @param {int} height - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.fillOval = function(x, y, width, height) {
    throw new NotImplementedException("ImageProcessor.fillOval(..)");
};

/**
 * Draws a polygon.
 * 
 * @param {java.awt.Polygon} p - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.drawPolygon = function(p) {
    throw new NotImplementedException("ImageProcessor.drawPolygon(..)");
};

/**
 * Fills a polygon.
 * 
 * @param {java.awt.Polygon} p - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.fillPolygon = function(p) {
    throw new NotImplementedException("ImageProcessor.fillPolygon(..)");
};

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;
 * 
 * @deprecated .</span>&nbsp;
 * @param {int} x - 
 * @param {int} y - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.drawDot2 = function(x, y) {
    throw new NotImplementedException("ImageProcessor.drawDot2(..)");
};

/**
 * Draws a dot using the current line width and fill/draw value.
 * 
 * @param {int} xcenter - 
 * @param {int} ycenter - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.drawDot = function(xcenter, ycenter) {
    throw new NotImplementedException("ImageProcessor.drawDot(..)");
};

/**
 * Draws a string at the current location using the current fill/draw value.
 * Draws multiple lines if the string contains newline characters.
 * 
 * @param {java.lang.String} s - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.drawString = function(s) {
    throw new NotImplementedException("ImageProcessor.drawString(..)");
};

/**
 * Draws a string at the specified location using the current fill/draw value.
 * 
 * @param {java.lang.String} s - 
 * @param {int} x - 
 * @param {int} y - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.drawString = function(s, x, y) {
    throw new NotImplementedException("ImageProcessor.drawString(..)");
};

/**
 * Draws a string at the specified location with a filled background.
 * A JavaScript example is available at
 * http://imagej.nih.gov/ij/macros/js/DrawTextWithBackground.js
 * 
 * @param {java.lang.String} s - 
 * @param {int} x - 
 * @param {int} y - 
 * @param {java.awt.Color} background - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.drawString = function(s, x, y, background) {
    throw new NotImplementedException("ImageProcessor.drawString(..)");
};

/**
 * Sets the justification used by drawString(), where <code>justification</code>
 * is CENTER_JUSTIFY, RIGHT_JUSTIFY or LEFT_JUSTIFY. The default is LEFT_JUSTIFY.
 * 
 * @param {int} justification - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setJustification = function(justification) {
    throw new NotImplementedException("ImageProcessor.setJustification(..)");
};

/**
 * Sets the font used by drawString().
 * 
 * @param {java.awt.Font} font - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setFont = function(font) {
    throw new NotImplementedException("ImageProcessor.setFont(..)");
};

/**
 * Specifies whether or not text is drawn using antialiasing. Antialiased
 * test requires an 8 bit or RGB image. Antialiasing does not
 * work with 8-bit images that are not using 0-255 display range.
 * 
 * @param {boolean} antialiasedText - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setAntialiasedText = function(antialiasedText) {
    throw new NotImplementedException("ImageProcessor.setAntialiasedText(..)");
};

/**
 * Returns the width in pixels of the specified string.
 * 
 * @param {java.lang.String} s - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getStringWidth = function(s) {
    throw new NotImplementedException("ImageProcessor.getStringWidth(..)");
};

/**
 * Returns the current font.
 * 
 * @return java.awt.Font
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getFont = function() {
    throw new NotImplementedException("ImageProcessor.getFont(..)");
};

/**
 * Returns the current FontMetrics.
 * 
 * @return java.awt.FontMetrics
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getFontMetrics = function() {
    throw new NotImplementedException("ImageProcessor.getFontMetrics(..)");
};

/**
 * Replaces each pixel with the 3x3 neighborhood mean.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.smooth = function() {
    throw new NotImplementedException("ImageProcessor.smooth(..)");
};

/**
 * Sharpens the image or ROI using a 3x3 convolution kernel.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.sharpen = function() {
    throw new NotImplementedException("ImageProcessor.sharpen(..)");
};

/**
 * Finds edges in the image or ROI using a Sobel operator.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.findEdges = function() {
    throw new NotImplementedException("ImageProcessor.findEdges(..)");
};

/**
 * Flips the image or ROI vertically.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.flipVertical = function() {
    throw new NotImplementedException("ImageProcessor.flipVertical(..)");
};

/**
 * Flips the image or ROI horizontally.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.flipHorizontal = function() {
    throw new NotImplementedException("ImageProcessor.flipHorizontal(..)");
};

/**
 * Rotates the entire image 90 degrees clockwise. Returns
 * a new ImageProcessor that represents the rotated image.
 * 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.rotateRight = function() {
    throw new NotImplementedException("ImageProcessor.rotateRight(..)");
};

/**
 * Rotates the entire image 90 degrees counter-clockwise. Returns
 * a new ImageProcessor that represents the rotated image.
 * 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.rotateLeft = function() {
    throw new NotImplementedException("ImageProcessor.rotateLeft(..)");
};

/**
 * Inserts the image contained in 'ip' at (xloc, yloc).
 * 
 * @param {ImageProcessor} ip - 
 * @param {int} xloc - 
 * @param {int} yloc - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.insert = function(ip, xloc, yloc) {
    throw new NotImplementedException("ImageProcessor.insert(..)");
};

/**
 * Returns a string containing information about this ImageProcessor.
 * 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.toString = function() {
    throw new NotImplementedException("ImageProcessor.toString(..)");
};

/**
 * Fills the image or ROI bounding rectangle with the current fill/draw value. Use
 * fill(Roi) or fill(ip.getMask()) to fill non-rectangular selections.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.fill = function() {
    throw new NotImplementedException("ImageProcessor.fill(..)");
};

/**
 * Fills pixels that are within the ROI bounding rectangle and part of 
 * the mask (i.e. pixels that have a value=BLACK in the mask array).
 * Use ip.getMask() to acquire the mask. 
 * Throws and IllegalArgumentException if the mask is null or
 * the size of the mask is not the same as the size of the ROI.
 * 
 * @param {ImageProcessor} mask - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.fill = function(mask) {
    throw new NotImplementedException("ImageProcessor.fill(..)");
};

/**
 * Fills the ROI with the current fill/draw value.
 * 
 * @param {Roi} roi - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.fill = function(roi) {
    throw new NotImplementedException("ImageProcessor.fill(..)");
};

/**
 * Fills outside an Roi.
 * 
 * @param {Roi} roi - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.fillOutside = function(roi) {
    throw new NotImplementedException("ImageProcessor.fillOutside(..)");
};

/**
 * Draws the specified ROI on this image using the line
 * width and color defined by ip.setLineWidth() and ip.setColor().
 * 
 * @param {Roi} roi - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.draw = function(roi) {
    throw new NotImplementedException("ImageProcessor.draw(..)");
};

/**
 * Draws the specified ROI on this image using the stroke
 * width, stroke color and fill color defined by roi.setStrokeWidth,
 * roi.setStrokeColor() and roi.setFillColor(). Works best with RGB
 * images. Does not work with 16-bit and float images.
 * Requires Java 1.6.
 * 
 * @param {Roi} roi - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.drawRoi = function(roi) {
    throw new NotImplementedException("ImageProcessor.drawRoi(..)");
};

/**
 * Draws the specified Overlay on this image. Works best
 * with RGB images. Does not work with 16-bit and float 
 * images. Requires Java 1.6.
 * 
 * @param {Overlay} overlay - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.drawOverlay = function(overlay) {
    throw new NotImplementedException("ImageProcessor.drawOverlay(..)");
};

/**
 * Set a lookup table used by getPixelValue(), getLine() and
 * convertToFloat() to calibrate pixel values. The length of
 * the table must be 256 for byte images and 65536 for short
 * images. RGB and float processors do not do calibration.
 * 
 * @param {float[]} cTable - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setCalibrationTable = function(cTable) {
    throw new NotImplementedException("ImageProcessor.setCalibrationTable(..)");
};

/**
 * Returns the calibration table or null.
 * 
 * @return float[]
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getCalibrationTable = function() {
    throw new NotImplementedException("ImageProcessor.getCalibrationTable(..)");
};

/**
 * Set the number of bins to be used for histograms of float images.
 * 
 * @param {int} size - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setHistogramSize = function(size) {
    throw new NotImplementedException("ImageProcessor.setHistogramSize(..)");
};

/**
 * Returns the number of float image histogram bins. The bin
 * count is fixed at 256 for the other three data types.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getHistogramSize = function() {
    throw new NotImplementedException("ImageProcessor.getHistogramSize(..)");
};

/**
 * Set the range used for histograms of float images. The image range is
 * used if both <code>histMin</code> and <code>histMax</code> are zero.
 * 
 * @param {double} histMin - 
 * @param {double} histMax - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setHistogramRange = function(histMin, histMax) {
    throw new NotImplementedException("ImageProcessor.setHistogramRange(..)");
};

/**
 * Returns the minimum histogram value used for histograms of float images.
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getHistogramMin = function() {
    throw new NotImplementedException("ImageProcessor.getHistogramMin(..)");
};

/**
 * Returns the maximum histogram value used for histograms of float images.
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getHistogramMax = function() {
    throw new NotImplementedException("ImageProcessor.getHistogramMax(..)");
};

/**
 * Returns a reference to this image's pixel array. The
 * array type (byte[], short[], float[] or int[]) varies
 * depending on the image type.
 * 
 * @return java.lang.Object
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getPixels = function() {
    throw new NotImplementedException("ImageProcessor.getPixels(..)");
};

/**
 * Returns a copy of the pixel data. Or returns a reference to the
 * snapshot buffer if it is not null and 'snapshotCopyMode' is true.
 * 
 * @return java.lang.Object
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getPixelsCopy = function() {
    throw new NotImplementedException("ImageProcessor.getPixelsCopy(..)");
};

/**
 * Returns the value of the pixel at (x,y). For RGB images, the
 * argb values are packed in an int. For float images, the
 * the value must be converted using Float.intBitsToFloat().
 * Returns zero if either the x or y coodinate is out of range.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getPixel = function(x, y) {
    throw new NotImplementedException("ImageProcessor.getPixel(..)");
};

/**
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getPixelCount = function() {
    throw new NotImplementedException("ImageProcessor.getPixelCount(..)");
};

/**
 * This is a faster version of getPixel() that does not do bounds checking.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.get = function(x, y) {
    throw new NotImplementedException("ImageProcessor.get(..)");
};

/**
 * 
 * @param {int} index - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.get = function(index) {
    throw new NotImplementedException("ImageProcessor.get(..)");
};

/**
 * This is a faster version of putPixel() that does not clip 
 * out of range values and does not do bounds checking.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.set = function(x, y, value) {
    throw new NotImplementedException("ImageProcessor.set(..)");
};

/**
 * 
 * @param {int} index - 
 * @param {int} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.set = function(index, value) {
    throw new NotImplementedException("ImageProcessor.set(..)");
};

/**
 * Returns the value of the pixel at (x,y) as a float. Faster than
 * getPixel() because no bounds checking is done.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @return float
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getf = function(x, y) {
    throw new NotImplementedException("ImageProcessor.getf(..)");
};

/**
 * 
 * @param {int} index - 
 * @return float
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getf = function(index) {
    throw new NotImplementedException("ImageProcessor.getf(..)");
};

/**
 * Sets the value of the pixel at (x,y) to 'value'. Does no bounds
 * checking or clamping, making it faster than putPixel(). Due to the lack
 * of bounds checking, (x,y) coordinates outside the image may cause
 * an exception. Due to the lack of clamping, values outside the 0-255
 * range (for byte) or 0-65535 range (for short) are not handled correctly.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {float} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setf = function(x, y, value) {
    throw new NotImplementedException("ImageProcessor.setf(..)");
};

/**
 * 
 * @param {int} index - 
 * @param {float} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setf = function(index, value) {
    throw new NotImplementedException("ImageProcessor.setf(..)");
};

/**
 * Returns a copy of the pixel data as a 2D int array with
 * dimensions [x=0..width-1][y=0..height-1]. With RGB
 * images, the returned values are in packed ARGB format.
 * With float images, the returned values must be converted
 * to float using Float.intBitsToFloat().
 * 
 * @return int[][]
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getIntArray = function() {
    throw new NotImplementedException("ImageProcessor.getIntArray(..)");
};

/**
 * Replaces the pixel data with contents of the specified 2D int array.
 * 
 * @param {int[][]} a - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setIntArray = function(a) {
    throw new NotImplementedException("ImageProcessor.setIntArray(..)");
};

/**
 * Returns a copy of the pixel data as a 2D float 
 * array with dimensions [x=0..width-1][y=0..height-1].
 * 
 * @return float[][]
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getFloatArray = function() {
    throw new NotImplementedException("ImageProcessor.getFloatArray(..)");
};

/**
 * Replaces the pixel data with contents of the specified 2D float array.
 * 
 * @param {float[][]} a - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setFloatArray = function(a) {
    throw new NotImplementedException("ImageProcessor.setFloatArray(..)");
};

/**
 * Experimental
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {double[][]} arr - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getNeighborhood = function(x, y, arr) {
    throw new NotImplementedException("ImageProcessor.getNeighborhood(..)");
};

/**
 * Returns the samples for the pixel at (x,y) in an int array.
 * RGB pixels have three samples, all others have one.
 * Returns zeros if the the coordinates are not in bounds.
 * iArray is an optional preallocated array.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int[]} iArray - 
 * @return int[]
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getPixel = function(x, y, iArray) {
    throw new NotImplementedException("ImageProcessor.getPixel(..)");
};

/**
 * Sets a pixel in the image using an int array of samples.
 * RGB pixels have three samples, all others have one.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int[]} iArray - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.putPixel = function(x, y, iArray) {
    throw new NotImplementedException("ImageProcessor.putPixel(..)");
};

/**
 * Uses the current interpolation method (bilinear or bicubic)
 * to find the pixel value at real coordinates (x,y).
 * 
 * @param {double} x - 
 * @param {double} y - 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getInterpolatedPixel = function(x, y) {
    throw new NotImplementedException("ImageProcessor.getInterpolatedPixel(..)");
};

/**
 * Uses the current interpolation method to find the pixel value at real coordinates (x,y).
 * For RGB images, the argb values are packed in an int. For float images,
 * the value must be converted using Float.intBitsToFloat(). Returns zero
 * if the (x, y) is not inside the image.
 * 
 * @param {double} x - 
 * @param {double} y - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getPixelInterpolated = function(x, y) {
    throw new NotImplementedException("ImageProcessor.getPixelInterpolated(..)");
};

/**
 * Uses bilinear interpolation to find the pixel value at real coordinates (x,y). 
 * Returns zero if the (x, y) is not inside the image.
 * 
 * @param {double} x - 
 * @param {double} y - 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getInterpolatedValue = function(x, y) {
    throw new NotImplementedException("ImageProcessor.getInterpolatedValue(..)");
};

/**
 * This method is from Chapter 16 of "Digital Image Processing:
 * An Algorithmic Introduction Using Java" by Burger and Burge
 * (http://www.imagingbook.com/).
 * 
 * @param {double} x0 - 
 * @param {double} y0 - 
 * @param {ImageProcessor} ip2 - 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getBicubicInterpolatedPixel = function(x0, y0, ip2) {
    throw new NotImplementedException("ImageProcessor.getBicubicInterpolatedPixel(..)");
};

/**
 * 
 * @param {double} x - 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.cubic = function(x) {
    throw new NotImplementedException("ImageProcessor.cubic(..)");
};

/**
 * Stores the specified value at (x,y). Does
 * nothing if (x,y) is outside the image boundary.
 * For 8-bit and 16-bit images, out of range values
 * are clamped. For RGB images, the
 * argb values are packed in 'value'. For float images,
 * 'value' is expected to be a float converted to an int
 * using Float.floatToIntBits().
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {int} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.putPixel = function(x, y, value) {
    throw new NotImplementedException("ImageProcessor.putPixel(..)");
};

/**
 * Returns the value of the pixel at (x,y). For byte and short
 * images, returns a calibrated value if a calibration table
 * has been set using setCalibraionTable(). For RGB images,
 * returns the luminance value.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @return float
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getPixelValue = function(x, y) {
    throw new NotImplementedException("ImageProcessor.getPixelValue(..)");
};

/**
 * Stores the specified value at (x,y).
 * 
 * @param {int} x - 
 * @param {int} y - 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.putPixelValue = function(x, y, value) {
    throw new NotImplementedException("ImageProcessor.putPixelValue(..)");
};

/**
 * Sets the pixel at (x,y) to the current fill/draw value.
 * 
 * @param {int} x - 
 * @param {int} y - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.drawPixel = function(x, y) {
    throw new NotImplementedException("ImageProcessor.drawPixel(..)");
};

/**
 * Sets a new pixel array for the image. The length of the array must be equal to width*height.
 * Use setSnapshotPixels(null) to clear the snapshot buffer.
 * 
 * @param {java.lang.Object} pixels - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setPixels = function(pixels) {
    throw new NotImplementedException("ImageProcessor.setPixels(..)");
};

/**
 * Copies the image contained in 'ip' to (xloc, yloc) using one of
 * the transfer modes defined in the Blitter interface.
 * 
 * @param {ImageProcessor} ip - 
 * @param {int} xloc - 
 * @param {int} yloc - 
 * @param {int} mode - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.copyBits = function(ip, xloc, yloc, mode) {
    throw new NotImplementedException("ImageProcessor.copyBits(..)");
};

/**
 * Transforms the image or ROI using a lookup table. The
 * length of the table must be 256 for byte images and 
 * 65536 for short images. RGB and float images are not
 * supported.
 * 
 * @param {int[]} lut - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.applyTable = function(lut) {
    throw new NotImplementedException("ImageProcessor.applyTable(..)");
};

/**
 * Inverts the image or ROI.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.invert = function() {
    throw new NotImplementedException("ImageProcessor.invert(..)");
};

/**
 * Adds 'value' to each pixel in the image or ROI.
 * 
 * @param {int} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.add = function(value) {
    throw new NotImplementedException("ImageProcessor.add(..)");
};

/**
 * Adds 'value' to each pixel in the image or ROI.
 * 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.add = function(value) {
    throw new NotImplementedException("ImageProcessor.add(..)");
};

/**
 * Subtracts 'value' from each pixel in the image or ROI.
 * 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.subtract = function(value) {
    throw new NotImplementedException("ImageProcessor.subtract(..)");
};

/**
 * Multiplies each pixel in the image or ROI by 'value'.
 * 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.multiply = function(value) {
    throw new NotImplementedException("ImageProcessor.multiply(..)");
};

/**
 * Assigns 'value' to each pixel in the image or ROI.
 * 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.set = function(value) {
    throw new NotImplementedException("ImageProcessor.set(..)");
};

/**
 * Binary AND of each pixel in the image or ROI with 'value'.
 * 
 * @param {int} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.and = function(value) {
    throw new NotImplementedException("ImageProcessor.and(..)");
};

/**
 * Binary OR of each pixel in the image or ROI with 'value'.
 * 
 * @param {int} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.or = function(value) {
    throw new NotImplementedException("ImageProcessor.or(..)");
};

/**
 * Binary exclusive OR of each pixel in the image or ROI with 'value'.
 * 
 * @param {int} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.xor = function(value) {
    throw new NotImplementedException("ImageProcessor.xor(..)");
};

/**
 * Performs gamma correction of the image or ROI.
 * 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.gamma = function(value) {
    throw new NotImplementedException("ImageProcessor.gamma(..)");
};

/**
 * Does a natural logarithmic (base e) transform of the image or ROI.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.log = function() {
    throw new NotImplementedException("ImageProcessor.log(..)");
};

/**
 * Does a natural logarithmic (base e) transform of the image or ROI.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.ln = function() {
    throw new NotImplementedException("ImageProcessor.ln(..)");
};

/**
 * Performs a exponential transform on the image or ROI.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.exp = function() {
    throw new NotImplementedException("ImageProcessor.exp(..)");
};

/**
 * Performs a square transform on the image or ROI.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.sqr = function() {
    throw new NotImplementedException("ImageProcessor.sqr(..)");
};

/**
 * Performs a square root transform on the image or ROI.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.sqrt = function() {
    throw new NotImplementedException("ImageProcessor.sqrt(..)");
};

/**
 * If this is a 32-bit or signed 16-bit image, performs an 
 * absolute value transform, otherwise does nothing.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.abs = function() {
    throw new NotImplementedException("ImageProcessor.abs(..)");
};

/**
 * Pixels less than 'value' are set to 'value'.
 * 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.min = function(value) {
    throw new NotImplementedException("ImageProcessor.min(..)");
};

/**
 * Pixels greater than 'value' are set to 'value'.
 * 
 * @param {double} value - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.max = function(value) {
    throw new NotImplementedException("ImageProcessor.max(..)");
};

/**
 * Returns a copy of this image is the form of an AWT Image.
 * 
 * @return java.awt.Image
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.createImage = function() {
    throw new NotImplementedException("ImageProcessor.createImage(..)");
};

/**
 * Returns this image as a BufferedImage.
 * 
 * @return java.awt.image.BufferedImage
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getBufferedImage = function() {
    throw new NotImplementedException("ImageProcessor.getBufferedImage(..)");
};

/**
 * Returns a new, blank processor with the specified width and height.
 * 
 * @param {int} width - 
 * @param {int} height - 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.createProcessor = function(width, height) {
    throw new NotImplementedException("ImageProcessor.createProcessor(..)");
};

/**
 * Makes a copy of this image's pixel data that can be 
 * later restored using reset() or reset(mask).
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.snapshot = function() {
    throw new NotImplementedException("ImageProcessor.snapshot(..)");
};

/**
 * Restores the pixel data from the snapshot (undo) buffer.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.reset = function() {
    throw new NotImplementedException("ImageProcessor.reset(..)");
};

/**
 * Swaps the pixel and snapshot (undo) buffers.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.swapPixelArrays = function() {
    throw new NotImplementedException("ImageProcessor.swapPixelArrays(..)");
};

/**
 * Restores pixels from the snapshot buffer that are 
 * within the rectangular roi but not part of the mask.
 * 
 * @param {ImageProcessor} mask - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.reset = function(mask) {
    throw new NotImplementedException("ImageProcessor.reset(..)");
};

/**
 * Sets a new pixel array for the snapshot (undo) buffer.
 * 
 * @param {java.lang.Object} pixels - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setSnapshotPixels = function(pixels) {
    throw new NotImplementedException("ImageProcessor.setSnapshotPixels(..)");
};

/**
 * Returns a reference to the snapshot (undo) buffer, or null.
 * 
 * @return java.lang.Object
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getSnapshotPixels = function() {
    throw new NotImplementedException("ImageProcessor.getSnapshotPixels(..)");
};

/**
 * Convolves the image or ROI with the specified
 * 3x3 integer convolution kernel.
 * 
 * @param {int[]} kernel - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.convolve3x3 = function(kernel) {
    throw new NotImplementedException("ImageProcessor.convolve3x3(..)");
};

/**
 * A 3x3 filter operation, where the argument (BLUR_MORE, FIND_EDGES, 
 * MEDIAN_FILTER, MIN or MAX) determines the filter type.
 * 
 * @param {int} type - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.filter = function(type) {
    throw new NotImplementedException("ImageProcessor.filter(..)");
};

/**
 * A 3x3 median filter. Requires 8-bit or RGB image.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.medianFilter = function() {
    throw new NotImplementedException("ImageProcessor.medianFilter(..)");
};

/**
 * Adds pseudorandom, Gaussian ("normally") distributed values, with
 * mean 0.0 and the specified standard deviation, to this image or ROI.
 * 
 * @param {double} standardDeviation - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.noise = function(standardDeviation) {
    throw new NotImplementedException("ImageProcessor.noise(..)");
};

/**
 * Creates a new processor containing an image
 * that corresponds to the current ROI.
 * 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.crop = function() {
    throw new NotImplementedException("ImageProcessor.crop(..)");
};

/**
 * Sets pixels less than or equal to level to 0 and all other 
 * pixels to 255. Only works with 8-bit and 16-bit images.
 * 
 * @param {int} level - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.threshold = function(level) {
    throw new NotImplementedException("ImageProcessor.threshold(..)");
};

/**
 * Returns a duplicate of this image.
 * 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.duplicate = function() {
    throw new NotImplementedException("ImageProcessor.duplicate(..)");
};

/**
 * Scales the image by the specified factors. Does not
 * change the image size.
 * 
 * @param {double} xScale - 
 * @param {double} yScale - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.scale = function(xScale, yScale) {
    throw new NotImplementedException("ImageProcessor.scale(..)");
};

/**
 * Creates a new ImageProcessor containing a scaled copy of this image or ROI.
 * 
 * @param {int} dstWidth - 
 * @param {int} dstHeight - 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.resize = function(dstWidth, dstHeight) {
    throw new NotImplementedException("ImageProcessor.resize(..)");
};

/**
 * Creates a new ImageProcessor containing a scaled copy 
 * of this image or ROI, with the aspect ratio maintained.
 * 
 * @param {int} dstWidth - 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.resize = function(dstWidth) {
    throw new NotImplementedException("ImageProcessor.resize(..)");
};

/**
 * Creates a new ImageProcessor containing a scaled copy of this image or ROI.
 * 
 * @param {int} dstWidth - 
 * @param {int} dstHeight - 
 * @param {boolean} useAverging - 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.resize = function(dstWidth, dstHeight, useAverging) {
    throw new NotImplementedException("ImageProcessor.resize(..)");
};

/**
 * Returns a copy of this image that has been reduced in size using binning.
 * 
 * @param {int} shrinkFactor - 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.bin = function(shrinkFactor) {
    throw new NotImplementedException("ImageProcessor.bin(..)");
};

/**
 * Rotates the image or selection 'angle' degrees clockwise.
 * 
 * @param {double} angle - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.rotate = function(angle) {
    throw new NotImplementedException("ImageProcessor.rotate(..)");
};

/**
 * Moves the image or selection vertically or horizontally by a specified 
 * number of pixels. Positive x values move the image or selection to the 
 * right, negative values move it to the left. Positive y values move the 
 * image or selection down, negative values move it up.
 * 
 * @param {double} xOffset - 
 * @param {double} yOffset - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.translate = function(xOffset, yOffset) {
    throw new NotImplementedException("ImageProcessor.translate(..)");
};

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">replaced by translate(x,y)</span>
 * 
 * @deprecated .</span>&nbsp;<span class="deprecationComment">replaced by translate(x,y)</span>
 * @param {int} xOffset - 
 * @param {int} yOffset - 
 * @param {boolean} eraseBackground - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.translate = function(xOffset, yOffset, eraseBackground) {
    throw new NotImplementedException("ImageProcessor.translate(..)");
};

/**
 * Returns the histogram of the image or ROI. Returns
 * a luminosity histogram for RGB images and null
 * for float images.
 * <p>
 * For 8-bit and 16-bit images, returns an array with one entry for each possible
 * value that a pixel can have, from 0 to 255 (8-bit image) or 0-65535 (16-bit image).
 * Thus, the array size is 256 or 65536, and the bin width in uncalibrated units is 1.
 * </p><p>
 * For RGB images, the brightness is evaluated using the color weights (which would result in a
 * float value) and rounded to an int. This gives 256 bins. FloatProcessor.getHistogram is not
 * implemented (returns null).</p>
 * 
 * @return int[]
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getHistogram = function() {
    throw new NotImplementedException("ImageProcessor.getHistogram(..)");
};

/**
 * Returns the histogram of the image or ROI, using the specified number of bins.
 * 
 * @param {int} nBins - 
 * @return int[]
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getHistogram = function(nBins) {
    throw new NotImplementedException("ImageProcessor.getHistogram(..)");
};

/**
 * Erodes the image or ROI using a 3x3 maximum filter. Requires 8-bit or RGB image.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.erode = function() {
    throw new NotImplementedException("ImageProcessor.erode(..)");
};

/**
 * Dilates the image or ROI using a 3x3 minimum filter. Requires 8-bit or RGB image.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.dilate = function() {
    throw new NotImplementedException("ImageProcessor.dilate(..)");
};

/**
 * For 16 and 32 bit processors, set 'lutAnimation' true
 * to have createImage() use the cached 8-bit version
 * of the image.
 * 
 * @param {boolean} lutAnimation - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setLutAnimation = function(lutAnimation) {
    throw new NotImplementedException("ImageProcessor.setLutAnimation(..)");
};

/**
 * Returns an 8-bit version of this image as a ByteProcessor.
 * 
 * @param {boolean} doScaling - 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.convertToByte = function(doScaling) {
    throw new NotImplementedException("ImageProcessor.convertToByte(..)");
};

/**
 * Returns a 16-bit version of this image as a ShortProcessor.
 * 
 * @param {boolean} doScaling - 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.convertToShort = function(doScaling) {
    throw new NotImplementedException("ImageProcessor.convertToShort(..)");
};

/**
 * Returns a 32-bit float version of this image as a FloatProcessor. 
 * For byte and short images, converts using a calibration function 
 * if a calibration table has been set using setCalibrationTable().
 * 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.convertToFloat = function() {
    throw new NotImplementedException("ImageProcessor.convertToFloat(..)");
};

/**
 * Returns an RGB version of this image as a ColorProcessor.
 * 
 * @return ImageProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.convertToRGB = function() {
    throw new NotImplementedException("ImageProcessor.convertToRGB(..)");
};

/**
 * Returns an 8-bit version of this image as a ByteProcessor. 16-bit and 32-bit
 * pixel data are scaled from min-max to 0-255.
 * 
 * @return ByteProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.convertToByteProcessor = function() {
    throw new NotImplementedException("ImageProcessor.convertToByteProcessor(..)");
};

/**
 * Returns an 8-bit version of this image as a ByteProcessor. 16-bit and 32-bit
 * pixel data are scaled from min-max to 0-255 if 'scale' is true.
 * 
 * @param {boolean} scale - 
 * @return ByteProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.convertToByteProcessor = function(scale) {
    throw new NotImplementedException("ImageProcessor.convertToByteProcessor(..)");
};

/**
 * Returns a 16-bit version of this image as a ShortProcessor. 32-bit
 * pixel data are scaled from min-max to 0-255.
 * 
 * @return ShortProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.convertToShortProcessor = function() {
    throw new NotImplementedException("ImageProcessor.convertToShortProcessor(..)");
};

/**
 * Returns a 16-bit version of this image as a ShortProcessor. 32-bit
 * pixel data are scaled from min-max to 0-255 if 'scale' is true.
 * 
 * @param {boolean} scale - 
 * @return ShortProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.convertToShortProcessor = function(scale) {
    throw new NotImplementedException("ImageProcessor.convertToShortProcessor(..)");
};

/**
 * Returns a 32-bit float version of this image as a FloatProcessor. 
 * For byte and short images, converts using a calibration function 
 * if a calibration table has been set using setCalibrationTable().
 * 
 * @return FloatProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.convertToFloatProcessor = function() {
    throw new NotImplementedException("ImageProcessor.convertToFloatProcessor(..)");
};

/**
 * Returns an RGB version of this image as a ColorProcessor.
 * 
 * @return ColorProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.convertToColorProcessor = function() {
    throw new NotImplementedException("ImageProcessor.convertToColorProcessor(..)");
};

/**
 * Performs a convolution operation using the specified kernel. 
 * KernelWidth and kernelHeight must be odd.
 * 
 * @param {float[]} kernel - 
 * @param {int} kernelWidth - 
 * @param {int} kernelHeight - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.convolve = function(kernel, kernelWidth, kernelHeight) {
    throw new NotImplementedException("ImageProcessor.convolve(..)");
};

/**
 * Converts the image to binary using an automatically determined threshold.
 * For byte and short images, converts to binary using an automatically determined
 * threshold. For RGB images, converts each channel to binary. For
 * float images, does nothing.
 * 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.autoThreshold = function() {
    throw new NotImplementedException("ImageProcessor.autoThreshold(..)");
};

/**
 * Returns a pixel value (threshold) that can be used to divide the image into objects 
 * and background. It does this by taking a test threshold and computing the average 
 * of the pixels at or below the threshold and pixels above. It then computes the average
 * of those two, increments the threshold, and repeats the process. Incrementing stops 
 * when the threshold is larger than the composite average. That is, threshold = (average 
 * background + average objects)/2. This description was posted to the ImageJ mailing 
 * list by Jordan Bevic.
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getAutoThreshold = function() {
    throw new NotImplementedException("ImageProcessor.getAutoThreshold(..)");
};

/**
 * This is a version of getAutoThreshold() that uses a histogram passed as an argument.
 * 
 * @param {int[]} histogram - 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getAutoThreshold = function(histogram) {
    throw new NotImplementedException("ImageProcessor.getAutoThreshold(..)");
};

/**
 * Updates the clipping rectangle used by lineTo(), drawLine(), drawDot() and drawPixel().
 * The clipping rectangle is reset by passing a null argument or by calling resetRoi().
 * 
 * @param {java.awt.Rectangle} clipRect - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setClipRect = function(clipRect) {
    throw new NotImplementedException("ImageProcessor.setClipRect(..)");
};

/**
 * Returns the default grayscale IndexColorModel.
 * 
 * @return java.awt.image.IndexColorModel
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getDefaultColorModel = function() {
    throw new NotImplementedException("ImageProcessor.getDefaultColorModel(..)");
};

/**
 * The getPixelsCopy() method returns a reference to the
 * snapshot buffer if it is not null and 'snapshotCopyMode' is true.
 * 
 * @param {boolean} b - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setSnapshotCopyMode = function(b) {
    throw new NotImplementedException("ImageProcessor.setSnapshotCopyMode(..)");
};

/**
 * Returns the number of color channels in the image. The color channels can be
 * accessed by toFloat(channelNumber, fp) and written by setPixels(channelNumber, fp).
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getNChannels = function() {
    throw new NotImplementedException("ImageProcessor.getNChannels(..)");
};

/**
 * Returns a FloatProcessor with the image or one color channel thereof.
 * The roi and mask are also set for the FloatProcessor.
 * 
 * @param {int} channelNumber - 
 * @param {FloatProcessor} fp - 
 * @return FloatProcessor
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.toFloat = function(channelNumber, fp) {
    throw new NotImplementedException("ImageProcessor.toFloat(..)");
};

/**
 * Sets the pixels (of one color channel for RGB images) from a FloatProcessor.
 * 
 * @param {int} channelNumber - 
 * @param {FloatProcessor} fp - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setPixels = function(channelNumber, fp) {
    throw new NotImplementedException("ImageProcessor.setPixels(..)");
};

/**
 * Returns the minimum possible pixel value.
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.minValue = function() {
    throw new NotImplementedException("ImageProcessor.minValue(..)");
};

/**
 * Returns the maximum possible pixel value.
 * 
 * @return double
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.maxValue = function() {
    throw new NotImplementedException("ImageProcessor.maxValue(..)");
};

/**
 * CompositeImage calls this method to generate an updated color image.
 * 
 * @param {int[]} rgbPixels - 
 * @param {int} channel - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.updateComposite = function(rgbPixels, channel) {
    throw new NotImplementedException("ImageProcessor.updateComposite(..)");
};

/**
 * Sets the upper Over/Under threshold color. Can be called from a macro,
 * e.g., call("ij.process.ImageProcessor.setOverColor", 0,255,255).
 * 
 * @param {int} red - 
 * @param {int} green - 
 * @param {int} blue - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setOverColor = function(red, green, blue) {
    throw new NotImplementedException("ImageProcessor.setOverColor(..)");
};

/**
 * Set the lower Over/Under thresholding color.
 * 
 * @param {int} red - 
 * @param {int} green - 
 * @param {int} blue - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setUnderColor = function(red, green, blue) {
    throw new NotImplementedException("ImageProcessor.setUnderColor(..)");
};

/**
 * Returns 'true' if this is a binary image (8-bit-image with only 0 and 255).
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.isBinary = function() {
    throw new NotImplementedException("ImageProcessor.isBinary(..)");
};

/**
 * Returns 'true' if this is a signed 16-bit image.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.isSigned16Bit = function() {
    throw new NotImplementedException("ImageProcessor.isSigned16Bit(..)");
};

/**
 * 
 * @param {boolean} b - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setUseBicubic = function(b) {
    throw new NotImplementedException("ImageProcessor.setUseBicubic(..)");
};

/**
 * Calculates and returns uncalibrated statistics for this image or ROI,
 * including histogram, area, mean, min and max, standard deviation,
 * and mode. Use the setRoi(Roi) method to limit statistics to
 * a non-rectangular area.
 * 
 * @return ImageStatistics
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getStats = function() {
    throw new NotImplementedException("ImageProcessor.getStats(..)");
};

/**
 * This method calculates and returns complete uncalibrated statistics for
 * this image or ROI but it is up to 70 times slower than getStats().
 * 
 * @return ImageStatistics
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getStatistics = function() {
    throw new NotImplementedException("ImageProcessor.getStatistics(..)");
};

/**
 * Blurs the image by convolving with a Gaussian function.
 * 
 * @param {double} sigma - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.blurGaussian = function(sigma) {
    throw new NotImplementedException("ImageProcessor.blurGaussian(..)");
};

/**
 * Uses the Process/Math/Macro command to apply macro code to this image.
 * 
 * @param {java.lang.String} macro - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.applyMacro = function(macro) {
    throw new NotImplementedException("ImageProcessor.applyMacro(..)");
};

/**
 * 
 * @return int
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getSliceNumber = function() {
    throw new NotImplementedException("ImageProcessor.getSliceNumber(..)");
};

/**
 * PlugInFilterRunner uses this method to set the slice number.
 * 
 * @param {int} slice - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setSliceNumber = function(slice) {
    throw new NotImplementedException("ImageProcessor.setSliceNumber(..)");
};

/**
 * Returns a shallow copy of this ImageProcessor, where this 
 * image and the copy share pixel data. Use the duplicate() method 
 * to create a copy that does not share the pixel data.
 * 
 * @return java.lang.Object
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.clone = function() {
    throw new NotImplementedException("ImageProcessor.clone(..)");
};

/**
 * This method is used to display virtual stack overlays.
 * 
 * @param {Overlay} overlay - 
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.setOverlay = function(overlay) {
    throw new NotImplementedException("ImageProcessor.setOverlay(..)");
};

/**
 * 
 * @return Overlay
 * 
 * @author Created by ijdoc2js
 */
ImageProcessor.prototype.getOverlay = function() {
    throw new NotImplementedException("ImageProcessor.getOverlay(..)");
};


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

/**
 * @module jib
 *
 */

(function (exports) {

  /**
   * @constructor
   *
   * @param {string} type - "8-bit", "16-bit", "32-bit", "RGB", "RGBA"
   * @param {number} width - Image Width in pixels
   * @param {number} height - Image Height in pixels
   * @param {number} depth - Image Depth in pixels (3D) or Slice Number for Stack (2.5D)
   */
  function Jimage (type = "8-bit", width = 0, height = 0, depth = 0 ) {
    let types = {"8-bit":8, "16-bit": 16, "32-bit": 32, "RGB": 24, "RGBA": 32};
    // Classical parameters
    this.type   = type;
    this.bpp    = types[this.type];
    this.width  = width;
    this.height = height;
    this.depth  = depth;

    // WebGL area (aka ImageProcessor) containing the pixels
    this.canvas;

    // History of all the processing commands
    // Only for the app
    this.history = [];

  }

  /**
   * Load image from URL
   *
   * @param url {string} - a URL
   */
  Jimage.prototype.fromURL = function(url) {
    // Get image from URL;
  };

  /**
   * Load image from Pixel Array
   *
   * @param url {array} - A typed array containing pixels UInt8Array, UInt16Array, and Float32Array
   */
  Jimage.prototype.fromPixels = function(array) {
    // Get image from array of pixels;
  };

  /**
   * Load image from template
   *
   * @param template {string} - a template among 'black', 'white', 'ramp', 'random', 'chessboard'
   */
  Jimage.prototype.fromTemplate = function(template) {
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
        this.pixels = new UInt8Array(this.width * this.height * this.depth * this.bpp);
      }
    }
  };

  /**
   * Get image width
   *
   * @return {number}
   */
  Jimage.prototype.getWidth = function() {
    return this.width;
  };

  /**
   * Get image height
   *
   * @return {number}
   */
  Jimage.prototype.getHeight = function() {
    return this.height;
  };

  /**
   * Get image depth or slice number
   *
   * @return {number}
   */
  Jimage.prototype.getDepth = function() {
    return this.depth;
  };

  Jimage.prototype.render = function(callback) {
    return this.depth;
  };

  exports.Jimage = Jimage;

})(this.jib = this.jib || {})

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

'use strict';


(function(exports) {

    class Canvas {
        constructor() {
          this.format = 128;
          // this.texture = new wij.Texture();
        }
    }

    exports.Canvas = Canvas;

})(this.wgl = this.wgl || {});

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

"use strict";

class Shader {
  /**
   * @constructor
   *
   * @author Jean-Christophe Taveau
   */
  constructor() {

    function initGL() {
       // Try to get an WebGL 2 context
       try {

       }
       catch (e) {

       }
    }

    this.gl = initGL();
  }

  /**
   * @author Jean-Christophe Taveau
   */


  /**
   * @author Jean-Christophe Taveau
   */
  compileShader() {

  }

  /**
   * @author Jean-Christophe Taveau
   */
  getShaderSource(src) {

  }
}

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

'use strict';


class Texture {
  constructor() {
    this.pixels;
  }
}

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

 /*
  * Use with node.js
  */

module.exports = {
  IJ: IJ,
  ImagePlus : ImagePlus,
  Measurements : Measurements,
  wij: this.wij
};

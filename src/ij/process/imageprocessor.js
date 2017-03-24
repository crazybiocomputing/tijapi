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


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
 * 
 * 
 * @author
 */

function ImageProcessor() {
    throw new NotImplementedException("ImageProcessor.ImageProcessor(..)");
}

/**
 * Value of pixels included in masks.
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.BLACK = 0;

/**
 * Value returned by getMinThreshold() when thresholding is not enabled.
 * 
 * @return double
 * 
 * @author
 */
const ImageProcessor.NO_THRESHOLD = 0;

/**
 * Left justify text.
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.LEFT_JUSTIFY = 0;

/**
 * Center justify text.
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.CENTER_JUSTIFY = 0;

/**
 * Right justify text.
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.RIGHT_JUSTIFY = 0;

/**
 * Isodata thresholding method
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.ISODATA = 0;

/**
 * Modified isodata method used in Image/Adjust/Threshold tool
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.ISODATA2 = 0;

/**
 * Interpolation methods
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.NEAREST_NEIGHBOR = 0;

/**
 * Interpolation methods
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.NONE = 0;

/**
 * Interpolation methods
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.BILINEAR = 0;

/**
 * Interpolation methods
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.BICUBIC = 0;

/**
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.BLUR_MORE = 0;

/**
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.FIND_EDGES = 0;

/**
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.MEDIAN_FILTER = 0;

/**
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.MIN = 0;

/**
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.MAX = 0;

/**
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.CONVOLVE = 0;

/**
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.RED_LUT = 0;

/**
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.BLACK_AND_WHITE_LUT = 0;

/**
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.NO_LUT_UPDATE = 0;

/**
 * 
 * @return int
 * 
 * @author
 */
const ImageProcessor.OVER_UNDER_LUT = 0;

/**
 * Returns the width of this image in pixels.
 * 
 * @return int
 * 
 * @author
 */
ImageProcessor.prototype.getWidth = function() {
    throw new NotImplementedException("ImageProcessor.getWidth(..)");
}

/**
 * Returns the height of this image in pixels.
 * 
 * @return int
 * 
 * @author
 */
ImageProcessor.prototype.getHeight = function() {
    throw new NotImplementedException("ImageProcessor.getHeight(..)");
}

/**
 * Returns the bit depth, 8, 16, 24 (RGB) or 32. RGB images actually use 32 bits per pixel.
 * 
 * @return int
 * 
 * @author
 */
ImageProcessor.prototype.getBitDepth = function() {
    throw new NotImplementedException("ImageProcessor.getBitDepth(..)");
}

/**
 * Returns this processor's color model. For non-RGB processors,
 * this is the base lookup table (LUT), not the one that may have
 * been modified by setMinAndMax() or setThreshold().
 * 
 * @return java.awt.image.ColorModel
 * 
 * @author
 */
ImageProcessor.prototype.getColorModel = function() {
    throw new NotImplementedException("ImageProcessor.getColorModel(..)");
}

/**
 * Returns the current color model, which may have
 * been modified by setMinAndMax() or setThreshold().
 * 
 * @return java.awt.image.ColorModel
 * 
 * @author
 */
ImageProcessor.prototype.getCurrentColorModel = function() {
    throw new NotImplementedException("ImageProcessor.getCurrentColorModel(..)");
}

/**
 * Sets the color model. Must be an IndexColorModel (aka LUT)
 * for all processors except the ColorProcessor.
 * 
 * @params cm - java.awt.image.ColorModel
 * 
 * @author
 */
ImageProcessor.prototype.setColorModel = function(cm) {
    throw new NotImplementedException("ImageProcessor.setColorModel(..)");
}

/**
 * 
 * @return LUT
 * 
 * @author
 */
ImageProcessor.prototype.getLut = function() {
    throw new NotImplementedException("ImageProcessor.getLut(..)");
}

/**
 * 
 * @params lut - LUT
 * 
 * @author
 */
ImageProcessor.prototype.setLut = function(lut) {
    throw new NotImplementedException("ImageProcessor.setLut(..)");
}

/**
 * Inverts the values in this image's LUT (indexed color model).
 * Does nothing if this is a ColorProcessor.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.invertLut = function() {
    throw new NotImplementedException("ImageProcessor.invertLut(..)");
}

/**
 * Returns the LUT index that's the best match for this color.
 * 
 * @params c - java.awt.Color
 * @return int
 * 
 * @author
 */
ImageProcessor.prototype.getBestIndex = function(c) {
    throw new NotImplementedException("ImageProcessor.getBestIndex(..)");
}

/**
 * Returns true if this image uses an inverting LUT
 * that displays zero as white and 255 as black.
 * 
 * @return boolean
 * 
 * @author
 */
ImageProcessor.prototype.isInvertedLut = function() {
    throw new NotImplementedException("ImageProcessor.isInvertedLut(..)");
}

/**
 * Returns 'true' if this is an image with a grayscale LUT or an
 * RGB image with identical red, green and blue channels.
 * 
 * @return boolean
 * 
 * @author
 */
ImageProcessor.prototype.isGrayscale = function() {
    throw new NotImplementedException("ImageProcessor.isGrayscale(..)");
}

/**
 * Returns true if this image uses a color LUT.
 * 
 * @return boolean
 * 
 * @author
 */
ImageProcessor.prototype.isColorLut = function() {
    throw new NotImplementedException("ImageProcessor.isColorLut(..)");
}

/**
 * Returns true if this image uses a pseudocolor or grayscale LUT, 
 * in other words, is this an image that can be filtered.
 * 
 * @return boolean
 * 
 * @author
 */
ImageProcessor.prototype.isPseudoColorLut = function() {
    throw new NotImplementedException("ImageProcessor.isPseudoColorLut(..)");
}

/**
 * Returns true if the image is using the default grayscale LUT.
 * 
 * @return boolean
 * 
 * @author
 */
ImageProcessor.prototype.isDefaultLut = function() {
    throw new NotImplementedException("ImageProcessor.isDefaultLut(..)");
}

/**
 * Sets the default fill/draw value to the pixel
 * value closest to the specified color.
 * 
 * @params java.awt.Color - setColor
 * @params  - color
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.setColor = function(java.awt.Color, ) {
    throw new NotImplementedException("ImageProcessor.setColor(..)");
}

/**
 * Sets the default fill/draw value.
 * 
 * @params value - int
 * 
 * @author
 */
ImageProcessor.prototype.setColor = function(value) {
    throw new NotImplementedException("ImageProcessor.setColor(..)");
}

/**
 * Sets the default fill/draw value.
 * 
 * @params value - double
 * 
 * @author
 */
ImageProcessor.prototype.setColor = function(value) {
    throw new NotImplementedException("ImageProcessor.setColor(..)");
}

/**
 * Sets the default fill/draw value.
 * 
 * @params double - setValue
 * @params  - value
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.setValue = function(double, ) {
    throw new NotImplementedException("ImageProcessor.setValue(..)");
}

/**
 * Sets the background fill value used by the rotate() and scale() methods.
 * 
 * @params double - setBackgroundValue
 * @params  - value
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.setBackgroundValue = function(double, ) {
    throw new NotImplementedException("ImageProcessor.setBackgroundValue(..)");
}

/**
 * Returns the background fill value.
 * 
 * @params  - getBackgroundValue
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.getBackgroundValue = function() {
    throw new NotImplementedException("ImageProcessor.getBackgroundValue(..)");
}

/**
 * Returns the smallest displayed pixel value.
 * 
 * @params  - getMin
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.getMin = function() {
    throw new NotImplementedException("ImageProcessor.getMin(..)");
}

/**
 * Returns the largest displayed pixel value.
 * 
 * @params  - getMax
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.getMax = function() {
    throw new NotImplementedException("ImageProcessor.getMax(..)");
}

/**
 * This image will be displayed by mapping pixel values in the
 * range min-max to screen values in the range 0-255. For
 * byte images, this mapping is done by updating the LUT. For
 * short and float images, it's done by generating 8-bit AWT
 * images. For RGB images, it's done by changing the pixel values.
 * 
 * @params double - setMinAndMax
 * @params double - min
 * @params  - max
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.setMinAndMax = function(double, double, ) {
    throw new NotImplementedException("ImageProcessor.setMinAndMax(..)");
}

/**
 * For short and float images, recalculates the min and max
 * image values needed to correctly display the image. For
 * ByteProcessors, resets the LUT.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.resetMinAndMax = function() {
    throw new NotImplementedException("ImageProcessor.resetMinAndMax(..)");
}

/**
 * Sets the lower and upper threshold levels. The 'lutUpdate' argument
 * can be RED_LUT, BLACK_AND_WHITE_LUT, OVER_UNDER_LUT or NO_LUT_UPDATE.
 * Thresholding of RGB images is not supported.
 * 
 * @params minThreshold - double
 * @params maxThreshold - double
 * @params lutUpdate - int
 * 
 * @author
 */
ImageProcessor.prototype.setThreshold = function(minThreshold, maxThreshold, lutUpdate) {
    throw new NotImplementedException("ImageProcessor.setThreshold(..)");
}

/**
 * 
 * @params mString - java.lang.String
 * 
 * @author
 */
ImageProcessor.prototype.setAutoThreshold = function(mString) {
    throw new NotImplementedException("ImageProcessor.setAutoThreshold(..)");
}

/**
 * 
 * @params mString - java.lang.String
 * @params darkBackground - boolean
 * @params lutUpdate - int
 * 
 * @author
 */
ImageProcessor.prototype.setAutoThreshold = function(mString, darkBackground, lutUpdate) {
    throw new NotImplementedException("ImageProcessor.setAutoThreshold(..)");
}

/**
 * 
 * @params method - AutoThresholder.Method
 * @params darkBackground - boolean
 * 
 * @author
 */
ImageProcessor.prototype.setAutoThreshold = function(method, darkBackground) {
    throw new NotImplementedException("ImageProcessor.setAutoThreshold(..)");
}

/**
 * 
 * @params method - AutoThresholder.Method
 * @params darkBackground - boolean
 * @params lutUpdate - int
 * 
 * @author
 */
ImageProcessor.prototype.setAutoThreshold = function(method, darkBackground, lutUpdate) {
    throw new NotImplementedException("ImageProcessor.setAutoThreshold(..)");
}

/**
 * Automatically sets the lower and upper threshold levels, where 'method'
 * must be ISODATA or ISODATA2 and 'lutUpdate' must be RED_LUT,
 * BLACK_AND_WHITE_LUT, OVER_UNDER_LUT or NO_LUT_UPDATE.
 * 
 * @params method - int
 * @params lutUpdate - int
 * 
 * @author
 */
ImageProcessor.prototype.setAutoThreshold = function(method, lutUpdate) {
    throw new NotImplementedException("ImageProcessor.setAutoThreshold(..)");
}

/**
 * Disables thresholding.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.resetThreshold = function() {
    throw new NotImplementedException("ImageProcessor.resetThreshold(..)");
}

/**
 * Returns the lower threshold level. Returns NO_THRESHOLD
 * if thresholding is not enabled.
 * 
 * @return double
 * 
 * @author
 */
ImageProcessor.prototype.getMinThreshold = function() {
    throw new NotImplementedException("ImageProcessor.getMinThreshold(..)");
}

/**
 * Returns the upper threshold level.
 * 
 * @return double
 * 
 * @author
 */
ImageProcessor.prototype.getMaxThreshold = function() {
    throw new NotImplementedException("ImageProcessor.getMaxThreshold(..)");
}

/**
 * Returns the LUT update mode, which can be RED_LUT, BLACK_AND_WHITE_LUT, 
 * OVER_UNDER_LUT or NO_LUT_UPDATE.
 * 
 * @return int
 * 
 * @author
 */
ImageProcessor.prototype.getLutUpdateMode = function() {
    throw new NotImplementedException("ImageProcessor.getLutUpdateMode(..)");
}

/**
 * 
 * 
 * @author
 */
ImageProcessor.prototype.setBinaryThreshold = function() {
    throw new NotImplementedException("ImageProcessor.setBinaryThreshold(..)");
}

/**
 * Resets the threshold if minThreshold=maxThreshold and lutUpdateMode=NO_LUT_UPDATE. 
 * This removes the invisible threshold set by the MakeBinary and Convert to Mask commands.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.resetBinaryThreshold = function() {
    throw new NotImplementedException("ImageProcessor.resetBinaryThreshold(..)");
}

/**
 * Defines a rectangular region of interest and sets the mask 
 * to null if this ROI is not the same size as the previous one.
 * 
 * @params roi - java.awt.Rectangle
 * 
 * @author
 */
ImageProcessor.prototype.setRoi = function(roi) {
    throw new NotImplementedException("ImageProcessor.setRoi(..)");
}

/**
 * Defines a rectangular region of interest and sets the mask to 
 * null if this ROI is not the same size as the previous one.
 * 
 * @params x - int
 * @params y - int
 * @params rwidth - int
 * @params rheight - int
 * 
 * @author
 */
ImageProcessor.prototype.setRoi = function(x, y, rwidth, rheight) {
    throw new NotImplementedException("ImageProcessor.setRoi(..)");
}

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
 * @params roi - Roi
 * 
 * @author
 */
ImageProcessor.prototype.setRoi = function(roi) {
    throw new NotImplementedException("ImageProcessor.setRoi(..)");
}

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
 * @params roi - java.awt.Polygon
 * 
 * @author
 */
ImageProcessor.prototype.setRoi = function(roi) {
    throw new NotImplementedException("ImageProcessor.setRoi(..)");
}

/**
 * Sets the ROI (Region of Interest) and clipping rectangle to the entire image.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.resetRoi = function() {
    throw new NotImplementedException("ImageProcessor.resetRoi(..)");
}

/**
 * Returns a Rectangle that represents the current
 * region of interest.
 * 
 * @return java.awt.Rectangle
 * 
 * @author
 */
ImageProcessor.prototype.getRoi = function() {
    throw new NotImplementedException("ImageProcessor.getRoi(..)");
}

/**
 * Defines a byte mask that limits processing to an
 * irregular ROI. Background pixels in the mask have
 * a value of zero.
 * 
 * @params mask - ImageProcessor
 * 
 * @author
 */
ImageProcessor.prototype.setMask = function(mask) {
    throw new NotImplementedException("ImageProcessor.setMask(..)");
}

/**
 * For images with irregular ROIs, returns a mask, otherwise, 
 * returns null. Pixels outside the mask have a value of zero.
 * 
 * @return ImageProcessor
 * 
 * @author
 */
ImageProcessor.prototype.getMask = function() {
    throw new NotImplementedException("ImageProcessor.getMask(..)");
}

/**
 * Returns a reference to the mask pixel array, or null if there is no mask.
 * 
 * @return byte[]
 * 
 * @author
 */
ImageProcessor.prototype.getMaskArray = function() {
    throw new NotImplementedException("ImageProcessor.getMaskArray(..)");
}

/**
 * Assigns a progress bar to this processor. Set 'pb' to
 * null to disable the progress bar.
 * 
 * @params pb - ProgressBar
 * 
 * @author
 */
ImageProcessor.prototype.setProgressBar = function(pb) {
    throw new NotImplementedException("ImageProcessor.setProgressBar(..)");
}

/**
 * This method has been replaced by setInterpolationMethod().
 * 
 * @params interpolate - boolean
 * 
 * @author
 */
ImageProcessor.prototype.setInterpolate = function(interpolate) {
    throw new NotImplementedException("ImageProcessor.setInterpolate(..)");
}

/**
 * Use this method to set the interpolation method (NONE, 
 * BILINEAR or BICUBIC) used by scale(), resize() and rotate().
 * 
 * @params method - int
 * 
 * @author
 */
ImageProcessor.prototype.setInterpolationMethod = function(method) {
    throw new NotImplementedException("ImageProcessor.setInterpolationMethod(..)");
}

/**
 * Returns the current interpolation method (NONE, BILINEAR or BICUBIC).
 * 
 * @return int
 * 
 * @author
 */
ImageProcessor.prototype.getInterpolationMethod = function() {
    throw new NotImplementedException("ImageProcessor.getInterpolationMethod(..)");
}

/**
 * 
 * @return java.lang.String[]
 * 
 * @author
 */
ImageProcessor.prototype.getInterpolationMethods = function() {
    throw new NotImplementedException("ImageProcessor.getInterpolationMethods(..)");
}

/**
 * Returns the value of the interpolate field.
 * 
 * @return boolean
 * 
 * @author
 */
ImageProcessor.prototype.getInterpolate = function() {
    throw new NotImplementedException("ImageProcessor.getInterpolate(..)");
}

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;
 * 
 * @return boolean
 * 
 * @author
 */
ImageProcessor.prototype.isKillable = function() {
    throw new NotImplementedException("ImageProcessor.isKillable(..)");
}

/**
 * Returns an array containing the pixel values along the
 * line starting at (x1,y1) and ending at (x2,y2). For byte
 * and short images, returns calibrated values if a calibration
 * table has been set using setCalibrationTable().
 * 
 * @params x1 - double
 * @params y1 - double
 * @params x2 - double
 * @params y2 - double
 * @return double[]
 * 
 * @author
 */
ImageProcessor.prototype.getLine = function(x1, y1, x2, y2) {
    throw new NotImplementedException("ImageProcessor.getLine(..)");
}

/**
 * Returns the pixel values along the horizontal line starting at (x,y).
 * 
 * @params x - int
 * @params y - int
 * @params data - int[]
 * @params length - int
 * 
 * @author
 */
ImageProcessor.prototype.getRow = function(x, y, data, length) {
    throw new NotImplementedException("ImageProcessor.getRow(..)");
}

/**
 * Returns the pixel values along the horizontal line starting at (x,y).
 * 
 * @params x - int
 * @params y - int
 * @params data - float[]
 * @params length - int
 * @return float[]
 * 
 * @author
 */
ImageProcessor.prototype.getRow = function(x, y, data, length) {
    throw new NotImplementedException("ImageProcessor.getRow(..)");
}

/**
 * Returns the pixel values down the column starting at (x,y).
 * 
 * @params x - int
 * @params y - int
 * @params data - int[]
 * @params length - int
 * 
 * @author
 */
ImageProcessor.prototype.getColumn = function(x, y, data, length) {
    throw new NotImplementedException("ImageProcessor.getColumn(..)");
}

/**
 * Inserts the pixels contained in 'data' into a 
 * horizontal line starting at (x,y).
 * 
 * @params x - int
 * @params y - int
 * @params data - int[]
 * @params length - int
 * 
 * @author
 */
ImageProcessor.prototype.putRow = function(x, y, data, length) {
    throw new NotImplementedException("ImageProcessor.putRow(..)");
}

/**
 * Inserts the pixels contained in 'data' into a 
 * horizontal line starting at (x,y).
 * 
 * @params x - int
 * @params y - int
 * @params data - float[]
 * @params length - int
 * 
 * @author
 */
ImageProcessor.prototype.putRow = function(x, y, data, length) {
    throw new NotImplementedException("ImageProcessor.putRow(..)");
}

/**
 * Inserts the pixels contained in 'data' into a 
 * column starting at (x,y).
 * 
 * @params x - int
 * @params y - int
 * @params data - int[]
 * @params length - int
 * 
 * @author
 */
ImageProcessor.prototype.putColumn = function(x, y, data, length) {
    throw new NotImplementedException("ImageProcessor.putColumn(..)");
}

/**
 * Sets the current drawing location.
 * 
 * @params x - int
 * @params y - int
 * 
 * @author
 */
ImageProcessor.prototype.moveTo = function(x, y) {
    throw new NotImplementedException("ImageProcessor.moveTo(..)");
}

/**
 * Sets the line width used by lineTo() and drawDot().
 * 
 * @params width - int
 * 
 * @author
 */
ImageProcessor.prototype.setLineWidth = function(width) {
    throw new NotImplementedException("ImageProcessor.setLineWidth(..)");
}

/**
 * Returns the current line width.
 * 
 * @return int
 * 
 * @author
 */
ImageProcessor.prototype.getLineWidth = function() {
    throw new NotImplementedException("ImageProcessor.getLineWidth(..)");
}

/**
 * Draws a line from the current drawing location to (x2,y2).
 * 
 * @params x2 - int
 * @params y2 - int
 * 
 * @author
 */
ImageProcessor.prototype.lineTo = function(x2, y2) {
    throw new NotImplementedException("ImageProcessor.lineTo(..)");
}

/**
 * Draws a line from (x1,y1) to (x2,y2).
 * 
 * @params x1 - int
 * @params y1 - int
 * @params x2 - int
 * @params y2 - int
 * 
 * @author
 */
ImageProcessor.prototype.drawLine = function(x1, y1, x2, y2) {
    throw new NotImplementedException("ImageProcessor.drawLine(..)");
}

/**
 * 
 * @params x1 - int
 * @params y1 - int
 * @params x2 - int
 * @params y2 - int
 * 
 * @author
 */
ImageProcessor.prototype.drawLine4 = function(x1, y1, x2, y2) {
    throw new NotImplementedException("ImageProcessor.drawLine4(..)");
}

/**
 * Draws a rectangle.
 * 
 * @params x - int
 * @params y - int
 * @params width - int
 * @params height - int
 * 
 * @author
 */
ImageProcessor.prototype.drawRect = function(x, y, width, height) {
    throw new NotImplementedException("ImageProcessor.drawRect(..)");
}

/**
 * Draws an elliptical shape.
 * 
 * @params x - int
 * @params y - int
 * @params width - int
 * @params height - int
 * 
 * @author
 */
ImageProcessor.prototype.drawOval = function(x, y, width, height) {
    throw new NotImplementedException("ImageProcessor.drawOval(..)");
}

/**
 * Fills an elliptical shape.
 * 
 * @params x - int
 * @params y - int
 * @params width - int
 * @params height - int
 * 
 * @author
 */
ImageProcessor.prototype.fillOval = function(x, y, width, height) {
    throw new NotImplementedException("ImageProcessor.fillOval(..)");
}

/**
 * Draws a polygon.
 * 
 * @params p - java.awt.Polygon
 * 
 * @author
 */
ImageProcessor.prototype.drawPolygon = function(p) {
    throw new NotImplementedException("ImageProcessor.drawPolygon(..)");
}

/**
 * Fills a polygon.
 * 
 * @params p - java.awt.Polygon
 * 
 * @author
 */
ImageProcessor.prototype.fillPolygon = function(p) {
    throw new NotImplementedException("ImageProcessor.fillPolygon(..)");
}

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;
 * 
 * @params x - int
 * @params y - int
 * 
 * @author
 */
ImageProcessor.prototype.drawDot2 = function(x, y) {
    throw new NotImplementedException("ImageProcessor.drawDot2(..)");
}

/**
 * Draws a dot using the current line width and fill/draw value.
 * 
 * @params xcenter - int
 * @params ycenter - int
 * 
 * @author
 */
ImageProcessor.prototype.drawDot = function(xcenter, ycenter) {
    throw new NotImplementedException("ImageProcessor.drawDot(..)");
}

/**
 * Draws a string at the current location using the current fill/draw value.
 * Draws multiple lines if the string contains newline characters.
 * 
 * @params s - java.lang.String
 * 
 * @author
 */
ImageProcessor.prototype.drawString = function(s) {
    throw new NotImplementedException("ImageProcessor.drawString(..)");
}

/**
 * Draws a string at the specified location using the current fill/draw value.
 * 
 * @params s - java.lang.String
 * @params x - int
 * @params y - int
 * 
 * @author
 */
ImageProcessor.prototype.drawString = function(s, x, y) {
    throw new NotImplementedException("ImageProcessor.drawString(..)");
}

/**
 * Draws a string at the specified location with a filled background.
 * A JavaScript example is available at
 * http://imagej.nih.gov/ij/macros/js/DrawTextWithBackground.js
 * 
 * @params s - java.lang.String
 * @params x - int
 * @params y - int
 * @params background - java.awt.Color
 * 
 * @author
 */
ImageProcessor.prototype.drawString = function(s, x, y, background) {
    throw new NotImplementedException("ImageProcessor.drawString(..)");
}

/**
 * Sets the justification used by drawString(), where <code>justification</code>
 * is CENTER_JUSTIFY, RIGHT_JUSTIFY or LEFT_JUSTIFY. The default is LEFT_JUSTIFY.
 * 
 * @params justification - int
 * 
 * @author
 */
ImageProcessor.prototype.setJustification = function(justification) {
    throw new NotImplementedException("ImageProcessor.setJustification(..)");
}

/**
 * Sets the font used by drawString().
 * 
 * @params font - java.awt.Font
 * 
 * @author
 */
ImageProcessor.prototype.setFont = function(font) {
    throw new NotImplementedException("ImageProcessor.setFont(..)");
}

/**
 * Specifies whether or not text is drawn using antialiasing. Antialiased
 * test requires an 8 bit or RGB image. Antialiasing does not
 * work with 8-bit images that are not using 0-255 display range.
 * 
 * @params antialiasedText - boolean
 * 
 * @author
 */
ImageProcessor.prototype.setAntialiasedText = function(antialiasedText) {
    throw new NotImplementedException("ImageProcessor.setAntialiasedText(..)");
}

/**
 * Returns the width in pixels of the specified string.
 * 
 * @params s - java.lang.String
 * @return int
 * 
 * @author
 */
ImageProcessor.prototype.getStringWidth = function(s) {
    throw new NotImplementedException("ImageProcessor.getStringWidth(..)");
}

/**
 * Returns the current font.
 * 
 * @return java.awt.Font
 * 
 * @author
 */
ImageProcessor.prototype.getFont = function() {
    throw new NotImplementedException("ImageProcessor.getFont(..)");
}

/**
 * Returns the current FontMetrics.
 * 
 * @return java.awt.FontMetrics
 * 
 * @author
 */
ImageProcessor.prototype.getFontMetrics = function() {
    throw new NotImplementedException("ImageProcessor.getFontMetrics(..)");
}

/**
 * Replaces each pixel with the 3x3 neighborhood mean.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.smooth = function() {
    throw new NotImplementedException("ImageProcessor.smooth(..)");
}

/**
 * Sharpens the image or ROI using a 3x3 convolution kernel.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.sharpen = function() {
    throw new NotImplementedException("ImageProcessor.sharpen(..)");
}

/**
 * Finds edges in the image or ROI using a Sobel operator.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.findEdges = function() {
    throw new NotImplementedException("ImageProcessor.findEdges(..)");
}

/**
 * Flips the image or ROI vertically.
 * 
 * @params  - flipVertical
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.flipVertical = function() {
    throw new NotImplementedException("ImageProcessor.flipVertical(..)");
}

/**
 * Flips the image or ROI horizontally.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.flipHorizontal = function() {
    throw new NotImplementedException("ImageProcessor.flipHorizontal(..)");
}

/**
 * Rotates the entire image 90 degrees clockwise. Returns
 * a new ImageProcessor that represents the rotated image.
 * 
 * @return ImageProcessor
 * 
 * @author
 */
ImageProcessor.prototype.rotateRight = function() {
    throw new NotImplementedException("ImageProcessor.rotateRight(..)");
}

/**
 * Rotates the entire image 90 degrees counter-clockwise. Returns
 * a new ImageProcessor that represents the rotated image.
 * 
 * @return ImageProcessor
 * 
 * @author
 */
ImageProcessor.prototype.rotateLeft = function() {
    throw new NotImplementedException("ImageProcessor.rotateLeft(..)");
}

/**
 * Inserts the image contained in 'ip' at (xloc, yloc).
 * 
 * @params ip - ImageProcessor
 * @params xloc - int
 * @params yloc - int
 * 
 * @author
 */
ImageProcessor.prototype.insert = function(ip, xloc, yloc) {
    throw new NotImplementedException("ImageProcessor.insert(..)");
}

/**
 * Returns a string containing information about this ImageProcessor.
 * 
 * @return java.lang.String
 * 
 * @author
 */
ImageProcessor.prototype.toString = function() {
    throw new NotImplementedException("ImageProcessor.toString(..)");
}

/**
 * Fills the image or ROI bounding rectangle with the current fill/draw value. Use
 * fill(Roi) or fill(ip.getMask()) to fill non-rectangular selections.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.fill = function() {
    throw new NotImplementedException("ImageProcessor.fill(..)");
}

/**
 * Fills pixels that are within the ROI bounding rectangle and part of 
 * the mask (i.e. pixels that have a value=BLACK in the mask array).
 * Use ip.getMask() to acquire the mask. 
 * Throws and IllegalArgumentException if the mask is null or
 * the size of the mask is not the same as the size of the ROI.
 * 
 * @params ImageProcessor - fill
 * @params  - mask
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.fill = function(ImageProcessor, ) {
    throw new NotImplementedException("ImageProcessor.fill(..)");
}

/**
 * Fills the ROI with the current fill/draw value.
 * 
 * @params roi - Roi
 * 
 * @author
 */
ImageProcessor.prototype.fill = function(roi) {
    throw new NotImplementedException("ImageProcessor.fill(..)");
}

/**
 * Fills outside an Roi.
 * 
 * @params roi - Roi
 * 
 * @author
 */
ImageProcessor.prototype.fillOutside = function(roi) {
    throw new NotImplementedException("ImageProcessor.fillOutside(..)");
}

/**
 * Draws the specified ROI on this image using the line
 * width and color defined by ip.setLineWidth() and ip.setColor().
 * 
 * @params roi - Roi
 * 
 * @author
 */
ImageProcessor.prototype.draw = function(roi) {
    throw new NotImplementedException("ImageProcessor.draw(..)");
}

/**
 * Draws the specified ROI on this image using the stroke
 * width, stroke color and fill color defined by roi.setStrokeWidth,
 * roi.setStrokeColor() and roi.setFillColor(). Works best with RGB
 * images. Does not work with 16-bit and float images.
 * Requires Java 1.6.
 * 
 * @params roi - Roi
 * 
 * @author
 */
ImageProcessor.prototype.drawRoi = function(roi) {
    throw new NotImplementedException("ImageProcessor.drawRoi(..)");
}

/**
 * Draws the specified Overlay on this image. Works best
 * with RGB images. Does not work with 16-bit and float 
 * images. Requires Java 1.6.
 * 
 * @params overlay - Overlay
 * 
 * @author
 */
ImageProcessor.prototype.drawOverlay = function(overlay) {
    throw new NotImplementedException("ImageProcessor.drawOverlay(..)");
}

/**
 * Set a lookup table used by getPixelValue(), getLine() and
 * convertToFloat() to calibrate pixel values. The length of
 * the table must be 256 for byte images and 65536 for short
 * images. RGB and float processors do not do calibration.
 * 
 * @params cTable - float[]
 * 
 * @author
 */
ImageProcessor.prototype.setCalibrationTable = function(cTable) {
    throw new NotImplementedException("ImageProcessor.setCalibrationTable(..)");
}

/**
 * Returns the calibration table or null.
 * 
 * @return float[]
 * 
 * @author
 */
ImageProcessor.prototype.getCalibrationTable = function() {
    throw new NotImplementedException("ImageProcessor.getCalibrationTable(..)");
}

/**
 * Set the number of bins to be used for histograms of float images.
 * 
 * @params size - int
 * 
 * @author
 */
ImageProcessor.prototype.setHistogramSize = function(size) {
    throw new NotImplementedException("ImageProcessor.setHistogramSize(..)");
}

/**
 * Returns the number of float image histogram bins. The bin
 * count is fixed at 256 for the other three data types.
 * 
 * @return int
 * 
 * @author
 */
ImageProcessor.prototype.getHistogramSize = function() {
    throw new NotImplementedException("ImageProcessor.getHistogramSize(..)");
}

/**
 * Set the range used for histograms of float images. The image range is
 * used if both <code>histMin</code> and <code>histMax</code> are zero.
 * 
 * @params histMin - double
 * @params histMax - double
 * 
 * @author
 */
ImageProcessor.prototype.setHistogramRange = function(histMin, histMax) {
    throw new NotImplementedException("ImageProcessor.setHistogramRange(..)");
}

/**
 * Returns the minimum histogram value used for histograms of float images.
 * 
 * @return double
 * 
 * @author
 */
ImageProcessor.prototype.getHistogramMin = function() {
    throw new NotImplementedException("ImageProcessor.getHistogramMin(..)");
}

/**
 * Returns the maximum histogram value used for histograms of float images.
 * 
 * @return double
 * 
 * @author
 */
ImageProcessor.prototype.getHistogramMax = function() {
    throw new NotImplementedException("ImageProcessor.getHistogramMax(..)");
}

/**
 * Returns a reference to this image's pixel array. The
 * array type (byte[], short[], float[] or int[]) varies
 * depending on the image type.
 * 
 * @params  - getPixels
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.getPixels = function() {
    throw new NotImplementedException("ImageProcessor.getPixels(..)");
}

/**
 * Returns a copy of the pixel data. Or returns a reference to the
 * snapshot buffer if it is not null and 'snapshotCopyMode' is true.
 * 
 * @params  - getPixelsCopy
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.getPixelsCopy = function() {
    throw new NotImplementedException("ImageProcessor.getPixelsCopy(..)");
}

/**
 * Returns the value of the pixel at (x,y). For RGB images, the
 * argb values are packed in an int. For float images, the
 * the value must be converted using Float.intBitsToFloat().
 * Returns zero if either the x or y coodinate is out of range.
 * 
 * @params int - getPixel
 * @params int - x
 * @params  - y
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.getPixel = function(int, int, ) {
    throw new NotImplementedException("ImageProcessor.getPixel(..)");
}

/**
 * 
 * @return int
 * 
 * @author
 */
ImageProcessor.prototype.getPixelCount = function() {
    throw new NotImplementedException("ImageProcessor.getPixelCount(..)");
}

/**
 * This is a faster version of getPixel() that does not do bounds checking.
 * 
 * @params int - get
 * @params int - x
 * @params  - y
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.get = function(int, int, ) {
    throw new NotImplementedException("ImageProcessor.get(..)");
}

/**
 * 
 * @params int - get
 * @params  - index
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.get = function(int, ) {
    throw new NotImplementedException("ImageProcessor.get(..)");
}

/**
 * This is a faster version of putPixel() that does not clip 
 * out of range values and does not do bounds checking.
 * 
 * @params int - set
 * @params int - x
 * @params int - y
 * @params  - value
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.set = function(int, int, int, ) {
    throw new NotImplementedException("ImageProcessor.set(..)");
}

/**
 * 
 * @params int - set
 * @params int - index
 * @params  - value
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.set = function(int, int, ) {
    throw new NotImplementedException("ImageProcessor.set(..)");
}

/**
 * Returns the value of the pixel at (x,y) as a float. Faster than
 * getPixel() because no bounds checking is done.
 * 
 * @params int - getf
 * @params int - x
 * @params  - y
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.getf = function(int, int, ) {
    throw new NotImplementedException("ImageProcessor.getf(..)");
}

/**
 * 
 * @params int - getf
 * @params  - index
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.getf = function(int, ) {
    throw new NotImplementedException("ImageProcessor.getf(..)");
}

/**
 * Sets the value of the pixel at (x,y) to 'value'. Does no bounds
 * checking or clamping, making it faster than putPixel(). Due to the lack
 * of bounds checking, (x,y) coordinates outside the image may cause
 * an exception. Due to the lack of clamping, values outside the 0-255
 * range (for byte) or 0-65535 range (for short) are not handled correctly.
 * 
 * @params int - setf
 * @params int - x
 * @params float - y
 * @params  - value
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.setf = function(int, int, float, ) {
    throw new NotImplementedException("ImageProcessor.setf(..)");
}

/**
 * 
 * @params int - setf
 * @params float - index
 * @params  - value
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.setf = function(int, float, ) {
    throw new NotImplementedException("ImageProcessor.setf(..)");
}

/**
 * Returns a copy of the pixel data as a 2D int array with
 * dimensions [x=0..width-1][y=0..height-1]. With RGB
 * images, the returned values are in packed ARGB format.
 * With float images, the returned values must be converted
 * to float using Float.intBitsToFloat().
 * 
 * @return int[][]
 * 
 * @author
 */
ImageProcessor.prototype.getIntArray = function() {
    throw new NotImplementedException("ImageProcessor.getIntArray(..)");
}

/**
 * Replaces the pixel data with contents of the specified 2D int array.
 * 
 * @params a - int[][]
 * 
 * @author
 */
ImageProcessor.prototype.setIntArray = function(a) {
    throw new NotImplementedException("ImageProcessor.setIntArray(..)");
}

/**
 * Returns a copy of the pixel data as a 2D float 
 * array with dimensions [x=0..width-1][y=0..height-1].
 * 
 * @return float[][]
 * 
 * @author
 */
ImageProcessor.prototype.getFloatArray = function() {
    throw new NotImplementedException("ImageProcessor.getFloatArray(..)");
}

/**
 * Replaces the pixel data with contents of the specified 2D float array.
 * 
 * @params a - float[][]
 * 
 * @author
 */
ImageProcessor.prototype.setFloatArray = function(a) {
    throw new NotImplementedException("ImageProcessor.setFloatArray(..)");
}

/**
 * Experimental
 * 
 * @params x - int
 * @params y - int
 * @params arr - double[][]
 * 
 * @author
 */
ImageProcessor.prototype.getNeighborhood = function(x, y, arr) {
    throw new NotImplementedException("ImageProcessor.getNeighborhood(..)");
}

/**
 * Returns the samples for the pixel at (x,y) in an int array.
 * RGB pixels have three samples, all others have one.
 * Returns zeros if the the coordinates are not in bounds.
 * iArray is an optional preallocated array.
 * 
 * @params x - int
 * @params y - int
 * @params iArray - int[]
 * @return int[]
 * 
 * @author
 */
ImageProcessor.prototype.getPixel = function(x, y, iArray) {
    throw new NotImplementedException("ImageProcessor.getPixel(..)");
}

/**
 * Sets a pixel in the image using an int array of samples.
 * RGB pixels have three samples, all others have one.
 * 
 * @params x - int
 * @params y - int
 * @params iArray - int[]
 * 
 * @author
 */
ImageProcessor.prototype.putPixel = function(x, y, iArray) {
    throw new NotImplementedException("ImageProcessor.putPixel(..)");
}

/**
 * Uses the current interpolation method (bilinear or bicubic)
 * to find the pixel value at real coordinates (x,y).
 * 
 * @params double - getInterpolatedPixel
 * @params double - x
 * @params  - y
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.getInterpolatedPixel = function(double, double, ) {
    throw new NotImplementedException("ImageProcessor.getInterpolatedPixel(..)");
}

/**
 * Uses the current interpolation method to find the pixel value at real coordinates (x,y).
 * For RGB images, the argb values are packed in an int. For float images,
 * the value must be converted using Float.intBitsToFloat(). Returns zero
 * if the (x, y) is not inside the image.
 * 
 * @params double - getPixelInterpolated
 * @params double - x
 * @params  - y
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.getPixelInterpolated = function(double, double, ) {
    throw new NotImplementedException("ImageProcessor.getPixelInterpolated(..)");
}

/**
 * Uses bilinear interpolation to find the pixel value at real coordinates (x,y). 
 * Returns zero if the (x, y) is not inside the image.
 * 
 * @params double - getInterpolatedValue
 * @params double - x
 * @params  - y
 * @return final
 * 
 * @author
 */
ImageProcessor.prototype.getInterpolatedValue = function(double, double, ) {
    throw new NotImplementedException("ImageProcessor.getInterpolatedValue(..)");
}

/**
 * This method is from Chapter 16 of "Digital Image Processing:
 * An Algorithmic Introduction Using Java" by Burger and Burge
 * (http://www.imagingbook.com/).
 * 
 * @params x0 - double
 * @params y0 - double
 * @params ip2 - ImageProcessor
 * @return double
 * 
 * @author
 */
ImageProcessor.prototype.getBicubicInterpolatedPixel = function(x0, y0, ip2) {
    throw new NotImplementedException("ImageProcessor.getBicubicInterpolatedPixel(..)");
}

/**
 * 
 * @params double - cubic
 * @params  - x
 * @return final
 * 
 * @author
 */
ImageProcessor.prototype.cubic = function(double, ) {
    throw new NotImplementedException("ImageProcessor.cubic(..)");
}

/**
 * Stores the specified value at (x,y). Does
 * nothing if (x,y) is outside the image boundary.
 * For 8-bit and 16-bit images, out of range values
 * are clamped. For RGB images, the
 * argb values are packed in 'value'. For float images,
 * 'value' is expected to be a float converted to an int
 * using Float.floatToIntBits().
 * 
 * @params int - putPixel
 * @params int - x
 * @params int - y
 * @params  - value
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.putPixel = function(int, int, int, ) {
    throw new NotImplementedException("ImageProcessor.putPixel(..)");
}

/**
 * Returns the value of the pixel at (x,y). For byte and short
 * images, returns a calibrated value if a calibration table
 * has been set using setCalibraionTable(). For RGB images,
 * returns the luminance value.
 * 
 * @params int - getPixelValue
 * @params int - x
 * @params  - y
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.getPixelValue = function(int, int, ) {
    throw new NotImplementedException("ImageProcessor.getPixelValue(..)");
}

/**
 * Stores the specified value at (x,y).
 * 
 * @params int - putPixelValue
 * @params int - x
 * @params double - y
 * @params  - value
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.putPixelValue = function(int, int, double, ) {
    throw new NotImplementedException("ImageProcessor.putPixelValue(..)");
}

/**
 * Sets the pixel at (x,y) to the current fill/draw value.
 * 
 * @params int - drawPixel
 * @params int - x
 * @params  - y
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.drawPixel = function(int, int, ) {
    throw new NotImplementedException("ImageProcessor.drawPixel(..)");
}

/**
 * Sets a new pixel array for the image. The length of the array must be equal to width*height.
 * Use setSnapshotPixels(null) to clear the snapshot buffer.
 * 
 * @params java.lang.Object - setPixels
 * @params  - pixels
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.setPixels = function(java.lang.Object, ) {
    throw new NotImplementedException("ImageProcessor.setPixels(..)");
}

/**
 * Copies the image contained in 'ip' to (xloc, yloc) using one of
 * the transfer modes defined in the Blitter interface.
 * 
 * @params ImageProcessor - copyBits
 * @params int - ip
 * @params int - xloc
 * @params int - yloc
 * @params  - mode
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.copyBits = function(ImageProcessor, int, int, int, ) {
    throw new NotImplementedException("ImageProcessor.copyBits(..)");
}

/**
 * Transforms the image or ROI using a lookup table. The
 * length of the table must be 256 for byte images and 
 * 65536 for short images. RGB and float images are not
 * supported.
 * 
 * @params int[] - applyTable
 * @params  - lut
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.applyTable = function(int[], ) {
    throw new NotImplementedException("ImageProcessor.applyTable(..)");
}

/**
 * Inverts the image or ROI.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.invert = function() {
    throw new NotImplementedException("ImageProcessor.invert(..)");
}

/**
 * Adds 'value' to each pixel in the image or ROI.
 * 
 * @params value - int
 * 
 * @author
 */
ImageProcessor.prototype.add = function(value) {
    throw new NotImplementedException("ImageProcessor.add(..)");
}

/**
 * Adds 'value' to each pixel in the image or ROI.
 * 
 * @params value - double
 * 
 * @author
 */
ImageProcessor.prototype.add = function(value) {
    throw new NotImplementedException("ImageProcessor.add(..)");
}

/**
 * Subtracts 'value' from each pixel in the image or ROI.
 * 
 * @params value - double
 * 
 * @author
 */
ImageProcessor.prototype.subtract = function(value) {
    throw new NotImplementedException("ImageProcessor.subtract(..)");
}

/**
 * Multiplies each pixel in the image or ROI by 'value'.
 * 
 * @params value - double
 * 
 * @author
 */
ImageProcessor.prototype.multiply = function(value) {
    throw new NotImplementedException("ImageProcessor.multiply(..)");
}

/**
 * Assigns 'value' to each pixel in the image or ROI.
 * 
 * @params value - double
 * 
 * @author
 */
ImageProcessor.prototype.set = function(value) {
    throw new NotImplementedException("ImageProcessor.set(..)");
}

/**
 * Binary AND of each pixel in the image or ROI with 'value'.
 * 
 * @params value - int
 * 
 * @author
 */
ImageProcessor.prototype.and = function(value) {
    throw new NotImplementedException("ImageProcessor.and(..)");
}

/**
 * Binary OR of each pixel in the image or ROI with 'value'.
 * 
 * @params value - int
 * 
 * @author
 */
ImageProcessor.prototype.or = function(value) {
    throw new NotImplementedException("ImageProcessor.or(..)");
}

/**
 * Binary exclusive OR of each pixel in the image or ROI with 'value'.
 * 
 * @params value - int
 * 
 * @author
 */
ImageProcessor.prototype.xor = function(value) {
    throw new NotImplementedException("ImageProcessor.xor(..)");
}

/**
 * Performs gamma correction of the image or ROI.
 * 
 * @params value - double
 * 
 * @author
 */
ImageProcessor.prototype.gamma = function(value) {
    throw new NotImplementedException("ImageProcessor.gamma(..)");
}

/**
 * Does a natural logarithmic (base e) transform of the image or ROI.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.log = function() {
    throw new NotImplementedException("ImageProcessor.log(..)");
}

/**
 * Does a natural logarithmic (base e) transform of the image or ROI.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.ln = function() {
    throw new NotImplementedException("ImageProcessor.ln(..)");
}

/**
 * Performs a exponential transform on the image or ROI.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.exp = function() {
    throw new NotImplementedException("ImageProcessor.exp(..)");
}

/**
 * Performs a square transform on the image or ROI.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.sqr = function() {
    throw new NotImplementedException("ImageProcessor.sqr(..)");
}

/**
 * Performs a square root transform on the image or ROI.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.sqrt = function() {
    throw new NotImplementedException("ImageProcessor.sqrt(..)");
}

/**
 * If this is a 32-bit or signed 16-bit image, performs an 
 * absolute value transform, otherwise does nothing.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.abs = function() {
    throw new NotImplementedException("ImageProcessor.abs(..)");
}

/**
 * Pixels less than 'value' are set to 'value'.
 * 
 * @params value - double
 * 
 * @author
 */
ImageProcessor.prototype.min = function(value) {
    throw new NotImplementedException("ImageProcessor.min(..)");
}

/**
 * Pixels greater than 'value' are set to 'value'.
 * 
 * @params value - double
 * 
 * @author
 */
ImageProcessor.prototype.max = function(value) {
    throw new NotImplementedException("ImageProcessor.max(..)");
}

/**
 * Returns a copy of this image is the form of an AWT Image.
 * 
 * @params  - createImage
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.createImage = function() {
    throw new NotImplementedException("ImageProcessor.createImage(..)");
}

/**
 * Returns this image as a BufferedImage.
 * 
 * @return java.awt.image.BufferedImage
 * 
 * @author
 */
ImageProcessor.prototype.getBufferedImage = function() {
    throw new NotImplementedException("ImageProcessor.getBufferedImage(..)");
}

/**
 * Returns a new, blank processor with the specified width and height.
 * 
 * @params int - createProcessor
 * @params int - width
 * @params  - height
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.createProcessor = function(int, int, ) {
    throw new NotImplementedException("ImageProcessor.createProcessor(..)");
}

/**
 * Makes a copy of this image's pixel data that can be 
 * later restored using reset() or reset(mask).
 * 
 * @params  - snapshot
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.snapshot = function() {
    throw new NotImplementedException("ImageProcessor.snapshot(..)");
}

/**
 * Restores the pixel data from the snapshot (undo) buffer.
 * 
 * @params  - reset
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.reset = function() {
    throw new NotImplementedException("ImageProcessor.reset(..)");
}

/**
 * Swaps the pixel and snapshot (undo) buffers.
 * 
 * @params  - swapPixelArrays
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.swapPixelArrays = function() {
    throw new NotImplementedException("ImageProcessor.swapPixelArrays(..)");
}

/**
 * Restores pixels from the snapshot buffer that are 
 * within the rectangular roi but not part of the mask.
 * 
 * @params ImageProcessor - reset
 * @params  - mask
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.reset = function(ImageProcessor, ) {
    throw new NotImplementedException("ImageProcessor.reset(..)");
}

/**
 * Sets a new pixel array for the snapshot (undo) buffer.
 * 
 * @params java.lang.Object - setSnapshotPixels
 * @params  - pixels
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.setSnapshotPixels = function(java.lang.Object, ) {
    throw new NotImplementedException("ImageProcessor.setSnapshotPixels(..)");
}

/**
 * Returns a reference to the snapshot (undo) buffer, or null.
 * 
 * @params  - getSnapshotPixels
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.getSnapshotPixels = function() {
    throw new NotImplementedException("ImageProcessor.getSnapshotPixels(..)");
}

/**
 * Convolves the image or ROI with the specified
 * 3x3 integer convolution kernel.
 * 
 * @params int[] - convolve3x3
 * @params  - kernel
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.convolve3x3 = function(int[], ) {
    throw new NotImplementedException("ImageProcessor.convolve3x3(..)");
}

/**
 * A 3x3 filter operation, where the argument (BLUR_MORE, FIND_EDGES, 
 * MEDIAN_FILTER, MIN or MAX) determines the filter type.
 * 
 * @params int - filter
 * @params  - type
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.filter = function(int, ) {
    throw new NotImplementedException("ImageProcessor.filter(..)");
}

/**
 * A 3x3 median filter. Requires 8-bit or RGB image.
 * 
 * @params  - medianFilter
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.medianFilter = function() {
    throw new NotImplementedException("ImageProcessor.medianFilter(..)");
}

/**
 * Adds pseudorandom, Gaussian ("normally") distributed values, with
 * mean 0.0 and the specified standard deviation, to this image or ROI.
 * 
 * @params double - noise
 * @params  - standardDeviation
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.noise = function(double, ) {
    throw new NotImplementedException("ImageProcessor.noise(..)");
}

/**
 * Creates a new processor containing an image
 * that corresponds to the current ROI.
 * 
 * @params  - crop
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.crop = function() {
    throw new NotImplementedException("ImageProcessor.crop(..)");
}

/**
 * Sets pixels less than or equal to level to 0 and all other 
 * pixels to 255. Only works with 8-bit and 16-bit images.
 * 
 * @params int - threshold
 * @params  - level
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.threshold = function(int, ) {
    throw new NotImplementedException("ImageProcessor.threshold(..)");
}

/**
 * Returns a duplicate of this image.
 * 
 * @params  - duplicate
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.duplicate = function() {
    throw new NotImplementedException("ImageProcessor.duplicate(..)");
}

/**
 * Scales the image by the specified factors. Does not
 * change the image size.
 * 
 * @params double - scale
 * @params double - xScale
 * @params  - yScale
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.scale = function(double, double, ) {
    throw new NotImplementedException("ImageProcessor.scale(..)");
}

/**
 * Creates a new ImageProcessor containing a scaled copy of this image or ROI.
 * 
 * @params int - resize
 * @params int - dstWidth
 * @params  - dstHeight
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.resize = function(int, int, ) {
    throw new NotImplementedException("ImageProcessor.resize(..)");
}

/**
 * Creates a new ImageProcessor containing a scaled copy 
 * of this image or ROI, with the aspect ratio maintained.
 * 
 * @params dstWidth - int
 * @return ImageProcessor
 * 
 * @author
 */
ImageProcessor.prototype.resize = function(dstWidth) {
    throw new NotImplementedException("ImageProcessor.resize(..)");
}

/**
 * Creates a new ImageProcessor containing a scaled copy of this image or ROI.
 * 
 * @params dstWidth - int
 * @params dstHeight - int
 * @params useAverging - boolean
 * @return ImageProcessor
 * 
 * @author
 */
ImageProcessor.prototype.resize = function(dstWidth, dstHeight, useAverging) {
    throw new NotImplementedException("ImageProcessor.resize(..)");
}

/**
 * Returns a copy of this image that has been reduced in size using binning.
 * 
 * @params shrinkFactor - int
 * @return ImageProcessor
 * 
 * @author
 */
ImageProcessor.prototype.bin = function(shrinkFactor) {
    throw new NotImplementedException("ImageProcessor.bin(..)");
}

/**
 * Rotates the image or selection 'angle' degrees clockwise.
 * 
 * @params double - rotate
 * @params  - angle
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.rotate = function(double, ) {
    throw new NotImplementedException("ImageProcessor.rotate(..)");
}

/**
 * Moves the image or selection vertically or horizontally by a specified 
 * number of pixels. Positive x values move the image or selection to the 
 * right, negative values move it to the left. Positive y values move the 
 * image or selection down, negative values move it up.
 * 
 * @params xOffset - double
 * @params yOffset - double
 * 
 * @author
 */
ImageProcessor.prototype.translate = function(xOffset, yOffset) {
    throw new NotImplementedException("ImageProcessor.translate(..)");
}

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">replaced by translate(x,y)</span>
 * 
 * @params xOffset - int
 * @params yOffset - int
 * @params eraseBackground - boolean
 * 
 * @author
 */
ImageProcessor.prototype.translate = function(xOffset, yOffset, eraseBackground) {
    throw new NotImplementedException("ImageProcessor.translate(..)");
}

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
 * @params  - getHistogram
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.getHistogram = function() {
    throw new NotImplementedException("ImageProcessor.getHistogram(..)");
}

/**
 * Returns the histogram of the image or ROI, using the specified number of bins.
 * 
 * @params nBins - int
 * @return int[]
 * 
 * @author
 */
ImageProcessor.prototype.getHistogram = function(nBins) {
    throw new NotImplementedException("ImageProcessor.getHistogram(..)");
}

/**
 * Erodes the image or ROI using a 3x3 maximum filter. Requires 8-bit or RGB image.
 * 
 * @params  - erode
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.erode = function() {
    throw new NotImplementedException("ImageProcessor.erode(..)");
}

/**
 * Dilates the image or ROI using a 3x3 minimum filter. Requires 8-bit or RGB image.
 * 
 * @params  - dilate
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.dilate = function() {
    throw new NotImplementedException("ImageProcessor.dilate(..)");
}

/**
 * For 16 and 32 bit processors, set 'lutAnimation' true
 * to have createImage() use the cached 8-bit version
 * of the image.
 * 
 * @params lutAnimation - boolean
 * 
 * @author
 */
ImageProcessor.prototype.setLutAnimation = function(lutAnimation) {
    throw new NotImplementedException("ImageProcessor.setLutAnimation(..)");
}

/**
 * Returns an 8-bit version of this image as a ByteProcessor.
 * 
 * @params doScaling - boolean
 * @return ImageProcessor
 * 
 * @author
 */
ImageProcessor.prototype.convertToByte = function(doScaling) {
    throw new NotImplementedException("ImageProcessor.convertToByte(..)");
}

/**
 * Returns a 16-bit version of this image as a ShortProcessor.
 * 
 * @params doScaling - boolean
 * @return ImageProcessor
 * 
 * @author
 */
ImageProcessor.prototype.convertToShort = function(doScaling) {
    throw new NotImplementedException("ImageProcessor.convertToShort(..)");
}

/**
 * Returns a 32-bit float version of this image as a FloatProcessor. 
 * For byte and short images, converts using a calibration function 
 * if a calibration table has been set using setCalibrationTable().
 * 
 * @return ImageProcessor
 * 
 * @author
 */
ImageProcessor.prototype.convertToFloat = function() {
    throw new NotImplementedException("ImageProcessor.convertToFloat(..)");
}

/**
 * Returns an RGB version of this image as a ColorProcessor.
 * 
 * @return ImageProcessor
 * 
 * @author
 */
ImageProcessor.prototype.convertToRGB = function() {
    throw new NotImplementedException("ImageProcessor.convertToRGB(..)");
}

/**
 * Returns an 8-bit version of this image as a ByteProcessor. 16-bit and 32-bit
 * pixel data are scaled from min-max to 0-255.
 * 
 * @return ByteProcessor
 * 
 * @author
 */
ImageProcessor.prototype.convertToByteProcessor = function() {
    throw new NotImplementedException("ImageProcessor.convertToByteProcessor(..)");
}

/**
 * Returns an 8-bit version of this image as a ByteProcessor. 16-bit and 32-bit
 * pixel data are scaled from min-max to 0-255 if 'scale' is true.
 * 
 * @params scale - boolean
 * @return ByteProcessor
 * 
 * @author
 */
ImageProcessor.prototype.convertToByteProcessor = function(scale) {
    throw new NotImplementedException("ImageProcessor.convertToByteProcessor(..)");
}

/**
 * Returns a 16-bit version of this image as a ShortProcessor. 32-bit
 * pixel data are scaled from min-max to 0-255.
 * 
 * @return ShortProcessor
 * 
 * @author
 */
ImageProcessor.prototype.convertToShortProcessor = function() {
    throw new NotImplementedException("ImageProcessor.convertToShortProcessor(..)");
}

/**
 * Returns a 16-bit version of this image as a ShortProcessor. 32-bit
 * pixel data are scaled from min-max to 0-255 if 'scale' is true.
 * 
 * @params scale - boolean
 * @return ShortProcessor
 * 
 * @author
 */
ImageProcessor.prototype.convertToShortProcessor = function(scale) {
    throw new NotImplementedException("ImageProcessor.convertToShortProcessor(..)");
}

/**
 * Returns a 32-bit float version of this image as a FloatProcessor. 
 * For byte and short images, converts using a calibration function 
 * if a calibration table has been set using setCalibrationTable().
 * 
 * @return FloatProcessor
 * 
 * @author
 */
ImageProcessor.prototype.convertToFloatProcessor = function() {
    throw new NotImplementedException("ImageProcessor.convertToFloatProcessor(..)");
}

/**
 * Returns an RGB version of this image as a ColorProcessor.
 * 
 * @return ColorProcessor
 * 
 * @author
 */
ImageProcessor.prototype.convertToColorProcessor = function() {
    throw new NotImplementedException("ImageProcessor.convertToColorProcessor(..)");
}

/**
 * Performs a convolution operation using the specified kernel. 
 * KernelWidth and kernelHeight must be odd.
 * 
 * @params float[] - convolve
 * @params int - kernel
 * @params int - kernelWidth
 * @params  - kernelHeight
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.convolve = function(float[], int, int, ) {
    throw new NotImplementedException("ImageProcessor.convolve(..)");
}

/**
 * Converts the image to binary using an automatically determined threshold.
 * For byte and short images, converts to binary using an automatically determined
 * threshold. For RGB images, converts each channel to binary. For
 * float images, does nothing.
 * 
 * 
 * @author
 */
ImageProcessor.prototype.autoThreshold = function() {
    throw new NotImplementedException("ImageProcessor.autoThreshold(..)");
}

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
 * @author
 */
ImageProcessor.prototype.getAutoThreshold = function() {
    throw new NotImplementedException("ImageProcessor.getAutoThreshold(..)");
}

/**
 * This is a version of getAutoThreshold() that uses a histogram passed as an argument.
 * 
 * @params histogram - int[]
 * @return int
 * 
 * @author
 */
ImageProcessor.prototype.getAutoThreshold = function(histogram) {
    throw new NotImplementedException("ImageProcessor.getAutoThreshold(..)");
}

/**
 * Updates the clipping rectangle used by lineTo(), drawLine(), drawDot() and drawPixel().
 * The clipping rectangle is reset by passing a null argument or by calling resetRoi().
 * 
 * @params clipRect - java.awt.Rectangle
 * 
 * @author
 */
ImageProcessor.prototype.setClipRect = function(clipRect) {
    throw new NotImplementedException("ImageProcessor.setClipRect(..)");
}

/**
 * Returns the default grayscale IndexColorModel.
 * 
 * @return java.awt.image.IndexColorModel
 * 
 * @author
 */
ImageProcessor.prototype.getDefaultColorModel = function() {
    throw new NotImplementedException("ImageProcessor.getDefaultColorModel(..)");
}

/**
 * The getPixelsCopy() method returns a reference to the
 * snapshot buffer if it is not null and 'snapshotCopyMode' is true.
 * 
 * @params b - boolean
 * 
 * @author
 */
ImageProcessor.prototype.setSnapshotCopyMode = function(b) {
    throw new NotImplementedException("ImageProcessor.setSnapshotCopyMode(..)");
}

/**
 * Returns the number of color channels in the image. The color channels can be
 * accessed by toFloat(channelNumber, fp) and written by setPixels(channelNumber, fp).
 * 
 * @return int
 * 
 * @author
 */
ImageProcessor.prototype.getNChannels = function() {
    throw new NotImplementedException("ImageProcessor.getNChannels(..)");
}

/**
 * Returns a FloatProcessor with the image or one color channel thereof.
 * The roi and mask are also set for the FloatProcessor.
 * 
 * @params int - toFloat
 * @params FloatProcessor - channelNumber
 * @params  - fp
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.toFloat = function(int, FloatProcessor, ) {
    throw new NotImplementedException("ImageProcessor.toFloat(..)");
}

/**
 * Sets the pixels (of one color channel for RGB images) from a FloatProcessor.
 * 
 * @params int - setPixels
 * @params FloatProcessor - channelNumber
 * @params  - fp
 * @return abstract
 * 
 * @author
 */
ImageProcessor.prototype.setPixels = function(int, FloatProcessor, ) {
    throw new NotImplementedException("ImageProcessor.setPixels(..)");
}

/**
 * Returns the minimum possible pixel value.
 * 
 * @return double
 * 
 * @author
 */
ImageProcessor.prototype.minValue = function() {
    throw new NotImplementedException("ImageProcessor.minValue(..)");
}

/**
 * Returns the maximum possible pixel value.
 * 
 * @return double
 * 
 * @author
 */
ImageProcessor.prototype.maxValue = function() {
    throw new NotImplementedException("ImageProcessor.maxValue(..)");
}

/**
 * CompositeImage calls this method to generate an updated color image.
 * 
 * @params rgbPixels - int[]
 * @params channel - int
 * 
 * @author
 */
ImageProcessor.prototype.updateComposite = function(rgbPixels, channel) {
    throw new NotImplementedException("ImageProcessor.updateComposite(..)");
}

/**
 * Sets the upper Over/Under threshold color. Can be called from a macro,
 * e.g., call("ij.process.ImageProcessor.setOverColor", 0,255,255).
 * 
 * @params red - int
 * @params green - int
 * @params blue - int
 * 
 * @author
 */
ImageProcessor.prototype.setOverColor = function(red, green, blue) {
    throw new NotImplementedException("ImageProcessor.setOverColor(..)");
}

/**
 * Set the lower Over/Under thresholding color.
 * 
 * @params red - int
 * @params green - int
 * @params blue - int
 * 
 * @author
 */
ImageProcessor.prototype.setUnderColor = function(red, green, blue) {
    throw new NotImplementedException("ImageProcessor.setUnderColor(..)");
}

/**
 * Returns 'true' if this is a binary image (8-bit-image with only 0 and 255).
 * 
 * @return boolean
 * 
 * @author
 */
ImageProcessor.prototype.isBinary = function() {
    throw new NotImplementedException("ImageProcessor.isBinary(..)");
}

/**
 * Returns 'true' if this is a signed 16-bit image.
 * 
 * @return boolean
 * 
 * @author
 */
ImageProcessor.prototype.isSigned16Bit = function() {
    throw new NotImplementedException("ImageProcessor.isSigned16Bit(..)");
}

/**
 * 
 * @params b - boolean
 * 
 * @author
 */
ImageProcessor.prototype.setUseBicubic = function(b) {
    throw new NotImplementedException("ImageProcessor.setUseBicubic(..)");
}

/**
 * Calculates and returns uncalibrated statistics for this image or ROI,
 * including histogram, area, mean, min and max, standard deviation,
 * and mode. Use the setRoi(Roi) method to limit statistics to
 * a non-rectangular area.
 * 
 * @return ImageStatistics
 * 
 * @author
 */
ImageProcessor.prototype.getStats = function() {
    throw new NotImplementedException("ImageProcessor.getStats(..)");
}

/**
 * This method calculates and returns complete uncalibrated statistics for
 * this image or ROI but it is up to 70 times slower than getStats().
 * 
 * @return ImageStatistics
 * 
 * @author
 */
ImageProcessor.prototype.getStatistics = function() {
    throw new NotImplementedException("ImageProcessor.getStatistics(..)");
}

/**
 * Blurs the image by convolving with a Gaussian function.
 * 
 * @params sigma - double
 * 
 * @author
 */
ImageProcessor.prototype.blurGaussian = function(sigma) {
    throw new NotImplementedException("ImageProcessor.blurGaussian(..)");
}

/**
 * Uses the Process/Math/Macro command to apply macro code to this image.
 * 
 * @params macro - java.lang.String
 * 
 * @author
 */
ImageProcessor.prototype.applyMacro = function(macro) {
    throw new NotImplementedException("ImageProcessor.applyMacro(..)");
}

/**
 * 
 * @return int
 * 
 * @author
 */
ImageProcessor.prototype.getSliceNumber = function() {
    throw new NotImplementedException("ImageProcessor.getSliceNumber(..)");
}

/**
 * PlugInFilterRunner uses this method to set the slice number.
 * 
 * @params slice - int
 * 
 * @author
 */
ImageProcessor.prototype.setSliceNumber = function(slice) {
    throw new NotImplementedException("ImageProcessor.setSliceNumber(..)");
}

/**
 * Returns a shallow copy of this ImageProcessor, where this 
 * image and the copy share pixel data. Use the duplicate() method 
 * to create a copy that does not share the pixel data.
 * 
 * @return java.lang.Object
 * 
 * @author
 */
ImageProcessor.prototype.clone = function() {
    throw new NotImplementedException("ImageProcessor.clone(..)");
}

/**
 * This method is used to display virtual stack overlays.
 * 
 * @params overlay - Overlay
 * 
 * @author
 */
ImageProcessor.prototype.setOverlay = function(overlay) {
    throw new NotImplementedException("ImageProcessor.setOverlay(..)");
}

/**
 * 
 * @return Overlay
 * 
 * @author
 */
ImageProcessor.prototype.getOverlay = function() {
    throw new NotImplementedException("ImageProcessor.getOverlay(..)");
}


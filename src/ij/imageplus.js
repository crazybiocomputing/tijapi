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
 * 
 * 
 * @author
 */

function ImagePlus() {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
}

/**
 * Constructs an ImagePlus from an Image or BufferedImage. The first 
 * argument will be used as the title of the window that displays the image.
 * Throws an IllegalStateException if an error occurs while loading the image.
 * 
 * @params title - java.lang.String
 * @params img - java.awt.Image
 * 
 * @author
 */

function ImagePlus(title, img) {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
}

/**
 * Constructs an ImagePlus from an ImageProcessor.
 * 
 * @params title - java.lang.String
 * @params ip - ImageProcessor
 * 
 * @author
 */

function ImagePlus(title, ip) {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
}

/**
 * Constructs an ImagePlus from a TIFF, BMP, DICOM, FITS,
 * PGM, GIF or JPRG specified by a path or from a TIFF, DICOM,
 * GIF or JPEG specified by a URL.
 * 
 * @params pathOrURL - java.lang.String
 * 
 * @author
 */

function ImagePlus(pathOrURL) {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
}

/**
 * Constructs an ImagePlus from a stack.
 * 
 * @params title - java.lang.String
 * @params stack - ImageStack
 * 
 * @author
 */

function ImagePlus(title, stack) {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
}

/**
 * 8-bit grayscale (unsigned)
 * 
 * @return int
 * 
 * @author
 */
const ImagePlus.GRAY8 = 0;

/**
 * 16-bit grayscale (unsigned)
 * 
 * @return int
 * 
 * @author
 */
const ImagePlus.GRAY16 = 0;

/**
 * 32-bit floating-point grayscale
 * 
 * @return int
 * 
 * @author
 */
const ImagePlus.GRAY32 = 0;

/**
 * 8-bit indexed color
 * 
 * @return int
 * 
 * @author
 */
const ImagePlus.COLOR_256 = 0;

/**
 * 32-bit RGB color
 * 
 * @return int
 * 
 * @author
 */
const ImagePlus.COLOR_RGB = 0;

/**
 * True if any changes have been made to this image.
 * 
 * @return boolean
 * 
 * @author
 */
var ImagePlus.changes = 0;

/**
 * 
 * @return boolean
 * 
 * @author
 */
var ImagePlus.setIJMenuBar = 0;

/**
 * 
 * @return boolean
 * 
 * @author
 */
var ImagePlus.typeSet = 0;

/**
 * Locks the image so other threads can test to see if it
 * is in use. Returns true if the image was successfully locked.
 * Beeps, displays a message in the status bar, and returns
 * false if the image is already locked.
 * 
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.lock = function() {
    throw new NotImplementedException("ImagePlus.lock(..)");
}

/**
 * Similar to lock, but doesn't beep and display an error
 * message if the attempt to lock the image fails.
 * 
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.lockSilently = function() {
    throw new NotImplementedException("ImagePlus.lockSilently(..)");
}

/**
 * Unlocks the image.
 * 
 * 
 * @author
 */
ImagePlus.prototype.unlock = function() {
    throw new NotImplementedException("ImagePlus.unlock(..)");
}

/**
 * Draws the image. If there is an ROI, its
 * outline is also displayed. Does nothing if there
 * is no window associated with this image (i.e. show()
 * has not been called).
 * 
 * 
 * @author
 */
ImagePlus.prototype.draw = function() {
    throw new NotImplementedException("ImagePlus.draw(..)");
}

/**
 * Draws image and roi outline using a clip rect.
 * 
 * @params x - int
 * @params y - int
 * @params width - int
 * @params height - int
 * 
 * @author
 */
ImagePlus.prototype.draw = function(x, y, width, height) {
    throw new NotImplementedException("ImagePlus.draw(..)");
}

/**
 * Updates this image from the pixel data in its 
 * associated ImageProcessor, then displays it. Does
 * nothing if there is no window associated with
 * this image (i.e. show() has not been called).
 * 
 * 
 * @author
 */
ImagePlus.prototype.updateAndDraw = function() {
    throw new NotImplementedException("ImagePlus.updateAndDraw(..)");
}

/**
 * Sets the display mode of composite color images, where 'mode' 
 * should be IJ.COMPOSITE, IJ.COLOR or IJ.GRAYSCALE.
 * 
 * @params mode - int
 * 
 * @author
 */
ImagePlus.prototype.setDisplayMode = function(mode) {
    throw new NotImplementedException("ImagePlus.setDisplayMode(..)");
}

/**
 * Returns the display mode (IJ.COMPOSITE, IJ.COLOR
 * or IJ.GRAYSCALE) if this is a composite color
 * image, or 0 if it not.
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getDisplayMode = function() {
    throw new NotImplementedException("ImagePlus.getDisplayMode(..)");
}

/**
 * Controls which channels in a composite color image are displayed, 
 * where 'channels' is a list of ones and zeros that specify the channels to
 * display. For example, "101" causes channels 1 and 3 to be displayed.
 * 
 * @params channels - java.lang.String
 * 
 * @author
 */
ImagePlus.prototype.setActiveChannels = function(channels) {
    throw new NotImplementedException("ImagePlus.setActiveChannels(..)");
}

/**
 * Updates this image from the pixel data in its 
 * associated ImageProcessor, then displays it.
 * The CompositeImage class overrides this method 
 * to only update the current channel.
 * 
 * 
 * @author
 */
ImagePlus.prototype.updateChannelAndDraw = function() {
    throw new NotImplementedException("ImagePlus.updateChannelAndDraw(..)");
}

/**
 * Returns a reference to the current ImageProcessor. The
 * CompositeImage class overrides this method to return
 * the processor associated with the current channel.
 * 
 * @return ImageProcessor
 * 
 * @author
 */
ImagePlus.prototype.getChannelProcessor = function() {
    throw new NotImplementedException("ImagePlus.getChannelProcessor(..)");
}

/**
 * Returns an array containing the lookup tables used by this image,
 * one per channel, or an empty array if this is an RGB image.
 * 
 * @return LUT[]
 * 
 * @author
 */
ImagePlus.prototype.getLuts = function() {
    throw new NotImplementedException("ImagePlus.getLuts(..)");
}

/**
 * Calls draw to draw the image and also repaints the
 * image window to force the information displayed above
 * the image (dimension, type, size) to be updated.
 * 
 * 
 * @author
 */
ImagePlus.prototype.repaintWindow = function() {
    throw new NotImplementedException("ImagePlus.repaintWindow(..)");
}

/**
 * Calls updateAndDraw to update from the pixel data
 * and draw the image, and also repaints the image
 * window to force the information displayed above
 * the image (dimension, type, size) to be updated.
 * 
 * 
 * @author
 */
ImagePlus.prototype.updateAndRepaintWindow = function() {
    throw new NotImplementedException("ImagePlus.updateAndRepaintWindow(..)");
}

/**
 * ImageCanvas.paint() calls this method when the
 * ImageProcessor has generated new image.
 * 
 * 
 * @author
 */
ImagePlus.prototype.updateImage = function() {
    throw new NotImplementedException("ImagePlus.updateImage(..)");
}

/**
 * Closes the window, if any, that is displaying this image.
 * 
 * 
 * @author
 */
ImagePlus.prototype.hide = function() {
    throw new NotImplementedException("ImagePlus.hide(..)");
}

/**
 * Closes this image and sets the ImageProcessor to null. To avoid the
 * "Save changes?" dialog, first set the public 'changes' variable to false.
 * 
 * 
 * @author
 */
ImagePlus.prototype.close = function() {
    throw new NotImplementedException("ImagePlus.close(..)");
}

/**
 * Opens a window to display this image and clears the status bar.
 * 
 * 
 * @author
 */
ImagePlus.prototype.show = function() {
    throw new NotImplementedException("ImagePlus.show(..)");
}

/**
 * Opens a window to display this image and displays
 * 'statusMessage' in the status bar.
 * 
 * @params statusMessage - java.lang.String
 * 
 * @author
 */
ImagePlus.prototype.show = function(statusMessage) {
    throw new NotImplementedException("ImagePlus.show(..)");
}

/**
 * Called by ImageWindow.windowActivated().
 * 
 * 
 * @author
 */
ImagePlus.prototype.setActivated = function() {
    throw new NotImplementedException("ImagePlus.setActivated(..)");
}

/**
 * Returns this image as a AWT image.
 * 
 * @return java.awt.Image
 * 
 * @author
 */
ImagePlus.prototype.getImage = function() {
    throw new NotImplementedException("ImagePlus.getImage(..)");
}

/**
 * Returns a copy of this image as an 8-bit or RGB BufferedImage.
 * 
 * @return java.awt.image.BufferedImage
 * 
 * @author
 */
ImagePlus.prototype.getBufferedImage = function() {
    throw new NotImplementedException("ImagePlus.getBufferedImage(..)");
}

/**
 * Returns this image's unique numeric ID.
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getID = function() {
    throw new NotImplementedException("ImagePlus.getID(..)");
}

/**
 * Replaces the image, if any, with the one specified. 
 * Throws an IllegalStateException if an error occurs 
 * while loading the image.
 * 
 * @params img - java.awt.Image
 * 
 * @author
 */
ImagePlus.prototype.setImage = function(img) {
    throw new NotImplementedException("ImagePlus.setImage(..)");
}

/**
 * Replaces this image with the specified ImagePlus. May
 * not work as expected if 'imp' is a CompositeImage
 * and this image is not.
 * 
 * @params imp - ImagePlus
 * 
 * @author
 */
ImagePlus.prototype.setImage = function(imp) {
    throw new NotImplementedException("ImagePlus.setImage(..)");
}

/**
 * Replaces the ImageProcessor with the one specified and updates the
 * display. With stacks, the ImageProcessor must be the same type as the
 * other images in the stack and it must be the same width and height.
 * 
 * @params ip - ImageProcessor
 * 
 * @author
 */
ImagePlus.prototype.setProcessor = function(ip) {
    throw new NotImplementedException("ImagePlus.setProcessor(..)");
}

/**
 * Replaces the ImageProcessor with the one specified and updates the display. With
 * stacks, the ImageProcessor must be the same type as other images in the stack and
 * it must be the same width and height. Set 'title' to null to leave the title unchanged.
 * 
 * @params title - java.lang.String
 * @params ip - ImageProcessor
 * 
 * @author
 */
ImagePlus.prototype.setProcessor = function(title, ip) {
    throw new NotImplementedException("ImagePlus.setProcessor(..)");
}

/**
 * Replaces the image with the specified stack and updates the display.
 * 
 * @params stack - ImageStack
 * 
 * @author
 */
ImagePlus.prototype.setStack = function(stack) {
    throw new NotImplementedException("ImagePlus.setStack(..)");
}

/**
 * Replaces the image with the specified stack and updates 
 * the display. Set 'title' to null to leave the title unchanged.
 * 
 * @params title - java.lang.String
 * @params newStack - ImageStack
 * 
 * @author
 */
ImagePlus.prototype.setStack = function(title, newStack) {
    throw new NotImplementedException("ImagePlus.setStack(..)");
}

/**
 * 
 * @params newStack - ImageStack
 * @params channels - int
 * @params slices - int
 * @params frames - int
 * 
 * @author
 */
ImagePlus.prototype.setStack = function(newStack, channels, slices, frames) {
    throw new NotImplementedException("ImagePlus.setStack(..)");
}

/**
 * Saves this image's FileInfo so it can be later
 * retieved using getOriginalFileInfo().
 * 
 * @params fi - FileInfo
 * 
 * @author
 */
ImagePlus.prototype.setFileInfo = function(fi) {
    throw new NotImplementedException("ImagePlus.setFileInfo(..)");
}

/**
 * Returns the ImageWindow that is being used to display
 * this image. Returns null if show() has not be called
 * or the ImageWindow has been closed.
 * 
 * @return ImageWindow
 * 
 * @author
 */
ImagePlus.prototype.getWindow = function() {
    throw new NotImplementedException("ImagePlus.getWindow(..)");
}

/**
 * Returns true if this image is currently being displayed in a window.
 * 
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.isVisible = function() {
    throw new NotImplementedException("ImagePlus.isVisible(..)");
}

/**
 * This method should only be called from an ImageWindow.
 * 
 * @params win - ImageWindow
 * 
 * @author
 */
ImagePlus.prototype.setWindow = function(win) {
    throw new NotImplementedException("ImagePlus.setWindow(..)");
}

/**
 * Returns the ImageCanvas being used to
 * display this image, or null.
 * 
 * @return ImageCanvas
 * 
 * @author
 */
ImagePlus.prototype.getCanvas = function() {
    throw new NotImplementedException("ImagePlus.getCanvas(..)");
}

/**
 * Sets current foreground color.
 * 
 * @params c - java.awt.Color
 * 
 * @author
 */
ImagePlus.prototype.setColor = function(c) {
    throw new NotImplementedException("ImagePlus.setColor(..)");
}

/**
 * 
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.isProcessor = function() {
    throw new NotImplementedException("ImagePlus.isProcessor(..)");
}

/**
 * Returns a reference to the current ImageProcessor. If there
 * is no ImageProcessor, it creates one. Returns null if this
 * ImagePlus contains no ImageProcessor and no AWT Image.
 * Sets the line width to the current line width and sets the
 * calibration table if the image is density calibrated.
 * 
 * @return ImageProcessor
 * 
 * @author
 */
ImagePlus.prototype.getProcessor = function() {
    throw new NotImplementedException("ImagePlus.getProcessor(..)");
}

/**
 * Frees RAM by setting the snapshot (undo) buffer in
 * the current ImageProcessor to null.
 * 
 * 
 * @author
 */
ImagePlus.prototype.trimProcessor = function() {
    throw new NotImplementedException("ImagePlus.trimProcessor(..)");
}

/**
 * For images with irregular ROIs, returns a byte mask, otherwise, returns
 * null. Mask pixels have a non-zero value.
 * 
 * @return ImageProcessor
 * 
 * @author
 */
ImagePlus.prototype.getMask = function() {
    throw new NotImplementedException("ImagePlus.getMask(..)");
}

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
 * @author
 */
ImagePlus.prototype.getStatistics = function() {
    throw new NotImplementedException("ImagePlus.getStatistics(..)");
}

/**
 * This method returns complete calibrated statistics for this image or ROI
 * (with "Limit to threshold"), but it is up to 70 times slower than getStatistics().
 * 
 * @return ImageStatistics
 * 
 * @author
 */
ImagePlus.prototype.getAllStatistics = function() {
    throw new NotImplementedException("ImagePlus.getAllStatistics(..)");
}

/**
 * 
 * @return ImageStatistics
 * 
 * @author
 */
ImagePlus.prototype.getRawStatistics = function() {
    throw new NotImplementedException("ImagePlus.getRawStatistics(..)");
}

/**
 * Returns an ImageStatistics object generated using the
 * specified measurement options.
 * 
 * @params mOptions - int
 * @return ImageStatistics
 * 
 * @author
 */
ImagePlus.prototype.getStatistics = function(mOptions) {
    throw new NotImplementedException("ImagePlus.getStatistics(..)");
}

/**
 * Returns an ImageStatistics object generated using the
 * specified measurement options and histogram bin count. 
 * Note: except for float images, the number of bins
 * is currently fixed at 256.
 * 
 * @params mOptions - int
 * @params nBins - int
 * @return ImageStatistics
 * 
 * @author
 */
ImagePlus.prototype.getStatistics = function(mOptions, nBins) {
    throw new NotImplementedException("ImagePlus.getStatistics(..)");
}

/**
 * Returns an ImageStatistics object generated using the
 * specified measurement options, histogram bin count and histogram range. 
 * Note: for 8-bit and RGB images, the number of bins
 * is fixed at 256 and the histogram range is always 0-255.
 * 
 * @params mOptions - int
 * @params nBins - int
 * @params histMin - double
 * @params histMax - double
 * @return ImageStatistics
 * 
 * @author
 */
ImagePlus.prototype.getStatistics = function(mOptions, nBins, histMin, histMax) {
    throw new NotImplementedException("ImagePlus.getStatistics(..)");
}

/**
 * Returns the image name.
 * 
 * @return java.lang.String
 * 
 * @author
 */
ImagePlus.prototype.getTitle = function() {
    throw new NotImplementedException("ImagePlus.getTitle(..)");
}

/**
 * Returns a shortened version of image name that does not 
 * include spaces or a file name extension.
 * 
 * @return java.lang.String
 * 
 * @author
 */
ImagePlus.prototype.getShortTitle = function() {
    throw new NotImplementedException("ImagePlus.getShortTitle(..)");
}

/**
 * Sets the image name.
 * 
 * @params title - java.lang.String
 * 
 * @author
 */
ImagePlus.prototype.setTitle = function(title) {
    throw new NotImplementedException("ImagePlus.setTitle(..)");
}

/**
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getWidth = function() {
    throw new NotImplementedException("ImagePlus.getWidth(..)");
}

/**
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getHeight = function() {
    throw new NotImplementedException("ImagePlus.getHeight(..)");
}

/**
 * If this is a stack, returns the number of slices, else returns 1.
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getStackSize = function() {
    throw new NotImplementedException("ImagePlus.getStackSize(..)");
}

/**
 * If this is a stack, returns the actual number of images in the stack, else returns 1.
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getImageStackSize = function() {
    throw new NotImplementedException("ImagePlus.getImageStackSize(..)");
}

/**
 * Sets the 3rd, 4th and 5th dimensions, where 
 * <code>nChannels</code>*<code>nSlices</code>*<code>nFrames</code> 
 * must be equal to the stack size.
 * 
 * @params nChannels - int
 * @params nSlices - int
 * @params nFrames - int
 * 
 * @author
 */
ImagePlus.prototype.setDimensions = function(nChannels, nSlices, nFrames) {
    throw new NotImplementedException("ImagePlus.setDimensions(..)");
}

/**
 * Returns 'true' if this image is a hyperstack.
 * 
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.isHyperStack = function() {
    throw new NotImplementedException("ImagePlus.isHyperStack(..)");
}

/**
 * Returns the number of dimensions (2, 3, 4 or 5).
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getNDimensions = function() {
    throw new NotImplementedException("ImagePlus.getNDimensions(..)");
}

/**
 * Returns 'true' if this is a hyperstack currently being displayed in a StackWindow.
 * 
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.isDisplayedHyperStack = function() {
    throw new NotImplementedException("ImagePlus.isDisplayedHyperStack(..)");
}

/**
 * Returns the number of channels.
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getNChannels = function() {
    throw new NotImplementedException("ImagePlus.getNChannels(..)");
}

/**
 * Returns the image depth (number of z-slices).
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getNSlices = function() {
    throw new NotImplementedException("ImagePlus.getNSlices(..)");
}

/**
 * Returns the number of frames (time-points).
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getNFrames = function() {
    throw new NotImplementedException("ImagePlus.getNFrames(..)");
}

/**
 * Returns the dimensions of this image (width, height, nChannels, 
 * nSlices, nFrames) as a 5 element int array.
 * 
 * @return int[]
 * 
 * @author
 */
ImagePlus.prototype.getDimensions = function() {
    throw new NotImplementedException("ImagePlus.getDimensions(..)");
}

/**
 * 
 * @params varify - boolean
 * @return int[]
 * 
 * @author
 */
ImagePlus.prototype.getDimensions = function(varify) {
    throw new NotImplementedException("ImagePlus.getDimensions(..)");
}

/**
 * Returns the current image type (ImagePlus.GRAY8, ImagePlus.GRAY16,
 * ImagePlus.GRAY32, ImagePlus.COLOR_256 or ImagePlus.COLOR_RGB).
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getType = function() {
    throw new NotImplementedException("ImagePlus.getType(..)");
}

/**
 * Returns the bit depth, 8, 16, 24 (RGB) or 32, or 0 if the bit depth 
 * is unknown. RGB images actually use 32 bits per pixel.
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getBitDepth = function() {
    throw new NotImplementedException("ImagePlus.getBitDepth(..)");
}

/**
 * Returns the number of bytes per pixel.
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getBytesPerPixel = function() {
    throw new NotImplementedException("ImagePlus.getBytesPerPixel(..)");
}

/**
 * Returns the string value from the "Info" property string 
 * associated with 'key', or null if the key is not found. 
 * Works with DICOM tags and Bio-Formats metadata.
 * 
 * @params key - java.lang.String
 * @return java.lang.String
 * 
 * @author
 */
ImagePlus.prototype.getStringProperty = function(key) {
    throw new NotImplementedException("ImagePlus.getStringProperty(..)");
}

/**
 * Returns the numeric value from the "Info" property string 
 * associated with 'key', or NaN if the key is not found or the
 * value associated with the key is not numeric. Works with
 * DICOM tags and Bio-Formats metadata.
 * 
 * @params key - java.lang.String
 * @return double
 * 
 * @author
 */
ImagePlus.prototype.getNumericProperty = function(key) {
    throw new NotImplementedException("ImagePlus.getNumericProperty(..)");
}

/**
 * <span class="deprecatedLabel">Deprecated.</span>&nbsp;
 * 
 * @params key - java.lang.String
 * @return java.lang.String
 * 
 * @author
 */
ImagePlus.prototype.getProp = function(key) {
    throw new NotImplementedException("ImagePlus.getProp(..)");
}

/**
 * Returns the "Info" property string, or null if it is not found.
 * 
 * @return java.lang.String
 * 
 * @author
 */
ImagePlus.prototype.getInfoProperty = function() {
    throw new NotImplementedException("ImagePlus.getInfoProperty(..)");
}

/**
 * Returns the property associated with 'key', or null if it is not found.
 * 
 * @params key - java.lang.String
 * @return java.lang.Object
 * 
 * @author
 */
ImagePlus.prototype.getProperty = function(key) {
    throw new NotImplementedException("ImagePlus.getProperty(..)");
}

/**
 * Adds a key-value pair to this image's properties. The key
 * is removed from the properties table if value is null.
 * 
 * @params key - java.lang.String
 * @params value - java.lang.Object
 * 
 * @author
 */
ImagePlus.prototype.setProperty = function(key, value) {
    throw new NotImplementedException("ImagePlus.setProperty(..)");
}

/**
 * Returns this image's Properties. May return null.
 * 
 * @return java.util.Properties
 * 
 * @author
 */
ImagePlus.prototype.getProperties = function() {
    throw new NotImplementedException("ImagePlus.getProperties(..)");
}

/**
 * Creates a LookUpTable object that corresponds to this image.
 * 
 * @return LookUpTable
 * 
 * @author
 */
ImagePlus.prototype.createLut = function() {
    throw new NotImplementedException("ImagePlus.createLut(..)");
}

/**
 * Returns true is this image uses an inverting LUT that 
 * displays zero as white and 255 as black.
 * 
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.isInvertedLut = function() {
    throw new NotImplementedException("ImagePlus.isInvertedLut(..)");
}

/**
 * Returns the pixel value at (x,y) as a 4 element array. Grayscale values
 * are retuned in the first element. RGB values are returned in the first
 * 3 elements. For indexed color images, the RGB values are returned in the
 * first 3 three elements and the index (0-255) is returned in the last.
 * 
 * @params x - int
 * @params y - int
 * @return int[]
 * 
 * @author
 */
ImagePlus.prototype.getPixel = function(x, y) {
    throw new NotImplementedException("ImagePlus.getPixel(..)");
}

/**
 * Returns an empty image stack that has the same
 * width, height and color table as this image.
 * 
 * @return ImageStack
 * 
 * @author
 */
ImagePlus.prototype.createEmptyStack = function() {
    throw new NotImplementedException("ImagePlus.createEmptyStack(..)");
}

/**
 * Returns the image stack. The stack may have only 
 * one slice. After adding or removing slices, call 
 * <code>setStack()</code> to update the image and
 * the window that is displaying it.
 * 
 * @return ImageStack
 * 
 * @author
 */
ImagePlus.prototype.getStack = function() {
    throw new NotImplementedException("ImagePlus.getStack(..)");
}

/**
 * Returns the base image stack.
 * 
 * @return ImageStack
 * 
 * @author
 */
ImagePlus.prototype.getImageStack = function() {
    throw new NotImplementedException("ImagePlus.getImageStack(..)");
}

/**
 * Returns the current stack index (one-based) or 1 if this is a single image.
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getCurrentSlice = function() {
    throw new NotImplementedException("ImagePlus.getCurrentSlice(..)");
}

/**
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getChannel = function() {
    throw new NotImplementedException("ImagePlus.getChannel(..)");
}

/**
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getSlice = function() {
    throw new NotImplementedException("ImagePlus.getSlice(..)");
}

/**
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getFrame = function() {
    throw new NotImplementedException("ImagePlus.getFrame(..)");
}

/**
 * 
 * 
 * @author
 */
ImagePlus.prototype.killStack = function() {
    throw new NotImplementedException("ImagePlus.killStack(..)");
}

/**
 * Sets the current hyperstack position and updates the display,
 * where 'channel', 'slice' and 'frame' are one-based indexes.
 * 
 * @params channel - int
 * @params slice - int
 * @params frame - int
 * 
 * @author
 */
ImagePlus.prototype.setPosition = function(channel, slice, frame) {
    throw new NotImplementedException("ImagePlus.setPosition(..)");
}

/**
 * Sets the current hyperstack position without updating the display,
 * where 'channel', 'slice' and 'frame' are one-based indexes.
 * 
 * @params channel - int
 * @params slice - int
 * @params frame - int
 * 
 * @author
 */
ImagePlus.prototype.setPositionWithoutUpdate = function(channel, slice, frame) {
    throw new NotImplementedException("ImagePlus.setPositionWithoutUpdate(..)");
}

/**
 * Sets the hyperstack channel position (one based).
 * 
 * @params channel - int
 * 
 * @author
 */
ImagePlus.prototype.setC = function(channel) {
    throw new NotImplementedException("ImagePlus.setC(..)");
}

/**
 * Sets the hyperstack slice position (one based).
 * 
 * @params slice - int
 * 
 * @author
 */
ImagePlus.prototype.setZ = function(slice) {
    throw new NotImplementedException("ImagePlus.setZ(..)");
}

/**
 * Sets the hyperstack frame position (one based).
 * 
 * @params frame - int
 * 
 * @author
 */
ImagePlus.prototype.setT = function(frame) {
    throw new NotImplementedException("ImagePlus.setT(..)");
}

/**
 * Returns the current hyperstack channel position.
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getC = function() {
    throw new NotImplementedException("ImagePlus.getC(..)");
}

/**
 * Returns the current hyperstack slice position.
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getZ = function() {
    throw new NotImplementedException("ImagePlus.getZ(..)");
}

/**
 * Returns the current hyperstack frame position.
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getT = function() {
    throw new NotImplementedException("ImagePlus.getT(..)");
}

/**
 * Returns that stack index (one-based) corresponding to the specified position.
 * 
 * @params channel - int
 * @params slice - int
 * @params frame - int
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getStackIndex = function(channel, slice, frame) {
    throw new NotImplementedException("ImagePlus.getStackIndex(..)");
}

/**
 * 
 * 
 * @author
 */
ImagePlus.prototype.resetStack = function() {
    throw new NotImplementedException("ImagePlus.resetStack(..)");
}

/**
 * Set the current hyperstack position based on the stack index 'n' (one-based).
 * 
 * @params n - int
 * 
 * @author
 */
ImagePlus.prototype.setPosition = function(n) {
    throw new NotImplementedException("ImagePlus.setPosition(..)");
}

/**
 * Converts the stack index 'n' (one-based) into a hyperstack position (channel, slice, frame).
 * 
 * @params n - int
 * @return int[]
 * 
 * @author
 */
ImagePlus.prototype.convertIndexToPosition = function(n) {
    throw new NotImplementedException("ImagePlus.convertIndexToPosition(..)");
}

/**
 * Displays the specified stack image, where 1&lt;=n&lt;=stackSize.
 * Does nothing if this image is not a stack.
 * 
 * @params n - int
 * 
 * @author
 */
ImagePlus.prototype.setSlice = function(n) {
    throw new NotImplementedException("ImagePlus.setSlice(..)");
}

/**
 * Displays the specified stack image (1&lt;=n&lt;=stackSize)
 * without updating the display.
 * 
 * @params n - int
 * 
 * @author
 */
ImagePlus.prototype.setSliceWithoutUpdate = function(n) {
    throw new NotImplementedException("ImagePlus.setSliceWithoutUpdate(..)");
}

/**
 * Returns the current selection, or null if there is no selection.
 * 
 * @return Roi
 * 
 * @author
 */
ImagePlus.prototype.getRoi = function() {
    throw new NotImplementedException("ImagePlus.getRoi(..)");
}

/**
 * Assigns the specified ROI to this image and displays it. Any existing
 * ROI is deleted if <code>roi</code> is null or its width or height is zero.
 * 
 * @params newRoi - Roi
 * 
 * @author
 */
ImagePlus.prototype.setRoi = function(newRoi) {
    throw new NotImplementedException("ImagePlus.setRoi(..)");
}

/**
 * Assigns 'newRoi' to this image and displays it if 'updateDisplay' is true.
 * 
 * @params newRoi - Roi
 * @params updateDisplay - boolean
 * 
 * @author
 */
ImagePlus.prototype.setRoi = function(newRoi, updateDisplay) {
    throw new NotImplementedException("ImagePlus.setRoi(..)");
}

/**
 * Creates a rectangular selection.
 * 
 * @params x - int
 * @params y - int
 * @params width - int
 * @params height - int
 * 
 * @author
 */
ImagePlus.prototype.setRoi = function(x, y, width, height) {
    throw new NotImplementedException("ImagePlus.setRoi(..)");
}

/**
 * Creates a rectangular selection.
 * 
 * @params r - java.awt.Rectangle
 * 
 * @author
 */
ImagePlus.prototype.setRoi = function(r) {
    throw new NotImplementedException("ImagePlus.setRoi(..)");
}

/**
 * Starts the process of creating a new selection, where sx and sy are the
 * starting screen coordinates. The selection type is determined by which tool in
 * the tool bar is active. The user interactively sets the selection size and shape.
 * 
 * @params sx - int
 * @params sy - int
 * 
 * @author
 */
ImagePlus.prototype.createNewRoi = function(sx, sy) {
    throw new NotImplementedException("ImagePlus.createNewRoi(..)");
}

/**
 * Deletes the current region of interest. Makes a copy of the ROI
 * so it can be recovered by Edit/Selection/Restore Selection.
 * 
 * 
 * @author
 */
ImagePlus.prototype.deleteRoi = function() {
    throw new NotImplementedException("ImagePlus.deleteRoi(..)");
}

/**
 * Deletes the current region of interest.
 * 
 * 
 * @author
 */
ImagePlus.prototype.killRoi = function() {
    throw new NotImplementedException("ImagePlus.killRoi(..)");
}

/**
 * 
 * 
 * @author
 */
ImagePlus.prototype.saveRoi = function() {
    throw new NotImplementedException("ImagePlus.saveRoi(..)");
}

/**
 * 
 * 
 * @author
 */
ImagePlus.prototype.restoreRoi = function() {
    throw new NotImplementedException("ImagePlus.restoreRoi(..)");
}

/**
 * Implements the File/Revert command.
 * 
 * 
 * @author
 */
ImagePlus.prototype.revert = function() {
    throw new NotImplementedException("ImagePlus.revert(..)");
}

/**
 * Returns a FileInfo object containing information, including the
 * pixel array, needed to save this image. Use getOriginalFileInfo()
 * to get a copy of the FileInfo object used to open the image.
 * 
 * @return FileInfo
 * 
 * @author
 */
ImagePlus.prototype.getFileInfo = function() {
    throw new NotImplementedException("ImagePlus.getFileInfo(..)");
}

/**
 * Returns the FileInfo object that was used to open this image.
 * Returns null for images created using the File/New command.
 * 
 * @return FileInfo
 * 
 * @author
 */
ImagePlus.prototype.getOriginalFileInfo = function() {
    throw new NotImplementedException("ImagePlus.getOriginalFileInfo(..)");
}

/**
 * Used by ImagePlus to monitor loading of images.
 * 
 * @params img - java.awt.Image
 * @params flags - int
 * @params x - int
 * @params y - int
 * @params w - int
 * @params h - int
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.imageUpdate = function(img, flags, x, y, w, h) {
    throw new NotImplementedException("ImagePlus.imageUpdate(..)");
}

/**
 * Sets the ImageProcessor, Roi, AWT Image and stack image
 * arrays to null. Does nothing if the image is locked.
 * 
 * 
 * @author
 */
ImagePlus.prototype.flush = function() {
    throw new NotImplementedException("ImagePlus.flush(..)");
}

/**
 * 
 * @params ignoreFlush - boolean
 * 
 * @author
 */
ImagePlus.prototype.setIgnoreFlush = function(ignoreFlush) {
    throw new NotImplementedException("ImagePlus.setIgnoreFlush(..)");
}

/**
 * Returns a copy of this image or stack, cropped if there is an ROI.
 * 
 * @return ImagePlus
 * 
 * @author
 */
ImagePlus.prototype.duplicate = function() {
    throw new NotImplementedException("ImagePlus.duplicate(..)");
}

/**
 * Returns a copy this image or stack slice, cropped if there is an ROI.
 * 
 * @return ImagePlus
 * 
 * @author
 */
ImagePlus.prototype.crop = function() {
    throw new NotImplementedException("ImagePlus.crop(..)");
}

/**
 * Returns a new ImagePlus with this image's attributes
 * (e.g. spatial scale), but no image.
 * 
 * @return ImagePlus
 * 
 * @author
 */
ImagePlus.prototype.createImagePlus = function() {
    throw new NotImplementedException("ImagePlus.createImagePlus(..)");
}

/**
 * This method has been replaced by IJ.createHyperStack().
 * 
 * @params title - java.lang.String
 * @params channels - int
 * @params slices - int
 * @params frames - int
 * @params bitDepth - int
 * @return ImagePlus
 * 
 * @author
 */
ImagePlus.prototype.createHyperStack = function(title, channels, slices, frames, bitDepth) {
    throw new NotImplementedException("ImagePlus.createHyperStack(..)");
}

/**
 * Copies the calibration of the specified image to this image.
 * 
 * @params imp - ImagePlus
 * 
 * @author
 */
ImagePlus.prototype.copyScale = function(imp) {
    throw new NotImplementedException("ImagePlus.copyScale(..)");
}

/**
 * Copies attributes (name, ID, calibration, path) of the specified image to this image.
 * 
 * @params imp - ImagePlus
 * 
 * @author
 */
ImagePlus.prototype.copyAttributes = function(imp) {
    throw new NotImplementedException("ImagePlus.copyAttributes(..)");
}

/**
 * Calls System.currentTimeMillis() to save the current
 * time so it can be retrieved later using getStartTime() 
 * to calculate the elapsed time of an operation.
 * 
 * 
 * @author
 */
ImagePlus.prototype.startTiming = function() {
    throw new NotImplementedException("ImagePlus.startTiming(..)");
}

/**
 * Returns the time in milliseconds when 
 * startTiming() was last called.
 * 
 * @return long
 * 
 * @author
 */
ImagePlus.prototype.getStartTime = function() {
    throw new NotImplementedException("ImagePlus.getStartTime(..)");
}

/**
 * Returns this image's calibration.
 * 
 * @return Calibration
 * 
 * @author
 */
ImagePlus.prototype.getCalibration = function() {
    throw new NotImplementedException("ImagePlus.getCalibration(..)");
}

/**
 * Sets this image's calibration.
 * 
 * @params cal - Calibration
 * 
 * @author
 */
ImagePlus.prototype.setCalibration = function(cal) {
    throw new NotImplementedException("ImagePlus.setCalibration(..)");
}

/**
 * Sets the system-wide calibration.
 * 
 * @params global - Calibration
 * 
 * @author
 */
ImagePlus.prototype.setGlobalCalibration = function(global) {
    throw new NotImplementedException("ImagePlus.setGlobalCalibration(..)");
}

/**
 * Returns the system-wide calibration, or null.
 * 
 * @return Calibration
 * 
 * @author
 */
ImagePlus.prototype.getGlobalCalibration = function() {
    throw new NotImplementedException("ImagePlus.getGlobalCalibration(..)");
}

/**
 * This is a version of getGlobalCalibration() that can be called from a static context.
 * 
 * @return Calibration
 * 
 * @author
 */
ImagePlus.prototype.getStaticGlobalCalibration = function() {
    throw new NotImplementedException("ImagePlus.getStaticGlobalCalibration(..)");
}

/**
 * Returns this image's local calibration, ignoring 
 * the "Global" calibration flag.
 * 
 * @return Calibration
 * 
 * @author
 */
ImagePlus.prototype.getLocalCalibration = function() {
    throw new NotImplementedException("ImagePlus.getLocalCalibration(..)");
}

/**
 * 
 * @params ignoreGlobalCalibration - boolean
 * 
 * @author
 */
ImagePlus.prototype.setIgnoreGlobalCalibration = function(ignoreGlobalCalibration) {
    throw new NotImplementedException("ImagePlus.setIgnoreGlobalCalibration(..)");
}

/**
 * Displays the cursor coordinates and pixel value in the status bar.
 * Called by ImageCanvas when the mouse moves. Can be overridden by
 * ImagePlus subclasses.
 * 
 * @params x - int
 * @params y - int
 * 
 * @author
 */
ImagePlus.prototype.mouseMoved = function(x, y) {
    throw new NotImplementedException("ImagePlus.mouseMoved(..)");
}

/**
 * Redisplays the (x,y) coordinates and pixel value (which may
 * have changed) in the status bar. Called by the Next Slice and
 * Previous Slice commands to update the z-coordinate and pixel value.
 * 
 * 
 * @author
 */
ImagePlus.prototype.updateStatusbarValue = function() {
    throw new NotImplementedException("ImagePlus.updateStatusbarValue(..)");
}

/**
 * Converts the current cursor location to a string.
 * 
 * @params x - int
 * @params y - int
 * @return java.lang.String
 * 
 * @author
 */
ImagePlus.prototype.getLocationAsString = function(x, y) {
    throw new NotImplementedException("ImagePlus.getLocationAsString(..)");
}

/**
 * Copies the contents of the current selection, or the entire 
 * image if there is no selection, to the internal clipboard.
 * 
 * 
 * @author
 */
ImagePlus.prototype.copy = function() {
    throw new NotImplementedException("ImagePlus.copy(..)");
}

/**
 * Copies the contents of the current selection to the internal clipboard.
 * Copies the entire image if there is no selection. Also clears
 * the selection if <code>cut</code> is true.
 * 
 * @params cut - boolean
 * 
 * @author
 */
ImagePlus.prototype.copy = function(cut) {
    throw new NotImplementedException("ImagePlus.copy(..)");
}

/**
 * Inserts the contents of the internal clipboard into the active image. If there
 * is a selection the same size as the image on the clipboard, the image is inserted 
 * into that selection, otherwise the selection is inserted into the center of the image.
 * 
 * 
 * @author
 */
ImagePlus.prototype.paste = function() {
    throw new NotImplementedException("ImagePlus.paste(..)");
}

/**
 * Returns the internal clipboard or null if the internal clipboard is empty.
 * 
 * @return ImagePlus
 * 
 * @author
 */
ImagePlus.prototype.getClipboard = function() {
    throw new NotImplementedException("ImagePlus.getClipboard(..)");
}

/**
 * Clears the internal clipboard.
 * 
 * 
 * @author
 */
ImagePlus.prototype.resetClipboard = function() {
    throw new NotImplementedException("ImagePlus.resetClipboard(..)");
}

/**
 * 
 * @params listener - ImageListener
 * 
 * @author
 */
ImagePlus.prototype.addImageListener = function(listener) {
    throw new NotImplementedException("ImagePlus.addImageListener(..)");
}

/**
 * 
 * @params listener - ImageListener
 * 
 * @author
 */
ImagePlus.prototype.removeImageListener = function(listener) {
    throw new NotImplementedException("ImagePlus.removeImageListener(..)");
}

/**
 * Returns 'true' if the image is locked.
 * 
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.isLocked = function() {
    throw new NotImplementedException("ImagePlus.isLocked(..)");
}

/**
 * 
 * @params openAsHyperStack - boolean
 * 
 * @author
 */
ImagePlus.prototype.setOpenAsHyperStack = function(openAsHyperStack) {
    throw new NotImplementedException("ImagePlus.setOpenAsHyperStack(..)");
}

/**
 * 
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.getOpenAsHyperStack = function() {
    throw new NotImplementedException("ImagePlus.getOpenAsHyperStack(..)");
}

/**
 * Returns true if this is a CompositeImage.
 * 
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.isComposite = function() {
    throw new NotImplementedException("ImagePlus.isComposite(..)");
}

/**
 * Returns the display mode (IJ.COMPOSITE, IJ.COLOR
 * or IJ.GRAYSCALE) if this is a CompositeImage, otherwise returns -1.
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getCompositeMode = function() {
    throw new NotImplementedException("ImagePlus.getCompositeMode(..)");
}

/**
 * Sets the display range of the current channel. With non-composite
 * images it is identical to ip.setMinAndMax(min, max).
 * 
 * @params min - double
 * @params max - double
 * 
 * @author
 */
ImagePlus.prototype.setDisplayRange = function(min, max) {
    throw new NotImplementedException("ImagePlus.setDisplayRange(..)");
}

/**
 * 
 * @return double
 * 
 * @author
 */
ImagePlus.prototype.getDisplayRangeMin = function() {
    throw new NotImplementedException("ImagePlus.getDisplayRangeMin(..)");
}

/**
 * 
 * @return double
 * 
 * @author
 */
ImagePlus.prototype.getDisplayRangeMax = function() {
    throw new NotImplementedException("ImagePlus.getDisplayRangeMax(..)");
}

/**
 * Sets the display range of specified channels in an RGB image, where 4=red,
 * 2=green, 1=blue, 6=red+green, etc. With non-RGB images, this method is
 * identical to setDisplayRange(min, max). This method is used by the 
 * Image/Adjust/Color Balance tool .
 * 
 * @params min - double
 * @params max - double
 * @params channels - int
 * 
 * @author
 */
ImagePlus.prototype.setDisplayRange = function(min, max, channels) {
    throw new NotImplementedException("ImagePlus.setDisplayRange(..)");
}

/**
 * 
 * 
 * @author
 */
ImagePlus.prototype.resetDisplayRange = function() {
    throw new NotImplementedException("ImagePlus.resetDisplayRange(..)");
}

/**
 * Returns 'true' if this image is thresholded.
 * 
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.isThreshold = function() {
    throw new NotImplementedException("ImagePlus.isThreshold(..)");
}

/**
 * Set the default 16-bit display range, where 'bitDepth' must be 0 (auto-scaling), 
 * 8 (0-255), 10 (0-1023), 12 (0-4095, 14 (0-16383), 15 (0-32767) or 16 (0-65535).
 * 
 * @params bitDepth - int
 * 
 * @author
 */
ImagePlus.prototype.setDefault16bitRange = function(bitDepth) {
    throw new NotImplementedException("ImagePlus.setDefault16bitRange(..)");
}

/**
 * Returns the default 16-bit display range, 0 (auto-scaling), 8, 10, 12, 14, 15 or 16.
 * 
 * @return int
 * 
 * @author
 */
ImagePlus.prototype.getDefault16bitRange = function() {
    throw new NotImplementedException("ImagePlus.getDefault16bitRange(..)");
}

/**
 * 
 * @params c - int
 * @params z - int
 * @params t - int
 * 
 * @author
 */
ImagePlus.prototype.updatePosition = function(c, z, t) {
    throw new NotImplementedException("ImagePlus.updatePosition(..)");
}

/**
 * Returns a "flattened" version of this image, in RGB format.
 * 
 * @return ImagePlus
 * 
 * @author
 */
ImagePlus.prototype.flatten = function() {
    throw new NotImplementedException("ImagePlus.flatten(..)");
}

/**
 * Flattens all slices of this stack or HyperStack.<br>
 * 
 * 
 * @author
 */
ImagePlus.prototype.flattenStack = function() {
    throw new NotImplementedException("ImagePlus.flattenStack(..)");
}

/**
 * Assigns a LUT (lookup table) to this image.
 * 
 * @params lut - LUT
 * 
 * @author
 */
ImagePlus.prototype.setLut = function(lut) {
    throw new NotImplementedException("ImagePlus.setLut(..)");
}

/**
 * Installs a list of ROIs that will be drawn on this image as a non-destructive overlay.
 * 
 * @params overlay - Overlay
 * 
 * @author
 */
ImagePlus.prototype.setOverlay = function(overlay) {
    throw new NotImplementedException("ImagePlus.setOverlay(..)");
}

/**
 * Creates an Overlay from the specified Shape, Color 
 * and BasicStroke, and assigns it to this image.
 * 
 * @params shape - java.awt.Shape
 * @params color - java.awt.Color
 * @params stroke - java.awt.BasicStroke
 * 
 * @author
 */
ImagePlus.prototype.setOverlay = function(shape, color, stroke) {
    throw new NotImplementedException("ImagePlus.setOverlay(..)");
}

/**
 * Creates an Overlay from the specified ROI, and assigns it to this image.
 * 
 * @params roi - Roi
 * @params strokeColor - java.awt.Color
 * @params strokeWidth - int
 * @params fillColor - java.awt.Color
 * 
 * @author
 */
ImagePlus.prototype.setOverlay = function(roi, strokeColor, strokeWidth, fillColor) {
    throw new NotImplementedException("ImagePlus.setOverlay(..)");
}

/**
 * Returns the current overly, or null if this image does not have an overlay.
 * 
 * @return Overlay
 * 
 * @author
 */
ImagePlus.prototype.getOverlay = function() {
    throw new NotImplementedException("ImagePlus.getOverlay(..)");
}

/**
 * 
 * @params hide - boolean
 * 
 * @author
 */
ImagePlus.prototype.setHideOverlay = function(hide) {
    throw new NotImplementedException("ImagePlus.setHideOverlay(..)");
}

/**
 * 
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.getHideOverlay = function() {
    throw new NotImplementedException("ImagePlus.getHideOverlay(..)");
}

/**
 * Enable/disable use of antialiasing by the flatten() method.
 * 
 * @params antialiasRendering - boolean
 * 
 * @author
 */
ImagePlus.prototype.setAntialiasRendering = function(antialiasRendering) {
    throw new NotImplementedException("ImagePlus.setAntialiasRendering(..)");
}

/**
 * Returns a shallow copy of this ImagePlus.
 * 
 * @return java.lang.Object
 * 
 * @author
 */
ImagePlus.prototype.clone = function() {
    throw new NotImplementedException("ImagePlus.clone(..)");
}

/**
 * 
 * @return java.lang.String
 * 
 * @author
 */
ImagePlus.prototype.toString = function() {
    throw new NotImplementedException("ImagePlus.toString(..)");
}

/**
 * 
 * @params b - boolean
 * 
 * @author
 */
ImagePlus.prototype.setIJMenuBar = function(b) {
    throw new NotImplementedException("ImagePlus.setIJMenuBar(..)");
}

/**
 * 
 * @return boolean
 * 
 * @author
 */
ImagePlus.prototype.setIJMenuBar = function() {
    throw new NotImplementedException("ImagePlus.setIJMenuBar(..)");
}


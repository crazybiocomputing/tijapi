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

/**
 * Returns a reference to the "ImageJ" frame.
 * 
 * @return ImageJ
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.getInstance = function() {
    throw new NotImplementedException("IJ.getInstance(..)");
};

/**
 * Enable/disable debug mode.
 * 
 * @param {boolean} b - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.setDebugMode = function(b) {
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
IJ.prototype.runMacro = function(macro) {
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
IJ.prototype.runMacro = function(macro, arg) {
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
IJ.prototype.runMacroFile = function(name, arg) {
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
IJ.prototype.runMacroFile = function(name) {
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
IJ.prototype.runPlugIn = function(imp, className, arg) {
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
IJ.prototype.runPlugIn = function(className, arg) {
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
IJ.prototype.runPlugIn = function(commandName, className, arg) {
    throw new NotImplementedException("IJ.runPlugIn(..)");
};

/**
 * Runs a menu command on a separete thread and returns immediately.
 * 
 * @param {java.lang.String} command - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.doCommand = function(command) {
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
IJ.prototype.doCommand = function(imp, command) {
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
IJ.prototype.run = function(command) {
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
IJ.prototype.run = function(command, options) {
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
IJ.prototype.run = function(imp, command, options) {
    throw new NotImplementedException("IJ.run(..)");
};

/**
 * Returns true if the run(), open() or newImage() method is executing.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.macroRunning = function() {
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
IJ.prototype.isMacro = function() {
    throw new NotImplementedException("IJ.isMacro(..)");
};

/**
 * Returns the Applet that created this ImageJ or null if running as an application.
 * 
 * @return java.applet.Applet
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.getApplet = function() {
    throw new NotImplementedException("IJ.getApplet(..)");
};

/**
 * Displays a message in the ImageJ status bar.
 * 
 * @param {java.lang.String} s - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.showStatus = function(s) {
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
IJ.prototype.write = function(s) {
    throw new NotImplementedException("IJ.write(..)");
};

/**
 * 
 * @param {java.lang.String} s - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.log = function(s) {
    throw new NotImplementedException("IJ.log(..)");
};

/**
 * Returns the contents of the Log window or null if the Log window is not open.
 * 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.getLog = function() {
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
IJ.prototype.setColumnHeadings = function(headings) {
    throw new NotImplementedException("IJ.setColumnHeadings(..)");
};

/**
 * Returns true if the "Results" window is open.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.isResultsWindow = function() {
    throw new NotImplementedException("IJ.isResultsWindow(..)");
};

/**
 * Renames a results window.
 * 
 * @param {java.lang.String} title - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.renameResults = function(title) {
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
IJ.prototype.renameResults = function(oldTitle, newTitle) {
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
IJ.prototype.deleteRows = function(row1, row2) {
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
IJ.prototype.getTextPanel = function() {
    throw new NotImplementedException("IJ.getTextPanel(..)");
};

/**
 * TextWindow calls this method with a null argument when the "Results" window is closed.
 * 
 * @param {TextPanel} tp - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.setTextPanel = function(tp) {
    throw new NotImplementedException("IJ.setTextPanel(..)");
};

/**
 * Displays a "no images are open" dialog box.
 * 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.noImage = function() {
    throw new NotImplementedException("IJ.noImage(..)");
};

/**
 * Displays an "out of memory" message to the "Log" window.
 * 
 * @param {java.lang.String} name - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.outOfMemory = function(name) {
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
IJ.prototype.showProgress = function(progress) {
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
IJ.prototype.showProgress = function(currentIndex, finalIndex) {
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
IJ.prototype.showMessage = function(msg) {
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
IJ.prototype.showMessage = function(title, msg) {
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
IJ.prototype.error = function(msg) {
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
IJ.prototype.error = function(title, msg) {
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
IJ.prototype.getErrorMessage = function() {
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
IJ.prototype.showMessageWithCancel = function(title, msg) {
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
IJ.prototype.getNumber = function(prompt, defaultValue) {
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
IJ.prototype.getString = function(prompt, defaultString) {
    throw new NotImplementedException("IJ.getString(..)");
};

/**
 * Delays 'msecs' milliseconds.
 * 
 * @param {int} msecs - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.wait = function(msecs) {
    throw new NotImplementedException("IJ.wait(..)");
};

/**
 * Emits an audio beep.
 * 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.beep = function() {
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
IJ.prototype.freeMemory = function() {
    throw new NotImplementedException("IJ.freeMemory(..)");
};

/**
 * Returns the amount of memory currently being used by ImageJ.
 * 
 * @return long
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.currentMemory = function() {
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
IJ.prototype.maxMemory = function() {
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
IJ.prototype.showTime = function(imp, start, str) {
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
IJ.prototype.showTime = function(imp, start, str, nslices) {
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
IJ.prototype.time = function(imp, startNanoTime) {
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
IJ.prototype.d2s = function(n) {
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
IJ.prototype.d2s = function(n, decimalPlaces) {
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
IJ.prototype.d2s = function(x, significantDigits, maxDigits) {
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
IJ.prototype.pad = function(n, digits) {
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
IJ.prototype.register = function(c) {
    throw new NotImplementedException("IJ.register(..)");
};

/**
 * Returns true if the space bar is down.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.spaceBarDown = function() {
    throw new NotImplementedException("IJ.spaceBarDown(..)");
};

/**
 * Returns true if the control key is down.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.controlKeyDown = function() {
    throw new NotImplementedException("IJ.controlKeyDown(..)");
};

/**
 * Returns true if the alt key is down.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.altKeyDown = function() {
    throw new NotImplementedException("IJ.altKeyDown(..)");
};

/**
 * Returns true if the shift key is down.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.shiftKeyDown = function() {
    throw new NotImplementedException("IJ.shiftKeyDown(..)");
};

/**
 * 
 * @param {int} key - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.setKeyDown = function(key) {
    throw new NotImplementedException("IJ.setKeyDown(..)");
};

/**
 * 
 * @param {int} key - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.setKeyUp = function(key) {
    throw new NotImplementedException("IJ.setKeyUp(..)");
};

/**
 * 
 * @param {java.awt.event.InputEvent} e - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.setInputEvent = function(e) {
    throw new NotImplementedException("IJ.setInputEvent(..)");
};

/**
 * Returns true if this machine is a Macintosh.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.isMacintosh = function() {
    throw new NotImplementedException("IJ.isMacintosh(..)");
};

/**
 * Returns true if this machine is a Macintosh running OS X.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.isMacOSX = function() {
    throw new NotImplementedException("IJ.isMacOSX(..)");
};

/**
 * Returns true if this machine is running Windows.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.isWindows = function() {
    throw new NotImplementedException("IJ.isWindows(..)");
};

/**
 * Always returns true.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.isJava2 = function() {
    throw new NotImplementedException("IJ.isJava2(..)");
};

/**
 * Always returns true.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.isJava14 = function() {
    throw new NotImplementedException("IJ.isJava14(..)");
};

/**
 * Always returns true.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.isJava15 = function() {
    throw new NotImplementedException("IJ.isJava15(..)");
};

/**
 * Returns true if ImageJ is running on a Java 1.6 or greater JVM.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.isJava16 = function() {
    throw new NotImplementedException("IJ.isJava16(..)");
};

/**
 * Returns true if ImageJ is running on a Java 1.7 or greater JVM.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.isJava17 = function() {
    throw new NotImplementedException("IJ.isJava17(..)");
};

/**
 * Returns true if ImageJ is running on a Java 1.8 or greater JVM.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.isJava18 = function() {
    throw new NotImplementedException("IJ.isJava18(..)");
};

/**
 * Returns true if ImageJ is running on a Java 1.9 or greater JVM.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.isJava19 = function() {
    throw new NotImplementedException("IJ.isJava19(..)");
};

/**
 * Returns true if ImageJ is running on Linux.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.isLinux = function() {
    throw new NotImplementedException("IJ.isLinux(..)");
};

/**
 * Obsolete; always returns false.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.isVista = function() {
    throw new NotImplementedException("IJ.isVista(..)");
};

/**
 * Returns true if ImageJ is running a 64-bit version of Java.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.is64Bit = function() {
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
IJ.prototype.versionLessThan = function(version) {
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
IJ.prototype.setupDialog = function(imp, flags) {
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
IJ.prototype.makeRectangle = function(x, y, width, height) {
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
IJ.prototype.makeRectangle = function(x, y, width, height) {
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
IJ.prototype.makeOval = function(x, y, width, height) {
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
IJ.prototype.makeOval = function(x, y, width, height) {
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
IJ.prototype.makeLine = function(x1, y1, x2, y2) {
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
IJ.prototype.makeLine = function(x1, y1, x2, y2) {
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
IJ.prototype.makePoint = function(x, y) {
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
IJ.prototype.makePoint = function(x, y) {
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
IJ.prototype.setMinAndMax = function(min, max) {
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
IJ.prototype.setMinAndMax = function(img, min, max) {
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
IJ.prototype.setMinAndMax = function(min, max, channels) {
    throw new NotImplementedException("IJ.setMinAndMax(..)");
};

/**
 * Resets the minimum and maximum displayed pixel values of the
 * current image to be the same as the min and max pixel values.
 * 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.resetMinAndMax = function() {
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
IJ.prototype.resetMinAndMax = function(img) {
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
IJ.prototype.setThreshold = function(lowerThreshold, upperThresold) {
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
IJ.prototype.setThreshold = function(lowerThreshold, upperThreshold, displayMode) {
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
IJ.prototype.setThreshold = function(img, lowerThreshold, upperThreshold) {
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
IJ.prototype.setThreshold = function(img, lowerThreshold, upperThreshold, displayMode) {
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
IJ.prototype.setRawThreshold = function(img, lowerThreshold, upperThreshold, displayMode) {
    throw new NotImplementedException("IJ.setRawThreshold(..)");
};

/**
 * 
 * @param {ImagePlus} imp - 
 * @param {java.lang.String} method - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.setAutoThreshold = function(imp, method) {
    throw new NotImplementedException("IJ.setAutoThreshold(..)");
};

/**
 * Disables thresholding on the current image.
 * 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.resetThreshold = function() {
    throw new NotImplementedException("IJ.resetThreshold(..)");
};

/**
 * Disables thresholding on the specified image.
 * 
 * @param {ImagePlus} img - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.resetThreshold = function(img) {
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
IJ.prototype.selectWindow = function(id) {
    throw new NotImplementedException("IJ.selectWindow(..)");
};

/**
 * Activates the window with the specified title.
 * 
 * @param {java.lang.String} title - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.selectWindow = function(title) {
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
IJ.prototype.setForegroundColor = function(red, green, blue) {
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
IJ.prototype.setBackgroundColor = function(red, green, blue) {
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
IJ.prototype.setTool = function(id) {
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
IJ.prototype.setTool = function(name) {
    throw new NotImplementedException("IJ.setTool(..)");
};

/**
 * Returns the name of the current tool.
 * 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.getToolName = function() {
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
IJ.prototype.doWand = function(x, y) {
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
IJ.prototype.doWand = function(x, y, tolerance, mode) {
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
IJ.prototype.doWand = function(img, x, y, tolerance, mode) {
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
IJ.prototype.setPasteMode = function(mode) {
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
IJ.prototype.getImage = function() {
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
IJ.prototype.getProcessor = function() {
    throw new NotImplementedException("IJ.getProcessor(..)");
};

/**
 * Switches to the specified stack slice, where 1&lt;='slice'&lt;=stack-size.
 * 
 * @param {int} slice - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.setSlice = function(slice) {
    throw new NotImplementedException("IJ.setSlice(..)");
};

/**
 * Returns the ImageJ version number as a string.
 * 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.getVersion = function() {
    throw new NotImplementedException("IJ.getVersion(..)");
};

/**
 * Returns the ImageJ version and build number as a String, for 
 * example "1.46n05", or 1.46n99 if there is no build number.
 * 
 * @return java.lang.String
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.getFullVersion = function() {
    throw new NotImplementedException("IJ.getFullVersion(..)");
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
IJ.prototype.getDirectory = function(title) {
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
IJ.prototype.getDir = function(title) {
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
IJ.prototype.getFilePath = function(dialogTitle) {
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
IJ.prototype.open = function() {
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
IJ.prototype.open = function(path) {
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
IJ.prototype.open = function(path, n) {
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
IJ.prototype.openImage = function(path) {
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
IJ.prototype.openImage = function(path, n) {
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
IJ.prototype.openVirtual = function(path) {
    throw new NotImplementedException("IJ.openVirtual(..)");
};

/**
 * Opens an image using a file open dialog and returns it as an ImagePlus object.
 * 
 * @return ImagePlus
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.openImage = function() {
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
IJ.prototype.openUrlAsString = function(url) {
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
IJ.prototype.save = function(path) {
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
IJ.prototype.save = function(imp, path) {
    throw new NotImplementedException("IJ.save(..)");
};

/**
 * 
 * @param {java.lang.String} format - 
 * @param {java.lang.String} path - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.saveAs = function(format, path) {
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
IJ.prototype.saveAs = function(imp, format, path) {
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
IJ.prototype.saveAsTiff = function(imp, path) {
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
IJ.prototype.saveString = function(string, path) {
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
IJ.prototype.append = function(string, path) {
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
IJ.prototype.openAsString = function(path) {
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
IJ.prototype.createImage = function(title, width, height, depth, bitdepth) {
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
IJ.prototype.createImage = function(title, type, width, height, depth) {
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
IJ.prototype.createImage = function(title, type, width, height, channels, slices, frames) {
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
IJ.prototype.createHyperStack = function(title, width, height, channels, slices, frames, bitdepth) {
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
IJ.prototype.newImage = function(title, type, width, height, depth) {
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
IJ.prototype.escapePressed = function() {
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
IJ.prototype.resetEscape = function() {
    throw new NotImplementedException("IJ.resetEscape(..)");
};

/**
 * Causes IJ.error() output to be temporarily redirected to the "Log" window.
 * 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.redirectErrorMessages = function() {
    throw new NotImplementedException("IJ.redirectErrorMessages(..)");
};

/**
 * Set 'true' and IJ.error() output will be temporarily redirected to the "Log" window.
 * 
 * @param {boolean} redirect - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.redirectErrorMessages = function(redirect) {
    throw new NotImplementedException("IJ.redirectErrorMessages(..)");
};

/**
 * Returns the state of the 'redirectErrorMessages' flag, which is set by File/Import/Image Sequence.
 * 
 * @return boolean
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.redirectingErrorMessages = function() {
    throw new NotImplementedException("IJ.redirectingErrorMessages(..)");
};

/**
 * Temporarily suppress "plugin not found" errors.
 * 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.suppressPluginNotFoundError = function() {
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
IJ.prototype.getClassLoader = function() {
    throw new NotImplementedException("IJ.getClassLoader(..)");
};

/**
 * Returns the size, in pixels, of the primary display.
 * 
 * @return java.awt.Dimension
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.getScreenSize = function() {
    throw new NotImplementedException("IJ.getScreenSize(..)");
};

/**
 * Returns, as an array of strings, a list of the LUTs in the Image/Lookup Tables menu.
 * 
 * @return java.lang.String[]
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.getLuts = function() {
    throw new NotImplementedException("IJ.getLuts(..)");
};

/**
 * 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.resetClassLoader = function() {
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
IJ.prototype.handleException = function(e) {
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
IJ.prototype.setExceptionHandler = function(handler) {
    throw new NotImplementedException("IJ.setExceptionHandler(..)");
};

/**
 * 
 * @param {IJEventListener} listener - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.addEventListener = function(listener) {
    throw new NotImplementedException("IJ.addEventListener(..)");
};

/**
 * 
 * @param {IJEventListener} listener - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.removeEventListener = function(listener) {
    throw new NotImplementedException("IJ.removeEventListener(..)");
};

/**
 * 
 * @param {int} eventID - 
 * 
 * @author Created by ijdoc2js
 */
IJ.prototype.notifyEventListeners = function(eventID) {
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
IJ.prototype.setProperty = function(key, value) {
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
IJ.prototype.getProperty = function(key) {
    throw new NotImplementedException("IJ.getProperty(..)");
};


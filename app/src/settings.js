
var header = [
'/*',
' *  tijapi: Tiny ImageJ API in JavaScript',
' *  Copyright (C) 2017  Jean-Christophe Taveau.',
' *',
' *  This file is part of tijapi',
' *',
' * This program is free software: you can redistribute it and/or modify it',
' * under the terms of the GNU General Public License as published by',
' * the Free Software Foundation, either version 3 of the License, or',
' * (at your option) any later version.',
' *',
' * This program is distributed in the hope that it will be useful,',
' * but WITHOUT ANY WARRANTY; without even the implied warranty of',
' * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the',
' * GNU General Public License for more details.',
' *',
' *  You should have received a copy of the GNU General Public License',
' *  along with tijapi.  If not, see <http://www.gnu.org/licenses/>.',
' *',
' *',
' * Authors:',
' * Jean-Christophe Taveau',
' */'
];




/**
 * Automatic Extraction of class names from ImageJ API v1.51i
 * find . | grep html | grep -v package | grep -v class\-use | grep '[A-Z]' | awk '{printf "{\"url\":\"%s\",\"process\":0},\n",$0;}' -
 *
 * process: status of the class
 * 0: unprocessed
 * 1: work in progress
 * 2: done
 */

var ijclasses = [
  {
    "process": 0,
    "url": "./api/ij/util/StringSorter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/util/ArrayUtil.html"
  },
  {
    "process": 0,
    "url": "./api/ij/util/ThreadUtil.html"
  },
  {
    "process": 0,
    "url": "./api/ij/util/Java2.html"
  },
  {
    "process": 0,
    "url": "./api/ij/util/DicomTools.html"
  },
  {
    "process": 0,
    "url": "./api/ij/util/Tools.html"
  },
  {
    "process": 0,
    "url": "./api/ij/util/WildcardMatch.html"
  },
  {
    "process": 0,
    "url": "./api/ij/measure/CurveFitter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/measure/Minimizer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/measure/UserFunction.html"
  },
  {
    "process": 0,
    "url": "./api/ij/measure/Calibration.html"
  },
  {
    "process": 0,
    "url": "./api/ij/measure/SplineFitter.html"
  },
  {
    "process": 2,
    "url": "./api/ij/measure/Measurements.html",
    "author" : "jct"
  },
  {
    "process": 0,
    "url": "./api/ij/measure/ResultsTable.html"
  },
  {
    "process": 0,
    "url": "./api/ij/ImageJApplet.html"
  },
  {
    "process": 0,
    "url": "./api/ij/ImageListener.html"
  },
  {
    "process": 2,
    "url": "./api/ij/IJ.html",
    "author" : "jct"
  },
  {
    "process": 0,
    "url": "./api/ij/Prefs.html"
  },
  {
    "process": 0,
    "url": "./api/ij/VirtualStack.html"
  },
  {
    "process": 0,
    "url": "./api/ij/LookUpTable.html"
  },
  {
    "process": 2,
    "url": "./api/ij/ImagePlus.html",
    "author" : "jct"
  },
  {
    "process": 0,
    "url": "./api/ij/Executer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/RecentOpener.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/ColorBlitter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/AutoThresholder.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/DownsizeTable.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/ByteStatistics.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/FloatBlitter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/FloodFiller.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/StackConverter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/LUT.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/ImageConverter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/MedianCut.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/ColorProcessor.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/FloatProcessor.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/FHT.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/ShortProcessor.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/FloatStatistics.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/ColorStatistics.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/FloatPolygon.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/BinaryProcessor.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/PolygonFiller.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/ImageStatistics.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/Blitter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/TypeConverter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/StackProcessor.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/ShortBlitter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/ShortStatistics.html"
  },
  {
    "process": 2,
    "url": "./api/ij/process/ImageProcessor.html",
    "author" : "jct"
  },
  {
    "process": 0,
    "url": "./api/ij/process/ColorSpaceConverter.html"
  },
  {
    "process": 1,
    "url": "./api/ij/process/ByteProcessor.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/EllipseFitter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/BinaryInterpolator.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/AutoThresholder.Method.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/ByteBlitter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/process/StackStatistics.html"
  },
  {
    "process": 0,
    "url": "./api/ij/Macro.html"
  },
  {
    "process": 0,
    "url": "./api/ij/CommandListener.html"
  },
  {
    "process": 0,
    "url": "./api/ij/ImageJ.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Hotkeys.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Thresholder.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/PNG_Writer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/FileInfoVirtualStack.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/DICOM.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ZProjector.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Zoom.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/WindowOrganizer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/FractalBoxCounter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Convolver.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/RankFilters.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/FFTCustomFilter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/RoiWriter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/GaussianBlur.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Filters.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/RGBStackSplitter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/BackgroundSubtracter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/ExtendedPlugInFilter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/AVI_Writer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Binary.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/LutApplier.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/FFTFilter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/ScaleDialog.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/EDM.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Calibrator.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Filler.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Transformer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Analyzer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/LineGraphAnalyzer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/StackLabeler.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/ImageProperties.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Duplicater.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/LutViewer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Printer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Rotator.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/ParticleAnalyzer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/ThresholdToSelection.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Translator.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/ImageMath.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Info.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Benchmark.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/SaltAndPepper.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/UnsharpMask.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Shadows.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/MaximumFinder.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/XYWriter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/PlugInFilter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/PlugInFilterRunner.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/filter/Writer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ImageCalculator.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ImageJ_Updater.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/PlugInInterpreter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/NewPlugin.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/GifWriter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/OverlayCommands.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Clipboard.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/SubstackMaker.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/StackReducer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/SyncWindows.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/ColorThresholder.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/RoiManager.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/ContrastAdjuster.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/Editor.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/Fitter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/PlugInFrame.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/Recorder.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/PlugInDialog.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/ThresholdAdjuster.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/LineWidthAdjuster.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/Channels.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/MemoryMonitor.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/ColorPicker.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/frame/PasteController.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/TextReader.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/SimpleCommands.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Duplicator.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ListVirtualStack.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/RoiEnlarger.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/CommandFinder.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/RoiReader.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/EventListener.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/RGBStackConverter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/PointToolOptions.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/JavaProperties.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/XYCoordinates.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/GroupedZProjector.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/StackMaker.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Straightener.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Compiler.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/FITS_Reader.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Text.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/GaussianBlur3D.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/OverlayLabels.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Memory.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/MacroInstaller.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ScaleBar.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ContrastEnhancer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/SpecifyROI.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Animator.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/MeasurementsWriter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/HyperStackConverter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ChannelSplitter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Commands.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Filters3D.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/SubHyperstackMaker.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/StackCombiner.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/PluginInstaller.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ResultsSorter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/RectToolOptions.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/PNM_Writer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Selection.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ThreadLister.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/CanvasResizer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/FFT.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/BatchMeasure.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Resizer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/BatchConverter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/GIF_Reader.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Binner.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/URLOpener.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ZAxisProfiler.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Converter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Projector.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/BatchProcessor.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/RoiRotator.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Scaler.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/StackReverser.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Orthogonal_Views.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/HyperStackReducer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/LutLoader.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/AppearanceOptions.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/BMP_Reader.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/TextWriter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/RGBStackMerge.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ImagesToStack.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/CalibrationBar.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/DragAndDrop.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Profiler.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Options.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ControlPanel.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Startup.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Distribution.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/tool/ArrowTool.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/tool/MacroToolRunner.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/tool/BrushTool.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/tool/PlugInTool.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/tool/OverlayBrushTool.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/tool/PixelInspectionTool.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/StackEditor.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/JpegWriter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/FolderOpener.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/RoiScaler.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/BMP_Writer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/FITS_Writer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/MontageMaker.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/AVI_Reader.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Colors.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/SurfacePlotter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Concatenator.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Macro_Runner.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/RoiInterpolator.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ClassChecker.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Installer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/BrowserLauncher.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/JavaScriptEvaluator.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/WandToolOptions.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ProxySettings.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/CompositeConverter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ScreenGrabber.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/PGM_Reader.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ArrowToolOptions.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/NextImageOpener.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/PlugIn.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/HyperStackMaker.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Slicer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Timer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/XY_Reader.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Histogram.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/StackWriter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/CommandLister.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/TextFileReader.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/ChannelArranger.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Stack_Statistics.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/StackInserter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/Raw.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/FFTMath.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/GelAnalyzer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/AboutBox.html"
  },
  {
    "process": 0,
    "url": "./api/ij/plugin/LUT_Editor.html"
  },
  {
    "process": 0,
    "url": "./api/ij/WindowManager.html"
  },
  {
    "process": 0,
    "url": "./api/ij/IJ.ExceptionHandler.html"
  },
  {
    "process": 0,
    "url": "./api/ij/OtherInstance.html"
  },
  {
    "process": 0,
    "url": "./api/ij/Undo.html"
  },
  {
    "process": 0,
    "url": "./api/ij/CompositeImage.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/OpenDialog.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/LogStream.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/TiffDecoder.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/FileInfo.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/RoiDecoder.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/ImportDialog.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/TextEncoder.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/RoiEncoder.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/ImageReader.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/PluginClassLoader.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/Opener.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/RandomAccessStream.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/BitBuffer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/FileOpener.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/TiffEncoder.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/FileSaver.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/SaveDialog.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/DirectoryChooser.html"
  },
  {
    "process": 0,
    "url": "./api/ij/io/ImageWriter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/Menus.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/TrimmedButton.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/ImageRoi.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/NonBlockingGenericDialog.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/WaitForUserDialog.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/ShapeRoi.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/EllipseRoi.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/MultiLineLabel.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/GUI.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/DialogListener.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/SaveChangesDialog.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/HistogramWindow.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/Wand.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/ColorChooser.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/YesNoCancelDialog.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/Line.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/PlotCanvas.html"
  },
  {
    "process": 2,
    "url": "./api/ij/gui/Plot.html"
	"author": "al"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/ImageWindow.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/HTMLDialog.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/PolygonRoi.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/TextRoi.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/PointRoi.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/StackWindow.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/ImageCanvas.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/ScrollbarWithLabel.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/FreehandRoi.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/ImageLayout.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/RoiListener.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/OvalRoi.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/ImagePanel.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/NewImage.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/Overlay.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/Toolbar.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/ProfilePlot.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/MessageDialog.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/GenericDialog.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/PlotMaker.html"
  },
  {
    "process": 1,
    "url": "./api/ij/gui/Roi.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/RoiProperties.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/PlotWindow.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/PlotDialog.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/Arrow.html"
  },
  {
    "process": 0,
    "url": "./api/ij/gui/ProgressBar.html"
  },
  {
    "process": 0,
    "url": "./api/ij/ImageStack.html"
  },
  {
    "process": 0,
    "url": "./api/ij/macro/Debugger.html"
  },
  {
    "process": 0,
    "url": "./api/ij/macro/FunctionFinder.html"
  },
  {
    "process": 0,
    "url": "./api/ij/macro/Symbol.html"
  },
  {
    "process": 0,
    "url": "./api/ij/macro/Tokenizer.html"
  },
  {
    "process": 0,
    "url": "./api/ij/macro/MacroExtension.html"
  },
  {
    "process": 0,
    "url": "./api/ij/macro/MacroConstants.html"
  },
  {
    "process": 0,
    "url": "./api/ij/macro/MacroRunner.html"
  },
  {
    "process": 0,
    "url": "./api/ij/macro/Functions.html"
  },
  {
    "process": 0,
    "url": "./api/ij/macro/Interpreter.html"
  },
  {
    "process": 0,
    "url": "./api/ij/macro/Program.html"
  },
  {
    "process": 0,
    "url": "./api/ij/macro/ExtensionDescriptor.html"
  },
  {
    "process": 0,
    "url": "./api/ij/IJEventListener.html"
  },
  {
    "process": 0,
    "url": "./api/ij/text/TextWindow.html"
  },
  {
    "process": 0,
    "url": "./api/ij/text/TextPanel.html"
  }
];

exports.ijclasses = ijclasses;
exports.license = header.join('\n');


/* End of classes */

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
        Measurements.CENTROID+Measurements.CENTER_OF_MASS+Measurements.PERIMETER+RECT+
        Measurements.ELLIPSE+Measurements.SHAPE_DESCRIPTORS+Measurements.FERET+Measurements.INTEGRATED_DENSITY+
        Measurements.MEDIAN+Measurements.SKEWNESS+Measurements.KURTOSIS+Measurements.AREA_FRACTION;



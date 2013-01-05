/**
 * @preserve array.js v0.2.0 (c) 2012 knowledgecode | MIT licensed
 */
/*jslint browser: true, plusplus: true */
(function () {
    'use strict';

    /**
     * @name isArray
     * @function
     * @return {boolean} true or false
     */
    if (!Array.isArray) {
        Array.isArray = function (arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }

    /**
     * @name indexOf
     * @function
     * @param {Object} searchElement
     * @param {number=} opt_fromIndex
     * @return {number} index
     */
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement, opt_fromIndex) {
            var i = opt_fromIndex || 0,
                len = this.length;

            while (i < len) {
                if (this[i] === searchElement) {
                    return i;
                }
                i++;
            }
            return -1;
        };
    }

    /**
     * @name lastIndexOf
     * @function
     * @param {Object} searchElement
     * @param {number=} opt_fromIndex
     * @return {number} index
     */
    if (!Array.prototype.lastIndexOf) {
        Array.prototype.lastIndexOf = function (searchElement, opt_fromIndex) {
            var i = opt_fromIndex || this.length - 1;

            while (i >= 0) {
                if (this[i] === searchElement) {
                    return i;
                }
                i--;
            }
            return -1;
        };
    }

    /**
     * @name filter
     * @function
     * @param {function(Object, number, Array)} callback
     * @return {Array.<Object>} filtered array
     */
    if (!Array.prototype.filter) {
        Array.prototype.filter = function (callback) {
            var i, len, ret = [];

            for (i = 0, len = this.length; i < len; i++) {
                if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
                    ret.push(this[i]);
                }
            }
            return ret;
        };
    }

    /**
     * @name forEach
     * @function
     * @param {function(Object, number, Array)} callback
     */
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback) {
            var i, len;

            for (i = 0, len = this.length; i < len; i++) {
                if (this.hasOwnProperty(i)) {
                    callback(this[i], i, this);
                }
            }
        };
    }

    /**
     * @name every
     * @function
     * @param {function(Object, number, Array)} callback
     * @return {Boolean} true or false
     */
    if (!Array.prototype.every) {
        Array.prototype.every = function (callback) {
            var i, len;

            for (i = 0, len = this.length; i < len; i++) {
                if (this.hasOwnProperty(i) && !callback(this[i], i, this)) {
                    return false;
                }
            }
            return true;
        };
    }

    /**
     * @name map
     * @function
     * @param {function(Object, number, Array)} callback
     * @return {Array} processed array
     */
    if (!Array.prototype.map) {
        Array.prototype.map = function (callback) {
            var i, len, ret = [];

            for (i = 0, len = this.length; i < len; i++) {
                if (this.hasOwnProperty(i)) {
                    ret[i] = callback(this[i], i, this);
                }
            }
            return ret;
        };
    }

    /**
     * @name some
     * @function
     * @param {function(Object, number, Array)} callback
     * @return {Boolean} true or false
     */
    if (!Array.prototype.some) {
        Array.prototype.some = function (callback) {
            var i, len;

            for (i = 0, len = this.length; i < len; i++) {
                if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
                    return true;
                }
            }
            return false;
        };
    }

    /**
     * @name reduce
     * @function
     * @param {function(Object, number, Array)} callback
     * @return {Array} processed array
     */
    if (!Array.prototype.reduce) {
        Array.prototype.reduce = function (callback) {
            var i, len, prev;

            for (i = 0, len = this.length; i < len; i++) {
                if (this.hasOwnProperty(i)) {
                    prev = this[i];
                    break;
                }
            }
            for (i++; i < len; i++) {
                if (this.hasOwnProperty(i)) {
                    prev = callback(prev, this[i], i, this);
                }
            }
            return prev;
        };
    }

    /**
     * @name reduceRight
     * @function
     * @param {function(Object, number, Array)} callback
     * @return {Array} processed array
     */
    if (!Array.prototype.reduceRight) {
        Array.prototype.reduceRight = function (callback) {
            var i, prev;

            for (i = this.length - 1; i >= 0; i--) {
                if (this.hasOwnProperty(i)) {
                    prev = this[i];
                    break;
                }
            }
            for (i--; i >= 0; i--) {
                if (this.hasOwnProperty(i)) {
                    prev = callback(prev, this[i], i, this);
                }
            }
            return prev;
        };
    }

}());

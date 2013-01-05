/*global describe, it, expect */
describe('array', function () {
    'use strict';

    it('isArray', function () {
        var a = [], b = {}, c;

        expect(Array.isArray(a)).toBe(true);
        expect(Array.isArray(b)).toBe(false);
        expect(Array.isArray(c)).toBe(false);
    });

    it('indexOf', function () {
        var a = [1, 2, 3, 1, 2, 3];

        delete a[0];
        delete a[2];

        expect(a.indexOf(3)).toEqual(5);
        expect(a.indexOf(6)).toEqual(-1);
        expect(a.indexOf('1')).toEqual(-1);
        expect(a.indexOf(2, 4)).toEqual(4);
        expect(a.indexOf(1, 5)).toEqual(-1);
    });

    it('lastIndexOf', function () {
        var a = [1, 2, 3, 1, 2, 3];

        delete a[0];
        delete a[2];

        expect(a.lastIndexOf(3)).toEqual(5);
        expect(a.lastIndexOf(6)).toEqual(-1);
        expect(a.lastIndexOf('1')).toEqual(-1);
        expect(a.lastIndexOf(2, 4)).toEqual(4);
        expect(a.lastIndexOf(3, 1)).toEqual(-1);
    });

    it('filter', function () {
        var a = [1, 2, 3, 1, 2, 3], b;

        delete a[0];
        delete a[2];

        b = a.filter(function (val) {
            return val % 2;
        });
        expect(b.length).toEqual(2);

        b = a.filter(function (val) {
            return val < 0;
        });
        expect(b.length).toEqual(0);
    });

    it('forEach', function () {
        var a = [1, 2, 3, 1, 2, 3];

        delete a[0];
        delete a[2];

        a.forEach(function (val, i, arg) {
            expect(val).toEqual(arg[i]);
        });
    });

    it('every', function () {
        var a = [1, 2, 3, 1, 2, 3], b;

        delete a[0];
        delete a[2];

        b = a.every(function (val) {
            return val > 0;
        });
        expect(b).toBe(true);

        b = a.every(function (val) {
            return val > 1;
        });
        expect(b).toBe(false);

        b = a.every(function (val) {
            return val > 3;
        });
        expect(b).toBe(false);
    });

    it('map', function () {
        var a = [1, 2, 3, 1, 2, 3], b;

        delete a[0];
        delete a[2];

        b = a.map(function (val) {
            return val * 2;
        });
        expect(b[0]).toBeFalsy();
        expect(b[1]).toEqual(4);
        expect(b[2]).toBeFalsy();
        expect(b[3]).toEqual(2);
        expect(b[4]).toEqual(4);
        expect(b[5]).toEqual(6);
    });

    it('some', function () {
        var a = [1, 2, 3, 1, 2, 3], b;

        delete a[0];

        b = a.some(function (val) {
            return val > 0;
        });
        expect(b).toBe(true);

        b = a.some(function (val) {
            return val > 1;
        });
        expect(b).toBe(true);

        b = a.some(function (val) {
            return val > 3;
        });
        expect(b).toBe(false);
    });

    it('reduce', function () {
        var a = [1, 2, 3, 1, 2, 3], b;

        delete a[0];
        delete a[1];

        b = a.reduce(function (c, d) {
            return c + d;
        });
        expect(b).toEqual(9);

        b = a.reduce(function (c, d) {
            return c.toString() + d.toString();
        });
        expect(b).toEqual('3123');

        b = [1].reduce(function (c, d) {
            return c.toString() + d.toString();
        });
        expect(b).toEqual(1);
    });

    it('reduceRight', function () {
        var a = [1, 2, 3, 4, 5, 6], b;

        delete a[4];
        delete a[5];

        b = a.reduceRight(function (c, d) {
            return c - d;
        });
        expect(b).toEqual(-2);

        b = a.reduceRight(function (c, d) {
            return c.toString() + d.toString();
        });
        expect(b).toEqual('4321');

        b = [1].reduceRight(function (c, d) {
            return c.toString() + d.toString();
        });
        expect(b).toEqual(1);
    });

});

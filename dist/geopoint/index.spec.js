"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("geopoint", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.geopoint)().schema()).toEqual({
            type: "geopoint",
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.geopoint)({ hidden: false }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("parses into a geopoint", function () {
        var type = (0, _1.geopoint)();
        var value = {
            _type: "geopoint",
            lat: 58.63169011423141,
            lng: 9.089101352587932,
            alt: 13.37,
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("resolves into a geopoint", function () {
        var type = (0, _1.geopoint)();
        var value = {
            _type: "geopoint",
            lat: 58.63169011423141,
            lng: 9.089101352587932,
            alt: 13.37,
        };
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual(value);
    });
    (0, globals_1.it)("mocks a geopoint", function () {
        return (0, globals_1.expect)((0, _1.geopoint)().mock(faker_1.faker)).toEqual({
            _type: "geopoint",
            lat: globals_1.expect.any(Number),
            lng: globals_1.expect.any(Number),
            alt: globals_1.expect.any(Number),
        });
    });
    (0, globals_1.it)("mocks the same value with the same path", function () {
        (0, globals_1.expect)((0, _1.geopoint)().mock(faker_1.faker)).toEqual((0, _1.geopoint)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.geopoint)().mock(faker_1.faker, ".foo")).toEqual((0, _1.geopoint)().mock(faker_1.faker, ".foo"));
        (0, globals_1.expect)((0, _1.geopoint)().mock(faker_1.faker, ".foo")).not.toEqual((0, _1.geopoint)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.geopoint)().mock(faker_1.faker)).not.toEqual((0, _1.geopoint)().mock(faker_1.faker, ".foo"));
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)([
            {
                _type: "geopoint",
                lat: 58.63169011423141,
                lng: 9.089101352587932,
                alt: 13.37,
            },
            {
                _type: "geopoint",
                lat: -58.63169011423141,
                lng: -9.089101352587932,
                alt: 12.37,
            },
        ]).toContainEqual((0, _1.geopoint)({
            mock: function (faker) {
                return faker.helpers.arrayElement([
                    {
                        _type: "geopoint",
                        lat: 58.63169011423141,
                        lng: 9.089101352587932,
                        alt: 13.37,
                    },
                    {
                        _type: "geopoint",
                        lat: -58.63169011423141,
                        lng: -9.089101352587932,
                        alt: 12.37,
                    },
                ]);
            },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.geopoint)({
            zod: function (zod) { return zod.transform(function (_a) {
                var lat = _a.lat;
                return lat;
            }); },
        });
        var parsedValue = type.parse({
            _type: "geopoint",
            lat: 58.63169011423141,
            lng: 9.089101352587932,
            alt: 13.37,
        });
        (0, globals_1.expect)(parsedValue).toEqual(58.63169011423141);
    });
    (0, globals_1.it)("types custom validation", function () {
        var _a, _b;
        var type = (0, _1.geopoint)({
            validation: function (Rule) {
                return Rule.custom(function (value) {
                    var lat = value.lat;
                    return (lat !== null && lat !== void 0 ? lat : 0) > 50 || "Needs to be greater than 50";
                });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        (_b = (_a = type.schema()).validation) === null || _b === void 0 ? void 0 : _b.call(_a, rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
});
//# sourceMappingURL=index.spec.js.map
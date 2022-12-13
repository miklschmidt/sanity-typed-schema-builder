"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var zod_1 = require("zod");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("number", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.number)().schema()).toEqual({
            type: "number",
            validation: globals_1.expect.any(Function),
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.number)({ hidden: false }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("parses into a number", function () {
        var type = (0, _1.number)();
        var value = 5;
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("resolves into a number", function () {
        var type = (0, _1.number)();
        var value = 5;
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual(value);
    });
    (0, globals_1.it)("sets min", function () {
        var type = (0, _1.number)({ min: 1 });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.min).toHaveBeenCalledWith(1);
        var value = 5;
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse(0);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets max", function () {
        var type = (0, _1.number)({ max: 6 });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.max).toHaveBeenCalledWith(6);
        var value = 5;
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse(9);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets greaterThan", function () {
        var type = (0, _1.number)({ greaterThan: 1 });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.greaterThan).toHaveBeenCalledWith(1);
        var value = 5;
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse(0);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets lessThan", function () {
        var type = (0, _1.number)({ lessThan: 6 });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.lessThan).toHaveBeenCalledWith(6);
        var value = 5;
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse(9);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets integer", function () {
        var type = (0, _1.number)({ integer: true });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.integer).toHaveBeenCalled();
        var value = 5;
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse(5.5);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets positive", function () {
        var type = (0, _1.number)({ positive: true });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.positive).toHaveBeenCalled();
        var value = 5;
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse(-5);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets negative", function () {
        var type = (0, _1.number)({ negative: true });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.negative).toHaveBeenCalled();
        var value = -5;
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse(5);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets precision", function () {
        var type = (0, _1.number)({ precision: 2 });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.precision).toHaveBeenCalledWith(2);
        var value = 0.011;
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(0.01);
    });
    (0, globals_1.it)("mocks a number", function () {
        return (0, globals_1.expect)((0, _1.number)().mock(faker_1.faker)).toEqual(globals_1.expect.any(Number));
    });
    (0, globals_1.it)("mocks the same value with the same path", function () {
        (0, globals_1.expect)((0, _1.number)().mock(faker_1.faker)).toEqual((0, _1.number)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.number)().mock(faker_1.faker, ".foo")).toEqual((0, _1.number)().mock(faker_1.faker, ".foo"));
        (0, globals_1.expect)((0, _1.number)().mock(faker_1.faker, ".foo")).not.toEqual((0, _1.number)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.number)().mock(faker_1.faker)).not.toEqual((0, _1.number)().mock(faker_1.faker, ".foo"));
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)([3, 4]).toContainEqual((0, _1.number)({
            mock: function (faker) { return faker.helpers.arrayElement([3, 4]); },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.number)({
            zod: function (zod) { return zod.transform(function (value) { return "".concat(value); }); },
        });
        var parsedValue = type.parse(5);
        (0, globals_1.expect)(parsedValue).toEqual("5");
    });
    (0, globals_1.it)("types custom validation", function () {
        var type = (0, _1.number)({
            validation: function (Rule) {
                return Rule.custom(function (value) {
                    var number = value;
                    return number > 50 || "Needs to be more than 50";
                });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
    (0, globals_1.it)("types values from list", function () {
        var type = (0, _1.number)({
            options: {
                list: [3, { title: "Four", value: 4 }],
            },
        });
        var value = 3;
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)([3, 4]).toContain(type.mock(faker_1.faker));
        (0, globals_1.expect)(function () {
            type.parse(2);
        }).toThrow(zod_1.z.ZodError);
    });
});
//# sourceMappingURL=index.spec.js.map
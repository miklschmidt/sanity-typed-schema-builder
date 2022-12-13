"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("datetime", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.datetime)().schema()).toEqual({
            type: "datetime",
            validation: globals_1.expect.any(Function),
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.datetime)({ hidden: false }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("parses into a Date", function () {
        var type = (0, _1.datetime)();
        var value = "2022-06-03T03:24:55.395Z";
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(new Date(value));
    });
    (0, globals_1.it)("resolves into a Date", function () {
        var type = (0, _1.datetime)();
        var value = "2022-06-03T03:24:55.395Z";
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual(new Date(value));
    });
    (0, globals_1.it)("enforces a valid Date", function () {
        var type = (0, _1.datetime)();
        var value = "not a date";
        (0, globals_1.expect)(function () {
            type.parse(value);
        }).toThrow("Invalid Date");
    });
    (0, globals_1.it)("sets min", function () {
        var type = (0, _1.datetime)({ min: "2022-06-03T03:24:55.394Z" });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.min).toHaveBeenCalledWith("2022-06-03T03:24:55.394Z");
        var value = "2022-06-03T03:24:55.395Z";
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(new Date(value));
        (0, globals_1.expect)(function () {
            type.parse("2022-06-03T03:24:55.390Z");
        }).toThrow("Greater than 2022-06-03T03:24:55.394Z");
    });
    (0, globals_1.it)("sets max", function () {
        var type = (0, _1.datetime)({ max: "2022-06-03T03:24:55.396Z" });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.max).toHaveBeenCalledWith("2022-06-03T03:24:55.396Z");
        var value = "2022-06-03T03:24:55.395Z";
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(new Date(value));
        (0, globals_1.expect)(function () {
            type.parse("2022-06-03T03:24:55.399Z");
        }).toThrow("Less than 2022-06-03T03:24:55.396Z");
    });
    (0, globals_1.it)("min & max are inclusive", function () {
        var type = (0, _1.datetime)({
            max: "2022-06-03T03:24:55.395Z",
            min: "2022-06-03T03:24:55.395Z",
        });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.min).toHaveBeenCalledWith("2022-06-03T03:24:55.395Z");
        (0, globals_1.expect)(rule.max).toHaveBeenCalledWith("2022-06-03T03:24:55.395Z");
        var value = "2022-06-03T03:24:55.395Z";
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(new Date(value));
    });
    (0, globals_1.it)("mocks a string", function () {
        var value = (0, _1.datetime)().mock(faker_1.faker);
        (0, globals_1.expect)(value).toEqual(globals_1.expect.any(String));
        (0, globals_1.expect)(new Date(value).toString()).not.toEqual("Invalid Date");
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)([
            "2022-06-03T03:24:55.390Z",
            "2022-06-03T03:24:55.399Z",
        ]).toContainEqual((0, _1.datetime)({
            mock: function (faker) {
                return faker.helpers.arrayElement([
                    "2022-06-03T03:24:55.390Z",
                    "2022-06-03T03:24:55.399Z",
                ]);
            },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("mocks the same value with the same path", function () {
        (0, globals_1.expect)((0, _1.datetime)().mock(faker_1.faker)).toEqual((0, _1.datetime)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.datetime)().mock(faker_1.faker, ".foo")).toEqual((0, _1.datetime)().mock(faker_1.faker, ".foo"));
        (0, globals_1.expect)((0, _1.datetime)().mock(faker_1.faker, ".foo")).not.toEqual((0, _1.datetime)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.datetime)().mock(faker_1.faker)).not.toEqual((0, _1.datetime)().mock(faker_1.faker, ".foo"));
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.datetime)({
            zod: function (zod) { return zod.transform(function (value) { return value.length; }); },
        });
        var parsedValue = type.parse("2022-06-03T03:24:55.395Z");
        (0, globals_1.expect)(parsedValue).toEqual(24);
    });
    (0, globals_1.it)("types custom validation", function () {
        var type = (0, _1.datetime)({
            validation: function (Rule) {
                return Rule.custom(function (value) {
                    var datetime = value;
                    return datetime.length > 50 || "Needs to be 50 characters";
                });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
});
//# sourceMappingURL=index.spec.js.map
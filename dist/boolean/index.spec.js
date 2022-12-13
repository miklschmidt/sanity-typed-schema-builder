"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("boolean", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.boolean)().schema()).toEqual({
            type: "boolean",
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.boolean)({ hidden: false }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("parses into a boolean", function () {
        var type = (0, _1.boolean)();
        var value = true;
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("resolves into a boolean", function () {
        var type = (0, _1.boolean)();
        var value = true;
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual(value);
    });
    (0, globals_1.it)("mocks a boolean", function () {
        return (0, globals_1.expect)((0, _1.boolean)().mock(faker_1.faker)).toEqual(globals_1.expect.any(Boolean));
    });
    (0, globals_1.it)("mocks the same value with the same path", function () {
        (0, globals_1.expect)((0, _1.boolean)().mock(faker_1.faker)).toEqual((0, _1.boolean)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.boolean)().mock(faker_1.faker, ".foo")).toEqual((0, _1.boolean)().mock(faker_1.faker, ".foo"));
        (0, globals_1.expect)((0, _1.boolean)().mock(faker_1.faker, ".foo")).not.toEqual((0, _1.boolean)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.boolean)().mock(faker_1.faker)).not.toEqual((0, _1.boolean)().mock(faker_1.faker, ".foo"));
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)([true]).toContainEqual((0, _1.boolean)({
            mock: function (faker) { return faker.helpers.arrayElement([true]); },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.boolean)({
            zod: function (zod) { return zod.transform(function (value) { return value.toString(); }); },
        });
        var parsedValue = type.parse(true);
        (0, globals_1.expect)(parsedValue).toEqual("true");
    });
    (0, globals_1.it)("types custom validation", function () {
        var _a, _b;
        var type = (0, _1.boolean)({
            validation: function (Rule) {
                return Rule.custom(function (value) {
                    var boolean = value;
                    return boolean || "Needs to be true";
                });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        (_b = (_a = type.schema()).validation) === null || _b === void 0 ? void 0 : _b.call(_a, rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
});
//# sourceMappingURL=index.spec.js.map
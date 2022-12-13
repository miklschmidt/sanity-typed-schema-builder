"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var zod_1 = require("zod");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("url", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.url)().schema()).toEqual({
            type: "url",
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.url)({ hidden: false }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("parses into a string", function () {
        var type = (0, _1.url)();
        var value = "https://example.com/img.jpg";
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("resolves into a string", function () {
        var type = (0, _1.url)();
        var value = "https://example.com/img.jpg";
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual(value);
    });
    (0, globals_1.it)("enforces a url", function () {
        var type = (0, _1.url)();
        var value = "not a url";
        (0, globals_1.expect)(function () {
            type.parse(value);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("mocks a url", function () {
        return (0, globals_1.expect)(zod_1.z.string().url().parse((0, _1.url)().mock(faker_1.faker))).toEqual(globals_1.expect.any(String));
    });
    (0, globals_1.it)("mocks the same value with the same path", function () {
        (0, globals_1.expect)((0, _1.url)().mock(faker_1.faker)).toEqual((0, _1.url)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.url)().mock(faker_1.faker, ".foo")).toEqual((0, _1.url)().mock(faker_1.faker, ".foo"));
        (0, globals_1.expect)((0, _1.url)().mock(faker_1.faker, ".foo")).not.toEqual((0, _1.url)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.url)().mock(faker_1.faker)).not.toEqual((0, _1.url)().mock(faker_1.faker, ".foo"));
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)(["https://google.com", "https://facebook.com"]).toContainEqual((0, _1.url)({
            mock: function (faker) {
                return faker.helpers.arrayElement([
                    "https://google.com",
                    "https://facebook.com",
                ]);
            },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.url)({
            zod: function (zod) { return zod.transform(function (value) { return value.length; }); },
        });
        var parsedValue = type.parse("https://google.com");
        (0, globals_1.expect)(parsedValue).toEqual(18);
    });
    (0, globals_1.it)("types custom validation", function () {
        var _a, _b;
        var type = (0, _1.url)({
            validation: function (Rule) {
                return Rule.custom(function (value) {
                    var url = value;
                    return url.length > 50 || "Needs to be 50 characters";
                });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        (_b = (_a = type.schema()).validation) === null || _b === void 0 ? void 0 : _b.call(_a, rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
});
//# sourceMappingURL=index.spec.js.map
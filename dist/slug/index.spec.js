"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("slug", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.slug)().schema()).toEqual({
            type: "slug",
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.slug)({ hidden: false }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("parses into a string", function () {
        var type = (0, _1.slug)();
        var value = {
            _type: "slug",
            current: "foo",
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual("foo");
    });
    (0, globals_1.it)("resolves into a string", function () {
        var type = (0, _1.slug)();
        var value = {
            _type: "slug",
            current: "foo",
        };
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual("foo");
    });
    (0, globals_1.it)("mocks a slug", function () {
        return (0, globals_1.expect)((0, _1.slug)().mock(faker_1.faker)).toEqual({
            _type: "slug",
            current: globals_1.expect.any(String),
        });
    });
    (0, globals_1.it)("mocks the same value with the same path", function () {
        (0, globals_1.expect)((0, _1.slug)().mock(faker_1.faker)).toEqual((0, _1.slug)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.slug)().mock(faker_1.faker, ".foo")).toEqual((0, _1.slug)().mock(faker_1.faker, ".foo"));
        (0, globals_1.expect)((0, _1.slug)().mock(faker_1.faker, ".foo")).not.toEqual((0, _1.slug)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.slug)().mock(faker_1.faker)).not.toEqual((0, _1.slug)().mock(faker_1.faker, ".foo"));
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)([
            { _type: "slug", current: "a-slug" },
            { _type: "slug", current: "b-slug" },
        ]).toContainEqual((0, _1.slug)({
            mock: function (faker) {
                return faker.helpers.arrayElement([
                    { _type: "slug", current: "a-slug" },
                    { _type: "slug", current: "b-slug" },
                ]);
            },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.slug)({
            zod: function (zod) { return zod.transform(function (_a) {
                var _type = _a._type;
                return _type;
            }); },
        });
        var parsedValue = type.parse({ _type: "slug", current: "a-slug" });
        (0, globals_1.expect)(parsedValue).toEqual("slug");
    });
    (0, globals_1.it)("types custom validation", function () {
        var _a, _b;
        var type = (0, _1.slug)({
            validation: function (Rule) {
                return Rule.custom(function (value) {
                    var _a;
                    var slug = value.current;
                    return ((_a = slug === null || slug === void 0 ? void 0 : slug.length) !== null && _a !== void 0 ? _a : 0) > 50 || "Needs to be 50 characters";
                });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        (_b = (_a = type.schema()).validation) === null || _b === void 0 ? void 0 : _b.call(_a, rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
});
//# sourceMappingURL=index.spec.js.map
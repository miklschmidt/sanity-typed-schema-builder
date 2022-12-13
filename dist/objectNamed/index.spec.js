"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var boolean_1 = require("../boolean");
var string_1 = require("../string");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("object", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.objectNamed)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
            ],
        }).schema()).toEqual({
            name: "foo",
            type: "object",
            fields: [
                {
                    name: "foo",
                    type: "boolean",
                    validation: globals_1.expect.any(Function),
                },
            ],
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.objectNamed)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
            ],
            hidden: false,
        }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("parses into an object", function () {
        var type = (0, _1.objectNamed)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
            ],
        });
        var value = {
            _type: "foo",
            foo: true,
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("resolves into an object", function () {
        var type = (0, _1.objectNamed)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)({
                        zodResolved: function (zod) { return zod.transform(function () { return "foo"; }); },
                    }),
                },
            ],
        });
        var value = {
            _type: "foo",
            foo: true,
        };
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual({ _type: "foo", foo: "foo" });
    });
    (0, globals_1.it)("allows optional fields", function () {
        var _a, _b, _c, _d;
        var type = (0, _1.objectNamed)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
                {
                    name: "bar",
                    optional: true,
                    type: (0, string_1.string)(),
                },
            ],
        });
        var schema = type.schema();
        (0, globals_1.expect)(schema).toHaveProperty("fields", [
            {
                name: "foo",
                type: "boolean",
                validation: globals_1.expect.any(Function),
            },
            {
                name: "bar",
                type: "string",
                validation: globals_1.expect.any(Function),
            },
        ]);
        var fooRule = (0, test_utils_1.mockRule)();
        (_b = (_a = schema.fields[0]) === null || _a === void 0 ? void 0 : _a.validation) === null || _b === void 0 ? void 0 : _b.call(_a, fooRule);
        (0, globals_1.expect)(fooRule.required).toHaveBeenCalled();
        var barRule = (0, test_utils_1.mockRule)();
        (_d = (_c = schema.fields[1]) === null || _c === void 0 ? void 0 : _c.validation) === null || _d === void 0 ? void 0 : _d.call(_c, barRule);
        (0, globals_1.expect)(barRule.required).not.toHaveBeenCalled();
        var value = {
            _type: "foo",
            foo: true,
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("makes a reference", function () {
        var type = (0, _1.objectNamed)({
            name: "foo",
            fields: [{ name: "hello", type: (0, string_1.string)() }],
        });
        var type2 = (0, _1.objectNamed)({
            name: "bar",
            fields: [{ name: "foo", type: type.ref() }],
        });
        (0, globals_1.expect)(type2.schema().fields[0]).toEqual({
            name: "foo",
            type: "foo",
            validation: globals_1.expect.any(Function),
        });
        var value = {
            _type: "bar",
            foo: {
                _type: "foo",
                hello: "world",
            },
        };
        var parsedValue = type2.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("mocks the field values", function () {
        return (0, globals_1.expect)((0, _1.objectNamed)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
                {
                    name: "bar",
                    type: (0, string_1.string)(),
                },
            ],
        }).mock(faker_1.faker)).toEqual({
            _type: "foo",
            foo: globals_1.expect.any(Boolean),
            bar: globals_1.expect.any(String),
        });
    });
    (0, globals_1.it)("mocks the same value with the same path", function () {
        var objectDef = function () {
            var field = {
                name: "foo",
                type: (0, string_1.string)(),
            };
            var fields = [field];
            return { name: "foo", fields: fields };
        };
        (0, globals_1.expect)((0, _1.objectNamed)(objectDef()).mock(faker_1.faker)).toEqual((0, _1.objectNamed)(objectDef()).mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.objectNamed)(objectDef()).mock(faker_1.faker, ".foo")).toEqual((0, _1.objectNamed)(objectDef()).mock(faker_1.faker, ".foo"));
        (0, globals_1.expect)((0, _1.objectNamed)(objectDef()).mock(faker_1.faker, ".foo")).not.toEqual((0, _1.objectNamed)(objectDef()).mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.objectNamed)(objectDef()).mock(faker_1.faker)).not.toEqual((0, _1.objectNamed)(objectDef()).mock(faker_1.faker, ".foo"));
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)([
            { _type: "foo", foo: true, bar: "foo" },
            { _type: "foo", foo: false, bar: "bar" },
        ]).toContainEqual((0, _1.objectNamed)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
                {
                    name: "bar",
                    type: (0, string_1.string)(),
                },
            ],
            mock: function (faker) {
                return faker.helpers.arrayElement([
                    { _type: "foo", foo: true, bar: "foo" },
                    { _type: "foo", foo: false, bar: "bar" },
                ]);
            },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("sets preview.select", function () {
        return (0, globals_1.expect)((0, _1.objectNamed)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
            ],
            preview: {
                select: {
                    title: "someTitle",
                    media: "someMedia",
                },
            },
        }).schema()).toHaveProperty("preview", {
            select: {
                title: "someTitle",
                media: "someMedia",
            },
        });
    });
    (0, globals_1.it)("allows a function selection value", function () {
        var _a, _b;
        var type = (0, _1.objectNamed)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, string_1.string)(),
                },
                {
                    name: "bar",
                    optional: true,
                    type: (0, string_1.string)(),
                },
            ],
            preview: {
                select: {
                    bleh: "foo",
                },
                prepare: function (selection) {
                    var value = selection;
                    var foo = value.foo, bar = value.bar;
                    return {
                        title: foo,
                        subtitle: bar,
                    };
                },
            },
        });
        var schema = type.schema();
        var value = {
            _type: "foo",
            bar: "someBar",
            foo: "someFoo",
        };
        (0, globals_1.expect)((_b = (_a = schema.preview) === null || _a === void 0 ? void 0 : _a.prepare) === null || _b === void 0 ? void 0 : _b.call(_a, value)).toEqual({
            title: "someFoo",
            subtitle: "someBar",
        });
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.objectNamed)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)({
                        zod: function (zod) { return zod.transform(function (value) { return (value ? 1 : 0); }); },
                    }),
                },
            ],
            zod: function (zod) { return zod.transform(function (value) { return Object.entries(value); }); },
        });
        var parsedValue = type.parse({ _type: "foo", foo: true });
        (0, globals_1.expect)(parsedValue).toEqual(globals_1.expect.arrayContaining([
            ["_type", "foo"],
            ["foo", 1],
        ]));
    });
    (0, globals_1.it)("types custom validation", function () {
        var _a, _b;
        var type = (0, _1.objectNamed)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    optional: true,
                    type: (0, boolean_1.boolean)(),
                },
                {
                    name: "bar",
                    type: (0, string_1.string)(),
                },
            ],
            validation: function (Rule) {
                return Rule.custom(function (value) {
                    var bar = value.bar;
                    return !bar || "Needs an empty bar";
                });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        (_b = (_a = type.schema()).validation) === null || _b === void 0 ? void 0 : _b.call(_a, rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
    (0, globals_1.it)("handles deep references", function () {
        var type = (0, _1.objectNamed)({
            name: "type",
            title: "Title",
            fields: [
                {
                    name: "value",
                    title: "Value",
                    type: (0, string_1.string)(),
                },
            ],
        });
        var value = {
            _type: "type",
            value: "foo",
        };
        var referencingType = (0, _1.objectNamed)({
            name: "referencingType",
            title: "Referencing Title",
            fields: [
                {
                    name: "value",
                    title: "Values",
                    type: type.ref(),
                },
            ],
        });
        var referencingValue = {
            _type: "referencingType",
            value: value,
        };
        var deepReferencingType = (0, _1.objectNamed)({
            name: "deepReferencingType",
            title: "Deep Referencing Title",
            fields: [
                {
                    name: "referencingValue",
                    type: referencingType.ref(),
                },
            ],
        });
        // TS2589: Type instantiation is excessively deep and possibly infinite.
        var deepReferencingValue = {
            _type: "deepReferencingType",
            referencingValue: referencingValue,
        };
        (0, globals_1.expect)(deepReferencingValue).toEqual(deepReferencingType.parse(deepReferencingValue));
    });
});
//# sourceMappingURL=index.spec.js.map
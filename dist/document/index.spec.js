"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var zod_1 = require("zod");
var boolean_1 = require("../boolean");
var string_1 = require("../string");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("document", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.document)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
            ],
        }).schema()).toEqual({
            name: "foo",
            type: "document",
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
        return (0, globals_1.expect)((0, _1.document)({
            name: "foo",
            title: "Foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
            ],
        }).schema()).toHaveProperty("title", "Foo");
    });
    (0, globals_1.it)("parses into an document", function () {
        var type = (0, _1.document)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
            ],
        });
        var value = {
            _createdAt: "2022-06-03T03:24:55.395Z",
            _id: "2106a34f-315f-44bc-929b-bf8e9a3eba0d",
            _rev: "somerevstring",
            _type: "foo",
            _updatedAt: "2022-06-03T03:24:55.395Z",
            foo: true,
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(__assign(__assign({}, value), { _createdAt: new Date("2022-06-03T03:24:55.395Z"), _updatedAt: new Date("2022-06-03T03:24:55.395Z") }));
    });
    (0, globals_1.it)("resolves into an object", function () {
        var type = (0, _1.document)({
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
            _createdAt: "2022-06-03T03:24:55.395Z",
            _id: "2106a34f-315f-44bc-929b-bf8e9a3eba0d",
            _rev: "somerevstring",
            _type: "foo",
            _updatedAt: "2022-06-03T03:24:55.395Z",
            foo: true,
        };
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual(__assign(__assign({}, value), { _createdAt: new Date("2022-06-03T03:24:55.395Z"), _updatedAt: new Date("2022-06-03T03:24:55.395Z"), foo: "foo" }));
    });
    (0, globals_1.it)("allows optional fields", function () {
        var _a, _b, _c, _d;
        var type = (0, _1.document)({
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
        (_b = (_a = ("validation" in schema.fields[0]
            ? schema.fields[0]
            : undefined)) === null || _a === void 0 ? void 0 : _a.validation) === null || _b === void 0 ? void 0 : _b.call(_a, fooRule);
        (0, globals_1.expect)(fooRule.required).toHaveBeenCalled();
        var barRule = (0, test_utils_1.mockRule)();
        (_d = (_c = ("validation" in schema.fields[1]
            ? schema.fields[1]
            : undefined)) === null || _c === void 0 ? void 0 : _c.validation) === null || _d === void 0 ? void 0 : _d.call(_c, barRule);
        (0, globals_1.expect)(barRule.required).not.toHaveBeenCalled();
        var value = {
            _createdAt: "2022-06-03T03:24:55.395Z",
            _id: "2106a34f-315f-44bc-929b-bf8e9a3eba0d",
            _rev: "somerevstring",
            _type: "foo",
            _updatedAt: "2022-06-03T03:24:55.395Z",
            foo: true,
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(__assign(__assign({}, value), { _createdAt: new Date("2022-06-03T03:24:55.395Z"), _updatedAt: new Date("2022-06-03T03:24:55.395Z") }));
    });
    (0, globals_1.it)("mocks the field values", function () {
        var value = (0, _1.document)({
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
        }).mock(faker_1.faker);
        (0, globals_1.expect)(value).toEqual({
            _createdAt: globals_1.expect.any(String),
            _id: globals_1.expect.any(String),
            _rev: globals_1.expect.any(String),
            _type: "foo",
            _updatedAt: globals_1.expect.any(String),
            bar: globals_1.expect.any(String),
            foo: globals_1.expect.any(Boolean),
        });
        /* eslint-disable no-underscore-dangle -- Sanity fields have underscores */
        (0, globals_1.expect)(new Date(value._createdAt).toString()).not.toEqual("Invalid Date");
        (0, globals_1.expect)(new Date(value._updatedAt).toString()).not.toEqual("Invalid Date");
        zod_1.z.string().uuid().parse(value._id);
        /* eslint-enable no-underscore-dangle */
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)([
            {
                _createdAt: "2022-06-03T03:24:55.395Z",
                _id: "2106a34f-315f-44bc-929b-bf8e9a3eba0d",
                _rev: "somerevstring",
                _type: "foo",
                _updatedAt: "2022-06-03T03:24:55.395Z",
                foo: true,
                bar: "foo",
            },
            {
                _createdAt: "2022-06-03T03:24:55.395Z",
                _id: "2106a34f-315f-44bc-929b-bf8e9a3eba0d",
                _rev: "somerevstring",
                _type: "foo",
                _updatedAt: "2022-06-03T03:24:55.395Z",
                foo: false,
                bar: "bar",
            },
        ]).toContainEqual((0, _1.document)({
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
                    {
                        _createdAt: "2022-06-03T03:24:55.395Z",
                        _id: "2106a34f-315f-44bc-929b-bf8e9a3eba0d",
                        _rev: "somerevstring",
                        _type: "foo",
                        _updatedAt: "2022-06-03T03:24:55.395Z",
                        foo: true,
                        bar: "foo",
                    },
                    {
                        _createdAt: "2022-06-03T03:24:55.395Z",
                        _id: "2106a34f-315f-44bc-929b-bf8e9a3eba0d",
                        _rev: "somerevstring",
                        _type: "foo",
                        _updatedAt: "2022-06-03T03:24:55.395Z",
                        foo: false,
                        bar: "bar",
                    },
                ]);
            },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("sets preview.select", function () {
        return (0, globals_1.expect)((0, _1.document)({
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
    (0, globals_1.it)("types prepare function", function () {
        var _a, _b;
        var type = (0, _1.document)({
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
            _createdAt: "2022-06-03T03:24:55.395Z",
            _id: "2106a34f-315f-44bc-929b-bf8e9a3eba0d",
            _rev: "somerevstring",
            _type: "foo",
            _updatedAt: "2022-06-03T03:24:55.395Z",
            bar: "someBar",
            foo: "someFoo",
        };
        (0, globals_1.expect)((_b = (_a = schema.preview) === null || _a === void 0 ? void 0 : _a.prepare) === null || _b === void 0 ? void 0 : _b.call(_a, value)).toEqual({
            title: "someFoo",
            subtitle: "someBar",
        });
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.document)({
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
        var parsedValue = type.parse({
            _createdAt: "2022-06-03T03:24:55.395Z",
            _id: "2106a34f-315f-44bc-929b-bf8e9a3eba0d",
            _rev: "somerevstring",
            _type: "foo",
            _updatedAt: "2022-06-03T03:24:55.395Z",
            foo: true,
        });
        (0, globals_1.expect)(parsedValue).toEqual(globals_1.expect.arrayContaining([
            ["_createdAt", new Date("2022-06-03T03:24:55.395Z")],
            ["_id", "2106a34f-315f-44bc-929b-bf8e9a3eba0d"],
            ["_rev", "somerevstring"],
            ["_type", "foo"],
            ["_updatedAt", new Date("2022-06-03T03:24:55.395Z")],
            ["foo", 1],
        ]));
    });
    (0, globals_1.it)("types custom validation", function () {
        var _a, _b;
        var type = (0, _1.document)({
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
});
//# sourceMappingURL=index.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("block", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.block)().schema()).toEqual({ type: "block" });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.block)({ hidden: false }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("parses into a block", function () {
        var type = (0, _1.block)();
        var value = {
            style: "normal",
            _type: "block",
            markDefs: [],
            children: [
                {
                    _type: "span",
                    text: "Amazing, actually.",
                    marks: [],
                },
            ],
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("resolves into a block", function () {
        var type = (0, _1.block)();
        var value = {
            style: "normal",
            _type: "block",
            markDefs: [],
            children: [
                {
                    _type: "span",
                    text: "Amazing, actually.",
                    marks: [],
                },
            ],
        };
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual(value);
    });
    (0, globals_1.it)("mocks block content", function () {
        return (0, globals_1.expect)((0, _1.block)().mock(faker_1.faker)).toEqual({
            style: "normal",
            _type: "block",
            markDefs: [],
            children: [
                {
                    _type: "span",
                    text: globals_1.expect.any(String),
                    marks: [],
                },
            ],
        });
    });
    (0, globals_1.it)("mocks the same value with the same path", function () {
        (0, globals_1.expect)((0, _1.block)().mock(faker_1.faker)).toEqual((0, _1.block)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.block)().mock(faker_1.faker, ".foo")).toEqual((0, _1.block)().mock(faker_1.faker, ".foo"));
        (0, globals_1.expect)((0, _1.block)().mock(faker_1.faker, ".foo")).not.toEqual((0, _1.block)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.block)().mock(faker_1.faker)).not.toEqual((0, _1.block)().mock(faker_1.faker, ".foo"));
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)([
            {
                style: "normal",
                _type: "block",
                markDefs: [],
                children: [
                    {
                        _type: "span",
                        text: "That was ",
                        marks: [],
                    },
                    {
                        _type: "span",
                        text: "bold",
                        marks: ["strong"],
                    },
                    {
                        _type: "span",
                        text: " of you.",
                        marks: [],
                    },
                ],
            },
            {
                style: "normal",
                _type: "block",
                markDefs: [],
                children: [
                    {
                        _type: "span",
                        text: "Amazing, actually.",
                        marks: [],
                    },
                ],
            },
        ]).toContainEqual((0, _1.block)({
            mock: function (faker) {
                return faker.helpers.arrayElement([
                    {
                        style: "normal",
                        _type: "block",
                        markDefs: [],
                        children: [
                            {
                                _type: "span",
                                text: "That was ",
                                marks: [],
                            },
                            {
                                _type: "span",
                                text: "bold",
                                marks: ["strong"],
                            },
                            {
                                _type: "span",
                                text: " of you.",
                                marks: [],
                            },
                        ],
                    },
                    {
                        style: "normal",
                        _type: "block",
                        markDefs: [],
                        children: [
                            {
                                _type: "span",
                                text: "Amazing, actually.",
                                marks: [],
                            },
                        ],
                    },
                ]);
            },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.block)({
            zod: function (zod) { return zod.transform(function (_a) {
                var _type = _a._type;
                return _type;
            }); },
        });
        var parsedValue = type.parse({
            style: "normal",
            _type: "block",
            markDefs: [],
            children: [
                {
                    _type: "span",
                    text: "Amazing, actually.",
                    marks: [],
                },
            ],
        });
        (0, globals_1.expect)(parsedValue).toEqual("block");
    });
    (0, globals_1.it)("types custom validation", function () {
        var _a, _b;
        var type = (0, _1.block)({
            validation: function (Rule) {
                return Rule.custom(function (block) { var _a, _b; return ((_b = (_a = block.children) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0 || "Needs to have children"; });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        (_b = (_a = type.schema()).validation) === null || _b === void 0 ? void 0 : _b.call(_a, rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
});
//# sourceMappingURL=index.spec.js.map
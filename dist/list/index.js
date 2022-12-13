"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMock = exports.listValueToValue = void 0;
var fp_1 = require("lodash/fp");
var listValueToValue = function (item) {
    return (0, fp_1.isObject)(item) && "title" in item && "value" in item ? item.value : item;
};
exports.listValueToValue = listValueToValue;
var listMock = function (list) {
    return function (faker) {
        return (0, fp_1.flow)((0, fp_1.map)(exports.listValueToValue), faker.helpers.arrayElement.bind(faker.helpers))(list);
    };
};
exports.listMock = listMock;
//# sourceMappingURL=index.js.map
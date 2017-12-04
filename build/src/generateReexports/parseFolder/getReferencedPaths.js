"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../tools");
const importRegex = /((export|import)\s*(\*(\s*as\s*[^\s]*)?|{.*}|)\s*from\s*['|"]([^'^"]*)['|"]);?/g;
function getReferencedPaths(contents) {
    return tools_1.execRegex(importRegex, contents).map(match => match[5]);
}
exports.getReferencedPaths = getReferencedPaths;
//# sourceMappingURL=getReferencedPaths.js.map
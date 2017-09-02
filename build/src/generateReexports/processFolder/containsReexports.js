"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function containsReexports(content) {
    return hasMatch(content);
}
exports.containsReexports = containsReexports;
const funcRegex = /export[\s]*function|export[\s]*async[\s]*function/;
const typeRegex = /export[\s]*interface|export[\s]*type|export[\s]*enum|export[\s]*class/;
const constRegex = /export[\s]*const[\s]*[^\s]*[\s]*=/;
function hasMatch(content) {
    const hasFunc = !!funcRegex.exec(content);
    const hasType = !!typeRegex.exec(content);
    const hasConst = !!constRegex.exec(content);
    return hasFunc || hasType || hasConst;
}
//# sourceMappingURL=containsReexports.js.map
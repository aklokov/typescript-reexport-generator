"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canOverwriteIndex(indexContents, files) {
    const lines = indexContents.split(/\r?\n|;/)
        .map(line => line.trim())
        .filter(line => line.length);
    const onlyReexports = !lines.find(line => !onlyReexport(line, files));
    return onlyReexports;
}
exports.canOverwriteIndex = canOverwriteIndex;
const reexportRegex = /(export \* from '\.\/([^\'^\\^\/]*)');?/;
function onlyReexport(line, files) {
    const match = reexportRegex.exec(line);
    return !!match && (match[1] === line) && (files.includes(match[2]));
}
//# sourceMappingURL=canOverwriteIndex.js.map
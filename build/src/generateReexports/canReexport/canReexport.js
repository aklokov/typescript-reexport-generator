"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canReexport(indexContents, folders) {
    const lines = indexContents.split(/\r?\n|;/)
        .map(line => line.trim())
        .filter(line => line.length);
    const onlyReexports = !lines.find(line => !onlyReexport(line, folders));
    return onlyReexports;
}
exports.canReexport = canReexport;
const reexportRegex = /(export \* from '\.\/([^\'^\\^\/]*)');?/;
function onlyReexport(line, folders) {
    const match = reexportRegex.exec(line);
    return !!match && (match[1] === line) && (folders.indexOf(match[2]) === -1);
}
//# sourceMappingURL=canReexport.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fse = require("fs-extra");
async function isDirectory(path) {
    const stats = await fse.lstat(path);
    return stats.isDirectory();
}
exports.isDirectory = isDirectory;
async function needToWrite(path, content) {
    const exists = await fse.pathExists(path);
    if (!exists) {
        return true;
    }
    const existing = await fse.readFile(path, 'utf8');
    return content !== existing;
}
async function gracefulWriteFile(path, content) {
    if (!await needToWrite(path, content)) {
        return;
    }
    console.log('Writing ' + path);
    await fse.writeFile(path, content);
}
exports.gracefulWriteFile = gracefulWriteFile;
//# sourceMappingURL=extraFs.js.map
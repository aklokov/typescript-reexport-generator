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
    const existing = await readFile(path);
    return content !== existing;
}
async function gracefulWriteFile(path, content) {
    if (!await needToWrite(path, content)) {
        return;
    }
    console.log('Writing ' + path);
    await writeFile(path, content);
}
exports.gracefulWriteFile = gracefulWriteFile;
async function readFile(file) {
    return fse.readFile(file, 'utf8');
}
exports.readFile = readFile;
async function writeFile(file, content) {
    await fse.writeFile(file, content);
}
exports.writeFile = writeFile;
//# sourceMappingURL=fse.js.map
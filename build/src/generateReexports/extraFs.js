"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fse = require("fs-extra");
const _1 = require(".");
function isDirectory(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = yield fse.lstat(path);
        return stats.isDirectory();
    });
}
exports.isDirectory = isDirectory;
function gracefulFileWrite(path, content) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const existing = yield fse.readFile(path, 'utf8');
            if (existing === content) {
                return;
            }
        }
        catch (err) {
        }
        try {
            yield fse.writeFile(path, content);
            console.log('Written ' + path);
        }
        catch (err) {
            console.log('Error writing ' + path + _1.constants.linefeed + err);
        }
    });
}
exports.gracefulFileWrite = gracefulFileWrite;
//# sourceMappingURL=extraFs.js.map
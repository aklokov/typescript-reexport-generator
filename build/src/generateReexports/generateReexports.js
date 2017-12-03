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
const ts_files_helper_1 = require("ts-files-helper");
const parseFolder_1 = require("./parseFolder");
const defaultOptions = {
    lineFeed: '\n'
};
function generateReexports(globs, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        options = Object.assign({}, defaultOptions, options);
        const folders = yield ts_files_helper_1.collectFolders(globs);
        const models = yield Promise.all(folders.map(parseFolder_1.parseFolder));
    });
}
exports.generateReexports = generateReexports;
//# sourceMappingURL=generateReexports.js.map
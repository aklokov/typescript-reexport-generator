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
const tools_1 = require("../tools");
const _1 = require(".");
function getFilesToReexport(folder) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = folder.tsFiles.map(file => checkTsFile(folder.path, file));
        const checked = yield Promise.all(promises);
        return checked.filter(c => c);
    });
}
exports.getFilesToReexport = getFilesToReexport;
function checkTsFile(path, file) {
    return __awaiter(this, void 0, void 0, function* () {
        const content = yield fse.readFile(tools_1.combinePath(path, file), 'utf8');
        return _1.containsReexports(content) ? file : null;
    });
}
//# sourceMappingURL=getFilesToReexport.js.map
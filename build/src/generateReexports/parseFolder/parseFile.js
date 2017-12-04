"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../tools");
const ts_files_helper_1 = require("ts-files-helper");
const getReferencedPaths_1 = require("./getReferencedPaths");
async function parseFile(folder, file, tsConfig) {
    const content = await tools_1.readFile(tools_1.combinePath(folder, file));
    const hasExports = !!ts_files_helper_1.getExportedNames(content).length;
    const references = getReferencedPaths_1.getReferencedPaths(content);
    return {
        name: file,
        hasExports,
        references: references.map(ref => ts_files_helper_1.calculateRealPath(tsConfig, folder, ref))
    };
}
exports.parseFile = parseFile;
//# sourceMappingURL=parseFile.js.map
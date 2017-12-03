"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../tools");
const ts_files_helper_1 = require("ts-files-helper");
async function parseFile(folder, file, tsConfig) {
    const content = await tools_1.readFile(tools_1.combinePath(folder, file));
    const hasExports = !!ts_files_helper_1.getExportedNames(content).length;
    const imports = ts_files_helper_1.parseImports(tsConfig, content, folder);
    return {
        name: file,
        hasExports,
        imports
    };
}
exports.parseFile = parseFile;
//# sourceMappingURL=parseFile.js.map
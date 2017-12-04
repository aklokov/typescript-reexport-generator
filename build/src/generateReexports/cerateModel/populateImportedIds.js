"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hash_map_1 = require("hash-map");
function populateImportedIds(files) {
    const byId = hash_map_1.toStringMap(files, file => file.id);
    const byFolder = hash_map_1.toStringLookup(files, file => file.folder, file => file);
    return files;
}
exports.populateImportedIds = populateImportedIds;
//# sourceMappingURL=populateImportedIds.js.map
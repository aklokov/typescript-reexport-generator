import { ParsedFolder, ParsedFile } from '../parseFolder';
import { FolderModel, FileModel } from './folderModel';
import { combinePath, stripExtension } from '../tools';
import { populateImportedIds } from './populateImportedIds';

export function createFolder(folder: ParsedFolder): FolderModel {
  const files = folder.files.map(file => createFile(file, folder));
  return {
    id: folder.path,
    canWriteIndex: folder.canWriteIndex,
    files
  };
}

function createFile(file: ParsedFile, folder: ParsedFolder): FileModel {
  const name = stripExtension(file.name);
  return {
    id: combinePath(folder.path, name),
    folder: folder.path,
    name,
    hasExports: file.hasExports,
    references: file.references,
    importedIds: null
  };
}

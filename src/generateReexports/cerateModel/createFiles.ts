import { ParsedFolder, ParsedFile } from '../parseFolder';
import { FolderModel, FileModel } from './folderModel';
import { combinePath, stripExtension } from '../tools';
import { populateImportedIds } from './populateImportedIds';

export function createEmptyFolderModels(folders: ParsedFolder[]): FolderModel[] {
  return folders.map(folder => ({ id: folder.path, canWriteIndex: folder.canWriteIndex, files: null }));
}

export function createFiles(folders: ParsedFolder[]): FileModel[] {
  let files: FileModel[] = [];
  folders.forEach(folder => {
    const models = folder.files.map(file => createFile(file, folder));
    files = [...files, ...models];
  });
  return populateImportedIds(files);
}

function createFile(file: ParsedFile, folder: ParsedFolder): FileModel {
  const name = stripExtension(file.name);
  return {
    id: combinePath(folder.path, name),
    folder: folder.path,
    name,
    hasExports: file.hasExports,
    imports: file.imports,
    importedIds: null
  };
}

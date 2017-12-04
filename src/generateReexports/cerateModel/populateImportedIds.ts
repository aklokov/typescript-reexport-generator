import { FolderModel, FileModel } from './folderModel';
import { toStringMap, StringMap, toStringLookup } from 'hash-map';

export function populateImportedIds(files: FileModel[]): FileModel[] {
  const byId = toStringMap(files, file => file.id);
  const byFolder = toStringLookup(files, file => file.folder, file => file);
  return files; // .map(file => populateFileImports(file, byId, byFolder));
}


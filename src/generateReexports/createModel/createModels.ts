import { ParsedFolder } from '../parseFolder';
import { FolderModel, FileModel } from './folderModel';
import { createFolder } from './createFolder';
import { populateImportedIds } from './populateImportedIds';

export function createModels(folders: ParsedFolder[]): FolderModel[] {
  const folderModels = folders.map(createFolder);
  return populateImportedIds(folderModels);
  return folderModels;
}



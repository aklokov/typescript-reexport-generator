import { ParsedFolder } from '../parseFolder';
import { FolderModel, FileModel } from './folderModel';
import { createFiles } from './createFiles';
import { toStringMap } from 'hash-map';

export function createModels(folders: ParsedFolder[]): FolderModel[] {
  // const folderModels = createEmptyFolderModels(folders);
  // const folderMap = toStringMap(folders, folder => folder.path);
  const files = createFiles(folders);
  return null;
}



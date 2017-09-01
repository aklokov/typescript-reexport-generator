import { Folder, getFilesWithIsDir, FileIsDir } from '.';
import { combinePath } from '../../tools';
import { constants } from '../constants';
import * as fse from 'fs-extra';
import * as _ from 'lodash';

export async function collectFolders(path: string): Promise<Folder[]> {
  const files = await getFilesWithIsDir(path);
  const folders = files.filter(file => file.isDir).map(file => file.file);
  const folderPromises = folders.map(folder => collectFolders(combinePath(path, folder)));
  const folderData = _.flatten(await Promise.all(folderPromises));
  const thisFolder = getFolder(path, files, folders);
  return thisFolder ? [thisFolder, ...folderData] : folderData;
}

function getFolder(path: string, files: FileIsDir[], folders: string[]): Folder {
  const allTsFiles = files.filter(file => !file.isDir).map(file => file.file).filter(file => isTsFile(file));
  if (!allTsFiles.length) {
    return null;
  }
  const withoutIndex = allTsFiles.filter(file => file !== constants.index);
  return {
    path,
    index: allTsFiles.length > withoutIndex.length,
    tsFiles: withoutIndex,
    folders
  };
}

function isTsFile(file: string): boolean {
  return file.endsWith(constants.ts) || file.endsWith(constants.tsx);
}

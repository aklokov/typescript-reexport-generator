import { Folder } from '../collectFolders';
import * as fse from 'fs-extra';
import { canOverwriteIndex, indexPath, composeFile } from '.';
import { Options } from '..';
import { gracefulWriteFile } from '../tools';

export async function canModifyIndex(folder: Folder): Promise<boolean> {
  if (!folder.index) {
    return true;
  }

  const indexContent = await fse.readFile(indexPath(folder), 'utf8');
  return canOverwriteIndex(indexContent, folder.folders);
}

export async function writeReexports(folder: Folder, files: string[], options: Options): Promise<void> {
  await gracefulWriteFile(indexPath(folder), composeFile(files, options));
}

export async function deleteIndex(folder: Folder): Promise<void> {
  const file = indexPath(folder);
  console.log('Unlinking ' + file);
  await fse.unlink(file);
}

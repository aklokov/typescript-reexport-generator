import { Folder } from 'ts-files-helper';
import { ParsedFolder } from './parsedFolder';
import { contains, combinePath, stripExtension } from '../tools';
import { canOverwriteIndex } from './canOverwriteIndex';
import * as fse from 'fs-extra';
const indexFile = 'index.ts';

export async function createEmptyFolder(folder: Folder): Promise<ParsedFolder> {
  const hasIndex = contains(folder.files, indexFile);
  if (hasIndex) {
    return {
      path: folder.path,
      canWriteIndex: true,
      files: null
    };
  }

  const path = combinePath(folder.path, indexFile);
  const indexContent = await fse.readFile(path, 'utf8');
  const files = folder.files.map(stripExtension);
  return {
    path: folder.path,
    canWriteIndex: canOverwriteIndex(indexContent, files),
    files: null
  };
}

import { Folder } from 'ts-files-helper';
import { ParsedFolder } from './parsedFolder';
import { contains, combinePath, stripExtension, readFile } from '../tools';
import { canOverwriteIndex } from './canOverwriteIndex';
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
  const indexContent = await readFile(path);
  const files = folder.files.map(stripExtension);
  return {
    path: folder.path,
    canWriteIndex: canOverwriteIndex(indexContent, files),
    files: null
  };
}

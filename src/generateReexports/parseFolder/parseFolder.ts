import { Folder } from 'ts-files-helper';
import { ParsedFolder, ParsedFile } from './parsedFolder';
import { createEmptyFolder } from './createEmptyFolder';
import { parseFile } from './parseFile';

export async function parseFolder(folder: Folder, tsConfig: any): Promise<ParsedFolder> {
  const [emptyFolder, files] = await Promise.all([createEmptyFolder(folder), parseFiles(folder, tsConfig)]);
  return {
    ...emptyFolder,
    files
  };
}

async function parseFiles(folder: Folder, tsConfig: any): Promise<ParsedFile[]> {
  return Promise.all(folder.files.map(file => parseFile(folder.path, file, tsConfig)));
}

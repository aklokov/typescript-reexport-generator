import { Options } from '.';
import { collectFolders, Folder } from 'ts-files-helper';
import { parseFolder } from './parseFolder';

const defaultOptions: Options = {
  lineFeed: '\n',
  tsconfig: {}
};

export async function generateReexports(globs: string | string[], options: Options = {}): Promise<void> {
  options = { ...defaultOptions, ...options };
  const folders = await collectFolders(globs);
  const models = await Promise.all(folders.map(folder => parseFolder(folder, options.tsconfig)));
}

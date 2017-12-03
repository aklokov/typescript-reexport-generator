import { Options } from '.';
import { collectFolders, Folder } from 'ts-files-helper';
import { parseFolder } from './parseFolder';
import { combinePath } from './tools';
const defaultOptions: Options = {
  lineFeed: '\n',
  tsconfig: {}
};

export async function generateReexports(paths: string | string[], options: Options = {}): Promise<void> {
  options = { ...defaultOptions, ...options };
  const globs = createGlobs(paths);
  const folders = await collectFolders(globs);
  const models = await Promise.all(folders.map(folder => parseFolder(folder, options.tsconfig)));
  const result = null;
}

function createGlobs(paths: string | string[]): string[] {
  if (!Array.isArray(paths)) {
    paths = [paths];
  }

  return [...paths.map(path => combinePath(path, '**/*.ts')), ...paths.map(path => combinePath(path, '**/*.tsx'))];
}

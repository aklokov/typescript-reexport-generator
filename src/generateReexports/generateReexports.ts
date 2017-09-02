import * as fse from 'fs-extra';

import { normalizePath, Options } from '.';
import { collectFolders } from './collectFolders';
import { processFolder } from './processFolder';
const defaultOptions: Options = {
  lineFeed: '\n'
};

export async function generateReexports(path: string, options: Options = {}): Promise<void> {
  const normalized = normalizePath(path);
  options = { ...defaultOptions, ...options };
  const folders = await collectFolders(path);
  await Promise.all(folders.map(folder => processFolder(folder, options)));
}

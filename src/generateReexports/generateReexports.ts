import * as fse from 'fs-extra';

import { normalizePath, Options } from '.';
import { collectFolders } from './collectFolders';

const defaultOptions: Options = {
  lineFeed: '\n'
};

export async function generateReexports(path: string, options: Options = {}): Promise<void> {
  const normalized = normalizePath(path);
  options = { ...defaultOptions, ...options };
  const folders = await collectFolders(path);
  return;
}

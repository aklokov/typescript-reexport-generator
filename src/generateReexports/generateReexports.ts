import * as fse from 'fs-extra';
import { normalizePath, getFileIsDir, generateteReexportInDir, Options } from '.';

const defaultOptions: Options = {
  lineFeed: '\n'
};

export async function generateReexports(path: string, options: Options = {}): Promise<void> {
  return generateReexportsImpl(normalizePath(path), { ...defaultOptions, ...options });
}

async function generateReexportsImpl(path: string, options: Options = {}): Promise<void> {
  const allFiles = await fse.readdir(path);
  const fileIsDirs = await Promise.all(allFiles.map(file => getFileIsDir(path, file)));
  const dirs = fileIsDirs.filter(file => file.isDir);
  const dirPromises = dirs.map(dir => generateReexportsImpl(dir.fullPath, options));
  const filePromise = generateteReexportInDir(path, fileIsDirs, options);
  await Promise.all([...dirPromises, filePromise]);
}

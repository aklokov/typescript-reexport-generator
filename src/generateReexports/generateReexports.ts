import * as fse from 'fs-extra';
import { normalizePath, getFileIsDir, generateteReexportInDir } from '.';

export async function generateReexports(path: string): Promise<void> {
  path = normalizePath(path);
  const allFiles = await fse.readdir(path);
  const fileIsDirs =  await Promise.all(allFiles.map(file => getFileIsDir(path, file)));
  const dirs = fileIsDirs.filter(file => file.isDir);
  const dirPromises = dirs.map(dir => generateReexports(dir.fullPath));
  const filePromise = generateteReexportInDir(path, fileIsDirs);
  await Promise.all([...dirPromises, filePromise]);
}

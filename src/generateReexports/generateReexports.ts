import * as fse from 'fs-extra';
import { normalizePath, getFilesWithStatues, generateteReexportInDir } from '.';

export async function generateReexports(path: string): Promise<void> {
  path = normalizePath(path);
  const files = await getFilesWithStatues(path);
  const dirs = files.filter(file => file.isDirectory);
  const dirPromises = dirs.map(dir => generateReexports(dir.path));
  const filePromise = generateteReexportInDir(path, files);
  await Promise.all([...dirPromises, filePromise]);
}

import { isDirectory, combinePath } from '.';
import * as fse from 'fs-extra';

export interface FileStatus {
  path: string;
  isDirectory: boolean;
}

export async function getFilesWithStatues(path: string): Promise<FileStatus[]> {
  const files = await fse.readdir(path);
  const results = await Promise.all(files.map(file => getFileStatus(path, file)));
  return results;
}

async function getFileStatus(path: string, file: string): Promise<FileStatus> {
  const fullPath = combinePath(path, file);
  const isDir = await isDirectory(fullPath);
  return {
    path: fullPath,
    isDirectory: isDir
  };
}

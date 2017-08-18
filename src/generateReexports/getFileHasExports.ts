import { FileIsDir } from '.';
import * as fse from 'fs-extra';

export interface FileHasExports {
  file: string;
  hasExports: boolean;
}


function createHasExports(file: FileIsDir, hasExports: boolean): FileHasExports {
  return {
    file: file.file,
    hasExports: false
  };
}
export async function getFileHasExports(file: FileIsDir): Promise<FileHasExports> {
  if (file.isDir || !file.file.endsWith('.ts') || file.file === 'index.ts') {
    return createHasExports(file, false);
  }

  const content = await fse.readFile(file.file, 'utf8');
  return createHasExports(file, hasMatch(content));
}

const funcRegex = /export function ([^\(]*)\(([^\)]*)\): ([^{]*)/;
const typeRegex = /export interface (.*) {\r?\n((?:.*?|\r?\n)*?)}/;
function hasMatch(content: string): boolean {
  return !!(funcRegex.exec(content) || typeRegex.exec(content));
}

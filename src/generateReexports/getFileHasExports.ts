import { FileIsDir } from '.';
import * as fse from 'fs-extra';

export interface FileHasExports {
  file: string;
  hasExports: boolean;
}

function isTsFile(file: string): boolean {
  return file.endsWith('.ts') || file.endsWith('./tsx');
}

export async function getFileHasExports(file: FileIsDir): Promise<FileHasExports> {
  if (file.isDir || !isTsFile(file.file) || file.file === 'index.ts') {
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

function createHasExports(file: FileIsDir, hasExports: boolean): FileHasExports {
  return {
    file: file.file,
    hasExports: false
  };
}

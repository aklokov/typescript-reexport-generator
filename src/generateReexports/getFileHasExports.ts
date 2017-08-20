import { FileIsDir } from '.';
import * as fse from 'fs-extra';

export interface FileHasExports {
  file: string;
  hasExports: boolean;
}

function isTsFile(file: string): boolean {
  return (file.endsWith('.ts') || file.endsWith('./tsx')) && !file.endsWith('.d.ts');
}

export async function getFileHasExports(file: FileIsDir): Promise<FileHasExports> {
  if (file.isDir || !isTsFile(file.file) || file.file === 'index.ts') {
    return createHasExports(file, false);
  }

  const content = await fse.readFile(file.fullPath, 'utf8');
  return createHasExports(file, hasMatch(content));
}

const funcRegex = /export[\s]*function|export[\s]*async[\s]*function/;
const typeRegex = /export[\s]*interface|export[\s]*type|export[\s]*enum/;
const constRegex = /export[\s]*const[\s]*[^\s]*[\s]*=/;
function hasMatch(content: string): boolean {
  const hasFunc = !!funcRegex.exec(content);
  const hasType = !!typeRegex.exec(content);
  const hasConst = !!constRegex.exec(content);
  return hasFunc || hasType || hasConst;
}

function createHasExports(file: FileIsDir, hasExports: boolean): FileHasExports {
  return {
    file: file.file,
    hasExports
  };
}

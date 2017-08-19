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

  const content = await fse.readFile(file.fullPath, 'utf8');
  return createHasExports(file, hasMatch(content));
}

const exportRegex = /export[\s]*function|export[\s]*async[\s]*function|export[\s]*interface|export[\s]*type/;
function hasMatch(content: string): boolean {
  return !!exportRegex.exec(content);
}

function createHasExports(file: FileIsDir, hasExports: boolean): FileHasExports {
  return {
    file: file.file,
    hasExports
  };
}

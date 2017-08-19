import { FileIsDir, getFileHasExports, canCreateReexport, constants, combinePath, gracefulFileWrite } from '.';
import * as fse from 'fs-extra';

export async function generateteReexportInDir(path: string, files: FileIsDir[]): Promise<void> {
  const canCreate = await canCreateReexport(files);
  if (!canCreate) {
    return;
  }

  const filesWithExports = await Promise.all(files.map(getFileHasExports));
  const lines = filesWithExports
    .filter(file => file.hasExports)
    .map(file => stripExtension(file.file))
    .map(createReexport);
  const content = lines.join(constants.linefeed) + constants.linefeed;
  const indexPath = combinePath(path, constants.index);
  await gracefulFileWrite(indexPath, content);
}

function stripExtension(file: string): string {
  const lastDot = file.lastIndexOf('.');
  return file.substr(0, lastDot);
}

function createReexport(file: string): string {
  return `export * from '.\\${file}'`;
}


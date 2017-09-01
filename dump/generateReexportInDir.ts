import {
  FileIsDir, getFileHasExports, canCreateReexport, constants,
  combinePath, gracefulWriteFile, Options
} from '.';
import * as fse from 'fs-extra';

export async function generateteReexportInDir(path: string, files: FileIsDir[], options: Options): Promise<void> {
  const canCreate = await canCreateReexport(files);
  if (!canCreate) {
    return;
  }

  const filesWithExports = await Promise.all(files.map(getFileHasExports));
  const exportFiles = filesWithExports
    .filter(file => file.hasExports)
    .map(file => stripExtension(file.file));
  if (!exportFiles.length) {
    return;
  }
  const lines = exportFiles
    .map(createReexport);
  const content = lines.join(options.lineFeed) + options.lineFeed;
  const indexPath = combinePath(path, constants.index);
  await gracefulWriteFile(indexPath, content);
}

function stripExtension(file: string): string {
  const lastDot = file.lastIndexOf('.');
  return file.substr(0, lastDot);
}

function createReexport(file: string): string {
  return `export * from './${file}';`;
}


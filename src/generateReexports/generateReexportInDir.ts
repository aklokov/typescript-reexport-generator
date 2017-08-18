import { FileIsDir } from '.';

export async function generateteReexportInDir(path: string, files: FileIsDir[]): Promise<void> {
  const filesWithExports = await Promise.all(files.map(getFileHasExport));
}


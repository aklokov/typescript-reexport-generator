import { FileIsDir, constants } from '.';
import * as fse from 'fs-extra';


export async function canCreateReexport(files: FileIsDir[]): Promise<boolean> {
  const index = files.find(file => !file.isDir && file.file === constants.index);
  if (!index) {
    return true;
  }

  const content = await fse.readFile(index.fullPath, 'utf8');
  const lines = content.split(/\r?\n|;/).filter(line => line.length);
  const onlyReexports = !lines.find(line => !reexportsOnly(line));
  return onlyReexports;
}

const reexportRegex = /(export \* from '[^\']*')/;
function reexportsOnly(line: string): boolean {
  const match = reexportRegex.exec(line);
  return !!match && (match[1].trim() === line.trim());
}

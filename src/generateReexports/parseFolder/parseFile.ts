import { ParsedFile } from './parsedFolder';
import { combinePath, readFile } from '../tools';
import { getExportedNames, parseImports } from 'ts-files-helper';

export async function parseFile(folder: string, file: string, tsConfig: any): Promise<ParsedFile> {
  const content = await readFile(combinePath(folder, file));
  const hasExports = !!getExportedNames(content).length;
  const imports = parseImports(tsConfig, content, folder);
  return {
    name: file,
    hasExports,
    imports
  };
}

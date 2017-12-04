import { ParsedFile } from './parsedFolder';
import { combinePath, readFile } from '../tools';
import { getExportedNames, calculateRealPath } from 'ts-files-helper';
import { getReferencedPaths } from './getReferencedPaths';

export async function parseFile(folder: string, file: string, tsConfig: any): Promise<ParsedFile> {
  const content = await readFile(combinePath(folder, file));
  const hasExports = !!getExportedNames(content).length;
  const references = getReferencedPaths(content);
  return {
    name: file,
    hasExports,
    references: references.map(ref => calculateRealPath(tsConfig, folder, ref))
  };
}

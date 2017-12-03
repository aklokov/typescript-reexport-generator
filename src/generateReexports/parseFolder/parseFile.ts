import { ParsedFile } from './parsedFolder';
import { combinePath } from '../tools';

export async function parseFile(folder: string, file: string): Promise<ParsedFile> {
  const path = combinePath(folder, file);
  return null;
}

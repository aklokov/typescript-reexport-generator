import { Folder } from '../collectFolders';
import * as fse from 'fs-extra';
import { combinePath } from '../tools';
import { containsReexports } from '.';

export async function getFilesToReexport(folder: Folder): Promise<string[]> {
  const promises = folder.tsFiles.map(file => checkTsFile(folder.path, file));
  const checked = await Promise.all(promises);
  return checked.filter(c => c);
}

async function checkTsFile(path: string, file: string): Promise<string> {
  const content = await fse.readFile(combinePath(path, file), 'utf8');
  return containsReexports(content) ? file : null;
}

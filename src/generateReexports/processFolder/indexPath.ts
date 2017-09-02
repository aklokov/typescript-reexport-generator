import { constants } from '..';
import { combinePath } from '../tools';
import { Folder } from '../collectFolders';

export function indexPath(folder: Folder): string {
  return combinePath(folder.path, constants.index);
}

import { Folder } from '../collectFolders';
import { getFilesToReexport, indexPath, canModifyIndex, writeReexports, deleteIndex } from '.';
import { Options } from '..';

export async function processFolder(folder: Folder, options: Options): Promise<void> {
  if (!await canModifyIndex(folder)) {
    return;
  }

  const files = await getFilesToReexport(folder);
  if (files.length) {
    await writeReexports(folder, files, options);
  } else if (folder.index) {
    await deleteIndex(folder);
  }
}

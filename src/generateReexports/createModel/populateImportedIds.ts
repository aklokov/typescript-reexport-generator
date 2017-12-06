import { FolderModel, FileModel } from './folderModel';
import { toStringMap, StringMap, toStringLookup } from 'hash-map';
import { flatMap } from '../tools';

export function populateImportedIds(folders: FolderModel[]): FolderModel[] {
  const foldersMap = toStringMap(folders, folder => folder.id);
  const filesMap = toStringMap(flatMap(folders, folder => folder.files), file => file.id);

  return folders.map(folder => populateIdsInFolder(folder, foldersMap, filesMap));
}

function populateIdsInFolder(folder: FolderModel, folders: StringMap<FolderModel>, files: StringMap<FileModel>): FolderModel {
  return {
    ...folder,
    files: folder.files.map(file => populateIdsInFile(file, folders, files))
  };
}

function populateIdsInFile(file: FileModel, folders: StringMap<FolderModel>, files: StringMap<FileModel>): FileModel {
  return {
    ...file,
    importedIds: flatMap(file.references, ref => getReferencedIds(ref, file, folders, files))
  };
}

const index = 'index';
function getReferencedIds(ref: string, file: FileModel, folders: StringMap<FolderModel>, files: StringMap<FileModel>): string[] {
  const refFile = files[ref];
  if (refFile) {
    return [refFile.id];
  }

  const refFolder = folders[ref];
  if (refFolder) {

    if (refFolder.canWriteIndex) {
      return refFolder.files.filter(file => file.name !== index).map(file => file.id);
    } else {
      return refFolder.files.filter(file => file.name === index).map(file => file.id);
    }
  }

  return [];
}

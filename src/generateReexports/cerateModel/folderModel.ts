import { Import } from 'ts-files-helper';

export interface FolderModel {
  id: string;
  canWriteIndex: boolean;
  files: FileModel[];
}

export interface FileModel {
  id: string;
  folder: string;
  name: string;
  hasExports: boolean;
  imports: Import[];
  importedIds: string[];
}

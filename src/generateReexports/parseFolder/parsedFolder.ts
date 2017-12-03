import { Import } from 'ts-files-helper';

export interface ParsedFolder {
  path: string;
  canWriteIndex: boolean;
  files: FolderFile[];
}

export interface FolderFile {
  name: string;
  imports: Import[];
}

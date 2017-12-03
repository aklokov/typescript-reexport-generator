import { Import } from 'ts-files-helper';

export interface ParsedFolder {
  path: string;
  canWriteIndex: boolean;
  files: ParsedFile[];
}

export interface ParsedFile {
  name: string;
  imports: Import[];
}

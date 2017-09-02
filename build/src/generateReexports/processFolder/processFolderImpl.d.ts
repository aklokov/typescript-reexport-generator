import { Folder } from '../collectFolders';
import { Options } from '..';
export declare function canModifyIndex(folder: Folder): Promise<boolean>;
export declare function writeReexports(folder: Folder, files: string[], options: Options): Promise<void>;
export declare function deleteIndex(folder: Folder): Promise<void>;

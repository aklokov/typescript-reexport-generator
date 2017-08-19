import { FileIsDir } from '.';
export interface FileHasExports {
    file: string;
    hasExports: boolean;
}
export declare function getFileHasExports(file: FileIsDir): Promise<FileHasExports>;

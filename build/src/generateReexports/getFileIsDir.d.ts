export interface FileIsDir {
    file: string;
    fullPath: string;
    isDir: boolean;
}
export declare function getFilesWithStatues(path: string): Promise<FileIsDir[]>;
export declare function getFileIsDir(path: string, file: string): Promise<FileIsDir>;

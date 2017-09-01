export interface FileIsDir {
    file: string;
    isDir: boolean;
}
export declare function getFilesWithIsDir(path: string): Promise<FileIsDir[]>;
export declare function getFileIsDir(path: string, file: string): Promise<FileIsDir>;

export interface ParsedFolder {
    path: string;
    canWriteIndex: boolean;
    files: ParsedFile[];
}
export interface ParsedFile {
    name: string;
    hasExports: boolean;
    references: string[];
}

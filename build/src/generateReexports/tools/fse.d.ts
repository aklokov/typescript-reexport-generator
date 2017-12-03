export declare function isDirectory(path: string): Promise<boolean>;
export declare function gracefulWriteFile(path: string, content: string): Promise<void>;
export declare function readFile(file: string): Promise<string>;
export declare function writeFile(file: string, content: string): Promise<void>;

export function stripExtension(file: string): string {
  const dotIndex = file.lastIndexOf('.');
  return dotIndex === -1 ? file : file.substr(0, dotIndex);
}

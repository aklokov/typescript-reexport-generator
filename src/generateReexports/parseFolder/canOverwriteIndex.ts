export function canOverwriteIndex(indexContents: string, files: string[]): boolean {
  const lines = indexContents.split(/\r?\n|;/)
    .map(line => line.trim())
    .filter(line => line.length);
  const onlyReexports = !lines.find(line => !onlyReexport(line, files));
  return onlyReexports;
}

const reexportRegex = /(export \* from '\.\/([^\'^\\^\/]*)');?/;
function onlyReexport(line: string, files: string[]): boolean {
  const match = reexportRegex.exec(line);
  return !!match && (match[1] === line) && (files.includes(match[2]));
}

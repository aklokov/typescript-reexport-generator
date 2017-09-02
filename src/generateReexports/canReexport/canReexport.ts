import { Folder } from '..';

export function canReexport(indexContents: string, folders: string[]): boolean {
  const lines = indexContents.split(/\r?\n|;/)
    .map(line => line.trim())
    .filter(line => line.length);
  const onlyReexports = !lines.find(line => !onlyReexport(line, folders));
  return onlyReexports;
}

const reexportRegex = /(export \* from '\.\/([^\'^\\^\/]*)');?/;
function onlyReexport(line: string, folders: string[]): boolean {
  const match = reexportRegex.exec(line);
  return !!match && (match[1] === line) && (folders.indexOf(match[2]) === -1);
}

import * as fse from 'fs-extra';

export async function isDirectory(path: string): Promise<boolean> {
  const stats = await fse.lstat(path);
  return stats.isDirectory();
}

async function needToWrite(path: string, content: string): Promise<boolean> {
  const exists = await fse.pathExists(path);
  if (!exists) {
    return true;
  }

  const existing = await readFile(path);
  return content !== existing;
}

export async function gracefulWriteFile(path: string, content: string): Promise<void> {
  if (!await needToWrite(path, content)) {
    return;
  }

  console.log('Writing ' + path);
  await writeFile(path, content);
}

export async function readFile(file: string): Promise<string> {
  return fse.readFile(file, 'utf8');
}

export async function writeFile(file: string, content: string): Promise<void> {
  await fse.writeFile(file, content);
}

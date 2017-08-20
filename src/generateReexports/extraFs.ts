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

  const existing = await fse.readFile(path, 'utf8');
  return content !== existing;
}

export async function gracefulFileWrite(path: string, content: string): Promise<void> {
  const need = await needToWrite(path, content);
  if (!need) {
    return;
  }

  try {
    await fse.writeFile(path, content);
    console.log('Written ' + path);
  } catch (err) {
    console.log('Error writing ' + path + '\n' + err);
  }
}

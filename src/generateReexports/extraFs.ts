import * as fse from 'fs-extra';
import { constants } from '.';
export async function isDirectory(path: string): Promise<boolean> {
  const stats = await fse.lstat(path);
  return stats.isDirectory();
}

export async function gracefulFileWrite(path: string, content: string): Promise<void> {
  try {
    const existing = await fse.readFile(path, 'utf8');
    if (existing === content) {
      return;
    }
  } catch (err) {
    // do nothing
  }

  try {
    await fse.writeFile(path, content);
    console.log('Written ' + path);
  } catch (err) {
    console.log('Error writing ' + path + constants.linefeed + err);
  }
}

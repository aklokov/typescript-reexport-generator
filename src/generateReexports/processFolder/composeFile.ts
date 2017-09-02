import { Options } from '..';
import * as _ from 'lodash';

export function composeFile(files: string[], options: Options): string {
  const stripped = files.map(file => stripExtension(file));
  const lines = _.uniq(stripped).map(file => `export * from './${file}';`);
  return lines.join(options.lineFeed) + options.lineFeed;
}

function stripExtension(file: string): string {
  const lastDot = file.lastIndexOf('.');
  return file.substr(0, lastDot);
}

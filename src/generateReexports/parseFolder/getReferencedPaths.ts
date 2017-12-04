import { execRegex } from '../tools';

const importRegex = /((export|import)\s*(\*(\s*as\s*[^\s]*)?|{.*}|)\s*from\s*['|"]([^'^"]*)['|"]);?/g;

export function getReferencedPaths(contents: string): string[] {
  return execRegex(importRegex, contents).map(match => match[5]);
}

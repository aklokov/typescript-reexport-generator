export function containsReexports(content: string): boolean {
  return hasMatch(content);
}

const funcRegex = /export[\s]*function|export[\s]*async[\s]*function/;
const typeRegex = /export[\s]*interface|export[\s]*type|export[\s]*enum|export[\s]*class/;
const constRegex = /export[\s]*const[\s]*[^\s]*[\s]*[:[\s]*[^\s]*[\s]*]?=/;
function hasMatch(content: string): boolean {
  const hasFunc = !!funcRegex.exec(content);
  const hasType = !!typeRegex.exec(content);
  const hasConst = !!constRegex.exec(content);
  return hasFunc || hasType || hasConst;
}

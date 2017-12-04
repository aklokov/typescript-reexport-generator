export function flatMap<T1, T2>(array: T1[], selector: (item: T1) => T2[]): T2[] {
  let result: T2[] = [];
  if (array) {
    array.forEach(item => result = [...result, ...selector(item)]);
  }

  return result;
}

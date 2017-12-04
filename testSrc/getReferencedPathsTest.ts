import { getReferencedPaths } from '../src/generateReexports/parseFolder';
import { expect } from 'chai';

describe('getReferencedPaths', function (): void {
  it('should return imported and exported paths', async function (): Promise<void> {
    // arrange
    const contents = `
    export * from "./someFile";
    export { abs } from './someDir';
    import * as smth from './somefile2';
    import { cde } from "@someref/somedir2";
    `;
    const paths = ['./someFile', './someDir', './somefile2', '@someref/somedir2'];

    // act
    const result = getReferencedPaths(contents);

    // assert
    expect(result).to.be.deep.equal(paths);
  });
});

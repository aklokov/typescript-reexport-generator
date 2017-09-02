import { composeFile } from '../src/generateReexports/processFolder';
import { expect } from 'chai';

describe('composeFile', function (): void {
  it('should correctly compose file', async function (): Promise<void> {
    // arrange
    const files = ['file1.ts', 'file2.ts'];
    const expected = `export * from './file1';
export * from './file2';
`;

    // act
    const result = composeFile(files, { lineFeed: '\n' });

    // assert
    expect(result).to.be.equal(expected);
  });

  it('should filter ts and tsx with same name', async function (): Promise<void> {
    // arrange
    const files = ['file1.ts', 'file1.tsx'];
    const expected = `export * from './file1';
`;

    // act
    const result = composeFile(files, { lineFeed: '\n' });

    // assert
    expect(result).to.be.equal(expected);
  });
});

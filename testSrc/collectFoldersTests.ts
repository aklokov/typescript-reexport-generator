import { collectFolders } from '../src/generateReexports/collectFolders';
import { Folder } from '../src/generateReexports';
import { expect } from 'chai';
import { toStringMap } from 'hash-map';

describe('collectFolders', function (): void {
  it('should correctly collect folders', async function (): Promise<void> {
    // arrange
    const expected: Folder[] = [{
      path: './testFolder',
      index: true,
      tsFiles: ['file1.ts', 'file2.tsx'],
      folders: ['childFolder', 'emptyFolder']
    },
    {
      path: './testFolder/childFolder',
      index: false,
      tsFiles: ['file4.ts'],
      folders: []
    },
    {
      path: './testFolder/emptyFolder/childOfEmptyFolder',
      index: true,
      tsFiles: [],
      folders: []
    }];

    // act
    const result = await collectFolders('./testFolder');

    // assert
    expect(result.length).to.be.equal(3);
    testFolders(result, expected);
  });
});

function testFolders(result: Folder[], expected: Folder[]): void {
  const map = toStringMap(result, result => result.path);
  expected.forEach(folder => testFolder(map[folder.path], folder));
}

function testFolder(result: Folder, expected: Folder): void {
  expect(result).to.be.not.equal(undefined);
  expect(result.index).to.be.equal(expected.index);
  expect(result.tsFiles).to.be.deep.equal(expected.tsFiles);
  expect(result.folders).to.be.deep.equal(expected.folders);
}

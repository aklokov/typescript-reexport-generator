import { canReexport } from '../src/generateReexports/canReexport';
import { Folder } from '../src/generateReexports';
import { expect } from 'chai';

describe('canReexport', function (): void {
  it('should return false if dir is reexported', async function (): Promise<void> {
    // arrange
    const index = `
    export * from './someFile';
    export * from './someDir';
    `;
    const folders = ['anotherDir', 'someDir'];

    // act
    const result = canReexport(index, folders);

    // assert
    expect(result).to.be.equal(false);
  });

  it('should return true if files are reexported with and without semicolon', async function (): Promise<void> {
    // arrange
    const index = `
    export * from './someFile';
    export * from './someFile2'
    export * from './someFile3';
`;
    const folders = ['anotherDir', 'someDir'];

    // act
    const result = canReexport(index, folders);

    // assert
    expect(result).to.be.equal(true);
  });

  it('should return false if something else is present', async function (): Promise<void> {
    // arrange
    const index = `export * from './someFile';
    let a = 1;`;
    const folders = ['anotherDir', 'someDir'];

    // act
    const result = canReexport(index, folders);

    // assert
    expect(result).to.be.equal(false);
  });

  it('should return false if step-out-of-folder is present', async function (): Promise<void> {
    // arrange
    const index = `
    export * from './someFile';
    export * from '../someFile2';
    `;
    const folders = ['anotherDir', 'someDir'];

    // act
    const result = canReexport(index, folders);

    // assert
    expect(result).to.be.equal(false);
  });

  it('should return false if composite path is present', async function (): Promise<void> {
    // arrange
    const index = `
    export * from './someFile';
    export * from './some/File2';
    `;
    const folders = ['anotherDir', 'someDir'];

    // act
    const result = canReexport(index, folders);

    // assert
    expect(result).to.be.equal(false);
  });
});

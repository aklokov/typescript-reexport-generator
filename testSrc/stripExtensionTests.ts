import { stripExtension } from '../src/generateReexports/tools';
import { expect } from 'chai';

describe('canOverwriteIndex', function (): void {
  it('should return file as is if no extension', async function (): Promise<void> {
    // arrange
    const file = 'file';

    // act
    const result = stripExtension(file);

    // assert
    expect(result).to.be.equal('file');
  });

  it('should return strip file extension', async function (): Promise<void> {
    // arrange
    const file = 'file.ts';

    // act
    const result = stripExtension(file);

    // assert
    expect(result).to.be.equal('file');
  });
});

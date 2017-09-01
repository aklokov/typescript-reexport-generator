import { normalizePath } from '../src/generateReexports';
import { expect } from 'chai';

describe('normalizePath', function (): void {
  it('should replace back slashes', async function (): Promise<void> {
    // arrange
    const src = '.\\a\\b';

    // act
    const result = normalizePath(src);

    // assert
    expect(result).to.be.equal('./a/b');
  });

  it('should not touch right slashes', async function (): Promise<void> {
    // arrange
    const src = './a/b';

    // act
    const result = normalizePath(src);

    // assert
    expect(result).to.be.equal('./a/b');
  });

  it('should not trim trailing slash', async function (): Promise<void> {
    // arrange
    const src = './a/b/';

    // act
    const result = normalizePath(src);

    // assert
    expect(result).to.be.equal('./a/b');
  });
});

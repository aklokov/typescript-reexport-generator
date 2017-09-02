import { containsReexports } from '../src/generateReexports/processFolder';
import { expect } from 'chai';

describe('containsReexports', function (): void {
  it('should return true if something is exported', async function (): Promise<void> {
    // arrange
    const content = [
      ' export function someFunction(){} ',
      ' export async function someAsync(){} ',
      ' export interface someInterface{} ',
      ' export class someClass {} ',
      ' export type someInterface{} ',
      ' export enum someEnum {} ',
      ' export const someConst = {} '
    ];

    // act
    const result = content.map(line => containsReexports(line));

    // assert
    const allTrue = !result.some(i => !i);
    expect(allTrue).to.be.equal(true);
  });

  it('should return false if nothing exported', async function (): Promise<void> {
    // arrange
    const content = `
    function someFunction(){}
    async function someAsync(){}
    interface someInterface{}
    class someClass {}
    type someInterface{}
    enum someEnum {}
    const someConst = {}
    `;

    // act
    const result = containsReexports(content);

    // assert
    expect(result).to.be.equal(false);
  });

});

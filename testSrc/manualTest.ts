import { generateReexports } from '../src';
import { expect } from 'chai';

describe('manual test', function (): void {
  it('should run', async function (): Promise<void> {
    const result = await generateReexports('../../nielsen/csapps-metadata-manager/app');
  });
});

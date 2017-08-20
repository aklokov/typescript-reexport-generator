import { generateReexports } from '../src/generateReexports';

describe('manualTest', function (): void {
  it('should not throw', async function (): Promise<void> {
    await generateReexports('.', { lineFeed: '\r\n' });
  });
});

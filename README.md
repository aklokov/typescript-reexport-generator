# typescript-reexport-generator
Searches through folders, finds files with lines like "export interface" or "export const a = " and creates index.ts in that folder with lines like this "export * from './file.ts'"
Does not automatically delete files, so if all exports are removed, this file has to be manually deleted, or it might cause typescript compilation issues

usage: 
create gulp task with code like this, and run it either manually or within gulp-watch

```
const gulp = require('gulp');
const generator = require('typescript-reexport-generator')

const options = { lineFeed: '\r\n' };

gulp.task('generate-reexports', function (done) {
  generator.generateReexports('./src', options)
    .then(done);
});
```
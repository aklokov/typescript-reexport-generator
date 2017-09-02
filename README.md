# typescript-reexport-generator

<h3>functionality</h3>
Searches recursively through folders in provided path, finds .ts and .tsx files with lines like "export interface" or "export const a = " etc. and produces index.ts in that folder containing following lines
```
export * from './file'
```


Take following into account
1) Regex is very simple, so if these lines are found inside comments, files gets reexportes just the same. Do not comment out your code. Never. Regardless of.
2) Inside string lines as well, so pay attention.
2) Automatically deletes index files if no exports present within folder
3) If anything other than reexport is found in index.ts, including comments and empty semicolons, file is considered off-limits, i.e. user managed.


<h3>usage</h3>
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
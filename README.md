# mark.js

Fork of the excellent [mark.js](https://github.com/julmot/mark.js) lib.
I removed some functionality I don't need.
The original lib is 900 LOC, this lib is 500 LOC.

## Changes

### UMD
No more. Just a commonjs export.
This also means the Mark object is no longer added to 
the window object.

### Iframe support
No more.

### Babel
No more. TypeScript is used to build the source,
but adding typings is still on the roadmap.

### Spaces
No more. Tabs, FTW.

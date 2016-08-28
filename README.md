
# rollup-babel-init

### Setup

```bash
git clone git@github.com:oct82/rollup-babel-init.git && cd rollup-babel-init
rm -rf .git && git init
npm i
npm run build

npm run umd
npm run cjs
# Open src/test/umd.htm
# Open src/test/iife.htm
```

Output should always be:
```
mda(3,3,3):

[[[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0]]]
```

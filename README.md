# A JS plugin that throws is reported as info and lint exits 0

```sh
npm install
npx biome lint main.js; echo "exit=$?"
npx biome lint --error-on-warnings main.js; echo "exit=$?"
```

**Actual:** the only diagnostic is `i Rule default errored: Error: boom`, an info, and `exit=0` both times.

**Expected:** an error diagnostic and a non-zero exit.

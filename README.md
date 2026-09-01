# Full Stack App Dev

Weekly progress log of practicing full-stack JavaScript/TypeScript development — from Node.js fundamentals to Express middleware, JWT authentication, DOM manipulation, and TypeScript.

## Structure

Organized week-by-week, following a full-stack development curriculum:

```
Fullstackappdev/
├── Week0/   # JS fundamentals — string/array algorithms, calculator, to-do list
├── Week1/   # File I/O, async/await, promises, a basic file server & to-do server
├── Week2/   # Express middlewares (rate limiting, error/request counting), JWT auth
├── Week3/   # DOM manipulation, Express routes/middlewares/database wiring
└── Week9/   # TypeScript — generics, types, interfaces
```

## What's in each week

| Week | Focus |
|---|---|
| Week0 | Core JS: vowel counting, largest number, anagrams, palindromes, object transactions |
| Week1 | Node.js I/O: file reading/writing, a file cleaner, promise-based sleep, servers |
| Week2 | Express middleware patterns: rate limiting, request/error counting, JWT auth |
| Week3 | DOM solutions, and a small Express app with routes, middlewares, and a database layer |
| Week9 | TypeScript fundamentals: generics, custom types, interfaces |

## Running

Most files are plain Node.js scripts:
```bash
node Week0/calculator.js
```

For the Week2/Week3 Express examples, install dependencies first (`express`, `jsonwebtoken`, etc. as referenced in each file) then run with `node`.

TypeScript files in `Week9/` can be run with `ts-node` or compiled with `tsc`.

## License

MIT — see [LICENSE](LICENSE).

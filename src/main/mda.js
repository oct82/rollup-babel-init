export default (...A) => ((g, ...B) => g(g, ...B))((f, d, ...D) => d ? [...Array(d)].map(() => f(f, ...D)) : 0, ...A)

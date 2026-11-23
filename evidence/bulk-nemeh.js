// node evidence/bulk-nemeh.js 100000  -> API-aar 100000 nom nemne (1000-aar bagtslan)
const n = Number(process.argv[2] || 1000);
(async () => {
  for (let i = 0; i < n; i += 1000) {
    await Promise.all(Array.from({ length: Math.min(1000, n - i) }, (_, k) =>
      fetch('http://localhost:3000/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'B' + (i + k), author: 'X', year: 2000 }),
      })));
  }
  console.log(n + ' nom nemev');
})();

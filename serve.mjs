import('serve/bin/serve.js').then(serveModule => {
  const args = ['-s', 'build', '-l', '3000']; // Customize your serve arguments as needed
  serveModule.handler(args);
});

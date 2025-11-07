{
  "compilerOptions": {
    "target": "ES6",                      // Gera código compatível com ES6
    "module": "ESNext",                   // Usa módulos modernos (ideal para bundlers como Vite, Webpack, etc.)
    "moduleResolution": "Node",           // Resolve módulos no estilo Node.js
    "outDir": "./dist",                   // Pasta de saída dos arquivos compilados
    "rootDir": "./src",                   // Pasta raiz do código fonte
    "baseUrl": ".",                       // Define a base para os paths relativos
    "paths": {
      "@/*": ["src/*"]                    // Alias para importar com "@/..."
    },
    "esModuleInterop": true,              // Permite importar módulos CommonJS
    "forceConsistentCasingInFileNames": true, // Evita problemas de case-sensitive em imports
    "strict": true,                       // Ativa verificações rigorosas de tipo
    "skipLibCheck": true,                 // Ignora checagem de tipos em arquivos de definição
    "sourceMap": true                     // Gera mapas de código fonte (útil para debug)
  },
  "include": ["src"],                     // Inclui a pasta src no build
  "exclude": ["node_modules", "dist"]     // Exclui pastas desnecessárias
}

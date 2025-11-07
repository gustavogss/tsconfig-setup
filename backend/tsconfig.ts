{
  "compilerOptions": {
    "target": "ES2020",                    // Código de saída compatível com Node moderno
    "module": "ESNext",                    // Usa módulos ES (import/export)
    "moduleResolution": "Node",            // Resolve módulos no estilo Node.js
    "outDir": "./dist",                    // Pasta de saída dos arquivos compilados
    "rootDir": "./src",                    // Código-fonte dentro de src
    "baseUrl": ".",                        // Base para resolver paths
    "paths": {
      "@/*": ["src/*"]                     // Alias para importações
    },
    "esModuleInterop": true,               // Permite importações de CommonJS
    "forceConsistentCasingInFileNames": true,
    "strict": true,                        // Habilita checagens rigorosas
    "skipLibCheck": true,                  // Ignora checagem de tipos em libs
    "sourceMap": true                      // Gera mapas de origem para debug
  },
  "include": ["src"],                      // Inclui pasta de código
  "exclude": ["node_modules", "dist"]      // Exclui pastas desnecessárias
}

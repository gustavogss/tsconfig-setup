{
  "compilerOptions": {
    "target": "ESNext",                     // Usa recursos modernos do JS
    "module": "ESNext",                     // Módulos compatíveis com React Native
    "jsx": "react-native",                  // Suporte ao JSX específico do RN
    "moduleResolution": "node",
    "allowJs": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,                         // Habilita checagens rigorosas
    "noEmit": true,                         // Não gera saída (Metro faz o build)
    "baseUrl": ".",                         // Base para os paths
    "paths": {
      "@/*": ["src/*"]                      // Alias para facilitar importações
    },
    "types": ["react", "react-native"]      // Tipos globais necessários
  },
  "include": ["src"],                       // Código-fonte
  "exclude": ["node_modules", "babel.config.js", "metro.config.js"]
}
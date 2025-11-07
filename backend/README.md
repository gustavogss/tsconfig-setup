⚙️ Como usar o alias @ no Node

Para o Node entender o alias @/src, você precisa de um pequeno ajuste dependendo da forma como roda o projeto:

✅ Opção 1 — Usando ts-node (em dev)

Instale o pacote:
```
npm install ts-node tsconfig-paths --save-dev
```

E no package.json, adicione no script de execução:
```
"scripts": {
  "dev": "ts-node -r tsconfig-paths/register src/index.ts"
}
```
npx tsc
O código transpilado vai para dist/.
Rode com:
```
node dist/index.js
```
Se quiser que o alias funcione no Node puro (sem ts-node), use o pacote:
```
npm install module-alias
```
E adicione ao package.json:
```
"_moduleAliases": {
  "@": "dist/src"
}
```
E no início do dist/index.js:
```
import 'module-alias/register';
```
✅ Opção 2 — Após compilar (em produção)

Compile o projeto:
```
npx tsc
```

O código transpilado vai para dist/.
Rode com:
```
node dist/index.js
```

Se quiser que o alias funcione no Node puro (sem ts-node), use o pacote:
```
npm install module-alias
```

E adicione ao package.json:
```
"_moduleAliases": {
  "@": "dist/src"
}
```

E no início do dist/index.js:

import 'module-alias/register';
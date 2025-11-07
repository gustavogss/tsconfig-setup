💡 Como usar o alias @ nas importações
Com essa configuração, você pode importar assim:
```
import { utils } from "@/utils/helpers";
```

Se estiver usando Vite, Webpack ou TS Node, também é preciso configurar o alias no bundler:

- 1. Vite: em vite.config.ts

- 2. Webpack: no resolve.alias
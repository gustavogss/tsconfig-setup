⚙️ Como usar o alias @/src

Você pode importar assim:
```
import { Container } from "@/components/Container";
```

Para funcionar, crie ou edite o arquivo babel.config.js e adicione o alias:
```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./src"
          }
        }
      ],
      "react-native-reanimated/plugin"
    ]
  };
};
```

⚠️ Instale o plugin se ainda não tiver:
```
npm install --save-dev babel-plugin-module-resolver
```
💅 Tipagem para styled-components

Para ter autocompletar e tipagem do tema (opcional, mas muito útil):

Crie um arquivo src/@types/styled.d.ts:
```
import "styled-components";
import theme from "@/theme";

declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
```

E um src/theme/index.ts:
```
export default {
  colors: {
    primary: "#7159c1",
    background: "#f5f5f5",
    text: "#333"
  }
} as const;
```
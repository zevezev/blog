// styled.d.ts
import "styled-components";
interface IPalette {
  main: string;
  secondary?: string;
  contrastText?: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;

      sections: {
        artists: IPalette;
        about: IPalette;
        artpinions: IPalette;
        chaos: IPalette;
      };
    };
  }
}

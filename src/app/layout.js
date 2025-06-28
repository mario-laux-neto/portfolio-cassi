// src/app/layout.js
import StyledComponentsRegistry from "../lib/registry";
import { Providers } from "./providers";
import Header from "@/components/Header";
import FlashlightEffect from "@/components/FlashlightEffect";
import "../../styles/numbered-headings.css";

export const metadata = {
  title: "Mário Laux Neto | Desenvolvedor",
  description: "Portfólio Pessoal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <FlashlightEffect />
            <Header />
            <div id="content">{children}</div>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

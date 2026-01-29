import { ReactNode } from "react";
import { HomeContent } from "../public/styles/Global.styles";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <HomeContent>
          {children}
        </HomeContent>
      </body>
    </html>
  );
}

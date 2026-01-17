import { LayoutContent } from "../public/styles/Global.styles";

export default function RootLayout({
  children,
}: Readonly<{
  
	children: React.ReactNode;

}>) {
  return (
    <html lang="pt">
		<body>
			<LayoutContent>
				{children}
				ssssssssssssssssssss
			</LayoutContent>
      </body>
    </html>
  );
}

import Header from './_components/header';
import Footer from './_components/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
          <Header/>
            {children}
          <Footer/>
        </body>
    </html>
  );
}

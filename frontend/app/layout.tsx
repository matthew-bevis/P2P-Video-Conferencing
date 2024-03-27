import Header from './_components/header';
import Footer from './_components/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body style={{width:'100%', height:'100%'}}>
          <Header/>
            {children}
          <Footer/>
        </body>
    </html>
  );
}

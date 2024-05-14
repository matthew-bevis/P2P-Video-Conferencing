import Header from './_components/header';
import Footer from './_components/footer';
import { ThemeProvider } from './themes/themeContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <ThemeProvider>
        <body style={{width:'100%', height:'100%', maxHeight: '100%', maxWidth: '100%', padding: 0, margin: 0}}>
          <Header/>
            {children}
          <Footer/>
        </body>
        </ThemeProvider>
    </html>
  );
}

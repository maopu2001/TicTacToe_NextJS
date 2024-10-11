import './globals.css';

export const metadata = {
  title: 'Tic-Tac-Toe',
  description: 'A childhood game redesigned by me',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="w-screen h-screen flex justify-center items-center">
        {children}
      </body>
    </html>
  );
}

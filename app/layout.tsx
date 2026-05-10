import "./globals.css";

export default function RootLayout({children,}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
        <main className="flex items-center justify-center min-h-screen p-4">
            {children}
        </main>
        </body>
        </html>
    );
}
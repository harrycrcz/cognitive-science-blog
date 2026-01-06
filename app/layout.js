import "./globals.css";

export const metadata = {
  title: "CogniScience - Cognitive Science Blog",
  description: "Articles about memory, attention, and cognitive processing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
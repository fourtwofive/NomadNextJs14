import Navigation from "./components/navigation";

export const metadata = {
  title: "Home | Next Movies",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

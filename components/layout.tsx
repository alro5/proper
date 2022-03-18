import Header from "./header";
import Footer from "./footer";

export default function Layout({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return (
    <div id="app">
      <Header />
      <main className="px-4">
        <div className="container m-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

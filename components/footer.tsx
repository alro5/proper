function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-500 p-4 text-white text-center">
      <p>Copyright {year} - Proper - All rights reserved</p>
    </footer>
  );
}

export default Footer;

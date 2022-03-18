import Link from "next/link";

function Header(): JSX.Element {
  return (
    <header className="bg-slate-100 p-4">
      <div className="flex items-center justify-between container mx-auto">
        <Link href="/">
          <a>
            <h1 className="text-3xl">proper</h1>
          </a>
        </Link>
        <div className="flex gap-3 items-center">
          <div className="rounded bg-slate-200 h-2 w-16"></div>
          <div className="rounded-full bg-slate-200 h-8 w-8"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;

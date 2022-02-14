import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <span className="title">Stuff</span>
          </Link>
        </div>
      </header>
    </>
  );
}

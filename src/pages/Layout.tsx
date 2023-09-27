import { FunctionComponent } from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout: FunctionComponent = () => {
  return (
    <>
      <nav className="nav">
        <ul className="navUl">
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/learnings">Learnings</Link>
          </li>
          <li>
            <Link className="link" to="/taskify">Taskify</Link>
          </li>
          <li>
            <Link className="link" to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="link" to="/pdf">PDFViewScreen</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
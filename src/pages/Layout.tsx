import { FunctionComponent, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import { AiOutlineMenu } from "react-icons/ai";

const Layout: FunctionComponent = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <AiOutlineMenu className="navBtn" onClick={() => { setShow(s => !s) }} />
      <nav className={`nav ${show ? "show" : ""}`}>
        <ul className="navUl" >
          <li>
            <Link className="link" to="/" onClick={() => { setShow(s => !s) }}>Home</Link>
          </li>
          <li>
            <Link className="link" to="/learnings" onClick={() => { setShow(s => !s) }}>Learnings</Link>
          </li>
          <li>
            <Link className="link" to="/taskify" onClick={() => { setShow(s => !s) }}>Taskify</Link>
          </li>
          <li>
            <Link className="link" to="/pdf" onClick={() => { setShow(s => !s) }}>PDFGenerator</Link>
            {/* target="_blank" rel="noopener noreferrer" */}
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
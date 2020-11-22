import React from "react";
import logo from "../logo.svg";
import { BsHeart, BsBag, BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Categories from "./Categories";
// import Hamburger from "./Hamburger";
import Burger from "./Burger";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    // <>
    //   <Navbar expand="lg" bg="light" variant="light">
    //     <div>
    //       <Navbar.Brand href="#home">
    //         <img
    //           src={logo}
    //           width="30"
    //           height="30"
    //           className="d-inline-block align-top"
    //           alt="React Bootstrap logo"
    //         />
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     </div>

    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="mr-auto">
    //         <Nav.Link href="#features">Features</Nav.Link>
    //         <Nav.Link href="#pricing">Pricing</Nav.Link>
    //         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <Nav>
    //         <Nav.Link href="#deets">
    //           <BsHeart />
    //           <span className="hide-sm">Kategori</span>
    //         </Nav.Link>
    //         <Nav.Link eventKey={2} href="#memes">
    //           <BsBag />
    //           <span className="hide-sm">Sepetim</span>
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //     <ul className="flex-row">
    //       <li>
    //         <BsHeart />
    //         <span className="hide-sm">Favorilerim</span>
    //       </li>
    //       <li>
    //         <BsBag />
    //         <span className="hide-sm">Sepetim</span>
    //       </li>
    //     </ul>
    //   </Navbar>

    <header className="bg-white">
      <div className="custom-container">
        <nav className="top-menu">
          <div className="d-flex align-items-center">  
             <Burger></Burger>

          <div className="logo">
            <img
              src={logo}
              width="30"
              height="30"
              className=""
              alt="React Bootstrap logo"
            />
            BAYSERİF
          </div>
            </div> 
      

          <form className="search-form hide-sm">
            <div className="search-group px-2">
              <input className="input-search w-100"  placeholder="Aradığınız ürünü girin."/>
              <button className="px-2 py-1">
                <BsSearch />
              </button>
            </div>
          </form>

          <ul>
            <li>
              <a href="#" className="text-underline-hover" >
                <BsHeart />
                <span className="hide-sm mx-1">Favorilerim</span>
              </a>
            </li>

            <li>
              <Link to="/sepetim" className="text-underline-hover">
                <BsBag />
                <span className="hide-sm mx-1">Sepetim</span>
              </Link>
            </li>
            <li>
              <a href="#" className="text-underline-hover">
                <AiOutlineUser />
                <span className="hide-sm mx-1">Profilim</span>
              </a>
            </li>
          </ul>
          
        </nav>
        <form className="search-form hide-lg mb-2">
            <div className="search-group px-2">
              <input className="input-search w-100" placeholder="Aradığınız ürünü girin." />
              <button className="px-2 py-1">
                <BsSearch />
              </button>
            </div>
          </form>
      </div>
      <Categories />
    </header>
  );
}

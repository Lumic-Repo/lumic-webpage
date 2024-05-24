import { navItems } from "../constants";
import { NavLink, useLocation } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import { Menu, X } from "lucide-react";
import PropTypes from 'prop-types';

const NavbarComponent = ({toggleNavbar, mobileDrawerOpen}) => {
  const location = useLocation();

  return (
    <div>
      <nav>
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center animate__animated animate__fadeInDown">
            <NavLink to="/">
              <div className="flex items-center flex-shrink-0">
                <img className="h-10 w-full mr-2.5" src="/lumic-logo.png" alt="logo" />
              </div>
            </NavLink>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.href}
                    className={`
                    ${
                      location.pathname === item.href
                        ? "text-primary border-b-2 border-primary"
                        : ""
                    }
                    ml-1 pb-1 font-medium
                  `}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <ButtonComponent
                href="#contact"
                className="bg-gradient-to-r from-primary-light to-primary-dark"
              >
                Contact Us
              </ButtonComponent>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

NavbarComponent.propTypes = {
    toggleNavbar: PropTypes.func,
    mobileDrawerOpen: PropTypes.bool
}

export default NavbarComponent;

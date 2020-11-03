import React from 'react';
import { NavLink } from 'react-router-dom';

const Navs = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
];

const NavBar = () => (
  <nav className="bg-purple-600 p-4 text-purple-300 shadow mt-0 fixed w-full top-0">
    <ul className="flex space-x-5 justify-end">
      <li className="mr-auto text-purple-100 text-xl font-black">
        <NavLink exact to="/">
          SachinGowda A C
        </NavLink>
      </li>
      {
        Navs.map((navItems) => (
          <li>
            <NavLink
              exact
              to={navItems.path}
              activeClassName="border-b-2 border-white text-purple-200"
            >
              {navItems.name}
            </NavLink>
          </li>
        ))

        /* <li>
        <NavLink exact to="/about" activeClassName="border-b-2 border-white">
        About
        </NavLink>
        </li>
        <li>
        <NavLink exact to="/concact" activeClassName="border-b-2 border-white">
        Concact
        </NavLink>
    </li> */
      }
    </ul>
  </nav>
);
export default NavBar;

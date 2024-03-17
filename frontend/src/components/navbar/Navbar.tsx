import { Link, Outlet } from "react-router-dom";

import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Navabar = () => {
  return (
    <>
      <nav className="container mx-auto p-6 md:py-4 md:px-24 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold text-teal-400 flex items-center"
        >
          JOBHUNT
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-search md:h-8 md:w-8"
          >
            <circle cx="10" cy="7" r="4" />
            <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
            <circle cx="17" cy="17" r="3" />
            <path d="m21 21-1.9-1.9" />
          </svg>
        </Link>
        <HStack spacing={"2rem"}>
          <Link
            to="/job"
            className="font-semibold text-gray-500 hover:text-teal-300 transition-all"
          >
            Browze jobs
          </Link>
          <Link
            to="/job"
            className="font-semibold text-gray-500 hover:text-teal-300 transition-all"
          >
            Companies
          </Link>
          <Menu>
            <MenuButton
              as={Button}
              size={"md"}
              colorScheme="teal"
              leftIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-round w-4 h-4"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
              }
            >
              Account
            </MenuButton>
            <MenuList>
              <Link to="/login">
                <MenuItem>
                  Sign in
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-log-in h-4 w-4 ml-2"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" x2="3" y1="12" y2="12" />
                  </svg>
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </HStack>
      </nav>
      <main className="bg-gray-50 ">
        <Outlet />
      </main>
    </>
  );
};

export default Navabar;

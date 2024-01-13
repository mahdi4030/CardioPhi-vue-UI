/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import {
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  Settings as SettingsIcon,
  Videocam as VideocamIcon,
  KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
} from "@mui/icons-material";
import { useAuth } from "providers";
import { Link } from "react-router-dom";
import { ROUTE } from "utils";

export const Header = () => {
  const { signOut } = useAuth();

  const BreadCrumb = () => {
    return (
      <>
        <Link to={ROUTE.INDEX}>
          <span>Main</span>
        </Link>

        <span className="mx-2">
          <KeyboardDoubleArrowRightIcon />
        </span>

        <Link to={ROUTE.INDEX}>
          <span className="font-bold">ECG Analysis</span>
        </Link>

        <span className="mx-2">
          <KeyboardDoubleArrowRightIcon />
        </span>

        <Link to={ROUTE.INDEX}>
          <span>Report Generation</span>
        </Link>
      </>
    );
  };

  return (
    <nav className="bg-white shadow border-b-2 border-b-[#D9D9D9] max-h-[40px]">
      <div className="w-full mx-auto px-3">
        <div className="flex justify-between h-[40px]">
          <div className="flex items-center">
            <Link to={ROUTE.INDEX} className="inline-flex items-center mr-2">
              <img
                className="block max-w-[100px] w-[100px]"
                src="/assets/images/CardioPhi-logos_colored.png"
                alt="CardioPhi"
              />
            </Link>

            <BreadCrumb />
          </div>

          <div className="flex items-center">
            <button
              type="button"
              className="relative inline-flex items-center px-2 shadow-sm font-medium text-white bg-[#066A94] hover:opacity-70 focus:outline-none mr-4"
            >
              Report Generator
              <span className="ml-1">
                <KeyboardDoubleArrowRightIcon />
              </span>
            </button>

            <button
              type="button"
              className="relative inline-flex items-center font-medium text-[#066A94] hover:opacity-70 focus:outline-none mr-4"
            >
              <VideocamIcon fontSize="large"/>
            </button>

            <Menu as="div" className="mr-2 relative">
              <div>
                <Menu.Button className="bg-white rounded-full flex focus:outline-none">
                  <span className="sr-only">Open user menu</span>

                  <AccountCircleOutlinedIcon className="h-6 w-6 rounded-full" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={clsx(
                          active ? "bg-gray-100" : "",
                          "w-full block px-4 py-2 text-gray-700 text-left"
                        )}
                        onClick={signOut}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>

            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="bg-white rounded-full flex focus:outline-none">
                  <span className="sr-only">Open user menu</span>

                  <SettingsIcon className="h-6 w-6 rounded-full" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>{({ active }) => <></>}</Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type DropdownButtonProps = {
  children: React.ReactNode;
  items: { name: string; action: () => void; }[];
  buttonClassName: string;
  menuClassName: string;
  itemClassName: string;
  itemActiveClassName: string;
};

export default function DropdownButton ({
  items,
  children,
  buttonClassName,
  menuClassName,
  itemClassName,
  itemActiveClassName
}: DropdownButtonProps) {
  return (
    <Menu
      as="div"
      onClick={
        /** We stop propagation to prevent click event on parents. */
        (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()
      }
      className="inline-block relative text-left"
    >
      <div>
        <Menu.Button className={buttonClassName}>
          {children}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute right-0 mt-2 w-56 rounded-md shadow-md origin-top-right ${menuClassName}`}
        >
          <div className="py-1">
            {items.map(item =>
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    onClick={item.action}
                    className={classNames(
                      active ? itemActiveClassName : itemClassName,
                      "block px-2 py-1 mx-2 my-1 text-sm rounded transition-colors cursor-pointer"
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
"use client";
import * as React from "react";
import { useState, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { DecorativeButton } from "./DecorativeButton";

import styles from "./DecorativeButton.module.css";

interface IDecorativeModalButton {
  title: string;
}

export const DecorativeModalButton = ({
  title,
  children,
}: React.PropsWithChildren<IDecorativeModalButton>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DecorativeButton
        _onClick={() => {
          setIsOpen(true);
        }}
      >
        {title}
      </DecorativeButton>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={`flex min-h-full items-center justify-center p-4 text-center`}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={` ${styles.bookpage} rounded w-full max-w-md h-content max-h-[80vh] transform overflow-hidden bg-white p-[49px] text-center align-middle shadow-xl transition-all`}
                >
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

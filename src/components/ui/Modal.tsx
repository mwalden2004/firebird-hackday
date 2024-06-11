import { Dispatch, Fragment, SetStateAction, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Modal({
  children,
  open,
  setOpen,
  sizeOverride = '3xl',
}: {
  children: React.ReactNode;
  open: boolean;
  sizeOverride?:
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';
  setOpen: any;
}) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40"
        style={{
          zIndex: 50
        }}
        initialFocus={cancelButtonRef}
        onClose={setOpen}
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative transform rounded-lg dark:bg-gray-900 bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all dark:text-gray-100 sm:my-8 sm:w-full max-w-${sizeOverride} sm:p-6`}
              >
                {children}
                <div className="hidden max-w-sm" />
                <div className="hidden max-w-md" />
                <div className="hidden max-w-lg" />
                <div className="hidden max-w-xl" />
                <div className="hidden max-w-2xl" />
                <div className="hidden max-w-3xl" />
                <div className="hidden max-w-4xl" />
                <div className="hidden max-w-5xl" />
                <div className="hidden max-w-6xl" />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

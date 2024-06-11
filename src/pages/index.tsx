import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import TextHeader from "@/components/ui/TextHeader";
import { ArrowRightIcon, BellIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function AlarmCard({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(true)}
      className="bg-gray-800 hover:bg-gray-700 rounded-lg px-2 py-2 flex flex-row text-left gap-2">
      <div className="self-center">
        <BellIcon className="h-8 w-8 text-gray-500" />
      </div>
      <div>
        <p className="font-bold text-lg">{name}</p>
        <p>{name} alarm is currently active</p>
      </div>
      <div className="self-center ml-auto">
        <ChevronRightIcon className="h-4 w-4 text-gray-500" />
      </div>


      <Modal open={open} setOpen={setOpen}>
        <div className="w-full">
          <TextHeader>{name} Alarm</TextHeader>
          <div className="flex flex-row gap-2 w-full mt-4">
            <Button variant="primary" className="w-full">Test</Button>
            <Button variant="danger" className="w-full">Remove</Button>

          </div>


        </div>
      </Modal>
    </button>
  )
}

export default function Home() {
  return (
    <div>
      <TextHeader>Alarms</TextHeader>

      <div className="flex flex-col gap-2 mt-4 max-h-[750px] overflow-y-scroll">

        <AlarmCard name="Kitchen" />
        <AlarmCard name="Master Bedroom" />
        <AlarmCard name="Kids Bedroom" />
        <AlarmCard name="Playroom" />
        <AlarmCard name="Living Room" />
        <AlarmCard name="Garage" />

      </div>

    </div>
  );
}

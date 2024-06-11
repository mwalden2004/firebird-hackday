import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import TextHeader from "@/components/ui/TextHeader";
import { ArrowRightIcon, BellAlertIcon, BellIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import TimeAgo from 'react-timeago';

function ActivationCard({ name, desc, date }: { name: string, desc: string, date: Date }) {
  return (
    <button
      className="bg-gray-800 hover:bg-gray-700 rounded-lg px-2 py-2 flex flex-row text-left gap-2">
      <div className="self-center">
        <BellAlertIcon className="h-8 w-8 text-gray-500" />
      </div>
      <div>
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm">{desc}</p>
        <p className="text-xs text-gray-500"><TimeAgo date={date} /></p>
      </div>
    </button>
  )
}

export default function Home() {
  return (
    <div>
      <TextHeader>Recent Activations</TextHeader>

      <div className="flex flex-col gap-2 mt-4 max-h-[750px] overflow-y-scroll">

        <ActivationCard 
        name="Tornado Warning" 
        desc="All alarms successfully activated, origin NWWR."
        date={new Date(2024, 5, 11, 11, 10, 0)}
        />
        <ActivationCard 
        name="Power Lost" 
        desc="Alarms detected lack of power, switching to NWWR backup."
        date={new Date(2024, 5, 11, 10, 35, 0)}
        />
        <ActivationCard 
        name="Flash Flood Warning" 
        desc="All alarms successfully activated, origin NWWS-OI."
        date={new Date(2024, 5, 11, 10, 30, 0)}
        />
        <ActivationCard 
        name="Alarm Test" 
        desc="All alarms successfully activated, origin phone app."
        date={new Date(2024, 5, 5, 12, 21, 0)}
        />

      </div>

    </div>
  );
}

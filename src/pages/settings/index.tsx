import TextHeader from "@/components/ui/TextHeader";
import { BellAlertIcon, ListBulletIcon, MapPinIcon } from "@heroicons/react/24/outline";

function SettingCard({ name, desc, Icon }: { name: string, desc: string, Icon: any }) {
  return (
    <button
      className="bg-gray-800 hover:bg-gray-700 rounded-lg px-2 py-2 flex flex-row text-left gap-2">
      <div className="self-center">
        <Icon className="h-8 w-8 text-gray-500" />
      </div>
      <div>
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </button>
  )
}

export default function Home() {
  return (
    <div>
      <TextHeader>Settings</TextHeader>

      <div className="flex flex-col gap-2 mt-4 max-h-[750px] overflow-y-scroll">

        <SettingCard 
        Icon={BellAlertIcon}
        name="Pair new alarm"
        desc="Add a new alarm to your Firebird panel."
        />
        <SettingCard 
        Icon={MapPinIcon}
        name="Change activation areas"
        desc="Change the location for weather alerts."
        />
        <SettingCard 
        Icon={ListBulletIcon}
        name="Change alert types"
        desc="Change warning types that activate alarms."
        />

      </div>

    </div>
  );
}

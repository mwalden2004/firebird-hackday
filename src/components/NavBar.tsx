import { BellAlertIcon, ClockIcon, CogIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({href, name, Icon, active}: {href: string, name: string, Icon: any, active: boolean}) {
    return (
        <Link href={href} className={`flex flex-col gap-2 justify-center align-middle ${active ? 'text-gray-100' : 'text-gray-500'} hover:text-gray-300`}>
            <Icon className="h-8 w-8 self-center align-middle" />
            <p>{name}</p>
        </Link>
    )
}

export default function NavBar() {
    const router = useRouter();
    const onPage = router.pathname;

    return (
        <div className="flex flex-row justify-evenly gap-2 absolute bottom-0 w-full py-2 px-12 bg-gray-800">
            <NavLink active={onPage == '/' || onPage.startsWith('/alarms')} Icon={BellAlertIcon} name="Alarms" href="/" />
            <NavLink active={onPage == '/recent-activations'} Icon={ClockIcon} name="Recent Activations" href="/recent-activations" />
            <NavLink active={onPage == '/settings'} Icon={CogIcon} name="Settings" href="/settings" />
        </div>
    )
}
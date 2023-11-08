import React from 'react';
import {useNavigate} from "react-router-dom";


interface TopMenuProps {
    currentPath: string;
}
const TopMenu: React.FC<TopMenuProps> = ({ currentPath }) => {
    const navigate = useNavigate();

    const movePage = (path: string) => () => {
        navigate(path)
    }

    return (
        <nav className="w-full border-gray-400">
            <ul className="flex w-full border-gray-400">
                <li className={`material-symbols-outlined 
                        grow text-center text-white text-4xl block px-3 py-2 rounded-md ${currentPath === "/" ? 'bg-indigo-900' : 'bg-[#1C1B24]'}
                        cursor-pointer rounded 
                        `}
                    onClick={movePage('/')}
                >
                    <div className={'hover:rounded hover:bg-white/[0.04]'}>person</div>
                </li>
                <li className={`material-symbols-outlined 
                        grow text-center text-white text-4xl block px-3 py-2 rounded-md ${currentPath.includes("/channels") ? 'bg-indigo-900' : 'bg-[#1C1B24]'}
                        cursor-pointer rounded 
                        `}
                    onClick={movePage('/channels')}
                >
                    <div className={'hover:rounded hover:bg-white/[0.04]'}>interests</div>
                </li>
                <li className={`material-symbols-outlined 
                        grow text-center text-white text-4xl block px-3 py-2 rounded-md ${currentPath.includes("/my-channels") ? 'bg-indigo-900' : 'bg-[#1C1B24]'}
                        cursor-pointer rounded 
                        `}
                    onClick={movePage('/my-channels')}
                >
                    <div className={'hover:rounded hover:bg-white/[0.04]'}>forum</div>
                </li>
            </ul>
        </nav>
    );
}

export default TopMenu;

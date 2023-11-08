import React, {ReactNode, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import TopMenu from "../components/TopMenu";
import {useRecoilValue} from "recoil";
import {isLoginState} from "../store/recoilState";

function DefaultLayout(parent: { children: ReactNode }) {
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = useRecoilValue(isLoginState);

    useEffect(() => {
        if (!isLogin && location.pathname !== '/') {
            navigate('/');
        }
    }, [isLogin, location.pathname, navigate]);

    return (
        <div className='flex flex-col justify-between h-screen bg-[#1C1B24]'>
            <div className='h-full'>
                {parent.children}
            </div>
            <div>
                <TopMenu currentPath={location.pathname} />
            </div>
        </div>
    );
}

export default DefaultLayout;

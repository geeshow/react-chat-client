import React from 'react';
import {useRecoilValue} from "recoil";
import {isLoginState} from "../../store/recoilState";
import SignupForm from "./SignupForm";
import MyInfoForm from "./MyInfoForm";

const MyInfo = () => {
    const isLogin = useRecoilValue(isLoginState);

    return (
        <div className={'common-page h-full'}>
            <h1 className={'text-gray-300 text-3xl my-3'}>Ken's Instant Chat</h1>
            <div className={'flex flex-col justify-between h-full'}>
                {!isLogin &&
                    <SignupForm />
                }
                {isLogin &&
                    <MyInfoForm />
                }
                <ul className={'text-gray-300 text-left w-full mt-3'}>
                    <li>Author: Ken</li>
                    <li>Repository</li>
                    <li>- <a href={'https://github.com/geeshow/react-chat-client'} target='_blank' className={'underline'}>https://github.com/geeshow/react-chat-client</a></li>
                    <li>- <a href={'https://github.com/geeshow/node-chat-server'} target='_blank' className={'underline'}>https://github.com/geeshow/node-chat-server</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MyInfo;

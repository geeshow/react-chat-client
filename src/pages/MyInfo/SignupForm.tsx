import React, {useContext, useState} from 'react';
import WebSocketContext from "../../websocket/WebSocketProvider";
import {WebSocketContextType} from "../../websocket/WebSocketContextType";

const ChangeUserForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const { WSSignupUser, WSLoginUser } = useContext(WebSocketContext) as WebSocketContextType;

    const requestSignupUser = () => {
        WSSignupUser(id, password)
    }

    const requestLoginUser = () => {
        WSLoginUser(id, password)
    }

    return (
        <section className={'rounded-t-2xl rounded-b-3xl bg-gray-200 pt-3'}>
            <div className={'mt-3 text-gray-500 px-3'}>
                This is my personal project. I don't use your email for any other purpose. Also, your account can be removed at any time.
            </div>
            <div className={'mt-3 px-2'}>
                <input className={'common-input my-2'} type="text" placeholder="email" onChange={(event) => {
                    setId(event.target.value);
                }} />
                <input className={'common-input my-2'} type="password" placeholder="password"  onChange={(event) => {
                    setPassword(event.target.value);
                }} />
            </div>
            <div className={'flex justify-between mt-2 text-white text-center'}>
                <div className={'grow bg-indigo-700 hover:bg-indigo-600 cursor-pointer p-3 rounded-bl-2xl'} onClick={requestSignupUser}>Signup</div>
                <div className={'grow bg-indigo-700 hover:bg-indigo-600 cursor-pointer p-3 rounded-br-2xl'} onClick={requestLoginUser}>Login</div>
            </div>
        </section>
    );
};

export default ChangeUserForm;

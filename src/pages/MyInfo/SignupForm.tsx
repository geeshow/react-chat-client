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
        <section className={'common-section'}>
            <input className={'common-input my-2'} type="text" placeholder="id" onChange={(event) => {
                setId(event.target.value);
            }} />
            <input className={'common-input my-2'} type="password" placeholder="password"  onChange={(event) => {
                setPassword(event.target.value);
            }} />
            <div className={'flex justify-between mt-2'}>
                <button className={'common-btn px-12'} type="submit" onClick={requestSignupUser}>Signup</button>
                <button className={'common-btn px-12'} type="submit" onClick={requestLoginUser}>Login</button>
            </div>
        </section>
    );
};

export default ChangeUserForm;

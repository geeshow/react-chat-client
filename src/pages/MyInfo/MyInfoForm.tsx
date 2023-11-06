import React from 'react';
import {useRecoilState} from "recoil";
import {userState} from "../../store/recoilState";
import UserCard from "../../components/UserCard";
import {useNavigate} from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";


const MyInfoForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(userState);
    const [, setToken] = useLocalStorage('token', '');

    const changeUserInfo = () => {
        navigate('/my-info/change');
    }

    const logout = () => {
        setToken('');
        setUser({
            id: '',
            nickname: '',
            emoji: '',
            lastLogin: new Date()
        });
    }

    return (
        <section className={'common-section'}>
            <UserCard user={user} />
            <div className={'flex justify-between mt-2'}>
                <button className={'common-btn px-12'} type="submit" onClick={changeUserInfo}>Change</button>
                <button className={'common-btn px-12 ml-2'} type="submit" onClick={logout}>Logout</button>
            </div>
        </section>
    );
};

export default MyInfoForm;

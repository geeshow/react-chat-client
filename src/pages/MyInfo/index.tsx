import React from 'react';
import {useRecoilValue} from "recoil";
import {isLoginState} from "../../store/recoilState";
import SignupForm from "./SignupForm";
import MyInfoForm from "./MyInfoForm";

const MyInfo = () => {
    const isLogin = useRecoilValue(isLoginState);

    return (
        <div className={'common-page'}>
            {!isLogin &&
                <SignupForm />
            }
            {isLogin &&
                <MyInfoForm />
            }
        </div>
    );
};

export default MyInfo;

import React, {useCallback, useContext, useEffect, useMemo} from 'react';
import WebSocketContext from "../../websocket/WebSocketProvider";
import {useRecoilValue} from "recoil";
import {myChannelListState} from "../../store/recoilState";
import ChannelCard from "../../components/ChannelCard";
import {WebSocketContextType} from "../../websocket/WebSocketContextType";
import {useNavigate} from "react-router-dom";


const MyChannelList = () => {
    const navigate = useNavigate();
    const myChannelList = useRecoilValue(myChannelListState);
    const { WSMyChannelList } = useContext(WebSocketContext) as WebSocketContextType;
    useEffect(() => {
        WSMyChannelList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const selectChannel = useCallback((channelId: string) => {
        navigate(`/my-channels/${channelId}`);
    }, [ navigate ]);

    const renderChannelList = useMemo(() => {
        console.log('renderChannelList')
        return myChannelList.map((channel) => {
            return (
                <ChannelCard key={channel.id} channel={channel} view={(channelId: string) => selectChannel(channelId)}/>
            )
        });
    }, [myChannelList, selectChannel]);

    return (
        <section className={'common-section'}>
            <h1 className={'font-bold text-2xl'}>My Channel List</h1>
            { renderChannelList }
        </section>
    );
};

export default MyChannelList;

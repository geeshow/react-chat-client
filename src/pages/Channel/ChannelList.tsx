import React, {useContext, useEffect} from 'react';
import WebSocketContext from "../../websocket/WebSocketProvider";
import {WebSocketContextType} from "../../websocket/WebSocketContextType";
import {useRecoilValue} from "recoil";
import {channelListState, myChannelListState} from "../../store/recoilState";
import ChannelCard from "../../components/ChannelCard";
import {useNavigate} from "react-router-dom";


const ChannelList = () => {
    const navigate = useNavigate();
    const { WSChannelList } = useContext(WebSocketContext) as WebSocketContextType;
    const channelList = useRecoilValue(channelListState);

    useEffect(() => {
        WSChannelList();
        console.log('ChannelList')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const selectChannel = (channelId: string) => {
        navigate(`/channels/${channelId}`);
    }

    const renderChannelList = () => {
        return channelList.map((channel) => {
            return (
                <ChannelCard key={channel.id} channel={channel} view={(channelId: string) => selectChannel(channelId)}/>
            )
        }).reverse();
    }
    return (
        <section className={'common-section'}>
            <h1 className={'font-bold text-2xl'}>Channel List</h1>
            { renderChannelList() }
        </section>
    );
};

export default ChannelList;

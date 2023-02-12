import React from 'react';
import styled from 'styled-components';

//id = 0 : me , id = 1: opponent

const Frame = styled.div`
    display:flex;
    flex-direction:column;
    align-items:${props=>props.id == 0 ? 'flex-end' : 'flex-start'};
    margin-right:1vw;
`;

const Msg = styled.div`
    background:${props=>props.id == 0 ? '#73A0C6;' : '#E7E7E7'};
    color:${props=>props.id == 0 ? '#FFFFFF;' : '#303030'};
    position: relative;
    display: inline-block;
    max-width: calc(100% - 7vw);
    padding: 0.3vw 1vw 0.3vw 1vw;
    font-size: 1vw;
    border-radius: 23px;
    word-break:break-all;
`
const SendTime = styled.div`
    font-size:0.5vw;
    color:#C5C5C5;
`
function ChatText({...props}) {
    if(props.id===0){
        return (
            <Frame id={props.id}>
                <Msg id={props.id}>{props.text}</Msg>
                <SendTime>{'Today. 8:33pm'}</SendTime>
            </Frame>
        );
    }
    else if(props.id === 1){
        return (
            <Frame id={props.id}>
                <Msg id={props.id}>{props.text}</Msg>
                <SendTime>{'Today. 8:33pm'}</SendTime>
            </Frame>
        );
    }
} export default ChatText;
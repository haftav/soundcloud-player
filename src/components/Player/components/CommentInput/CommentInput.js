import React, { Component } from 'react';
import glamorous from 'glamorous';

import sad from './assets/sad.jpg';

export default function CommentInput ({ commentText, handleCommentChange, submitComment }) {
        return (
            <Wrapper>
                <FlexDiv>
                    <UserImage src={sad} align='middle'/>
                    <Input placeholder='Write a comment' 
                            value={commentText} 
                            onChange={handleCommentChange}
                            onKeyPress={submitComment}/>
                </FlexDiv>
            </Wrapper>
        )
    }

const Wrapper = glamorous.div({
    width: '100%',
    height: 35,
    background: 'white',
    border: '1px solid #E1E1E1',
    position: 'absolute',
    zIndex: 60,
    bottom: 0,
    left: 0
})

const FlexDiv = glamorous.div({
    width: '90%',
    height: '100%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
})

const UserImage = glamorous.img({
    height: 20,
    width: 25
})

const Input = glamorous.input({
    height: 20,
    width: '90%',
    outline: 'none',
    paddingLeft: 5,
    border: '1px solid #E1E1E1'
})


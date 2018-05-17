import React, { Component } from 'react';
import glamorous from 'glamorous';

import sad from './assets/sad.jpg';

export default class CommentInput extends Component {
    constructor() {
        super();

        this.state = {
            comment: ''
        }
    }

    render() {
        return (
            <Wrapper>
                <FlexDiv>
                    <UserImage src={sad} align='middle'/>
                    <Input placeholder='Write a comment' onClick={this.props.addComment}/>
                </FlexDiv>
            </Wrapper>
        )
    }
}

const Wrapper = glamorous.div({
    width: '100%',
    height: 35,
    background: 'lightgray',
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
    padding: 0,
    border: 'none',
    '::placeholder': {
        paddingLeft: 5
    }
})


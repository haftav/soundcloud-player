import React, { Component } from 'react';
import glamorous from 'glamorous';

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

            </Wrapper>
        )
    }
}

const Wrapper = glamorous.div({
    width: '100%',
    height: 25,
    background: 'red',
    position: 'absolute',
    zIndex: 60,
    bottom: 0,
    left: 0
})
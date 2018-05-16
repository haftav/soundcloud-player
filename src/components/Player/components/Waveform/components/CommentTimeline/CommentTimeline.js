import React, { Component } from 'react';
import glamorous from 'glamorous';

export default class CommentTimeline extends Component {
    constructor() {
        super();

    }


    render() {
        console.log(this.props.comment);
        return (
            <Wrapper onClick={(e) => this.props.commentClick(e)} onDrag={(e) => this.props.commentDrag(e)}>
                {
                    this.props.comment.commentActive ?
                        <Comment left={this.props.comment.commentPosition} onDrag={(e) => this.props.commentDrag(e)} draggable="true"/>
                        :
                        null
                }
            </Wrapper>
        )
    }
}

const Wrapper = glamorous.div({
    border: '1px solid green',
    width: '100%',
    height: 25,
    background: 'lightblue',
    position: 'absolute',
    top: '50%',
    left: 0,
    zIndex: '50'
})

const Comment = glamorous.div(
    {
        width: 25,
        height: 25,
        opacity: '1',
        background: 'orange',
        position: 'absolute',
        top: 0,
        zIndex: 55,
        overflow: 'hidden'
    },
    (props) => ({
        left: props.left
    })
)
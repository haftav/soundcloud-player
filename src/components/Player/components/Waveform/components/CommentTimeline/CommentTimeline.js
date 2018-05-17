import React, { Component } from 'react';
import glamorous from 'glamorous';

export default class CommentTimeline extends Component {
    constructor() {
        super();

    }

    allowDrop = (e) => {
        e.preventDefault();
    }

    drag = (e) => {
        e.dataTransfer.setData("text", e.target.id)
    }

    drop = (e) => { 
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        console.log(data);
        e.target.appendChild(document.getElementById(data))
    }

    render() {
        console.log(this.props.comment);
        return (
            <Wrapper onClick={(e) => this.props.commentClick(e)} onDragOver={this.allowDrop} onDrop={this.props.commentDrop}>
                {
                    this.props.comment.commentActive ?
                        <Comment id="comment" left={this.props.comment.commentPosition} draggable="true" onDragStart={this.drag} onClick={(e) => e.preventDefault()}/>
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
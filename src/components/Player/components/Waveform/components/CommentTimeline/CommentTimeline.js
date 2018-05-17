import React, { Component } from 'react';
import glamorous from 'glamorous';

export default class CommentTimeline extends Component {
    constructor() {
        super();

    }

    componentDidMount() {
        let elHeight = document.getElementById('comment-timeline').clientWidth;
        console.log(elHeight)
    }

    allowDrop = (e) => {
        e.preventDefault();
    }

    drag = (e) => {
        e.dataTransfer.setData("text", e.target.id)
    }


    render() {
        console.log(this.props.comment);
        return (
            <Wrapper id='comment-timeline' onClick={(e) => this.props.commentClick(e)} onDragOver={this.allowDrop} onDrop={this.props.commentDrop}>
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
    width: '100%',
    height: 25,
    position: 'absolute',
    top: '50%',
    left: 0,
    zIndex: '50',
    cursor: 'pointer'
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
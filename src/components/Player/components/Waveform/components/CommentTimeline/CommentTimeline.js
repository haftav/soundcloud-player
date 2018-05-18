import React, { Component } from 'react';
import glamorous from 'glamorous';

export default class CommentTimeline extends Component {
    constructor() {
        super();

        this.state = {
            width: null
        }

    }

    componentDidMount() {
        let elWidth = document.getElementById('comment-timeline').clientWidth;
        this.setState({ width: elWidth });
    }

    allowDrop = (e) => {
        e.preventDefault();
    }

    drag = (e) => {
        e.dataTransfer.setData("text", e.target.id)
    }


    render() {
        const comments = this.props.commentList.map((el, idx) => {
            const { text, position } = el;
            return (
                <div style={{ ...commentStyles, left: position }} id='comment' >
                    <p>{text}</p>
                </div>
            )
        })
        console.log(this.props.comment);
        return (
            <Wrapper id='comment-timeline' onClick={(e) => this.props.commentClick(e)} onDragOver={this.allowDrop} onDrop={this.props.commentDrop}>
                {
                    this.props.comment.commentActive ?
                        <TempComment id="comment" left={this.props.comment.commentPosition} draggable="true" onDragStart={this.drag} onClick={(e) => e.preventDefault()}/>
                        :
                        null
                }
                {
                    comments
                }

            </Wrapper>
        )
    }
}

const commentStyles = {
    width: 25,
    height: 25,
    opacity: '1',
    background: 'orange',
    position: 'absolute',
    top: 0,
    zIndex: 55
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


const TempComment = glamorous.div(
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
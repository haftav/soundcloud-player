import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';
import glamorous from 'glamorous';

import CommentTimeline from './components/CommentTimeline/CommentTimeline';

require('wavesurfer.js');

export default class Waveform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            duration: null
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            comments: newProps.commentList
        })
    }

    waveformReady = (e) => {
        this.setState({
            comments: this.props.commentList,
            duration: e.wavesurfer.getDuration()
        })
    }

    render() {
        console.log(this.state);
        const { song, playing } = this.props;
        return (
            <Wrapper id='waveform'>
                <div style={{ height: '75%', width: '100%', position: 'relative' }}>
                    <Opacity>
                        <CommentTimeline comment={this.props.comment} 
                                        commentClick={this.props.commentClick} 
                                        commentDrop={this.props.commentDrop}
                                        commentList={this.state.comments}
                                        duration={this.state.duration}/>
                        <Wavesurfer
                            audioFile={song}
                            playing={playing}
                            onReady={(e) => this.waveformReady(e)}
                            onSeek={(e) => this.waveformReady(e)}
                            options={{
                                barWidth: 2,
                                barHeight: 1.5,
                                height: 128,
                                normalize: true,
                                cursorWidth: 0,
                                progressColor: '#FF6243'
                            }} />
                    </Opacity>
                </div>
            </Wrapper>
        )
    }
}

const Opacity = glamorous.div(
    {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '50%',
        opacity: '1',
        zIndex: 30,
        ':before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: 0,
            bottom: 0,
            right: 0,
            borderTop: '1px solid white',
            backgroundColor: 'rgba(255, 255, 255, 0.40)',
            zIndex: 25
        }
    }
)

const Wrapper = glamorous.div(
    {
        position: 'relative',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        opacity: '1'
    }
)


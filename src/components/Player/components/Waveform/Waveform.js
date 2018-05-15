import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';
import glamorous from 'glamorous';
require('wavesurfer.js');

export default class Waveform extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { song, playing } = this.props;
        return (
            <Wrapper id='waveform'>
                <div style={{ height: '75%', width: '100%', border: '1px solid green' }}>
                    <Wavesurfer
                        audioFile={song}
                        playing={playing}
                        options={{
                            barWidth: 2,
                            height: 112
                        }} />
                </div>

            </Wrapper>
        )
    }
}

const Wrapper = glamorous.div(
    {
        // ':before': {
        //     content: '""',
        //     zIndex: 25,
        //     position: 'absolute',
        //     background: 'red',
        //     top: '44%',
        //     left: 0,
        //     right: 0,
        //     bottom: 0,
        //     opacity: '0.5'
        // },
        position: 'relative',
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 2,
        gridRowEnd: 3,
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid purple'
    }
)


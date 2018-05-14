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
            <Wrapper>
                <Wavesurfer
                    audioFile={song}
                    playing={playing}
                    options={{
                        barWidth: 2,
                        barHeight: 0.8
                    }} />
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
        position: 'relative'
    }
)


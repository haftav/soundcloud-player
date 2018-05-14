import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';
require('wavesurfer.js');

export default class Waveform extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { song, playing } = this.props;
        return (
            <div>
                <Wavesurfer
                    audioFile={song}
                    playing={playing} />
            </div>
        )
    }
}
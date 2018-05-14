import React, { Component } from 'react';
import glamorous from 'glamorous';

//Components
import Photo from './components/Photo/Photo';
import PlayButton from './components/PlayButton/PlayButton';
import Waveform from './components/Waveform/Waveform';

//Assets
import song from './assets/eulberg.mp3';
import photo from './assets/Metro.jpg';


class Player extends Component {
  constructor() {
    super();

    this.state = {
      playing: false
    }
  }

  togglePlay = () => {
    this.setState({ playing: !this.state.playing })
  }

  render() {
    return (
      <Wrapper>
        <Photo photo={photo}/>
        <TopRight>
          <PlayButton togglePlay={this.togglePlay} playing={this.state.playing}/>
          <Header>
            <h2>artist</h2>
            <h1>song title</h1>
          </Header>
        </TopRight>
        <Waveform song={song} playing={this.state.playing}/>
        <BottomRight />
      </Wrapper>
    );
  }
}

export default Player;

const Wrapper = glamorous.div({
  width: 700,
  height: 275,
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridTemplateRows: '1fr 2fr 0.7fr'
})

const TopRight = glamorous.div({
  gridColumnStart: 2,
  gridColumnEnd: 3,
  gridRow: 'span 1',
  backgroundColor: 'lightgray',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
})

const BottomRight = glamorous.div({
  gridColumnStart: 2,
  gridColumnEnd: 3,
  gridRowStart: 3,
  backgroundColor: 'skyblue'
})

const Header = glamorous.div(
  {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
    ' h1': {
      fontSize: 16,
      margin: 0
    },
    ' h2': {
      fontSize: 15,
      margin: 3
    }
  }
)
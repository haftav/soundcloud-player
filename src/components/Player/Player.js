import React, { Component } from 'react';
import glamorous from 'glamorous';

//Components
import Photo from './components/Photo/Photo';
import PlayButton from './components/PlayButton/PlayButton';
import Waveform from './components/Waveform/Waveform';
import BottomButton from './components/BottomButton/BottomButton';

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
            <h2>Artist</h2>
            <h1>Title</h1>
          </Header>
        </TopRight>
        <Waveform song={song} playing={this.state.playing}/>
        <BottomRight>
          <BottomButton icon='fa-heart' name='like' width={60}/>
          <BottomButton icon='fa-retweet' name='repost' width={75}/>
          <BottomButton icon='fa-share-square' name='share' width={60}/>
          <BottomButton icon='fa-ellipsis-h' name='more' width={60}/>
        </BottomRight>
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
  gridTemplateRows: '0.7fr 2fr 0.5fr',
  border: '1px solid red'
})

const TopRight = glamorous.div({
  gridColumnStart: 2,
  gridColumnEnd: 3,
  gridRow: 'span 1',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  border: '1px solid blue'
})

const BottomRight = glamorous.div({
  gridColumnStart: 2,
  gridColumnEnd: 3,
  gridRowStart: 3,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  border: '1px solid gray'
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
      fontWeight: 400,
      margin: 0,
      letterSpacing: '1px'
    },
    ' h2': {
      fontSize: 12,
      fontWeight: 200,
      marginBottom: 3,
      letterSpacing: '1px'
    }
  }
)
import React, { Component } from 'react';
import glamorous from 'glamorous';

//Components
import Photo from './components/Photo/Photo';
import PlayButton from './components/PlayButton/PlayButton';
import Waveform from './components/Waveform/Waveform';
import BottomButton from './components/BottomButton/BottomButton';
import CommentInput from './components/CommentInput/CommentInput';

//Assets
import song from './assets/eulberg.mp3';
import photo from './assets/Metro.jpg';


class Player extends Component {
  constructor() {
    super();

    this.state = {
      playing: false,
      comment: {
        commentActive: false,
        commentPosition: 0
      }
    }

    this.commentClick = this.commentClick.bind(this);
    this.playerRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  commentClick = (e) => {
    if (e.target.id !== 'comment') {
      this.setState({
        comment: Object.assign({}, this.state.comment, { commentActive: true, commentPosition: e.nativeEvent.offsetX })
      })
    }
  }

  writeComment = (e) => {
    if (!this.state.comment.commentActive) {
      this.setState({
        comment: Object.assign({}, this.state.comment, { commentActive: true, commentPosition: e.nativeEvent.offsetX })
      })
    }
  }

  commentDrop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data))
    this.setState({
      comment: Object.assign({}, this.state.comment, { commentActive: true, commentPosition: e.nativeEvent.offsetX })
    })
  }

  handleClick = (e) => {
    if (!this.playerRef.current.contains(e.target)) {
      this.setState({
        comment: Object.assign({}, this.state.comment, { commentActive: false })
      })
    }
  }

  togglePlay = () => {
    this.setState({ playing: !this.state.playing })
  }

  render() {
    return (
      <div style={wrapperStyle} ref={this.playerRef}>
        <Photo photo={photo}/>
        <TopRight>
          <PlayButton togglePlay={this.togglePlay} playing={this.state.playing} />
          <Header>
            <h2>Artist</h2>
            <h1>Title</h1>
          </Header>
        </TopRight>
        <MiddleRight>
          <Waveform song={song} 
                    playing={this.state.playing} 
                    comment={this.state.comment} 
                    commentClick={this.commentClick} 
                    commentDrop={this.commentDrop}/>
          {
            this.state.comment.commentActive ?
              <CommentInput />
              :
              null
          }
        </MiddleRight>
        <BottomRight>
          <BottomButton icon='fa-heart' name='like' width={60} />
          <BottomButton icon='fa-retweet' name='repost' width={75} />
          <BottomButton icon='fa-share-square' name='share' width={60} />
          <BottomButton icon='fa-ellipsis-h' name='more' width={60} />
        </BottomRight>
      </div>
    );
  }
}

export default Player;


const wrapperStyle = {
  width: 700,
  height: 275,
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridTemplateRows: '0.7fr 2fr 0.5fr',
}

const Wrapper = glamorous.div({
  width: 700,
  height: 275,
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridTemplateRows: '0.7fr 2fr 0.5fr',
})

const TopRight = glamorous.div({
  gridColumnStart: 2,
  gridColumnEnd: 3,
  gridRow: 'span 1',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

const MiddleRight = glamorous.div({
  gridColumnStart: 2,
  gridColumnEnd: 3,
  gridRowStart: 2,
  gridRowEnd: 3,
  position: 'relative'
})

const BottomRight = glamorous.div({
  gridColumnStart: 2,
  gridColumnEnd: 3,
  gridRowStart: 3,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
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
      letterSpacing: '0.5px',
      color: 'lightgray'
    }
  }
)
import React from 'react';
import glamorous from 'glamorous';

export default function PlayButton({ playing, togglePlay }) {
    return (
        <Wrapper onClick={togglePlay}>
            {
                playing ?
                    <PauseWrapper>
                        <PauseBar />
                        <PauseBar />
                    </PauseWrapper>
                    :
                    <Triangle />
            }
        </Wrapper>
    )
}

const Wrapper = glamorous.div({
    backgroundColor: '#FF5223',
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
})

const Triangle = glamorous.div({
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    borderLeft: '10px solid white',
    transform: 'translate(15%)'
})

const PauseBar = glamorous.div({
    width: 5,
    height: 17,
    backgroundColor: 'white',
    margin: '0 2px'
})

const PauseWrapper = glamorous.div({
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})
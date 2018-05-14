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
    backgroundColor: 'orange',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const Triangle = glamorous.div({
    width: 0,
    height: 0,
    borderTop: '15px solid transparent',
    borderBottom: '15px solid transparent',
    borderLeft: '15px solid white',
    transform: 'translate(10%)'
})

const PauseBar = glamorous.div({
    width: 7,
    height: 25,
    backgroundColor: 'white',
    margin: '0 3px'
})

const PauseWrapper = glamorous.div({
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})
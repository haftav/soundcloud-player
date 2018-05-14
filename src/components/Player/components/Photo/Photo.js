import React from 'react';
import glamorous from 'glamorous';

export default function Photo ({ photo }) {
    return (
        <Wrapper photo={photo}/>
    )
}

const Wrapper = glamorous.div(
    // (props) => {
    //     backgroundImage: `url(${props.photo})`
    // },
    {
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRow: 'span 3',
        backgroundColor: 'lightblue'
    }
)
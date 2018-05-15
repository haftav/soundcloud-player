import React, { Component } from 'react';
import glamorous from 'glamorous';

export default function BottomButton ({ icon, name, width }) {
        return (
            <Wrapper width={width}>
                <i class={`fa ${icon}`}></i>
                <p>{ name }</p>
            </Wrapper>
        )
}

const Wrapper = glamorous.div(
    {
    border: '1px solid #e3e3e3',
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px 5px',
    cursor: 'pointer',
        ' p': {
                marginLeft: 7,
                fontSize: 12,
                fontWeight: 100
            },
        ' i': {
            fontSize: 14
        },
    },
    
    (props) => ({
        width: props.width
    })
)
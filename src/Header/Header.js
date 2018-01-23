import React from 'react'

// This code is from https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
const navStyle = {
    background: '#5aebad'
}

const aStyle = {
    fontSize: '3em',
    textAlign: 'left'
}

// This code is from the flashcard app that Ali built for the life-cycle methods lesson
const Header = () => (
    <nav style={navStyle}>
        <div className='container'>
            <a href="/" style={aStyle}>Home</a>
        </div>
    </nav>
)

export default Header

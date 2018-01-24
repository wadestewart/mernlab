import React from 'react'

// This code is from https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
const navStyle = {
    height: '5em',
    background: '#5aebad'

}

const aStyle = {
    fontSize: '1.5em',
    textAlign: 'left',
}

// This code is from the flashcard app that Ali built for the life-cycle methods lesson
const Header = () => (
    <nav style={navStyle}>
        <div className='container'>
            <a href="/" style={aStyle}>Online Banking Q&A</a>
        </div>
    </nav>
)

export default Header

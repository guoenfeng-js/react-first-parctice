import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Mailbox (props) {
    const msg = props.message
    return (
        <div>
            <h1>Hello</h1>
            {msg.length > 0 &&
                <h2>You Have {msg.length} messaage</h2>
            }
        </div>
    )
}



const message = ['React', 'Re: React', 'Re:Re: React']

ReactDOM.render(
    <Mailbox message={message} />,
    document.getElementById('root')
)
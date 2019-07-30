import React from 'react';


// This is the child component
// The first argument we pass will be props
// props will display the props we made in index.js
// we have passed the author prop
const CommentDetail = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today at {props.time}</span>
                </div>
                <div className="text">{props.text}</div>
            </div>
        </div>
    );
};

// This is what makes this component available to the rest of the project
export default CommentDetail;
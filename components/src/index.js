import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// import the CommentDetail file that lives in the same folder
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// This is the parent component
// In this component we are making a prop for author names
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author= "Sam"
                    time="5:00pm"
                    text="I wish I made this..."
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author= "Ryan"
                    time="6:00pm"
                    text="This site is the best!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author= "Sandra"
                    time="7:00pm"
                    text="Dang this is cool!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));
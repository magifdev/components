import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from "@faker-js/faker";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './style/App.css';


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
          author="Irene"
          timeAgo="Today at 4:45PM"
          comment="Nice post!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Marc"
        timeAgo="Today at 2:00AM"
        comment="Very cool post!"
        avatar={faker.image.image()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Chucha"
        timeAgo="Yesterday at 5:00PM"
        comment="Woof woof!"
        avatar={faker.image.image()}
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))

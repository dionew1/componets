import React from "react";
import ReactDOM from "react-dom";
import { image, name } from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to continue?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={image.avatar()}
          author={name.firstName()}
          timeAgo="Today at 4:00PM"
          text="Great job!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={image.avatar()}
          author={name.firstName()}
          timeAgo="Today at 9:23AM"
          text="Hi Mom!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={image.avatar()}
          author={name.firstName()}
          timeAgo="Yesterday at 3:55PM"
          text="Thank you :)"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

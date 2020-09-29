import React from "react";
import ReactDOM from "react-dom";
import { image, name } from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        image={image.avatar()}
        author={name.firstName()}
        timeAgo="Today at 4:00PM"
        text="Great job!"
      />
      <CommentDetail
        image={image.avatar()}
        author={name.firstName()}
        timeAgo="Today at 9:23AM"
        text="Hi Mom!"
      />
      <CommentDetail
        image={image.avatar()}
        author={name.firstName()}
        timeAgo="Yesterday at 3:55PM"
        text="Thank you :)"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

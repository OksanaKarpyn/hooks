import React, { useState } from "react";
//import CommentListHook from "./CommentListHook";
import Comments2ListHook from "./Comments2ListHook";
function Comment2Hook() {
  const [data, setData] = useState([]);
  const selectHandler = (event) => {
    console.log(event.target.value);
    const ID = event.target.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${ID}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <>
      <h3>Page Comment2Hook</h3>
      <div>
        <p>Choose post ID:</p>
        <select onChange={selectHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div>
          {/* <CommentListHook data={data} /> */}
          <Comments2ListHook data={data} />
        </div>
      </div>
    </>
  );
}
export default Comment2Hook;

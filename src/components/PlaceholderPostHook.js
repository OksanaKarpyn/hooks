import React, { useEffect, useState } from "react";

function PostHook() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      {console.log(data)}
      <div className="my-2 d-flex flex-wrap">
        {data.map((item, index) => (
          <div className="card" key={item.id} style={{ width: "14rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                {index + 1}. {item.title}
              </h5>
              <p className="card-text">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default PostHook;

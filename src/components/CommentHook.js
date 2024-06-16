import React, { useState } from "react";
function CommentHook() {
  const [data, setData] = useState([]);

  const selectHandler = (event) => {
    console.log(event.target.value);
    const ID = event.target.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${ID}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  //   useEffect(() => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <h3>Page CommentHook</h3>
      {console.log(data)}
      <div className="mt-2">
        <p>Choose post ID:</p>
        <select onChange={selectHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="my-2 bg-light">
        <h1>Comments</h1>
        {data.map((elem, index) => (
          <section key={elem.id}>
            <p>
              <b>
                {index + 1}. {elem.email}
              </b>
            </p>
            <p>{elem.body}</p>
          </section>
        ))}
      </div>
    </>
  );
}
export default CommentHook;

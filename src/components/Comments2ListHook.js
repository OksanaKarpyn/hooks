import React, { useState, useEffect } from "react";
function Comments2ListHook(props) {
  const [data, setData] = useState([]);
  const onlyEven = () => {
    console.log(data.length);

    const evenPosts = data.filter((_, index) => index % 2 === 0);
    setData(evenPosts);
  };
  useEffect(() => {
    console.log("effect");
    if (props.data.length > 0) setData(props.data);
  }, [props]);
  return (
    <>
      <div>
        <h3>Page Comments2ListHook</h3>
        <div>
          <button onClick={onlyEven}>Only even comments</button>
        </div>
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
export default Comments2ListHook;

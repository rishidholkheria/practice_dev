import React, { useState } from "react";
import { useEffect } from "react";

const Form = () => {
  const [postList, setPostList] = useState([]);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log(completed);
    console.log(title);
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const resp = await response.json();
      console.log(resp);
      setPostList(resp);
    };
    getData();
  }, [completed, title, flag]);

  var onSubmit = (e) => {
    e.preventDefault();
    const bodyData = {
      userId: 1,
      title: title,
      completed: completed,
    };

    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(bodyData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const resp = await response.json();
      console.log(resp);
    };
    getData();
    setFlag((prev) => !prev);
  };

  return (
    <div>
      <h2>Form</h2>
      {postList.reverse().slice(0,10).map((post, key)=> (
        <div style={{ border: "2px solid blue"}}>{post.title}</div>
      ))}
      <form
        action="submit"
        onSubmit={onSubmit}
        style={{
          border: "2px solid gray",
          display: "flex",
          flexDirection: "column",
          padding: "5px",
        }}
      >
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div
          style={{
            border: "1px solid gray",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <label htmlFor="yesRadio">Yes</label>
          <input
            id="yesRadio"
            onChange={() => setCompleted(true)}
            type="radio"
            name="completed"
            value={completed}
          />

          <label htmlFor="noRadio">No</label>
          <input
            id="noRadio"
            onChange={() => setCompleted(false)}
            type="radio"
            name="completed"
            value={completed}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

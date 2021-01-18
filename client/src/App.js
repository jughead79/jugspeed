import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const [res,setRes] = useState({
    id:'2'
  })
  const fetchResult = async () => {
    try {
      const response = await axios.get("http://localhost:8000/article/1");
      setData(response.data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  
  useEffect(() => {
    fetchResult();
  }, []);



  const postArticle = async() => {
    try {
      const response = await axios.delete("http://localhost:8000/article/5/");
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  return <div>{JSON.stringify(data)}
  <button onClick={postArticle}>click</button>
  </div>;
};

export default App;

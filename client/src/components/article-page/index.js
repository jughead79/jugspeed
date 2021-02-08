import React,{useState,useEffect} from "react";
import axios from 'axios'
const ArticlePage = props => {
  const [data, setData] = useState([])
  const fetchPost = async () => {
    var key = Object.keys(props.match.params)
    var value = Object.values(props.match.params)
    const response  = await axios.get(`http://127.0.0.1:8000/article/${value}`)
    setData(response.data)
  }
  useEffect(()=>{
    fetchPost()
  },[])

  return (
  <div>
    {data.title}<br/>
    {data.content}
  </div>
    )
};
export default ArticlePage;

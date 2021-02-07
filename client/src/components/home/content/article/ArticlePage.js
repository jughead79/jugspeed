import React,{useState,useEffect} from "react";
import axios from 'axios'
const ArticlePage = props => {
  const [data, setData] = useState([])
  const fetchPost = async () => {
    const id = props.match.params.articleId
    const response  = await axios.get(`http://127.0.0.1:8000/article/${id}`)
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

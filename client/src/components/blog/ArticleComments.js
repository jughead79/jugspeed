import React, { useState, useEffect } from "react";
import Jugspeed from "../../api/jugspeed";
import EmptyComment from './EmptyComment'
const ArticleComments = ({ id }) => {
  const [comments, setComments] = useState({});
  const fetchComments = async () => {
    const response = await Jugspeed.get(`/blog/comment/?article=${id}`);
    setComments(response.data);
  };
  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div className="post-comments">
      <h3>نظرات</h3>
      {
      comments.length > 0?
      Object.values(comments).map((comment) => {
        return (
          <div key={comment.id} className="single-comment">
            <div className="comment-img">
              <img src={comment.user.avatar} alt="client" />
            </div>
            <div className="comment-content">
              <h4>{comment.user.username}</h4>
              <p>{comment.content}</p>
              <span>اسفند 1397</span>
              <a href="#">پاسخ</a>
            </div>
          </div>
        );
      })
    :
    <EmptyComment />}
    </div>
  );
};
export default ArticleComments;

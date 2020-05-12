import React, { useCallback, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "./Loader.components";
import s from "./Comments.scss";
import withStyles from "isomorphic-style-loader/withStyles";

const Comments = () => {
  const { request, loading } = useHttp();
  const [comments, setComments] = useState([]);

  const getComments = useCallback(async () => {
    try {
      const fetched = await request(`/api/request/comments`, "GET", null, {});
      console.log(fetched);

      setComments(fetched.comments);
    } catch (e) {
      console.log(e.message);
    }
  }, [request]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <div className="comments">
      {loading && <Loader />}
      {comments.length > 0 &&
        comments.map((comment) => {
          return (
            <div className="comment">
              <h4>
                {comment.name} написал{" "}
                {new Date(comment.date).toLocaleDateString()}
              </h4>
              <p>{comment.subject}</p>
            </div>
          );
        })}
    </div>
  );
};

export default withStyles(s)(Comments);

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/api/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
  }, [videoId]);

  const handleComment = async () => {
    await axios.post(`/api/comments`, {
      desc: userComment,
      videoId: videoId,
    });
    window.location.reload();
  };

  return (
    <Container>
      {currentUser && (
        <NewComment>
          <Avatar src={currentUser?.img} />
          <Input
            placeholder="Add a comment..."
            onChange={(e) => setUserComment(e.target.value)}
          />
          <button onClick={handleComment}>submit</button>
        </NewComment>
      )}
      {comments.map((comment) => (
        <Comment comment={comment} key={comment._id} />
      ))}
    </Container>
  );
};

export default Comments;

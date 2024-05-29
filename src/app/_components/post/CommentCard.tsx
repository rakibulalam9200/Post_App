import { Comment } from "@/types/post";
import { FC } from "react";

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: FC<CommentCardProps> = ({ comment }) => {
  return (
    <div className="my-4">
      <p className="text-small font-bold">{comment?.email}</p>
      <p className="text-base pl-4 mb-1">{comment?.body}</p>
      <hr/>
    </div>
  );
};

export default CommentCard;

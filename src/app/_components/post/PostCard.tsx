import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  useGetCommentsByPostQuery,
  useGetSingleUserQuery,
} from "@/features/post/postSlice";
import { Post } from "@/types/post";
import { FC } from "react";
import CommentCard from "./CommentCard";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const {
    data: userData,
    error,
    isLoading,
  } = useGetSingleUserQuery({ id: post?.userId });
  const {
    data: commentsData,
    error: commentError,
    isLoading: commentLoading,
  } = useGetCommentsByPostQuery({ postId: post?.id });

  return (
    <div className="group cursor-pointer overflow-hidden bg-white border border-teal-200 hover:border-gray-500 hover:bg-gray-100 p-8 my-5 w-[90%] rounded">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 bg-cyan-500 rounded-full flex justify-center items-center">
          {userData?.name[0]}
        </div>
        <h3 className="text-base font-bold text-blue-950 mb-1">
          {userData?.name}
        </h3>
      </div>

      <h4 className="text-lg font-semibold text-gray-800">{post?.title}</h4>
      <p>{post?.body}</p>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value={"cmt"}>
            <AccordionTrigger>
              <div className="flex justify-center items-center">
                <span className="mr-1 text-lg text-green-700">
                  {commentsData?.length}
                </span>
                Comments
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {commentsData?.map((comment, i) => (
                <CommentCard comment={comment} key={comment.id} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PostCard;

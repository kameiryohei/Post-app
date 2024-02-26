import { PostDate } from "../types/types";
import PostCard from "./PostCard";
interface PostCardListProps {
  AllPosts: PostDate[];
}

const PostCardList = ({ AllPosts }: PostCardListProps) => {
  return (
    <div className="p-4 gap-4 grid lg:grid-cols-3">
      {AllPosts.map((post: PostDate) => (
        <PostCard key={post.id} postcontent={post} />
      ))}
    </div>
  );
};

export default PostCardList;

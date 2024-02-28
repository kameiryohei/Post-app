import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import { PostDate } from "../types/types";
interface PostContent {
  postcontent: PostDate;
}
const PostCard = ({ postcontent }: PostContent) => {
  const { id, username, tiq, content, createdAt } = postcontent;
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{tiq}</CardTitle>
          <CardDescription>{username}</CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter className="flex justify-between">
          <Link
            href={`/posts/${id}`}
            className="p-2 bg-gray-300 rounded-xl text-blue-900 hover:text-blue-500 transition duration-200"
          >
            もっと読む
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostCard;

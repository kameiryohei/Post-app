import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function GET(
  req: Request,
  { params }: { params: { Id: string } } //paramsのIdはディレクトリ名と一致している
) {
  const postId = params.Id;
  const bbsDetailData = await prisma.post.findUnique({
    where: {
      id: parseInt(postId),
    },
  });
  return NextResponse.json(bbsDetailData);
}

import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

export async function GET(req: Request) {
  const allPosts = await prisma.post.findMany();
  return NextResponse.json(allPosts);
}
//ブログ一覧取得API

export async function POST(req: Request) {
  const { username, tiq, content } = await req.json();
  const submitPosts = await prisma.post.create({
    data: {
      username,
      tiq,
      content,
    },
  });
  return NextResponse.json(submitPosts);
}
//ブログ投稿API

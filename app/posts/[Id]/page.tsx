import { PostDate } from "@/app/types/types";
import Link from "next/link";
import React from "react";

async function getDetailBBSData(id: number) {
  const response = await fetch(
    `https://post-ntnqr1tl7-kameiryohei.vercel.app/api/post/${id}`,
    {
      cache: "no-store",
    }
  );

  const bbsDetailData: PostDate = await response.json();

  return bbsDetailData;
}

const BBSDetailPage = async ({ params }: { params: { Id: number } }) => {
  const bbsDetailData = await getDetailBBSData(params.Id);
  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold py-4">{bbsDetailData.tiq}</h1>
        <p className="text-gray-700">作成者：{bbsDetailData.username}</p>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">{bbsDetailData.content}</p>
      </div>
      <div className="mb-8">
        <p className="text-gray-900">{bbsDetailData.createdAt.toString()}</p>
      </div>

      <Link
        href="/"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-400"
      >
        戻る
      </Link>
    </div>
  );
};

export default BBSDetailPage;

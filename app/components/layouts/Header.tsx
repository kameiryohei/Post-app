import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="divide-y border-gray-300 dark:border-gray-800 border-b">
      <div className="px-4 py-3 md:py-6 lg:px-6">
        <div className="flex items-center space-y-2 md:space-y-0 md:space-x-6">
          <Link href="/" className="text-2xl font-bold tracking-tighter mr-4">
            ブログ投稿掲示板
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            <Link
              href="/"
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-700"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-700"
            >
              About
            </Link>
            <Link
              href="/posts/create"
              className="p-4 py-3 bg-black text-gray-100 rounded-2xl transition-colors hover:bg-gray-700"
            >
              <button>投稿を作成</button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

import Link from 'next/link';
import React from 'react';

interface Post {
  title: string;
  description: string;
  image: string;
  category: string;
  views: number;
  _id: number;
  _createdAt: string;
  author: {
    _id: number;
    name: string;
  };
}

const StartupCard: React.FC<{ posts: Post }> = ({ posts }) => {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-md bg-white border border-gray-300 transform hover:scale-105 transition-transform duration-200 ease-out">
      <div
        className={`h-52 w-full ${posts.image ? "bg-cover bg-center" : "bg-gray-200 flex items-center justify-center"}`}
        style={{
          backgroundImage: posts.image ? `url(${posts.image})` : undefined,
        }}
      >
        {!posts.image && <div className="text-gray-600 text-lg font-medium">No Image Available</div>}
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-gray-900 text-2xl mb-2">{posts.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{posts.description}</p>
        <Link href={`/user/${posts.author._id}`} className="text-gray-500 text-sm italic">By: <span className="font-medium text-gray-800">{posts.author.name}</span></Link>
     </div>
      <div className="px-6 pt-4 pb-6">
        <div className="flex flex-wrap gap-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
            {posts.category}
          </span>
          <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
            Views: {posts.views}
          </span>
        </div>
        <p className="text-gray-500 text-sm mt-4">Created: {new Date(posts._createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default StartupCard;

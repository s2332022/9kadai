import React from 'react';
import { PageContent } from '../types';

interface ArticleGridProps {
  articles: PageContent['articles'];
  keyword: string;
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({ articles, keyword }) => {
  return (
    <section className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Latest Features
        </h2>
        
        {/* 
           Responsive Grid Logic:
           grid-cols-1: Mobile (default)
           md:grid-cols-2: Tablet
           lg:grid-cols-3: Desktop
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${keyword}${idx}/600/400`} 
                  alt={article.headline}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{article.headline}</h3>
                <p className="text-gray-600 flex-1">{article.summary}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800 self-start">
                  Read more &rarr;
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
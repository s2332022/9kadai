import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <header className="bg-white shadow">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center">
          <h1 className="text-2xl font-bold">カレンダー</h1>
          <p className="text-gray-600 mt-2">あああああ</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-3xl font-bold mb-4">いいいいいい</h2>
          <p className="text-gray-600 mb-6">jQuery てすと</p>
        </section>

        <section id="calendar" className="mt-8 bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold mb-2">カレンダー</h3>
          <div id="jquery-calendar" className="mt-2"></div>
        </section>

        <section className="mt-8 text-sm text-gray-600">
          <p>ううう</p>
        </section>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-3xl mx-auto px-4 py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} 第９回課題</div>
      </footer>
    </div>
  );
};
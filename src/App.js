import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to React with Tailwind!</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;

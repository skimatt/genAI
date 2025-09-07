import React, { useState } from 'react';

// GANTI DENGAN URL WORKER ANDA!
const WORKER_URL = 'https://assets-img-generator.rahmatzkk10.workers.dev/';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    setImageUrl('');

    if (!prompt.trim()) {
      setError('Mohon masukkan prompt terlebih dahulu.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Terjadi kesalahan server.');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (err: any) {
      setError(err.message);
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white p-6 sm:p-10 rounded-xl shadow-lg border border-gray-200">
      
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">AI Image Generator</h1>
        <p className="mt-2 text-lg text-gray-500">Buat gambar menakjubkan dari teks. Cukup ketikkan ide Anda.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <textarea 
            rows={4} 
            placeholder="Masukkan prompt Anda di sini (misal: a mystical castle on a floating island, digital art)"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-4 pr-12 rounded-xl border border-gray-300 bg-gray-50 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-base"
          ></textarea>
          <button 
            type="button" 
            onClick={() => setPrompt('')} 
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <button 
          type="submit" 
          disabled={isLoading}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-md disabled:bg-indigo-300 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Generating...' : 'Generate Image'}
        </button>
      </form>

      {/* Status & Output */}
      <div className="mt-8 flex flex-col items-center gap-4">
        {isLoading && (
          <div className="flex flex-col items-center">
            <svg className="animate-spin h-10 w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3h-4z"></path>
            </svg>
            <p className="mt-2 text-gray-600">Generating image...</p>
          </div>
        )}
        {error && <p className="text-red-500 text-center text-sm">{error}</p>}
        {imageUrl && !isLoading && (
          <img 
            src={imageUrl} 
            alt="Generated AI Image" 
            className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
          />
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
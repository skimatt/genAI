import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageGenerator from './components/ImageGenerator';
import './App.css'; 

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 antialiased min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8 pt-24">
        <ImageGenerator />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NewItems from './components/NewItems';

function App() {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white'>
      <Hero />
      <Features />
    <NewItems /> 
    </div>
  );
}

export default App;

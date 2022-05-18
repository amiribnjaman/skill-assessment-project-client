import './App.css';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="bg-primary w-full h-screen text-base-100 flex items-center justify-center">
      <div className='w-[70%] h-[70vh] bg-[#fff] mx-auto '>
        <Navbar />
      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTaskForm from './Pages/AddTask/AddTaskForm';
import Login from './Pages/Auth/Login';
import ProtectedRoute from './Pages/Auth/ProtectedRoute';
import Signup from './Pages/Auth/Signup';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="bg-primary w-full h-screen text-black flex items-center justify-center">
      <div className='w-[70%] h-[80vh] bg-[#fff] mx-auto '>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path='/addtask' element={
            <ProtectedRoute>
              <AddTaskForm />
            </ProtectedRoute>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <ToastContainer position="top-center"/>
      </div>
    </div >
  );
}

export default App;

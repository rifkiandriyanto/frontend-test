import './App.css';
import Login from './pages/login';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import RegisterComponent from './components/register-component';
import PreRegister from './components/preregister';
import Home from './pages/home';
import Nav from './pages/nav';
// import Sales from './pages/sales';
// import Inventory from './pages/inventory';
// import Purchase from './pages/purchase';
import ComingsoonFeature from './pages/comingsoon-feature';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />}>
          <Route path={'/register'} element={<PreRegister />} />
          <Route path={'/register/next'} element={<RegisterComponent />} />
        </Route>
        <Route path={'/'} element={<Nav />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/sales'} element={<ComingsoonFeature />} />
          <Route path={'/inventory'} element={<ComingsoonFeature />} />
          <Route path={'/purchase'} element={<ComingsoonFeature />} />
          <Route path={'/user'} element={<ComingsoonFeature />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

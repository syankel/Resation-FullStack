import './App.css';
import SignIn from './log/signIn'
import SignUp from './log/signUp'
import UserNavBar from './components/UserNavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './features/Category/Category';
import ListApartment from './features/Apartmen/ListApartment';
import ListCategory from './features/Category/ListCategory'
import Welcome from './components/Welcome'
import Entery from './components/Entery'
import Custom from './components/custom'
import LookEreas from './components/erea';
import Beds from './components/beds';
import ListUsers from './features/User/ListUsers';
import Add from './features/Apartmen/AddApartment';
import ApartmentNavBar from './components/ApartmentNavBar';
import ListRents from './features/Rest/ListRent';
import { Logout } from '@mui/icons-material';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Entery></Entery>}></Route>
          <Route path='/logout' element={<Logout></Logout>}></Route>
          <Route path='/category' element={<ListCategory></ListCategory>}></Route>
          <Route path='/about' element={<Welcome></Welcome>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/userNavBar' element={<UserNavBar></UserNavBar>}></Route>
          <Route path='category' element={<Category></Category>}></Route>
          <Route path='ListApartment/:page/:category/:erea/:minBeds/:maxBeds' element={<ListApartment></ListApartment>}></Route>
          <Route path='custom' element={<Custom></Custom>}></Route>
          <Route path='erea' element={<LookEreas></LookEreas>}></Route>
          <Route path='beds' element={<Beds></Beds>}></Route>
          <Route path='users' element={<ListUsers></ListUsers>}></Route>
          <Route path='/add' element={<Add></Add>}></Route>
          <Route path='/ApartmentNavBar' element={<ApartmentNavBar></ApartmentNavBar>}></Route>
          <Route path='/listRents' element={<ListRents></ListRents>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

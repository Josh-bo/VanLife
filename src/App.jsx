import {Route, Routes} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import VansPage from './Pages/VansPage';
import DisplayEachVanPage from './Pages/DisplayEachVanPage';
import SignInPage from './Pages/SignInPage';
import HostDashboard from './Pages/HostDashboard';
import ErrorPage from './Components/ErrorPage';
import HostVans from './Pages/HostVans';
import HostReviews from './Pages/HostReviews';
import HostIncomes from './Pages/HostIncomes';


function App() {

  return (
    <>
       <Routes basename="/my-app">
        <Route path='/' element={<LandingPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/vans' element={<VansPage/>} />
        <Route path='/displayVan' element={<DisplayEachVanPage/>} />
        <Route path='/signIn' element={<SignInPage/>} />
        <Route path='/host/dashboard' element={<HostDashboard/>} />
        <Route path='/host/vans' element={<HostVans/>} />
        <Route path='/host/reviews' element={<HostReviews/>} />
        <Route path='/host/incomes' element={<HostIncomes/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>  
    </>
  )
}

export default App

import{Routes,Route} from 'react-router-dom'
import LandingPage from './pages/Landing'
function App() {

  return (
    <>  
      {/* <LandingPage/> */}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        {/* <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/> */}
      </Routes>

    </>
  )
}

export default App

import React from 'react'
import {Navbar, CTA, Service, StudentRegister, Login, CollegeSignUp, CameraRegister} from './components/index.js';
import {Header, Footer, ShowData, Collegeseedata} from './container/index.js';
import './app.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"


const App = (props) => {
  // let content;
  // if (props.title === 'home') {
  //   console.log(content);
  //   content = <Header />;
  // } else if (props.title === 'service') {
  //   console.log(content)
  //   content = <service />
  // }

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={content} /> */}
        <Route path='/' element={<Header />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/StudentRegister' element={<StudentRegister />} />
        <Route path='/CollegeRegistration' element={<CollegeSignUp />} />
        <Route path='/CameraRegistration' element={<CameraRegister />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/showdata' element={<ShowData />} />
        <Route path='/seedata' element={<Collegeseedata />} />
      </Routes>
      <CTA />
      <Footer />
    </Router>
  )
}

export default App

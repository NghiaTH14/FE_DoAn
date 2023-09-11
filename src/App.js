
import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material'; // Thêm import này


// import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
// import Login from './Pages/Login';
// import ChoseRole from './Pages/ChoseRole';
// import SignUpUser from './Pages/Client/SignUpUser';
// import VerifyCode from './Pages/Client/VerifyCode';
// import NewPassword from './Pages/Client/NewPassword';



// Tạo một chủ đề (theme)
const theme = createTheme(); // Tạo theme

function App() {
  return (
    <div className="App">
      {/* Bọc ứng dụng của bạn bên trong ThemeProvider */}
      <ThemeProvider theme={theme}>
        {/* <Navbar/> */}
        <Home/>

        {/* <SignUpUser/> */}
        {/* <ChoseRole/> */}
        {/* <Login /> */}
        {/* <VerifyCode/> */}
        {/* <NewPassword/> */}
        
      </ThemeProvider>
    </div>
  );
}

export default App;
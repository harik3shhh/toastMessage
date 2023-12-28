import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import { Message } from "./pages/Message";
import Error from "./pages/Error";


const App = () =>{
  return <>
  <BrowserRouter>
  <Navbar />

  <Routes>
    <Route path="/" element={<Message />}/>

    <Route path="*" element={<Error />}/>

  </Routes>

  </BrowserRouter>
  </>
};

export default App;
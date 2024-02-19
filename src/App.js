import './App.css';
import NavBar from './Components/NavBar';
import { Route , Routes} from 'react-router-dom'
import Comments from './Components/Comments/Comments';
import Posts from './Components/Posts/Posts';
import Users from './Components/Users/Users';
function App() {
  return (
    <>
      <NavBar />
      <div>  
      <Routes>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/comments' element={<Comments />}/>
        <Route path="/users"  element={<Users />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;

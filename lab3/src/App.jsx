
import './App.css';
import Books from './components/Books';


import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import SharedLayout from './layouts/SharedLayout';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import BookForm from './pages/BookForm';
import About from './pages/About';
import BookDetails from './pages/BookDetails';
import { getAllBooks, getBookById } from './api/bookApi';
import {Error} from './layouts/Error'
import Counter from './components/CounterWithToolKit';
function App() {
  const router = createBrowserRouter(
      createRoutesFromElements(

        <>
          <Route path='/' element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='books'
      
            errorElement={<Error/>} element={<Books/>}/>
            <Route path='books/:id/edit' element={<BookForm/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='counter' element={<Counter/>}/>
            <Route path='books/:id'  errorElement={<Error/>} element={<BookDetails/>}/>
            
            <Route path='*' element={<NotFound/>}/>

          </Route>
        </>

  )
      );
  
  return (
    <>
      <RouterProvider router={router} />
    </>
    
    );
  
}

export default App;

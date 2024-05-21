import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function MyNav() {
  // const {count} = useSelector(state=> state.x);
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink className={({isActive})=>{return isActive ? "bg-success nav-link rounded-1" : "nav-link"}} to="/">Home</NavLink>
            <NavLink className={({isActive})=>{return isActive ? "bg-success nav-link rounded-1" : "nav-link"}} to="/counter">Counter</NavLink>
            <NavLink className={({isActive})=>{return isActive ? "bg-success nav-link rounded-1 " : "nav-link"}} to="/about">About</NavLink>
            <NavLink className={({isActive})=>{return isActive ? "bg-success nav-link rounded-1" : "nav-link"}} to="/books">Books</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

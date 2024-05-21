import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { addBook, editBook, getBookById } from '../api/bookApi';
import { useDispatch } from 'react-redux';
import { addBookAction, editBookAction } from '../Store/bookSlice';

export default function BookForm() {
  const dispatch = useDispatch()
  let [book, setBook] = useState({
    title: '',
    author: '',
    year: '',
    imageURL: ''
  });
  let [errors, setErrors] = useState({
    title: '',
    year: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== '0') {
      const fetchData = async () => {
        const response = await getBookById(id);
        setBook(response.data);
      }
      fetchData();
    }
  }, []);

  const changeHandler = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!validateForm()) return; // Check if the form is valid
      if (id === '0') {
        //dispatch AddBookAction then update books
        console.log("addBookAction should called here")
        dispatch(addBookAction(book)).then(()=>{
            navigate('/books');
        })
        //await addBook(book);
        
      } else {
        //await editBook(book, id);
        dispatch(editBookAction({book,id}));
        navigate('/books');
      }
    } catch (error) {
      console.error('Error submitting book data:', error);
    }
  }

  const validateForm = () => {
    let valid = true;
    // Validate title
    if (book.title.length < 5) {
      setErrors(prevErrors => ({
        ...prevErrors,
        title: 'Title must be at least 5 characters long'
      }));
      valid = false;
    }
    // Validate year
    if (!/^\d+$/.test(book.year)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        year: 'Year must be a number'
      }));
      valid = false;
    }
    return valid;
  }

  return (
    <div className='container my-2'>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Book Title"
            name="title" value={book.title} onChange={changeHandler} />
          <Form.Text className="text-danger">{errors.title}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter Author"
            name='author' value={book.author} onChange={changeHandler} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" placeholder="Enter Year"
            name='year' value={book.year} onChange={changeHandler} />
          <Form.Text className="text-danger">{errors.year}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="my-2">
          {id === '0' ? 'Add Book' : 'Edit Book'}
        </Button>
      </Form>
    </div>
  );
}

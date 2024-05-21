import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getBookByID } from '../Store/bookSlice';

export default function BookDetails() {
  const { book, isLoading, error } = useSelector(state => state.bookSlice);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBookByID(id));
  }, [dispatch, id]);


  if (isLoading) {
    return <h1 className="alert alert-info">Loading...</h1>;
  }

  if (error) {
    return <h1 className="alert alert-danger">Something went wrong: {error}</h1>;
  }

  return (
    <>
      <div className="d-flex justify-content-center my-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`/images/${book.imageURL}`} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              Author: {book.author}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Year: {book.year}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link className="btn btn-success mx-1" href="#">Add to Cart</Card.Link>
            <Link className="btn btn-primary mx-1" to="/books">Back to books</Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
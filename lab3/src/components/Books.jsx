import axios from "axios";
import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from "react-redux";
import { deleteBookAction, getAllBookAction } from "../Store/bookSlice";

export default function Books() {
  const { books, isLoading, error } = useSelector(state => state.bookSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBookAction());
  }, [dispatch]);

  const deleteHandler = (bookId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteBookAction(bookId));
        Swal.fire(
          'Deleted!',
          'Your book has been deleted.',
          'success'
        );
      }
    });
  };
 console.log("fom book page books is",books);
  return (
    <div className="container">
      <div className="my-3 d-flex justify-content-center">
        <Link to="/books/0/edit">
          <button className="btn btn-success">Add New Book</button>
        </Link>
      </div>
      {isLoading && <h1 className="alert alert-info">Loading</h1>}
      {error ? <h1 className='alert alert-danger'>Something went wrong</h1> :
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                return (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.year}</td>
                    <td className="d-flex justify-content-around">
                      <Link to={`/books/${book.id}`}>
                        <i className="fs-2 mx-2 bi bi-eye text-success"></i>
                      </Link>
                      <i onClick={() => deleteHandler(book.id)} className="fs-2 mx-2 bi bi-trash text-danger"></i>
                      <Link to={`/books/${book.id}/edit`}>
                        <i className="fs-2 mx-2 bi bi-pencil-square"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      }
    </div>
  );
}

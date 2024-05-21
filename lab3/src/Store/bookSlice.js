import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addBook, deleteBook, editBook, getAllBooks, getBookById } from "../api/bookApi";

const initialState = {
    books: [],
    error: null,
    isLoading: false,
    book:{}
};
export const getAllBookAction = createAsyncThunk(
    /** */
    "book/getAllBookAction",
    /** dispatch(getAllBookAction/pending)  */
    async(args,thunkAPI)=> {
        const {rejectWithValue} = thunkAPI
        try {
            const response = await getAllBooks();
            return response.data;
            /** dispatch fulfilled */
            
        } catch (error) {
            return rejectWithValue(error)
        }
    });

export const addBookAction = createAsyncThunk(
    "book/addBookAction",
    async (book,thunkAPI)=>{
        const {rejectWithValue} = thunkAPI;
        try {
            const response= await addBook(book);
            console.log("response from add",response)
            //return response.data;
            
        } catch (error) {
            return rejectWithValue(error);
            
        }
    });

export const deleteBookAction = createAsyncThunk(
    "book/deleteBookAction",
    async(id,thunkAPI)=>{
        const {rejectWithValue} = thunkAPI;
        try {
            await deleteBook(id);
            return id;
            
        } catch (error) {
            return rejectWithValue(error.message);
            
        }
    });  
    
export const getBookByID = createAsyncThunk(
    'book/getBookByID',
    async(id,thunkAPI)=>{
        const {rejectWithValue} = thunkAPI;
        try {
            const response = await getBookById(id);
            return response.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    });

export const editBookAction = createAsyncThunk(
    'book/editBookAction',
    async({book,id},thunkAPI)=>{
        const {rejectWithValue} = thunkAPI;
        try {
            const response = await editBook(book,id);
            //console.log("response from edit",response)
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    });

const bookSlice = createSlice({
    name: 'book',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=> {
        //getallbooks
        builder.addCase(getAllBookAction.pending, (state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(getAllBookAction.fulfilled, (state,action)=>{
            state.books = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getAllBookAction.rejected, (state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        });
        // delete book
        builder.addCase(deleteBookAction.pending, (state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(deleteBookAction.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.books = state.books.filter(book => book.id !== action.payload);
        });
        builder.addCase(deleteBookAction.rejected, (state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        });
        // get book by ID
        builder.addCase(getBookByID.pending,(state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(getBookByID.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.book = action.payload;
            
        });
        builder.addCase(getBookByID.rejected, (state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        });
        // Edit Book
        builder.addCase(editBookAction.pending,(state,action)=> {
            state.isLoading = true;
        });
        builder.addCase(editBookAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.books = state.books.map(book => book.id === action.payload.id ? action.payload : book);
            });
        builder.addCase(editBookAction.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        });



    }
});

export const bookReducer = bookSlice.reducer;
export const bookActions = bookSlice.actions;
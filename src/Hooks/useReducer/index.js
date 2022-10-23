import React, { useReducer, useState } from 'react';
import Modal from '../../Modal';

const booksData = [
    { id: 1, name: 'pather pachali' },
    { id: 2, name: 'Padma nadir majhi' },
    { id: 3, name: 'Sri kanta' }
]
// const modal = ({modalText}) => {
//     return <p>{modalText}</p>
// }

const reducer = (state, action) => {



    // action.type ,action.payLoad
    if (action.type === 'ADD') {
        const allBooks = [...state.books, action.payload]


        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: 'book is added'
        }

    }
    if (action.type === 'REMOVE') {

        const filterBooks = [...state.books].filter((book) => book.id !== action.payload)

        return {
            ...state,
            books: filterBooks,
            isModalOpen: true,
            modalText: 'book is removed'
        }
    }
    return state;
}
const UserReducer = () => {



    // const [books, setBooks] = useState(booksData);
    // const [modalText, setModaltext] = useState("");
    // const [isModalOpen, setIsModalOpen] = useState(false);


    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        isModalOpen: false,
        modalText: ''

    })





    const [bookName, setBookName] = useState("");

    const hundleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: new Date().getTime().toString(), name: bookName }

        dispatch({ type: "ADD", payload: newBook })
        setBookName('');



        // setBooks((prevState) => {
        //     const newBook = { id: new Date().getTime().toString(), name: bookName }

        //     return [...prevState, newBook]
        // })
        // console.log(books)

        // setIsModalOpen(true);

        // setModaltext('book is added');


    }

    // const removeBook = (id) => {
    //     dispatch({ type: "REMOVE", payload: id })

    // }


    return (
        <div>
            <h1>useReduceser</h1>

            <form onSubmit={hundleSubmit}>
                <label>Bookname</label>
                <input type="text"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}


                />
                <button type='submit'>submit</button>
            </form>
            {
                bookState.isModalOpen && <Modal modalText={bookState.modalText}></Modal>
            }
            <h1>BooksList </h1>
            {
                bookState.books.map((book) => {

                    const { id, name } = book;
                    return <>
                        <li>{name}</li>
                        <button onClick={() => dispatch({ type: "REMOVE", payload: id })}>Remove</button>

                    </>
                })
            }
        </div>
    );
};

export default UserReducer;
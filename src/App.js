import './App.css';
import { Col, Row } from 'antd';
import Total from './components/Total';
import Search from './components/Search';
import AddForm from './components/AddForm';
import ItemDetail from './components/ItemDetail';
import { useState } from 'react';
import booksJson from './books.json'

function App() {
  const [books, setBooks] = useState(booksJson)
  const [filterBooks, setFilterBooks] = useState(booksJson)
  //create a new state - total
  const [totalBooks, setTotalBooks] = useState([])

  function handleAdd(title, price, quantity){
    let obj = {
      title, price, quantity
    }
    // keep a track of whether the book with the same title exists
    let isFound = false;

    // create a clone to ensure we don't modify the state directly
    let cloneBooks = structuredClone(totalBooks)
    cloneBooks.map((book) => {
        if (book.title == title) {
          isFound = true;
          book.quantity = quantity
        }
    })
    if (isFound) {
      setTotalBooks(cloneBooks)
    }
    else {
      setTotalBooks([...totalBooks, obj])
    }
   
  }

  function handleAddForm(value){
    setBooks([value, ...books])
  }

  function handleSearch(event){
    console.log(event.target.value)
    let searchText = event.target.value
    let newBooks = books.filter((book) => {
      return book.title.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilterBooks(newBooks)
  }

  return (
    <div>
      <h1>Root Books</h1>
      <Row>
        <Col span={12}>
          <Search handleSearch={handleSearch}/>
          <AddForm handleAddForm={handleAddForm}/>
          {
            filterBooks.map((book, index) => {
              return <ItemDetail
                handleAdd={handleAdd}
                title={book.title}
                price={book.price} 
                key={`${index}${book.title}`}
              />
            })
          }
        </Col>
        <Col span={12}>
          <Total totalBooks={totalBooks}/>
        </Col>
      </Row>
    </div>
  );
}

export default App;

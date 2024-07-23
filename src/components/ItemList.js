
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Item from './Item';
import Loader from './Loader';
import './ItemList.css';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const loaderRef = useRef(null);

  //It renders whenever pageNumber changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); //indicates that fetching is in progress
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`); //get request to fetch data from url
        setItems(prevItems => [...prevItems, ...response.data]); // Items to be viewed
        setLoading(false); // set false when fetch is done
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData(); //calling fetchData
  }, [pageNumber]);


  // It calls when scrolling happens
  const handleScroll = () => {
    if (loaderRef.current && loaderRef.current.getBoundingClientRect().top <= window.innerHeight) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };
  // It renders once whenever scrolling happen
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
      {loading && <Loader />}
      <div ref={loaderRef} className="end-of-list">End of List</div>
    </div>
  );
};

export default ItemList;


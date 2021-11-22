import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import { getAllProducts } from './action';
import { useSelector } from 'react-redux';
import Card from '../../component/elements/Card';
import { useHistory, useLocation } from 'react-router-dom';

export default function Product() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation()
  const { data } = useSelector(s => s.product);

  useEffect(() => {
    dispatch(getAllProducts())
  },[])

  return(
    <section className='product'>
      <div>
        <h2>New Releases</h2>
      </div>
      <div>
        <Card data={data} onClick={(value) => history.push(`product?id=${value}`)} />
        
      </div>
    </section>
  )
}
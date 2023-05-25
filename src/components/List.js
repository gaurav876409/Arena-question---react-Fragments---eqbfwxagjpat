import React from 'react';
import ListItems from './ListItems';

const List = ({ listx }) => {
  return (
    // code here
    <>
      {listx.map((item) => (
        <ListItems key={item} valuex={item} />
      ))}
    </>



  )
}

export default List;
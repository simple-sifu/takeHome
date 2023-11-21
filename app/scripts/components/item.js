import React from 'react';

const Item = (props) => {
  const { picture, name, price, tags } = props;
  const items = [];
  let str = "";
  for (let i = 0; i < tags.length; i++){
    if (i === tags.length-1){
        str += tags[i];
    }else{
        str += tags[i]+", ";
    }
}
  return (
    <div className="item">
      <img src={picture} alt="picture"/>
      <div>
        <p className="item-name">{name}</p>
        <p>${price}</p>
        <p className='tags'>{str}</p>
      </div>
    </div>
  );
};

export default Item;

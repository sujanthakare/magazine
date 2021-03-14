import React, { Fragment } from 'react';

const productList = [
  {
    name: 'name',
    description: 'desc',
    image: '/images/shoes-2.jpg',
  },
  {
    name: 'name',
    description: 'desc',
    image: '/images/shoes-2.jpg',
  },
  {
    name: 'name',
    description: 'desc',
    image: '/images/shoes-2.jpg',
  },
  {
    name: 'name',
    description: 'desc',
    image: '/images/shoes-2.jpg',
  },
];

const Catalogue = () => {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
      }}
    >
      {productList.map((item, index) => {
        return (
          <div
            key={index}
            css={{
              backgroundColor: 'grey',
              height: 500,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px black solid',
            }}
          >
            <img
              src={item.image}
              alt={item.image}
              css={{
                height: 'inherit',
                width: '100%',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Catalogue;

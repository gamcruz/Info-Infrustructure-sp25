const products = [
      {
        
        image: 'images/i210-midterm-product1.webp',
        title: 'My First Fire'
      },
      {
        
          image: 'images/i210-midterm-product2.webp',
          title: 'Nap Sack',
      },
      {
        
          image: 'images/i210-midterm-product3.webp',
          title: 'Hot Tub Wildlife Feeder'
  },
      {
        
          image: 'images/i210-midterm-product4.webp',
          title: 'Toilet Meadow'
  },
      {
        
          image: 'images/i210-midterm-product5.webp',
          title: 'Pudding Pouch'
  },
      {
        
          image: 'images/i210-midterm-product6.webp',
          title: 'My Handy Hand'
  }
      
     
];
    

    const catalogContainer = document.getElementById('body');

    for (let i = 0; i < products.length; i++) {
      const product = products[i];

    
      const productDiv = document.createElement('div');
 productDiv.classList.add('product');

     
     const productImage = document.createElement('img');
      productImage.src = product.image;
 productImage.alt = product.title;

    
      const productTitle = document.createElement('div');
     productTitle.classList.add('product-title');
      productTitle.innerText = product.title;


      productDiv.appendChild(productImage);
      productDiv.appendChild(productTitle);

      catalogContainer.appendChild(productDiv);
    }

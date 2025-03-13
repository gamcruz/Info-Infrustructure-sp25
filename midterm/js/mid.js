const products = [
      {
        
        image: 'images/i210-midterm-product1.webp',
        title: 'Product 1',
        description: 'Description for product 1'
      },
      {
        
          image: 'images/i210-midterm-product2.webp',
          title: 'Product 2',
        description: 'Description for product 2'
      },
      {
        
          image: 'https://via.placeholder.com/200x150?text=Product+3',
          title: 'Product 3',
        description: 'Description for product 3'
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

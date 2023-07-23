fetch("../data/products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (product) {
    let products = document.querySelector("#data-output");
    console.log(product)

    let output = "";
    for (let item of product) {
      output += `

        <div class="post-top">
        <div class="image-thumbnail">
        <a href="#" class="hover-switch">
        <img src="${item.thumbnail}" alt="${item.title}"/>
        <img src="${item.thumbnail}" alt="${item.title}"/>
        </a>
            <div class="section-btn">
            <button class="text-sm btn" id="btn">
              Add to Cart
            </button>
             <button class="text-sm btn-1" id="btn">
                <i class="fa-regular fa-heart"></i>
              </button>
          </div>
        </div>
        <div class="harga">
            <h2>
                Rp ${ item.price }
            </h2>
        </div>
        <div class="category-name text-xl">
            <h2>${item.title}</h2>
        </div>
        <div class="cate">
            <ul>
                <li><a href="#">${item.categories[0]}</a></li>
                <li><a href="#">${item.categories[1]}</a></li>
            </ul>
        </div>
        
    </div> 

      `;
    }
    function Onimg()
    {

    }
    products.innerHTML = output;
  });

let prodcutsHTML = ''

products.forEach((product) => {
  prodcutsHTML += `
  <div class="product-one">
  <div class="images">
    <img src="${product.image}" alt="" width="100%" height="100%">      
  </div>
  <p style="padding: 10px; color: black;">${product.name}</p>

  <div class="rating">
    <img src="images/ratings/rating-${product.rating.stars * 10}.png" alt="" width = 120px>
    <p style="padding-left: 10px; color: rgb(14, 159, 196);">${product.rating.count}</p>
  </div>

  <div  style="font-weight: 700; color: black; margin-left: -160px;
  margin-top: 13px;
  margin-bottom : 40px;
  font-family: 'Roboto';
  font-size: 18px;">
    ${(product.priceCents / 100).toFixed(2)}
  </div>
  <select class="select-option" id="">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
  <div class="normal-space"></div>
  <p class="added-to-cart js-add"></p>
  <button class="add-to js">Add to Cart</button>
</div>
  `
})

document.querySelector('.body-container').innerHTML = prodcutsHTML;


let cartQuanity = 0;
document.querySelectorAll('.js').forEach((button, index) => {
  button.addEventListener('click', ()=> {
    document.querySelectorAll('.js-add')
    .forEach(() => {
        const data2 = setTimeout(() => {
        const value = document.querySelectorAll('.js-add')[index]
        value.innerHTML = 'Added to cart'
      }, 120)
      
      setTimeout(()=> {
        clearTimeout(data2)
        document.querySelectorAll('.js-add')[index].innerHTML = ''
      }, 500)
    
    })
    cartQuanity += 1
    document.querySelector('.cart-quanity').innerHTML = cartQuanity
    if(cartQuanity >= 10) {
      document.querySelector('.cart-quanity').classList.add('hello')
    }
  })
})


let whom = document.querySelector('.ham')
let isToggled = false
whom.addEventListener('click', ()=> {
  if(!isToggled){
    let whom2 = document.querySelector('.head-container')
    whom2.classList.remove('head-container')
    whom2.classList.add('head-container2')
    isToggled = true
  }else {
    let whom2 = document.querySelector('.head-container2')
    whom2.classList.remove('head-container2')
    whom2.classList.add('head-container')
  
    isToggled = false
  }
})

let isme = false
whom.addEventListener('click', ()=> {
  if(!isme) {
    let whom2 = document.querySelector('.cart-toggled')
    whom2.classList.remove('cart-toggled')
    whom2.classList.add('cart-toggled2')
    isme = true
  }else {
    let whom2 = document.querySelector('.cart-toggled2')
    whom2.classList.remove('cart-toggled2')
    whom2.classList.add('cart-toggled')
    isme = false
  }
})

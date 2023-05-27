const products = document.querySelector(".products");
async function fetchData(){
    try{
        const response =await fetch ('https://fakestoreapi.com/products');
    const jsonData = await response.json();
   

    // adding products content
    products.innerHTML =`${jsonData.map((elements)=>{
        const description = elements.description.slice(0, 80) + "...";
        const title = elements.title.slice(0, 20) + "...";
        const design = `<div class="card" style="width: 18rem;">
        <img src="${elements.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <h5 class="card-title">${elements.price}</h5>
          <a href="#" class="btn btn-warning">Add to cart</a>
        </div>
      </div>`
      return design;
    }).join("")}`
    } catch(error){
        console.log("error", error);
    }
    ;}

fetchData();

// categories
const categories = document.querySelector(".categories");
const getCategories= async()=>{
  try{
    const response =await fetch ('https://fakestoreapi.com/products/categories');
    const jsonData = await response.json();
   
    
    // adding categories
    categories.innerHTML = `${jsonData.map((elements)=>{
      return `
      <button onclick ="getProductsCat('${elements.replace("'", "\\'")}')" class="btn btn-warning ">${elements}</button>
      `
    }).join("")}`
  }
  
  catch(error){
    console.log("err", error)
  }
}

getCategories();

// products by categories
const getProductsCat = async(cat)=>{
  
  try{
    const response =await fetch (`https://fakestoreapi.com/products/category/${cat}`);
const jsonData = await response.json();


// adding products content
products.innerHTML =`${jsonData.map((elements)=>{
    const description = elements.description.slice(0, 80) + "...";
    const title = elements.title.slice(0, 20) + "...";
    const design = `<div class="card" style="width: 18rem;">
    <img src="${elements.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
      <h5 class="card-title">${elements.price}</h5>
      <a href="#" class="btn btn-warning">Add to cart</a>
    </div>
  </div>`
  return design;
}).join("")}`
} catch(error){
    console.log("error", error);
}
;
}

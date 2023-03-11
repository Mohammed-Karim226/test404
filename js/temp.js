// mobile 
let mobile = document.querySelector('.mobile');
let bar = document.getElementById('bar');
let links = document.querySelector('.links ul');
let close = document.querySelector('.links ul .close');
if(bar){
    bar.addEventListener('click',() =>{
        links.classList.add('go-left');
    });
}
if(close){
    close.addEventListener('click', ()=>{
        links.classList.remove('go-left');
    });
}

// select product
let single_img = document.querySelector('.selected-product .container .box .img img');
let img = document.querySelectorAll('.selected-product .container .element li img');
let imgs_array = Array.from(document.querySelectorAll('.selected-product .container .element li img'));

imgs_array.forEach((imgs)=>{
    imgs.onclick = function(e){
        single_img.src = e.target.src;
    }
});

// go to sproduct location
let boxSource = Array.from(document.querySelectorAll('.products .container .box .img'));
boxSource.forEach((box)=>{
    box.onclick = function(){
        window.location.href='sproduct.html';
    }
});

// select rate star
let starCollection = Array.from(document.querySelectorAll('.products .container .box ul li'));
starCollection.forEach((star)=>{
    star.onclick = function(e){
        e.target.classList.toggle('active');
    }
});

// Cart
let Cart = document.querySelector('.header .container .links ul li i');
let cart2 = document.querySelector('.header .container .mobile i');

let Add_button = document.querySelector('.selected-product .container .text .quantity .add');
let added_product_section = document.querySelector('.added-product .container');

Cart.addEventListener('click',()=>{
    Our_cart();
});
cart2.addEventListener('click',()=>{
    Our_cart();
});

function Our_cart(){
window.location.href = 'Cart.html';
}

// function add_element_in_cart(imgsrc,h4Text,h2Text,h1Salary)
function add_element_in_cart(imgsrc,h4Text,h2Text,h1Salary){
    
    let box = document.createElement('div')
    box.className = 'box';
    
    let imgx = document.createElement('div');
    imgx.className = 'img';
    
    let inside_img = document.createElement('img');
    inside_img.src = imgsrc;
    
    imgx.appendChild(inside_img)
    box.appendChild(imgx);
    added_product_section.appendChild(box);
    
    let text = document.createElement('div');
    text.className = 'text';
    
    let h4 = document.createElement('h4');
    h4.appendChild(document.createTextNode(h4Text));
    
    let h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(h2Text));
    
    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(h1Salary));
    
    text.appendChild(h4);
    text.appendChild(h2);
    text.appendChild(h1);
    
    
    
    let details = document.createElement('div');
    details.className = 'details';
    
    let pr_details = document.createElement('h2');
    h2.appendChild(document.createTextNode('Product details'));
    
    let pr_p = document.createElement('p');
    pr_p.appendChild(document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nulla aut. Magni sapiente temporibus labore est dolor? Laudantium ipsa sapiente sed, architecto, deleniti a ut aliquam aut, eaque tempore qui.'));
    
    details.appendChild(pr_details);
    details.appendChild(pr_p);
    
    text.appendChild(details);
    
    
    added_product_section.appendChild(text);
    
    let deleted = document.createElement('button');
    deleted.style.cssText="padding:10px;text-align:center;cursor:pointer;";
    deleted.appendChild(document.createTextNode('remove'));
    details.appendChild(deleted)
 
    deleted.onclick = function(){
        deleted.parentElement.remove();
        box.remove();
        text.remove();
    }
    
}
// adding elments into cart page
add_element_in_cart('images/products/f1.jpg','Home / T-shirts','Mens fashion T_shirts',' $139.00');
add_element_in_cart('images/products/f2.jpg','Home / T-shirts','Mens fashion T_shirts',' $120.00');
add_element_in_cart('images/products/f3.jpg','Home / T-shirts','Mens fashion T_shirts',' $99.00');
add_element_in_cart('images/products/n2.jpg','Home / T-shirts','Mens fashion T_shirts',' $168.00');
add_element_in_cart('images/products/n7.jpg','Home / T-shirts','Mens fashion T_shirts',' $299.00');
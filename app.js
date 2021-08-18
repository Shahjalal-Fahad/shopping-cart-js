//total indivisual  product and price
function updateNumber(productId,price,isIncreasing){
    const inputProduct=document.getElementById(productId+'-number');
    let product=inputProduct.value;
    if(isIncreasing){
        product=parseInt(product)+1;
    }
    else if(product > 0){
        product=parseInt(product)-1;
    }
    inputProduct.value=product;
    const productTotal=document.getElementById(productId+'-total');
    productTotal.innerText=product*price;
    calculatePrice();
    
}

// total input product
function totalInput(productId){
    const productInput=document.getElementById(productId);
    const productNumber=parseInt(productInput.value);
    return productNumber;

    // return totalPrice;
}
//total cart price
function calculatePrice(){
    const phonePrice=totalInput('phone-number')*1219;
    const casePrice=totalInput('case-number')*59;
    const subTotal=phonePrice+casePrice;
    const tax=subTotal / 10;
    const totalPrice=subTotal+tax;

    // update from html
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax').innerText=tax;
    document.getElementById('total-price').innerText=totalPrice;
}


// phone price increasing and decreasing event handeler
document.getElementById('phone-plus').addEventListener('click',function(){
    updateNumber('phone',1219,true);
    
});

document.getElementById('phone-minus').addEventListener('click',function(){
    updateNumber('phone',1219,false);
});

// case price increasing and decreasing event handeler
document.getElementById('case-plus').addEventListener('click',function(){
    updateNumber('case',59,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
    updateNumber('case',59,false);
});


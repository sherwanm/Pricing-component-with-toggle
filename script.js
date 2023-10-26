let checkbox = document.querySelector('input');
let price_nummbers = document.querySelectorAll('.price-nummber');

function priceChange( a, b, c){
    price_nummbers[0].innerText = a;
    price_nummbers[1].innerText = b;
    price_nummbers[2].innerText = c;
}

checkbox.addEventListener('change', function(){

    if(this.checked){
        document.querySelector('.child-span').style.right = "6%";
        document.querySelector('.parent-span').style.backgroundImage  = "linear-gradient(  var(--LinearGradientFrom), var(--LinearGradientTo))";
        priceChange( '199.99', '249.99', '399.99');
    }
    else{
        document.querySelector('.child-span').style.right = "46%";
        document.querySelector('.parent-span').style.backgroundImage  = "linear-gradient(#b3b5c6, #b3b5c6)";
        priceChange( '19.99', '24.99', '39.99');
    }

});

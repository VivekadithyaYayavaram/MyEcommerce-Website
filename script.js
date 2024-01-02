
const loadData = async () => {
    try {
        const res = await fetch('https://dummyjson.com/products')
        const json = await res.json();
        let products = json.products;
        products.forEach((product, index) => {

            let productCard = document.createElement('div');
            let title = document.createElement('h1');
            let brand = document.createElement('h3');
            let description = document.createElement('p');
            let price = document.createElement('div');
            let cart = document.createElement('cart')
            let img = document.createElement('img');

            title.innerHTML = `<h2>${product.title}</h2>`
            brand.innerHTML = `${product.brand}`
            description.innerHTML = `<h4>${product.description}</h4>`
            price.innerHTML = `<div id="pricebtn_\`${index}"> ${product.price}₹ </div>`
            // price.classList="btn btn-primary"
            price.classList = "btn btn-success btn1"
            // price.id = `btn1_${index}`;
            cart.innerHTML = '<span class="material-symbols-outlined">shopping_cart </span>'
            cart.classList = "btn btn-primary btn2";
            img.setAttribute('src', product.thumbnail);
            img.style.width = '300px';
            img.style.height = '300px';
            productCard.appendChild(img);
            productCard.appendChild(title);
            productCard.appendChild(brand);
            productCard.appendChild(price);
            productCard.appendChild(cart);
            productCard.appendChild(description);
            productsContainer.appendChild(productCard);
        });

        return "data"
    } catch (error) {
        return error;
    }


    finally {
        console.log("Done with work");
    }
}

loadData();


var homeButton = document.getElementById('home');
homeButton.addEventListener('click', function () {
    location.reload(true);
});

var unavailableButtons = document.getElementsByClassName("extra");
for (var i = 0; i < unavailableButtons.length; i++) {
    unavailableButtons[i].addEventListener('click', function () {
        alert("SORRY, AVAILABLE SOON");
        location.reload(true);
    });
}

let btn = document.getElementsByid("pricebtn");
for (var i = 0; i < btn.length; i++) {
    pricebtn[i].addEventListener('click', function () {
        alert("SORRY, AVAILABLE SOON");
        location.reload(true);
    });
}

var rate = document.getElementById("rate")
rate.addEventListener('click', function () {
    let rated = prompt("Rate Us Out Of 10 & Give Your Suggestions");
    if (rated) {
        alert("Thank You For Rating")
    } else {
        alert("Expected Ratings-Dissappointed Us")
    }
});

var share = document.getElementById("share")
share.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Web Share API Draft',
            text: 'Take a look at this spec!',
            url: '#',
        })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    } else {
        console.log('Share not supported on this browser, do it the old way.');
    }
});

// document.getElementById("account").onclick = function () {
//     location.href = "https://myaccount.google.com/";
// };








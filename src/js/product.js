let products = {
    data: [
      {
        productName: "Nail treatments",
        category: "Beauty-Care",
        price: "30",
        image: "/src/assets/Search and filter/nail.jpeg",
      },
      {
        productName: "Hair-cutting",
        category: "Hair-Care",
        price: "30",
        image: "/src/assets/Search and filter/haircut.jpeg",
      },
      {
        productName: "Hair Coloring",
        category: "Hair-Care",
        price: "25",
        image: "/src/assets/Search and filter/coloring.jpeg",
      },
      {
        productName: "Hair Styling",
        category: "Hair-Care",
        price: "20",
        image: "/src/assets/Search and filter/styling.avif",
      },
      {
        productName: "Waxing",
        category: "Skin-Care",
        price: "35",
        image: "/src/assets/Search and filter/waxing.jpg",
      },
      {
        productName: "Skin care treatments",
        category: "Skin-Care",
        price: "22",
        image: "/src/assets/Search and filter/skincare.jpeg",
      },
      {
        productName: "Tanning",
        category: "Skin-Care",
        price: "45",
        image: "/src/assets/Search and filter/tanning.webp",
      },
      {
        productName: "Massage",
        category: "Relax",
        price: "50",
        image: "/src/assets/Search and filter/massage.jpeg",
      },
      {
        productName: "Aromatherapy",
        category: "Relax",
        price: "55",
        image: "/src/assets/Search and filter/aroma.jpeg",
      },
    ],
  };
  
  for (let i of products.data) {
    //card
    let card = document.createElement("div");

    //card should category and stay hidden initially
    card.classList.add("card", i.category.replace(/\s/g, '_'),"hide"); // Заменяем пробелы на нижнее подчеркивание

    //img div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //product-name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toLocaleUpperCase();
    container.appendChild(name);
   
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    

    card.appendChild(container);
  
    document.getElementById("products").appendChild(card);
  }

  //parameter passed from button 
  // parameter passed from button 
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach(button => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // select all cards
  let elements = document.querySelectorAll(".card");
  // loop through all cards
  elements.forEach(element => {
    // display all cards
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) { // Fix the typo here
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}
// Search button click
document.getElementById("search").addEventListener("click", () => {
  // Initialize
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  let matchFound = false;

  // Loop through
  elements.forEach((element, index) => {
    // Check if include
    if (element.innerText.includes(searchInput.toUpperCase())) {
      // Display matching card
      cards[index].classList.remove("hide");
      matchFound = true;
    } else {
      // Hide other options
      cards[index].classList.add("hide");
    }
  });

  // Display message if no matches found
  if (!matchFound) {
    alert("Oops,Sorry unfortunely we can't provide this kind of services!.");
    cards.forEach(card => {
      card.classList.remove("hide");
    });
  }
});



// Initially display all products
window.onload = () => {
  filterProduct("all");
};




  
  
const apiElement = document.querySelector('.api');

// Statement 19: Display "Loading..." inside .api before fetching data
apiElement.innerText = "Loading...";

// Fetching data from API
fetch('https://fakestoreapi.com/products')
  .then((response) => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then((products) => {
    // Statement 18: Display message inside .api when data is successfully loaded
    apiElement.innerText = "API data successfully loaded!";
    apiElement.style.color = "#27ae60";

    // Call functions to render outputs for each statement
    renderTask1(products);
    renderTask2(products);
    renderTask3(products);
    renderTask4(products);
    renderTask5(products);
    renderTask6(products);
    renderTask7(products);
    renderTask8(products);
    renderTask9(products);
    renderTask10(products);
    renderTask11(products);
    renderTask12(products);
    renderTask13(products);
    renderTask14(products);
    renderTask15(products);
    renderTask16(products);
    renderTask17(products);
  })
  .catch((error) => {
    apiElement.innerText = "Failed to load API data.";
    apiElement.style.color = "#c0392b";
    console.error("Fetch Error:", error);
  })
  // Statement 20: Use .finally() to display message after request finishes
  .finally(() => {
    console.log("API request completed");
    setTimeout(() => {
      const currentText = apiElement.innerText;
      apiElement.innerText = `${currentText} | API request completed.`;
    }, 1000);
  });

// --- TASK IMPLEMENTATIONS ---

// 1. Display only product title inside an <h1> tag
function renderTask1(products) {
  const container = document.getElementById('output-1');
  products.slice(0, 3).forEach(p => {
    const h1 = document.createElement('h1');
    h1.style.fontSize = '1.1rem';
    h1.style.margin = '6px 0';
    h1.innerText = p.title;
    container.appendChild(h1);
  });
}

// 2. Display product ID and title inside an <h2> tag
function renderTask2(products) {
  const container = document.getElementById('output-2');
  products.slice(0, 3).forEach(p => {
    const h2 = document.createElement('h2');
    h2.style.fontSize = '1rem';
    h2.style.margin = '6px 0';
    h2.innerText = `ID: ${p.id} - ${p.title}`;
    container.appendChild(h2);
  });
}

// 3. Display the first 30 characters of each product title
function renderTask3(products) {
  const container = document.getElementById('output-3');
  products.slice(0, 4).forEach(p => {
    const div = document.createElement('div');
    div.className = 'item-box';
    div.innerText = p.title.substring(0, 30) + '...';
    container.appendChild(div);
  });
}

// 4. Display the first 100 characters of each product description
function renderTask4(products) {
  const container = document.getElementById('output-4');
  products.slice(0, 3).forEach(p => {
    const div = document.createElement('div');
    div.className = 'item-box';
    div.innerText = p.description.substring(0, 100) + '...';
    container.appendChild(div);
  });
}

// 5. Display each product's image inside a <div>
function renderTask5(products) {
  const container = document.getElementById('output-5');
  products.slice(0, 2).forEach(p => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = p.image;
    img.className = 'img-only';
    div.appendChild(img);
    container.appendChild(div);
  });
}

// 6. Display the product title, description, and image inside a single <div>
function renderTask6(products) {
  const container = document.getElementById('output-6');
  products.slice(0, 2).forEach(p => {
    const div = document.createElement('div');
    div.className = 'item-box';
    div.innerHTML = `
      <h4>${p.title}</h4>
      <p style="font-size:0.8rem;">${p.description.substring(0, 50)}...</p>
      <img src="${p.image}" style="width:60px;">
    `;
    container.appendChild(div);
  });
}

// 7. Display each product's price inside a <p> tag
function renderTask7(products) {
  const container = document.getElementById('output-7');
  products.slice(0, 4).forEach(p => {
    const pTag = document.createElement('p');
    pTag.style.fontWeight = 'bold';
    pTag.innerText = `Price: $${p.price}`;
    container.appendChild(pTag);
  });
}

// 8. Display each product's category inside an <h3> tag
function renderTask8(products) {
  const container = document.getElementById('output-8');
  products.slice(0, 4).forEach(p => {
    const h3 = document.createElement('h3');
    h3.style.fontSize = '0.95rem';
    h3.style.color = '#8e44ad';
    h3.innerText = `Category: ${p.category}`;
    container.appendChild(h3);
  });
}

// 9. Display the product title in uppercase
function renderTask9(products) {
  const container = document.getElementById('output-9');
  products.slice(0, 3).forEach(p => {
    const div = document.createElement('div');
    div.className = 'item-box';
    div.innerText = p.title.toUpperCase();
    container.appendChild(div);
  });
}

// 10. Display the product title and its total character count
function renderTask10(products) {
  const container = document.getElementById('output-10');
  products.slice(0, 3).forEach(p => {
    const div = document.createElement('div');
    div.className = 'item-box';
    div.innerText = `Title: ${p.title} | Count: ${p.title.length} chars`;
    container.appendChild(div);
  });
}

// 11. Display the first 5 products only
function renderTask11(products) {
  const container = document.getElementById('output-11');
  const firstFive = products.slice(0, 5);
  firstFive.forEach(p => {
    const div = document.createElement('div');
    div.className = 'item-box';
    div.innerText = `${p.id}. ${p.title}`;
    container.appendChild(div);
  });
}

// 12. Display products with their IDs, titles, and prices
function renderTask12(products) {
  const container = document.getElementById('output-12');
  products.slice(0, 3).forEach(p => {
    const div = document.createElement('div');
    div.className = 'item-box';
    div.innerText = `[ID: ${p.id}] ${p.title} - $${p.price}`;
    container.appendChild(div);
  });
}

// 13. Display each product's image with a width of 200px
function renderTask13(products) {
  const container = document.getElementById('output-13');
  products.slice(0, 2).forEach(p => {
    const img = document.createElement('img');
    img.src = p.image;
    img.style.width = '200px';
    container.appendChild(img);
  });
}

// 14. Add a separate <div> for each product and give it a class name of "card"
function renderTask14(products) {
  const container = document.getElementById('output-14');
  products.slice(0, 2).forEach(p => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = `<strong>${p.title}</strong>`;
    container.appendChild(cardDiv);
  });
}

// 15. Display product title and description, limiting description to 50 characters
function renderTask15(products) {
  const container = document.getElementById('output-15');
  products.slice(0, 3).forEach(p => {
    const div = document.createElement('div');
    div.className = 'item-box';
    const shortDesc = p.description.length > 50 ? p.description.substring(0, 50) + '...' : p.description;
    div.innerHTML = `<strong>${p.title}</strong><br><small>${shortDesc}</small>`;
    container.appendChild(div);
  });
}

// 16. Display all product titles in browser console and on the webpage
function renderTask16(products) {
  const container = document.getElementById('output-16');
  console.log("--- Task 16: All Product Titles ---");
  
  products.forEach((p, index) => {
    // Console log
    console.log(`${index + 1}. ${p.title}`);
    
    // Render on webpage
    if (index < 4) { // Limits rendering preview box for space
      const div = document.createElement('div');
      div.innerText = `${index + 1}. ${p.title}`;
      container.appendChild(div);
    }
  });
}

// 17. Display each product's title and category inside the same <div>
function renderTask17(products) {
  const container = document.getElementById('output-17');
  products.slice(0, 3).forEach(p => {
    const div = document.createElement('div');
    div.className = 'item-box';
    div.innerHTML = `<strong>Title:</strong> ${p.title} <br> <strong>Category:</strong> ${p.category}`;
    container.appendChild(div);
  });
}
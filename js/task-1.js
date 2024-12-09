const categoriesList = document.querySelector("#categories");

const totalCategories = categoriesList.children.length;
console.log(`Number of categories: ${totalCategories}`);


const items = document.querySelectorAll(".item");
items.forEach((item) => {
    const categoryName = item.querySelector("h2").textContent; // Başlık metni
    const elementsCount = item.querySelectorAll("ul > li").length; // Alt öğe sayısı
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
});

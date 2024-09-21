const tourPackages = [
    {
        title: "Korea Tour Packages",
        description: "Enjoy the beauty of cherry blossoms and Jeju Island for 5 days 4 nights.",
        price: "IDR 12,000,000",
        image: "https://tse4.mm.bing.net/th?id=OIP.Jb9cFjVLe7C3ecLcdG7t7wHaEB&pid=Api&P=0&h=180"
    },
    {
        title: "Jepang Tour Packages",
        description: "Explore the excitement of Mount Fuji in Japan 6 days 5 nights.",
        price: "IDR 14,500,000",
        image: "https://tripjepang.co.id/wp-content/uploads/2018/01/Paket-Wisata-Tour-ke-Jepang-6-Hari-5-Malam-Juli-2018.jpg"
    },
    {
        title: "New Zealand",
        description: "Enjoy the cool scenery and beautiful buildings for 7 days 6 nights.",
        price: "IDR 28,000,000",
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/fiordland-national-park-new-zealand-pixabay.jpg"
    }
];

function displayTourPackages() {
    const tourContainer = document.getElementById('tourPackages');
    tourPackages.forEach(package => {
        const card = document.createElement('div');
        card.className = "col-md-4";
        card.innerHTML = `
            <div class="card">
                <img src="${package.image}" class="card-img-top" alt="${package.title}">
                <div class="card-body">
                    <h5 class="card-title">${package.title}</h5>
                    <p class="card-text">${package.description}</p>
                    <p class="font-weight-bold">${package.price}</p>
                    <button class="btn btn-primary">Booking Now</button>
                </div>
            </div>
        `;
        tourContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', displayTourPackages);

function showSidebar() {   
    const sidebar = document.querySelector(".sidebar"); // Select the sidebar
    sidebar.style.display = "flex"; // Show the sidebar
}

function hideSidebar() {   
    const sidebar = document.querySelector(".sidebar"); // Select the sidebar
    sidebar.style.display = "none"; // Hide the sidebar
}

let loadMoreBtn = document.querySelector('#load-more');
let services = document.querySelectorAll('.services-container .services-types .service1-24');
let currentItem = 3; // Start with 3 to show the first 3 items

loadMoreBtn.addEventListener('click', () => {
    for (let i = 0; i < currentItem; i++) {
        services[i].style.display = 'inline-block'; // Display the service items
    }
    
    currentItem += 3; // Increment currentItem by 3
    
    // Hide the load more button if all items are displayed
    if (currentItem >= services.length) {
        loadMoreBtn.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the "Request a Quote" button from the Home Page
    const requestQuoteHomeButton = document.querySelector(".bottom-button");
    if (requestQuoteHomeButton) {
        requestQuoteHomeButton.addEventListener("click", function() {
            // Redirect to the Contact Page
            window.location.href = "Contact.html";
        });
    }

    // Get the "Request a Quote" button from the Services Page
    const requestQuoteServicesButton = document.querySelector(".services-button");
    if (requestQuoteServicesButton) {
        requestQuoteServicesButton.addEventListener("click", function() {
            // Redirect to the Contact Page
            window.location.href = "Contact.html";
        });
    }
});



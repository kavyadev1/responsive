$(document).ready(function () {
    // Load properties from JSON file
    $.getJSON('properties.json', function (data) {
        displayProperties(data);
    });

    // Display properties on the page
    function displayProperties(properties) {
        let propertyList = $('#property-list');
        propertyList.empty(); // Clear previous list

        properties.forEach(property => {
            let propertyCard = `
                <div class="property-card">
                    <img src="${property.image}" alt="${property.name}">
                    <h3>${property.name}</h3>
                    <p>Price: ${property.price}</p>
                    <a href="property.html?id=${property.id}">View Details</a>
                </div>
            `;
            propertyList.append(propertyCard);
        });
    }

    // Search functionality
    $('#search').on('input', function () {
        let query = $(this).val().toLowerCase();
        $.getJSON('properties.json', function (data) {
            let filteredProperties = data.filter(property => property.name.toLowerCase().includes(query));
            displayProperties(filteredProperties);
        });
    });
});

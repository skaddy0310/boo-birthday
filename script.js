


function showSection(sectionId) {
    // Hide all sections
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }

    // Show the selected section
    var section = document.getElementById(sectionId);
    section.classList.add('active');
}
// Get references to menu, menu toggle button, and content
var menu = document.getElementById('menu');
var menuToggleButton = document.getElementById('menuToggleButton');
var content = document.getElementById('content');

// Function to open the menu
function openMenu() {
  menu.classList.add('open');
}

// Function to close the menu
function closeMenu() {
    menu.classList.remove('open');

}

// Event listener for click event on the menu toggle button
menuToggleButton.addEventListener('click', function() {
  if (menu.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Event listener for click event on menu items
var menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    closeMenu(); // Close the menu when a menu item is clicked
  });
});

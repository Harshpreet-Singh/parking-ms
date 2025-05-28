console.log("Parking Management System loaded successfully.");

// Example: redirect to 404 if page not found
function pageNotFound() {
  window.location.href = "/pages/404.html";
}



// sidebar toggle function 
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    // Check if open
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
    } else {
      sidebar.style.width = "250px";
    }
  }
  
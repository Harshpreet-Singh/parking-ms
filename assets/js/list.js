// Sample data
const occupiedSlots = [1, 3, 5, 7, 9, 12, 15, 18, 20];
const availableSlots = [2, 4, 6, 8, 10, 11, 13, 14, 16, 17, 19, 21];

// Vehicle details
const vehicleDetails = {
  1: { owner: "John Doe", vehicleNumber: "ABC-1234", timeOfEntry: "2025-05-28 08:15 AM" },
  3: { owner: "Jane Smith", vehicleNumber: "XYZ-5678", timeOfEntry: "2025-05-28 09:30 AM" },
  5: { owner: "Bob Johnson", vehicleNumber: "LMN-9101", timeOfEntry: "2025-05-28 10:00 AM" },
  7: { owner: "Alice Brown", vehicleNumber: "QRS-2345", timeOfEntry: "2025-05-28 07:45 AM" },
  9: { owner: "Tom Clark", vehicleNumber: "DEF-6789", timeOfEntry: "2025-05-28 11:20 AM" },
  12: { owner: "Emma Wilson", vehicleNumber: "GHI-3456", timeOfEntry: "2025-05-28 08:50 AM" },
  15: { owner: "Chris Lee", vehicleNumber: "JKL-7890", timeOfEntry: "2025-05-28 09:10 AM" },
  18: { owner: "Sophia Davis", vehicleNumber: "MNO-1237", timeOfEntry: "2025-05-28 10:30 AM" },
  20: { owner: "Mike Taylor", vehicleNumber: "PQR-4568", timeOfEntry: "2025-05-28 11:45 AM" }
};

// Attach event listeners to View Slots buttons (redirecting instead of opening modal)
document.querySelectorAll('.view-slots-btn').forEach(button => {
  button.addEventListener('click', () => {
    const type = button.getAttribute('data-type');
    // Redirect to slots-list.html with type param
    window.location.href = `slots-list.html?type=${type}`;
  });
});

// Function to open vehicle details modal (still used if needed)
function showVehicleDetails(slotNum) {
  const vehicleModal = document.getElementById('vehicleModal');
  const vehicleDetailsContent = document.getElementById('vehicleDetailsContent');
  const details = vehicleDetails[slotNum];
  
  if (!details) {
    vehicleDetailsContent.innerHTML = '<p>No details available for this slot.</p>';
  } else {
    vehicleDetailsContent.innerHTML = `
      <p><strong>Vehicle Number:</strong> ${details.vehicleNumber}</p>
      <p><strong>Owner:</strong> ${details.owner}</p>
      <p><strong>Time of Entry:</strong> ${details.timeOfEntry}</p>
    `;
  }
  vehicleModal.style.display = 'block';
}

// Close modals on close button click
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.onclick = () => {
    btn.closest('.modal').style.display = 'none';
  };
});

// Close modals when clicking outside the modal content
window.onclick = e => {
  const vehicleModal = document.getElementById('vehicleModal');
  if (e.target === vehicleModal) vehicleModal.style.display = 'none';
};

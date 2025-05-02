// Function to preview images
function previewImage(event, previewId) {
    const file = event.target.files[0];
    const preview = document.getElementById(previewId);
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
      preview.style.display = 'none';
    }
  }
  
  // Function to validate form
  function validateForm() {
    const form = document.getElementById('mainForm');
  
    // Check if form elements are valid
    if (!form.checkValidity()) {
      alert("Please fill all required fields correctly!");
      return false;
    }
  
    // Check if at least one 'Current Work' checkbox is selected
    const checkboxes = document.querySelectorAll('input[name="hobbies"]:checked');
    if (checkboxes.length === 0) {
      alert("Please select at least one Current Work option!");
      return false;
    }
  
    // Confirm submission
    const confirmSubmit = confirm("Are you sure you want to submit the form?");
    if (confirmSubmit) {
      showSuccessModal();
      form.reset();
      hideAllPreviews();
      return false; // Prevent actual form submission for demo
    } else {
      return false;
    }
  }
  
  // Function to hide all preview images after reset
  function hideAllPreviews() {
    const previews = document.querySelectorAll('.preview-img');
    previews.forEach(img => {
      img.src = "";
      img.style.display = 'none';
    });
  }
  
  // Function to show success modal
  function showSuccessModal() {
    // Generate a random 4-digit number
    const randomId = Math.floor(1000 + Math.random() * 9000);
  
    // Set the registration ID in the modal
    document.getElementById('registrationId').textContent = randomId;
  
    // Show the modal
    document.getElementById('successModal').style.display = 'flex';
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById('successModal').style.display = 'none';
  }
  
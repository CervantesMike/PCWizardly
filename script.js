function toggleDetails(button) {
  const details = button.nextElementSibling;
  const isVisible = details.style.display === 'block';
  
  // Hide all other details
  document.querySelectorAll('.details').forEach(el => el.style.display = 'none');

  // Toggle current
  details.style.display = isVisible ? 'none' : 'block';
}
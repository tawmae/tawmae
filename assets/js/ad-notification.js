function toggleAccordion(id) {
  const content = document.getElementById(id);
  const icon = content.previousElementSibling.querySelector('.iconify');
  if (content.style.display === 'block') {
    content.style.display = 'none';
    icon.setAttribute("data-icon", "ic:baseline-keyboard-arrow-right");
  } else {
    content.style.display = 'block';
    icon.setAttribute("data-icon", "ic:baseline-keyboard-arrow-down");
  }
}

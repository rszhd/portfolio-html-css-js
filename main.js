window.onload = function () {
  const buttons = document.querySelectorAll('.category-button');
  const projectItems = document.querySelectorAll('.project-item');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      projectItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category');

        if (category === 'all' || category === itemCategory) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
};

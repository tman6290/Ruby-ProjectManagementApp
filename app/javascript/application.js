// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener('click', function(event) {
  const element = event.target.closest('[data-confirm]');
  if (!element || !element.hasAttribute('data-method')) return;

  const confirmMessage = element.getAttribute('data-confirm');
  if (confirmMessage && !confirm(confirmMessage)) {
    event.preventDefault();
    return false;
  }
});





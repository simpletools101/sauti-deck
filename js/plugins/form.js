document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  var form = this;
  var formData = new FormData(form);

  fetch('/send-email', {
      method: 'POST',
      body: formData
  })
  .then(function (response) {
      if (response.ok) {
          return response.text();
      }
      throw new Error('Network response was not ok.');
  })
  .then(function (data) {
      document.getElementById('message').textContent = data;
      form.reset();
  })
  .catch(function (error) {
      console.error('There was a problem with the fetch operation:', error.message);
  });
});
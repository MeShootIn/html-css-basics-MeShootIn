document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = form.elements;

    inputs['subject'].value = decodeURI(inputs['subject'].value);
    inputs['body'].value = decodeURI(inputs['body'].value);

    form.submit();
  });
});

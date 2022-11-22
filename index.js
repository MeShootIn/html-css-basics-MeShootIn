import tips from './src/tips.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = form.elements;

    inputs['subject'].value = decodeURI(inputs['subject'].value);
    inputs['body'].value = decodeURI(inputs['body'].value);

    form.submit();
  });

  const tipTemplateHTML = document.querySelector('#tip-template').innerHTML;
  const filledTemplateHTML = _.template(tipTemplateHTML);
  const tipContainer = document.querySelector('.tip-container');

  tipContainer.innerHTML += filledTemplateHTML({ tips });
});

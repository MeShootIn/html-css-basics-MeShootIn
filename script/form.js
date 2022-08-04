function onSubmit() {
  const form = document.getElementById('feedback-form');
  const inputs = form.elements;

  inputs['subject'].value = decodeURI(inputs['subject'].value);
  inputs['message'].value = decodeURI(inputs['message'].value);
  form.submit();
}

function onSubmit() {
    let form = document.getElementById('feedback-form');
    let inputs = form.elements;

    inputs['subject'].value = decodeURI(inputs['subject'].value);
    inputs['message'].value = decodeURI(inputs['message'].value);

    form.submit();
}
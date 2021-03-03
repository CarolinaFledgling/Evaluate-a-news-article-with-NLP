// import scoreTag from '../src/client/js/formHandler.js';
// const scoreTag = require('../src/client/js/formHandler')


test('ensure handleSubmit function exists', () => {
    document.body.innerHTML = 
    '<button class="btn-submit">Analyze</button>';
    require('../src/client/js/formHandler')
    const btnSubmit = document.querySelector('.btn-submit')
    btnSubmit.click();
    expect(handleSubmit).toBeDefined();
   
})
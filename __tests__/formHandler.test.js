
// test('ensure handleSubmit function exists', () => {
//     document.body.innerHTML = 
//     `<button class="btn-submit">Analyze</button>`;
//     require('../src/client/js/formHandler')
//     const btnSubmit = document.querySelector('.btn-submit')
//     btnSubmit.click();
//     expect(handleSubmit).toBeDefined();
   
// })

const checkUrl = require('../src/client/js/urlChecker')


    test('ensure checkUrl function exists', () => {
        expect(checkUrl).toBeDefined();
    
    })

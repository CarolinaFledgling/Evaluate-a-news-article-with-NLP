import {
    checkUrl
} from './js/urlChecker';   // jeśli chce to użyć czy to potrzebuje importować ?

const inputUrl = document.querySelector('.form__url-input');
const btnSubmit = document.querySelector('.btn-submit')
const btnReset = document.querySelector('.btn-reset')
const url = "https://api.meaningcloud.com/sentiment-2.1?key=";

//`${url}${API_KEY}&lang=auto&url=""`





function handleSubmit(event) {
    event.preventDefault()
    const urlEnter = inputUrl.value;

    // receive api key from server side 

    fetch('http://localhost:3000/api_data')
        .then((res)=>res.json())



    fetch(`${url}${API_KEY}&lang=auto&url=""`)// jak tutaj sprawdzić url ?
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
        }).catch((err)=>{
            console.log(err, 'something went wrong')
        })

}
btnSubmit.addEventListener('click', handleSubmit)



export {
    handleSubmit
}



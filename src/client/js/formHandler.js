import {
    checkUrl
} from './urlChecker'; 

const inputUrl = document.querySelector('.form__url-input');
const btnSubmit = document.querySelector('.btn-submit')
const btnReset = document.querySelector('.btn-reset')
const confidence = document.querySelector('.result__item--confidence')
const agreement = document.querySelector('.result__item--agreement')
const irony = document.querySelector('.result__item--irony')
const subjectivity = document.querySelector('.result__item--subjectivity')
const url = "https://api.meaningcloud.com/sentiment-2.1?key=";






function handleSubmit(event) {
    event.preventDefault()
    const urlEnter = inputUrl.value;

    // receive api key from server side 
    fetch('/api_data')
        .then((res) => res.json())
        .then((config) => {
            console.log('APi aa', config)
            //recive data from API 
            fetch(`${url}${config.key}&lang=auto&url=${urlEnter}`) 
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    confidence.innerHTML = ` Confidence ${res.confidence}`;
                    agreement.innerHTML = ` Agreement ${res.agreement}`;
                    irony.innerHTML = ` Irony ${res.irony}`;
                    subjectivity.innerHTML = ` Subjectivity ${res.subjectivity}`;
                }).catch((err) => {
                    console.log(err, 'something went wrong')
                })
        })
    inputUrl.value = "";
}

btnSubmit.addEventListener('click', handleSubmit)

export {
    handleSubmit
}
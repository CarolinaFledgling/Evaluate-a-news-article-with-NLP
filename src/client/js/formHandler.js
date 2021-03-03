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
const warning = document.querySelector('.result__warning')
const score = document.querySelector('.result__item--score')

const ApiUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";



function handleSubmit(event) {
    event.preventDefault()
    const urlEnter = inputUrl.value;
    if (urlEnter === "") {
        warning.textContent = "Please enter a valid url to any English website";
        return false;
    } else {
        // receive api key from server side 
        fetch('/api_data')
            .then((res) => res.json())
            .then((config) => {

                //check if url is correct
                if (checkUrl(urlEnter)) {
                    //recive data from API 
                    fetch(`${ApiUrl}${config.key}&lang=auto&url=${urlEnter}`)
                        .then((res) => res.json())
                        .then((res) => {
                            console.log(res)
                            confidence.innerHTML = ` Confidence : ${res.confidence}`; 
                            agreement.innerHTML = ` Agreement : ${res.agreement}`;
                            irony.innerHTML = ` Irony : ${res.irony}`;
                            subjectivity.innerHTML = ` Subjectivity : ${res.subjectivity}`;
                            langUrl(res.status.code)
                        }).catch((err) => {
                            console.log(err, 'something went wrong')
                        })
                } else {
                    cleanUp()
                    warning.textContent = "Not a valid url format";
                    return false;
                }

            })

    }

    warning.textContent = "";
}

// Clean up value 
function cleanUp() {
    inputUrl.value = "";
    confidence.innerHTML = "";
    agreement.innerHTML = "";
    irony.innerHTML = "";
    subjectivity.innerHTML = "";
    warning.textContent = "";
}

// if there is no english url 

function langUrl(langLink) {
    if (langLink === '105') {
        cleanUp()
        warning.textContent = "Not a English url website";
        return false;
    } else {
        return true;
    }
}

// Event Listener

btnSubmit.addEventListener('click', handleSubmit)
btnReset.addEventListener('click', cleanUp)

export {
    handleSubmit,
}
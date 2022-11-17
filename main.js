console.log('Load script');

const fullName = document.querySelector('div[data-fullname]');
const cardNumber = document.querySelector('div[data-card-number]');
const cardMonth = document.querySelector('div[data-month]');
const cardYear = document.querySelector('div[data-year]');
const cardCvc = document.querySelector('div[data-cvc]');
const inputFields = document.querySelectorAll('.js-input');

const fillCardField = (dataField, dataContent) => {
    if(dataContent) {
        document.querySelector(`div[data-${dataField}]`).textContent = dataContent;
    }
}

const fillFullName = (dataFullname) => {
    let placeholderFullName = 'Firstname Lastname';
    return dataFullname ? dataFullname : placeholderFullName;
}

const splitCardNumber = (numberString) => {
    let placeholderCardNumber = '0000 0000 0000 0000';
    let regex = /.{1,4}/g;
    return numberString ? numberString.match(regex).join(' ') : placeholderCardNumber;
}

const fillDate = (numberDate) => {
    console.log(numberDate);
}

inputFields.forEach((item) => {
    item.addEventListener('keyup', (e) => {
        let dataInput = e.target.dataset.input;
        let inputContent = e.target.value;
        switch (dataInput) {
            case 'fullname':
                fillCardField(dataInput, fillFullName(inputContent))
                break;
            case 'card-number':
                console.log('Input')
                fillCardField(dataInput, splitCardNumber(inputContent))
                break;
            case 'card-date':
                console.dir(e.target)
                fillDate(inputContent)
                break;
            case 'card-cvc':
                break;
        }
    })
})
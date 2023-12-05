

const container = document.getElementById('elements');


for (let i = 1; i<= 100;i++) {
   const divContainer = document.createElement('div');
    divContainer.classList.add('div-interno');
    container.append(divContainer);
    container.classList.add('d-flex','flex-wrap','gap-3','justify-content-between');
    divContainer.classList.add('d-flex','justify-content-center','align-items-center');

    if (i % 3 == 0 && i % 5 == 0) {
        divContainer.append('fizzbuzz');
        divContainer.classList.add('red');
        console.log('fizzbuzz')
    }
    else if (i % 3 == 0) {
        divContainer.append('fizz');
        divContainer.classList.add('green');
        console.log('fizz');
    }
    else if (i % 5 == 0) {
        divContainer.append('buzz');
        divContainer.classList.add('orange');
        console.log('buzz');
    }
    else{
        divContainer.append(i);
        divContainer.classList.add('blue');
        console.log(i);
    }

    
}

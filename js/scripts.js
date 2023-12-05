

const container = document.getElementById('elements');


for (let i = 1; i<= 100;i++) {
   const divContainer = document.createElement('div');
   divContainer.classList.add('div-interno');
    container.append(divContainer);
    

    if (i % 3 == 0 && i % 5 == 0) {
        divContainer.append('fizzbuzz');
        console.log('fizzbuzz')
    }
    else if (i % 3 == 0) {
        divContainer.append('fizz');
        console.log('fizz')
    }
    else if (i % 5 == 0) {
        divContainer.append('buzz');
        console.log('buzz')
    }
    else{
        divContainer.append(i);
        console.log(i)
    }

    
}

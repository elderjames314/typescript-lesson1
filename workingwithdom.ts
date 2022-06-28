let page: any = '1';

let pageNumber2  = page as string

const someElement = document.querySelector(".foo");

//console.log('someElement', someElement.value)

someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement
    console.log(target.value)
})






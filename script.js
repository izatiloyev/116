let inps = document.querySelectorAll('input')
let form = document.forms.login


let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/g,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
}


inps.forEach(inp => {
    inp.onkeyup = () => {
        if(patterns[inp.name].test(inp.value)) {
            inp.parentElement.classList.remove('error-field')
        } else {
            inp.parentElement.classList.add('error-field')
        }
    }
})



form.onsubmit = (event) => {
    event.preventDefault();
    
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
          
        
    })
    
    console.log(user);
}


function cadastrar(event){
    event.preventDefault()

    const form = document.getElementById('form');
    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data)
}
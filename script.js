function cadastrar(event){
    event.preventDefault()

    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const nationality = document.getElementById('nationality');
    const city = document.getElementById('city');

    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data)
    let node = document.createElement('tr');

    const result = document.getElementById('result');
    node.innerHTML = data.name + " " + data.phone + " " + data.nationality + " " + data.city
    result.appendChild(node)
    
    name.value=""
    phone.value=""
    nationality.value=""
    city.value=""
}
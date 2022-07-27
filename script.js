function cadastrar(event){
    event.preventDefault()

    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const blood = document.getElementById('blood');
    const cpf = document.getElementById('cpf');
    const cellphone = document.getElementById('cellphone');
    const email = document.getElementById('email');
    const social_networks = document.getElementById('social_networks');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const house_number = document.getElementById('house_number');
    const district = document.getElementById('district');
    const complement = document.getElementById('complement');
    const city = document.getElementById('city');
    const zip_code = document.getElementById('zip_code');
    const state = document.getElementById('state');
    const nationality = document.getElementById('nationality');


    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data)
    let node = document.createElement('tr');

    const result = document.getElementById('result');
    node.innerHTML = data.name + " " + data.phone + " " + data.nationality + " " + data.city
    result.appendChild(node)
    
    name.value=""
    age.value=""
    blood.value=""
    cpf.value=""
    cellphone.value=""
    email.value=""
    social_networks.value=""
    phone.value=""
    address.value=""
    house_number.value=""
    district.value=""
    complement.value=""
    city.value=""
    zip_code.value=""
    state.value=""
    nationality.value=""
    
}
document.querySelector('#search').addEventListener('submit', async (event) => {
    event.preventDefault();
    const cidadeNome = document.querySelector('#cidade_nome').value;
    if (!cidadeNome) {
        return mostrarAlerta('Você precisa digitar uma cidade ...');
    }
    const apiKey = '';




    //Por favor, insira sua chave de API na constante designada "apiKey". Você pode obter esta chave no seguinte endereço: https://home.openweathermap.org/api_keys. Será necessário efetuar login para acessá-la.
    //Boa sorte com a utilização desta aplicação deste site S2




    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidadeNome)}&appid=dd4108b1097a7ff130819cdfcfdfc5b9&units=metric&lang=pt_br`
    const results = await fetch(apiUrl);
    const json = await results.json();
    console.log(json)
     if (json.cod == 200){
         mostrarInfo({
             cidade: json.name,
             pais: json.sys.country,
             temp: json.main.temp,
             tempMax: json.main.temp_max,
             tempMin: json.main.temp_min,
             descrisao: json.weather[0].description,
             tempIcone: json.weather[0].icon,
             ventoVelocidade: json.wind.speed,
             umidade: json.main.humidity,
         })
        
     }
     else{
         mostrarAlerta(`Não foi possível localizar...`)
     }
console.log(json.tempIcone)
});
 function mostrarInfo(json){
     mostrarAlerta('');

     document.querySelector("#clima").classList.add('show');
     document.querySelector("#title").innerHTML = `${json.cidade}, ${json.pais}`;
     document.querySelector("#temp_valor").innerHTML = `${json.temp.toFixed(1).toString().replace('.', ',')} <sup>C°</sup>`;
     document.querySelector("#temp_descrisao").innerHTML = `${json.descrisao}`;
     document.querySelector("#temp_maximo").innerHTML = `${json.tempMax.toFixed(1).toString().replace('.', ',')} <sup>C°</sup>`;
     document.querySelector("#temp_minimo").innerHTML = `${json.tempMin.toFixed(1).toString().replace('.', ',')} <sup>C°</sup>`;
     document.querySelector("#umidade").innerHTML = `${json.umidade}%`;
     document.querySelector("#vento").innerHTML = `${json.ventoVelocidade.toFixed(1)}km/h`;


 }
function mostrarAlerta(msg){
    document.querySelector('#alerta').innerHTML = msg;
}
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
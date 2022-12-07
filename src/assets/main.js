const API = 'https://api.thecatapi.com/v1/breeds';
const options = {
    headers: {
    'x-api-key': "DEMO_API_KEY"}
};
const content = document.querySelector('.cards');
const list = document.querySelector('.elemenClidren');

async function fetchAPI(urlApi, option){
    const results = await fetch(urlApi, option);
    const data = await results.json();
    return data;
}
(async () => {
    try {
        const datos = await fetchAPI(API, options);
        let contentHtml = '';

        datos.forEach( e => {
            if (e.image) {
                contentHtml += `
                <div class="card">
                    <img src="${e.image.url}" alt="">
                    <h3>${e.name}</h3>
                    <hr>
                    <p>temperament: ${e.temperament}</p>
                    <hr>
                    <p>description: ${e.description}</p>
                </div>
                `; 
                
            }
            list.insertAdjacentHTML('beforeend',
            `<h3>${e.name}</h3>`);
        });
        content.innerHTML = contentHtml;
    } catch (error) {
        console.log('error: ', error);
    }
})();

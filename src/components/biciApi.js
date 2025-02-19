import { Bugfender } from '@bugfender/sdk';

export const datos = [];
const url = 'https://a24-dpl-nu1h.onrender.com/api/bicicletas';

const callApi = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            datos.push(data);
        })
        .catch(err => {
            Bugfender.error('Error:', err);

        })

    Bugfender.log('Datos:', datos);

}

export default callApi;
import axios from "axios";

const api_key = 'HqSyIdFPAyqa3T5Y4FUBs3k6UC5bAe33';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key
    }
});

export default giphyApi;

// giphyApi.get('/random')
//     .then(resp => {
//         console.log(resp);

//         const { data } = resp.data;
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     });
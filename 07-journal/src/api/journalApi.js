import axios from 'axios';

const journalApi = axios.create({
    baseURL: 'https://journal-vue-a5cbc-default-rtdb.europe-west1.firebasedatabase.app'
})

export default journalApi
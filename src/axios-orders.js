import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-112af.firebaseio.com/',
});

export default instance;
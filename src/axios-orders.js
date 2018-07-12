import axios from 'axios';

const instance = axios.create({
    baseURL:'https://sample-react-burger.firebaseio.com/'
});

export default instance;
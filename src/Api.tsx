import Axios from 'axios'

const token = ``

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = {
   key: "value"
};

const getMovieDetails: () => void = () => {
    Axios.get( 
        'https://api.themoviedb.org/3/movie/550',
        config
    ).then(res => console.log(res.data)).catch(console.error);
}

export { getMovieDetails };

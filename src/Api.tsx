import Axios from 'axios'

const token = `${process.env.REACT_APP_TOKEN}`


const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const getMovieDetails: () => void = () => {
    Axios.get( 
        'https://api.themoviedb.org/3/movie/now_playing',
        config
    ).then(res => console.log(res.data)).catch(console.error);
}

export { getMovieDetails };

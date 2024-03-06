
import './App.css';
import MovieList from './component/Movieslist';
import { useRef,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addmovie from './component/Addmovie'; 
import Filtre from './component/Filtre';

function App() {
  const [SearchRate,setSearchRate]= useState(0)
  const [titleSearch,setTitleSearch]=useState("")
  const [movies, setMovies] = useState([{
      title: "Hitman",
      description: "Agent 47, a hitman-for-hire, is trapped in a political conspiracy when he unknowingly kills his target's lookalike. However, he is determined to uncover the truth and get out of it alive.",
      rating: 9,
      posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAP9KMEgSVwxMjcN9CoPxKr0Gc30vqEsSvgJCe9Os4d9fyHCT"
    },
    {
      title: "The Lift",
      description: "A master thief is wooed by his ex-girlfriend and the FBI to pull off an impossible heist with his international crew on a 777 passenger flight from London to Zurich.",
      rating: 3,
      posterUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVISWRRnthAAYSh55ArjXu1XoS9PYPKinHREKhicSncQLF0Xck"
    }
  ]);
//console.log(titleSearch.current.value)
  return (
    <div className="App">
      <Addmovie setMovies={setMovies} movies={movies}/>
        <MovieList movies={movies.filter(movie=>movie.title.toLocaleLowerCase().trim().includes(titleSearch.toLocaleLowerCase().trim())&& movie.rating>=SearchRate)} />
        <Filtre SearchRate={SearchRate} setsearchRate={setSearchRate} title={setTitleSearch}/>
    </div>
  );
}

export default App;

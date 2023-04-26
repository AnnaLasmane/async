import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'flexboxgrid'


const App = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const [character, setCharacter] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://rickandmortyapi.com/api/character/${activeIndex}`)
    .then((res) => {
      setCharacter(res.data)
      setLoading(false)
    })
  }, [activeIndex])


  return (
    <div className="container">
      <div className="row">
      <div className="col-xs-12">
       {loading && <h1> Loading...</h1>}
       {!loading && character && (
        <div>
          <img src={character.image} alt="" height="100"/>
          <h3>
            Name: {character.name}
          </h3>
          <h5>
            Species: {character.species}
          </h5>
          <div>
            <button onClick={() => setActiveIndex(activeIndex -1)}
            disabled={activeIndex <= 1}
            >
            Previous
            </button>
            <button onClick={() => setActiveIndex(activeIndex +1)}>
              Next
            </button>
          </div>
        </div>
       )}
       
    </div>
    </div>
    </div>
    );
    }
  
export default App;

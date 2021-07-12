import { useState, useEffect } from 'react';
import Input from "./components/Input";
import Location from "./components/Location";
import Maps from "./components/Map";

function App() {
  //const GEO_LOCATION_KEY = 'at_hywNLV5Bha0BV38xvnvsaKCuzVLlU';
  //const GEO_LOCATION_URL = 'https://geo.ipify.org/api/v1?apiKey=';
  const [state, setstate] = useState('134.201.250.155');
  const [location, setlocation] = useState({
    loading: true,
    state: []
  });

  console.log(location);

  const handleChange = (e) => {
    setstate(e.target.value);
  };

  useEffect(() => {
    fetch('https://geo.ipify.org/api/v1?apiKey=at_hywNLV5Bha0BV38xvnvsaKCuzVLlU', {
      method: 'GET',
      headers: {}
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        return setlocation({
          loading: false,
          state: json
        });
      });
  }, [state]);

  return (
    <div className="App">
      <Input handleChange={handleChange} state={state} />
      <Location location={location} />
      <Maps />
    </div>
  );
}

export default App;

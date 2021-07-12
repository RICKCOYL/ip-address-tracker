import { useState, useEffect } from 'react';
import Input from "./components/Input";
import Location from "./components/Location";
import Maps from "./components/Map";

function App() {
  const API_KEY = '56cfc049a8cadc9d416670d53129392d';
  const [state, setstate] = useState('134.201.250.155');
  const [location, setlocation] = useState([]);

  const handleChange = (e) => {
    setstate(e.target.value);
  };

  useEffect(() => {
    fetch(`http://api.ipapi.com/${state}?access_key=${API_KEY}`, {
      method: 'GET',
      headers: {}
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        return setlocation(json);
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

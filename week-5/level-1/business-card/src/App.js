import BusinessCard from './components/BusinessCard';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [interests, setInterests] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setName('Lokeshwar');
    setDescription('A TA in the 100xDevs Cohort 2.0');
    const interests = [{
      name: 'Ionic'
    }, {
      name: 'Open Source'
    }, {
      name: 'App Dev'
    }];
    setInterests(interests);


    const links = [{
      name: 'Instagram',
      url: 'https://www.instagram.com/?hl=en'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/?lang=en-in'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/login'
    }];
    setLinks(links);

  }, [])

  return (
    <div className="App">
      <BusinessCard name={name} description={description} interests={interests} links={links} />
    </div>
  );
}

export default App;

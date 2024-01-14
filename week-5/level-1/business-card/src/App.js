import BusinessCard from './components/BusinessCard';
import './App.css';
import { useState } from 'react';
function App() {
  const [data, setData] = useState([{
    name: 'Lokeshwar',
    description: 'A TA in the 100xDevs Cohort 2.0',
    interests: ['Ionic, Open Source, App Dev'],
    links: [{
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
    }]
  }
  ]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission and add Data into setData
    const links = [{
      name: 'Instagram',
      url: e.target.instagram.value
    },
    {
      name: 'Twitter',
      url: e.target.twitter.value
    },
    {
      name: 'LinkedIn',
      url: e.target.facebook.value
    }]
    setData([...data, {
      name: e.target.name.value,
      description: e.target.description.value,
      interests: e.target.interests.value,
      links: links
    }
    ]);
    e.target.reset();
  }

  return (
    <div className="App">
      <div className='app-title'>Business Card</div>

      {/*User Input for new Card*/}
      <form onSubmit={handleFormSubmit}>
        <label>Enter your name:</label>
        <input type='text' name='name' placeholder='Enter your name'></input>
        <br></br> <br></br>
        <label>Enter about yourself:</label>
        <input type='text' name='description' placeholder='Enter about yourself'></input>
        <br></br> <br></br><br></br>
        <label>Enter your interests:</label>
        <input type='text' placeholder='Enter interests' name='interests'></input>
        <br></br> <br></br>
        <label>Instagram:</label>
        <input type='text' name='instagram' placeholder='Instagram profile URL'></input>
        <br></br> <br></br>
        <label>Twitter:</label>
        <input type='text' name='twitter' placeholder='Twitter profile URL'></input>
        <br></br> <br></br>
        <label>Facebook:</label>
        <input type='text' name='facebook' placeholder='Facebook profile URL'></input>
        <br></br> <br></br>
        <br></br> <br></br>
        <button type='submit'>Submit</button>
      </form>

      {/*Display Card */}
      <div className='cards'>
        {data.map(card => (
          <BusinessCard key={card.name} name={card.name} description={card.description}
            interests={card.interests} links={card.links} />
        ))}
      </div>
    </div>
  );
}

export default App;

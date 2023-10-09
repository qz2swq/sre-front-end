import React from 'react';
import './home.scss';
import Widget from '../../components/Widget';
import ControllPanel from '../../components/ControllPanel';
import Overview from '../../components/Overview';

const Home = () => {
  return (
    <div className='home'>
      <div className="homeContainer">
        <h1>Edifício Andromeda</h1>
        </div>
    <div className='widgets'>
      <Widget />
    </div>
    <div className='controll'>
      <ControllPanel />
    </div>
    <div className="overview">
    <Overview />
    </div>
    </div>

  )
}

export default Home
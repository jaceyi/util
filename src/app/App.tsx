import * as React from 'react';
import Nav from './Nav';
import PickTime from '../components/PickTime';

const utilList = [
    {
      name: 'PickTime',
      icon: '&#xe608;',
      activeIcon: '&#xe607;',
      component: PickTime
    }
  ];

function App() {


  return (
    <div>
      <Nav list={utilList} />
    </div>
  )
}

export default App;
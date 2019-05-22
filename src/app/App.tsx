import './App.scss';
import * as React from 'react';
import { Fragment } from 'react';
import Nav from './Nav';
import PickTime from '../components/PickTime/PickTime';

const utilList = [
  {
    name: 'Pick Time',
    icon: '&#xe608;',
    activeIcon: '&#xe607;',
    component: PickTime
  }
];

function App() {
  const [active, setActiive] = React.useState(utilList[0].name);

  const activeUtil = utilList.find(item => item.name === active);
  const ActiveComponent = activeUtil.component;

  return (
    <Fragment>
      <Nav
        list={utilList}
        activeName={active}
      />
      <div id="main">
        <ActiveComponent/>
      </div>
    </Fragment>
  );
}

export default App;
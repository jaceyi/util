import './App.scss';
import * as React from 'react';
import { Fragment } from 'react';
import Nav from './Nav';
import PickTime from '../components/PickTime/PickTime';
import Transform from '../components/Transform/Transform';

const utilList: Array<Nav.UtilItem> = [
  {
    name: 'Pick Time',
    icon: '&#xe608;',
    activeIcon: '&#xe607;',
    component: PickTime
  },
  {
    name: 'Transform',
    icon: '&#xe902;',
    activeIcon: '&#xe903;',
    component: Transform
  }
];

function App() {
  const [active, setActive] = React.useState(localStorage.getItem('navKey') || utilList[0].name);

  const activeUtil = utilList.find(item => item.name === active);
  const ActiveComponent = activeUtil.component;

  return (
    <Fragment>
      <Nav
        list={utilList}
        activeName={active}
        onChange={name => {
          localStorage.setItem('navKey', name);
          setActive(name);
        }}
      />
      <div id="main">
        <ActiveComponent/>
      </div>
    </Fragment>
  );
}

export default App;

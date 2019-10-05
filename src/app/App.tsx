import './App.scss';
import * as React from 'react';
import { Fragment } from 'react';
import Nav from './Nav';
import PickTime from '../components/PickTime/PickTime';
import Transform from '../components/Transform/Transform';
import Question from '../commons/Question';

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
  let ActiveComponent = null;

  if (activeUtil) {
    ActiveComponent = activeUtil.component;
  } else {
    const { name, component } = utilList[0];
    changeNav(name);
    ActiveComponent = component;
  }

  function changeNav(key) {
    localStorage.setItem('navKey', key);
    window.history.pushState({}, '', `/${key}`);
    setActive(key);
  }

  return (
    <Fragment>
      <Question
        className="background_tip"
        tip="迪士尼"/>
      <Nav
        list={utilList}
        activeName={active}
        onChange={changeNav}
      />
      <div id="main">
        <ActiveComponent/>
      </div>
    </Fragment>
  );
}

export default App;

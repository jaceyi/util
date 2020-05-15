import './App.scss';
import * as React from 'react';
import { Fragment } from 'react';
import Nav from './Nav';
import PickTime from '@/components/PickTime/PickTime';
import Question from '@/commons/Question';

const utilList: Nav.UtilList = [
  {
    name: 'Pick Time',
    icon: '&#xe608;',
    activeIcon: '&#xe607;',
    component: PickTime
  }
];

function App() {
  const [active, setActive] = React.useState(localStorage.getItem('navKey') || utilList[0].name);

  const activeUtil = utilList.find(item => item.name === active);
  let ActiveComponent;

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
        tip="上海迪士尼城堡"/>
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

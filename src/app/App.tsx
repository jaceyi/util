import './App.scss';
import * as React from 'react';
import { useCallback, useMemo } from 'react';
import Nav from './Nav';
import PickTime from '../components/PickTime';
import Question from '@/commons/Question';

const utilList: Nav.UtilList = [
  {
    name: 'Pick Time',
    icon: '&#xe608;',
    activeIcon: '&#xe607;',
    component: PickTime
  }
];

type TChangeNav = (key: string) => void;

function App() {
  const [active, setActive] = React.useState(
    localStorage.getItem('navKey') || utilList[0].name
  );

  const changeNav = useCallback<TChangeNav>((key) => {
    localStorage.setItem('navKey', key);
    setActive(key);
  }, []);

  const ActiveComponent = useMemo(() => {
    const activeUtil = utilList.find((item) => item.name === active);
    if (activeUtil) {
      return activeUtil.component;
    } else {
      const { name, component } = utilList[0];
      changeNav(name);
      return component;
    }
  }, [active]);

  return (
    <>
      <Question className="background_tip" tip="上海迪士尼城堡" />
      <Nav list={utilList} activeName={active} onChange={changeNav} />
      <div id="main">
        <ActiveComponent />
      </div>
    </>
  );
}

export default App;

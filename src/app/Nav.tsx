import * as React from 'react';

declare namespace Nav {
  type UtilItem = {
    name: string;
    icon: string;
    activeIcon: string;
    component: React.ComponentType
  }

  type UtilList = Array<UtilItem>;

  type Props = {
    list: UtilList;
    activeName: string;
    onChange: {
      (name: string): void
    }
  }
}

const Nav: React.FC<Nav.Props> = ({ list, activeName, onChange }: Nav.Props) => {
  React.useEffect(() => {
    document.title = `Util - ${activeName}`;
  }, [activeName]);

  return (
    <div id="nav">
      {
        list.map(item => {
          const isActive = activeName === item.name;
          return (
            <a
              onClick={() => onChange(item.name)}
              key={item.name}
              className={`item ${isActive ? 'active' : ''}`}
            >
              <i className="icon" dangerouslySetInnerHTML={{ __html: isActive ? item.activeIcon : item.icon }} />
            </a>
          );
        })
      }
      <a className="item" href="https://github.com/jaceyi/util">
        <i className="icon">&#xe64a;</i>
      </a>
    </div>
  );
};

export default Nav;

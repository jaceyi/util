import * as React from 'react';

declare namespace Nav {
  interface UtilItem {
    name: string;
    icon: string;
    activeIcon: string;
    component: React.ComponentType
  }

  interface Props {
    list: Array<UtilItem>;
    activeName: string;
    onChange: {
      (name: string): void
    }
  }
}

const Nav: React.FC<Nav.Props> = ({ list, activeName, onChange }) => {
  React.useEffect(() => {
    document.title = activeName;
  }, [activeName]);

	return (
		<div id="nav">
			{
				list.map(item => {
					const isActive = activeName === item.name;
					return (
						<div 
							onClick={() => onChange(item.name)}
							key={item.name}
						 	className={`item ${isActive ? 'active' : ''}`}
						>
							<i className="icon" dangerouslySetInnerHTML={{ __html: isActive ? item.activeIcon : item.icon }}/>
						</div>
					)
				})
			}
		</div>
	)
};

export default Nav;

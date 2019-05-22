import * as React from 'react';

interface utilItem {
	name: string;
	icon: string;
	activeIcon: string;
	component: React.ReactNode
}

interface Props {
	list: Array<utilItem>;
	activeName: string;
}

const Nav: React.FC<Props> = ({ list, activeName }) => {
  React.useEffect(() => {
    document.title = activeName;
  }, [activeName]);

	return (
		<div id="nav">
			{
				list.map(item => {
					const isActive = activeName === item.name;
					return (
						<div key={item.name} className={`item ${isActive ? 'active' : ''}`}>
							<i className="icon" dangerouslySetInnerHTML={{ __html: isActive ? item.activeIcon : item.icon }}/>
							{/*<div className="name">{item.name}</div>*/}
						</div>
					)
				})
			}
		</div>
	)
};

export default Nav;
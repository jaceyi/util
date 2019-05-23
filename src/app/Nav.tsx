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
	onChange: {
		(name: string): void
	}
}

const Nav: React.FC<Props> = ({ list, activeName, onChange }) => {
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
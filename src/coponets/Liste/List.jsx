// eslint-disable-next-line no-unused-vars
import React from 'react';
import './moduleList.scss'


// eslint-disable-next-line react/prop-types
const List = ({ items }) => {

	return (
		<ul className="list">
			{
				// eslint-disable-next-line react/prop-types
				items.map(item => (
					// eslint-disable-next-line react/jsx-key
					<li className={item.active ? 'active' : ' '}>
						<i>
							{item.icon? item.icon : <i className = {`badge badge--${item.color}`}></i>}
						</i>
						<span>
							{item.name}
                    </span>
					</li>
				))
			}

		</ul>
	);
}

export default List;
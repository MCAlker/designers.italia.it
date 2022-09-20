import * as React from "react"

const List = ({
	isMenu,       //if list is inside nav menu: true or false
	collapsable,  //true / false
	id,
	children

}) => {
	const styles = `${isMenu ? 'link-list-wrapper' : 'it-list-wrapper'}`
		+ `${collapsable ? ' collapse' : ''}`
	
	const ulStyles = `${isMenu ? 'link-list' : 'it-list'}`

	return(
		<div className={styles} id={id}>
			<ul className={ulStyles}>
				{children}
			</ul>
		</div>
	)
}

export default List
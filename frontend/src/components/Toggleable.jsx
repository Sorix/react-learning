import { useState } from "react"
import PropTypes from 'prop-types'

/**
 * A reusable component that can show/hide its children content
 * with a toggle button.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to be toggled
 * @param {string} props.buttonLabel - The text to display on the show button
 * @example
 * <Toggleable buttonLabel="Show form">
 *   <MyForm />
 * </Toggleable>
 */
const Toggleable = (props) => {
	const [visible, setVisible] = useState(true)

	const toggleVisibility = () => setVisible(!visible)

	if (visible) {
		return (
			<>
				{props.children}
				<button onClick={toggleVisibility}>Cancel</button>
			</>
		)
	} else {
		return <button onClick={toggleVisibility}>{props.buttonLabel}</button>
	}
}

export default Toggleable

Toggleable.propTypes = {
	buttonLabel: PropTypes.string.isRequired
}
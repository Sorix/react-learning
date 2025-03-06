const Notification = ({notification: {color, text}}) => {
	const style = {
		color: color,
		border: `1px solid ${color}`
	}

	return <div style={style}>{text}</div>
}

export default Notification

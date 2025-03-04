const Notification = ({text}) => {
	const style = {
		color: "green",
		border: "1px solid green"
	}

	return <div style={style}>{text}</div>
}

export default Notification
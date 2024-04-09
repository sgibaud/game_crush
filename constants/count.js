export default function count(state, setState) {
	let counter = state.width;
  
	const interval = setInterval(() => {
	  if (!state.status) {
		setState({ width: counter });
	  } else {
		counter = counter - state.score;
		setState({
		  width: counter,
		});
		if (counter <= 0) {
		  setState({
			width: 0,
			modalScore: true,
		  });
		  clearInterval(interval);
		}
	  }
	}, 3000);
  
	return () => clearInterval(interval);
  }
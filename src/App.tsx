import { useState } from "react";

function App() {
	const [name, setName] = useState("");

	const handleSubmit = (e: Event) => {
		e.preventDefault();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} />
				<button>Submit</button>
			</form>
			<GeneralInfo name={name} />
		</>
	);
}

const GeneralInfo = ({ name }: { name: string }) => {
	return <h1>Name: {name}</h1>;
};

export default App;

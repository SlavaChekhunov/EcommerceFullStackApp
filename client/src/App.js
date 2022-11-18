import Home from "./pages/Home";
import  Pay from "./pages/Pay";
import Success from "./pages/Success";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/pay" element={<Pay />} />
			<Route path="/success" element={<Success />} />
		</Routes>
	);
}

export default App;

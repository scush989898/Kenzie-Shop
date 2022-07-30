import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;

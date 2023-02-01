import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <header className="App-header" style={{ height: "2px;" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello React</h3>
      </header> */}
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;

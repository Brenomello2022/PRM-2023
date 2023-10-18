import { Route, Routes } from "react-router-dom";
import TopicPage from "./pages/topic";
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";

function App() {

  return (
    <div id="App">   

      <Routes>

        <Route path="/" element={ <TopicPage />} />
        <Route path="/signin" element={ <SignInPage />} />
        <Route path="/signup" element={ <SignUpPage />} />

      </Routes>

    </div>
  )
}

export default App;
import { Route, Routes } from "react-router-dom";
import TopicPage from "./pages/topic";
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import { useAuth } from "./hook/useAuth";

function App() {

  const { user } = useAuth();

  return (
    <div id="App">   

      { user ? (
        <Routes>
          <Route path="/" element={ <TopicPage />} />
          <Route path="/:username" element={ <TopicPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={ <SignInPage /> } />
          <Route path="/signup" element={ <SignUpPage /> } />
        </Routes>
      )}

    </div>
  )
}

export default App;
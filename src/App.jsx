import './App.css'
import RegistrationForm from "./beginner-projects/registration-form/RegistrationForm.jsx";
import QuizApp from "./beginner-projects/quiz-app/QuizApp.jsx";
import MyNavBar from "./beginner-projects/nav-bar/NavBar";
import useWindowDimensions from './utils/screen-dementions';
import Auth0Dev from './beginner-projects/auth0/Auth0';
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";


function App() {
  const {width, height} = useWindowDimensions();
  return (
    <Auth0Provider
            domain="dev-set564df.us.auth0.com"
            clientId="gDLl5t8YDfzeqoz1sAG9Lp8qleAvqT1a"
            redirectUri={window.location.origin}
        >
    <div>
      {/* <RegistrationForm/> */}
      {/*  <QuizApp/>*/}
      {/* <MyNavBar/> */}
      <Auth0Dev/>
        {/* <p>{width+" --- "+height}</p> */}
    </div>
    </Auth0Provider>
  )
}

export default App

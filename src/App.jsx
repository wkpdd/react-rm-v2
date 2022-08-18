import './App.css'
import RegistrationForm from "./beginner-projects/registration-form/RegistrationForm.jsx";
import QuizApp from "./beginner-projects/quiz-app/QuizApp.jsx";
import MyNavBar from "./beginner-projects/nav-bar/NavBar";
import useWindowDimensions from './utils/screen-dementions';
import Auth0Dev from './beginner-projects/auth0/Auth0';
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import TodoList from './beginner-projects/todo-list/Todo';
import {useEffect} from "react";
import Calculator from "./beginner-projects/calculator/Calculator";


function App() {
  const {width, height} = useWindowDimensions();
  useEffect(()=>{
    // window.localStorage.removeItem("data")
  },[])
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
      {/* <Auth0Dev/> */}
      {/*<TodoList/>*/}
      <Calculator/>
    </div>
    </Auth0Provider>
  )
}

export default App

import './App.css'
import RegistrationForm from "./projects/registration-form/RegistrationForm.jsx";
import QuizApp from "./projects/quiz-app/QuizApp.jsx";
import MyNavBar from "./projects/nav-bar/NavBar";
import useWindowDimensions from './utils/screen-dementions';
import Auth0Dev from './projects/auth0/Auth0';
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import TodoList from './projects/todo-list/Todo';
import {useEffect} from "react";
import Calculator from "./projects/calculator/Calculator";
import ContactsList from "./projects/SimpleContactList/SimpleContactList.jsx";
import RecipeApp from './projects/recipe-app/RecipeApp';


function App() {

  return (
    // <Auth0Provider
    //         domain="dev-set564df.us.auth0.com"
    //         clientId="gDLl5t8YDfzeqoz1sAG9Lp8qleAvqT1a"
    //         redirectUri={window.location.origin}
    //     >
      <div>
        {/*<RegistrationForm/>*/}
        {/* <QuizApp/>*/}
        {/*<MyNavBar/>*/}
        {/*<Auth0Dev/>*/}
        {/*<TodoList/>*/}
        {/*<Calculator/>*/}
        {/* <ContactsList/> */}
        <RecipeApp/>
      </div>
    // </Auth0Provider>
  )
}

export default App

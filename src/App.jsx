import './App.css'
import RegistrationForm from "./beginner-projects/registration-form/RegistrationForm.jsx";
import QuizApp from "./beginner-projects/quiz-app/QuizApp.jsx";
import MyNavBar from "./beginner-projects/nav-bar/NavBar";
import useWindowDimensions from './utils/screen-dementions';


function App() {
  const {width, height} = useWindowDimensions();
  return (
    <div>
      {/*<RegistrationForm/>*/}
      {/*  <QuizApp/>*/}
        <MyNavBar/>
        <p>{width+" --- "+height}</p>
    </div>
  )
}

export default App

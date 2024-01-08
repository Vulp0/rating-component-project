import './App.css';
import Star from './icon-star.svg';
import Illustration from './illustration-thank-you.svg';

function App() {
  let choice = 0;

  function changeColor(event) {
    //get id of the pressed button
    const pressedButton = event.target;

    //set all buttons to base color
    const allButtons = document.querySelectorAll(".NumbersContainer button");
    allButtons.forEach((element) => {
      element.style.backgroundColor = "#262F38";
      element.style.color = "#959EAC";
    });

    //set pressed button to orange, denoting it is currently selected
    pressedButton.style.backgroundColor = "#FB7413";
    pressedButton.style.color = "white";

    //assign value based on button pressed
    switch(pressedButton.id){
      case "one":
        choice = 1;
      break;
      case "two":
        choice = 2;
      break;
      case "three":
        choice = 3;
      break;
      case "four":
        choice = 4;
      break;
      case "five":
        choice = 5;
      break;

      default:
        //this is not supposed to happen
      break;
    }

    const submitButton = document.querySelector("#SubmitBtn");
    submitButton.style.backgroundColor = "#FB7413";
    submitButton.addEventListener("click", () => {
      submitRating(choice);
    });
  }

  function submitRating(choice) {
    const MenuContainer = document.querySelector(".MenuContainer");
    const ThankYouContainer = document.querySelector(".ThankYouContainer");

    MenuContainer.style.display = "none";
    ThankYouContainer.style.display = "flex";
    document.querySelector(".RatingGivenText span").textContent = choice;
  }

  return (
    <div className="App">
      <div className='Menu'>
        <div className='MenuContainer'>
          <div className='StarIcon'>
            <img src={Star} alt='star'></img>
          </div>
          <div className='TextBlock'>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          </div>
          <div className='NumbersContainer'>
            <button onClick={changeColor} id='one'>1</button>
            <button onClick={changeColor} id='two'>2</button>
            <button onClick={changeColor} id='three'>3</button>
            <button onClick={changeColor} id='four'>4</button>
            <button onClick={changeColor} id='five'>5</button>
          </div>
          <button id='SubmitBtn'>Submit</button>
        </div>

        <div className='ThankYouContainer'>
          <img src={Illustration} alt='' className='ThanksPic'></img>
          <div className='RatingGivenText'>You selected <span></span> out of 5</div>
          <div className='ThankYouTextBlock'>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

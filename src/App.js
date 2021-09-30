import './App.css';
import restaurant from './restaurant.jpeg';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props){
  return (
    <section>
      <p>We serve the most {props.adjective} food around</p>
      <img src={restaurant} alt="restaurant tables"/>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish)=> (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer (props) {
  return(
    <footer>
      <p>
        Copyright {props.year}
      </p>
    </footer>
  );
}

const dishes = [
  "Pizza",
  "Hamburger",
  "Sushi",
  "Tacos"
];

const dishObject = dishes.map((dish, i)=> ({id:i, title: dish}));


function SecretComponent () {
  return <h1>Secret infor for authorized users only</h1>
}

function RegularComponent() {
  return <h1>This is a common component</h1>
}


function App(props) {

  if(props.authorized){
    return (
      <div className="App">
        <Header name="Ricardo" />
        <Main adjective="amazing" dishes={dishObject} />
        <Footer year={new Date().getFullYear()}/>
        <SecretComponent/>
      </div>
    )
  }
  else{
    return (
      <div className="App">
        <Header name="Ricardo" />
        <Main adjective="amazing" dishes={dishObject} />
        <Footer year={new Date().getFullYear()}/>
        <RegularComponent/>
      </div>
    );
  }
}

export default App;

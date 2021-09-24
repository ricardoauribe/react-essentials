import './App.css';

function Header() {
  return (
    <header>
      <h1>Richard's Kitchen</h1>
    </header>
  );
}

function Main(){
  return (
    <section>
      <p>We serve the most delicious food around</p>
    </section>
  );
}

function Footer () {
  return(
    <footer>
      <p>
        It's True.
      </p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;

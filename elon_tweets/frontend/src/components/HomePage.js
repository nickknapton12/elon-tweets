import "../App.css";

export default function HomePage() {
  return (
    <div className="homePage" style={{backgroundImage: `url(/images/mars.jpg)`}}>
      <h1>Home to the worlds most reliable news... Elons Twitter.</h1>
      <h2>EXPLORE</h2>
      <div className="homeButtons">
        <div>
          <h2>Optimistic Telsa Dates</h2>
        </div>
        <div>
          <h2>Crypto Stonks</h2>
        </div>
        <div>
          <h2>Elon Memes</h2>
        </div>
      </div>
      <h3 style={{marginTop: `12%`}}>"Who controls the memes, controls the Universe"</h3>
    </div>
  );
}

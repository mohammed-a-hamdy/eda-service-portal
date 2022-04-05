import "bulma/css/bulma.min.css";

const App = () => {
  return (
    <div className="container">
      <div className="columns is-centered">
        <section className="hero is-outlined">
          <div className="hero-body">
            <p className="title">
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  alt="Logo"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </figure>
            </p>
            <p className="is-large">Hero subtitle</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;

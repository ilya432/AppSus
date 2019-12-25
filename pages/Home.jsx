export default class Home extends React.Component {
  render() {
    return (
      <section className="main-continer flex column">
        <section>
          {/* <h1>HOME</h1> */}
          <nav className="nav flex row">
            <div>
              <span className="logo">Logo</span>
            </div>

            <div className="nav-links">links list</div>
          </nav>
        </section>
      </section>
    );
  }
}

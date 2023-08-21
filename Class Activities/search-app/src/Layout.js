import "./App.css";

function Layout(props) {
  return (
    <div>
      <header>
        <h4>{props.title}</h4>
        <nav>
          <a href="#">{props.Nav1}</a>
          <a href="#">{props.Nav2}</a>
          <a href="#">{props.Nav3}</a>
        </nav>
      </header>
    </div>
  );
}

export default Layout;

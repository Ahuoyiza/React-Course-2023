import "./App.css";

function Layout(props) {
  return (
    <div>
      <header>
        <h4>{props.title}</h4>
        <nav>
          <a href="#">tokens</a>
          <a href="#">store</a>
          <a href="#">movies</a>
        </nav>
      </header>
    </div>
  );
}

export default Layout;

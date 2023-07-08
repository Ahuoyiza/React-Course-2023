import "./App.css";

const Layout = (props) => {
  return (
    <div>
      <header>
        <h4>{props.title}</h4>
        <nav>
          <a href="#">{props.nav1}</a>
          <a href="#">{props.nav2}</a>
          <a href="#">{props.nav3}</a>
        </nav>
      </header>
    </div>
  );
};

export default Layout;

import './App.css';

function Layouts(props) {
    return(
        <div>
        <header>
        <h4>{props.title}</h4>
        <nav>
        <a href='job'>{props.nav1}</a>
        <a href='jobs'>{props.nav2}</a>
        <a href='jobss'>{props.nav3}</a>
        </nav>
        </header>
        </div>
    )
};

export default Layouts;
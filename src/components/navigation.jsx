import '../styles/navigation.css';

function NavigationBar() {
  return (
    <div className="navbar">
        <div className='pagename'>
            <h1>Lustin Luola</h1>
        </div>
      <button className="nav-button">
        <h1>Home</h1>
      </button>
      <button className="nav-button">
        <h1>Portfolio</h1>
      </button>
      <button className="nav-button">
        <h1>Blog</h1>
      </button>
      <button className="nav-button">
        <h1>About me</h1>
      </button>
      <button className="nav-button">
        <h1>Copyright</h1>
      </button>
    </div>
  );
}

export default NavigationBar;

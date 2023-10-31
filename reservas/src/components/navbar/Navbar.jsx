import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <link to= "/">
        <span className="logo" style={{color: "white",textDecoration:"none"}} >RECERVAS ONLINE</span>
        </link>
        
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
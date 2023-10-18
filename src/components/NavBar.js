import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
  changeSearch = (event)=>
  {
    this.props.setSearch(event.target.value)
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-dark navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Mango News</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link></li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" id="search" type="search" placeholder="Search News" aria-label="Search" onChange={this.changeSearch}/>
                <Link className="btn btn-success" to="/search">Search</Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
export default NavBar

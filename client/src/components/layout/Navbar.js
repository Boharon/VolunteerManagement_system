import React ,{Component, component} from 'react'
export class Navbar extends Component{
    render(){
    return(
        <div>
        <nav>
       
    <div class="nav-wrapper">
    <div className="container">
         <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
        <button class="btn waves-effect waves-light" type="button" name="action">Login
        <i class="material-icons right">account_circle</i>
        </button>
      </ul>
          </div>
    
  </div>
  </nav>
        </div>
    )
    }
}
export default Navbar
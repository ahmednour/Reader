import "./Search.css";


const Search = () => {
  return (
    <div className="order-2 order-lg-3 d-flex align-items-center">
    <select className="m-2 border-0 bg-transparent" id="select-language">
      <option id="en" value="" defaultValue>En</option>
      <option id="fr" value="">عربي</option>
    </select>
    
    {/* <!-- search --> */}
    <form className="search-bar">
      <input id="search-query" name="s" type="search" placeholder="Type &amp; Hit Enter..."/>
    </form>
    
    <button className="navbar-toggler border-0 order-1" type="button" data-toggle="collapse" data-target="#navigation">
      <i className="ti-menu"></i>
    </button>
  </div>
  )
}

export default Search
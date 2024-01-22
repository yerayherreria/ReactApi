import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Layout = () => {
    const[input,setInput] = useState();
    const navigate = useNavigate();

    function handleChange(e){
        setInput(e.target.value);
    }

    function navigateSearch(){
        navigate(`/viewDetails/${input}`);
    }
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><Link to="/home">Home</Link></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><Link to="/listDisc">List Disc</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><Link to="/addDisc">Add Disc</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><Link to="/about">About</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><Link to="/contact">Contact</Link></a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
                    <button class="btn btn-outline-success" type="submit" onClick={navigateSearch}>Search</button>
                </form>
                </div>
            </div>
        </nav>
     
      <Outlet />
    </>
  );
};
export default Layout;
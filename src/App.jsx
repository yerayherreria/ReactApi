import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import Discs from "./Disc/ListDisc";
import Add from "./Disc/AddEdit";
import Layout from "./components/Layout";
import Disc from "./Disc/ViewDisc";
import ListArtist from "./Artist/ListArtist";
import DetailsArtist from "./Artist/ViewArtist";
import AddEditArtist from "./Artist/AddEditArtist";
import ListUsers from "./User/ListUser";
import RegisterEditUser from "./User/RegisterEdit";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/home" replace/>} />
              <Route path="home" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="listDisc" element={<Discs />}></Route>
              <Route path="viewDetails/:id" element={<Disc />}></Route>
              <Route path="addDisc" element={<Add />}></Route>
              <Route path="addDisc/:id" element={<Add />}></Route>
              <Route path="listArtist" element={<ListArtist />}></Route>
              <Route path="detailsArtist" element={<DetailsArtist />}></Route>
              <Route path="addArtist" element={<AddEditArtist />}></Route>
              <Route path="editArtist/:id" element={<AddEditArtist />}></Route>
              <Route path="listUsers" element={<ListUsers />}></Route>
              <Route path="addUser" element={<RegisterEditUser />}></Route>
              <Route path="editUser/:id" element={<RegisterEditUser />}></Route>
              <Route path="*" element={ <h1> Error 404</h1>}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
      {/* <Disc />
    <Discs />
    <Add id="6564598af353f12c24ad022b"/> */}
    </>
  )
}
export default Router

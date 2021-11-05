import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Navbar />
            { children}
            <footer />
        </div>
     );
}
 
export default Layout;
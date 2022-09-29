import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const PageLayout = ({ children }) => {
    return (
        <div className="row">
            <div className="col-2 pe-0">
                <Sidebar />
            </div>
            <div className="col-10 px-0">
                <Navbar />
                <div className="p-4">
                    <div className="row">
                        <div className="col-10">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageLayout;
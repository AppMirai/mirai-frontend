import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

const PageLayout = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <div className='grid grid-cols-9'>
                <div className='col-span-1'>
                    <Sidebar />
                </div>
                <div className='col-span-8'>
                    <div className="p-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageLayout;
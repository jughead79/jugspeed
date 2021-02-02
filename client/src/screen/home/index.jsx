import './style.css'

import Search from '../../components/home/search'
import Sidebar from '../../components/home/sidebar'

const Home = () => {
    return(
        <div className='home'>
            <div className='search-wrapper'><Search/></div>
            <div className='sidebar-wrapper'><Sidebar/></div>
            <div className='content-wrapper'>content commponent</div>
        </div>
    )
}

export default Home
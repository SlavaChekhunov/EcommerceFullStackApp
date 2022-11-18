import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Data from "../DataFake"

const Home = () => {
  return (
    <div>
      <Announcement />
        <Navbar />
        <Slider />
        <Data />
    </div>
  )
}

export default Home


import adv1 from '../assets/crosal1.jpg'
import adv2 from '../assets/crosal2.jpg'

function Advertisment() {
  return (
    <div className="hidden md:flex flex-col justify-center m-4  ">
    <img className="w-auto" src={adv1} />
    <img className="w-auto h-24 self-center mt-8" src={adv2} />
</div>
  )
}

export default Advertisment
import {TbBrandMeta} from "react-icons/tb"
import {IoLogoInstagram} from "react-icons/io5"
import {RiTwitterXLine} from "react-icons/ri"

const TopBar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white">
        <div className="container mx-auto">
            <div className="flex space-x-6 py-2">
                <a href="#" className="hover:text-gray-300">
                    <TbBrandMeta className="h-5 w-5"></TbBrandMeta>
                </a>
                <a href="#" className="hover:text-gray-300">
                    <IoLogoInstagram className="h-5 w-5"></IoLogoInstagram>
                </a>
                <a href="#" className="hover:text-gray-300">
                    <RiTwitterXLine className="h-5 w-5"></RiTwitterXLine>
                </a>
            </div>
        </div>
    </div>
  )
}

export default TopBar
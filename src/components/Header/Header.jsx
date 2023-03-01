import LogoImage from "@assets/images/Logo.png"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const Header = () => {

    return (
        <>
            <header className="shadow sticky top-0 z-10 bg-white">
                <div className="2xl:mx-14 h-20 py-3 flex items-center justify-between">
                    <Link className="h-full" to='/'>
                        <img
                            className="block h-full w-auto overflow-hidden"
                            src={LogoImage}
                            alt='Logo'
                        />
                    </Link>

                    <div className="flex items-center space-x-4">
                        <ul className="flex space-x-4">
                            <li className="list-none">
                                <Link className="font-medium text-dark-blue hover:text-red-600 transition-all duration-300" to='/'>Trang Chủ</Link>
                            </li>
                            <li className="list-none">
                                <Link className="font-medium text-dark-blue hover:text-red-600 transition-all duration-300" to='/introduction'>Giới Thiệu</Link>
                            </li>
                            <li className="list-none group relative">
                                <Link to='/japanese-study-abroad' className="flex space-x-1 cursor-pointer items-center">
                                    <span className="font-medium text-dark-blue  group-hover:text-red-600 transition-all duration-300">Du Học Nhật Bản</span>
                                    <span className="text-dark-blue  group-hover:text-red-600 transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </Link>
                                <div className="hidden group-hover:block absolute right-0 top-full">
                                    <ul className="mt-3 space-y-0.5 bg-white shadow-lg border rounded w-72">
                                        <li className="list-none h-fit">
                                            <HashLink
                                                smooth={true}
                                                to='/japanese-study-abroad#overall'
                                                className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                            >
                                                Tổng Quan về Du Học Nhật Bản
                                            </HashLink>
                                        </li>
                                        <li className="list-none h-fit">
                                            <HashLink
                                                smooth={true}
                                                to='/japanese-study-abroad#price'
                                                className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                            >
                                                Chi Phí Du Học Nhật Bản
                                            </HashLink>
                                        </li>
                                        <li className="list-none h-fit">
                                            <HashLink
                                                smooth={true}
                                                to='/japanese-study-abroad#procedure'
                                                className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                            >
                                                Thủ Tục và Hồ Sơ Du Học Nhật Bản
                                            </HashLink>
                                        </li>
                                        <li className="list-none h-fit">
                                            <HashLink
                                                smooth={true}
                                                to='/japanese-study-abroad'
                                                className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                            >
                                                Câu Hỏi Thường Gặp
                                            </HashLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="list-none group relative">
                                <Link to='japanese-labor-export' className="flex space-x-1 cursor-pointer items-center">
                                    <span className="font-medium text-dark-blue  group-hover:text-red-600 transition-all duration-300">Xuất Khẩu Lao Động Nhật Bản</span>
                                    <span className="text-dark-blue  group-hover:text-red-600 transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </Link>
                                <div className="hidden group-hover:block absolute right-0 top-full">
                                    <ul className="mt-3 space-y-0.5 bg-white shadow-lg border rounded w-72">
                                        <li className="list-none h-fit">
                                            <HashLink
                                                smooth={true}
                                                to='/japanese-labor-export#overall'
                                                className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                            >
                                                Tổng Quan về XKLĐ Nhật Bản
                                            </HashLink>
                                        </li>
                                        <li className="list-none h-fit">
                                            <HashLink
                                                smooth={true}
                                                to='/japanese-labor-export#price'
                                                className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                            >
                                                Chi Phí XKLĐ Nhật Bản
                                            </HashLink>
                                        </li>
                                        <li className="list-none h-fit">
                                            <HashLink
                                                smooth={true}

                                                to='/japanese-labor-export#procedure'
                                                className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                            >
                                                Thủ Tục và Hồ Sơ XKLĐ Nhật Bản
                                            </HashLink>
                                        </li>
                                        <li className="list-none h-fit">
                                            <HashLink
                                                smooth={true}
                                                to='/japanese-labor-export'
                                                className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                            >
                                                Câu Hỏi Thường Gặp
                                            </HashLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <button className="px-3 py-2 capitalize rounded bg-red-600 font-medium text-white text-sm">Tư Vấn Ngay</button>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header
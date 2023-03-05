import procedureBanner from "@assets/images/procedure/procedure.svg"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Redirect = () => {
    return (
        <>
            <div className="max-w-7xl px-5 mx-auto space-y-4">
                <h2 className="text-center text-2xl font-medium text-catalina-blue">Đăng Ký Hồ Sơ</h2>
                <p className="text-center">Vui lòng đăng nhập để sử dụng tính năng.</p>

                <div className="flex justify-center space-x-8">
                    <Link className="bg-indigo-900 hover:bg-catalina-blue transition-all duration-300 px-4 py-2 rounded text-white font-medium" to='/register' >Đăng Ký</Link>
                    <Link className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-4 py-2 rounded text-white font-medium" to='/login' >Đăng Nhập</Link>
                </div>
            </div>
            <div className="w-full mt-10">
                <img
                    className="block max-w-lg mx-auto object-cover"
                    src={procedureBanner}
                />
            </div>
        </>
    )
}

const ProcedureManager = () => {
    return (
        <div className="max-w-7xl px-5 mx-auto">
            <div className="flex justify-between">

                <h2 className="text-2xl font-medium text-catalina-blue">Trạng Thái Hồ Sơ Của Bạn</h2>
                <button
                    className="bg-indigo-900 hover:bg-catalina-blue transition-all duration-300 px-5 py-1.5 rounded text-white font-medium"
                >
                    Đăng Ký
                </button>
            </div>

            <table className="w-full mt-5 border-gray-200 border">
                <thead>
                    <tr className="text-sm font-medium text-gray-700 border-gray-200">
                        <th className="w-28 px-4 border text-left">Mã hồ sơ</th>
                        <th className="py-2 px-4 border text-left">Số điện thoại</th>
                        <th className="py-2 px-4 border text-left">Loại tư vấn</th>
                        <th className="py-2 px-4 border text-left">Yêu cầu tư vấn</th>
                        <th className="py-2 px-4 border text-left">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-sm text-gray-700 border-gray-200">
                        <td className="w-28 px-4 border">#4567827827</td>
                        <td className="py-4 px-4 border">0335840115</td>
                        <td className="py-4 px-4 border">Loại tư vấn</td>
                        <td className="py-4 px-4 border">Yêu cầu tư vấn</td>
                        <td className="py-4 px-4 border">Trạng thái</td>
                    </tr>
                    <tr className="text-sm text-gray-700 border-gray-200">
                        <td className="w-28 px-4 border">#4567827827</td>
                        <td className="py-4 px-4 border">0335840115</td>
                        <td className="py-4 px-4 border">Loại tư vấn</td>
                        <td className="py-4 px-4 border">Yêu cầu tư vấn</td>
                        <td className="py-4 px-4 border">Trạng thái</td>
                    </tr>
                </tbody>

            </table>

            <div className="w-full mt-10">
                <img
                    className="block max-w-lg mx-auto object-cover"
                    src={procedureBanner}
                />
            </div>

        </div>
    )
}

const Procedure = () => {
    const account = useSelector(state => state.auth.account)
    const isLogin = Object.keys(account).length > 0

    return (
        <div className="pt-10">
            {
                isLogin ? <ProcedureManager /> : <Redirect />
            }
        </div>
    )
}

export default Procedure
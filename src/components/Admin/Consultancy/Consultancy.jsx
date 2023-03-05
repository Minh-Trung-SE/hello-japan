
const Consultancy = () => {
    return (
        <div className="mx-auto max-w-7xl px-4">

            <table className="w-full mt-20 border-gray-200 border">
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
        </div >
    )
}

export default Consultancy
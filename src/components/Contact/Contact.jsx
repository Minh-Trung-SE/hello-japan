
const Contact = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl px-5 mx-auto grid grid-cols-2 gap-5">
                <img
                    className="select-none"
                    alt="contact"
                    src='https://yoko.edu.vn/wp-content/uploads/2021/11/dang-ky-tu-van.png'
                />
                <div className="space-y-10 flex flex-col items-center justify-center">
                    <h2 className="text-center text-dark-blue font-medium text-2xl">ĐĂNG KÝ NHẬN TƯ VẤN</h2>
                    <form className="w-full space-y-6">
                        <input
                            className="outline-none border-dark-blue border w-8/12 mx-auto block rounded-lg px-4 py-1.5"
                            placeholder="Họ và tên:"
                        />
                        <input
                            className="outline-none border-dark-blue border w-8/12 mx-auto block rounded-lg px-4 py-1.5"
                            placeholder="Email của bạn:"
                        />
                        <input
                            className="outline-none border-dark-blue border w-8/12 mx-auto block rounded-lg px-4 py-1.5"
                            placeholder="Số điện thoại:"
                        />
                        <textarea
                            rows={5}
                            className="outline-none border-dark-blue border w-8/12 mx-auto block rounded-lg px-4 py-1.5"
                            placeholder="Yêu cầu tư vấn:"
                        />

                        <button className="mx-auto flex items-center space-x-2 bg-dark-blue rounded-lg px-4 py-1.5 text-white">
                            <span>Đăng Ký Ngay</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>

                        </button>



                    </form>


                </div>
            </div>
        </div>
    )
}

export default Contact
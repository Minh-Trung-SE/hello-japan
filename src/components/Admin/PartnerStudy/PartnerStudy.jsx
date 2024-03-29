import { addPartnerStudy, deletePartnerStudy } from "@/services/admin"
import { getAllPartnerStudy } from "@/services/public"
import rules from "@/validation/rule"
import { useFormik } from "formik"
import { useCallback, useEffect, useState } from "react"
import * as Yup from 'yup'


const studyPartner = Yup.object().shape(
    {
        name: Yup.string().matches(rules.name, 'Họ và tên không hợp lệ.').required('Họ và tên là bắt buộc.'),
        address: Yup.string().matches(rules.require, "Địa chỉ không hợp lệ.").required("Địa chỉ là bắt buộc."),
        phone: Yup.string().matches(rules.phone, "Phone không hợp lệ.").required("Phone là bắt buộc.")
    }
)

const AddPartnerStudy = ({ toggle, refetch }) => {
    const formik = useFormik(
        {
            validateOnBlur: true,
            validateOnChange: true,
            validateOnMount: true,
            validationSchema: studyPartner,
            initialValues: {
                name: '',
                address: '',
                phone: '',
                logo: ''
            },
            onSubmit: async (values) => {
                try {
                    await addPartnerStudy(values)
                    formik.resetForm()
                    refetch()
                } catch {
                    console.log("Error")
                }
            }
        }
    )

    const disableSubmit = !formik.isValid || formik.isSubmitting
    const { name, address, phone, logo } = formik.values
    const { name: nameError, address: addressError, phone: phoneError, } = formik.errors
    const { name: nameTouched, address: addressTouched, phone: phoneTouched, } = formik.touched
    const { handleBlur, handleChange, handleSubmit } = formik

    return (
        <div
            className="w-screen h-screen fixed top-0 left-0 z-30 bg-indigo-900/30"
        >
            <div
                className="max-w-7xl mx-auto flex h-full w-full items-center justify-center"
            >
                <div className="bg-white p-5 rounded w-8/12 space-y-10">

                    <div className="flex justify-between">
                        <h2 className="text-xl font-medium text-catalina-blue">Thêm Liên Kết Du Học</h2>
                        <button
                            onClick={toggle}
                            className="h-6 aspect-square hover:p-1 hover:bg-red-600 hover:text-white rounded-full transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="w-full space-y-6"
                    >
                        <div className="flex items-center space-x-4">
                            <label className="w-28">Tên Trường</label>
                            <div className="grow">
                                <input
                                    className={`outline-none border w-full rounded-lg px-4 py-1.5 duration-300 transition-all focus:border-dark-blue ${nameError && nameTouched ? 'border-red-400' : 'border'}`}
                                    name='name'
                                    value={name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Trường Đại Học Tokyo"
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <label className="w-28">Logo Trường</label>
                            <div className="grow">
                                <input
                                    className={`outline-none border w-full rounded-lg px-4 py-1.5 duration-300 transition-all focus:border-dark-blue ${nameError && nameTouched ? 'border-red-400' : 'border'}`}
                                    name='logo'
                                    value={logo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="www.tokyo.com"
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <label className="w-28">Địa Chỉ</label>
                            <div className="grow">
                                <input
                                    className={`outline-none border w-full rounded-lg px-4 py-1.5 duration-300 transition-all focus:border-dark-blue ${addressError && addressTouched ? 'border-red-400' : 'border'}`}
                                    name='address'
                                    value={address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Tokyo 116-0013, Japan"
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <label className="w-28">Số Điện Thoại</label>
                            <div className="grow">
                                <input
                                    className={`outline-none border w-full rounded-lg px-4 py-1.5 duration-300 transition-all focus:border-dark-blue ${phoneError && phoneTouched ? 'border-red-400' : 'border'}`}
                                    name='phone'
                                    value={phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="81 333 444 555"
                                />
                            </div>
                        </div>

                        <button
                            className="mx-auto flex items-center space-x-2 bg-red-500 rounded-lg px-4 py-1.5 text-white disabled:opacity-50 transition-all duration-300"
                            type='submit'
                            disabled={disableSubmit}
                        >
                            <span>Liên Kết</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}


const PartnerStudy = () => {
    const [displayAddPartner, setDisplayStudyAddPartner] = useState(false)
    const [partners, setPartners] = useState([])


    const fetchPartners = useCallback(async () => {
        const partners = await getAllPartnerStudy()
        setPartners(partners)
    }, [])


    const deletePartner = useCallback(async (partner) => {
        await deletePartnerStudy(partner)
        fetchPartners()
    }, [])


    useEffect(() => {
        fetchPartners()
    }, [])

    const toggleDisplayAddPartner = useCallback(() => {
        setDisplayStudyAddPartner(toggle => !toggle)
    }, [])

    return (
        <div className="mx-auto max-w-7xl px-4 pt-20 space-y-10">

            <div className="flex justify-between">
                <h2 className="text-2xl font-medium text-catalina-blue">Liên Kết Du Học</h2>

                <button
                    className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-5 py-1.5 rounded text-white font-medium"
                    onClick={toggleDisplayAddPartner}
                >
                    Thêm Đối Tác Liên Kết
                </button>
            </div>

            <table className="w-full border rounded border-collapse border-gray-200">
                <thead>
                    <tr className="border text-gray-700 border-gray-200">
                        <td className="py-2 px-4 font-medium">Trường</td>
                        <td className="py-2 px-4 font-medium">Địa Chỉ</td>
                        <td className="py-2 px-4 font-medium">Ngày Liên Kết</td>
                        <td className="py-2 px-4 font-medium">Rating</td>
                        <td className="py-2 px-4 font-medium">Hành Động</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        partners.map(
                            (partner) => (
                                <tr key={partner?.id} className="hover:bg-gray-100 transition-colors border-b last:border-b-0">
                                    <td className="px-4">
                                        <div className="flex space-x-1">
                                            <img
                                                alt="Hello Japan"
                                                className="w-10 h-10 aspect-square"
                                                src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/324870190_904379383948031_7713069160720974885_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iv-AD0qUWsYAX_-vuWc&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfA38uLrzpzo7coS8Ko0YDlr3dwRa-_NG4fm4_8SwxDkjA&oe=640CE8E1"
                                            />
                                            <p className="self-center">{partner?.name}</p>
                                        </div>
                                    </td>
                                    <td className="py-2 px-4">{partner?.address}</td>
                                    <td className="py-2 px-4">{partner?.createdAt}</td>
                                    <td className="py-2 px-4">4.5/5</td>
                                    <td className="py-2 px-4">
                                        <div className="flex space-x-2">
                                            <button className="text-sm text-catalina-blue">
                                                Sửa
                                            </button>
                                            <button
                                                className="text-sm text-red-500"
                                                onClick={() => deletePartner(partner)}
                                            >
                                                Huỷ Liên Kết
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>

            {displayAddPartner ? <AddPartnerStudy refetch={fetchPartners} toggle={toggleDisplayAddPartner} /> : null}
        </div>
    )
}

export default PartnerStudy
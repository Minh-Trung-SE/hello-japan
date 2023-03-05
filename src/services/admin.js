import instance from '@middleware/request'

const getAllConsultancy = async () => {
    const { data } = await instance.get('/consultancy')
    return data
}

const updateConsultancy = async (payload) => {
    const { data } = await instance.put(
        '/consultancy',
        payload
    )
    return data
}

export {
    getAllConsultancy,
    updateConsultancy
}


import axios from "axios";

const uploadImage = async(file) => {
    if (!file) return

    try {

        const form_data = new FormData()
        form_data.append('upload_preset', 'gijnt29w')
        form_data.append('file', file)

        const url = 'https://api.cloudinary.com/v1_1/dawy6yyar/image/upload'

        const { data } = await axios.post(url, form_data)

        console.log(data);

        return data.secure_url

    } catch (error) {
        console.error('Error al cargar la imagen')
        console.log(error)
        return null
    }
}

export default uploadImage
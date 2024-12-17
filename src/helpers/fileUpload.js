
export const fileUpload = async (file) => {

    if(!file) throw new Error('No se ha seleccionado un archivo');

    const cloudUrl='https://api.cloudinary.com/v1_1/dchw3hzqn/image/upload'

    const formData = new FormData();

    formData.append('upload_preset','react-journal');
    formData.append('file',file);

    try {
        const res = await fetch(cloudUrl,{
            method:'POST',
            body:formData
        });
   
        if(!res.ok) throw new Error('Error al subir la imagen');

        const cloudRes = await res.json();
      

        return cloudRes.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

export const fileDelete = async(publicId) => {

    //! Este es un helper que cree basado en el fileUpload para eliminar archivos de cloudinary
    //! primero pense eliminar los archivos de manera individual, con el url de abajo, pero hay que hacerlo usando el delete resources
    if (!publicId) throw new Error('No tenemos ningun archivo para borrar');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/demmrt9si/image/destroy';

    

    const formData = new FormData();
    formData.append('public_id', publicId);
    formData.append('api_key','955362671145488');
    formData.append('signature','react-journal');
    formData.append('timestamp', Date.now());

    try{
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        
        if (!resp.ok) throw new Error('No se pudo borrar la imagen');

        const cloudResp = await resp.json();
        console.log(cloudResp);
        return cloudResp.secure_url;

    }catch(error){
        console.log(error);
        throw new Error(error.message);
    }
}

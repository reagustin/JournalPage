import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers";

cloudinary.config({
    cloud_name: 'demmrt9si',
    api_key: '955362671145488',
    api_secret: 'zBA9xpTFk1oZjif0AvlTS7Dr-uM',
    secure: true
})


describe('Pruebas en el fileUpload', () => { 
    
    test('debe de subir el archivo correctamente a clourdinary', async() => { 

        //necesitamos una imagen para probar        
        const imageUrl = 'https://www.pandaancha.mx/plds/articulos/4bf04095762666e2e6b288e55796834e585710389.jpg';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        // console.log(url);

        const segments = url.split('/');
        
        const imageId = segments[segments.length - 1].replace('.jpg', '');
        // console.log({imageId});
        const cloudResp = await cloudinary.api.delete_resources( 'journal/' + [imageId], {
            resource_type: 'image'
        });
        // console.log(cloudResp);

    })

    test('debe de retornar null', async() => { 
        
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);
        expect( url).toBe(null);

    })


})
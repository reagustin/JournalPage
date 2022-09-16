const { fileUpload } = require("../../src/helpers")


describe('Pruebas en el fileUpload', () => { 
    
    test('debe de subir el archivo correctamente a clourdinary', async() => { 

        //necesitamos una imagen para probar        
        const imageUrl = 'https://www.pandaancha.mx/plds/articulos/4bf04095762666e2e6b288e55796834e585710389.jpg';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');
    })



})
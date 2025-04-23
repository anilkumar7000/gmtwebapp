import {photosURL} from './endpoints.js';

 // Save photos to session storage
function savePhotos (photos) {
    sessionStorage.setItem('photos', JSON.stringify(photos));
}

// Get saved photo from session storage
function getSavedPhotos () {
    return JSON.parse(sessionStorage.getItem('photos'));
}


 // Fetch photos from the api
    async function getPhotos(){

        // Check for saved data
        let saved = getSavedPhotos();
        if (saved) {
            return saved;
        }

        // Otherwise, fetch fresh data from the api 
        try {
            let response = await fetch(photosURL);
                console.log(response);
                if(!response.ok) throw response;
                let photos = await response.json();
                    savePhotos(photos);
                    return photos;                  
                } catch (error) {
                    console.warn(error);
                    return [];
                }
            }


    export {getPhotos};
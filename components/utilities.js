// Get the photo id from the URL
	function getPhotoID () {
		return new URL(window.location.href).searchParams.get('id');
	}

// Get a photo by its ID
	function getPhotoByID (photos, id) {
		return photos.find(function (photo) {
			return photo.id === id;
		});
	}

export {getPhotoID, getPhotoByID};
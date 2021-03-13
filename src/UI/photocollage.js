import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
	width: '600px',
	height: ['250px', '170px'],
	layout: [1, 4],
	photos: [
	  { src: 'url/image-1.jpg' },
	  { src: 'url/image-2.jpg' },
	  { src: 'url/image-3.jpg' },
	  { src: 'url/image-4.jpg' },
	  { src: 'url/image-5.jpg' },
	  { src: 'url/image-6.jpg' },
	],
	showNumOfRemainingPhotos: true
  };
  
  function CollageApp() {
		return (
		<ReactPhotoCollage {...setting} />
		);
	}

export default CollageApp
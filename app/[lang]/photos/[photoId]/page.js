import PhotoDetails from "@/componets/PhotoDetails";

const PhotoDetailsPage = async({params: {photoId, lang}}) => {
  
  
  return (
    <div>SinglePhoto
        <PhotoDetails id={photoId} lang={lang} />
    </div>
  )
}

export default PhotoDetailsPage



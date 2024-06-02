import FullPageImageView from "~/components/full-image-page";

export const PhotoPage = ({ params: {id: photoId} } : {params: {id: string}}) => {
    const idAsNumber = Number(photoId);
    if (isNaN(idAsNumber)) {
        throw new Error("Invalid photo id");
    }
    return <FullPageImageView id={idAsNumber} />
}

export default PhotoPage
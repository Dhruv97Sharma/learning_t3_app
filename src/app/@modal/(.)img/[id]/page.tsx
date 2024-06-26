import FullPageImageView from "~/components/full-image-page";
import { Modal } from "./modal";

export const PhotoModal = ({ params: {id: photoId} } : {params: {id: string}}) => {
    const idAsNumber = Number(photoId);
    if (isNaN(idAsNumber)) {
        throw new Error("Invalid photo id");
    }
    return <Modal><FullPageImageView id={idAsNumber} /></Modal>
}

export default PhotoModal
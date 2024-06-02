import { getImage } from "~/server/queries";


export const FullPageImageView = async ( props: {id: number}) => {
    const image = await getImage(props.id);
    return <img src={image.url} alt={image.name} className="w-96" />
}

export default FullPageImageView
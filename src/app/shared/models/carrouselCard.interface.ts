export interface CarrouselCard {
    image: string,
    title: string,
}

export interface CarrouselCardPayload {
    data: CarrouselCardPayloadData[],
}

export interface CarrouselCardPayloadData {
    attributes: CarrouselCardPayloadAttributes,
    id: number,
}

export interface CarrouselCardPayloadAttributes {
    createdAt: string,
    image: CarrouselCardImage,
    publichedAt: string,
    title: string,
    updatedAt: string,

}

export interface CarrouselCardImage {
    data: ImageData,
}
export interface ImageData {
    attributes: ImageDataAttributes,
    id: number,
}

export interface ImageDataAttributes {
    url: string
}
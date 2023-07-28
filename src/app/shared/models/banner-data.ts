export interface BannerData {
    image: string,
    heading: string,
    cta: string,
}

export interface BannerPayload {
    data: BannerPayloadData[],
}

export interface BannerPayloadData {
    attributes: BannerPayloadAttributes,
    id: number,
}

export interface BannerPayloadAttributes {
    createdAt: string,
    image: BannerImage,
    publichedAt: string,
    heading: string,
    cta:string,
    updatedAt: string,

}

export interface BannerImage {
    data: ImageData,
}
export interface ImageData {
    attributes: ImageDataAttributes,
    id: number,
}

export interface ImageDataAttributes {
    url: string
}
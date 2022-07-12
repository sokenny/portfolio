export type ProjectType = {
    name: string,
    skills: string[],
    description: string,
    headerAsset: string[],
}

export type TextsType = {
    title: string,
    description: string
}

export type AssetAndTextType = {
    asset: {
        src: string,
        width: number,
        height: number
    },
    text: {
        title: string,
        description: string
    }
}

export type IconType = {
    title: string,
    description: string,
    src: string
}
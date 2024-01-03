import { IBlogContents } from "./blogContentsInterface";

export interface IBlogElements {
    name: string;
    greyText: string;
    image: string;
    lede: string;
    contents: IBlogContents[];
}
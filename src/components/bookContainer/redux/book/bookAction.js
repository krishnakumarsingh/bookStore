import { BUY_BOOK } from "./bookType";

export const buyBook = (value=1) => {
    return {
        type: BUY_BOOK,
        value
    }
}
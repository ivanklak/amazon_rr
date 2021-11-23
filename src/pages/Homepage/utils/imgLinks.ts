import Electronics from "../../../app/images/US._SY232_CB642508157_.jpg";
import MensClothing from "../../../app/images/_en_US._SY232_CB642508157.jpg";
import Jewelery from "../../../app/images/en_US._SY232_CB642508157_.jpg";
import WomenClothing from '../../../app/images/SY232_CB642508157_.jpg';

interface IObjOfCategory {
    name: string;
    img: string;
}

export const addImgLink = (array: Array<string>) => {
    const resultArray: Array<IObjOfCategory> = [];

    for (let i = 0; i < array.length; i++) {
        const objOfCategory: IObjOfCategory = {name: '', img: ''};
        const currentCategory = array[i];

        if (currentCategory === "electronics") {
            objOfCategory.name = currentCategory;
            objOfCategory.img = Electronics;
        } else if (currentCategory === "jewelery") {
            objOfCategory.name = currentCategory;
            objOfCategory.img = Jewelery;
        } else if (currentCategory === "men's clothing") {
            objOfCategory.name = currentCategory;
            objOfCategory.img = MensClothing;
        } else if (currentCategory === "women's clothing") {
            objOfCategory.name = currentCategory;
            objOfCategory.img = WomenClothing;
        }
        resultArray.push(objOfCategory);
    }

    return resultArray;
};
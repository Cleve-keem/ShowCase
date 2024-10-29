import styles from "./Showcase.module.css";
import image1 from "white_jordan (1).png";
import image2 from "white_jordan (2).png";
import image3 from "white_jordan (3).png";

const images = [
    image1,
    image2,
    image3
]

import { useState } from "react";

function Showcase({ item_images, shoe_image}) {

    const [ currentIndex, setCurrentIndex ] = useState(0);

    const handleNextButton = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }

    return (
        <div className="container">
            <div className={styles.showcase_wrapper}>
                <div className={styles.showcase}>
                    {/* slide image */}
                    <div className={styles.slide_show}>
                        <div className={styles.slide_item}>
                            <img className={styles.slide_img} src={images[image1]} alt="slide Image" />
                            <div className={styles.arrow_left}><i className="ri-arrow-left-s-line"></i></div>
                            <div className={styles.arrow_right}><i className="ri-arrow-right-s-line"></i></div>
                        </div>
                    </div>
                    {/* themes */}
                    <div className={styles.slide_themes}>
                        <span className={`${styles.dark_themes} active`}></span>
                        <span className={styles.light_themes}></span>
                    </div>

                    {/* Buttons and Price */}
                    <div className={`${styles.buttons}`}>
                        <div className={`${styles.amount_btn} flex`}>
                            <button className={styles.add_btn}>+</button>
                            <div className={`${styles.show_count} flex`}>0</div>
                            <button className={styles.remove_btn}>-</button>
                        </div>
                        <div className={`${styles.cart_btn} flex`}>
                            <button className={styles.add_to_cart}>ADD TO CART<i className={`${styles.cart_icon} ri-shopping-cart-2-line`}></i> </button>
                        </div>
                        <div className={`${styles.show_price} flex`}>$ 0</div>
                    </div>
                </div>
                {/* Preview section  */}
                <div className={styles.preview}>
                    <ul className={styles.items}>
                        {item_images && (
                            <li className={`${styles.preview_item} flex`}>
                                <img src="shoes\white_jordan_3.png" alt="previewed image" />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Showcase;
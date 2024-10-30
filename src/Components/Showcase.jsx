import styles from "./Showcase.module.css";
import image1 from "../assets/shoes/white_jordan1.png";
import image2 from "../assets/shoes/white_jordan2.png";
import image4 from "../assets/shoes/white_jordan4.png";
import image5 from "../assets/shoes/black_jordan1.png";
import image6 from "../assets/shoes/black_jordan2.png";
import image7 from "../assets/shoes/black_jordan3.png";
import image8 from "../assets/shoes/Green5.png";
import image9 from "../assets/shoes/Green2.png";
import image10 from "../assets/shoes/Green3.png";
import image11 from "../assets/shoes/Green4.png";
import image13 from "../assets/shoes/Green1.png";
import image14 from "../assets/shoes/Sneaker4.png";
import image15 from "../assets/shoes/Sneaker2.png";
import image16 from "../assets/shoes/Sneaker3.png";
import image17 from "../assets/shoes/Sneaker1.png";

import { useReducer, useState } from "react";

const images = [
    { id: 1, src: [ image1, image2, image4 ], color: 'white' },
    { id: 2, src: [ image5, image6, image7 ], color: 'black'},
    { id: 3, src: [ image8, image9, image10 ], color: 'black'},
    { id: 4, src: [ image14, image15, image16 ], color: 'black'},
]


const themes = {
    purple: '#ba0ad1',
    light: '#eee'
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'increment': {
            const newCount = state.count + 1;
            const newPrice = state.price + 100;

            return{...state, count: newCount, price: newPrice}
        }

        case 'decrement': {
            const newCount = state.count - 1;
            const newPrice = state.price - 100;
            const reachLimit = newCount < 1;

            return{...state,
                count: reachLimit? state.count : newCount,
                price: reachLimit ? state.price : newPrice,
            }
        }
        default:
            return state;
    }
}

function Showcase() {

    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ bgColor, setBgColor ] = useState('#fff');
    const [ activeTheme, setActiveTheme ] = useState("light");
    const [ id, setId ] = useState(0);
    const [ state, dispatch ] = useReducer(reducer, {count: 1, price: 100 } );

    const handleNextButton = () => {
        console.log(currentIndex);
        setCurrentIndex((prevIndex) => prevIndex === images[id].src.length - 1 ? 0 :  prevIndex + 1);
    }

    const handlePrevButton = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images[id].src.length - 1 : prevIndex - 1);
    }

    const changeTheme = (theme) => {
        setBgColor(themes[theme]);
        setActiveTheme(theme);
    };

    return (
        <div className="container">
            <div className={styles.showcase_wrapper}>
                <div className={styles.showcase} style={{backgroundColor: bgColor}}>
                    {/* slide image */}
                    <div className={styles.slide_show}>
                        <div className={styles.slide_item}>
                            <img className={styles.slide_img} src={images[id].src[currentIndex]} alt="slide Image" />
                            <button 
                                className={styles.arrow_left}
                                onClick={handlePrevButton}><i className="ri-arrow-left-s-line"></i></button>
                            <button 
                                className={styles.arrow_right}
                                onClick={handleNextButton}><i className="ri-arrow-right-s-line"></i></button>
                        </div>
                    </div>
                    {/* themes */}
                    <div className={styles.slide_themes}>
                        <span
                        className={`${styles.purple_theme} ${activeTheme === "purple" ? styles.active : ""}`}
                        onClick={() => changeTheme("purple")}
                        ></span>
                        <span
                        className={`${styles.light_theme} ${activeTheme === "light" ? styles.active : ""}`}
                        onClick={() => changeTheme("light")}
                        ></span>
                    </div>

                    {/* Buttons and Price */}
                    <div className={`${styles.buttons}`}>
                        <div className={`${styles.amount_btn} flex`}>
                            <button
                                className={styles.add_btn}
                                onClick={() => dispatch({type: 'decrement'})}
                            >-</button>
                            <div className={`${styles.show_count} flex`}>{state.count}</div>
                            <button 
                                className={styles.remove_btn}
                                onClick={() => dispatch({type: 'increment'})}
                            >+</button>
                        </div>
                        <div className={`${styles.cart_btn} flex`}>
                            <button className={styles.add_to_cart}>ADD TO CART<i className={`${styles.cart_icon} ri-shopping-cart-2-line`}></i> </button>
                        </div>
                        <div className={`${styles.show_price} flex`}>$ {state.price}</div>
                    </div>
                </div>
                {/* Preview section  */}
                <div className={styles.preview}>
                    <ul className={styles.items}>
                        {images.map((item, index) => (
                            <li 
                                key={index}
                                className={`${styles.preview_item} flex`} 
                                onClick={() => setId(item.id - 1)}
                            >
                                <img src={item.src[0]} alt="previewed image" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Showcase;
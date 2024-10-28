import styles from "./Showcase.module.css";

function Showcase({ price, preview_image, shoe_image}) {


    return (
        <div className="container">
            <div className={styles.showcase_wrapper}>
                <div className={styles.showcase}>
                    <div className={styles.slide_show}>
                        <div className={styles.slide_item}>
                            <img className={styles.slide_img} src="shoes/jordan_4_black_1.png" alt="slide Image" />
                            <div className={styles.arrow_left}><i className="ri-arrow-left-s-line"></i></div>
                            <div className={styles.arrow_right}><i className="ri-arrow-right-s-line"></i></div>
                        </div>
                    </div>
                    <div className="slide-themes">
                        <span className="dark">dark</span>
                        <span className="light">light</span>
                    </div>
                    <div className="flex">
                        <div className="amount-btn">
                            <button className="add-btn">+</button>
                            <div className="show-count">0</div>
                            <button className="remove-btn">-</button>
                        </div>
                        <div className="chart-btn">
                            <button className="add-to-chart">ADD TO CHART</button>
                        </div>
                        <div className="show-price">{price}</div>
                    </div>
                </div>
                <div className="preview-item">
                    <div className="item">
                        <img src={preview_image} alt="previewed image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Showcase;
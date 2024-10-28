import styles from "./Showcase.module.css"
function Showcase({ price, preview_image, shoe_image}) {

    return (
        <div className="container">
            <div className={styles.showcase_wrapper}>
                <div className={styles.showcase}>
                    <div className={styles.slide_show}>
                        <div className={styles.slide_item}>
                            <img src={shoe_image} alt="slide Image" />
                            <div className="arrow-left"><i className="ri-left-fill">arrow left</i></div>
                            <div className="arrow-right"><i className="ri-right-fill">arrow right</i></div>
                        </div>
                    </div>
                    <div className="slide-themes">
                        <span className="dark">1</span>
                        <span className="light">2</span>
                    </div>
                    <div className="flex">
                        <div className="amount-btn">
                            <button className="add-btn">+</button>
                            <div className="show-count"></div>
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
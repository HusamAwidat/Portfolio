import './App.css';
import './assets/fonts/Vanilla Caramel.otf'
import one from "./assets/images/b&w/1.jpeg"
import two from "./assets/images/b&w/2.jpeg"
import three from "./assets/images/b&w/3.jpeg"
import four from "./assets/images/b&w/4.jpeg"
import five_1 from "./assets/images/b&w/5.jpg"

function App() {
    return (
        <div className="App">
            <h1 className={"page-title"}>
                Hello Hosam's Portfolio
            </h1>

            <div className={"categories-grid"}>
                <div className={"categories-row"}>
                    <h3 className={"categories-title"}><strong className={"cat-secondary"}>B</strong>&W</h3>
                    <div className={"images-box"}>
                        <div className={"image-wrapper"}>
                            <img src={one} className={"real-image"}/>
                        </div>
                        <div className={"image-wrapper"}>
                            <img src={two} className={"real-image"}/>
                        </div>
                        <div className={"image-wrapper"}>
                            <img src={three} className={"real-image"}/>
                        </div>
                        <div className={"image-wrapper"}>
                            <img src={four} className={"real-image"}/>
                        </div>
                        <div className={"image-wrapper"}>
                            <img src={five_1} className={"real-image"}/>
                        </div>
                    </div>
                </div>

                <div className={"categories-row"}>
                    <h3 className={"categories-title"}>Landscapes</h3>
                    <div className={"images-box"}>
                        <div className={"image-wrapper"}>
                            <img src={one} className={"real-image"}/>
                        </div>
                        <div className={"image-wrapper"}>
                            <img src={two} className={"real-image"}/>
                        </div>
                        <div className={"image-wrapper"}>
                            <img src={three} className={"real-image"}/>
                        </div>
                        <div className={"image-wrapper"}>
                            <img src={four} className={"real-image"}/>
                        </div>
                        <div className={"image-wrapper"}>
                            <img src={five_1} className={"real-image"}/>
                        </div>
                    </div>
                </div>

                <div className={"categories-row"}>
                    <h3 className={"categories-title"}>Portraits</h3>
                    <div className={"images-box"}>
                        <div className={"image-wrapper"}>
                            <img src={one} className={"real-image"}/>
                        </div>
                        <div className={"image-wrapper"}>
                            <img src={two} className={"real-image"}/>
                        </div>
                        <div className={"image-wrapper"}>
                            <img src={three} className={"real-image"}/>
                        </div>
                        <div className={"image-wrapper"}>
                            <img src={four} className={"real-image"}/>
                        </div>
                        <div className={"image-wrapper"}>
                            <img src={five_1} className={"real-image"}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;

import License from "./License";
import Tools from "./Tools";

import "./style.scss";

function Doc() {
    return (
        <>
            <section className="doc">
                <div className="container">
                    <div className="doc-wrapper">
                        <License />
                        <Tools />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Doc;

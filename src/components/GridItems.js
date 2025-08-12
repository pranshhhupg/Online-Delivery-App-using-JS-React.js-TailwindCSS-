import { GRID_DATA_IMG } from "../utils/constants";

const GridItems= ({gridData}) => {
    const {text}=gridData?.action;
    const imageId= gridData?.imageId;

    return (
        <div className="GridItems-container w-35 pb-2 mx-5">
            <div className="img-container">
                <img src={GRID_DATA_IMG+imageId} alt="grid Data Image"/>
            </div>
        </div>
    )
}

export default GridItems;
import AddIcon from "../icons/AddIcon"
import SearchIcon from "../icons/SearchIcon";

import './styles.css'

export default function AddSearchBar({}){
    const iconProps={
        width:50,
        height:50,
        fill:"#000000"
    }; 
    return(
        <section className="add-search-section">
            <a href="#">
                <AddIcon width={iconProps.width} height={iconProps.height} fill={iconProps.fill}/>
            </a>
            <a href="#">
                <SearchIcon width={iconProps.width} height={iconProps.height} fill={iconProps.fill} />
            </a>   
        </section>
    )
}
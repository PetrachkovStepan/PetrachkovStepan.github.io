import searchImg from "@assets/SearchImg.svg"
import { getPlacesByRadius } from "@//utils/http/MapAPI";
import { useDispatch } from "react-redux";
import { SET_ITEMS } from "@//store/mapReducer";
import { useEffect, useState } from "react";
import { useTypeSelector } from "@//hooks/useTypeSelector";

function SearchButton() {
    const dispatch = useDispatch()
    const state = useTypeSelector(state => state.user)
    const [radius, setRadius] = useState(0)

    const search = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        dispatch({type: SET_ITEMS, items: await getPlacesByRadius(radius, state.userPosition[0].lng, state.userPosition[0].lat)})
    }
    return (
        <div className="flex flex-row md:flex-col items-end md:items-start justify-between">
            <div>
                <div className="mt-[30px] text-[20px] text-dark-grey font-mono font-bold ">В радиусе:</div>
                <div className="flex flex-row items-center mt-[15px] mr-5">
                    <input  className = " flex items-center px-[5px] md:p-[10px] h-[30px] md:h-[50px] w-[60px] md:w-[100px] rounded-[6px] border-[3px] border-grey font-mono outline-none"
                        onChange={(e) => {setRadius(Number.parseInt(e.target.value))}}
                        type="number" 
                        value={radius}>
                    </input>
                    <div className = "text-[16px] text-dark-grey ml-[20px] font-mono font-bold ">м</div>
                </div>
            </div>
            <button className=" flex justify-center items-center h-[50px] md:min-h-[60px] w-[40%] md:w-full bg-blue rounded-[10px] mt-[15px]"
                onClick={search}>
                <img src={searchImg} alt=""/>
            </button>
        </div>
    );
}
  
export default SearchButton;
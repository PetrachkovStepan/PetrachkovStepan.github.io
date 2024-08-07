import searchImg from "@assets/SearchImg1.svg"
import { getPlaceByName } from "@//utils/http/MapAPI";
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { SET_ITEMS } from "@//store/mapReducer";
import { useTypeSelector } from "@//hooks/useTypeSelector";

function SearchBar() {
    const state = useTypeSelector(state => state.user)
    const dispatch = useDispatch()
    const [searchLine, setSearchLine] = useState("")
    const [position, setPosition] = useState<GeolocationCoordinates | undefined>()
    const search = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log("position");
        console.log(position); 
        dispatch({type: SET_ITEMS, items: await getPlaceByName(searchLine, state.userPosition[0].lng, state.userPosition[0].lat)})
    }
    return (
        <div  className = " flex items-center pl-[30px] pr-[40px] h-[60px]  rounded-[6px] border-[3px] border-grey">
            <img src={searchImg} alt="" className=" h-[22px] w-[22px]"
                onClick={search}/>
            <input className=" text-[16px] ml-[20px] outline-none h-full w-full  font-mono"
                placeholder="Место, адрес.."
                onChange={(e) => {setSearchLine(e.target.value)}} 
                value={searchLine}>
            </input>
        </div>
    );
}
  
export default SearchBar;
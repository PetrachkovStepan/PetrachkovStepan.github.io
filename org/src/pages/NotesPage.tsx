import SearchBar from "@sidebars/SearchBar";
import Note from "@sidelists/Note";


function NotesPage() {
    return (
        <div  className = "h-screen bg-white flex flex-col px-[25px] pt-[25px]">
            <SearchBar/>
            <div className="mt-[30px] text-[20px] text-dark-grey">Избранное</div>
            <div className="flex flex-col mt-[10px] overflow-auto no-scrollbar">
                <Note/>
                <Note/>
                <Note/>
            </div>
        </div>
    );
}
  
export default NotesPage;
import SeachBar from "@/components/seachbar";

const AppBar = ()=>{
    return(
        <div className=" flex pl-2 pr-2 items-center justify-between space-x-52">
            <p>Youtube</p>
            <SeachBar/>
            <p >Logout</p>
        </div>
    );
}

export default AppBar;
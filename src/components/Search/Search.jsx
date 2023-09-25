
const Search = () => {
    return (
        <div style={{ backgroundImage: 'url("https://i.ibb.co/rfphQRR/COMPRESSED-Master-of-social-work-in-australia.jpg")', backgroundPosition: 'center' }}>
            <div className="w-full h-96 bg-white opacity-90 flex justify-center items-center flex-col gap-8">
                <h1 className="text-4xl font-bold">I Grow By Helping People In Need</h1>
                <div className="border text-[#0B0B0B66] text-sm rounded-lg  flex">
                    <input type="text" className="pl-7 py-4 rounded-l-lg w-72" placeholder="Search here...." />
                    <button className="bg-[#FF444A] -full py-4 px-7 rounded-r-lg text-white font-semibold">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Search;
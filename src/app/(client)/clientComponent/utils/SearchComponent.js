const SearchComponent=()=>{
    return (
   
<form className="flex  flex-row gap-3">
<select id="pricingType" name="pricingType w-1/3" defaultValue={'All'} 
		className="w-1/3 h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
		<option value="All"   >All</option>
		<option value="Freemium">Freemium</option>
		<option value="Free">Free</option>
		<option value="Paid">Paid</option>
	</select>
    <div className="flex w-2/3">
        <input type="text" placeholder="Search for the tool you like"
			className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
			/>
        <button type="submit" className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
    </div>
 
</form>
    
    )
}
export default SearchComponent;
export default function Aside() {
  function search(formData: FormData) {
    const query = formData.get("query");
    alert(`You searched "${query}"`);
    // Add your search functionality here
    console.log("Searching...");
  }

  return (
    <aside className="bg-gray-200 p-4 w-1/4">
      <form
        className="flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          search(new FormData(e.target as HTMLFormElement));
        }}
      >
        <input id="keyword" name="query" type="search" className=" w-full border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-gray-500 " placeholder="Search ..." />
      </form>
    </aside>
  );
}

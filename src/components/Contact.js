const Contact = () => {
  return (
    <div className="w-6/12 m-auto flex-col flex items-center">
      <h1 className="p-3 m-3 font-semibold text-4xl">Contact US</h1>
      <form className="ml-7  w-5/12 flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter Your Name"
          className=" border border-black focus:outline-blue-300 p-2 m-2 w-full"
        />
        <input
          type="text"
          placeholder="Message"
          className=" border border-black focus:outline-blue-300 p-2 m-2  w-full"
        />
        <button className="rounded-lg border hover:bg-blue-400  bg-gray-300 font-semibold  p-2 m-2 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

function Home({toggleToken, toggleOff}) {


  return (
    <div className="Home">

        <h1>Home </h1>

        <p> Note: This site does not have real Login/Logout functionality. <br></br>It is using a mock token that is represented by 0 or a random integer</p>

        <button onClick={()=> {
          console.log("clicked")
          toggleToken()}}> "Login" </button>

         <button onClick={()=> {
          console.log("clicked")
          toggleOff()}}> "Logout" </button>

    </div>
  );
}

export default Home;

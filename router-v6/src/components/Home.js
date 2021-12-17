function Home({toggleToken, toggleOff}) {


  return (
    <div className="Home">
      <div>
        <h1>Home </h1>

        <div>
          <button onClick={()=> {
            // console.log("clicked")
            toggleToken()
          }}> "Login" </button>

          <button onClick={()=> {
            // console.log("clicked")
            toggleOff()
          }}> "Logout" </button>
        </div>
      </div>

      <p> Note: This site does not have real Login/Logout functionality. <br></br>It is using a mock token that is represented by 0 or a random integer</p>
   
    </div>
  );
  }

export default Home;

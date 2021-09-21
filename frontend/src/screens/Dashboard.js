import React from "react";

const Dashboard = () => {
  // const history = useHistory()

  // async function populateQuote(){
  //   const data = await fetch('http://localhost:5000/api/quote',{
  //     headers:{
  //       'x-access-token': localStorage.getItem('token'),
  //     }
  //   })

  // }

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if(token){
  //     const user = jwt.decode(token)
  //     if(!user){
  //       localStorage.removeItem('token')
  //       history.replace('/login')
  //     } else {
  //         populateQuote()
  //     }
  //   }

  // }, []);
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

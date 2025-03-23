
const list =[
  {
    Fullname:"Sweta Niroula",
    Address :"Dharan-18",
    Email:"swetaniroula1122@gmail.com",
  },
  {
    Fullname:"Deepa Ghimire",
    Address :"Dharan-18",
    Email:"deepaghimire50@gmail.com",
  },
  {
    Fullname:"Siwani Dahal",
    Address :"Dharan-13",
    Email:"swetaniroula1122@gmail.com",
  },
  {
    Fullname:"Dipsika",
    Address :"Dharan-2",
    Email:"dipsika123@gmail.com",
  },
  {
    Fullname:"Ashim Chhetri",
    Address :"Dharan-13",
    Email:"ashim123@gmail.com",
  },
]

const App = () => {
  return(
    <div>
      <h1>BMC React Squad</h1>
      {list.map((squad) =>{
        return(

          <Card key={squad.Fullname} item={squad}/>
        )
      })}
    </div>
  )
}

export default App

const Card = ({item}) => {
  return (
    <div style={{border:"2px solid black" , width:"70%",padding:"12px",margin:"10px",background:"blue", color:"whitesmoke"}}>
      <h1>Name:{item.Fullname}</h1>
      <h1>Address:{item.Address}</h1>
      <h1>Email:{item.Email}</h1>
    </div>
  )
}










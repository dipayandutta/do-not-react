function Hello(){

  let userName="Bujji";
  let fullName = () =>{
    return 'Bionic Upgraded Junked Intelligence'
  }
  return (
    <>
      <div>
        <h3>Hello Component</h3>
        <p>This is {userName}</p>
        <p>Full Name {fullName()}</p>
      </div>
    </>
  )
}

export default Hello;
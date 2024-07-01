function Random(){

  let Number = Math.random() * 100
  return(

    <>
      <div>
        <h2 style={{'textAlign':'right'}}>Random Number {Math.ceil(Number)}</h2>
      </div>
    </>
  )

}

export default Random;
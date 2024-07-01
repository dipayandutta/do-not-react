function Random (){

    let randomNunmber = Math.random() *100

    return (
        <>
            <div>

                <p>Random Number == {Math.ceil(randomNunmber)}</p>
            </div>
        </>
    )
}

export default Random;
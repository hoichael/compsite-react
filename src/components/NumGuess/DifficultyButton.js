
const DifficultyButton = ( { onClick, difficulty, id} ) => {

    function clicked() {
       onClick(id, difficulty);
    }

    return (

        <>
            <button className="numguess-btn-difficulty"
            onClick = {() => clicked()}
            id = {id}>
            {difficulty}
            </button>
        </>
    )
}

export default DifficultyButton

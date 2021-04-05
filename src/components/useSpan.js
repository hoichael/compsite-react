const useSpan = (arr, elementClass, format) => {

    const emptyChar = " ";
    let lineBreakIterator = 0;
    let charCountBreakpoint = Math.round(window.innerWidth / 30);

    function formatText(element) {

        if(element === "?" || element === "!" || element === "'" || element === "´") {
            return emptyChar
        }

        if(element !== " ") {
            lineBreakIterator++
        };

        if(lineBreakIterator >= charCountBreakpoint) {
            lineBreakIterator = 0;
            return emptyChar;
        } else {
            return element;
        }
    }

    if(!format) {
        return arr.map(element => (
            <span key={Math.random() + Math.random() + Math.random()} className={elementClass}>{element}</span>
            ))
    } else {
        return arr.map(element => (
            <span key={Math.random() + Math.random() + Math.random()} className={elementClass}>{formatText(element)}</span>
            ))
    }
}

export default useSpan
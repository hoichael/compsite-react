import textData from "./TypingGameData"

const getSegment = (difficulty) => {
        
        function getStartingIndex() {
          let index = Math.floor(Math.random() * (textData.length - 100));
          while(textData.charAt(index - 1) !== " ") {
            index++
          }
          return index;
        }
    
        function getEndingIndex(startID) {

          let wordCount;
          let wordIterator = 0;
          let indexIterator = startID;

          switch(difficulty) {
            case "Easy":
              wordCount = 14;
              break;
            case "Medium":
              wordCount = 24;
              break;
            case "Hard":
              wordCount = 36;
              break;      
        }
    
          while(wordIterator < wordCount) {
            indexIterator++
            if(textData.charAt(indexIterator) === " ") { wordIterator++ }
          }
          return indexIterator;
        }

        const startingIndex = getStartingIndex();

        const endingIndex = getEndingIndex(startingIndex);

        const segment = textData.substring(startingIndex, endingIndex);

        return [segment, startingIndex, endingIndex];
}

export default getSegment;
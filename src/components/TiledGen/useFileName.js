const useFileName = (file) => {
    let targetIndex;

    for(let i = file.length - 1; i > 0; i--) {
        if(file.charAt(i) == "/" || file.charAt(i) == "\\") {
            targetIndex = i;
            break;
        }
    }

    if(targetIndex == undefined) {
        alert('Something about the path of your provided file is fucked. You will need to manually correct the "source" property of the generated output file');
    }

    return file.substring(targetIndex + 1);
}

export default useFileName
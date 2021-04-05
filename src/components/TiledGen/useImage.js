const useImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.files[0]);
    
    reader.onload = function() {
        return reader.result;
    }
}

export default useImage
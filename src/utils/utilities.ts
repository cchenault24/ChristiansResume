 // Function will execute on click of button
 export const handleDownload = (filepath:string) => {
    // using Java Script method to get PDF file
    fetch(`/${filepath}`).then((response) => {
        response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);

            // Setting various property values
            const alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = filepath;
            alink.click();
        });
    });
};

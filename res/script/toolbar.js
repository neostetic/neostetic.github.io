const exportImage = () => {
    var node = document.getElementById('export');
    domtoimage.toPng(node)
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'exported-image.png';
            link.href = dataUrl;
            link.click();
        })
        .catch(function (error) {
            console.error('Error exporting image:', error);
        });
}
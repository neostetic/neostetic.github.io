const exportImage = async () => {
    let node = document.getElementById('export');
    let width = 1240
    let height = 1754
    
    let earlyTransform = node.style.transform
    node.style.transform = 'scale(1)'

    await pb_sleep(500)

    domtoimage.toPng(node, { width: width, height: height })
        .then(function (dataUrl) {
            let link = document.createElement('a')
            let lang = pixelbite.query.lang || "en"
            link.download = 'CV_Jan_Polacek_' + lang + '_' + pb_randomString(24) + '.png';
            link.href = dataUrl;
            link.click();
        })
        .catch(function (error) {
            console.error('Error exporting image:', error);
    });

    node.style.transform = earlyTransform
}

const zoomIn = () => {
    let exportCanvas = document.getElementById('export');
    exportCanvas.style.transform = addScaleValue(exportCanvas.style.transform, 0.1)
}

const zoomOut = () => {
    let exportCanvas = document.getElementById('export');
    exportCanvas.style.transform = addScaleValue(exportCanvas.style.transform, -0.1)
}

const addScaleValue = (transformString, scaleIncrement) => {
    const scaleRegex = /scale\((\d*\.?\d+)\)/;
    const match = transformString.match(scaleRegex);

    if (match) {
        let currentScale = parseFloat(match[1]);
        let newScale = currentScale + scaleIncrement;
        let newTransformString = ''
        if (newScale > 0) {
            newTransformString = transformString.replace(scaleRegex, `scale(${newScale})`)
        } else {
            newTransformString = transformString.replace(scaleRegex, `scale(${currentScale})`)
        }
        return newTransformString
    }

    return transformString;
}

const printImage = async () => {
    let mywindow = window.open('', 'PRINT', 'height=1754,width=1240');
    let lang = pixelbite.query.lang || "en"
    mywindow.document.write('<html><head><title>' + 'CV_Jan_Polacek_' + lang + '_' + pb_randomString(24) + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById('export'));
    mywindow.document.write('</body></html>');

    await pb_sleep(500)
    
    mywindow.document.close()
    mywindow.focus()

    mywindow.print()

    return true
}
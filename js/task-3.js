function getElementWidth(content, padding, border) {
    const boxSizing = parseFloat(content) + (parseFloat(padding) * 2) + (parseFloat(border) * 2);
    return (boxSizing);
}
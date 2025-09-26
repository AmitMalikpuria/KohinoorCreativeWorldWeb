
const handleKeyPress = (event) => {
    // Your logic to handle key presses (e.g., allow only numbers)
    if (!/^[0-9.]$/.test(event.key) && event.key !== "Backspace" && event.key !== "Delete") {
        event.preventDefault();
    }
}

const removeCommasAndConcatenate = (str) => {
    return String(str).replace(/,/g, '');
}


const AddCommas = (nStr) => {
    let value = removeCommasAndConcatenate(nStr);
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const handleKeyPressString = (event) => {
    const { key, keyCode } = event;

    //const isLetter = (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122);    
    const isLetter = (keyCode >= 65 && keyCode <= 90);
    const isSpace = key === ' ';
    const isBackspace = keyCode === 8;
    const isEnter = keyCode === 13;
    const isLeftArrow = keyCode === 37;
    const isUpArrow = keyCode === 38;
    const isRightArrow = keyCode === 39;
    const isDownArrow = keyCode === 40;

    if (
        !isLetter &&
        !isSpace &&
        !isBackspace &&
        !isEnter &&
        !isLeftArrow &&
        !isUpArrow &&
        !isRightArrow &&
        !isDownArrow
    ) {
        event.preventDefault();
    }


};

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const handleScrollToTop = () => {
    // console.log("Scrolling to top");
    // window.scrollTo(0, 0); // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

function cleanFloat(input) {
    if (input < 0) { return 0; }
    return parseInt(input).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getBeforeDecimal(floatValue) {
    const [integerPart] = floatValue.toString().split(".");
    return parseInt(integerPart);
}

function getMonthName(monthNumber) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    if (monthNumber < 1 || monthNumber > 12) {
        throw new Error("Invalid month number. Must be between 1 and 12.");
    }
    return months[monthNumber - 1];
}



export {
    handleKeyPress,
    removeCommasAndConcatenate,
    handleKeyPressString,
    isValidEmail,
    handleScrollToTop,
    cleanFloat,
    getBeforeDecimal,
    AddCommas,
    getMonthName
}
export function startTyping(elementId, text, speed) {
    const element = document.getElementById(elementId);
    element.innerHTML = "";
    let i = 0;
    let ch = "";
    let clinDash;
    const type = () => {
        if (i < text.length) {
            ch += text.charAt(i);
            clinDash = !(i % 2) || i == text.length - 1 ? "" : "_";
            element.innerHTML = ch + clinDash;
            i += 1;
            setTimeout(type, speed);
        }
    };
    type();
}

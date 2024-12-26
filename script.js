// Get the output div where phishing info will be typed
const output = document.getElementById("output");

// Phishing info to be typed out after the static prompt `user@phishing:~$`
const phishingInfo = `
Фишинг э-мэйл нь таны (нэвтрэх нэр,нууц үг,пин код) гэх мэт чухал мэдээллүүдийг олж авах зорилготой халдлага юм.
`;

// Function to simulate typing the phishing info after the prompt
function typeText(text) {
    let i = 0;
    const speed = 15; // Typing speed in milliseconds
    function typing() {
        if (i < text.length) {
            output.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Start typing the phishing info when the page loads
window.onload = function() {
    typeText(phishingInfo);
};

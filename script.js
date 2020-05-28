
function generate() {
    var length = parseInt(prompt("Length of Password (must be between 8 and 128 characters)"));

    if (isNaN(length) || length < 8 || length > 128) {
        alert("must be number between 8 and 128 characters");
        return;
    }

    var includeSpecial = confirm("Include Special characters");
    var includeNumeric = confirm("Include Numeric characters");
    var includeLowercase = confirm("Include Lowercase characters");
    var includeUppercase = confirm("Include Uppercase characters");

    var special = " !”#$%&’()*+,-./:;<=>?@[\\]^_`{|}~";
    var numberic = "0123456789";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXY";

    var chars = [];

    if (includeSpecial) {
        chars.push(special)
    }
    if (includeNumeric) {
        chars.push(numberic)
    }
    if (includeLowercase) {
        chars.push(lowercase)
    }
    if (includeUppercase) {
        chars.push(uppercase)
    }

    if (chars.length == 0) {
        alert("Must choose at least one option.");
        return;
    }

    var password = "";

    var i;

    for (i = 0; i < length; i++) {
        var option = chars[Math.floor(Math.random() * chars.length)]
        password += option[Math.floor(Math.random() * option.length)]
    }

    document.querySelector("#password").value = password;
}

document.querySelector("#generate").addEventListener("click", generate);

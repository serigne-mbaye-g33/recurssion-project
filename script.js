function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

function ticketPricing(age) {
    if (age <= 12) {
        return 'Ticket price: $10';
    } else if (age >= 13 && age <= 17) {
        return 'Ticket price: $15';
    } else {
        return 'Ticket price: $20';
    }
}

function clothingAdvice(temperature, isRaining) {
    if (isRaining) {
        if (temperature < 15) {
            return 'Wear a warm raincoat and waterproof boots.';
        } else {
            return 'Wear a light rain jacket and carry an umbrella.';
        }
    } else {
        if (temperature < 15) {
            return 'Wear a warm jacket.';
        } else {
            return 'Wear light, comfortable clothes.';
        }
    }
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    function checkPalindrome(start, end) {
        if (start >= end) {
            return true;
        }
        if (str[start] !== str[end]) {
            return false;
        }
        return checkPalindrome(start + 1, end - 1);
    }
    return checkPalindrome(0, str.length - 1);
}

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}


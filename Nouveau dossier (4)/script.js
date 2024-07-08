function analyzeSentence(sentence) {
    // Initialize counters
    let wordCount = 0;
    let vowelCount = 0;
    let isWord = false;

    // Define a set of vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Check for end of word
        if (char === ' ' || char === '.') {
            if (isWord) {
                wordCount++;
                isWord = false;
            }
        } else {
            isWord = true;
        }

        // Check for vowels
        if (vowels.has(char)) {
            vowelCount++;
        }
    }

    // The last word might not be followed by a space
    if (isWord) {
        wordCount++;
    }

    return { wordCount, vowelCount };
}

// Example usage
const sentence = "Hello world.";
const result = analyzeSentence(sentence);
console.log(`Number of words: ${result.wordCount}`);
console.log(`Number of vowels: ${result.vowelCount}`);
function sumOfDistinctElements(set1, set2) {
    // Convert arrays to sets to get unique elements
    const uniqueSet1 = new Set(set1);
    const uniqueSet2 = new Set(set2);

    // Find the distinct elements in each set
    const distinctElements = new Set([...uniqueSet1].filter(x => !uniqueSet2.has(x)).concat([...uniqueSet2].filter(x => !uniqueSet1.has(x))));

    // Calculate the sum of distinct elements
    let totalSum = 0;
    for (let element of distinctElements) {
        totalSum += element;
    }

    return totalSum;
}

// Example usage
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log(`Sum of distinct elements: ${result}`);

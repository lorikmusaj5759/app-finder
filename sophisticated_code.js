/* 
 * Filename: sophisticated_code.js
 * Description: A script that generates a Markov chain based on an input text.
 *
 * Features:
 * - Loads a text file
 * - Preprocesses the text by removing unnecessary characters and converting it to lowercase
 * - Generates a Markov chain based on the text
 * - Generates new sentences using the Markov chain
 * - Allows customization of chain order (default order: 2)
 *
 * Usage: node sophisticated_code.js <input_file_path>
 *
 * Example:
 *     node sophisticated_code.js alice_in_wonderland.txt
 */

const fs = require('fs');
const readline = require('readline');

// Default Markov chain order
const DEFAULT_ORDER = 2;

// Load input text file
const inputFilePath = process.argv[2];
if (!inputFilePath) {
  console.error('Please specify an input file path.');
  process.exit(1);
}

const fileStream = fs.createReadStream(inputFilePath);
const rl = readline.createInterface({ input: fileStream });

// Preprocess the text by removing unnecessary characters
function preprocessText(text) {
  return text.replace(/[^a-zA-Z0-9\s]+/g, "").toLowerCase();
}

// Generate a Markov chain from the preprocessed text
function generateMarkovChain(text, order) {
  const chain = {};

  const words = text.split(' ');

  for (let i = 0; i < words.length - order; i++) {
    const prefix = words.slice(i, i + order).join(' ');
    const suffix = words[i + order];

    if (!chain.hasOwnProperty(prefix)) {
      chain[prefix] = [];
    }
    chain[prefix].push(suffix);
  }

  return chain;
}

// Generate a new sentence using the Markov chain
function generateSentence(chain, order) {
  let prefix = getRandomKey(chain);
  let sentence = prefix;

  for (let i = 0; i < 10; i++) {
    if (!chain.hasOwnProperty(prefix)) {
      break;
    }
    const suffixes = chain[prefix];

    const randomIndex = Math.floor(Math.random() * suffixes.length);
    const randomSuffix = suffixes[randomIndex];

    sentence += ' ' + randomSuffix;
    const words = sentence.split(' ');
    prefix = words.slice(words.length - order, words.length).join(' ');
  }

  return sentence;
}

// Helper function to get a random key from an object
function getRandomKey(obj) {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}

// Main function
async function main() {
  let text = '';

  for await (const line of rl) {
    text += line + ' ';
  }

  const preprocessedText = preprocessText(text);
  const markovChain = generateMarkovChain(preprocessedText, DEFAULT_ORDER);
  const generatedSentence = generateSentence(markovChain, DEFAULT_ORDER);

  console.log('Generated Markov chain:');
  console.log(markovChain);

  console.log('\nGenerated sentence:');
  console.log(generatedSentence);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
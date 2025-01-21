# Play-Emoji

A lightweight JavaScript package that converts text to emoji sequences. This simple yet powerful text-to-emoji parser allows you to transform words into their corresponding emoji representations.

## Installation

```bash
npm install play-emoji
```

## Features

- Convert text words to emojis
- Support for common emotions, foods, animals, objects, and more
- Extensible emoji dictionary
- Simple and easy to use
- Zero dependencies
- Written in modern JavaScript (ES modules)

## Usage

### Basic Usage

```javascript
import { textToEmoji } from 'play-emoji';

// Basic conversion
const result = textToEmoji('I love pizza');
console.log(result); // Output: "I ❤️  🍕  "
```

### Adding Custom Emojis

You can extend the default emoji set by passing your own emoji mappings:

```javascript
import { textToEmoji } from 'play-emoji';

const customEmojis = {
  javascript: "👨‍💻",
  coding: "💻",
  awesome: "🔥"
};

const result = textToEmoji('javascript is awesome', customEmojis);
console.log(result); // Output: "👨‍💻  is 🔥  "
```

## Available Categories

The package includes emojis from various categories:

- Emotions (love ❤️, happy 😄, sad 😢, etc.)
- Food and Drinks (pizza 🍕, coffee ☕, burger 🍔, etc.)
- Animals (dog 🐶, cat 🐱, rabbit 🐇, etc.)
- Nature (sun ☀️, moon 🌙, star ⭐, etc.)
- Objects (phone 📱, computer 💻, book 📚, etc.)
- Activities (run 🏃, swim 🏊, dance 💃, etc.)
- Travel and Places (car 🚗, airplane ✈️, beach 🏖️, etc.)
- Symbols (heart ❤️, check ✔️, warning ⚠️, etc.)

## License

Apache License 2.0

## Author

Created by Shubham

## Repository

[GitHub Repository](https://github.com/Shubham-1068/Play-Emoji)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
export const jsTopics = [
  {
    id: "variables",
    title: "Variables & Data Types",
    description: "Learn how to store values using let, const, and var, and understand strings, numbers, booleans, and more.",
    icon: "📦",
    color: "from-amber-400 to-orange-500",
    content: {
      intro: "Variables are containers for storing data values. JavaScript has three ways to declare variables: var, let, and const.",
      sections: [
        {
          heading: "Variable Declarations",
          code: `let name = "John";      // can be reassigned
const age = 25;         // cannot be reassigned
var city = "New York";  // function-scoped (older style)`,
          explanation: "Use const by default. Use let when you need to reassign a value. Avoid var in modern code.",
        },
        {
          heading: "Data Types",
          code: `const str = "Hello";           // String
const num = 42;                // Number
const bool = true;             // Boolean
const arr = [1, 2, 3];         // Array
const obj = { key: "value" };  // Object
const nothing = null;          // Null
let notDefined;                // Undefined`,
          explanation: "JavaScript is dynamically typed — you don't need to declare the type. typeof operator helps you check a value's type.",
        },
      ],
    },
  },
  {
    id: "functions",
    title: "Functions",
    description: "Understand function declarations, arrow functions, parameters, return values, and scope.",
    icon: "⚡",
    color: "from-blue-400 to-indigo-500",
    content: {
      intro: "Functions are reusable blocks of code that perform a specific task. They are one of the fundamental building blocks in JavaScript.",
      sections: [
        {
          heading: "Function Declaration",
          code: `function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // "Hello, Alice!"`,
          explanation: "Named functions are hoisted, meaning you can call them before they appear in the code.",
        },
        {
          heading: "Arrow Functions",
          code: `const add = (a, b) => a + b;
const square = x => x * x;
const sayHi = () => console.log("Hi!");`,
          explanation: "Arrow functions provide a shorter syntax and don't have their own 'this' binding — useful in callbacks and React.",
        },
      ],
    },
  },
  {
    id: "arrays",
    title: "Arrays",
    description: "Work with ordered lists using map, filter, reduce, and other powerful array methods.",
    icon: "📋",
    color: "from-emerald-400 to-teal-500",
    content: {
      intro: "Arrays store multiple values in a single variable. JavaScript arrays are zero-indexed and can hold mixed data types.",
      sections: [
        {
          heading: "Creating & Accessing Arrays",
          code: `const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);  // "Apple"
fruits.push("Date");     // add to end
fruits.length;           // 4`,
          explanation: "Use bracket notation to access elements by index. Arrays are mutable — you can add, remove, or change items.",
        },
        {
          heading: "Array Methods",
          code: `const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);       // [2,4,6,8,10]
const evens = nums.filter(n => n % 2 === 0); // [2, 4]
const sum = nums.reduce((a, b) => a + b, 0); // 15`,
          explanation: "map, filter, and reduce are essential for transforming data without mutating the original array.",
        },
      ],
    },
  },
  {
    id: "objects",
    title: "Objects",
    description: "Store key-value pairs, destructure properties, and work with JSON data structures.",
    icon: "🗂️",
    color: "from-violet-400 to-purple-500",
    content: {
      intro: "Objects are collections of key-value pairs. They are the primary way to represent structured data in JavaScript.",
      sections: [
        {
          heading: "Object Literals",
          code: `const user = {
  name: "Sarah",
  age: 28,
  isActive: true,
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};
console.log(user.name);    // "Sarah"
console.log(user.greet()); // "Hi, I'm Sarah"`,
          explanation: "Access properties with dot notation or bracket notation. Methods are functions stored as object properties.",
        },
        {
          heading: "Destructuring",
          code: `const { name, age } = user;
const updated = { ...user, age: 29 }; // spread operator`,
          explanation: "Destructuring extracts values from objects into variables. The spread operator creates shallow copies.",
        },
      ],
    },
  },
  {
    id: "dom",
    title: "DOM Manipulation",
    description: "Select elements, update content, change styles, and respond to user interactions on the page.",
    icon: "🌐",
    color: "from-rose-400 to-pink-500",
    content: {
      intro: "The Document Object Model (DOM) represents the HTML page as a tree of objects that JavaScript can read and modify.",
      sections: [
        {
          heading: "Selecting Elements",
          code: `const btn = document.getElementById("myBtn");
const items = document.querySelectorAll(".item");
const first = document.querySelector("h1");`,
          explanation: "querySelector returns the first match; querySelectorAll returns a NodeList of all matches.",
        },
        {
          heading: "Changing the DOM",
          code: `element.textContent = "New text";
element.classList.add("active");
element.style.color = "blue";
element.addEventListener("click", () => {
  alert("Button clicked!");
});`,
          explanation: "In React, you rarely touch the DOM directly — React's virtual DOM handles updates for you via JSX.",
        },
      ],
    },
  },
  {
    id: "async",
    title: "Async JavaScript",
    description: "Handle asynchronous operations with callbacks, Promises, async/await, and fetch API.",
    icon: "⏳",
    color: "from-cyan-400 to-sky-500",
    content: {
      intro: "JavaScript is single-threaded but handles async operations through the event loop, allowing non-blocking I/O.",
      sections: [
        {
          heading: "Promises",
          code: `fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`,
          explanation: "A Promise represents a value that may be available now, later, or never. It has three states: pending, fulfilled, rejected.",
        },
        {
          heading: "Async / Await",
          code: `async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed:", error);
  }
}`,
          explanation: "async/await is syntactic sugar over Promises — it makes asynchronous code read like synchronous code.",
        },
      ],
    },
  },
  {
    id: "es6",
    title: "ES6+ Features",
    description: "Explore modern JavaScript: template literals, modules, classes, optional chaining, and more.",
    icon: "✨",
    color: "from-yellow-400 to-amber-500",
    content: {
      intro: "ES6 (ECMAScript 2015) and later versions introduced many features that make JavaScript more expressive and powerful.",
      sections: [
        {
          heading: "Template Literals & Modules",
          code: `const name = "World";
const greeting = \`Hello, \${name}!\`;

// ES Modules
import { helper } from "./utils.js";
export default function main() {}`,
          explanation: "Template literals use backticks for string interpolation. ES modules use import/export for code organization.",
        },
        {
          heading: "Classes & Optional Chaining",
          code: `class Animal {
  constructor(name) { this.name = name; }
  speak() { return \`\${this.name} makes a sound\`; }
}

const value = user?.profile?.email ?? "no email";`,
          explanation: "Classes are syntactic sugar over prototypes. Optional chaining (?.) safely accesses nested properties.",
        },
      ],
    },
  },
  {
    id: "events",
    title: "Event Handling",
    description: "Listen for clicks, keyboard input, form submissions, and understand event bubbling and delegation.",
    icon: "🖱️",
    color: "from-fuchsia-400 to-purple-500",
    content: {
      intro: "Events are actions or occurrences that happen in the browser — clicks, key presses, form submissions, page loads, and more.",
      sections: [
        {
          heading: "Adding Event Listeners",
          code: `button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Clicked!", event.target);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") submitForm();
});`,
          explanation: "addEventListener attaches a handler without overwriting existing ones. event.preventDefault() stops default browser behavior.",
        },
        {
          heading: "React Event Handling",
          code: `function Button() {
  const handleClick = () => alert("Hello!");
  return <button onClick={handleClick}>Click me</button>;
}`,
          explanation: "In React, events are camelCase (onClick). Pass a function reference, not a function call, unless you need to pass arguments.",
        },
      ],
    },
  },
];

export const getTopicById = (id) => jsTopics.find((topic) => topic.id === id);

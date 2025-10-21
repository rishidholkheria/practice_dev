# 🚀 JavaScript, React & AI Interview Preparation Sheet

---

## 🧠 JavaScript Core Concepts

### 🔹 Scopes and Variables
- **Why use Block Scope**
- Are `let` and `const` block-scoped? What about `var`?
- Difference between **Lexical Scope** and **Scope**
- **Shadowing** in `let`, `const`, `var`
- **Temporal Dead Zone (TDZ)**

### 🔹 Functions
- **Arrow Functions** vs **Regular Functions**
- Can arrow functions be used as constructors? Why or why not?
- Do arrow functions have a `prototype` property?
- What happens when you use `call`, `apply`, or `bind` on an arrow function?
- **Immediately Invoked Function Expression (IIFE)**
- **Currying** with example
- **Callback functions** and **Higher-order functions**
- **Pure Functions** – Always return same output for same input
- Function return value if nothing is returned – `undefined`

### 🔹 Copying and Objects
- **Shallow copy vs Deep copy**
- Creating copies using **spread (`...`)**
- `Object.freeze()` and how to unfreeze
- **Prototypical Inheritance**
- **Prototype chain**
- Implementing `Array.map()` manually
- **Array and Object destructuring**
- **Optional chaining**
- `switch`, `try...catch`, `finally`

### 🔹 Operators
- **Nullish Coalescing (`??`)**
- **Rest (`...args`)** and **Spread (`...array`)** Operators
- **Truthy / Falsy** values
- Converting values like `"hello"`, `undefined` → Boolean
- Printing based on **object length**
- **== vs ===**, reference vs value comparison  
  Example: `console.log([] == [])` → `false`

### 🔹 Events & Execution
- **Event loop** and **Call Stack**
- **Event Bubbling**, **Capturing**, **Delegation**
- **this** keyword in regular vs arrow functions

---

## ⚙️ Asynchronous JavaScript

### Promises & Async/Await
- **Promises** – states, chaining, and callback hell
- **Promise.all**, **Promise.race**, **Promise.allSettled**
- **Async/Await** and error handling
- **Callback Hell → Promises → Async/Await**
- Example implementations of:
  - Fetch API using Promises
  - Async data loading

---

## ⚡ Utility Patterns & Implementations

### Debounce and Throttle
- What they are, **why used**, and **React-friendly implementation**
- ✅ **Interview must-practice**
  - Debounce example (Search)
  - Throttle example (Scroll, Resize)

### Common Practical Implementations
- Add to **Cart functionality**
- **Like / Unlike toggle**
- **Search / Filter** implementation
- **Pagination**
- **Async calls + CRUD**
- **Object/Array manipulation**
- **Custom React Hook**
- **Form handling** (controlled/uncontrolled)

---

## ⚛️ React Fundamentals

- Components, Props, State
- **Hooks** (`useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`)
- **Form Handling** (controlled components)
- **Context API**
- **State Management:** Redux / Zustand
- **Virtual DOM** and **Reconciliation**
- **Batching**
- **Lazy Loading** and Suspense
- **Loading UI** + Lazy loading implementation
- **getElementById vs querySelector**

---

## 🧩 Backend (Core + CRUD)
- Basic **Node.js / Express.js** setup
- REST API basics (GET, POST, PUT, DELETE)
- Async database calls
- CRUD using MongoDB / SQL
- Error handling and middlewares

---

## 🤖 AI / GenAI / NLP
- **RAG (Retrieval-Augmented Generation)** basics
- **NLP Core Concepts**
- **Prompt Engineering**
- API usage: OpenAI / Gemini / Llama
- Connecting AI models to **React Dashboard**
- **Automation & Agentic AI** integrations

---

## 🧾 SQL Quick Revision
- Joins, Subqueries
- Indexes and optimization
- GROUP BY, HAVING, ORDER BY
- Window functions
- Common Interview Queries

---

## 🧩 ES6 Features Recap
- `let`, `const`
- Template literals
- Default parameters
- Arrow functions
- Destructuring
- Spread / Rest
- Modules (import/export)
- Classes and inheritance
- Promises & Async/Await

---

## 🧪 Practice & Revision
✅ **Implementations to Practice:**
- Debounce / Throttle  
- Cart / Like / Search / Filter  
- CRUD + Async Handling  
- Custom Hook  
- Pagination  
- Object & Array Manipulation  

✅ **Theoretical to Revise:**
- Closures and Counter Example  
- Event Loop & Call Stack  
- Prototype Chain  
- Promises and Async Flow  
- Lexical Scope & Shadowing  
- this in Regular vs Arrow Function  

---

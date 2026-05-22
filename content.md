# Step 1 — Create the React Project

Open your terminal and run:

```bash
npm create vite@latest my-react-app -- --template react
```

This command creates a new React project using Vite, which is currently one of the fastest and simplest ways to start a React application.

After that, go to the project folder:

```bash
cd my-react-app
```

Tell me when you're done, and I’ll give you the next step only.

# Step 2 — Install Dependencies

Inside the project folder, run:

```bash id="gj3n2f"
npm install
```

This installs all packages required for your React app to run.

When it finishes, I’ll give you the next step.

# Step 3 — Start the Development Server

Run this command:

```bash id="6xk2hs"
npm run dev
```

You should see a local URL like:

```bash id="qj5k55"
http://localhost:5173
```

Open it in your browser.
You now have your first React app running locally with React + Vite.

Tell me when you see the app running.

# Step 4 — Understand the Project Structure

Open the project in Visual Studio Code and look at these files:

```txt
my-react-app/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── assets/
├── public/
├── package.json
└── vite.config.js
```

Focus only on these two files for now:

### `src/main.jsx`

This is the application entry point.
React mounts your app into the browser DOM here.

### `src/App.jsx`

This is your first React component.
Most of your UI starts here.

Now open `src/App.jsx` and replace everything with this:

```jsx id="dlmhso"
function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>My first React frontend</p>
    </div>
  )
}

export default App
```

Save the file and watch the browser update automatically.

Tell me when you see the new screen.

# Step 5 — Understand JSX

The code you wrote is using **JSX**.

JSX lets you write HTML-like syntax inside JavaScript:

```jsx id="u30b9a"
<h1>Hello React</h1>
```

This is not real HTML.
React transforms it into JavaScript behind the scenes.

## Why Can We Write HTML-like Code in JSX?

JSX is actually **syntactic sugar** for JavaScript function calls. When you write JSX, build tools (like Vite or Babel) transform it into regular JavaScript that browsers can understand.

### Example 1: Simple Element

**What you write in JSX:**
```jsx
<h1>Hello React</h1>
```

**What React transforms it into:**
```javascript
React.createElement('h1', null, 'Hello React')
```

The browser never sees the JSX syntax - it only sees the JavaScript function calls!

### Example 2: Element with Props

**What you write in JSX:**
```jsx
<h1 className="title" id="main">Hello React</h1>
```

**What React transforms it into:**
```javascript
React.createElement('h1', { className: 'title', id: 'main' }, 'Hello React')
```

### Example 3: Nested Elements

**What you write in JSX:**
```jsx
<div>
  <h1>Hello React</h1>
  <p>My first React frontend</p>
</div>
```

**What React transforms it into:**
```javascript
React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Hello React'),
  React.createElement('p', null, 'My first React frontend')
)
```

### Example 4: Component Usage

**What you write in JSX:**
```jsx
<Header title="CulturaDev" />
```

**What React transforms it into:**
```javascript
React.createElement(Header, { title: 'CulturaDev' })
```

### The Pattern

Every JSX element follows this pattern:
```javascript
React.createElement(
  type,        // 'div', 'h1', or ComponentName
  props,       // { className: 'my-class' } or null
  ...children  // content inside the element
)
```

This is why:
- You can write JSX inside JavaScript files
- JSX looks like HTML but has full JavaScript power
- You need to import React (in older versions) - it's used by the transformed code
- JSX is not valid JavaScript by itself - it needs to be compiled first

Now make your component dynamic.

Update `App.jsx` to this:

```jsx id="e4y53d"
function App() {
  const name = 'Clesio'

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Learning React step by step</p>
    </div>
  )
}

export default App
```

Notice:

```jsx id="zv7k4f"
{name}
```

Inside JSX, `{}` means:

> “Execute JavaScript here.”

Save the file and observe the update.

Tell me what changed on the screen.

Exactly.
You just used your first **dynamic value inside JSX**.

React re-renders the UI using JavaScript values automatically.

You learned three important concepts already:

* Components
* JSX
* Dynamic rendering with `{}`

# Step 6 — Create Your First Real Component

Create a new file:

```txt
src/components/Header.jsx
```

Now add this code:

```jsx id="k3abwp"
function Header() {
  return (
    <header>
      <h1>CulturaDev</h1>
    </header>
  )
}

export default Header
```

Now update `App.jsx`:

```jsx id="dnl5ak"
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <p>Learning React step by step</p>
    </div>
  )
}

export default App
```

This is your first reusable React component.

Tell me when it works.

# Step 7 — Understand Props

Props are how components receive data.

Update your `Header.jsx`:

```jsx id="qjvf5r"
function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

export default Header
```

Now update `App.jsx`:

```jsx id="uzw4x8"
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header title="CulturaDev" />
      <p>Learning React step by step</p>
    </div>
  )
}

export default App
```

You just passed data from a parent component (`App`) to a child component (`Header`).

This is one of the core foundations of React.

Tell me what appears on the screen now.

Perfect.

Now you understand:

* Components
* JSX
* Dynamic rendering
* Props
* Parent → child communication

# Step 8 — Learn State with `useState`

State allows a component to store and update data dynamically.

Update `App.jsx` to this:

```jsx id="2h0l9r"
import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }

  return (
    <div>
      <Header title="CulturaDev" />

      <p>Counter: {count}</p>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  )
}

export default App
```

Important concepts here:

```jsx id="c4cxn0"
const [count, setCount] = useState(0)
```

* `count` → current state value
* `setCount` → function to update state
* `0` → initial value

And this:

```jsx id="qwtpr2"
onClick={increase}
```

React listens for browser events and executes your function.

Now click the button multiple times and observe what happens.

---

## Deep Dive: Understanding Array Destructuring in `useState`

The line:

```jsx
const [count, setCount] = useState(0)
```

uses a JavaScript feature called **array destructuring**. This is critical to understanding how React hooks work.

### What is Array Destructuring?

Array destructuring is a JavaScript syntax that lets you unpack values from arrays into separate variables.

**Without destructuring:**

```javascript
const numbers = [1, 2, 3]
const first = numbers[0]   // 1
const second = numbers[1]  // 2
const third = numbers[2]   // 3
```

**With destructuring:**

```javascript
const numbers = [1, 2, 3]
const [first, second, third] = numbers
// first = 1, second = 2, third = 3
```

Same result, cleaner syntax.

### How `useState` Uses Array Destructuring

React's `useState` hook **returns an array with exactly 2 elements**:

1. The current state value
2. A function to update that state

**What actually happens:**

```javascript
// useState internally returns an array like this:
useState(0)  // returns: [0, function]

// We destructure that array:
const [count, setCount] = useState(0)

// Which is equivalent to:
const stateArray = useState(0)
const count = stateArray[0]      // current value
const setCount = stateArray[1]   // updater function
```

### Example Without Destructuring (to see what's happening)

```jsx
function App() {
  // Without destructuring - using the array directly
  const countState = useState(0)
  const count = countState[0]
  const setCount = countState[1]

  function increase() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  )
}
```

This works the same way, but it's more verbose.

### With Destructuring (React's preferred way)

```jsx
function App() {
  // With destructuring - clean and concise
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  )
}
```

Much cleaner!

### Why React Uses This Pattern

React uses array destructuring because:

1. **You can name variables whatever you want**

```jsx
const [count, setCount] = useState(0)
const [name, setName] = useState('')
const [isOpen, setIsOpen] = useState(false)
const [users, setUsers] = useState([])
```

Notice: the variable names are up to you, but the pattern is always `[value, setValue]`.

2. **It's consistent across all state declarations**

Every `useState` call returns an array with the same structure:
- Position 0: current value
- Position 1: update function

3. **It's concise**

Compare these approaches:

```jsx
// Without destructuring (verbose)
const countState = useState(0)
const count = countState[0]
const setCount = countState[1]

// With destructuring (concise)
const [count, setCount] = useState(0)
```

### More Examples to Solidify Understanding

**Multiple state variables:**

```jsx
function UserProfile() {
  // Each useState returns an array that we destructure
  const [name, setName] = useState('John')
  const [age, setAge] = useState(28)
  const [email, setEmail] = useState('')
  
  // Internally, React does:
  // useState('John')  → ['John', functionToUpdateName]
  // useState(28)      → [28, functionToUpdateAge]
  // useState('')      → ['', functionToUpdateEmail]
  
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  )
}
```

**Different data types:**

```jsx
function App() {
  const [count, setCount] = useState(0)                    // number
  const [text, setText] = useState('')                     // string
  const [isActive, setIsActive] = useState(false)          // boolean
  const [items, setItems] = useState([])                   // array
  const [user, setUser] = useState({ name: 'John' })       // object
  const [data, setData] = useState(null)                   // null
  
  // All follow the same pattern: [currentValue, updateFunction]
}
```

### Understanding the Naming Convention

By convention, React developers always name the updater function with `set` prefix:

```jsx
const [count, setCount] = useState(0)
const [name, setName] = useState('')
const [isOpen, setIsOpen] = useState(false)
```

**You could name them differently, but don't:**

```jsx
// ❌ Works but breaks convention
const [count, updateCount] = useState(0)
const [count, changeCount] = useState(0)
const [count, handleCount] = useState(0)

// ✅ Standard React convention
const [count, setCount] = useState(0)
```

### Visual Breakdown

```jsx
const [count, setCount] = useState(0)
       │       │           │         │
       │       │           │         └─ Initial value
       │       │           └─────────── Hook that returns array
       │       └─────────────────────── Function to update state
       └─────────────────────────────── Current state value
```

### Key Takeaway

When you see:

```jsx
const [count, setCount] = useState(0)
```

Remember:

1. `useState(0)` **returns an array**: `[0, function]`
2. **Array destructuring** unpacks that array into two variables
3. `count` gets the value from position `[0]` → current state
4. `setCount` gets the function from position `[1]` → state updater
5. `0` is the **initial value** passed to `useState`

This pattern is used in **every single React hook** and is fundamental to modern React development.

---

# Step 9 — Understand Re-rendering

Every time state changes, React re-renders the component automatically.

Right now, this line:

```jsx id="c7vhqd"
setCount(count + 1)
```

updates the state.

When state changes:

1. React executes the component again
2. Generates a new virtual UI
3. Updates only what changed in the browser DOM

That’s one of the main reasons React is powerful.

Now improve your counter.

Replace your `increase` function with this:

```jsx id="hj7gka"
function increase() {
  setCount((previousCount) => previousCount + 1)
}
```

This is called a **functional state update**.

It’s safer because React may batch state updates internally.

This pattern is extremely common in real React applications.

Test the button again.

---

## Deep Dive: How React Updates the UI Efficiently

### The Problem React Solves

Directly manipulating the browser's DOM is **slow** and **expensive**. 

**Traditional approach (without React):**

```javascript
// Every change requires direct DOM manipulation
document.getElementById('counter').textContent = count
document.querySelector('.user-name').textContent = userName
document.querySelector('.status').style.color = isActive ? 'green' : 'red'
```

Problems with this approach:
- Manually tracking every element that needs updates
- Every DOM operation causes browser reflows/repaints
- Hard to optimize
- Easy to create performance bottlenecks
- Difficult to maintain as apps grow

### React's Solution: Virtual DOM + Reconciliation

React uses a two-step process to update the UI efficiently:

1. **Virtual DOM** - A lightweight JavaScript representation of the UI
2. **Reconciliation** - Smart comparison algorithm to find minimal changes

### What is the Virtual DOM?

The Virtual DOM is just a **JavaScript object** that describes your UI structure.

**Real DOM:**
```html
<div id="root">
  <h1>Counter: 5</h1>
  <button>Click me</button>
</div>
```

**Virtual DOM (simplified representation):**
```javascript
{
  type: 'div',
  props: { id: 'root' },
  children: [
    {
      type: 'h1',
      props: {},
      children: 'Counter: 5'
    },
    {
      type: 'button',
      props: {},
      children: 'Click me'
    }
  ]
}
```

Creating and comparing JavaScript objects is **thousands of times faster** than manipulating the real DOM.

### The Reconciliation Process

**Reconciliation** is React's algorithm for comparing two Virtual DOM trees and determining what actually changed.

**Here's the complete flow:**

```txt
1. User clicks button
   ↓
2. State updates (count: 5 → 6)
   ↓
3. React calls your component function again
   ↓
4. Component returns NEW JSX
   ↓
5. React creates NEW Virtual DOM tree
   ↓
6. React COMPARES new Virtual DOM with previous Virtual DOM
   (This comparison is called RECONCILIATION)
   ↓
7. React identifies ONLY what changed
   ↓
8. React updates ONLY those parts in the real DOM
   ↓
9. Browser displays the update
```

### Example: Step-by-Step Reconciliation

Let's see exactly what happens when you click a counter button.

**Initial render:**

```jsx
function App() {
  const [count, setCount] = useState(5)
  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <p>Keep clicking!</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
```

**Virtual DOM snapshot (count = 5):**

```javascript
{
  type: 'div',
  children: [
    { type: 'h1', children: 'Counter: 5' },
    { type: 'p', children: 'Keep clicking!' },
    { type: 'button', children: 'Increment' }
  ]
}
```

**User clicks button → count becomes 6**

**New Virtual DOM snapshot (count = 6):**

```javascript
{
  type: 'div',
  children: [
    { type: 'h1', children: 'Counter: 6' },      // ← CHANGED!
    { type: 'p', children: 'Keep clicking!' },   // ← same
    { type: 'button', children: 'Increment' }    // ← same
  ]
}
```

**React's reconciliation process:**

```txt
Comparing old Virtual DOM vs new Virtual DOM:

<div>                    <div>
  ✓ Same type            ✓ Same type
  Compare children...

  <h1>Counter: 5</h1>    <h1>Counter: 6</h1>
  ✓ Same type            ✓ Same type
  ❌ Content changed!    → MARK FOR UPDATE

  <p>Keep clicking!</p>  <p>Keep clicking!</p>
  ✓ Same type            ✓ Same type
  ✓ Same content         → NO UPDATE NEEDED

  <button>...</button>   <button>...</button>
  ✓ Same type            ✓ Same type
  ✓ Same content         → NO UPDATE NEEDED
```

**Result:**
React updates **ONLY** the text inside the `<h1>` element. Everything else stays untouched.

**Actual DOM operation:**
```javascript
// React does something like this internally:
document.querySelector('h1').textContent = 'Counter: 6'
```

Instead of:
```javascript
// What you'd do without React (recreating everything):
document.getElementById('root').innerHTML = `
  <div>
    <h1>Counter: 6</h1>
    <p>Keep clicking!</p>
    <button>Increment</button>
  </div>
`
```

### Why This is Faster

**Without Virtual DOM (direct manipulation):**
- Update entire section → browser recalculates layout → repaints entire area
- Cost: **HIGH**

**With Virtual DOM + Reconciliation:**
- Compare JavaScript objects (cheap)
- Find minimal difference
- Update only 1 text node
- Browser repaints only that small area
- Cost: **LOW**

### Real-World Example: Todo List

Imagine a todo list with 100 items. You mark one todo as complete.

**Without React:**
```javascript
// Recreate the entire list
todoListElement.innerHTML = todos.map(todo => `
  <li class="${todo.completed ? 'done' : ''}">
    ${todo.text}
  </li>
`).join('')

// Result: 100 DOM elements destroyed and recreated
```

**With React:**

```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'done' : ''}>
          {todo.text}
        </li>
      ))}
    </ul>
  )
}

// When todo #42 is marked complete:
// 1. React creates new Virtual DOM
// 2. Compares with previous Virtual DOM
// 3. Finds: "Only item #42's className changed"
// 4. Updates ONLY that one element's class
// Result: 99 elements untouched, 1 element updated
```

### The Diffing Algorithm

React's reconciliation uses a smart **diffing algorithm** with these rules:

#### Rule 1: Different Element Types → Full Rebuild

```jsx
// Before:
<div>Content</div>

// After:
<span>Content</span>

// React's decision:
// Element type changed (div → span)
// → Destroy old <div> and create new <span>
```

#### Rule 2: Same Element Type → Update Props

```jsx
// Before:
<div className="old" title="Hello">Content</div>

// After:
<div className="new" title="Hello">Content</div>

// React's decision:
// Same element type (div)
// → Keep element, update only className attribute
```

#### Rule 3: Children Comparison with Keys

This is why `key` prop is so important!

**Without keys (inefficient):**

```jsx
// Before:
<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>

// After (added item at start):
<ul>
  <li>New Item</li>
  <li>Item A</li>
  <li>Item B</li>
</ul>

// React without keys:
// "Position 0 changed: update A → New Item"
// "Position 1 changed: update B → A"
// "Position 2 is new: create B"
// Result: 2 updates + 1 create (inefficient!)
```

**With keys (efficient):**

```jsx
// Before:
<ul>
  <li key="a">Item A</li>
  <li key="b">Item B</li>
</ul>

// After:
<ul>
  <li key="new">New Item</li>
  <li key="a">Item A</li>
  <li key="b">Item B</li>
</ul>

// React with keys:
// "key='new' is new: create it"
// "key='a' exists: keep it (just moved)"
// "key='b' exists: keep it (just moved)"
// Result: 1 create + 2 moves (efficient!)
```

### Visualizing the Performance Difference

**Example: Updating a dashboard with 1000 data points**

**Traditional approach (full re-render):**
```txt
Time: 250ms
Operations: Destroy 1000 elements, create 1000 new elements
Browser: Full layout recalculation + full repaint
```

**React approach (with reconciliation):**
```txt
Time: 16ms
Operations: Update 10 changed elements, keep 990 untouched
Browser: Minimal layout recalculation + small repaint
Result: 15x faster
```

### What Triggers Reconciliation?

React re-runs reconciliation when:

1. **State changes** (`useState`, `useReducer`)
2. **Props change** (parent passed new data)
3. **Parent component re-renders**
4. **Context value changes** (using `useContext`)

### Key Takeaways

**What is Virtual DOM?**
- Lightweight JavaScript object representing your UI
- Cheap to create and compare

**What is Reconciliation?**
- React's algorithm for comparing Virtual DOM trees
- Identifies minimal set of changes needed
- Only updates what actually changed in real DOM

**Why it's efficient:**
- Comparing JavaScript objects is fast
- Batch updates intelligently
- Minimize expensive DOM operations
- Only repaint necessary parts of the screen

**The complete flow:**
```txt
State update
  ↓
New Virtual DOM created
  ↓
Reconciliation (compare old vs new)
  ↓
Generate minimal change list
  ↓
Apply only necessary DOM updates
  ↓
Browser repaints changed areas only
```

**Mental model:**

Think of React as a smart developer who:
1. Listens to all your UI change requests
2. Batches them together
3. Calculates the most efficient way to update the screen
4. Applies only the minimum necessary changes

This is why React can handle complex UIs with thousands of components and still feel fast and responsive.

---

# Step 10 — Learn `useEffect`

`useEffect` lets you run code when something happens in the component lifecycle.

Common uses:

* API calls
* Fetching data
* Timers
* Event listeners
* Syncing with external systems

Update your `App.jsx`:

```jsx id="u4nq1v"
import { useEffect, useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Component rendered or count changed')
  }, [count])

  function increase() {
    setCount((previousCount) => previousCount + 1)
  }

  return (
    <div>
      <Header title="CulturaDev" />

      <p>Counter: {count}</p>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  )
}

export default App
```

Now open the browser DevTools console.

Every time you click the button, you’ll see:

```txt id="fklb8d"
Component rendered or count changed
```

Important:

```jsx id="43zw63"
[count]
```

This is the **dependency array**.

It means:

> “Run this effect whenever `count` changes.”

This is one of the most fundamental hooks in React.

# Step 11 — Understand the Component Lifecycle

Your component goes through phases:

1. Mount → component appears on screen
2. Update → state/props change
3. Unmount → component disappears

`useEffect` can react to these phases.

Replace your effect with this:

```jsx id="ttv0e1"
useEffect(() => {
  console.log('Component mounted')

  return () => {
    console.log('Component unmounted')
  }
}, [])
```

Important parts:

```jsx id="h9v5vt"
[]
```

An empty dependency array means:

> “Run only once when the component mounts.”

---

And this:

```jsx id="5p9l98"
return () => {
  console.log('Component unmounted')
}
```

is called a **cleanup function**.

React executes it when the component is removed from the screen.

Cleanup functions are very important for:

* Timers
* WebSockets
* Event listeners
* Subscriptions
* Preventing memory leaks

You’ll use this constantly in real frontend applications.

---

## Deep Dive: Understanding Side Effects in React

### What Are Side Effects?

In programming, a **side effect** is any operation that affects something **outside the scope of the current function**. 

In React components, side effects are operations that:
- Interact with the outside world
- Change something beyond the component's return value
- Have effects that persist beyond the function execution

**Pure function (no side effects):**
```javascript
function add(a, b) {
  return a + b  // Only returns a value, changes nothing else
}
```

**Function with side effects:**
```javascript
function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user))  // Side effect: changes localStorage
  fetch('/api/users', { method: 'POST', body: JSON.stringify(user) })  // Side effect: network request
  document.title = `User: ${user.name}`  // Side effect: changes browser title
}
```

### Why `useEffect` Exists

React components should be **pure functions** in their render logic. They should:
- Take props and state as input
- Return JSX as output
- Not cause side effects during rendering

But real applications **need** side effects! That's why `useEffect` exists - it gives you a safe place to run side effects **after** rendering.

### Common Types of Side Effects

#### 1. Data Fetching (API Calls)

**Most common use case** - fetching data from a server.

```jsx
import { useEffect, useState } from 'react'

function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Side effect: fetch data from API
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching user:', error)
        setLoading(false)
      })
  }, [userId])  // Re-fetch when userId changes

  if (loading) return <p>Loading...</p>
  return <div>{user?.name}</div>
}
```

**Why it's a side effect:** Makes a network request to an external server.

#### 2. Timers and Intervals

**Use case** - countdown timers, auto-refresh, animations.

```jsx
import { useEffect, useState } from 'react'

function Countdown() {
  const [seconds, setSeconds] = useState(10)

  useEffect(() => {
    // Side effect: create a timer
    const timerId = setInterval(() => {
      setSeconds(prev => prev - 1)
    }, 1000)

    // Cleanup: stop the timer when component unmounts
    return () => {
      clearInterval(timerId)
    }
  }, [])

  return <div>Time remaining: {seconds}s</div>
}
```

**Why it's a side effect:** Creates a timer that runs outside React's control.

**Real-world example:**
```jsx
function AutoRefreshDashboard() {
  const [data, setData] = useState([])

  useEffect(() => {
    // Fetch data immediately
    fetchDashboardData()

    // Side effect: refresh every 30 seconds
    const intervalId = setInterval(() => {
      fetchDashboardData()
    }, 30000)

    return () => clearInterval(intervalId)
  }, [])

  function fetchDashboardData() {
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(setData)
  }

  return <div>{/* render dashboard */}</div>
}
```

#### 3. DOM Manipulation

**Use case** - accessing/modifying the browser DOM directly.

```jsx
import { useEffect, useRef } from 'react'

function FocusInput() {
  const inputRef = useRef(null)

  useEffect(() => {
    // Side effect: focus the input element
    inputRef.current.focus()
  }, [])

  return <input ref={inputRef} type="text" />
}
```

**Real-world example - document title:**
```jsx
function ProductPage({ productName }) {
  useEffect(() => {
    // Side effect: change browser tab title
    const originalTitle = document.title
    document.title = `${productName} - My Store`

    // Cleanup: restore original title
    return () => {
      document.title = originalTitle
    }
  }, [productName])

  return <div>{/* product details */}</div>
}
```

#### 4. localStorage / sessionStorage

**Use case** - persisting data in browser storage.

```jsx
import { useEffect, useState } from 'react'

function ThemeSelector() {
  const [theme, setTheme] = useState('light')

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    // Side effect: write to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  )
}
```

**Why it's a side effect:** Modifies browser storage, which persists beyond component lifetime.

#### 5. Subscriptions (WebSockets, Event Listeners)

**Use case** - real-time data, browser events.

```jsx
import { useEffect, useState } from 'react'

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    // Side effect: subscribe to window resize events
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup: unsubscribe when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <div>Window width: {width}px</div>
}
```

**WebSocket example:**
```jsx
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    // Side effect: connect to WebSocket
    const ws = new WebSocket(`wss://chat.example.com/room/${roomId}`)

    ws.onmessage = (event) => {
      setMessages(prev => [...prev, JSON.parse(event.data)])
    }

    // Cleanup: close connection
    return () => {
      ws.close()
    }
  }, [roomId])

  return <div>{/* render messages */}</div>
}
```

#### 6. Analytics and Tracking

**Use case** - tracking page views, user behavior.

```jsx
function ProductPage({ productId }) {
  useEffect(() => {
    // Side effect: send analytics event
    window.gtag('event', 'page_view', {
      page_path: `/product/${productId}`
    })
  }, [productId])

  return <div>{/* product content */}</div>
}
```

#### 7. Third-Party Library Initialization

**Use case** - integrating external libraries.

```jsx
import { useEffect, useRef } from 'react'

function MapComponent({ latitude, longitude }) {
  const mapRef = useRef(null)

  useEffect(() => {
    // Side effect: initialize Google Maps
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: latitude, lng: longitude },
      zoom: 12
    })

    // Cleanup if needed
    return () => {
      // Destroy map instance
      map = null
    }
  }, [latitude, longitude])

  return <div ref={mapRef} style={{ height: '400px' }} />
}
```

### Side Effects You Should NOT Do During Render

❌ **Never do these directly in the component body:**

```jsx
// ❌ BAD - side effect during render
function BadComponent() {
  fetch('/api/data')  // DON'T DO THIS
  localStorage.setItem('key', 'value')  // DON'T DO THIS
  document.title = 'New Title'  // DON'T DO THIS

  return <div>Hello</div>
}

// ✅ GOOD - side effects in useEffect
function GoodComponent() {
  useEffect(() => {
    fetch('/api/data')
    localStorage.setItem('key', 'value')
    document.title = 'New Title'
  }, [])

  return <div>Hello</div>
}
```

### Complete Real-World Example

Here's a component that uses multiple types of side effects:

```jsx
import { useEffect, useState } from 'react'

function UserDashboard({ userId }) {
  const [user, setUser] = useState(null)
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  // Side effect 1: Fetch user data
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(setUser)
  }, [userId])

  // Side effect 2: Update document title
  useEffect(() => {
    if (user) {
      document.title = `${user.name} - Dashboard`
    }
  }, [user])

  // Side effect 3: Track online/offline status
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true)
    }

    function handleOffline() {
      setIsOnline(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  // Side effect 4: Save last visited time
  useEffect(() => {
    const now = new Date().toISOString()
    localStorage.setItem(`lastVisit_${userId}`, now)
  }, [userId])

  // Side effect 5: Analytics
  useEffect(() => {
    window.gtag('event', 'dashboard_view', {
      user_id: userId
    })
  }, [userId])

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</p>
    </div>
  )
}
```

### Key Takeaways

**What are side effects?**
- Data fetching (API calls)
- Subscriptions (WebSockets, event listeners)
- Timers (setTimeout, setInterval)
- DOM manipulation (changing document.title, focus, etc.)
- Browser storage (localStorage, sessionStorage)
- Analytics tracking
- Third-party library initialization

**When to use `useEffect`:**
- When you need to synchronize with external systems
- When you need to perform operations after rendering
- When you need cleanup on unmount or dependency changes

**The pattern:**
```jsx
useEffect(() => {
  // 1. Perform side effect
  
  return () => {
    // 2. Clean up (optional)
  }
}, [dependencies])  // 3. Specify when to re-run
```

Understanding side effects is crucial because **most real React applications are full of them** - fetching data, tracking events, managing timers, and integrating with external services are all essential parts of modern web development.

# Step 12 — Conditional Rendering

In React, you can render UI conditionally using normal JavaScript.

Update your `App.jsx`:

```jsx id="9q3h4x"
import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount((previousCount) => previousCount + 1)
  }

  return (
    <div>
      <Header title="CulturaDev" />

      <p>Counter: {count}</p>

      <button onClick={increase}>
        Increase
      </button>

      {count >= 5 && (
        <p>You reached 5 clicks!</p>
      )}
    </div>
  )
}

export default App
```

Important concept:

```jsx id="o6y2az"
count >= 5 && <p>You reached 5 clicks!</p>
```

This means:

> “If the condition is true, render the component.”

This pattern is extremely common in React:

* Loading states
* Authentication
* Error messages
* Feature toggles
* Permissions
* Modals
* Notifications

Click the button until the message appears.

# Step 13 — Rendering Lists with `map()`

Rendering lists is one of the most common things in React.

Update your `App.jsx`:

```jsx id="l2k1nm"
import Header from './components/Header'

function App() {
  const technologies = [
    'React',
    'Node.js',
    'TypeScript',
    'AWS'
  ]

  return (
    <div>
      <Header title="CulturaDev" />

      <h2>Technologies</h2>

      <ul>
        {technologies.map((tech) => (
          <li key={tech}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
```

Important concept:

```jsx id="s7m2vr"
technologies.map(...)
```

`map()` transforms arrays into UI.

React will render one `<li>` for each item.

---

Now this part is VERY important:

```jsx id="5g4yhf"
key={tech}
```

React uses `key` to identify elements efficiently during re-rendering.

Keys help React know:

* what changed
* what moved
* what was removed

Without keys, React performance and UI consistency can break.

In real applications, keys usually come from database IDs:

```jsx id="f8c2jk"
key={user.id}
```

This pattern is fundamental for:

* tables
* dashboards
* feeds
* APIs
* dynamic UI
* rendering backend data

# Step 14 — Handling Forms

Forms are everywhere in frontend applications.

Now you’ll learn how React controls input values.

Update your `App.jsx`:

```jsx id="r4x8qn"
import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [name, setName] = useState('')

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <Header title="CulturaDev" />

      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={handleChange}
      />

      <p>Hello {name}</p>
    </div>
  )
}

export default App
```

Important concepts:

```jsx id="a6c4pq"
value={name}
```

React controls the input value through state.

This is called a:

> **Controlled Component**

---

And this:

```jsx id="yw9l2h"
onChange={handleChange}
```

listens to every input change.

---

Then:

```jsx id="x2g7ra"
event.target.value
```

gets the current input text.

---

Flow:

```txt id="fz2t0r"
User types
↓
onChange fires
↓
setName updates state
↓
React re-renders
↓
Input/UI updates
```

This is the foundation for:

* Login forms
* Search bars
* Validation
* Filters
* Registration pages
* Complex form libraries like React Hook Form or Formik

# Step 15 — Multiple States

Real applications usually manage multiple pieces of state.

Update your component:

```jsx id="1wt2kj"
import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  return (
    <div>
      <Header title="CulturaDev" />

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />

      <h2>User Info</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default App
```

Now you have two independent states:

```jsx id="7u8c4x"
const [name, setName] = useState('')
const [age, setAge] = useState('')
```

Each state update causes a re-render.

---

Notice this syntax:

```jsx id="sn8r2p"
(event) => setName(event.target.value)
```

This is an **arrow function inline handler**.

Very common in React.

---

At this point you already know core React fundamentals:

* Components
* JSX
* Props
* State
* Events
* Effects
* Conditional rendering
* Lists
* Forms
* Controlled inputs

You now have the foundation necessary to start understanding more advanced React architecture.

# Step 16 — Component Composition

Now you’ll start thinking like a real React developer.

Instead of putting everything inside `App.jsx`, we split responsibilities into reusable components.

Create a new file:

```txt id="l5q3xn"
src/components/UserCard.jsx
```

Add this:

```jsx id="m8v2qa"
function UserCard({ name, age }) {
  return (
    <div>
      <h3>User Card</h3>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default UserCard
```

Now update `App.jsx`:

```jsx id="u3k6pl"
import { useState } from 'react'
import Header from './components/Header'
import UserCard from './components/UserCard'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  return (
    <div>
      <Header title="CulturaDev" />

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />

      <UserCard
        name={name}
        age={age}
      />
    </div>
  )
}

export default App
```

Important concept:

```jsx id="v6p4rt"
<UserCard name={name} age={age} />
```

This is called:

> Component Composition

Small reusable components combine to build complex applications.

This is one of the biggest architectural ideas in React.

Large applications are basically trees of components communicating through props and state.

# Step 17 — `children` Props

One of the most powerful React patterns is `children`.

React components can wrap other components or UI.

Update `UserCard.jsx`:

```jsx id="j7n2qa"
function UserCard({ name, age, children }) {
  return (
    <div>
      <h3>User Card</h3>

      <p>Name: {name}</p>
      <p>Age: {age}</p>

      {children}
    </div>
  )
}

export default UserCard
```

Now update `App.jsx`:

```jsx id="n5k8tb"
<UserCard
  name={name}
  age={age}
>
  <button>Send Message</button>
</UserCard>
```

Important concept:

Anything between:

```jsx id="v2c7xp"
<UserCard>
  ...
</UserCard>
```

becomes:

```jsx id="m4z9ra"
children
```

inside the component.

---

This pattern is used everywhere in React ecosystems:

* Layout components
* Modals
* Cards
* Dialogs
* Page wrappers
* Design systems
* UI libraries

For example:

```jsx id="c9w3ps"
<Card>
  <Profile />
</Card>
```

The `Card` component doesn’t know what content it will receive.

It simply renders:

```jsx id="g8r5na"
{children}
```

This creates highly reusable UI architectures.

# Step 18 — Lifting State Up

This is one of the most important React architecture concepts.

In React:

> State usually lives in the closest common parent component.

Right now:

* `App` owns the state
* `UserCard` only receives data via props

This is intentional.

---

Imagine this:

```txt id="u9t3ra"
App
├── Header
├── Form
└── UserCard
```

If both `Form` and `UserCard` need the same data, the state should live in:

```txt id="kh2v1m"
App
```

Then App shares the data through props.

This pattern is called:

> Lifting State Up

---

Now let’s practice it properly.

Create a new component:

```txt id="r5y8xn"
src/components/UserForm.jsx
```

Add this:

```jsx id="d8f2pl"
function UserForm({
  name,
  age,
  setName,
  setAge
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
    </div>
  )
}

export default UserForm
```

Now update `App.jsx`:

```jsx id="y3v7ka"
import { useState } from 'react'
import Header from './components/Header'
import UserCard from './components/UserCard'
import UserForm from './components/UserForm'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  return (
    <div>
      <Header title="CulturaDev" />

      <UserForm
        name={name}
        age={age}
        setName={setName}
        setAge={setAge}
      />

      <UserCard
        name={name}
        age={age}
      >
        <button>Send Message</button>
      </UserCard>
    </div>
  )
}

export default App
```

Now:

* `UserForm` changes the state
* `UserCard` reads the state
* `App` owns the state

This architecture is extremely common in real-world React applications.

# Step 19 — `useMemo` and React Rendering Optimization

Now you’ll learn an important performance concept.

In React, components re-render frequently.

Sometimes calculations become expensive.

`useMemo` lets React cache computed values.

Update `App.jsx`:

```jsx id="a7p4zk"
import { useMemo, useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...')

    return count * 1000
  }, [count])

  return (
    <div>
      <Header title="CulturaDev" />

      <p>Count: {count}</p>

      <p>Calculated Value: {expensiveCalculation}</p>

      <button
        onClick={() =>
          setCount((prev) => prev + 1)
        }
      >
        Increase
      </button>

      <button
        onClick={() =>
          setDarkMode((prev) => !prev)
        }
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default App
```

Important concept:

```jsx id="u8f3qa"
useMemo(() => {
  return count * 1000
}, [count])
```

React stores the calculated value and only recalculates when:

```jsx id="q2m7vs"
[count]
```

changes.

---

Test this carefully:

1. Click `Increase`
2. Watch console log
3. Click `Toggle Theme`
4. Watch console again

You’ll notice:

```txt id="h5t9xn"
Calculating...
```

does NOT run when only `darkMode` changes.

That’s memoization.

---

This becomes important for:

* Large lists
* Filtering
* Sorting
* Expensive computations
* Derived state
* Performance optimization

Modern React performance is largely about controlling unnecessary re-renders.

A very realistic `useMemo` example is filtering a large list.

Without `useMemo`, the filter runs on every render.

---

Example WITHOUT optimization:

```jsx id="m7x2qp"
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const users = [
    'John',
    'Maria',
    'Pedro',
    'Ana',
    'Carlos'
  ]

  console.log('Filtering users...')

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={() =>
          setDarkMode((prev) => !prev)
        }
      >
        Toggle Theme
      </button>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
```

Problem:

Even clicking:

```txt id="r5m8tn"
Toggle Theme
```

runs:

```txt id="n2k4qa"
Filtering users...
```

again.

Why?

Because the component re-rendered.

---

Now optimized with `useMemo`:

```jsx id="p9v3lk"
import { useMemo, useState } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const users = [
    'John',
    'Maria',
    'Pedro',
    'Ana',
    'Carlos'
  ]

  const filteredUsers = useMemo(() => {
    console.log('Filtering users...')

    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <div>
      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={() =>
          setDarkMode((prev) => !prev)
        }
      >
        Toggle Theme
      </button>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
```

Now the filtering only runs when:

```jsx id="z4q8rt"
[search]
```

changes.

NOT when:

* theme changes
* modal opens
* unrelated state updates
* parent re-renders

---

This is a VERY common real-world optimization pattern.

Especially with:

* tables
* dashboards
* data grids
* API data
* search systems
* analytics pages

---

Important:

Do NOT overuse `useMemo`.

`useMemo` itself has a cost.

Use it when:

* the calculation is expensive
* the list is large
* re-renders are frequent
* profiling shows bottlenecks

Experienced React developers use memoization strategically, not everywhere.

---

# Deep Dive: Understanding Curly Braces `{}` in JSX

One of the most fundamental concepts in React is understanding **when and why** to use curly braces `{}` in JSX.

## What Are Curly Braces For?

Curly braces are your **escape hatch from JSX back into JavaScript**. They tell React:

> "Stop treating this as markup text - evaluate this as JavaScript and insert the result here."

## The Core Rule

```jsx
<div>This is text</div>           // Regular text/markup
<div>{expression}</div>            // JavaScript expression
```

**Inside `{}`**, you can use:
- Variables
- Expressions
- Function calls
- Math operations
- Ternary operators
- Logical operators
- Array methods

**You CANNOT use** inside `{}`:
- `if/else` statements (use ternary instead)
- `for` loops (use `.map()` instead)
- Variable declarations with `let/const`

## Examples by Use Case

### 1. Rendering Variables

```jsx
function App() {
  const name = 'Clesio'
  const age = 28
  const city = 'São Paulo'
  
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>You are {age} years old</p>
      <p>Living in {city}</p>
    </div>
  )
}
```

**Without curly braces**, React would render the literal text `"name"`, not its value.

### 2. Math & Expressions

```jsx
function Calculator() {
  const price = 100
  const tax = 0.15
  
  return (
    <div>
      <p>Price: ${price}</p>
      <p>Tax: ${price * tax}</p>
      <p>Total: ${price + (price * tax)}</p>
      <p>Discount: ${price * 0.9}</p>
    </div>
  )
}
```

Any valid JavaScript expression can go inside `{}`.

### 3. Function Calls

```jsx
function Formatter() {
  const text = 'react'
  
  return (
    <div>
      <p>{text.toUpperCase()}</p>        {/* REACT */}
      <p>{text.length}</p>                {/* 5 */}
      <p>{Math.random()}</p>              {/* random number */}
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}
```

### 4. Conditional Rendering with Ternary Operator

```jsx
function Status({ isOnline }) {
  return (
    <div>
      <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
      <p>Color: {isOnline ? '🟢' : '🔴'}</p>
    </div>
  )
}
```

**Why not `if/else`?**

```jsx
// ❌ This DOESN'T work
<p>{if (isOnline) { 'Online' } else { 'Offline' }}</p>

// ✅ Use ternary instead
<p>{isOnline ? 'Online' : 'Offline'}</p>
```

### 5. Logical AND Operator `&&`

```jsx
function Notification({ hasMessages, messageCount }) {
  return (
    <div>
      <h1>Inbox</h1>
      {hasMessages && <p>You have new messages!</p>}
      {messageCount > 0 && <p>Messages: {messageCount}</p>}
      {messageCount > 10 && <span>📬</span>}
    </div>
  )
}
```

**How it works:**
- If the left side is `false`, nothing renders
- If the left side is `true`, the right side renders

### 6. Arrays and `.map()`

```jsx
function TodoList() {
  const tasks = ['Learn React', 'Build project', 'Deploy']
  
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  )
}
```

**Pattern:**
```jsx
{array.map(item => <Component key={item.id} data={item} />)}
```

### 7. Using Curly Braces in Attributes

Curly braces work in **JSX attributes** too:

```jsx
function Image() {
  const imageUrl = 'https://example.com/photo.jpg'
  const altText = 'Profile photo'
  const size = 200
  
  return (
    <img 
      src={imageUrl}           // ✅ Variable
      alt={altText}            // ✅ Variable
      width={size}             // ✅ Number
      height={size * 1.5}      // ✅ Expression
      className={size > 100 ? 'large' : 'small'}  // ✅ Conditional
    />
  )
}
```

**Important:** Numbers and booleans use curly braces:

```jsx
<input type="text" maxLength={50} disabled={true} />
```

Not:

```jsx
<input type="text" maxLength="50" disabled="true" />  // ❌ These are strings!
```

### 8. Object Properties

```jsx
function UserProfile() {
  const user = {
    name: 'Clesio',
    age: 28,
    email: 'clesio@example.com'
  }
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}
```

### 9. Template Strings Inside Curly Braces

```jsx
function Greeting({ firstName, lastName }) {
  return (
    <div>
      <h1>{`Welcome, ${firstName} ${lastName}!`}</h1>
      <p>{`Your username is: ${firstName.toLowerCase()}_${lastName.toLowerCase()}`}</p>
    </div>
  )
}
```

### 10. Inline Styles (Object in Curly Braces)

```jsx
function StyledBox() {
  const color = 'blue'
  
  return (
    <div style={{
      backgroundColor: color,
      padding: '20px',
      borderRadius: '8px',
      fontSize: '16px'
    }}>
      Styled content
    </div>
  )
}
```

**Why double curly braces `{{}}`?**
- Outer `{}` → "I'm entering JavaScript"
- Inner `{}` → "This is a JavaScript object"

## Common Mistakes

### ❌ Mistake 1: Forgetting Curly Braces

```jsx
<p>The count is count</p>          // Renders: "The count is count"
<p>The count is {count}</p>        // Renders: "The count is 5" ✅
```

### ❌ Mistake 2: Using Statements Instead of Expressions

```jsx
// ❌ WRONG
<div>
  {let x = 5}
  {if (x > 3) { <p>Big</p> }}
</div>

// ✅ CORRECT
<div>
  {(() => {
    const x = 5
    return x > 3 ? <p>Big</p> : <p>Small</p>
  })()}
</div>

// ✅ BETTER (simpler)
<div>
  {5 > 3 ? <p>Big</p> : <p>Small</p>}
</div>
```

### ❌ Mistake 3: Rendering Objects Directly

```jsx
const user = { name: 'Clesio', age: 28 }

// ❌ ERROR: Objects are not valid as a React child
<div>{user}</div>

// ✅ CORRECT: Access the property
<div>{user.name}</div>

// ✅ CORRECT: Convert to JSON string
<div>{JSON.stringify(user)}</div>
```

### ❌ Mistake 4: Confusing String Attributes with JavaScript Values

```jsx
// ❌ String - won't work as expected
<input maxLength="50" />

// ✅ Number via curly braces
<input maxLength={50} />

// ❌ String "true" is always truthy
<input disabled="false" />  // This is still disabled!

// ✅ Boolean
<input disabled={false} />
```

## Mental Model

Think of JSX as **two modes**:

```
JSX Mode (HTML-like)         JavaScript Mode
     ↓                             ↓
  <div>                          {  }
    <h1>                           ↓
      Text here              JavaScript goes here
    </h1>                          ↓
  </div>                     expressions, variables, calls
```

**The curly braces are the portal between these two modes.**

## Summary

| Use Case | Example |
|----------|---------|
| Variable | `<p>{name}</p>` |
| Expression | `<p>{10 + 5}</p>` |
| Function call | `<p>{getText()}</p>` |
| Ternary | `<p>{isActive ? 'Yes' : 'No'}</p>` |
| Logical AND | `{count > 0 && <p>Items</p>}` |
| Array map | `{items.map(item => <li key={item.id}>{item.name}</li>)}` |
| Attribute | `<img src={url} />` |
| Style object | `<div style={{ color: 'red' }}>Text</div>` |
| Object property | `<p>{user.name}</p>` |

**Key takeaway:** Curly braces `{}` allow you to **embed JavaScript expressions** into your JSX. They evaluate the JavaScript and insert the **result** into the rendered output.

This is what makes React components dynamic and powerful! 🚀


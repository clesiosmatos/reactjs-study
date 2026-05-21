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


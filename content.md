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

## Deep Dive: What Causes a React Component to Re-render?

Understanding **when and why** React re-renders components is fundamental to building performant applications and debugging unexpected behavior.

### The Four Re-render Triggers

A React component re-renders when **any of these four things happen**:

1. **Its own state changes** (`useState`, `useReducer`)
2. **Its props change** (parent passes new/different props)
3. **Its parent component re-renders** (children re-render by default)
4. **Context value changes** (`useContext` value updates)

Let's explore each trigger in detail with examples.

---

### Trigger 1: State Changes

**Most common trigger** - when a component's own state updates.

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
  console.log('Counter rendered')
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
```

**Flow:**
```
1. User clicks button
   ↓
2. setCount(count + 1) called
   ↓
3. State changes: count goes from 0 → 1
   ↓
4. React re-renders Counter component
   ↓
5. Console logs: "Counter rendered"
   ↓
6. UI updates to show new count
```

**Key point:** Every state update triggers a re-render of that component.

#### Multiple State Variables

Each state change causes a re-render:

```jsx
function UserForm() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  
  console.log('UserForm rendered')
  
  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)}  // Re-renders on every keystroke
      />
      <input 
        value={age} 
        onChange={(e) => setAge(e.target.value)}   // Re-renders on every keystroke
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} // Re-renders on every keystroke
      />
    </div>
  )
}
```

**What happens:** Every keystroke in any input triggers a re-render because state is changing.

---

### Trigger 2: Props Changes

When a **parent passes different props**, the child re-renders.

```jsx
function Parent() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <Child count={count} />  {/* Passing count as prop */}
    </div>
  )
}

function Child({ count }) {
  console.log('Child re-rendered because props changed')
  
  return <p>Count from parent: {count}</p>
}
```

**Flow:**
```
1. Parent's state changes (count: 0 → 1)
   ↓
2. Parent re-renders
   ↓
3. Parent passes NEW prop value to Child (count={1})
   ↓
4. React detects prop changed (0 → 1)
   ↓
5. Child re-renders
   ↓
6. Console logs: "Child re-rendered because props changed"
```

#### Important: React Compares Props

React uses **shallow comparison** to check if props changed:

```jsx
function Parent() {
  const [count, setCount] = useState(0)
  const userName = 'Clesio'  // This never changes
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Child name={userName} count={count} />
    </div>
  )
}

function Child({ name, count }) {
  console.log('Child rendered')
  console.log('name:', name)     // Always "Clesio"
  console.log('count:', count)   // Changes on each click
  
  return (
    <div>
      <p>Name: {name}</p>
      <p>Count: {count}</p>
    </div>
  )
}
```

**What happens:**
- Even though `name` doesn't change, `count` does
- Since at least one prop changed, Child re-renders
- React doesn't re-render just the "changed parts" of props - it re-renders the whole component

---

### Trigger 3: Parent Re-renders (The Surprising One!)

**Critical concept:** By default, when a parent re-renders, **all its children re-render too**, even if their props didn't change!

```jsx
function Parent() {
  const [count, setCount] = useState(0)
  
  console.log('Parent rendered')
  
  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Parent Count: {count}
      </button>
      
      {/* Child receives NO props */}
      <Child />
    </div>
  )
}

function Child() {
  console.log('Child rendered (even though it has no props!)')
  
  return (
    <div>
      <p>I'm a child component</p>
      <p>I have no props or state</p>
    </div>
  )
}
```

**Console output when you click the button:**
```
Parent rendered
Child rendered (even though it has no props!)
Parent rendered
Child rendered (even though it has no props!)
Parent rendered
Child rendered (even though it has no props!)
...
```

**Why does Child re-render?**
- Child has no props
- Child has no state
- But Parent re-rendered
- React's default behavior: re-render all children when parent re-renders

#### Real-World Example

```jsx
function Dashboard() {
  const [theme, setTheme] = useState('light')
  
  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      
      <Header />        {/* Re-renders when theme changes */}
      <Sidebar />       {/* Re-renders when theme changes */}
      <MainContent />   {/* Re-renders when theme changes */}
      <Footer />        {/* Re-renders when theme changes */}
    </div>
  )
}

function Header() {
  console.log('Header re-rendered')
  return <header>My App</header>
}

function Sidebar() {
  console.log('Sidebar re-rendered')
  return <aside>Sidebar</aside>
}

function MainContent() {
  console.log('MainContent re-rendered')
  return <main>Content here</main>
}

function Footer() {
  console.log('Footer re-rendered')
  return <footer>Footer</footer>
}
```

**Console output when you toggle theme:**
```
Header re-rendered
Sidebar re-rendered
MainContent re-rendered
Footer re-rendered
```

**All four components re-render** even though they don't use the `theme` state!

#### Why Does React Do This?

React assumes that if a parent re-renders, its children **might** need to re-render too. This is the **safe default** because:
- Components might depend on parent context even if not via props
- It's easier to reason about
- You can optimize later if needed

---

### Trigger 4: Context Value Changes

When using `useContext`, the component re-renders if the context value changes.

```jsx
import { createContext, useContext, useState } from 'react'

// 1. Create context
const UserContext = createContext()

function App() {
  const [user, setUser] = useState({ name: 'Clesio', age: 28 })
  
  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>App Component</h1>
        <button onClick={() => setUser({ name: 'Clesio', age: 29 })}>
          Increment Age
        </button>
        
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </UserContext.Provider>
  )
}

function ComponentA() {
  console.log('ComponentA rendered (not using context)')
  return <div>Component A</div>
}

function ComponentB() {
  const user = useContext(UserContext)  // ← Uses context
  console.log('ComponentB re-rendered because context changed')
  
  return <div>User: {user.name}, Age: {user.age}</div>
}

function ComponentC() {
  console.log('ComponentC rendered (not using context)')
  return <div>Component C</div>
}
```

**Console output when you click "Increment Age":**
```
ComponentA rendered (not using context)
ComponentB re-rendered because context changed
ComponentC rendered (not using context)
```

**What happened:**
- `user` state changes in App
- App re-renders (Trigger 1: state change)
- ComponentA, ComponentB, ComponentC all re-render (Trigger 3: parent re-renders)
- ComponentB **also** re-renders because it uses context (Trigger 4: context change)

#### Context Re-render Example

```jsx
const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')
  const [count, setCount] = useState(0)
  
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <button onClick={() => setCount(count + 1)}>
          Increment: {count}
        </button>
        
        <DeepChild />
      </div>
    </ThemeContext.Provider>
  )
}

function DeepChild() {
  const theme = useContext(ThemeContext)
  console.log('DeepChild re-rendered')
  
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333' }}>
      Current theme: {theme}
    </div>
  )
}
```

**Behavior:**
- Click "Toggle Theme" → DeepChild re-renders (context changed)
- Click "Increment" → DeepChild re-renders (parent re-rendered, even though context didn't change)

---

### Understanding Parent-Child Re-render Chains

Re-renders **cascade down** the component tree:

```jsx
function GrandParent() {
  const [count, setCount] = useState(0)
  console.log('GrandParent rendered')
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Parent />
    </div>
  )
}

function Parent() {
  console.log('Parent rendered')
  return (
    <div>
      <Child />
    </div>
  )
}

function Child() {
  console.log('Child rendered')
  return <div>I'm the child</div>
}
```

**Console output when you click the button:**
```
GrandParent rendered
Parent rendered
Child rendered
```

**The cascade:**
```
GrandParent state changes
   ↓
GrandParent re-renders
   ↓
Parent re-renders (parent re-rendered)
   ↓
Child re-renders (parent re-rendered)
```

Every component in the tree re-renders!

---

### What Does NOT Cause Re-renders

It's important to know what **doesn't** trigger re-renders:

#### 1. Changing Regular Variables

```jsx
function App() {
  let count = 0  // Regular variable, NOT state
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => {
        count = count + 1        // ❌ Doesn't re-render!
        console.log(count)       // Logs new value, but UI doesn't update
      }}>
        Increment
      </button>
    </div>
  )
}
```

**Why no re-render:** Regular variables are not tracked by React. Use `useState` instead.

#### 2. Mutating State Directly

```jsx
function App() {
  const [user, setUser] = useState({ name: 'Clesio', age: 28 })
  
  return (
    <div>
      <p>Age: {user.age}</p>
      <button onClick={() => {
        user.age = 29           // ❌ Mutating state directly - no re-render!
        console.log(user.age)   // Logs 29, but UI doesn't update
      }}>
        Increment Age (Wrong)
      </button>
      
      <button onClick={() => {
        setUser({ ...user, age: user.age + 1 })  // ✅ Correct - creates new object
      }}>
        Increment Age (Correct)
      </button>
    </div>
  )
}
```

**Why no re-render:** React uses **reference equality** to detect state changes. Mutating the object directly doesn't create a new reference.

#### 3. Setting State to the Same Value

```jsx
function App() {
  const [count, setCount] = useState(0)
  
  console.log('App rendered')
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(0)}>
        Set to 0
      </button>
    </div>
  )
}
```

**First click:** Re-renders (0 → 0, but React doesn't know it's the same until it checks)
**Second click:** No re-render (React detects the value hasn't changed)

React optimizes this with **Object.is()** comparison.

---

### Performance Implications

Understanding re-renders is crucial for performance:

```jsx
function SlowComponent() {
  console.log('SlowComponent rendering...')
  
  // Simulate expensive computation
  const expensiveResult = Array.from({ length: 100000 }, (_, i) => i * 2)
  
  return <div>Slow component result: {expensiveResult.length}</div>
}

function App() {
  const [theme, setTheme] = useState('light')
  
  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      
      <SlowComponent />  {/* Re-renders on every theme change! */}
    </div>
  )
}
```

**Problem:** `SlowComponent` re-renders even though it doesn't use `theme`. The expensive computation runs on every theme toggle.

**Solution options:**
1. Move SlowComponent outside (separate parent)
2. Use `React.memo()` to prevent unnecessary re-renders
3. Use `useMemo()` for expensive computations

---

### Optimization: React.memo

`React.memo` prevents re-renders when props haven't changed:

```jsx
import { memo } from 'react'

// Without memo - re-renders when parent re-renders
function ChildWithoutMemo() {
  console.log('ChildWithoutMemo rendered')
  return <div>Child without memo</div>
}

// With memo - only re-renders if props change
const ChildWithMemo = memo(function ChildWithMemo() {
  console.log('ChildWithMemo rendered')
  return <div>Child with memo</div>
})

function Parent() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Parent Count: {count}
      </button>
      
      <ChildWithoutMemo />
      <ChildWithMemo />
    </div>
  )
}
```

**Console output when you click the button:**
```
ChildWithoutMemo rendered  ← Re-renders every time
(ChildWithMemo doesn't log - it's skipped!)
```

`React.memo` tells React: "Only re-render this component if its props actually changed."

---

### Summary: The Four Re-render Triggers

| Trigger | Example | Can You Prevent It? |
|---------|---------|---------------------|
| **State changes** | `setState(newValue)` | No (this is expected behavior) |
| **Props change** | Parent passes new prop value | No (child needs the new value) |
| **Parent re-renders** | Parent's state/props changed | Yes (use `React.memo`) |
| **Context changes** | Context value updates | No (component needs new context value) |

### Mental Model

Think of re-renders like a **domino effect**:

```
State Change
   ↓
Component Re-renders
   ↓
All Children Re-render
   ↓
Their Children Re-render
   ↓
... and so on down the tree
```

**Key insight:** Re-renders cascade down, never up. Children can't cause parents to re-render (but they can call parent functions that update parent state).

### Debugging Re-renders

Use console.log to track re-renders:

```jsx
function Component() {
  console.log('Component rendered')
  // Rest of component
}
```

Or use React DevTools Profiler to visualize re-renders.

### When to Worry About Re-renders

**Don't optimize prematurely!** Re-renders are usually fast. Only optimize when:
- You have performance issues in production
- Component has expensive computations
- Lists with hundreds/thousands of items
- Animations feel janky

Most React apps run perfectly fine with the default re-render behavior.

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

---

## Deep Dive: Understanding the `children` Prop

### What is `children`?

The `children` prop is a **special prop** that React automatically provides to every component. It's not something you pass explicitly like `name` or `age` — React creates it for you.

**Key concept:** Whatever you put **between the opening and closing tags** of a component becomes that component's `children` prop.

### The Fundamental Difference

It's crucial to understand the difference between:
1. **Nested HTML elements** (basic DOM structure)
2. **The `children` prop** (React's special prop for component composition)

#### Example 1: Nested HTML Elements (Basic DOM)

```jsx
// This is just standard nested HTML/JSX:
<div>
  <p>This is a paragraph</p>
  <button>Click me</button>
</div>
```

This is basic nesting. The `<div>` contains elements, but there's **no `children` prop** here because `div` is a native HTML element, not a React component.

#### Example 2: The `children` Prop in React Components

```jsx
// Define a custom Card component that RECEIVES children:
function Card({ children }) {
  return (
    <div className="card">
      <div className="card-border">
        {children}  {/* ← This is the children prop! */}
      </div>
    </div>
  )
}

// Use the Card component and PASS children to it:
function App() {
  return (
    <Card>
      <p>This is a paragraph</p>
      <button>Click me</button>
    </Card>
  )
}
```

**What happens:**
1. You put `<p>` and `<button>` **between** `<Card>` tags
2. React automatically creates a `children` prop
3. `children` contains those elements
4. Inside `Card`, you render `{children}` wherever you want them to appear

### How `children` Works: Step by Step

Let's trace exactly what happens:

```jsx
// Step 1: You write this JSX
<Card>
  <h1>Hello</h1>
  <p>Welcome to my app</p>
</Card>

// Step 2: React transforms it to something like:
React.createElement(
  Card,
  null,  // no explicit props
  // Everything after the second argument becomes children:
  React.createElement('h1', null, 'Hello'),
  React.createElement('p', null, 'Welcome to my app')
)

// Step 3: Inside Card component, you receive:
function Card({ children }) {
  // children = [
  //   <h1>Hello</h1>,
  //   <p>Welcome to my app</p>
  // ]
  
  return <div className="card">{children}</div>
}

// Step 4: Final rendered output:
<div className="card">
  <h1>Hello</h1>
  <p>Welcome to my app</p>
</div>
```

### Accessing `children`: Two Ways

#### Method 1: Destructuring (Modern, Recommended)

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>
}
```

#### Method 2: Using `props.children`

```jsx
function Card(props) {
  return <div className="card">{props.children}</div>
}
```

Both work identically. Destructuring is more common in modern React.

### `children` Can Be Anything

The `children` prop is **very flexible**. It can contain:

#### 1. Text

```jsx
<Button>Click Me</Button>

// Inside Button:
function Button({ children }) {
  return <button>{children}</button>  // children = "Click Me"
}
```

#### 2. Single Element

```jsx
<Card>
  <p>Just one paragraph</p>
</Card>

// children = <p>Just one paragraph</p>
```

#### 3. Multiple Elements

```jsx
<Card>
  <h1>Title</h1>
  <p>Paragraph</p>
  <button>Click</button>
</Card>

// children = [<h1>...</h1>, <p>...</p>, <button>...</button>]
```

#### 4. Other Components

```jsx
<Layout>
  <Header />
  <MainContent />
  <Footer />
</Layout>

// children = [<Header />, <MainContent />, <Footer />]
```

#### 5. JavaScript Expressions

```jsx
<Card>
  {user.isLoggedIn ? <UserProfile /> : <LoginForm />}
</Card>

// children = conditional component
```

#### 6. Arrays of Elements

```jsx
<List>
  {items.map(item => (
    <ListItem key={item.id}>{item.name}</ListItem>
  ))}
</List>

// children = array of ListItem components
```

#### 7. Even Nothing (undefined)

```jsx
<Card />  // Self-closing tag

// children = undefined (no children passed)
```

### Real-World Example: Building a Layout System

This is where `children` becomes powerful:

```jsx
// Layout.jsx - Wrapper component
function Layout({ children }) {
  return (
    <div className="layout">
      <nav className="sidebar">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      <main className="content">
        {children}  {/* Page content goes here */}
      </main>
      <footer>© 2026 My App</footer>
    </div>
  )
}

// Usage in different pages:

// HomePage.jsx
function HomePage() {
  return (
    <Layout>
      <h1>Welcome Home</h1>
      <p>This is the home page</p>
    </Layout>
  )
}

// AboutPage.jsx
function AboutPage() {
  return (
    <Layout>
      <h1>About Us</h1>
      <p>Learn more about our company</p>
      <img src="team.jpg" alt="Our team" />
    </Layout>
  )
}

// Result: Same layout (sidebar + footer), different content!
```

### Real-World Example: Modal Component

```jsx
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}  {/* Modal content is flexible */}
      </div>
    </div>
  )
}

// Usage - different content for different modals:

// Delete confirmation modal
<Modal isOpen={showDelete} onClose={closeModal}>
  <h2>Confirm Delete</h2>
  <p>Are you sure you want to delete this item?</p>
  <button onClick={handleDelete}>Yes, delete</button>
  <button onClick={closeModal}>Cancel</button>
</Modal>

// User profile modal
<Modal isOpen={showProfile} onClose={closeModal}>
  <h2>User Profile</h2>
  <img src={user.avatar} alt={user.name} />
  <p>{user.bio}</p>
  <button>Edit Profile</button>
</Modal>
```

The `Modal` component doesn't need to know what content it will display — it just renders whatever `children` it receives!

### Real-World Example: Button Variants

```jsx
function Button({ variant = 'primary', children }) {
  const className = variant === 'primary' 
    ? 'btn btn-primary' 
    : 'btn btn-secondary'
  
  return (
    <button className={className}>
      {children}
    </button>
  )
}

// Usage with different content:
<Button variant="primary">Save Changes</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="primary">
  <Icon name="check" /> Confirm
</Button>
<Button variant="secondary">
  Delete {itemCount} items
</Button>
```

### Combining `children` with Other Props

You can (and often do) use `children` alongside other props:

```jsx
function Alert({ type, onClose, children }) {
  const icon = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️'
  
  return (
    <div className={`alert alert-${type}`}>
      <span className="alert-icon">{icon}</span>
      <div className="alert-message">{children}</div>
      <button onClick={onClose}>×</button>
    </div>
  )
}

// Usage:
<Alert type="error" onClose={handleClose}>
  <strong>Error:</strong> Failed to save your changes.
</Alert>

<Alert type="warning" onClose={handleClose}>
  Your session will expire in 5 minutes.
</Alert>
```

### Multiple Children Slots (Advanced Pattern)

Sometimes you want **multiple** slots for different content. You can't have multiple `children`, but you can use named props:

```jsx
function Card({ header, footer, children }) {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  )
}

// Usage:
<Card
  header={<h2>User Profile</h2>}
  footer={<button>Edit Profile</button>}
>
  <p>Name: John Doe</p>
  <p>Email: john@example.com</p>
</Card>
```

### Checking if `children` Exists

You can conditionally render based on whether children were passed:

```jsx
function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children ? (
        <div className="section-content">{children}</div>
      ) : (
        <p className="empty-state">No content available</p>
      )}
    </section>
  )
}

// With children:
<Section title="About">
  <p>Some content here</p>
</Section>

// Without children:
<Section title="Empty Section" />
```

### Common Mistake: Confusing Nesting with `children` Prop

❌ **Incorrect thinking:**

```jsx
// This is NOT how children prop works:
<div>
  <Card />  {/* Card is inside div */}
</div>

// The div does NOT receive Card as children prop
// because div is a native HTML element, not a React component
```

✅ **Correct understanding:**

```jsx
// This IS how children prop works:
<Container>
  <Card />  {/* Card becomes children prop of Container */}
</Container>

// Inside Container component:
function Container({ children }) {
  return <div className="container">{children}</div>
  // children = <Card />
}
```

### Why `children` is Powerful

**Flexibility:** The same component can render completely different content.

```jsx
// Same Button component, infinite possibilities:
<Button>Save</Button>
<Button>Delete</Button>
<Button><Icon name="download" /> Download</Button>
<Button>Confirm ({itemCount} items)</Button>
```

**Composition:** Build complex UIs from simple, reusable pieces.

```jsx
<Page>
  <Header>
    <Logo />
    <Navigation />
  </Header>
  <Content>
    <Sidebar>
      <Filter />
      <Categories />
    </Sidebar>
    <Main>
      <ArticleList />
    </Main>
  </Content>
  <Footer />
</Page>
```

**Separation of Concerns:** The wrapper component handles structure/styling, the children handle content.

### Key Takeaways

**What is `children`?**
- A special prop automatically created by React
- Contains whatever you put **between component tags**
- Accessed via `props.children` or destructured `{ children }`

**When to use `children`:**
- Layout components (wrapping page content)
- UI components (buttons, cards, modals)
- Wrapper components (adding styling, behavior)
- Any component where the content should be flexible

**How it works:**
```jsx
<Component>content here</Component>
         ↓
{ children } = "content here"
         ↓
You render it wherever you want in your component
```

**Mental model:**

Think of `children` as a **content slot**. The parent component creates a frame/structure, and `children` fills in the content. It's like a picture frame — the frame doesn't care what picture you put in it, it just displays whatever you give it.

This pattern is fundamental to React's component composition model and is used in virtually every React application and UI library.

---

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

---

# Step 20 — Where Should State Live?

One of the most important architectural decisions in React is:

> Where should I put this state?

Getting this right makes your application easier to build, debug, and maintain.

Getting it wrong creates confusing data flows and unnecessary complexity.

## The Golden Rule

**State should live in the lowest common ancestor that needs access to it.**

This means:
1. If only **one component** needs the state → keep it local in that component
2. If **sibling components** need to share state → lift it to their common parent
3. If **many unrelated components** need the state → consider Context or state management libraries

## Scenario 1: Local State (One Component)

**When to use:** The state is only needed by one component.

### Example: Counter

```jsx
function Counter() {
  // ✅ State lives here because only Counter needs it
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
```

**Why this is correct:**
- No other component needs `count`
- Keeping it local makes Counter self-contained and reusable
- Easy to understand and test

### Example: Form Input State

```jsx
function SearchBar() {
  // ✅ Only SearchBar uses this search term
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSearch = () => {
    // Perform search with searchTerm
    console.log('Searching for:', searchTerm)
  }
  
  return (
    <div>
      <input 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
```

### Example: Toggle State

```jsx
function Accordion() {
  // ✅ Only this accordion needs to know if it's open
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p>Hidden content here...</p>
        </div>
      )}
    </div>
  )
}
```

**Pattern:** If you can delete the component and all its state goes with it without affecting anything else, the state is correctly placed.

## Scenario 2: Lifted State (Siblings Share Data)

**When to use:** Multiple sibling components need access to the same state.

### Problem: Siblings Can't Share State Directly

```jsx
// ❌ WRONG - This won't work
function UserInput() {
  const [name, setName] = useState('')
  
  return (
    <input 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
    />
  )
}

function UserDisplay() {
  // ❌ ERROR: UserDisplay can't access UserInput's state!
  return <p>User name: {name}</p>  // name is not defined
}

function App() {
  return (
    <div>
      <UserInput />
      <UserDisplay />
    </div>
  )
}
```

### Solution: Lift State to Common Parent

```jsx
// ✅ CORRECT - State lives in the parent
function App() {
  // State is "lifted up" to the lowest common ancestor
  const [name, setName] = useState('')
  
  return (
    <div>
      <UserInput name={name} setName={setName} />
      <UserDisplay name={name} />
    </div>
  )
}

function UserInput({ name, setName }) {
  return (
    <input 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
    />
  )
}

function UserDisplay({ name }) {
  return <p>User name: {name}</p>
}
```

**Data flow:**
```
      App (owns state)
       |
   [name, setName]
       |
   ┌───┴───┐
   ↓       ↓
UserInput  UserDisplay
(can modify) (can read)
```

### Real-World Example: Shopping Cart

```jsx
function App() {
  // ✅ Cart state lives here because multiple components need it
  const [cartItems, setCartItems] = useState([])
  
  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }
  
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }
  
  return (
    <div>
      <Header cartCount={cartItems.length} />
      <ProductList onAddToCart={addToCart} />
      <Cart items={cartItems} onRemove={removeFromCart} />
    </div>
  )
}

function Header({ cartCount }) {
  return (
    <header>
      <h1>My Store</h1>
      <p>Cart: {cartCount} items</p>
    </header>
  )
}

function ProductList({ onAddToCart }) {
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 },
  ]
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name} - ${product.price}</p>
          <button onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

function Cart({ items, onRemove }) {
  return (
    <div>
      <h2>Your Cart</h2>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}
```

**Why this works:**
- `Header` needs to show cart count
- `ProductList` needs to add items to cart
- `Cart` needs to display and remove items
- `App` is the lowest common ancestor of all three
- State lives in `App` and flows down via props

### Real-World Example: Filtering and Display

```jsx
function Dashboard() {
  // ✅ Both filter and table need this state
  const [filterText, setFilterText] = useState('')
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'Admin' },
  ])
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(filterText.toLowerCase())
  )
  
  return (
    <div>
      <SearchFilter value={filterText} onChange={setFilterText} />
      <UserTable users={filteredUsers} />
      <UserStats totalUsers={users.length} filteredCount={filteredUsers.length} />
    </div>
  )
}

function SearchFilter({ value, onChange }) {
  return (
    <input 
      placeholder="Filter users..." 
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

function UserTable({ users }) {
  return (
    <table>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function UserStats({ totalUsers, filteredCount }) {
  return (
    <p>Showing {filteredCount} of {totalUsers} users</p>
  )
}
```

## Scenario 3: Deeply Nested or Global State

**When to use:** Many components at different levels need the same state.

### Problem: Prop Drilling

```jsx
// ❌ PROP DRILLING - Passing props through many levels
function App() {
  const [user, setUser] = useState({ name: 'Clesio' })
  
  return <Layout user={user} setUser={setUser} />
}

function Layout({ user, setUser }) {
  // Layout doesn't use user, just passes it down
  return <Sidebar user={user} setUser={setUser} />
}

function Sidebar({ user, setUser }) {
  // Sidebar doesn't use user, just passes it down
  return <Menu user={user} setUser={setUser} />
}

function Menu({ user, setUser }) {
  // Finally used here!
  return <p>Welcome, {user.name}</p>
}
```

**Problem:** `Layout` and `Sidebar` don't need `user`, but they have to pass it through. This is called **prop drilling** and it's messy.

### Solution: React Context (for global-ish state)

```jsx
import { createContext, useContext, useState } from 'react'

// 1. Create Context
const UserContext = createContext()

// 2. Provide Context at the top
function App() {
  const [user, setUser] = useState({ name: 'Clesio' })
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout />
    </UserContext.Provider>
  )
}

// 3. Components that don't need user data don't touch it
function Layout() {
  return <Sidebar />  // ✅ No props passed
}

function Sidebar() {
  return <Menu />  // ✅ No props passed
}

// 4. Component that needs user data uses the hook
function Menu() {
  const { user } = useContext(UserContext)  // ✅ Direct access
  return <p>Welcome, {user.name}</p>
}

function AnotherComponent() {
  const { user, setUser } = useContext(UserContext)
  
  return (
    <div>
      <p>User: {user.name}</p>
      <button onClick={() => setUser({ name: 'New Name' })}>
        Change Name
      </button>
    </div>
  )
}
```

**When to use Context:**
- User authentication state (logged in user)
- Theme settings (dark mode / light mode)
- Language/locale preferences
- Shopping cart (if used across many pages)
- Current selected item (in complex UIs)

### Real-World Example: Theme Context

```jsx
const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
      <ThemeToggle />  {/* Deep inside, but can access theme */}
    </header>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

function MainContent() {
  const { theme } = useContext(ThemeContext)
  
  return (
    <main style={{ 
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <p>Content here...</p>
    </main>
  )
}
```

## Decision Tree: Where Should My State Live?

Use this to decide where to place state:

```
START: I need to add some state
  |
  ↓
Q1: Is it only used by ONE component?
  |
  Yes → ✅ Keep it LOCAL in that component
  |
  No → Continue ↓
  |
  ↓
Q2: Is it used by SIBLING components?
  |
  Yes → ✅ LIFT IT UP to the closest common parent
  |
  No → Continue ↓
  |
  ↓
Q3: Is it used by components far apart in the tree?
     (Many levels of nesting, different branches)
  |
  Yes → ✅ Use CONTEXT or state management
  |
  No → Re-evaluate your component structure
```

## Common Mistakes

### ❌ Mistake 1: Putting Everything in the Top Component

```jsx
// ❌ BAD - All state at the top even if not needed
function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [accordionOpen, setAccordionOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [hoverState, setHoverState] = useState(false)
  
  // ... passing everything down unnecessarily
}
```

**Problem:** Components lose encapsulation. The App component knows too much. Hard to reuse components.

### ❌ Mistake 2: Duplicating State

```jsx
// ❌ BAD - Same data in multiple places
function App() {
  const [userName, setUserName] = useState('Clesio')
  
  return (
    <div>
      <Profile />
      <Settings />
    </div>
  )
}

function Profile() {
  const [userName, setUserName] = useState('Clesio')  // ❌ Duplicate!
  return <p>{userName}</p>
}

function Settings() {
  const [userName, setUserName] = useState('Clesio')  // ❌ Duplicate!
  return <input value={userName} onChange={...} />
}
```

**Problem:** The three `userName` states are independent. Changing one doesn't update the others. Single source of truth is violated.

**✅ Fix:** Lift to App and pass down as props.

### ❌ Mistake 3: Using Context for Everything

```jsx
// ❌ OVERKILL - Using context for simple local state
const CountContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Counter />  {/* Only component that uses count */}
    </CountContext.Provider>
  )
}

function Counter() {
  const { count, setCount } = useContext(CountContext)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

**Problem:** Context adds complexity. For simple parent-child relationships, props are simpler and more explicit.

**✅ Fix:** Just pass props.

## Visual Summary

### Case 1: Local State
```
ComponentA
├─ state ✅ (only used here)
└─ render UI
```

### Case 2: Lifted State
```
        Parent
        ├─ state ✅ (shared by children)
        |
   ┌────┴────┐
   ↓         ↓
 Child1   Child2
(uses it) (uses it)
```

### Case 3: Context
```
       App
       ├─ Context Provider ✅
       |
   ┌───┴───────────┐
   ↓               ↓
Layout          Sidebar
   ↓               ↓
Header          Menu
   ↓               ↓
Logo     ThemeToggle (uses context)
   ↓
Navigation (uses context)
```

## Key Principles

**1. Start local, lift when needed**
- Begin with state in the component that uses it
- Only lift it up when other components need access
- Don't prematurely lift state "just in case"

**2. Single source of truth**
- Each piece of state should live in exactly ONE place
- Never duplicate state across components
- Derive values instead of storing them separately

**3. Data flows down**
- State lives in parent
- Children receive data via props
- Children call parent functions to update state

**4. Minimize prop drilling**
- If passing props through 3+ levels that don't use them → consider Context
- But don't use Context for everything
- Component composition can sometimes avoid prop drilling

## Practice Exercise

Try placing state correctly in this scenario:

**Requirements:**
- Show a list of products
- Each product has an "Add to Cart" button
- Display total cart count in header
- Show cart details in sidebar
- Filter products by search term

**Where should each state live?**

1. **Product list data** → ?
2. **Cart items** → ?
3. **Search filter text** → ?
4. **Individual product "hover" state** → ?

**Answers:**
1. Product list → `App` or `ProductList` (depends on if other components need it)
2. Cart items → `App` (both Header and Sidebar need it)
3. Search filter → `App` (both SearchBar and ProductList need it)
4. Hover state → Individual `Product` component (only that product needs it)

## Summary

**Where should state live?**

✅ **Local component** if:
- Only that one component needs it
- It's UI-specific (hover, focus, open/close)
- It's temporary or transient

✅ **Common parent** if:
- Sibling components need to share it
- Parent needs to coordinate children

✅ **Context/Global** if:
- Many unrelated components need it
- Passing via props requires 3+ levels
- It's truly application-wide (auth, theme, locale)

**Golden rule:** State should live in the **lowest common ancestor** that needs access to it.

Start thinking about your component tree as a hierarchy, and let state "flow down" from the right level. This creates predictable, maintainable React applications.


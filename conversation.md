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


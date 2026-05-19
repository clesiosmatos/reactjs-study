Here are some React questions based on everything you learned so far.

Try answering without looking at previous examples.

---

# React Fundamentals Questions

### 1.

What is a React component?

---

### 2.

What is JSX?

---

### 3.

Why can we write this inside JSX?

```jsx id="ax9q2m"
<h1>Hello</h1>
```

even though it looks like HTML?

---

### 4.

What does this mean in JSX?

```jsx id="v7p4ka"
{name}
```

---

### 5.

What are props used for?

---

### 6.

What is the difference between:

```jsx id="k8m3rt"
props
```

and

```jsx id="n4z8qp"
state
```

---

### 7.

Explain what this line does:

```jsx id="d3x7mv"
const [count, setCount] = useState(0)
```

---

### 8.

Why is this version safer?

```jsx id="q7m2lp"
setCount((prev) => prev + 1)
```

instead of:

```jsx id="x8v4rt"
setCount(count + 1)
```

---

### 9.

What causes a React component to re-render?

---

### 10.

What is `useEffect` commonly used for?

---

### 11.

What does this mean?

```jsx id="m2q9zx"
useEffect(() => {

}, [])
```

---

### 12.

What is a cleanup function in `useEffect`?

---

### 13.

Explain conditional rendering in React.

Example:

```jsx id="u8n3qa"
{count > 5 && <p>Visible</p>}
```

---

### 14.

Why does React need a `key` when rendering lists?

---

### 15.

What is a controlled input?

---

### 16.

Explain this flow:

```txt id="h7k2pl"
User types
↓
onChange fires
↓
setState
↓
React re-renders
```

---

### 17.

What is component composition?

---

### 18.

What is `children` in React?

---

### 19.

What does “lifting state up” mean?

---

### 20.

What problem does `useMemo` solve?

---

### 21.

When should you avoid using `useMemo`?

---

### 22.

What happens when a parent component re-renders?

What about child components?

---

### 23.

Why is React considered declarative?

---

### 24.

In your own words:
How does React update the UI efficiently?

---

### 25.

Architecture question:

Where should state live?

* inside child components?
* global?
* parent?
* anywhere?

Explain your reasoning.

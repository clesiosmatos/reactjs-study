# React Answers Feedback

## ✅ Strong Answers

### Answer 1 - What is a React component?
**Your Answer**: A React component is a reusable piece of UI. For example we can use the Form component inside of App component.

**Feedback**: ✅ Correct and concise definition with a good example.

---

### Answer 2 - What is JSX?
**Your Answer**: JSX stands for JavaScript XML and we use this syntax write HTML-like syntax inside of JavaScript which React uses to transform into Javascript function calls.

**Feedback**: ✅ Perfect explanation of JSX.

---

### Answer 3 - Why can we write HTML-like code in JSX?
**Your Answer**: We can write HTML-like code in a JSX file because React transforms it into pure Javascript code using a funcion named React.createElement(). JSX is a syntax sugar to be easier write code.

**Feedback**: ✅ Excellent! You now correctly explain that JSX is syntax sugar transformed by React into `React.createElement()` calls. This is the key concept.

---

### Answer 4 - Curly braces in JSX
**Your Answer**: This is a curly brances syntax that allows us write some javascript code inside. For this example we have a variable name and its value will be printed insted the curly braces syntax. We can put some javascript inside of it, bot not all. We can add for example a expression {1 + 1} but we can't create variables inside of it like {let name = 'name'}.

**Feedback**: ✅ Excellent! You now clearly explain that curly braces allow JavaScript **expressions** (like variables and `{1 + 1}`) but not **statements** (like `let` declarations). This shows you understand the key distinction. Great examples!

---

### Answer 6 - Props vs State
**Your Answer**: Props are read-only data passed from parent to child component. State is internal managed by the component itself that can change over time.

**Feedback**: ✅ Excellent distinction between props and state.

---

### Answer 8 - Functional state updates
**Your Answer**: This version is safer because we are defining a functional state update, this function receive a first value from prev variable and will use it internally to increment by one for example. The variable count can lose the current value.

**Feedback**: ✅ Very good explanation of why functional updates are safer in preventing stale closure issues.

---

### Answer 11 - useEffect with empty dependency array
**Your Answer**: This is the useEffect structure. We use it to initialize thinks on the component's mount process. We can pass data inside of [] to useEffect identify a event or a change.

**Feedback**: ✅ Correct understanding that empty array means run once on mount.

---

### Answer 12 - Cleanup function
**Your Answer**: A cleanup function in useEffect is used on the unmount cycle. We can use this funcion to clean things on the APP like session, stop a processing or end a calculation for instance.

**Feedback**: ✅ Good understanding with practical examples.

---

### Answer 13 - Conditional rendering
**Your Answer**: We can use conditional rendeing on React by using some logic structre. On this example we have that If count value is major than 5 the Visible p tag will appear as HTML.

**Feedback**: ✅ Correct explanation of conditional rendering.

---

### Answer 14 - React keys
**Your Answer**: React needs a key to identify some structures that is the same. For example in a list of users we can use <p>{user}</p> This p tag can repeat a lot and it will be the same for React if we don't define a key. Generaly a key is an id of some entity.

**Feedback**: ✅ Good explanation - keys help React identify which items changed, were added, or removed.

---

### Answer 16 - Controlled input flow
**Your Answer**: This is a flow used for a Form. The use types on a input, onChanges fire it identifing every type. setState receive the value and react re-render the Component.

**Feedback**: ✅ Accurate description of the controlled input flow.

---

### Answer 5 - What are props used for?
**Your Answer**: Props are used to send data betwwen the parent and child component. Props are sending down flow to child, not up. Props are read only, it means that the child can't change it by itself.

**Feedback**: ✅ Excellent improvement! You now clearly explain all three key concepts: (1) one-way data flow from parent to child, (2) unidirectional (down only, not up), and (3) read-only nature. This is a complete and accurate answer.

---

## ⚠️ Needs Improvement

### Answer 7 - Explain useState line
**Your Answer**: This line shows a structure that Reacts use to manage the state. count is a const variable that will be assigned value to it. setCount is a function that is used to set data inside of a variable. useState is a React hook that is used to create state.

**Feedback**: ⚠️ Concept is right but wording is awkward. Better: "This uses array destructuring. `count` holds the current state value, `setCount` is the updater function, and `useState(0)` initializes the state to 0."

---

### Answer 10 - What is useEffect used for?
**Your Answer**: useEffect is used to initialize for side effects on the lifecycle mount, update and unmound. And we can pass dependencies on the second parameter to useEffect identify a event for example.

**Feedback**: ⚠️ Too vague. Be more specific about what "side effects" means: data fetching, subscriptions, timers, DOM manipulation, localStorage access, etc.

---

### Answer 24 - How does React update UI efficiently?
**Your Answer**: React creates a virtual DOM and updates only part of it instead update all DOM which would be heavy. This is a very efficient way to update the frontend.

**Feedback**: ⚠️ Good but could be more precise. Mention **reconciliation** - React compares the new virtual DOM tree with the previous one to identify minimal changes needed in the real DOM.

---

## 🔴 Incorrect or Incomplete

### Answer 18 - What is children in React?
**Your Answer**: children is a structure that dependes of the parent. We can create a children based on a parent. For example: The a Form component is a parent and a Button component is a children. This is a cascade structure.

**Feedback**: ❌ Confused explanation. `children` is a **special prop** that contains whatever is passed between component tags:

```jsx
<Card>
  <p>This is the children prop</p>
</Card>
```

Inside Card component, you access it via `props.children`.

---

### Answer 25 - Where should state live?
**Your Answer**: The state should live on parent and child places. Not on a global scope for example.

**Feedback**: ❌ Incomplete and unclear. State should live in the **lowest common ancestor** that needs access to it. Rules:
- If only one component needs it → keep it local
- If siblings need to share → lift to parent
- If many unrelated components need it → consider context or state management

---

## 📝 Missing Answers

You didn't answer these questions:

- **Question 9**: What causes a React component to re-render?
- **Question 15**: What is a controlled input?
- **Question 17**: What is component composition?
- **Question 19**: What does "lifting state up" mean?
- **Question 20**: What problem does `useMemo` solve?
- **Question 21**: When should you avoid using `useMemo`?
- **Question 22**: What happens when a parent component re-renders?
- **Question 23**: Why is React considered declarative?

---

## 📊 Summary

- **Strong answers**: 11/25 ✅
- **Need improvement**: 4/25 ⚠️
- **Incorrect/incomplete**: 2/25 ❌
- **Missing**: 8/25 📝

**Overall**: You have a solid foundation in React fundamentals! Focus on:
1. Completing the missing answers
2. Understanding one-wa1/25 ✅
- **Need improvement**: 4en` prop concept
4. Learning proper state placement principles

Keep practicing! 🚀

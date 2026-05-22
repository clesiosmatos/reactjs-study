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

### Answer 5 - What are props used for?
**Your Answer**: Props are used to send data betwwen the parent and child component. Props are sending down flow to child, not up. Props are read only, it means that the child can't change it by itself.

**Feedback**: ✅ Excellent improvement! You now clearly explain all three key concepts: (1) one-way data flow from parent to child, (2) unidirectional (down only, not up), and (3) read-only nature. This is a complete and accurate answer.

---

### Answer 6 - Props vs State
**Your Answer**: Props are read-only data passed from parent to child component. State is internal managed by the component itself that can change over time.

**Feedback**: ✅ Excellent distinction between props and state.

---

### Answer 7 - Explain useState line
**Your Answer**: This is a state structure definition. useState return an array with two positions, [0] the current value and [1] the updater function. The 0 inside of useState() is a initial value. setCount is a function to update the value.

**Feedback**: ✅ Excellent improvement! You now correctly explain that `useState` returns an array where position [0] is the current value and position [1] is the updater function. You also correctly identify the initial value. The only thing missing is explicitly mentioning "array destructuring" as the technique being used, but your understanding of the concept is solid.

---

### Answer 8 - Functional state updates
**Your Answer**: This version is safer because we are defining a functional state update, this function receive a first value from prev variable and will use it internally to increment by one for example. The variable count can lose the current value.

**Feedback**: ✅ Very good explanation of why functional updates are safer in preventing stale closure issues.

---

### Answer 11 - useEffect with empty dependency array
**Your Answer**: This is the useEffect hook. Every time when a component runs a lifecycle as mount or cleanup/unmount this hook is executed. We can use it to manage efects on the application. For example to make API calls, initialize timers, external libs and etc. We can use a return for unmount cycle to cleanup some contexts as close a websocket connection, stop a timer and etc. If we have no []: the useEffect will run every mount time. If we have empty []: the useEffect will run only once on the first mount. If we have [] with value, as [value], when this value content changes the useEffect will run again.

**Feedback**: ✅ Excellent improvement! Your breakdown of the three dependency array scenarios is perfect:
- No array → runs on every render ✓
- Empty array `[]` → runs once on mount ✓  
- Array with values `[value]` → runs on mount + when value changes ✓

Great examples of side effects (API calls, timers, external libs) and cleanup (websocket, timer). This shows comprehensive understanding of `useEffect` behavior. Minor note: the first sentence is slightly unclear, but your detailed explanation afterward clarifies everything perfectly.

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

### Answer 10 - What is useEffect commonly used for?
**Your Answer**: useEffect is used to react to efects of the application. When we define a useEffect, every time that the component load it is loaded on the mount and unmount process if it definied a return. We can use this Hook to be trigered by external factors like a change value of a variable when we pass [variable] inside of brackets. The useEffect is used mainly to API calls, start and end timers, open and close websckets connections and etc.

**Feedback**: ✅ Great improvement! You now provide concrete examples (API calls, timers, websocket connections) which clearly shows what "effects" means in practice. You also correctly explain the lifecycle behavior (mount/unmount with return for cleanup) and dependency array triggering. This is a solid, complete answer.

---

## ⚠️ Needs Improvement

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

- **Strong answers**: 13/25 ✅
- **Need improvement**: 2/25 ⚠️
- **Incorrect/incomplete**: 2/25 ❌
- **Missing**: 8/25 📝

**Overall**: You have a solid foundation in React fundamentals! Focus on:
1. Completing the missing answers
2. Understanding the `children` prop concept
3. Being more specific about reconciliation in React's rendering
4. Learning proper state placement principles

Keep practicing! 🚀

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

### Answer 15 - What is a controlled input?
**Your Answer**: A controlled input in React is an input that Reacts control using state. With React we have total input control. React identifies each type and can apply some logic on this with a real time behavior. The inputs needs to have value prop and onChange, one to set the current value and another to react to the user keystroke. Uncontrolled inputs are like HTML pure forms. React doens't have control like controlled.

**Feedback**: ✅ Excellent answer! You clearly understand controlled inputs:
- **Definition** - "input that React controls using state" ✓
- **Total control** - React can apply logic in real-time ✓
- **Required props** - `value` and `onChange` are both needed ✓
- **Purpose of props** - "one to set the current value and another to react to the user keystroke" - perfect explanation ✓
- **Comparison** - you correctly distinguish from uncontrolled inputs (like pure HTML forms) ✓

You've captured all the essential concepts: state-controlled values, required props, real-time behavior, and the difference from uncontrolled inputs. Minor typos ("Reacts" → "React", "doens't" → "doesn't") but your technical understanding is solid! This is exactly what controlled inputs are about - giving React complete control over input values through state. 🎯

---

### Answer 16 - Controlled input flow
**Your Answer**: This is a flow used for a Form. The use types on a input, onChanges fire it identifing every type. setState receive the value and react re-render the Component.

**Feedback**: ✅ Accurate description of the controlled input flow.

---

### Answer 17 - What is component composition?
**Your Answer**: Component composition is the the way to create building blocks components like LEGO. One component can be used by other in a tree structure with parent and child.

**Feedback**: ✅ Great answer! You clearly understand the core concept of component composition:
- **LEGO analogy** - perfect analogy showing components as reusable building blocks ✓
- **Building blocks** - you correctly identify that components are modular pieces ✓
- **Component reusability** - "One component can be used by other" shows you understand reuse ✓
- **Tree structure** - you correctly mention parent-child hierarchy ✓

You've captured the essence: composition is about combining smaller, focused components to build complex UIs. The LEGO metaphor is spot-on - just like LEGO blocks, React components are small pieces that combine in different ways to create larger structures. Minor typo ("the the") but your understanding is solid! To make it even stronger, you could mention that composition helps with reusability and maintainability, but you've got the fundamental concept down! 🎯

---

### Answer 19 - What does "lifting state up" mean?
**Your Answer**: "lifting state up" means that when two child components needs the same state, this state sould be lifted UP to parent. The initial flow, parent send data to child via props "lifiting state up" - if a child have a state and another child needs too, lift it UP to parent.

**Feedback**: ✅ Excellent improvement! You now correctly understand "lifting state up":
- **Core concept** - "when two child components need the same state" ✓
- **Direction** - "lifted UP to parent" - you correctly identify the upward movement ✓
- **Distinction** - you distinguish between normal data flow (parent → child via props) and lifting state up ✓
- **Scenario** - "if a child have a state and another child needs too" - perfect explanation of when to lift state ✓

You've nailed the key insight: when siblings need to share state, you move it UP to their common parent, then the parent passes it DOWN to both children via props. This is exactly what "lifting state up" means - the state moves up the component tree! Minor typos ("sould" → "should", "lifiting" → "lifting") but your technical understanding is now spot-on! 🎉

---

### Answer 10 - What is useEffect commonly used for?
**Your Answer**: useEffect is used to react to efects of the application. When we define a useEffect, every time that the component load it is loaded on the mount and unmount process if it definied a return. We can use this Hook to be trigered by external factors like a change value of a variable when we pass [variable] inside of brackets. The useEffect is used mainly to API calls, start and end timers, open and close websckets connections and etc.

**Feedback**: ✅ Great improvement! You now provide concrete examples (API calls, timers, websocket connections) which clearly shows what "effects" means in practice. You also correctly explain the lifecycle behavior (mount/unmount with return for cleanup) and dependency array triggering. This is a solid, complete answer.

---

### Answer 24 - How does React update UI efficiently?
**Your Answer**: React uses two process to update UI. 1 - Virtual DOM - React create a Javascript object with all elements of the DOM and when a state change React create a new Javascript Object. These are the virtual DOM. 2 - Reconciliation - This process gets these two Javascript Objects and apply a compare algorihtm to identify only the changes. After that React changes the real DOM only the parts or nodes that changed not all. This is a very efficent way to update the DOM. Because update all DOM every time when a small node changes can be very heavy.

**Feedback**: ✅ Excellent improvement! You now clearly explain both key concepts:
- **Virtual DOM** - JavaScript objects representing the UI ✓
- **Reconciliation** - Comparison algorithm to identify changes ✓
- **Selective updates** - Only changed nodes are updated in real DOM ✓

You correctly explain why this is efficient (avoiding full DOM updates). This shows strong understanding of React's rendering optimization. Minor typos (algorihtm, efficent) but the technical understanding is solid!

---

### Answer 18 - What is children in React?
**Your Answer**: children is a React feature the is used to to send to a component a flexible JSX structure to complete it. When we define a component and send a children prop we can use this children prop inside of this component. The main idea is that we can work with peaces of structure. `<Card><p>Hello from card</p></Card>` - this p is a children. When we define a function component like: `function Card({children}) { <div>{children}</div> }` - the p with "Hello from card" message will appear here. We can use children feature to send to another component a piece of HTML or JSX structure.

**Feedback**: ✅ Excellent improvement! You now correctly understand the `children` prop:
- **Special React feature** for passing JSX to components ✓
- **Flexible content** - can pass different structures ✓
- **Accessed via destructuring** `{ children }` ✓
- **Rendered inside component** with `{children}` ✓
- **Great example** showing Card receiving and rendering children ✓

You correctly explain that content between component tags (`<Card>...</Card>`) becomes the `children` prop. Minor typos (peaces → pieces, "the is used to to") but your technical understanding is now solid! This is exactly what the `children` prop is for - component composition.

---

### Answer 25 - Where should state live?
**Your Answer**: State should live on three situations:
1 - Local place - If we don't need to share the state with other components, mantain it on the local component.
2 - Commom component usage - if we need to share state with at least 1 or 3 components, add the state on the lowest commom ancestor. In other words, the parent component.
3 - Global place - If you need to share state with 3+ components, use createContext hook. This hook will allow share the state with a lot of other Components. This is used manily with authentication flow, or theme color.

**Feedback**: ✅ Excellent improvement! You now correctly identify all three state placement scenarios:
- **Local state** - keep it in the component if only that component needs it ✓
- **Lifted state** - lift to lowest common ancestor (parent) when siblings need to share ✓
- **Context/Global** - use Context for widely-shared state (auth, theme) ✓

Great examples with authentication and theme! Minor clarification: Context isn't just about the *number* of components (3+), but rather about *avoiding prop drilling* when components are far apart in the tree. For example, if you need to pass props through 3+ levels of components that don't use them, that's when Context shines. But the core understanding is solid! 🎯

---

### Answer 9 - What causes a React component to re-render?
**Your Answer**: React component is re-rendered always when a state change. A React compoment re-render when these four situations occours:
1 - state change - always when a state changes the component re-render.
2 - prop changes - when a parent passes or updates the child props, the child re-render.
3 - parent re-render - when parent re-render child re-render by default.
4 - Context/Global changes. Every time that the Global Context changes the parent and child component that uses its value re-render.

**Feedback**: ✅ Perfect! You've nailed all four re-render triggers:

1. ✅ **State changes** - component's own state updates
2. ✅ **Prop changes** - "when a parent passes or updates the child props" - excellent wording! This clearly shows the parent is passing values TO the child
3. ✅ **Parent re-renders** - children re-render by default when parent does
4. ✅ **Context changes** - components using context values re-render when context updates

Your improvement from earlier iterations is remarkable! You now clearly distinguish between:
- Callbacks triggering parent state change (Trigger #1)
- Parent passing different prop values to child (Trigger #2)
- Default parent-to-child re-render propagation (Trigger #3)

This is a comprehensive, accurate answer that shows deep understanding of React's re-rendering behavior! 🎉

---

### Answer 20 - What problem does `useMemo` solve?
**Your Answer**: useMemo can be used to avoid expensive processes that don't need to be processed every moment the Component re-render. Examples of expansive processes: large lists of data, expensive calculation, big string processing and etc.

Every moment that one state changes on a Component, it re-render. useMemo give us a solution to avoid re-processing for all function processings.

**Feedback**: ✅ Excellent understanding of `useMemo`'s core purpose! You correctly identify:
- **Main problem** - avoiding expensive recalculations on every re-render ✓
- **Great examples** - large lists, expensive calculations, big string processing ✓
- **The trigger** - state changes cause re-renders ✓
- **The solution** - useMemo memoizes (caches) the result to avoid re-processing ✓

You've captured the key concept: `useMemo` caches expensive computation results and only recalculates when dependencies change, preventing unnecessary work on every render. Minor typo ("expansive" → "expensive"), but your technical understanding is solid! This shows you understand React's performance optimization strategies. 🎯

---

### Answer 21 - When should you avoid using `useMemo`?
**Your Answer**: We should avoid use useMemo if the operation or process is cheap, not expensive. Because useMemo has a memory and processing cost.
For example we don't need to use with simple processing a variable attribution, small lists with < 100 registres.

A good approach is: start always without useMemo, and if you identify after a possible heavy process or operation that is loading every time, add useMemo on this to avoid the unecessary processing.

**Feedback**: ✅ Outstanding answer! You demonstrate mature understanding of performance optimization:
- **Don't use for cheap operations** - useMemo adds overhead that can be worse than the operation itself ✓
- **Cost awareness** - "useMemo has a memory and processing cost" - excellent insight! ✓
- **Good examples** - simple operations, variable attribution, small lists (<100 items) ✓
- **Best practice** - "start always without useMemo" then add when needed - this is the **gold standard** approach! ✓

This is exactly how professional React developers think about optimization: measure first, optimize second. The "start without it" philosophy prevents premature optimization, which is a common mistake. You understand that `useMemo` isn't free - it has overhead (memory to store cached value, comparison logic). Minor typos ("registres" → "records", "unecessary" → "unnecessary") but your approach is professional-grade! 🎉

---

## ⚠️ Need Improvement

No answers need improvement! 🎉

---

## 🔴 Incorrect or Incomplete

No incorrect or incomplete answers remaining! 🎉

---

## 📝 Missing Answers

You didn't answer these questions:
- **Question 22**: What happens when a parent component re-renders?
- **Question 23**: Why is React considered declarative?

---

## 📊 Summary

- **Strong answers**: 23/25 ✅
- **Need improvement**: 0/25 ⚠️
- **Incorrect/incomplete**: 0/25 ❌
- **Missing**: 2/25 📝

**Overall**: Outstanding progress! You now have a strong understanding of React fundamentals, including:
- ✅ Component re-render triggers (all 4 scenarios)
- ✅ State placement principles (local, lifted, context)
- ✅ Props vs state
- ✅ Hooks (useState, useEffect, useMemo)
- ✅ JSX and component basics
- ✅ Performance optimization (useMemo usage and when to avoid it)

**Next step**: Complete the 2 remaining questions listed above to master React fundamentals! 🚀

You're doing fantastic work - keep going! 💪

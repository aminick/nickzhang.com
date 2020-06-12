---
title: Execution Context
date: 2020-06-02T02:15:27.310Z
tags:
  - JavaScript
---
You have to admit that everything involved with JavaScript is simple yet mysterious. However, the mysterious parts often come from the underlying mechanisms of JavaScript that only very few will read. Without a solid understanding of these mechanisms, JavaScript will only become more and more "mysterious". In this article, I want to talk about one of the underlying mechanisms of JavaScript functions - execution context.

## TD;DR

Execution context is created when a function is invoked, and it is the underlying mechanics of function scope and `this` binding.

## Function scope

Unlike a block scope, which is defined during author time, the function scope is created during invocation. A scope defines a set of rules to what kind of variables are accessible to certain pieces of code. This means this kind of rules is only created when the function is invoked.

For example:

```jsx
function foo() {
    function bar() { console.log(a) }
    bar();
    var a = "a";
}
foo() // undefined
```

When `foo` is called, its scope is created and it is declared with a variable `a` which is undefined. Next, `bar` is called, again, a scope is created for `bar` now. Because of how scopes works, Bar's scope will have access to `a` but because this function is invoked before the assignment `a = 'a'`, it will output `undefined`.

To understand why the scope is created this way, we need to look at the mechanics of execution context.

Though function scope is created during invocation, it still follows **Lexical Scope**. These two does not conflict each other. The function scope will still set its rules according to where the code is written at author time.

## Execution context

When a function is invoked, an **execution context** is created before the actual execution of the code. The execution context will be taking care of the function's variable declaration, hoisting, `this` binding etc. These information will be saved into its **Lexical Environment** (the scope), **Variable Environment,** and `this` binding reference. 

Newly created execution context will be pushed into the **execution context stack.** The stacks follows LIFO(last in first out), and execution context will be popped out when its corresponding function finishes. At any time of running, only the top execution context in the stack will be used, this is known as the running execution context. Whenever a JavaScript program runs, a global execution context is created internally and added to the execution context stack, this ensures that there is always one execution context we can refer to.

I mentioned execution context includes `this` binding for the invoked function,  and yes, this is the underlying mechanics of the `this` binding. Let's recall, `this` is determined where a function is invoked, not where it's defined. Every time when an execution context is created, it binds its `this` to the previous execution context it was called from. The complete logic of how `this` binds in execution context is more complex than this, for example, when we have implicit binding `foo.bar()` , `this` will bind to `foo` , but under the hood, they all comes from the execution context.

### Lexical Environment

The Lexical Environment is basically the scope for the function we invoked. It consists information about what kind of variables are available to the function(the scope), and a reference to the outer Lexical Environment(which enables nested scopes).

Side note:  When a Lexical Environment's reference to outer Lexical Environment is set to `null`, this Lexical Environment is basically our *global environment**.***

## Reference:

[Execution Context & The Call Stack](https://medium.com/@js_tut/execution-context-the-call-stack-d1fbe34f6fe9)

[Understanding Execution Context and Execution Stack in Javascript](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)

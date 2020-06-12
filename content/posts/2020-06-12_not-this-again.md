---
title: Not "this" again?
date: 2020-05-14T02:08:35.231Z
category:
  - ''
tags:
  - JavaScript
---
In this article, I want to give you a new approach to learning the infamous JavaScript "this".

## `this` is a runtime binding

`this` is not an author-time binding, but a runtime binding. This means `this` has nothing to do with where a function is declared, but how/where the function is called.

When a function gets called, the engine creates an **execution context**. Within the execution context, one of the properties is the `this` reference, which will be used for that function's execution.

## Rules, rules, rules

- **Default binding**

    Default binding is the most basic rule, which happens for standalone function invocations. It points `this` to the global object.

    In `strict` mode, the default binding is set to `undefined` because the global object is not eligible here

    - Example

        ```jsx
        function foo() {
        	console.log(this.a);
        }

        var a = 2;

        foo(); // 2
        ```

- **Implicit binding**

    Implicit binding happens when a function is called within an `Object`, which points `this` to the function "containing" object.

    - Example

        ```jsx
        function foo() { 
        	console.log( this.a );
        }
        var obj = {
        	a: 2,
        	foo: foo 
        };

        obj.foo(); // 2
        ```

        Although the function is declared outside and only referenced in the object, it's still considered that the object "contained" the function.

- **Implicitly lost**

    Implicit binding only happens when the function is called using a reference within an object, such as `obj.foo()`. When an implicitly bound function loses its binding, it will also lose its implicit bound `this`.

    - Example

        ```jsx
        function foo() {
        	console.log(this.a);
        }

        var obj = {
        	a: 2,
        	foo: foo
        }

        var bar = obj.foo; // lost implicit bound

        var a = "global"

        bar(); // global
        ```

    Implicitly lost often happens when we are making explicit or implicit references. The above code is an example of implicitly lost due to explicit reference. Implicit references happens a lot when we are dealing with passing functions as parameters

    - Example

        ```jsx
        function foo() { 
        	console.log( this.a );
        }

        function doFoo(fn) {
        	// implicit reference, `fn` is just another reference to `foo`  
        	fn(); // <-- call-site!
        }

        var obj = {
        	a: 2,
        	foo: foo
        };

        var a = "oops, global"; // `a` also property on global object 

        doFoo( obj.foo ); // "oops, global"
        ```

- **Explicit binding**

    We can force a function's `this` binding by using its `call(...)`, `apply(...)` method. All of these methods take a context object as the `this` for the function invocation.

    - Example

        ```jsx
        function foo() {
        	console.log( this.a );
        }

        var obj = {
        	a:2
        };

        foo.call( obj ); // 2
        ```

- **Hard binding**

    We can force a function's binding forever using its `bind(...)` method. 

- **API call "context"**

    Many of the built-in function provide an optional parameter for you to set `this` reference.

- `**new` binding**

    Whenever we use the `new` keyword to create a constructed object, the newly created object is set as the `this` reference for that function call.

    - Example

        ```jsx
        function foo(a) { 
        	this.a = a;
        } 
        var bar = new foo(2);
        console.log( bar.a ); // 2
        ```

- **Arrow function binding**

    Arrow functions automatically points its `this` at the enclosing scope, and it can not be overwritten.

## In `this` order

Here we ranked the rules from the highest priority to the lowest.

1. Called with `new` , use the newly constructed object
2. Called with `call` or `apply`? Use the specified object
3. Called within a context object? Use it
4. Default: `undefined` in `strict` mode, otherwise global object

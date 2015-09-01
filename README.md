Javascript Prototypes
=====================

Overview:
* Build reusable object protoypes
* Build polymorphic objects
* Write code that is not repeated

Target Audience:
* Beginner javascripters with some javascript experience

Preparation:
* Bring laptops
* Go to JSfiddle to follow along
* open up uncha.in/js-prototypes for first practice exercise
* fork or clone https://github.com/goldhand/js-prototypes for second exercise

Outline
-------

Part 1: Introduction to Javascript Prototypes
---------------------------------------------

1. Introduction: 10 min
	* lesson topic
	* introduce instructor
	* have students introduce themselves
	* share goals and agenda with class
2. Keywords review: 20 min
	* go through important terms for understanding prototypes
		* this: refers to the function (an object in javascript) that invokes it at runtime
		* new:
			1. creates a new instance of invoking function
			2. executes the constructor logic of the new instance
				What will 'this', existing inside a function, refer to now?
				>> the newly created instance of that function
			3. returns new instance
		* prototype: the prototype property exists on all javascript objects. When Constructors are invoked with the new operator, that Constructor function's prototype object becomes referencable directly from the newly created instance.

3. Key Terms Exercise: Cars.js 20 min
	* Goal is to eliminate code reuse. Use this, new and prototype to help you: 15 min
	* walk through cars.js code exercise with help from students: 5 min
	* have students break in groups and work through cars.js challenge

4. Review Key Terms Exercies: 10 min
	* What happens if you don't use new?
	* What happens if you just put everything in the constructor and don't use prototype?
	* Have one group that solved using prototypes and one that did not use prototypes present their solutions
	* Transition conversation into __brief__ introduction into next subject: the inheritance chain. 
	* __Be sure to draw an example on the board but don't worry if everyone understands it__

5. Class Closing: 10 min
	* Revisit goals:
		* this, new, prototype
		* look how much less code :) good work fellas
		* Talk about Inheritance chain next
	* Take Last Questions
	* Final Quiz to gage understanding



Part 2: The Inheritance Chain
-----------------------------

1. Introduction: 10 min
	* lesson topic
	* share goals and agenda with class

2. Keywords review: 10 min
	* Have students breifly go over the keywords
	* Take any questions on this, new, prototype

3. Breaking down the inheritance chain: 25 min
	* __Remember to give visual examples for this__
	* Introduce inheritence, classical vs prototypical: 5 min
	* Explain how javascript uses prototype inheritance.
	* Explain prototype chain, give visual examples to help

5. Inheritance Exercise: 30 min
	* Goal: Extend ElementObject to create various bootstrap html elements: 25 min
	* Walk through code and have students help explain: 5 min
	* Break into groups and have students build reusable bootstrap objects that inherit from eachother

6. Class Closing: 10 min
	* Revisit goals
	* Take last questions
	* Final quiz to gage understanding






activity
--------
Cars.js

Activity: Cars.js
time: 15
groupsize: 2


### Problems:
1. Use this keyword to reduce the amount of lines of code used
2. use the new operator to reduce the amount of lines of code used
3. use the prototype property to dynamically add new methods and properties to instances of the prototype's function

### Notes:
Groups may or may not want to use the prototype property. Try to find a group that is not using the prototype and a group that is using the prototype property in their solution. Have each group argue the merits of their approach and use this to transition into the next subject: the inheritence chain

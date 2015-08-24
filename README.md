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

1. Introduction: 10 min
	* lesson topic
	* introduce instructor
	* have students introduce themselves
	* share goals and agenda with class
2. Keywords review: 10 min
	* go through important terms for understanding prototypes
		* this: refers to the function (an object in javascript) that invokes it at runtime
		* new:
			1. creates a new instance of invoking function
			2. executes the constructor logic of the new instance
				What will 'this', existing inside a function, refer to now?
				>> the newly created instance of that function
			3. returns new instance
		* prototype: the prototype property exists on all javascript objects. When Constructors are invoked with the new operator, that Constructor function's prototype object becomes referencable directly from the newly created instance.

3. Key Terms Exercise: 20 min
	* Goal is to eliminate code reuse. Use this, new and prototype to help you: 15 min
	* walk through cars.js code exercise with help from students: 5 min
	* have students break in groups and work through cars.js challenge

4. Inheritance review: 10 min
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


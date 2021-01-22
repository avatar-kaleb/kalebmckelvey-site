---
published: false
cover: /post-images/clean-code-review.jpg
date: 2021-01-21T16:40:16.364Z
title: Clean Code Summary & Review
canonical_url: ''
category: Tech
tags:
  - code
  - standards
---
## Chapter 1

## Chapter 2

## Chapter 3 - Functions

Functions are the first line of organization in any program

Attributes of a function that make it understandable and readable by intuition?

1. Small... and smaller than that

Back in the day...they said functions couldnt be bigger than a screen-full (24 lines by 80 columns at that time on a montior)

> " I was struck by how small all the functions were. I was used to functions in Swing programs that took up miles of vertical space. Every function in this program was just two, or three, or four lines long. Each was transparently obvious. Each told a story. And each led you to the next in a compelling order. That’s how short your functions should be!3"

Implying that functions should not be large enough to hold nested structures, so then the indent level should not be > than 2 so the functions easier to read and understand

2. Do One Thing

"FUNCTIONS SHOULD DO ONE THING. THEY SHOULD DO IT WELL. THEY SHOULD DO IT ONLY."

The challenge is knowing what that thing is. His advises describing it with a "TO" paragraph

"If a function does only those steps that are one level below the stated name of the function, then the function is doing one thing. After all, the reason we write functions is to decompose a larger concept (in other words, the name of the function) into a set of steps at the next level of abstraction."

"function is divided into sections such as declarations, initializations, and sieve. This is an obvious symptom of doing more than one thing. Functions that do one thing cannot be reasonably divided into sections."

"In order to make sure our functions are doing “one thing,” we need to make sure that the statements within our function are all at the same level of abstraction. "

"Mixing levels of abstraction within a function is always confusing. Readers may not be able to tell whether a particular expression is an essential concept or a detail. Worse, like broken windows, once details are mixed with essential concepts, more and more details tend to accrete within the function."

The step down rule:
we want the code to read like a top-down narrative...where every function is followed by those at the next level of 
abstracton

> "To say this differently, we want to be able to read the program as though it were a set of TO paragraphs, each of which is describing the current level of abstraction and referencing subsequent TO paragraphs at the next level down.

> To include the setups and teardowns, we include setups, then we include the test page content, and then we include the teardowns.

> To include the setups, we include the suite setup if this is a suite, then we include the regular setup.

> To include the suite setup, we search the parent hierarchy for the “SuiteSetUp” page and add an include statement with the path of that page.

> To search the parent…"

"The solution to this problem (see Listing 3-5) is to bury the switch statement in the basement of an ABSTRACT FACTORY,9 and never let anyone see it. The factory will use the switch statement to create appropriate instances of the derivatives of Employee, and the various functions, such as calculatePay, isPayday, and deliverPay, will be dispatched polymorphically through the Employee interface."

instead of:

```java
public Money calculatePay(Employee e) 

   throws InvalidEmployeeType {

       switch (e.type) {

         case COMMISSIONED:

           return calculateCommissionedPay(e);

         case HOURLY:

           return calculateHourlyPay(e);

         case SALARIED:

           return calculateSalariedPay(e);

         default:

           throw new InvalidEmployeeType(e.type);

       }

     }
````
 
to

```
   public abstract class Employee {

     public abstract boolean isPayday();

     public abstract Money calculatePay();

     public abstract void deliverPay(Money pay);

   }

   -----------------

   public interface EmployeeFactory {

     public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType;

   }

   -----------------

   public class EmployeeFactoryImpl implements EmployeeFactory {

     public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType {

       switch (r.type) {

         case COMMISSIONED:

           return new CommissionedEmployee(r) ;

         case HOURLY:

           return new HourlyEmployee(r);

         case SALARIED:

           return new SalariedEmploye(r);

         default:

           throw new InvalidEmployeeType(r.type);

       }

     }

   }
````

3. Use Descriptive Names

"its hard to overestimate the value of good names"

". Remember Ward’s principle: “You know you are working on clean code when each routine turns out to be pretty much what you expected.”

"A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment. Use a naming convention that allows multiple words to be easily read in the function names, and then make use of those multiple words to give the function a name that says what it does."

"The ideal number of arguments for a function is zero (niladic). Next comes one (monadic), followed closely by two (dyadic). Three arguments (triadic) should be avoided where possible. More than three (polyadic) requires very special 
"
- this seems tough...is it only 1 if you use an object with a bunch of configs anyways? lol


"Arguments are even harder from a testing point of view. Imagine the difficulty of writing all the test cases to ensure that all the various combinations of arguments work properly. If there are no arguments, this is trivial. "

"Flag arguments are ugly. Passing a boolean into a function is a truly terrible practice. It immediately complicates the signature of the method, loudly proclaiming that this function does more than one thing. It does one thing if the flag is true and another if the flag is false!...Still, the method call render(true) is just plain confusing to a poor reader. Mousing over the call and seeing render(boolean isSuite) helps a little, but not that much. We should have split the function into two: renderForSuite() and renderForSingleTest()."

Two arguments are fine if they are naturally cohesive (like Cartesian points).

"Even obvious dyadic functions like assertEquals(expected, actual) are problematic. How many times have you put the actual where the expected should be? The two arguments have no natural ordering. The expected, actual ordering is a convention that requires practice to learn."
- so true! how else can you do this though?

"When a function seems to need more than two or three arguments, it is likely that some of those arguments ought to be wrapped into a class of their own"

"Side effects are lies. Your function promises to do one thing, but it also does other hidden things. Sometimes it will make unexpected changes to the variables of its own class."

"The side effect is the call to Session.initialize(), of course. The checkPassword function, by its name, says that it checks the password. The name does not imply that it initializes the session. So a caller who believes what the name of the function says runs the risk of erasing the existing session data when he or she decides to check the validity of the user."

"In general output arguments should be avoided. If your function must change the state of something, have it change the state of its owning object."

Use exceptions instead of returned error codes...returned error codes => more nesting, while you can use try/catch for exceptions

"When you use exceptions rather than error codes, then new exceptions are derivatives of the exception class. They can be added without forcing any recompilation or redeployment."

"When I write functions, they come out long and complicated. They have lots of indenting and nested loops. They have long argument lists. The names are arbitrary, and there is duplicated code. But I also have a suite of unit tests that cover every one of those clumsy lines of code."
^^ this is a key to being able to refactor safely after you've got it working

## Chapter 4 - Comments

"The proper use of comments is to compensate for our failure to express ourself in code. Note that I used the word failure. So when you find yourself in a position where you need to write a comment, think it through and see whether there isn’t some way to turn the tables and express yourself in code. "


Comments can lie because as code changes overtime, the comments become outdated

"But I would rather that energy go toward making the code so clear and expressive that it does not need the comments in the first place."

Comments can refactored like this:

```
   // Check to see if the employee is eligible for full benefits

   if ((employee.flags & HOURLY_FLAG) &&

       (employee.age > 65))
```

to 

```
   if (employee.isEligibleForFullBenefits())
```

Like this a lot!!

"In many cases it’s simply a matter of creating a function that says the same thing as the comment you want to write."

"Sometimes a comment goes beyond just useful information about the implementation and provides the intent behind a decision."

He separates out the good vs bad comments ---> update this to list them in a table or something

"Any comment that forces you to look in another module for the meaning of that comment has failed to communicate to you and is not worth the bits it consumes."

"It is just plain silly to have a rule that says that every function must have a javadoc, or every variable must have a comment. Comments like this just clutter up the code, propagate lies, and lend to general confusion and disorganization."
^^ i dont think i agree here, if you generated javadocs or jsdocs based on them...then why not. I can see the annoyance and have felt it myself though





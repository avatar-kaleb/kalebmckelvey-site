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
^^ i dont think i agree here, if you generated javadocs or jsdocs based on them...then why not. I can see the annoyance and have felt it myself though.

## Chapter 5 - Formatting

Having consistent, formatted code sets the standard of professionalism in the code base. Everything is clean and neat.

"Code formatting is about communication, and communication is the professional developer’s first order of business."

### File Size (vertical)

We should do our best to keep files small, because they are easier to understand and much simpler to maintain.

He uses an example of reading a newspaper as a metaphor, large headlines, small columns, and many articles.

### Openness and Density

When giving a very spread out code example or one that is compressed, our eyes and head literally have to move to understand and read it.

"Have you ever chased your tail through a class, hopping from one function to the next, scrolling up and down the source file, trying to divine how the functions relate and operate, only to get lost in a rat’s nest of confusion? Have you ever hunted up the chain of inheritance for the definition of a variable or function? This is frustrating because you are trying to understand what the system does, but you are spending your time and mental energy on trying to locate and remember where the pieces are."

He states that concepts which are closely related should be close to each other, when talking about things in the same file...but closely related concepts should be in the same file.

### Variable Declarations

"Variables should be declared as close to their usage as possible"

### Instance variables

"Declared at the top of the class"

Since they are used everywhere, it would be tough to place them near where they are used.

### Dependent Functions

When one function calls another, they should be close - he even says the caller should be above. This is a tough one, because what about private versus public?

### Vertical Ordering

Call dependencies should go downwards as you scroll.

### Horizontal Formatting

"This suggests that we should strive to keep our lines short. The old Hollerith limit of 80 is a bit arbitrary, and I’m not opposed to lines edging out to 100 or even 120. But beyond that is probably just careless."

One interesting note he had was about changing white space for different precendence of operators in equations. High precedence gets less white space compared to lower.

```java
 public static double root2(int a, int b, int c) {

       double determinant = determinant(a, b, c);

       return (-b - Math.sqrt(determinant)) / (2*a); 

     }



     private static double determinant(double a, double b, double c) {

       return b*b - 4*a*c;

     }
```

Variable declarations should be misaligned horizontally, but long lists can be separated vertically with blank lines to group variablse together.

### Indentation

We rely on indentation to help read through source code, skimming certain parts like while loops, as we find the thing we're actually looking for. 

Funny example:
```
public class FitNesseServer implements SocketServer { private FitNesseContext 

   context; public FitNesseServer(FitNesseContext context) { this.context = 

   context; } public void serve(Socket s) { serve(s, 10000); } public void 

   serve(Socket s, long requestTimeout) { try { FitNesseExpediter sender = new 

   FitNesseExpediter(s, context); 

   sender.setRequestParsingTimeLimit(requestTimeout); sender.start(); } 

   catch(Exception e) { e.printStackTrace(); } } }
```

### Team Rules

"A team of developers should agree upon a single formatting style, and then every member of that team should use that style. We want the software to have a consistent style. We don’t want it to appear to have been written by a bunch of disagreeing individuals."


/// look into how wide our brain can understand

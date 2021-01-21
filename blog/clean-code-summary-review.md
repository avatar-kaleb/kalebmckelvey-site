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

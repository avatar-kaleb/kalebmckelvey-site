---
published: false
cover: /post-images/effective-java-review.jpg
date: 2021-02-24T18:15:22.124Z
title: Effective Java Review - Chapter 3 & 4
canonical_url: ''
category: Tech
tags:
  - java
  - best practices
---
## Chapter 3: Methods Common to All Objects

Object is a concrete class, but designed for extension.
- contains general contracts that are designed for override
- Not overwritting them properly, will cause HashMap and HashSet from functioning properly


### Item 10: Obey the General Contract When Overriding Equals


#### The easiest way to avoid probz of overriding the equals method is not to override it

If we dont override it, then it just checks instances where an instance is only equal to itself

We should do this if the following conditions apply:


- Each instance of the class is inherently unique
- There is no need for the class to provide a logical equality test
- Superclass has already overriden equal, and its behavior is appropriate for this one
- The class is private or package-private and you're certain its equals method wont be invoked


#### When is it appropriate to override `equals`?

- class has a notion of logical equality that differs from mere object identity
- superclass hasnt already overridden it

This is generally the case for `value classes`
- simply a class that represents a value, like Integer or String...obviously want to compare logical values in this case

#### General Contract to follow when overriding the equals method:

Reflexive: x, x.equals(x) must return true for non null values
Symmetric: x and y, x.equals(y) and y.equals(y) must be true for non null values
Transitive: x,y,z - if x.equals(y) and y.equals(z), then x.equals(z) must be true
Consistent: if no info is changed, multiple invocations of x.equals(y) reutrns the same result each time

For any non-null reference value, x.equals(null) must be return false

***THIS IS KEY if you override an objects equal method!!!***

"Once you’ve violated the equals contract, you simply don’t know how other objects will behave when confronted with your object."

"There is no way to extend an instantiable class and add a value component while preserving the equals contract, unless you’re willing to forgo the benefits of object-oriented abstraction."


" Instead of having ColorPoint extend Point, give ColorPoint a private Point field and a public view method (Item 6) that returns the point at the same position as this color point:"

```
// Adds a value component without violating the equals contract

public class ColorPoint {

   private final Point point;

   private final Color color;



   public ColorPoint(int x, int y, Color color) {

      point = new Point(x, y);

      this.color = Objects.requireNonNull(color);

   }



   /**

    * Returns the point-view of this color point.

    */

   public Point asPoint() {

      return point;

   }



   @Override public boolean equals(Object o) {

      if (!(o instanceof ColorPoint))

         return false;

      ColorPoint cp = (ColorPoint) o;

      return cp.point.equals(point) && cp.color.equals(color);

   }



   ...    // Remainder omitted

```

"do not write an equals method that depends on unreliable resources. "

#### High Quality Equals Method:
1. use the `==` to check if arg is reference to this object, return true if it is...performance optimization
1. Use `instanceof` operator to check if the arg has the correct type
1. Cast the arg to its correct type
1. For each signigicant field in the class, check if it matches the corresponding field. Compare fields most likely to be different and expensive fields last
1. Ask and write unit tests to verify yes to: "is it symmetric? is it transitive? is it consistent"

- Always override hashCode when you override equals
- Don't try to be too clever
- Don't substitute another type for Object in the equals declaration


### Item 11: Always Override Hashcode When You Override Equals

If you don't, things relying on a general contract for hashCode wont work like HashMap or HashSet

"The key provision that is violated when you fail to override hashCode is the second one: equal objects must have equal hash codes"

"A good hash function tends to produce unequal hash codes for unequal instances"

### Item 12: Always Override toString

If you don't override an object's toString, you will get ClassName@dsfsd. It's not very informative or helpful in what properties the object holds.

"Providing a good toString implementation makes your class more pleasant to use"

Should return all interesting info from the object

For value classes, one should format the return value in the documentation

Disadvantage to formatting it, you're stuck with that format if it's being used i the wild

Clearly document your intentions whether or not you specify the format

Example:
```
/**

 * Returns the string representation of this phone number.

 * The string consists of twelve characters whose format is

 * "XXX-YYY-ZZZZ", where XXX is the area code, YYY is the

 * prefix, and ZZZZ is the line number. Each of the capital

 * letters represents a single decimal digit.

 *

 * If any of the three parts of this phone number is too small

 * to fill up its field, the field is padded with leading zeros.

 * For example, if the value of the line number is 123, the last

 * four characters of the string representation will be "0123".

 */

@Override public String toString() {

    return String.format("%03d-%03d-%04d",

            areaCode, prefix, lineNum);

}
```

- Provide programmatic access to info contained in toString...aka dont make ppl parse the string returned for specific data.


### Item 13: Override Clone Judiciously

#### What does Cloneable Interface do?

Determines the behavior of Object's protected clone implementation: if a class implements it, the objects clone method should return a field by field copy of the object

"in practice, a class implementing Cloneable is expected to provide a properly functioning public `clone` method"

Immutable classes should never provide a clone method

"A better approach to copying, provide a copy constructor or factory"

"Given all the problems associated with Cloneable, new interfaces should not extend it, and new extendable classes should not implement it."


## Item 14: Consider Implementing Comparable



















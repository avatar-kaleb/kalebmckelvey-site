---
published: false
cover: /post-images/effective-java-review.jpg
date: 2021-02-08T20:42:56.834Z
title: Effective Java Review
canonical_url: ''
category: Tech
tags:
  - java
  - coding
  - best practices
---
# Preface

Learning a new program language is similar to learning a new language, you need to know the language structure or grammar, how to name things or vocab, and how to say them properly or usage. Programming requires to know the core of the language, like is it Object oriented or functional, it's data structures and operations provided in its standard libaries, and how to use them by structuring your code.

"The Java programming language, for example, is object-oriented with single inheritance and supports an imperative (statement-oriented) coding style within each method. The libraries address graphic display support, networking, distributed computing, and security..."

Additionally, programs change over time, so we must be able to easily modify the code by structuring it properly.

You can read: "The Java™ Language Specification by Gosling, Joy, yours truly, and Bracha." for the first two parts of learning the language, this book is for #3.

"I naturally think in terms of exported APIs (Application Programming Interfaces), and I encourage you to do likewise. Even if you aren’t developing reusable components, thinking in these terms tends to improve the quality of the software you write. Furthermore, it’s not uncommon to write a reusable component without knowing it: You write something useful, share it with your buddy across the hall, and before long you have half a dozen users."

He notes tihs is different then what's stated in something like _Extreme Programming_ since it would require flexible design for something not created yet.

## Introduction

### Standards
1. Clarity and simplicity are paramount
1. Components should be as small as possible but no smaller
1. Code should be re-used rather than copied
1. Errors should be detected as soon as possible after they are made

"Learning the art of programming, like most other disciplines, consists of first learning the rules and then learning when to break them."


### How things are referenced

"Class instances and arrays are objects; primitive values are not. A class’s members consist of its fields, methods, member classes, and member interfaces. A method’s signature consists of its name and the types of its formal parameters; the signature does not include the method’s return type."


#### Expanded Examples

https://github.com/jbloch/effective-java-3e-source-code

## Chapter 2: Creating and Destroying Objects

### Item 1: Consider Static Factory Methods Instead of Constructors

Instead of using constructors or in addition to them, you can create an object from the method:

```
public static Boolean valueOf(boolean b) {

    return b ? Boolean.TRUE : Boolean.FALSE;

}
```


#### Advantages:
1. Static methods have names

People will use two constructors with different orders as a workaround....but no, who remembers which is which? Names of static functions let you highlight differences.

2. Don't have to create a new object each time they're invoked

Immutable classes can use preconstructed instances or to cache instances once constructed...then dispense them repeatedly to avoid creating duplicate objects you dont need

`Boolean.valueOf(boolean) method illustrates this technique: it never creates an object. `

This can improve performance for expensive objects that are requested often

Allows classes to maintain strict control over what instances exists (called instance-controlled classes)

- can be a singleton or noninstantiable
- allows immutable classes to guarantee no two equal instances exists

3. Can return an object of any subtype of their return type

- API can return objects without making their classes public, leads to compact api....good for interface-based frameworks

The java.util.Collections return objects that are all nonpublic

Both the size of the api and its conceptual weight: (number and difficulty of concepts required to master to use it).

4. Class of the returned object can vary from call to call as a function of input params

- any subtype of the declared return type is allowed

5. Class of the returned object need not exist when the class containing the method is written

Basis of `service provider frameworks` like JDBC


####  Disadvantages:
1. Classes without public or protected constructors cannot be subclassed

- you are unable to subclass any of the convenience implementation classes in the Collections framework. He says this can be good because it encourages composition instead of inheritance

2. Hard for programmers to find
- don't stand out in API documentations like constructors do, so hard to figure out how to instantiate them

Use common naming conventions:
- `from` - type conversion method with single param and returns instance of type

- `of` - aggregation method that takes multiple params and returns an instance of this type

- `valueOf` - more verbose alternative to from and of

- `instance` or `getinstance` - returns instance that's described by the param but can't be said to have the same value

- `create` or `newInstance` - like `instance` but guarantees each call returns a new instance

- `getType` - like `getInstance`, but used if factory method is in a different class (type is the object returned`

- `newType` - like new instance, but used if factory method is in a different class, type og object returned by factory method

- `type` - concise alternative to get `Type` and `newType`

See chapter 1 item 1 for examples.

Static methods and public constructors both have uses - understand both sides. He says static factories are preferable in most cases, so avoid the reflex to provide public constructors without first considering static factories

### Item 2: Consider a Builder When Faced with Many Constructor Parameters

Static factories and constructors both are limited when trying to scale for large number of optional parameters.

Example used: Nutrition Facts on foods

#### Telescoping Constructor Pattern

- works but hard to write client code when there are many params...and harder to read it

- provide a constructor with only the required param, another with a single optional param, and third with two optional params, etc - combining in one constructor with all params:

```java
// Telescoping constructor pattern - does not scale well!

public class NutritionFacts {

    private final int servingSize;  // (mL)            required

    private final int servings;     // (per container) required

    private final int calories;     // (per serving)   optional

    private final int fat;          // (g/serving)     optional

    private final int sodium;       // (mg/serving)    optional

    private final int carbohydrate; // (g/serving)     optional

    public NutritionFacts(int servingSize, int servings) {

        this(servingSize, servings, 0);

    }



    public NutritionFacts(int servingSize, int servings,

            int calories) {

        this(servingSize, servings, calories, 0);

    }



    public NutritionFacts(int servingSize, int servings,

            int calories, int fat) {

        this(servingSize, servings, calories, fat, 0);

    }

    public NutritionFacts(int servingSize, int servings,

            int calories, int fat, int sodium) {

        this(servingSize, servings, calories, fat, sodium, 0);

    }

    public NutritionFacts(int servingSize, int servings,

           int calories, int fat, int sodium, int carbohydrate) {

        this.servingSize  = servingSize;

        this.servings     = servings;

        this.calories     = calories;

        this.fat          = fat;

        this.sodium       = sodium;

        this.carbohydrate = carbohydrate;

    }

}
```

Used like:
`NutritionFacts cocaCola = new NutritionFacts(240, 8, 100, 0, 35, 27);`

Invocations will require many params you don't want to set but you're forced to pass them in. This really becomes an annoyance as the number of parameters increase.


#### JavaBeans pattern

- call a parameterless constructor to create the object and then call setter methods to set each param


##### Disadvantages
- none of the disadvantages from the telescoping constructor pattern
- construction is split across multiple calls, so it may be in an inconsistent state partway through construction
- can't check validity by checking things in the constructor
- attempting to use the object in inconsistent state causes difficult to debug issues
- can't make classes immutable....technically you can if you "freeze" the object

```java
// JavaBeans Pattern - allows inconsistency, mandates mutability

public class NutritionFacts {

    // Parameters initialized to default values (if any)

    private int servingSize  = -1; // Required; no default value

    private int servings     = -1; // Required; no default value

    private int calories     = 0;

    private int fat          = 0;

    private int sodium       = 0;

    private int carbohydrate = 0;



    public NutritionFacts() { }


    // Setters

    public void setServingSize(int val)  { servingSize = val; }

    public void setServings(int val)    { servings = val; }

    public void setCalories(int val)    { calories = val; }

    public void setFat(int val)         { fat = val; }

    public void setSodium(int val)      { sodium = val; }

    public void setCarbohydrate(int val) { carbohydrate = val; }

}
```

used like:
```
NutritionFacts cocaCola = new NutritionFacts();

cocaCola.setServingSize(240);
```


#### Builder Pattern

##### Advantages

- combines the safety of Telescoping Constructor Pattern with the readability of the JavaBeans pattern called the `Builder` Pattern

- simulates named optional params like Python / Scala

- Client calls a constructor (or static factory) with required params and gets a builder object, ten calls setter like methds....then calls `build` to generate the object, which is typically immutable.

- you can add validity checks to the build method or to the set methods

- He has an example of it being suited for class hierarchies

##### Disadvantages
- have to create a builder everytime you're creating an object
- more verbose than telescoping constructor pattern, so only use it if theres a lot of params (tough part is knowing when that will be sometimes)...so he recommends starting out with it first because its hard to switch

```java
// Builder Pattern

public class NutritionFacts {

    private final int servingSize;

    private final int servings;

    private final int calories;

    private final int fat;

    private final int sodium;

    private final int carbohydrate;



    public static class Builder {

        // Required parameters

        private final int servingSize;

        private final int servings;



        // Optional parameters - initialized to default values

        private int calories      = 0;

        private int fat           = 0;

        private int sodium        = 0;

        private int carbohydrate  = 0;



        public Builder(int servingSize, int servings) {

            this.servingSize = servingSize;

            this.servings    = servings;

        }



        public Builder calories(int val)

            { calories = val;      return this; }

        public Builder fat(int val)

            { fat = val;           return this; }

        public Builder sodium(int val)

            { sodium = val;        return this; }

        public Builder carbohydrate(int val)

            { carbohydrate = val;  return this; }



        public NutritionFacts build() {

            return new NutritionFacts(this);

        }

    }



    private NutritionFacts(Builder builder) {

        servingSize  = builder.servingSize;

        servings     = builder.servings;

        calories     = builder.calories;

        fat          = builder.fat;

        sodium       = builder.sodium;

        carbohydrate = builder.carbohydrate;

    }

}
```

used like:
`NutritionFacts cocaCola = new NutritionFacts.Builder(240, 8).calories(100).sodium(35).carbohydrate(27).build();`


"The Builder pattern is a good choice when designing classes whose constructors or static factories would have more than a handful of parameters"


### Item 3: Enforce the Singleton Property with a Private Constructor or an Enum Type

Singleton - a class that's instantiated exactly once
- usually for stateless objects or a unique system component 

"Making a class a singleton can make it difficult to test"

#### Two Common Ways to Implement:

- both are based on keeping the constructor private and exporting a public static member to provide access to the sole instance

```java
// Singleton with public final field

public class Elvis {

    public static final Elvis INSTANCE = new Elvis();

    private Elvis() { ... }



    public void leaveTheBuilding() { ... }

}

// or
// Singleton with static factory

public class Elvis {

    private static final Elvis INSTANCE = new Elvis();

    private Elvis() { ... }

    public static Elvis getInstance() { return INSTANCE; }



    public void leaveTheBuilding() { ... }

}

//or
// Enum singleton - the preferred approach

public enum Elvis {

    INSTANCE;



    public void leaveTheBuilding() { ... }

}
```

^^ this looks safe, but privileged clients can invoke the priv constructor reflectively with AccessibleObject.setAccessible...you can throw an exception in the constructor if if someone tries to do this.


#### Public Field Advantages:
1. the API makes it clear its a singleton
1. It's Simpler

#### Static Factory Approach Advantages
1. gives you the flexibility to change your mind about it being a singleton without changing the API
1. Can create a generic singleton factory if your app requires it
1. A method erfence can be used as a supplier: ` Elvis::instance is a Supplier<Elvis>`

Unless one of these advantages is relevant....use public field approach

To make either of the above serializable, you must make each field `transient` and add a `readResolve` method to the class bc `implements serializable` will create multiple instances 

#### Enum Singleton Advantages:
1. more concise and provides serialization machinery for free
1. provides ironclad guarantee against multiple instantiation
1. a single element enum type is often the best way to implement a singleton

can't use this if the singleton must extend a superclass other than `Enum`

### Item 4: Enforce NonInstantiability with a Private Constructor

Why create a class that can't be instantiated?
1. group of static methods and fields to group related methods on primitive values or arrays, like java.lang.Math
1. group static methods (including factories) for objects that implement an interface
1. group methods on a final class

In Java, if you create a class without a constructor, the parameterless default constructor will be provided by the compiler - so then ppl can accidently create the class.

You can create a private one instead, which also prevents it from being extended:

```java
// Noninstantiable utility class

public class UtilityClass {

    // Suppress default constructor for noninstantiability

    private UtilityClass() {

        throw new AssertionError();

    }

    ... // Remainder omitted

}
```

### Item 5: Prefer Dependency Injection to Hardwiring Resources
- many classes depend on one or more underlying resources

"Static utility classes and singletons are inappropriate for classes whose behavior is parameterized by an underlying resource."

"What is required is the ability to support multiple instances of the class (in our example, SpellChecker), each of which uses the resource desired by the client (in our example, the dictionary). A simple pattern that satisfies this requirement is to pass the resource into the constructor when creating a new instance"

"This is one form of dependency injection: the dictionary is a dependency of the spell checker and is injected into the spell checker when it is created."

```java
// Dependency injection provides flexibility and testability

public class SpellChecker {

    private final Lexicon dictionary;



    public SpellChecker(Lexicon dictionary) {

        this.dictionary = Objects.requireNonNull(dictionary);

    }



    public boolean isValid(String word) { ... }

    public List<String> suggestions(String typo) { ... }

}
```

Don't use a singleton or static utility class to implement a class that depends on other resources that affects the class, do not have the class create them, instead pass the resources or factories to create them

### Item 6: Avoid Creating Unnecessary Objects

- reuse a single object instead of creating a new one with the same functionality every time you need it
- re-use is faster and more stylish
- objects can always be reused if its immutable

Example of what not to do:
`String s = new String("bikini");  // DON'T DO THIS!`

But instead do this:
`String s = "bikini";`

You can avoid creating unnecessary objects by using static factory methods over using constructors on immutable, for example:

`Boolean.valueOf(String)` over `Boolean(String)`

Constructor must create a new object, while the factory method is never required to do so

You can re-use mutable objects if you know they won't be modified



































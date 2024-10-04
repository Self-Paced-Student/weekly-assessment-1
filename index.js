'use strict';

// Weekly assessment 1 (1 hour)

// Start with the exercises in this file, then answer the questions
// that you find in "questions.md". If you're stuck on something,
// move on with the rest and come back to it after having completed
// the other parts. Obviously you can't look at any code outside
// of this folder, or check snippets from any source online

// Implement the following "underline" methods.
const _ = {};

// _.each(collection, iteratee, [context])
// Iterates over a collection of elements (i.e. array or object),
// yielding each in turn to an iteratee function, that is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
// Returns the collection for chaining.
_.each = (collection, iteratee, context) => {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            iteratee.call(context, collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            collection.hasOwnProperty(key) && iteratee.call(context, collection[key], key, collection);
        }
    }
    return collection;
};

// _.reduce(collection, iteratee, [accumulator], [context])
// Reduce boils down a collection of values into a single value.
// Accumulator is the initial state of the reduction,
// and each successive step of it should be returned by iteratee.
// Iteratee is passed four arguments: (accumulator, element, index|key, collection),
// and bound to the context if one is passed. If no accumulator is passed
// to the initial invocation of reduce, iteratee is not invoked on the first element,
// and the first element is instead passed as accumulator for the next invocation.
_.reduce = (collection, iteratee, accumulator, context) => {
    _.each(collection, (el, key) => {
        if (accumulator !== undefined) accumulator = iteratee.call(context, accumulator, el, key, collection);
        else accumulator = el;
      });
      return accumulator;
};

// _.bind(function, object)
// Binds a function to an object (obviously without using `bind`), meaning that whenever
// the function is called, the value of "this" will be the object. Returns the bound function.
_.bind = function (func, obj) {
    const boundArgs = Array.prototype.slice.call(arguments, 2); // (your could use the rest args operator in the outer function too)
    return function () {
      return func.apply(obj, [...boundArgs, ...arguments]);
    };
};

// _.memoize(func)
// Memoizes a given function by caching the computed result.
// Useful for speeding up slow-running computations.
// You may assume that the memoized function takes only one argument
// and that it is a primitive. Memoize should return a function that when called,
// will check if it has already computed the result for the given argument
// and return that value instead of recomputing it.
_.memoize = func => {const cache = {};
    return arg => {
    cache.hasOwnProperty(arg) || (cache[arg] = func(arg));
    return cache[arg];
    };
};

// Now, using the pesudo-classical approach, create a class named
// "UnderCollections" that has a property named "libraryDesc",
// and includes the collection methods you just implemented above
// (i.e. each and reduce).

// Then, create a sub-class of "UnderCollections" named
// "UnderFunctions" that includes the function methods
// you implemented here above (i.e. bind and memoize).

// Finally, assign an instance of UnderCollections to "_.underCollections",
// with the value "collections" as "libraryDesc", and an instance of UnderFunctions
// to "_.underFunctions" with the value "functions" as "libraryDesc".

module.exports = _;

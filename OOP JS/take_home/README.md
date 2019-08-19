I assumed that that the application isn't user-facing, and any input validation would be performed in a separate user-interface application.  Therefore all methods are implemented assuming good input.

Given the above assumption, I tried to provide meaningful return values for the todoList object methods.  For methods that return arrays, I assumed that a user-interface application could check the length of the returned array to perform validation.
For the methods that take ids and return objects, I either returned the acted-upon object for a successful operation, or an object with a property 'Invalid id' set to true, upon which the interface application could perform validation.

I assumed that 'Shared Methods' in the description of the todo object meant that those methods are defined on the prototype object and not on the instances themselves.

I faced some tradeoffs designing the month-year behavior of the todoManager. According to the specifications, the todoManager object shouldn't be able to manipulate todo objects directly, so I only gave it access to copies of the todo objects, which don't have a prototype link to the original todo object.  This means that these copies can't delegate the isWithinMonthYear behavior to their prototype objects.  Since the todoManager can't access the collection of original todo objects directly, any behavior that relies on isWithinMonthYear has to be defined on the todoList object, which does have that access.  This leads to some redundancy between methods on todoList and todoManager.  The upside is avoiding a redundant copy of isWithinMonthYear on each instance of a todo.


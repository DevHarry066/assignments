useCallback function is being used to have a function which does not get recreated(duplicate) when the page loads and use the same function which was declared before.

In Normal case without callback function, the function will be recreated(duplicate) each time the page loads.
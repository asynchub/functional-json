# ⚡ thunderscore ⚡
lets write math, for json, because, reasons

    This module while being serious, and hopefully seriously useful, is full of humour, very crude humour

    What you can expect, when expecting:
        1. JSON Addition { a : 1, b : 2} + { a : 2, : b : 3} => { a : 3, b : 5}
        2. JSON Subtraction { a : 1, b : 2} - { a : 2, : b : 3} => { a : -1, b : -1}
        3. JSON Division { a : 1, b : 2} / { a : 2, : b : 3} => { a : 1/2, b : 2/3}
        4. JSON Multiplication { a : 1, b : 2} * { a : 2, : b : 3} => { a : 2, b : 6}
        5. JSON Operation ^^ basically All of the above but choose your own adventure
        7. toArray { a : 2, b : 3 } => [2, 3]
        8. toMap  [{ a : 2, b : 3 }, { a : 4, b : 7}] => { 3: {a : 2,  b: 3 }, 7 : { a: 2, b: 7 }}
        9. hierarchy => turns children into parents, keeps relationship alive
        10. toHierarchy => turns flat list into hierarchy
        11. intersection
        12. union
        13. formula => words cannot describe, please see api.md, think json turing machine or something


  Reasons:
    Javascript is lacking functionality, that doesnt exist anywere else, but should, because data is data, is data



    Why I build this:
        Too many days at work do I have to write functions for doing stupid, stupid things
        Too many times are these stupid stupid things, replicated in areas of code
        Too many times interns write these helpers with bad practices, and that makes me sad
        Too many times have I stayed up late at night, looking at bad code, that makes me cry, on the inside



    I'd like to comment, about my comments:
        1. these are a programmer, being a comedian
        2. I'd like to also think I am a magician
        3. If you don't like some code, either write a pull request, or dont use this library
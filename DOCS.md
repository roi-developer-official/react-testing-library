which query you should use
https://testing-library.com/docs/queries/about/#priority
role definition
https://www.w3.org/TR/wai-aria/#role_definitions

options in jest dom
https://github.com/testing-library/jest-dom

unit testing functions
* functions separate from components.
  * used by sevral components
  * complex logic
* unit test if
  * conmplex logic difficult to test via functional tests.
  * to many edge cases.

screen query methods
* get: expect the element to be in the DOM
* query: expect the element not to be in the DOM
* find: expect the element to appear async
[All]
* (exclude) expect only one match
* (include) expect more than one match

getBy
getAllByText
queryBy
queryAllByAltText


queryType:
* Role (most preferred)
* AltText (images)
* Text (display elements)
Form elements:
* PlaceholderText
* LabelText
* DisplayValue




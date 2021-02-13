# Report

## Overview
For this project I used vanilla React with very few third party libraries (although I did mess around with a few during development).
Routing is handled by React-Router, and the CSS uses the Sass pre-processor. It was actually my first time using Sass, 
so please be kind if the CSS is a little whack.

## Starting out
I began with the usual: clean up the project defaults and set up Eslint.
I generated some fake email data from generatedate.com, and saved it as JSON.
Next, I implemented some very skeletal components to handle the mock data, as well set up some basic routing with react-router-dom.
This basically involved some basic useState hooks in the App component, as well as useEffect to load in the mock data.
That done, it was time to start rolling on the main view components. I began with the table view for desktops.

## The Table
Making the table was a simple map function, but the styling held its share of tricky details.
In the beginning, I decided to try out a Bootstrap Table component to see how I liked it, but found that it
wasn't close enough to the vision of the designers. In the end, I scrapped in it favor of hand-tuned CSS.
I think I went a little overboard with nesting when I wrote the CSS, but overall I think the table looks pretty decent.
I even went as far as changing the svg icon's fill value so it turns blue on hover. Not bad.

## The Date Picker
Early on, I messed around with a few options. I ended up using a pair of Material-UI pickers for a little while,
but, similar to the Bootstrap table, they didn't meet the design spec. In the end, I used a simple form with CSS styling
to achieve the look the designers wanted. The simple text input uses the pattern attribute to guard the form with regex pattern matching,
ensuring the user types in a format that can be parsed by the handleDateRangeChange function. I refactored initializing the date range
into a function so when the user clears the input the app returns to the lowest and highest dates present in the data sample.
Filtering is done using the Array.filter function.

## Sorting
This one is kind of neat (I think, anyway). I created a sortKey object in the state, where the key value is one of Object.keys(email).
This object is then passed to a utility function which returns a sorting algorithm depending on the key and the boolean isAscending.
When the user clicks on one of the headers, handleSortKeyChange is called with appropriate object key (e.g. handleSortKeyChange('date')),
which then updates the state. Once the state is changed, getSortAlgorithm is called with the new state object, and an updated sort algorithm is returned.
Sorting is done using the Array.sort function.

## Finishing Up
The major logic out of the way, I finished off styling the Desktop view, moved on the the email detail view, and ended with the mobile view.
The mobile view was quite different from the table-styled desktop view, and I found that using flexbox was a huge benefit here. Many levels of divs in this component,
and again I may have gone overboard with CSS nesting. Remaining faithful to the designer's vision was the most important part of these final steps for me.

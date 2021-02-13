# Improvements

## Date Pickers

Over the course of this project, I experimented with using Material-UI date pickers.
I ended up scrapping them, since they didn't fit the UI design,
however, I do think the workflow is a little better for the user *with* the date pickers.
Typing the dates is a bit more tedious, but at least we can use regex to validate the user's input.

## Theme

I like the light gray theme the designers came up with, and I used a color picker utility
to remain as faithful as possible to the original design. A dark mode theme might be
a little overboard for an app that's probably used by auditors, but it could be fun to implement.

## Opening Emails in a New Tab

This one probably wouldn't be very good for the mobile view, but one thing I was interested in
was opening emails in separate tabs using window.open(<link>, '_blank'). I found that this was tricky to do
because of state issues, but it's something I'd like to keep working at.

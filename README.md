# Week-04 Assignment

## Summary
This week you’re going to make a ‘Guestbook’, like the ones in hotels, for users to leave a message for other users. 

### Basic Requirements

    🎯 Ensure your HTML form is working and submitting data into the database as expected.
        This functioning as expected.
    🎯 Confirm that your project is functional on multiple screen sizes using either Responsive Design or media queries.
        This is functional on multiple screen sizes although due to its design, there was no need for any particular focus on its responsiveness. It was designed for a mobile, but is appropriate for a wide screen too.
    🎯 Create a working GET API route in your server.
        Completed.
    🎯 Create a working POST API route in your client.
        Completed.
    🎯 Seed your database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in your server. Ensure that this is saved and submitted (in a screenshot or seed file form) so it can be marked and tested efficiently.
        Completed. 'seed.js' uploaded. Run with 'npm run seed'.

### Stretch Requirements

    🏹 Provide additional functionality on the form, for example, by adding form validation or other options.
        - Required fields activated to ensure no blank fields.
        - When inserting data from server, anti sql injection methods used.
    🏹 Style the page excellently, for example, by adding extra UX considerations or animations.
        - Submit button jumps out when hover, and depresses on active.
    🏹 Add a delete button to each message and a DELETE route in the server.
        Completed with button refresh included for delete and submit.
    🏹 Create an option for users to like others’ posts.
        .

## Writing the code

I used a number of sources to help the code: being
- MDN for help with GET code for main.js.
- MDN for help with try-catch statements.
- Moodle for help with GET/POST statements for server.js and POST for main.js.
- Demo for help with GET/POST statements for server.js.
- Stackoverflow and dev.to for the delete method.
- Geeks for geeks for multiple lines of json for json.stringify().
The rest and piecing it together, I did.

## Debugging

I used a number of different techniques, from inserting console.error messages into the code, asking for help, and asking chatGPT for help with error codes. ChatGPT was actually of little help in this assignment as it did not recognise that I had inserted the client url into the main.js script and so misled me to think my error was in my server.js. I eventually isolated the bug to be in my main.js, and then looked at the only connecting feature in there, the url, and it dawned on me there were 2 options, not one. I then realised what I had done and why the errors were pointing at server.js, and why the data was not being fetched. 

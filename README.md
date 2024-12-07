# Elevator test

This is a repo documenting my attempts at building an elevator system.

## Setup

There's no front-end for this take currently. To run a result, use `node` to run `app.js`, you'll receive a response from `scenarioA`.

## Caveats

Currently, the queue system only travels upward, and there is no direction being defined. When the elevator reaches it's max, it'll go right back down to the floor and climb back up to the first number available.

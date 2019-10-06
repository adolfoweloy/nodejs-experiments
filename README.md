## Studying NodeJS + Javascript

I've created this project just to track my progress with NodeJS + Javascript.
This repository contains some experiments done with NodeJS + Javascript.

## Why I started studying NodeJS?

As a backend developer for some years, I stopped doing front-end in 2013.
I want to expand my knowledge to front end lands and get able to be a fullstack engineer again.
So why NodeJS? That's because I want to go deep in JS for FE (Front End) and as a backend developer,
it's easier to practice Javascript in the backend! 

I can explore the concepts of event loop deeply at the backend side as well as to understand some interesting libraries such as nodemon, babel, etc.

Using babel, I can use transpilers and play with ES6!

## How to track the progress?

I will try to track my progress through commit messages.

## Topics (folders)

### native-http
This allowed myself to practice the basics of NodeJS, exporting and using modules, file system, and creating a server using just native modules.
It also raised my concern about using sync vs async calls and the implications for JS/NodeJS.
It was also a good exercise to understand hoisting, let, var, const and why it's needed something better to manage callbacks than simply keep nesting them.

### async-model
As I got curious about async vs sync model, I started trying some experiments to check the behaviour when calling an endpoint that in turn executes an IO operation over the network in an asynchronous model. This allowed to see that by doing that async, NodeJS can accept/process new requests without being blocked (I wanted to see with my own eyes).

If you want to check a really good explanation about the event loop, this is the best explanation I found:
https://www.youtube.com/watch?v=8aGhZQkoFbQ

# Firebase Asynchronous Data Access Issue

This repository demonstrates a common error when working with Firebase's asynchronous data fetching methods.  The problem arises when trying to access document snapshot properties before the data has completely loaded.  The solution provided ensures data is properly accessed after the promise resolves.
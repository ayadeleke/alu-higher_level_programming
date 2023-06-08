#!/usr/bin/node

const { dict } = require('./101-data');
function computeUserIdsByOccurrence (dict) {
  const userIdsByOccurrence = {};

  for (const [userId, occurrence] of Object.entries(dict)) {
    if (!(occurrence in userIdsByOccurrence)) {
      userIdsByOccurrence[occurrence] = [];
    }

    userIdsByOccurrence[occurrence].push(userId);
  }

  return userIdsByOccurrence;
}

const userIdsByOccurrence = computeUserIdsByOccurrence(dict);

console.log(userIdsByOccurrence);

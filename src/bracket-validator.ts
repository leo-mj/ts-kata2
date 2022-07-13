function validate(brackets) {
  if (unevenTotalOrPrematureCloser(brackets)) {
    return false;
  } else if (enclosedOpener(brackets)) {
    return false;
  }
  return true;
}

export default validate;

function unevenTotalOrPrematureCloser(brackets) {
  if (unevenOrPrematureByType(brackets, "(", ")")) {
    return true;
  } else if (unevenOrPrematureByType(brackets, "[", "]")) {
    return true;
  } else if (unevenOrPrematureByType(brackets, "{", "}")) {
    return true;
  }
  return false;
}

function unevenOrPrematureByType(brackets, opener, closer) {
  let openerCount = 0;
  let closerCount = 0;
  for (let bracket of brackets) {
    if (bracket === opener) {
      openerCount++;
    } else if (bracket === closer) {
      closerCount++;
    }
    if (closerCount > openerCount) {
      return true;
    }
  }
  if (openerCount != closerCount) {
    return true;
  }
  return false;
}

function enclosedOpener(brackets) {
  let bracketsArray = brackets.split(" ");
  let bracketsNoSpaces = bracketsArray.join("");
  for (let i = 0; i < bracketsNoSpaces.length; i++) {
    if (isEnclosedByType(bracketsNoSpaces, i, "(", ")")) {
      return true;
    } else if (isEnclosedByType(bracketsNoSpaces, i, "[", "]")) {
      return true;
    } else if (isEnclosedByType(bracketsNoSpaces, i, "{", "}")) {
      return true;
    }
  }
  return false;
}

function isEnclosedByType(brackets, i, opener, closer) {
  let bracket = brackets[i];
  if (bracket != opener) {
    return false;
  }
  let nextBracket = brackets[i + 1];
  let closers = [")", "]", "}"];
  let enclosingClosers = closers.filter((type) => type != closer);
  if (enclosingClosers.includes(nextBracket)) {
    return true;
  }
  return false;
}

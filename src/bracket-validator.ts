function validate(brackets: string): boolean {
  if (unevenTotalOrPrematureCloser(brackets)) {
    return false;
  } else if (enclosedOpener(brackets)) {
    return false;
  }
  return true;
}

export default validate;

function unevenTotalOrPrematureCloser(brackets: string): boolean {
  if (unevenOrPrematureByType(brackets, "(", ")")) {
    return true;
  } else if (unevenOrPrematureByType(brackets, "[", "]")) {
    return true;
  } else if (unevenOrPrematureByType(brackets, "{", "}")) {
    return true;
  }
  return false;
}

function unevenOrPrematureByType(
  brackets: string,
  opener: string,
  closer: string,
): boolean {
  let openerCount = 0;
  let closerCount = 0;
  for (const bracket of brackets) {
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

function enclosedOpener(brackets: string): boolean {
  const bracketsArray: string[] = brackets.split(" ");
  const bracketsNoSpaces: string = bracketsArray.join("");
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

function isEnclosedByType(
  brackets: string,
  i: number,
  opener: string,
  closer: string,
): boolean {
  const bracket: string = brackets[i];
  if (bracket != opener) {
    return false;
  }
  const nextBracket: string = brackets[i + 1];
  const closers: string[] = [")", "]", "}"];
  const enclosingClosers: string[] = closers.filter((type) => type != closer);
  if (enclosingClosers.includes(nextBracket)) {
    return true;
  }
  return false;
}

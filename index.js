function takeANumber(katzDeliLine, otherKatz) {
  katzDeliLine.push(otherKatz);
  return `Welcome, ${otherKatz}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `The is currently empty.`;
  } else {
    for (var i = 0; i < line.length; i++) {
      katzDeliLine.push(`${i+1}. ${katzDeliLine[i]}`);
    }
  return `The line is currently: ` + katzDeliLine;
  }
}
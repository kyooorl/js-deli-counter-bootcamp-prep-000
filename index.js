var katzDeliLine = [];

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

var line = [];
function currentLine(line) {
  if (line.length === 0) {
    return `The is currently empty.`;
  } else {
    for (var i = 0; i < line.length; i++) {
      line.push(`${i+1}. ${line[i]}`);
    }
  return `The line is currently: ` + line;
  }
}
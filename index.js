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
const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let myAnswer = record.find(function(e) {return e.result === 'W'})
  if (myAnswer){
    return myAnswer['year']
  } else myAnswer
}
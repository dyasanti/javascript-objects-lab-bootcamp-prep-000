var recipes = {
  key: 'value'
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
<<<<<<< HEAD
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
=======
  delete Object.assign({}, object)[key];
  return object 
>>>>>>> 34466eb86b30c7b33b76f3a8daa98fdf87aaf5e8
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

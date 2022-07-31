function vowelTest(c)
{
  switch(c) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    case 'a':
    case'e':
    case'i':
    case'o':
    case'u':
    return true;
      break;  
      
    default:
    return false;     
  }  
}

console.log(vowelTest('Z'));

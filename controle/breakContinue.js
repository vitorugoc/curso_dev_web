const arr = [1, 2, 3, 4, 5, 6 , 7]
// for(i in arr){
//   if(arr[i] == 4){
//     break;
//   }
//   console.log(arr[i])
// }

for(i in arr){
  if(arr[i] == 4){
    continue;
  }
  console.log(arr[i])
}

externo: for(i in arr){
  for(x in arr){
    if(x == 2){
      break externo;
    }
    console.log(x)
  }
}

 let compare = function (a,b){
  let c=[];
  c[0]=0;
  c[1]=0;
  for (let i=0;i<3;i++){
      if (a[i]>b[i]){
      c[0]+=1;
  }
  if (a[i]<b[i]){
      c[1]+=1;
  }
  }
return c;
 }

 a = [10, 2, 30]
b = [3, 20, 1];

console.log(compare(a,b))
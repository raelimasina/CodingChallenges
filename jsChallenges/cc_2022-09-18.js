function isTriangle(a,b,c)
{
  if(a>0 && b>0 && c>0 && a+b>c && a+c>b && b+c>a){
    return true;
  }
   return false;
}
/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var k, c, b, n, i;
  c = 0;
  i = 0;
      for (n = 0; n < preferences.length; n++){
        i = 0;
        b = n;
        k = preferences [n]; 
          while (k != n+1 && i < 4){
          k = preferences [b];     
          b = k-1;
          i ++;
               };
                  if (i == 3){
                  c ++;
                  };
      };
  return c/3;
};

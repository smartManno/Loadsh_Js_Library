const _ = {
    clamp(number,lower, upper){
      const lowerClampValue = Math.max(number, lower);
      const ClampValue = Math.min(lowerClampValue, upper);
      return ClampValue;
    },
// inRange() implemention

     inRange(number,start,end){
          
        // for(let i=start; i< end; i++){
          if(start > end){
         let temp = start;
        start = end;
        end = temp;
          if(number >= start ||number < end){
            return true;
          }
          else{
            return false;
          }
        }
        else if (end === undefined) {
          end = start;
          start = 0;
          if(number >= start ||number < end){
            return true;
          }
          else{
            return false;
          }
        }
        else if(number < start || number >= end){
          return false;
        }
        else if(number >= start && number < end){
              return true;
        } 
        else{
          return false;
        } 
    
        },

        words(string){
          const stringArr = string.split(' ');
          return stringArr;
        },

        pad(string, len){
          if(len <= string.length){
            return string;
          }
          const startPaddingLength = Math.floor((len - string.length)/2);
          const endPaddingLength = len - string.length - startPaddingLength;
          const paddedString = ' '.repeat(startPaddingLength) + string +' '.repeat(endPaddingLength);
          return paddedString;
        },

        has(object,key){
          const hasValue = object[key] !== undefined
          return hasValue; 
        
      },

      invert(object){
        const invertedObject = {};
        for(let key in object){
          //invertObj =`${object[property]}:${property}`;
          originalValue = object[key]; // puting values in the place of keys
          invertedObject[originalValue] = key; // puting key in thr place of values
          
        }
        return invertedObject;
      },

      findKey(object, predicate){
        for( let key in object){
          const value = object[key];
          const predicateReturnValue = predicate(value);
          if(predicateReturnValue){
            return key;
          }
        }
        return undefined;
      },

      drop(arr,n){
        const newArr=[];
        if(n === undefined){
          for(let i = 1; i <arr.length; i++ ){
              for(let j=0; j<arr.length-1; j++ ){
                  newArr[j] = arr[i];
              } 
          }
          return newArr;
        }
        else {
          for(let i = arr.length-1; i >=n-1; i-- ){
              for(let j=0; j<arr.length-n; j++ ){
                  newArr[j] = arr[i];
                  i--;
              } 
          }
          return newArr;
        }
      },

        dropWhile(array, predicate) {
           const dropNumber = array.findIndex((element, index) => {
             return !predicate(element, index, array)
           })
          const newArr = this.drop(array,dropNumber);
          return newArr;
        },

        chunk(array, size) {
          if(size === undefined ){
            size = 1;
          }
          const arrayChunks = [];
          for(let i = 0; i< array.length; i+=size){
            let arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
          }
          return arrayChunks;
        }
      
};




// Do not write or modify code below this line.
module.exports = _;
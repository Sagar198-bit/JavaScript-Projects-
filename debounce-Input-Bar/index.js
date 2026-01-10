const withoutdebouncefunc = document.getElementById("input-search-one");
let counter = 0;
withoutdebouncefunc.addEventListener("keyup", (e) => {
  console.log(
    `Search without debounce:  ${e.target.value} and count is ${counter++}`
  );
});

//debounce functions ......

const withdebouncefunc = document.getElementById("input-search-two");

function debounceFunc(func, delay) {
  let timerid;
  return (...args) => {
    clearTimeout(timerid);
    timerid = setTimeout(() => {
      func(...args);
    }, delay);
  };
} //this function is debounce function .....

function Callbackfunc(e) {
  console.log(`Search ${e.target.value}`);
}

const magicfunc = debounceFunc(Callbackfunc, 1000);

withdebouncefunc.addEventListener("keyup", magicfunc);

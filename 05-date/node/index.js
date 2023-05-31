const date = new Date();
console.log(date);
console.log(date.getTime());
console.log();

/* Region specific */
const enDate = new Intl.DateTimeFormat("en-US").format(date);
const daDate = new Intl.DateTimeFormat("da-DK").format(date);
const deDate = new Intl.DateTimeFormat("de-DE").format(date);

// log region specific dateTimeFormats
console.log("======== Region specific dateTimeFormats =========");

console.log(deDate);
console.log(enDate);
console.log(daDate);

// get language name from country code in country language
const regionNames = new Intl.DisplayNames(['de'], { type: 'region' });

console.log("======== Region specific language names =========");
console.log(regionNames.of('US')); 
console.log(regionNames.of('DK')); 
console.log(regionNames.of('SE')); 


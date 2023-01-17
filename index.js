const axios = require('axios');
const { Telegraf } = require('telegraf');

let binarysearch = `
// Iterative function to implement Binary Search
let iterativeFunction = function (arr, x) {

	let start=0, end=arr.length-1;
		
	// Iterate while start not meets end
	while (start<=end){

		// Find the mid index
		let mid=Math.floor((start + end)/2);

		// If element is present at mid, return True
		if (arr[mid]===x) return true;

		// Else look in left or right half accordingly
		else if (arr[mid] < x)
			start = mid + 1;
		else
			end = mid - 1;
	}

	return false;
}

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (iterativeFunction(arr, x, 0, arr.length-1))
	document.write("Element found!<br>");
else document.write("Element not found!<br>");

x = 6;

if (iterativeFunction(arr, x, 0, arr.length-1))
	document.write("Element found!<br>");
else document.write("Element not found!<br>");								
`;



const bot = new Telegraf('5795027843:AAFhv7yMH8JCAZuhf9lbLhiNjXVRbHa_OpM');

bot.start((ctx) => ctx.reply('Welcome to the bot!'));
bot.command('binarysearchjs', (ctx) => ctx.reply(binarysearch));
bot.command('whomadethis', (ctx) => ctx.reply('Made by rittik'));


bot.command('day1', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day1%20of%20%23100daysofcode%20-%20Reverse%20Integer');
    return ctx.reply(response.data);
})

bot.command('day2', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%202%20of%23100daysofcode%20-%20Duplicate%20in%20array');
    return ctx.reply(response.data);
})

bot.command('day3', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%203%200f%20%23100daysofcode%20-%20Intersection%20of%202%20arrays');
    return ctx.reply(response.data);
})

bot.command('day4', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%204%200f%20%23100daysofcode%20-%20last%20occurrence%20of%20given%20element');
    return ctx.reply(response.data);
})

bot.command('day5', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%205%200f%20%23100daysofcode%20-%20Pair%20Sum');
    return ctx.reply(response.data);
})

bot.command('day6', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%206%200f%20%23100daysofcode%20-%20classes%20and%20object%20in%20java');
    return ctx.reply(response.data);
})

bot.command('day7', async function(ctx){
    const response = await axios.get("https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%207%200f%20%23100daysofcode%20-%20Sort%200's%20and%201's");
    return ctx.reply(response.data);
})

bot.command('day8', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day8%20-of100daysofcode%20-peek%20index%20in%20an%20mountain%20array');
    return ctx.reply(response.data);
})

bot.command('day9', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%209%200f%20100daysofcode%20-%20swapping-alternate-element-of-array');
    return ctx.reply(response.data);
})

bot.command('day10', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2010%200f%20%23100daysofcode%20-%20decimal%20to%20binary%20and%20binary%20to%20decimal%20conversion');
    return ctx.reply(response.data);
})

bot.command('day11', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2011%200f%20%23100daysofcode%20%20-%203%20Sum');
    return ctx.reply(response.data);
})

bot.command('day12', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/day12%20of%20%23100daysofcode-%20%20Pivot%20in%20an%20Sorted%20%26%20Rotated%20Array%20using%20Binary%20Search');
    return ctx.reply(response.data);
})

bot.command('day13', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2013%20of%20%23100daysofcode%20-Search%20In%20Rotated%20Sorted%20Array');
    return ctx.reply(response.data);
})

bot.command('day14', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2014%20of%20%23100daysofcode%20-%20merge%20two%20sorted%20arrays%20.');
    return ctx.reply(response.data);
})

bot.command('day15', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2015%20%23100daysofcode-Unde%20root%20of%20a%20number%20with%20decimal%20point%20precision');
    return ctx.reply(response.data);
})

bot.command('day16', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2016%20of%20%23100daysofcode%20-%20Binary%20search%20advance%20questions');
    return ctx.reply(response.data);
})

bot.command('day17', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2017%20of%20%23100daysofcode%20%20-%20bubble%20sort');
    return ctx.reply(response.data);
})

bot.command('day18', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2018%20of%20%23100daysofcode%20-%20Rotate%20an%20array');
    return ctx.reply(response.data);
})

bot.command('day19', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2019%200f%20%23100daysofcode%20-%20check%20array%20is%20sorted%20or%20rotated');
    return ctx.reply(response.data);
})

bot.command('day20', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2020%20of%23100daysofcode%20-%20sum%20of%20two%20arrays');
    return ctx.reply(response.data);
})

bot.command('day21', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2021%20of%20%23100daysofcode%20-%20Reverse%20String');
    return ctx.reply(response.data);
})

bot.command('day22', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2022%20of%20%23100daysofcode%20-%20Valid%20Palindrome');
    return ctx.reply(response.data);
})

bot.command('day23', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2023%20of%20%23100daysofcode%20%20-%20Maximum%20Occuring%20Character');
    return ctx.reply(response.data);
})

bot.command('day24', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2024%200f%20%23100daysofcode%20%20-%20%20Replace%20Spaces');
    return ctx.reply(response.data);
})

bot.command('day25', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2025%200f%20%23100daysofcode%20-%20Remove%20All%20Occurrences%20of%20a%20Substring');
    return ctx.reply(response.data);
})

bot.command('day26', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2026%200f%20%23100daysofcode%20-%20STL%20(vectors)');
    return ctx.reply(response.data);
})

bot.command('day27', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2027%200f%20%23100daysofcode%20-%20largest%20row%20and%20largest%20column%20sum%20in%202D%20array');
    return ctx.reply(response.data);
})

bot.command('day28', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2028%200f%20%23100daysofcode%20-%20Print%20Like%20A%20Wave');
    return ctx.reply(response.data);
})

bot.command('day29', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2029%200f%20%23100daysofcode%20-%20Spiral%20Matrix');
    return ctx.reply(response.data);
})

bot.command('day30', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2030%200f%20%23100daysofcode%20-%20%20Search%20a%202D%20Matrix');
    return ctx.reply(response.data);
})

bot.command('day31', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2031%200f%20%23100daysofcode%20-%20%20Search%20a%202D%20Matrix%20II');
    return ctx.reply(response.data);
})

bot.command('day32', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2032%200f%20%23100daysofcode%20-%20Count%20Primes');
    return ctx.reply(response.data);
})

bot.command('day33', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2033%200f%20%23100daysofcode%20-%20GCD%20and%20LCM%20of%202%20numbers');
    return ctx.reply(response.data);
})

bot.command('day34', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2034%200f%20%23100daysofcode%20-%20POINTERS%20IN%20C%2B%2B');
    return ctx.reply(response.data);
})

bot.command('day35', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2035%200f%20%23100daysofcode%20-%20POINTERS%20IN%20ARRAY%20%2CCHARACTER%20ARRAY%20AND%20FUNCTIONS');
    return ctx.reply(response.data);
})

bot.command('day36', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2036%200f%20%23100daysofcode%20-%20double%20pointers');
    return ctx.reply(response.data);
})

bot.command('day37', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2037%200f%20%23100daysofcode%20-%20functions');
    return ctx.reply(response.data);
})

bot.command('day38', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2038%200f%20%23100daysofcode%20-%20promises%20in%20javascript');
    return ctx.reply(response.data);
})

bot.command('day39', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2039%200f%20%23100daysofcode%20-%20pointer%20and%20array%20hackerrank%20questions');
    return ctx.reply(response.data);
})

bot.command('day40', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2040%200f%20%23100daysofcode%20-%20AWT%20in%20java');
    return ctx.reply(response.data);
})

bot.command('day41', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2041%200f%20%23100daysofcode%20-%20AWT%20in%20java');
    return ctx.reply(response.data);
})

bot.command('day42', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2042%200f%20%23100daysofcode%20-%20Recursion%20in%20C%2B%2B');
    return ctx.reply(response.data);
})

bot.command('day43', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2043%200f%20%23100daysofcode%20-%20%20Fibonacci%20Number%20using%20Recursion%20in%20C%2B%2B');
    return ctx.reply(response.data);
})

bot.command('day44', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2044%200f%20%23100daysofcode%20-%20%20MergeSort');
    return ctx.reply(response.data);
})

bot.command('day45', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2045%200f%20%23100daysofcode%20-%20%20Insertion%20In%20Heap');
    return ctx.reply(response.data);
})

bot.command('day46', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2046%200f%20%23100daysofcode%20-%20%20Deletion%20In%20Heap');
    return ctx.reply(response.data);
})

bot.command('day47', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2047%200f%20%23100daysofcode%20-%20%20max%20heap');
    return ctx.reply(response.data);
})

bot.command('day48', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2048%200f%20%23100daysofcode%20-%20%20SayDigits');
    return ctx.reply(response.data);
})

bot.command('day49', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2049%200f%20%23100daysofcode%20-%20%20Best%20Time%20to%20Buy%20and%20Sell%20Stock');
    return ctx.reply(response.data);
})

bot.command('day50', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2050%200f%20%23100daysofcode%20-%20%20Array%20is%20sorted%20or%20unsorted%20using%20recursion%20%20and%20Find%20Pivot%20Index');
    return ctx.reply(response.data);
})

bot.command('day51', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2051%200f%20%23100daysofcode%20-%20%20sum%20of%20array%20elements%20using%20recursion%20and%20Running%20Sum%20of%201d%20Array');
    return ctx.reply(response.data);
})

bot.command('day52', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2052%200f%20%23100daysofcode%20-%20%20Linear%20Search%20using%20recursion');
    return ctx.reply(response.data);
})

bot.command('day53', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2053%200f%20%23100daysofcode%20-%20%20BinarySearch%20using%20recursion');
    return ctx.reply(response.data);
})

bot.command('day54', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2054%200f%20%23100daysofcode%20-%20%20BUY%20and%20sell%20stocks%20II%20%26%20Rev%20string%20using%20recursion');
    return ctx.reply(response.data);
})

bot.command('day55', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2055%200f%20%23100daysofcode%20-%20string%20is%20palindrome%20or%20not%20%20using%20recursion.');
    return ctx.reply(response.data);
})

bot.command('day56', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2056%200f%20%23100daysofcode%20-%20power%20of%20a%20number%20using%20recursion');
    return ctx.reply(response.data);
})

bot.command('day57', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2057%200f%20%23100daysofcode%20-%20Sort%20Colors');
    return ctx.reply(response.data);
})

bot.command('day58', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2058%200f%20%23100daysofcode%20%20Subsets-');
    return ctx.reply(response.data);
})

bot.command('day59', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2059%200f%20%23100daysofcode%20-Subsequences%20of%20String');
    return ctx.reply(response.data);
})

bot.command('day60', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/AgentRittik/daily-progress/main/Day%2060%200f%20%23100daysofcode%20-%20Phone%20Keypad%20Problem.');
    return ctx.reply(response.data);
})



bot.on('sticker', (ctx) => ctx.reply('👍'));


bot.launch();